/**
 * 診断士 PassPro - Core Application Logic
 * Commercial Edition: Spaced Repetition (SM-2), Real Mock Exam Engine,
 * Elimination Cross-out Tool, Pass Prediction Algorithm & Cutoff Checker.
 */

const STORAGE_KEY = 'shindanshi_passpro_store_v2';

// Application State
let state = {
  currentView: 'viewHome',
  fontScale: 1.0,
  selectedYear: 'all',
  history: loadHistoryData(),
  session: {
    mode: 'subject', // 'subject' | 'mock' | 'weakness' | 'anki'
    subjectId: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    timerSeconds: 0,
    timerId: null,
    eliminated: new Set(), // Set of option indices crossed out
    subjectResults: {}     // subId -> { correct, total }
  }
};

// DOM References
const ui = {
  // Shell & Navigation
  btnHeaderBack: document.getElementById('btnHeaderBack'),
  appNavTabs: document.getElementById('appNavTabs'),
  mobileBottomTabs: document.getElementById('mobileBottomTabs'),
  toastNotification: document.getElementById('toastNotification'),
  
  // Header Meters
  topPassGrade: document.getElementById('topPassGrade'),
  topPassRate: document.getElementById('topPassRate'),
  streakNum: document.getElementById('streakNum'),

  // Views
  viewHome: document.getElementById('viewHome'),
  viewMockExam: document.getElementById('viewMockExam'),
  viewWeakness: document.getElementById('viewWeakness'),
  viewQuiz: document.getElementById('viewQuiz'),
  viewResult: document.getElementById('viewResult'),
  viewAnalytics: document.getElementById('viewAnalytics'),

  // Home Screen Elements
  heroHeadlineText: document.getElementById('heroHeadlineText'),
  heroPassGrade: document.getElementById('heroPassGrade'),
  heroPassProbPct: document.getElementById('heroPassProbPct'),
  heroGaugeSub: document.getElementById('heroGaugeSub'),
  heroPassSummary: document.getElementById('heroPassSummary'),
  benchCountText: document.getElementById('benchCountText'),
  benchFillBar: document.getElementById('benchFillBar'),
  cutoffAlertBanner: document.getElementById('cutoffAlertBanner'),
  cutoffSubjectsList: document.getElementById('cutoffSubjectsList'),
  btnHeroAnkiReview: document.getElementById('btnHeroAnkiReview'),
  heroAnkiDueCount: document.getElementById('heroAnkiDueCount'),
  btnHeroWeakness: document.getElementById('btnHeroWeakness'),
  btnHeroMock: document.getElementById('btnHeroMock'),
  subjectsMosaic: document.getElementById('subjectsMosaic'),
  weaknessCountPill: document.getElementById('weaknessCountPill'),
  yearPillsRow: document.getElementById('yearPillsRow'),

  // Mock Exam Intro
  btnStartMockExam: document.getElementById('btnStartMockExam'),
  mockQuestionCountText: document.getElementById('mockQuestionCountText'),

  // Weakness Drill Intro
  weaknessBigCount: document.getElementById('weaknessBigCount'),
  weaknessEmptyState: document.getElementById('weaknessEmptyState'),
  weaknessActionArea: document.getElementById('weaknessActionArea'),
  btnStartWeaknessDrill: document.getElementById('btnStartWeaknessDrill'),
  btnEmptyGoSubjects: document.getElementById('btnEmptyGoSubjects'),

  // Quiz Workspace
  quizSubIcon: document.getElementById('quizSubIcon'),
  quizSubTitle: document.getElementById('quizSubTitle'),
  quizModePill: document.getElementById('quizModePill'),
  examTimerBox: document.getElementById('examTimerBox'),
  timerDigits: document.getElementById('timerDigits'),
  btnFontDecrease: document.getElementById('btnFontDecrease'),
  btnFontIncrease: document.getElementById('btnFontIncrease'),
  btnBookmarkToggle: document.getElementById('btnBookmarkToggle'),
  bookmarkIcon: document.getElementById('bookmarkIcon'),
  currentQIndexText: document.getElementById('currentQIndexText'),
  totalQCountText: document.getElementById('totalQCountText'),
  quizProgressBarFill: document.getElementById('quizProgressBarFill'),
  
  qCategoryChip: document.getElementById('qCategoryChip'),
  qSourceChip: document.getElementById('qSourceChip'),
  qDifficultyStars: document.getElementById('qDifficultyStars'),
  revisionNoticeBanner: document.getElementById('revisionNoticeBanner'),
  revisionNoticeText: document.getElementById('revisionNoticeText'),
  questionTextArea: document.getElementById('questionTextArea'),
  optionsSheet: document.getElementById('optionsSheet'),

  // Quiz Explanation Drawer
  explanationDrawer: document.getElementById('explanationDrawer'),
  verdictIconBig: document.getElementById('verdictIconBig'),
  verdictHeading: document.getElementById('verdictHeading'),
  verdictSubtext: document.getElementById('verdictSubtext'),
  keypointBody: document.getElementById('keypointBody'),
  optionsBreakdownList: document.getElementById('optionsBreakdownList'),
  generalExplanationBody: document.getElementById('generalExplanationBody'),
  btnQuizNext: document.getElementById('btnQuizNext'),

  // Results Screen
  resultVerdictBanner: document.getElementById('resultVerdictBanner'),
  resultBadgeVerdict: document.getElementById('resultBadgeVerdict'),
  resultHeadline: document.getElementById('resultHeadline'),
  resultSubDesc: document.getElementById('resultSubDesc'),
  resultTotalScorePct: document.getElementById('resultTotalScorePct'),
  resultCorrectFraction: document.getElementById('resultCorrectFraction'),
  resultCutoffStatus: document.getElementById('resultCutoffStatus'),
  resultSubjectScoresList: document.getElementById('resultSubjectScoresList'),
  btnResultRetrySame: document.getElementById('btnResultRetrySame'),
  btnResultBackHome: document.getElementById('btnResultBackHome'),

  // Analytics Screen
  diagPassProbBig: document.getElementById('diagPassProbBig'),
  diagGradeBig: document.getElementById('diagGradeBig'),
  diagAdviceText: document.getElementById('diagAdviceText'),
  diagTotalAnswered: document.getElementById('diagTotalAnswered'),
  diagTotalCorrect: document.getElementById('diagTotalCorrect'),
  diagTotalAccuracy: document.getElementById('diagTotalAccuracy'),
  diagDueCount: document.getElementById('diagDueCount'),
  masteryBarsContainer: document.getElementById('masteryBarsContainer'),
  btnResetHistory: document.getElementById('btnResetHistory')
};

// ==========================================================================
// Initialization & LocalStorage Management
// ==========================================================================

function init() {
  bindEventListeners();
  verifyDailyStreak();
  if (ui.mockQuestionCountText && typeof MOCK_EXAM_CONFIG !== 'undefined') {
    ui.mockQuestionCountText.textContent = `${MOCK_EXAM_CONFIG.questionIds.length} 問`;
  }
  updatePassMetricsUI();
  renderHomeScreen();
}

function loadHistoryData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('History load error', err);
  }
  return {
    items: {}, // qId -> { count, correctCount, wrongCount, lastResult, intervalDays, easeFactor, nextDueDate, bookmarked }
    streak: 1,
    lastActiveDate: null
  };
}

function saveHistoryData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
  } catch (err) {
    console.error('History save error', err);
  }
}

function verifyDailyStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (!state.history.lastActiveDate) {
    state.history.lastActiveDate = today;
    state.history.streak = 1;
  } else if (state.history.lastActiveDate !== today) {
    const last = new Date(state.history.lastActiveDate);
    const curr = new Date(today);
    const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      state.history.streak = (state.history.streak || 0) + 1;
    } else if (diffDays > 1) {
      state.history.streak = 1;
    }
    state.history.lastActiveDate = today;
  }
  saveHistoryData();
  if (ui.streakNum) ui.streakNum.textContent = state.history.streak || 1;
}

// ==========================================================================
// Pass Probability & Cutoff Algorithm
// ==========================================================================

const BENCHMARK_COUNT = 150; // 本番問題数（約225問）に準拠した正式判定基準

function calculateOverallMetrics() {
  let totalAnswered = 0;
  let totalCorrect = 0;
  let subjectStats = {};

  Object.keys(SUBJECTS).forEach(subKey => {
    subjectStats[subKey] = { answered: 0, correct: 0, accuracy: 0 };
  });

  QUESTIONS.forEach(q => {
    const item = state.history.items[q.id];
    if (item && item.count > 0) {
      totalAnswered += item.count;
      totalCorrect += (item.correctCount || 0);
      subjectStats[q.subject].answered += item.count;
      subjectStats[q.subject].correct += (item.correctCount || 0);
    }
  });

  Object.keys(subjectStats).forEach(k => {
    const s = subjectStats[k];
    s.accuracy = s.answered > 0 ? Math.round((s.correct / s.answered) * 100) : 0;
  });

  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const isUnlocked = totalAnswered >= BENCHMARK_COUNT;
  const confidence = Math.min(100, Math.round((totalAnswered / BENCHMARK_COUNT) * 100));

  // Cutoff check
  const cutoffSubjects = [];
  Object.keys(subjectStats).forEach(k => {
    if (subjectStats[k].answered > 0 && subjectStats[k].accuracy < 40) {
      cutoffSubjects.push({ id: k, name: SUBJECTS[k].name, accuracy: subjectStats[k].accuracy });
    }
  });

  // Calculate Grade (Only official when unlocked)
  let grade = 'B';
  let gradeClass = 'grade-b';
  let advice = '';

  if (overallAccuracy >= 88 && cutoffSubjects.length === 0) {
    grade = 'S';
    gradeClass = 'grade-s';
    advice = '圧倒的な実力です！全国上位での1次試験突破が極めて確実です。';
  } else if (overallAccuracy >= 75 && cutoffSubjects.length === 0) {
    grade = 'A';
    gradeClass = 'grade-a';
    advice = '合格安全圏です。過去問演習を継続し、本番でのケアレスミスを防ぎましょう。';
  } else if (overallAccuracy >= 60) {
    grade = 'B';
    gradeClass = 'grade-b';
    advice = cutoffSubjects.length > 0
      ? `全体得点は合格ラインですが、${cutoffSubjects.map(c => c.name).join('・')}で足切り（40%未満）の危険があります！`
      : '合格基準（60%）をクリアしています。苦手科目を底上げすれば盤石です。';
  } else if (overallAccuracy >= 50) {
    grade = 'C';
    gradeClass = 'grade-c';
    advice = '合格まであと一歩（50%台）。頻出重要論点の暗記ポイントを集中反復しましょう。';
  } else if (overallAccuracy >= 40) {
    grade = 'D';
    gradeClass = 'grade-d';
    advice = '基礎論点の理解が不足しています。科目別トレーニングで解説を熟読してください。';
  } else {
    grade = 'E';
    gradeClass = 'grade-e';
    advice = '足切りリスク大。まずは1科目ずつ頻出公式・定義の定着を徹底しましょう。';
  }

  return {
    totalAnswered,
    totalCorrect,
    overallAccuracy,
    isUnlocked,
    confidence,
    remainingCount: Math.max(0, BENCHMARK_COUNT - totalAnswered),
    grade,
    gradeClass,
    advice,
    cutoffSubjects,
    subjectStats
  };
}

function updatePassMetricsUI() {
  const metrics = calculateOverallMetrics();

  // Benchmark Progress Bar
  if (ui.benchCountText) {
    ui.benchCountText.textContent = `現在 ${metrics.totalAnswered} / ${BENCHMARK_COUNT}問 達成 (${metrics.confidence}%)`;
  }
  if (ui.benchFillBar) {
    ui.benchFillBar.style.width = `${metrics.confidence}%`;
  }

  // Top Bar Meter
  if (ui.topPassGrade) {
    if (metrics.isUnlocked) {
      ui.topPassGrade.textContent = `${metrics.grade}判定`;
      ui.topPassGrade.className = `prob-badge ${metrics.gradeClass}`;
    } else {
      ui.topPassGrade.textContent = `信頼度 ${metrics.confidence}%`;
      ui.topPassGrade.className = `prob-badge grade-c`;
    }
  }
  if (ui.topPassRate) {
    ui.topPassRate.textContent = metrics.isUnlocked ? `${metrics.overallAccuracy}%` : `--%`;
  }

  // Hero Card
  if (ui.heroHeadlineText) {
    ui.heroHeadlineText.innerHTML = metrics.isUnlocked
      ? `正式合格判定: <span class="highlight-grade" id="heroPassGrade">${metrics.grade} 判定</span>`
      : `正式合格判定: <span class="highlight-grade" id="heroPassGrade" style="color: var(--color-amber);">🔒 データ蓄積中</span>`;
  }
  if (ui.heroPassProbPct) {
    ui.heroPassProbPct.textContent = metrics.isUnlocked ? `${metrics.overallAccuracy}%` : `--%`;
  }
  if (ui.heroGaugeSub) {
    ui.heroGaugeSub.textContent = metrics.isUnlocked ? '正式合格予測' : `信頼度 ${metrics.confidence}%`;
  }
  if (ui.heroPassSummary) {
    ui.heroPassSummary.textContent = metrics.isUnlocked
      ? metrics.advice
      : `診断士1次試験（約225問）と同等の演習母数をこなすことで、真の実力と合格可能性（A〜E判定）が正式アンロックされます。あと ${metrics.remainingCount} 問で正式判定！`;
  }

  // Cutoff Banner
  if (ui.cutoffAlertBanner) {
    if (metrics.cutoffSubjects.length > 0) {
      ui.cutoffAlertBanner.style.display = 'flex';
      ui.cutoffSubjectsList.textContent = metrics.cutoffSubjects.map(c => `${c.name} (${c.accuracy}%)`).join('、');
    } else {
      ui.cutoffAlertBanner.style.display = 'none';
    }
  }

  // Due Review & Weakness Counters
  const dueCount = getDueReviewQuestions().length;
  const weakCount = getWeaknessQuestions().length;

  if (ui.heroAnkiDueCount) ui.heroAnkiDueCount.textContent = `${dueCount}問`;
  if (ui.weaknessCountPill) ui.weaknessCountPill.textContent = weakCount;
  if (ui.weaknessBigCount) ui.weaknessBigCount.textContent = `${weakCount}問`;

  if (ui.weaknessEmptyState && ui.weaknessActionArea) {
    if (weakCount === 0) {
      ui.weaknessEmptyState.style.display = 'block';
      ui.weaknessActionArea.style.display = 'none';
    } else {
      ui.weaknessEmptyState.style.display = 'none';
      ui.weaknessActionArea.style.display = 'block';
    }
  }
}

// ==========================================================================
// Question Filtering Engines
// ==========================================================================

function getDueReviewQuestions() {
  const now = new Date().getTime();
  return QUESTIONS.filter(q => {
    const item = state.history.items[q.id];
    if (!item) return false;
    return item.nextDueDate <= now;
  });
}

function getWeaknessQuestions() {
  return QUESTIONS.filter(q => {
    const item = state.history.items[q.id];
    return item && item.wrongCount > 0;
  });
}

// ==========================================================================
// Render Views: Home, Analytics, Results
// ==========================================================================

function renderHomeScreen() {
  updatePassMetricsUI();
  const metrics = calculateOverallMetrics();

  // Highlight active year pill
  document.querySelectorAll('.year-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-year') === state.selectedYear);
  });

  // Render 7 Subjects Mosaic
  if (ui.subjectsMosaic) {
    ui.subjectsMosaic.innerHTML = Object.keys(SUBJECTS).map(subKey => {
      const sub = SUBJECTS[subKey];
      let questionsInSub = QUESTIONS.filter(q => q.subject === subKey);
      if (state.selectedYear !== 'all') {
        questionsInSub = questionsInSub.filter(q => q.year === state.selectedYear);
      }
      const stat = metrics.subjectStats[subKey];

      let gradeBadge = '';
      if (stat.answered === 0) {
        gradeBadge = `<span class="tile-grade-badge" style="background: rgba(255,255,255,0.06); color: var(--text-dim);">未着手</span>`;
      } else if (stat.accuracy >= 75) {
        gradeBadge = `<span class="tile-grade-badge grade-a">A判定 (${stat.accuracy}%)</span>`;
      } else if (stat.accuracy >= 60) {
        gradeBadge = `<span class="tile-grade-badge grade-b">B判定 (${stat.accuracy}%)</span>`;
      } else if (stat.accuracy >= 40) {
        gradeBadge = `<span class="tile-grade-badge grade-c">C判定 (${stat.accuracy}%)</span>`;
      } else {
        gradeBadge = `<span class="tile-grade-badge grade-e">足切り警戒 (${stat.accuracy}%)</span>`;
      }

      const yearLabel = state.selectedYear === 'all' ? '精選全問' : state.selectedYear;

      return `
        <article class="subject-tile" data-subject-id="${subKey}">
          <div class="tile-top">
            <div class="tile-icon-title">
              <span class="tile-icon">${sub.icon}</span>
              <div>
                <h4 class="tile-title">${sub.name}</h4>
                <span class="tile-questions-count">${questionsInSub.length}問 (${yearLabel})</span>
              </div>
            </div>
            ${gradeBadge}
          </div>

          <p class="tile-desc">${sub.desc}</p>

          <div class="tile-stat-bar">
            <div class="stat-labels">
              <span>正答率 (${stat.correct}/${stat.answered}正解)</span>
              <span class="accuracy-pct" style="color: ${stat.accuracy < 40 && stat.answered > 0 ? 'var(--color-rose)' : sub.color};">
                ${stat.accuracy}%
              </span>
            </div>
            <div class="meter-track">
              <div class="meter-cutoff-marker" title="40% 足切りライン"></div>
              <div class="meter-fill" style="width: ${stat.accuracy}%; background: ${stat.accuracy < 40 && stat.answered > 0 ? 'var(--color-rose)' : sub.color};"></div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Bind tile clicks
    document.querySelectorAll('.subject-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const subId = tile.getAttribute('data-subject-id');
        startQuizSession('subject', subId);
      });
    });
  }
}

function renderAnalyticsScreen() {
  const metrics = calculateOverallMetrics();

  if (ui.diagPassProbBig) ui.diagPassProbBig.textContent = `${metrics.overallAccuracy}%`;
  if (ui.diagGradeBig) {
    ui.diagGradeBig.textContent = `${metrics.grade} 判定`;
    ui.diagGradeBig.className = `diag-grade-tag ${metrics.gradeClass}`;
  }
  if (ui.diagAdviceText) ui.diagAdviceText.textContent = metrics.advice;

  if (ui.diagTotalAnswered) ui.diagTotalAnswered.textContent = `${metrics.totalAnswered} 問`;
  if (ui.diagTotalCorrect) ui.diagTotalCorrect.textContent = `${metrics.totalCorrect} 問`;
  if (ui.diagTotalAccuracy) ui.diagTotalAccuracy.textContent = `${metrics.overallAccuracy} %`;
  if (ui.diagDueCount) ui.diagDueCount.textContent = `${getDueReviewQuestions().length} 問`;

  // Render Mastery bars
  if (ui.masteryBarsContainer) {
    ui.masteryBarsContainer.innerHTML = Object.keys(SUBJECTS).map(subKey => {
      const sub = SUBJECTS[subKey];
      const stat = metrics.subjectStats[subKey];
      const isCutoff = stat.answered > 0 && stat.accuracy < 40;

      return `
        <div class="mastery-bar-card">
          <div class="mb-header">
            <span>${sub.icon} ${sub.name}</span>
            <span>
              ${isCutoff ? '<span class="mb-cutoff-warning">⚠️ 足切り危険！</span>' : ''}
              ${stat.accuracy}% (${stat.correct}/${stat.answered}問)
            </span>
          </div>
          <div class="meter-track">
            <div class="meter-cutoff-marker"></div>
            <div class="meter-fill" style="width: ${stat.accuracy}%; background: ${isCutoff ? 'var(--color-rose)' : sub.color};"></div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ==========================================================================
// Quiz Session Management (Start, Options, Elimination, Anki, Finish)
// ==========================================================================

function startQuizSession(mode, subjectId = null) {
  // Clear any existing timer
  if (state.session.timerId) clearInterval(state.session.timerId);

  state.session.mode = mode;
  state.session.subjectId = subjectId;
  state.session.currentIndex = 0;
  state.session.score = 0;
  state.session.answered = false;
  state.session.eliminated.clear();
  state.session.subjectResults = {};

  if (mode === 'subject') {
    let qList = QUESTIONS.filter(q => q.subject === subjectId);
    if (state.selectedYear !== 'all') {
      const yearFiltered = qList.filter(q => q.year === state.selectedYear);
      if (yearFiltered.length > 0) qList = yearFiltered;
    }
    state.session.questions = qList;
    const yearSuffix = state.selectedYear === 'all' ? '' : ` (${state.selectedYear})`;
    ui.quizModePill.textContent = `科目別演習${yearSuffix}`;
    ui.examTimerBox.style.display = 'none';
  } else if (mode === 'mock') {
    // Mock Exam: 16 curated representative questions
    state.session.questions = MOCK_EXAM_CONFIG.questionIds
      .map(id => QUESTIONS.find(q => q.id === id))
      .filter(Boolean);
    ui.quizModePill.textContent = '⏱ 模擬試験';
    ui.examTimerBox.style.display = 'flex';
    startMockTimer(MOCK_EXAM_CONFIG.timeLimitMinutes * 60);
  } else if (mode === 'weakness') {
    state.session.questions = getWeaknessQuestions();
    ui.quizModePill.textContent = '⚠️ 弱点克服';
    ui.examTimerBox.style.display = 'none';
  } else if (mode === 'anki') {
    const due = getDueReviewQuestions();
    state.session.questions = due.length > 0 ? due : [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 5);
    ui.quizModePill.textContent = '🧠 忘却曲線復習';
    ui.examTimerBox.style.display = 'none';
  }

  if (state.session.questions.length === 0) {
    showToast('問題が見つかりませんでした');
    return;
  }

  // Initialize subject results map
  state.session.questions.forEach(q => {
    if (!state.session.subjectResults[q.subject]) {
      state.session.subjectResults[q.subject] = { correct: 0, total: 0 };
    }
    state.session.subjectResults[q.subject].total++;
  });

  switchView('viewQuiz');
  loadQuestionInWorkspace(0);
}

function startMockTimer(seconds) {
  state.session.timerSeconds = seconds;
  updateTimerDisplay();

  state.session.timerId = setInterval(() => {
    state.session.timerSeconds--;
    updateTimerDisplay();

    if (state.session.timerSeconds <= 0) {
      clearInterval(state.session.timerId);
      showToast('⏰ 模擬試験の制限時間が終了しました！');
      finalizeQuizSession();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.session.timerSeconds / 60);
  const s = state.session.timerSeconds % 60;
  if (ui.timerDigits) {
    ui.timerDigits.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
}

function loadQuestionInWorkspace(index) {
  state.session.answered = false;
  state.session.eliminated.clear();
  const q = state.session.questions[index];
  const sub = SUBJECTS[q.subject] || { name: '共通', icon: '📝' };

  ui.quizSubIcon.textContent = sub.icon;
  ui.quizSubTitle.textContent = sub.name;
  ui.currentQIndexText.textContent = index + 1;
  ui.totalQCountText.textContent = state.session.questions.length;

  const pct = Math.round(((index + 1) / state.session.questions.length) * 100);
  ui.quizProgressBarFill.style.width = `${pct}%`;

  ui.qCategoryChip.textContent = q.category || '重要論点';
  const sourceLabel = q.source || (q.year ? `${q.year}${q.questionNumber ? ' ' + q.questionNumber : ''}` : '精選過去問');
  ui.qSourceChip.textContent = sourceLabel;
  
  // Stars difficulty
  const diff = q.difficulty || 2;
  const stars = diff === 1 ? '★☆☆ (基本)' : diff === 2 ? '★★☆ (標準)' : '★★★ (難関)';
  ui.qDifficultyStars.textContent = stars;

  // Revision Notice (Crucial for Law and Policy)
  const revNote = q.revisionNote || q.revisedExplanation;
  if (revNote) {
    ui.revisionNoticeBanner.style.display = 'flex';
    ui.revisionNoticeText.textContent = revNote;
  } else {
    ui.revisionNoticeBanner.style.display = 'none';
  }

  // Question text
  ui.questionTextArea.textContent = q.question;

  // Bookmark status
  const item = state.history.items[q.id];
  const isBookmarked = item && item.bookmarked;
  if (ui.bookmarkIcon) {
    ui.bookmarkIcon.textContent = isBookmarked ? '★' : '☆';
    ui.btnBookmarkToggle.classList.toggle('active', !!isBookmarked);
  }

  // Hide explanation drawer
  ui.explanationDrawer.style.display = 'none';

  // Render Options with Elimination buttons
  renderOptions(q);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderOptions(q) {
  const markers = ['ア', 'イ', 'ウ', 'エ', 'オ'];
  ui.optionsSheet.innerHTML = q.options.map((opt, i) => {
    return `
      <div class="option-row" id="opt-row-${i}">
        <button class="option-card" data-opt-idx="${i}">
          <span class="option-index-badge">${markers[i] || i + 1}</span>
          <span class="option-content-text">${opt}</span>
        </button>
        <button class="btn-eliminate" data-opt-idx="${i}" title="消去線（取り消し線）を引く">
          ✕
        </button>
      </div>
    `;
  }).join('');

  // Option selection
  document.querySelectorAll('.option-card').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.session.answered) return;
      const chosen = parseInt(btn.getAttribute('data-opt-idx'), 10);
      handleOptionChoice(chosen);
    });
  });

  // Elimination toggle
  document.querySelectorAll('.btn-eliminate').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-opt-idx'), 10);
      toggleElimination(idx);
    });
  });
}

function toggleElimination(idx) {
  if (state.session.answered) return;
  const card = document.querySelector(`.option-card[data-opt-idx="${idx}"]`);
  if (!card) return;

  if (state.session.eliminated.has(idx)) {
    state.session.eliminated.delete(idx);
    card.classList.remove('eliminated');
  } else {
    state.session.eliminated.add(idx);
    card.classList.add('eliminated');
  }
}

function handleOptionChoice(chosenIndex) {
  state.session.answered = true;
  const q = state.session.questions[state.session.currentIndex];
  const isCorrect = (chosenIndex === q.answerIndex);

  if (isCorrect) {
    state.session.score++;
    if (state.session.subjectResults[q.subject]) {
      state.session.subjectResults[q.subject].correct++;
    }
  }

  // Save to persistent user history
  let record = state.history.items[q.id];
  if (!record) {
    record = {
      count: 0,
      correctCount: 0,
      wrongCount: 0,
      lastResult: null,
      intervalDays: 1,
      easeFactor: 2.5,
      nextDueDate: new Date().getTime(),
      bookmarked: false
    };
    state.history.items[q.id] = record;
  }

  record.count = (record.count || 0) + 1;
  record.lastResult = isCorrect ? 'correct' : 'wrong';
  if (isCorrect) {
    record.correctCount = (record.correctCount || 0) + 1;
  } else {
    record.wrongCount = (record.wrongCount || 0) + 1;
  }
  saveHistoryData();
  updatePassMetricsUI();

  // Style the options
  document.querySelectorAll('.option-card').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answerIndex) {
      btn.classList.add('correct');
    } else if (idx === chosenIndex) {
      btn.classList.add('wrong');
    }
  });

  // Setup Explanation Drawer
  ui.verdictHeading.className = `verdict-heading ${isCorrect ? 'correct' : 'wrong'}`;
  ui.verdictIconBig.textContent = isCorrect ? '⭕' : '❌';
  ui.verdictHeading.textContent = isCorrect ? '正解！完璧な理解です' : '不正解... 論点を確認しましょう';
  ui.verdictSubtext.textContent = isCorrect
    ? '出題意図通りの正しい判断ができました。'
    : `正解は【${['ア', 'イ', 'ウ', 'エ', 'オ'][q.answerIndex]}】です。誤りの理由を復習しましょう。`;

  ui.keypointBody.textContent = q.keyPoint || '要点を暗記しましょう';

  // Render per-option breakdown
  if (q.optionsExplanation && q.optionsExplanation.length > 0) {
    ui.optionsBreakdownList.innerHTML = q.optionsExplanation.map((exp, i) => {
      const isTarget = (i === q.answerIndex);
      return `<div class="breakdown-item ${isTarget ? 'is-correct-opt' : 'is-wrong-opt'}">${exp}</div>`;
    }).join('');
  } else {
    ui.optionsBreakdownList.innerHTML = `<div class="breakdown-item">${q.explanation}</div>`;
  }

  ui.generalExplanationBody.textContent = q.explanation || '';
  ui.explanationDrawer.style.display = 'block';

  // Bind Anki Pills
  bindAnkiPills(q.id);

  // Smooth scroll down to explanation
  setTimeout(() => {
    ui.explanationDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function bindAnkiPills(questionId) {
  document.querySelectorAll('.anki-pill').forEach(pill => {
    pill.onclick = () => {
      const rating = pill.getAttribute('data-rating');
      applyAnkiSM2(questionId, rating);
      showToast(`🧠 忘却曲線スケジュールを更新しました (${rating})`);
    };
  });
}

function applyAnkiSM2(questionId, rating) {
  const record = state.history.items[questionId];
  if (!record) return;

  const now = new Date().getTime();
  let interval = record.intervalDays || 1;
  let ease = record.easeFactor || 2.5;

  if (rating === 'again') {
    interval = 0.01; // ~15 minutes
    ease = Math.max(1.3, ease - 0.2);
  } else if (rating === 'hard') {
    interval = Math.max(1, interval * 1.2);
    ease = Math.max(1.3, ease - 0.15);
  } else if (rating === 'good') {
    interval = Math.max(2, interval * ease);
  } else if (rating === 'easy') {
    interval = Math.max(4, interval * ease * 1.3);
    ease += 0.15;
  }

  record.intervalDays = Math.round(interval * 10) / 10;
  record.easeFactor = Math.round(ease * 100) / 100;
  record.nextDueDate = now + Math.round(interval * 24 * 60 * 60 * 1000);

  saveHistoryData();
  updatePassMetricsUI();
}

function advanceNext() {
  if (state.session.currentIndex + 1 < state.session.questions.length) {
    state.session.currentIndex++;
    loadQuestionInWorkspace(state.session.currentIndex);
  } else {
    finalizeQuizSession();
  }
}

function finalizeQuizSession() {
  if (state.session.timerId) clearInterval(state.session.timerId);

  switchView('viewResult');
  const total = state.session.questions.length;
  const score = state.session.score;
  const overallPct = total > 0 ? Math.round((score / total) * 100) : 0;

  ui.resultTotalScorePct.textContent = `${overallPct}%`;
  ui.resultCorrectFraction.textContent = `${score} / ${total}問 正解`;

  // Check cutoffs in this session
  let hasCutoff = false;
  const cutoffSubs = [];
  Object.keys(state.session.subjectResults).forEach(subKey => {
    const res = state.session.subjectResults[subKey];
    const subPct = res.total > 0 ? Math.round((res.correct / res.total) * 100) : 0;
    if (subPct < 40) {
      hasCutoff = true;
      cutoffSubs.push(SUBJECTS[subKey].name);
    }
  });

  const passed = (overallPct >= 60 && !hasCutoff);

  if (passed) {
    ui.resultVerdictBanner.className = 'result-banner';
    ui.resultBadgeVerdict.className = 'result-badge-verdict pass';
    ui.resultBadgeVerdict.textContent = '🎉 合格基準 達成！';
    ui.resultHeadline.textContent = `合格判定: ${overallPct >= 80 ? 'A' : 'B'} 判定`;
    ui.resultSubDesc.textContent = '総合60%以上かつ足切り（40%未満）なしの合格要件を完全に満たしています！';
    ui.resultCutoffStatus.textContent = '全科目クリア (合格)';
    ui.resultCutoffStatus.style.color = 'var(--color-emerald)';
  } else {
    ui.resultVerdictBanner.className = 'result-banner';
    ui.resultBadgeVerdict.className = 'result-badge-verdict fail';
    ui.resultBadgeVerdict.textContent = '⚠️ 不合格判定';
    ui.resultHeadline.textContent = '合格基準 未到達';
    ui.resultSubDesc.textContent = hasCutoff
      ? `足切り科目（${cutoffSubs.join('・')}が40%未満）が発生しています。弱点特訓で底上げしましょう。`
      : '総合得点が合格ライン（60%）に届きませんでした。要点暗記と問題演習を継続しましょう。';
    ui.resultCutoffStatus.textContent = hasCutoff ? `足切りあり (${cutoffSubs.join('・')})` : 'なし (総合点不足)';
    ui.resultCutoffStatus.style.color = 'var(--color-rose)';
  }

  // Render subject breakdown table
  if (ui.resultSubjectScoresList) {
    ui.resultSubjectScoresList.innerHTML = Object.keys(state.session.subjectResults).map(subKey => {
      const sub = SUBJECTS[subKey];
      const res = state.session.subjectResults[subKey];
      const pct = res.total > 0 ? Math.round((res.correct / res.total) * 100) : 0;
      const isCutoff = pct < 40;

      return `
        <div class="res-subject-row">
          <div class="res-sub-left">
            <span>${sub.icon}</span>
            <span>${sub.name}</span>
          </div>
          <div class="res-sub-right">
            <span class="cutoff-status-tag ${isCutoff ? 'cutoff-danger' : 'cutoff-ok'}">
              ${isCutoff ? '⚠️ 40%未満 足切り' : '✓ 基準クリア'}
            </span>
            <span class="res-sub-pct" style="color: ${isCutoff ? 'var(--color-rose)' : 'var(--text-main)'};">
              ${pct}% (${res.correct}/${res.total}問)
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  updatePassMetricsUI();
}

// ==========================================================================
// Views Switching & Navigation
// ==========================================================================

function switchView(viewId) {
  state.currentView = viewId;
  const allViews = [ui.viewHome, ui.viewMockExam, ui.viewWeakness, ui.viewQuiz, ui.viewResult, ui.viewAnalytics];
  allViews.forEach(v => {
    if (v) v.classList.remove('active');
  });

  const target = document.getElementById(viewId);
  if (target) target.classList.add('active');

  // Back button visibility
  ui.btnHeaderBack.style.display = (viewId === 'viewHome') ? 'none' : 'flex';

  // Sync nav tabs
  document.querySelectorAll('.nav-tab, .m-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-view') === viewId);
  });

  if (viewId === 'viewHome') renderHomeScreen();
  if (viewId === 'viewAnalytics') renderAnalyticsScreen();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(msg) {
  if (!ui.toastNotification) return;
  ui.toastNotification.textContent = msg;
  ui.toastNotification.classList.add('show');
  setTimeout(() => ui.toastNotification.classList.remove('show'), 3200);
}

// ==========================================================================
// Event Bindings
// ==========================================================================

function bindEventListeners() {
  // Navigation Tabs
  document.querySelectorAll('.nav-tab, .m-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.getAttribute('data-view');
      if (view) switchView(view);
    });
  });

  // Header Back Button
  ui.btnHeaderBack?.addEventListener('click', () => {
    if (state.currentView === 'viewQuiz') {
      if (confirm('演習を中断してホームに戻りますか？')) {
        if (state.session.timerId) clearInterval(state.session.timerId);
        switchView('viewHome');
      }
    } else {
      switchView('viewHome');
    }
  });

  // Hero Actions
  ui.btnHeroAnkiReview?.addEventListener('click', () => startQuizSession('anki'));
  ui.btnHeroWeakness?.addEventListener('click', () => switchView('viewWeakness'));
  ui.btnHeroMock?.addEventListener('click', () => switchView('viewMockExam'));

  // Mock Exam
  ui.btnStartMockExam?.addEventListener('click', () => startQuizSession('mock'));

  // Weakness Drill
  ui.btnStartWeaknessDrill?.addEventListener('click', () => startQuizSession('weakness'));
  ui.btnEmptyGoSubjects?.addEventListener('click', () => switchView('viewHome'));

  // Quiz Next
  ui.btnQuizNext?.addEventListener('click', advanceNext);

  // Results Actions
  ui.btnResultRetrySame?.addEventListener('click', () => {
    startQuizSession(state.session.mode, state.session.subjectId);
  });
  ui.btnResultBackHome?.addEventListener('click', () => switchView('viewHome'));

  // Font Size Controls
  ui.btnFontIncrease?.addEventListener('click', () => {
    state.fontScale = Math.min(1.3, state.fontScale + 0.1);
    document.documentElement.style.setProperty('--font-scale', `${state.fontScale}rem`);
    showToast(`文字サイズ: ${Math.round(state.fontScale * 100)}%`);
  });
  ui.btnFontDecrease?.addEventListener('click', () => {
    state.fontScale = Math.max(0.85, state.fontScale - 0.1);
    document.documentElement.style.setProperty('--font-scale', `${state.fontScale}rem`);
    showToast(`文字サイズ: ${Math.round(state.fontScale * 100)}%`);
  });

  // Bookmark Toggle
  ui.btnBookmarkToggle?.addEventListener('click', () => {
    const q = state.session.questions[state.session.currentIndex];
    if (!q) return;
    let rec = state.history.items[q.id];
    if (!rec) {
      rec = { count: 0, correctCount: 0, wrongCount: 0, bookmarked: false };
      state.history.items[q.id] = rec;
    }
    rec.bookmarked = !rec.bookmarked;
    saveHistoryData();
    ui.bookmarkIcon.textContent = rec.bookmarked ? '★' : '☆';
    ui.btnBookmarkToggle.classList.toggle('active', rec.bookmarked);
    showToast(rec.bookmarked ? '★ ブックマークに登録しました' : '☆ ブックマークを解除しました');
  });

  // Year Selector Pills
  document.querySelectorAll('.year-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      state.selectedYear = pill.getAttribute('data-year');
      renderHomeScreen();
      showToast(state.selectedYear === 'all' ? '全年度の精選問題を表示します' : `${state.selectedYear}の過去問に絞り込みました`);
    });
  });

  // Data Reset
  ui.btnResetHistory?.addEventListener('click', () => {
    if (confirm('すべての学習履歴・正答率・忘却曲線データを初期化しますか？')) {
      state.history = { items: {}, streak: 1, lastActiveDate: null };
      saveHistoryData();
      updatePassMetricsUI();
      renderAnalyticsScreen();
      showToast('学習データを初期化しました');
    }
  });
}

// Start Application on Load
document.addEventListener('DOMContentLoaded', init);
