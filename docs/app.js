/**
 * 診断士 PassPro - Core Application Logic
 * Commercial Edition: Spaced Repetition (SM-2), Real Mock Exam Engine,
 * Elimination Cross-out Tool, Pass Prediction Algorithm & Cutoff Checker.
 */

const STORAGE_KEY = 'shindanshi_passpro_store_v2';

// Application State
let state = {
  currentView: 'viewHome',
  practiceMode: 'exam', // 'exam' (実戦過去問700問) | 'vocab' (スピード用語マスター515問)
  fontScale: 1.0,
  selectedYear: 'all',
  quizOrderMode: 'smart_random', // 'smart_random' (未演習・均等優先) | 'sequential' (順番に解く)
  selectedSubCategory: 'all',
  history: loadHistoryData(),
  player: {
    combo: 0
  },
  session: {
    mode: 'subject', // 'subject' | 'vocab' | 'mock' | 'weakness' | 'anki'
    subjectId: null,
    subCategoryId: 'all',
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    timerSeconds: 0,
    timerId: null,
    eliminated: new Set(), // Set of option indices crossed out
    subjectResults: {}     // subId -> { correct, total }
  },
  caseExam: {
    activeCase: null,
    activeQuestionIndex: 0,
    filter: 'all',
    timerSeconds: 80 * 60,
    timerRunning: false,
    timerInterval: null,
    drafts: {}
  },
  mbaSession: {
    activeCategory: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    earnedExp: 0,
    combo: 0
  }
};

// DOM References
const ui = {
  // Shell & Navigation
  btnHeaderBack: document.getElementById('btnHeaderBack'),
  appNavTabs: document.getElementById('appNavTabs'),
  mobileBottomTabs: document.getElementById('mobileBottomTabs'),
  toastNotification: document.getElementById('toastNotification'),
  
  // Player Level & EXP Dashboard Elements (NEW)
  playerLevelBadge: document.getElementById('playerLevelBadge'),
  headerLvlNum: document.getElementById('headerLvlNum'),
  headerRankTitle: document.getElementById('headerRankTitle'),
  headerExpBar: document.getElementById('headerExpBar'),
  headerAvatarEmoji: document.getElementById('headerAvatarEmoji'),

  // Study Time Auto-Tracker Elements (NEW)
  studyTimeBadge: document.getElementById('studyTimeBadge'),
  headerStudyTimeText: document.getElementById('headerStudyTimeText'),
  diagTodayStudyTime: document.getElementById('diagTodayStudyTime'),
  diagWeeklyStudyTime: document.getElementById('diagWeeklyStudyTime'),
  diagTotalStudyTime: document.getElementById('diagTotalStudyTime'),
  diagDailyAvgTime: document.getElementById('diagDailyAvgTime'),

  // PRO Modal Elements (NEW)
  btnOpenProModal: document.getElementById('btnOpenProModal'),
  proModal: document.getElementById('proModal'),
  btnCloseProModal: document.getElementById('btnCloseProModal'),
  btnPlanYearly: document.getElementById('btnPlanYearly'),
  btnPlanMonthly: document.getElementById('btnPlanMonthly'),
  btnStartTrial: document.getElementById('btnStartTrial'),

  // Header Meters
  topPassGrade: document.getElementById('topPassGrade'),
  topPassRate: document.getElementById('topPassRate'),
  streakNum: document.getElementById('streakNum'),

  // Avatar Speech Bubble (NEW)
  avatarSpeechBubble: document.getElementById('avatarSpeechBubble'),
  avatarSpeechText: document.getElementById('avatarSpeechText'),

  // Daily Mission Elements (NEW)
  dailyMissionCard: document.getElementById('dailyMissionCard'),
  dailyGoalPct: document.getElementById('dailyGoalPct'),
  chkMissionQuestions: document.getElementById('chkMissionQuestions'),
  mCountQuestions: document.getElementById('mCountQuestions'),
  chkMissionTime: document.getElementById('chkMissionTime'),
  mCountTime: document.getElementById('mCountTime'),
  chkMissionAnki: document.getElementById('chkMissionAnki'),

  // Achievements & Backup Elements (NEW)
  unlockedBadgesCountPill: document.getElementById('unlockedBadgesCountPill'),
  achievementsBadgesGrid: document.getElementById('achievementsBadgesGrid'),
  btnExportData: document.getElementById('btnExportData'),
  fileImportData: document.getElementById('fileImportData'),
  confettiCanvas: document.getElementById('confettiCanvas'),

  // Views
  viewHome: document.getElementById('viewHome'),
  viewMockExam: document.getElementById('viewMockExam'),
  viewWeakness: document.getElementById('viewWeakness'),
  viewQuiz: document.getElementById('viewQuiz'),
  viewResult: document.getElementById('viewResult'),
  viewAnalytics: document.getElementById('viewAnalytics'),
  viewCaseExam: document.getElementById('viewCaseExam'),
  viewMba: document.getElementById('viewMba'),

  // MBA Vocab Elements (初級編)
  mbaCategoryView: document.getElementById('mbaCategoryView'),
  mbaQuizView: document.getElementById('mbaQuizView'),
  mbaResultView: document.getElementById('mbaResultView'),
  btnMbaRandomQuiz: document.getElementById('btnMbaRandomQuiz'),
  btnMbaWeakQuiz: document.getElementById('btnMbaWeakQuiz'),
  mbaCategoriesGrid: document.getElementById('mbaCategoriesGrid'),
  mbaStatusRankIcon: document.getElementById('mbaStatusRankIcon'),
  mbaStatusRankTitle: document.getElementById('mbaStatusRankTitle'),
  mbaStatusLevelNum: document.getElementById('mbaStatusLevelNum'),
  mbaStatusExpText: document.getElementById('mbaStatusExpText'),
  mbaStatusExpFill: document.getElementById('mbaStatusExpFill'),
  mbaStatusMasteredCount: document.getElementById('mbaStatusMasteredCount'),
  mbaStatusAccuracyPct: document.getElementById('mbaStatusAccuracyPct'),
  mbaStatusStreakCount: document.getElementById('mbaStatusStreakCount'),
  btnMbaBackToList: document.getElementById('btnMbaBackToList'),
  mbaQuizCategoryTag: document.getElementById('mbaQuizCategoryTag'),
  mbaQuizCounterText: document.getElementById('mbaQuizCounterText'),
  mbaQuizComboPill: document.getElementById('mbaQuizComboPill'),
  mbaQuizComboNum: document.getElementById('mbaQuizComboNum'),
  mbaQuizFillBar: document.getElementById('mbaQuizFillBar'),
  mbaQuizTermPill: document.getElementById('mbaQuizTermPill'),
  mbaQuizQuestionText: document.getElementById('mbaQuizQuestionText'),
  mbaQuizOptionsGrid: document.getElementById('mbaQuizOptionsGrid'),
  mbaQuizFeedbackBox: document.getElementById('mbaQuizFeedbackBox'),
  mbaQuizResultBadge: document.getElementById('mbaQuizResultBadge'),
  mbaQuizExpGain: document.getElementById('mbaQuizExpGain'),
  mbaQuizExplanationText: document.getElementById('mbaQuizExplanationText'),
  btnMbaNextQuestion: document.getElementById('btnMbaNextQuestion'),
  mbaResultTitle: document.getElementById('mbaResultTitle'),
  mbaResultScorePct: document.getElementById('mbaResultScorePct'),
  mbaResultFraction: document.getElementById('mbaResultFraction'),
  mbaResultExpEarned: document.getElementById('mbaResultExpEarned'),
  btnMbaResultRetry: document.getElementById('btnMbaResultRetry'),
  btnMbaResultBackTop: document.getElementById('btnMbaResultBackTop'),

  // Level Up Modal
  levelUpModal: document.getElementById('levelUpModal'),
  lvlUpModalIcon: document.getElementById('lvlUpModalIcon'),
  lvlUpModalLevel: document.getElementById('lvlUpModalLevel'),
  lvlUpModalRankTitle: document.getElementById('lvlUpModalRankTitle'),
  btnLevelUpClose: document.getElementById('btnLevelUpClose'),

  // Case Exam Workspace Elements
  caseListView: document.getElementById('caseListView'),
  caseWorkspaceView: document.getElementById('caseWorkspaceView'),
  caseCardsGrid: document.getElementById('caseCardsGrid'),
  btnCaseBackToList: document.getElementById('btnCaseBackToList'),
  wsCaseTypeBadge: document.getElementById('wsCaseTypeBadge'),
  wsCaseTitle: document.getElementById('wsCaseTitle'),
  caseTimerDisplay: document.getElementById('caseTimerDisplay'),
  btnCaseTimerToggle: document.getElementById('btnCaseTimerToggle'),
  caseDraftIndicator: document.getElementById('caseDraftIndicator'),
  btnMobTabStory: document.getElementById('btnMobTabStory'),
  btnMobTabQuestions: document.getElementById('btnMobTabQuestions'),
  caseStoryPane: document.getElementById('caseStoryPane'),
  caseQuestionsPane: document.getElementById('caseQuestionsPane'),
  storyCompanyName: document.getElementById('storyCompanyName'),
  storyCompanyMeta: document.getElementById('storyCompanyMeta'),
  storyCompanySummary: document.getElementById('storyCompanySummary'),
  caseFinancialsArea: document.getElementById('caseFinancialsArea'),
  financialTablesContent: document.getElementById('financialTablesContent'),
  storyParagraphs: document.getElementById('storyParagraphs'),
  caseQNav: document.getElementById('caseQNav'),
  caseQActiveCard: document.getElementById('caseQActiveCard'),
  caseResultModal: document.getElementById('caseResultModal'),
  modalQTitle: document.getElementById('modalQTitle'),
  modalResultBody: document.getElementById('modalResultBody'),
  btnCloseCaseModal: document.getElementById('btnCloseCaseModal'),
  btnModalCloseSecondary: document.getElementById('btnModalCloseSecondary'),
  btnModalNextQ: document.getElementById('btnModalNextQ'),

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
  examYearSelectorCard: document.getElementById('examYearSelectorCard'),
  orderModeSelectorCard: document.getElementById('orderModeSelectorCard'),
  btnOrderSmartRandom: document.getElementById('btnOrderSmartRandom'),
  btnOrderSequential: document.getElementById('btnOrderSequential'),
  orderModeDescText: document.getElementById('orderModeDescText'),
  subcatFastPanel: document.getElementById('subcatFastPanel'),
  subcatFastSubjectTabs: document.getElementById('subcatFastSubjectTabs'),
  subcatFastChipsRow: document.getElementById('subcatFastChipsRow'),
  practiceModeSwitcher: document.getElementById('practiceModeSwitcher'),
  tabModeExam: document.getElementById('tabModeExam'),
  tabModeVocab: document.getElementById('tabModeVocab'),
  modeSwitcherDesc: document.getElementById('modeSwitcherDesc'),

  // Sub-Category Selection Modal (NEW)
  subCategoryModal: document.getElementById('subCategoryModal'),
  subcatModalIcon: document.getElementById('subcatModalIcon'),
  subcatModalTitle: document.getElementById('subcatModalTitle'),
  subcatModalSub: document.getElementById('subcatModalSub'),
  btnCloseSubcatModal: document.getElementById('btnCloseSubcatModal'),
  mBtnOrderRandom: document.getElementById('mBtnOrderRandom'),
  mBtnOrderSeq: document.getElementById('mBtnOrderSeq'),
  subcatModalList: document.getElementById('subcatModalList'),

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
  diagConfidenceBadge: document.getElementById('diagConfidenceBadge'),
  diagConfidencePct: document.getElementById('diagConfidencePct'),
  diagConfidenceBar: document.getElementById('diagConfidenceBar'),
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
  updatePlayerLevelUI();
  initStudyTracker();
  initProModal();
  initLtvFeatures();
  renderHomeScreen();
  initCaseExam();
  initMbaVocab();
}

function loadHistoryData() {
  const todayStr = new Date().toISOString().slice(0, 10);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (typeof parsed.playerExp !== 'number') parsed.playerExp = 0;
      if (!parsed.studyTime) {
        parsed.studyTime = {
          todaySeconds: 0,
          totalSeconds: 0,
          lastActiveDate: todayStr,
          dailyHistory: {}
        };
      }
      if (!parsed.dailyMissions || parsed.dailyMissions.date !== todayStr) {
        parsed.dailyMissions = {
          date: todayStr,
          questions: 0,
          timeMinutes: 0,
          ankiCleared: false,
          claimed: []
        };
      }
      if (!Array.isArray(parsed.unlockedBadges)) {
        parsed.unlockedBadges = [];
      }
      return parsed;
    }
  } catch (err) {
    console.error('History load error', err);
  }
  return {
    items: {}, // qId -> { count, correctCount, wrongCount, lastResult, intervalDays, easeFactor, nextDueDate, bookmarked }
    streak: 1,
    lastActiveDate: null,
    playerExp: 0,
    studyTime: {
      todaySeconds: 0,
      totalSeconds: 0,
      lastActiveDate: todayStr,
      dailyHistory: {}
    },
    dailyMissions: {
      date: todayStr,
      questions: 0,
      timeMinutes: 0,
      ankiCleared: false,
      claimed: []
    },
    unlockedBadges: []
  };
}

function saveHistoryData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
  } catch (err) {
    console.error('History save error', err);
    // LocalStorage 容量超過（QuotaExceededError）時の自己修復フォールバック
    if (err.name === 'QuotaExceededError' || err.code === 22) {
      try {
        if (state.history.studyTime && state.history.studyTime.dailyHistory) {
          const keys = Object.keys(state.history.studyTime.dailyHistory).sort();
          if (keys.length > 30) {
            keys.slice(0, keys.length - 30).forEach(k => delete state.history.studyTime.dailyHistory[k]);
          }
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
      } catch (e2) {
        console.warn('Storage quota recovery failed', e2);
      }
    }
  }
}

function verifyDailyStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const st = state.history.studyTime || { todaySeconds: 0, totalSeconds: 0, lastActiveDate: today, dailyHistory: {} };

  if (!state.history.lastActiveDate) {
    state.history.lastActiveDate = today;
    state.history.streak = 1;
    st.lastActiveDate = today;
  } else if (state.history.lastActiveDate !== today) {
    const last = new Date(state.history.lastActiveDate);
    const curr = new Date(today);
    const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      state.history.streak = (state.history.streak || 0) + 1;
    } else if (diffDays > 1) {
      state.history.streak = 1;
    }

    // Archive previous day's study time
    if (st.todaySeconds > 0) {
      st.dailyHistory[state.history.lastActiveDate] = st.todaySeconds;
    }
    st.todaySeconds = 0;
    st.lastActiveDate = today;
    state.history.lastActiveDate = today;
  }
  state.history.studyTime = st;
  saveHistoryData();
  if (ui.streakNum) ui.streakNum.textContent = state.history.streak || 1;
}

// ==========================================================================
// Pass Probability & Cutoff Algorithm
// ==========================================================================

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getAllQuestions() {
  return typeof VOCAB_QUESTIONS !== 'undefined' ? [...QUESTIONS, ...VOCAB_QUESTIONS] : QUESTIONS;
}

const BENCHMARK_COUNT = 150; // 本番問題数（約225問）に準拠した正式判定基準

function calculateOverallMetrics() {
  let totalAnswered = 0;
  let totalCorrect = 0;
  let subjectStats = {};

  const totalSubjectKeys = Object.keys(SUBJECTS);
  totalSubjectKeys.forEach(subKey => {
    subjectStats[subKey] = { answered: 0, correct: 0, accuracy: 0 };
  });

  getAllQuestions().forEach(q => {
    const item = state.history.items[q.id];
    if (item && item.count > 0) {
      totalAnswered += item.count;
      totalCorrect += (item.correctCount || 0);
      if (subjectStats[q.subject]) {
        subjectStats[q.subject].answered += item.count;
        subjectStats[q.subject].correct += (item.correctCount || 0);
      }
    }
  });

  // 各科目の正答率算出
  let coveredSubjectsCount = 0;
  Object.keys(subjectStats).forEach(k => {
    const s = subjectStats[k];
    s.accuracy = s.answered > 0 ? Math.round((s.correct / s.answered) * 100) : 0;
    if (s.answered >= 3) {
      coveredSubjectsCount++;
    }
  });

  // 実績正答率 (Raw Accuracy)
  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // 1. 予測精度・信頼度 (Confidence: 0〜100%)
  // 回答数要因 (70%): 目標 140問
  const sampleProgress = Math.min(1.0, totalAnswered / 140);
  // 科目網羅要因 (30%): 全7科目のカバー率
  const coverageProgress = coveredSubjectsCount / totalSubjectKeys.length;
  const confidence = totalAnswered === 0
    ? 0
    : Math.max(5, Math.min(100, Math.round((sampleProgress * 0.70 + coverageProgress * 0.30) * 100)));

  // 足切り科目（40%未満）の検出
  const cutoffSubjects = [];
  Object.keys(subjectStats).forEach(k => {
    if (subjectStats[k].answered >= 3 && subjectStats[k].accuracy < 40) {
      cutoffSubjects.push({ id: k, name: SUBJECTS[k].name, accuracy: subjectStats[k].accuracy });
    }
  });

  // 2. ベイズ的縮小推定（Bayesian Shrinkage）による推定合格確率 (Pass Probability)
  // 事前分布: 全国平均合格率 20%（擬似事前標本数 25問）
  let passProbability = 0;
  if (totalAnswered === 0) {
    passProbability = 0;
  } else {
    const PRIOR_M = 25;
    const PRIOR_ACC = 0.20; // 中小企業診断士の基礎合格率水準
    const shrunkAccuracy = (PRIOR_M * PRIOR_ACC + totalCorrect) / (PRIOR_M + totalAnswered);

    // シグモイドスケーリング（合格基準60%で確率約60%、75%で約85%、45%で約15%）
    const z = (shrunkAccuracy - 0.52) * 8.5;
    let baseProb = Math.round((1 / (1 + Math.exp(-z))) * 100);

    // 足切りペナルティ（40%未満の科目1つにつき合格確率半減）
    if (cutoffSubjects.length > 0) {
      baseProb = Math.round(baseProb * Math.pow(0.5, cutoffSubjects.length));
    }

    // 未着手科目の不確実性ペナルティ（解いていない科目は足切りリスクがあるため）
    const uncoveredCount = totalSubjectKeys.length - coveredSubjectsCount;
    if (confidence < 70) {
      baseProb = Math.max(5, baseProb - (uncoveredCount * 2));
    }

    // 上限・下限ガード（試験に絶対の100%はないため最大98%、最低3%）
    passProbability = Math.max(3, Math.min(98, baseProb));
  }

  // 3. 判定ランク (Grade) とステータス
  const isUnlocked = confidence >= 70;
  let grade = 'C';
  let gradeClass = 'grade-c';
  let gradeLabel = '';
  let advice = '';

  if (confidence < 25) {
    // データ蓄積中（サンプル数不足）
    grade = '測定中';
    gradeClass = 'grade-c';
    gradeLabel = `データ蓄積中 (${confidence}%)`;
    advice = `現在${totalAnswered}問解答・${coveredSubjectsCount}/7科目着手。正答率は${overallAccuracy}%と良好ですが、サンプル不足のため推定合格確率は${passProbability}%（予測精度${confidence}%）です。全7科目を解き進めると精度が急上昇します！`;
  } else if (confidence < 70) {
    // 暫定判定（30問〜100問程度）
    if (cutoffSubjects.length > 0) {
      grade = 'D';
      gradeClass = 'grade-d';
      gradeLabel = '暫定 D判定 (足切り警告)';
      advice = `${cutoffSubjects.map(c => c.name).join('・')}で足切り（40%未満）リスクを検知！弱点科目を優先的に対策してください。`;
    } else if (passProbability >= 70) {
      grade = 'B+';
      gradeClass = 'grade-a';
      gradeLabel = '暫定 B+判定';
      advice = `合格圏に近づいています（推定合格率${passProbability}%）。未着手科目を埋めて本判定（信頼度70%以上）を目指しましょう。`;
    } else if (passProbability >= 50) {
      grade = 'B';
      gradeClass = 'grade-b';
      gradeLabel = '暫定 B判定';
      advice = `現在の実力は当落線上です。頻出重要論点の演習を重ねて確実なA判定圏を狙いましょう。`;
    } else {
      grade = 'C';
      gradeClass = 'grade-c';
      gradeLabel = '暫定 C判定';
      advice = `基礎知識の定着フェーズです。科目別トレーニングと解説の熟読で得点源を増やしましょう。`;
    }
  } else {
    // 正式本判定 (アンロック完了)
    if (cutoffSubjects.length > 0) {
      grade = 'D';
      gradeClass = 'grade-d';
      gradeLabel = 'D判定 (足切り発生)';
      advice = `全体正答率は${overallAccuracy}%ですが、${cutoffSubjects.map(c => c.name).join('・')}が足切りラインです。最優先で補強してください。`;
    } else if (passProbability >= 88) {
      grade = 'S';
      gradeClass = 'grade-s';
      gradeLabel = 'S判定 (超安全圏)';
      advice = `全国トップレベルの実力です（推定合格率${passProbability}%）！全科目が極めて安定しています。`;
    } else if (passProbability >= 75) {
      grade = 'A';
      gradeClass = 'grade-a';
      gradeLabel = 'A判定 (合格安全圏)';
      advice = `合格安全圏に到達しています（推定合格率${passProbability}%）。模試で時間配分とケアレスミス防止を確認しましょう。`;
    } else if (passProbability >= 60) {
      grade = 'B';
      gradeClass = 'grade-b';
      gradeLabel = 'B判定 (合格ボーダー)';
      advice = `合格基準（推定合格率${passProbability}%）をクリア！あと数問の得点力向上で盤石なA判定に入ります。`;
    } else if (passProbability >= 45) {
      grade = 'C';
      gradeClass = 'grade-c';
      gradeLabel = 'C判定 (努力圏)';
      advice = `合格まであと一歩。Anki復習モードで間違えた問題を徹底的に克服しましょう。`;
    } else {
      grade = 'E';
      gradeClass = 'grade-e';
      gradeLabel = 'E判定 (要基礎固め)';
      advice = `まずは頻出基本論点の暗記ポイントを1科目ずつ固めていきましょう。`;
    }
  }

  return {
    totalAnswered,
    totalCorrect,
    overallAccuracy,
    passProbability,
    isUnlocked,
    confidence,
    coveredSubjectsCount,
    totalSubjectCount: totalSubjectKeys.length,
    remainingCount: Math.max(0, BENCHMARK_COUNT - totalAnswered),
    grade,
    gradeClass,
    gradeLabel,
    advice,
    cutoffSubjects,
    subjectStats
  };
}

function updatePassMetricsUI() {
  const metrics = calculateOverallMetrics();

  // Benchmark Progress Bar
  if (ui.benchCountText) {
    ui.benchCountText.textContent = `現在 ${metrics.totalAnswered} / ${BENCHMARK_COUNT}問 達成 (予測精度 ${metrics.confidence}%)`;
  }
  if (ui.benchFillBar) {
    ui.benchFillBar.style.width = `${metrics.confidence}%`;
  }

  // Top Bar Meter
  if (ui.topPassGrade) {
    if (metrics.isUnlocked) {
      ui.topPassGrade.textContent = `${metrics.grade}判定 (${metrics.passProbability}%)`;
      ui.topPassGrade.className = `prob-badge ${metrics.gradeClass}`;
    } else {
      ui.topPassGrade.textContent = `合格率 ${metrics.passProbability}% (精度${metrics.confidence}%)`;
      ui.topPassGrade.className = `prob-badge ${metrics.gradeClass}`;
    }
  }
  if (ui.topPassRate) {
    ui.topPassRate.textContent = `${metrics.passProbability}%`;
  }

  // Hero Card
  if (ui.heroHeadlineText) {
    ui.heroHeadlineText.innerHTML = metrics.isUnlocked
      ? `正式合格判定: <span class="highlight-grade" id="heroPassGrade">${metrics.grade} 判定 (${metrics.passProbability}%)</span>`
      : `AI合格判定: <span class="highlight-grade" id="heroPassGrade" style="color: #60a5fa;">${metrics.gradeLabel}</span>`;
  }
  if (ui.heroPassProbPct) {
    ui.heroPassProbPct.textContent = `${metrics.passProbability}%`;
  }
  if (ui.heroGaugeSub) {
    ui.heroGaugeSub.textContent = `予測精度 ${metrics.confidence}%`;
  }
  if (ui.heroPassSummary) {
    ui.heroPassSummary.textContent = metrics.advice;
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
  return getAllQuestions().filter(q => {
    const item = state.history.items[q.id];
    if (!item) return false;
    return item.nextDueDate <= now;
  });
}

function getWeaknessQuestions() {
  return getAllQuestions().filter(q => {
    const item = state.history.items[q.id];
    return item && item.wrongCount > 0;
  });
}

// ==========================================================================
// Render Views: Home, Analytics, Results
// ==========================================================================

function renderHomeScreen() {
  updatePassMetricsUI();
  renderDailyMissionCard();
  const metrics = calculateOverallMetrics();

  // Highlight active year pill
  document.querySelectorAll('.year-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-year') === state.selectedYear);
  });

  // Toggle year archive card visibility based on practice mode
  if (ui.examYearSelectorCard) {
    ui.examYearSelectorCard.style.display = state.practiceMode === 'vocab' ? 'none' : 'block';
  }

  // Render 7 Subjects Mosaic
  if (ui.subjectsMosaic) {
    const isVocab = state.practiceMode === 'vocab';
    ui.subjectsMosaic.innerHTML = Object.keys(SUBJECTS).map(subKey => {
      const sub = SUBJECTS[subKey];
      let questionsInSub = [];
      let countLabel = '';

      if (isVocab) {
        questionsInSub = (typeof VOCAB_QUESTIONS !== 'undefined' ? VOCAB_QUESTIONS : []).filter(q => q.subject === subKey);
        countLabel = `${questionsInSub.length}問 (スピード用語)`;
      } else {
        questionsInSub = QUESTIONS.filter(q => q.subject === subKey);
        if (state.selectedYear !== 'all') {
          questionsInSub = questionsInSub.filter(q => q.year === state.selectedYear);
        }
        const yearLabel = state.selectedYear === 'all' ? '精選全問' : state.selectedYear;
        countLabel = `${questionsInSub.length}問 (${yearLabel})`;
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

      let subCatsHtml = '';
      if (!isVocab && typeof SUBJECT_SUBCATEGORIES !== 'undefined' && SUBJECT_SUBCATEGORIES[subKey]) {
        const subCats = SUBJECT_SUBCATEGORIES[subKey].filter(sc => sc.id !== 'all');
        const chipsHtml = subCats.map(sc => {
          const count = questionsInSub.filter(q => typeof getQuestionSubCategory === 'function' && getQuestionSubCategory(q) === sc.id).length;
          return `
            <button class="subcat-chip-btn" data-subject-id="${subKey}" data-subcat-id="${sc.id}" title="${escapeHtml(sc.desc || sc.name)}">
              <span>${sc.icon} ${escapeHtml(sc.name)}</span>
              <span class="sc-count">${count}問</span>
            </button>
          `;
        }).join('');

        subCatsHtml = `
          <div class="tile-subcats-box">
            <div class="subcat-label-row">
              <span class="subcat-label-text">📌 論点・小カテゴリ限定特訓:</span>
            </div>
            <div class="subcat-chips-list">
              <button class="subcat-chip-btn" data-subject-id="${subKey}" data-subcat-id="all" style="border-color: rgba(255,255,255,0.18);">
                <span>🌐 全範囲</span>
                <span class="sc-count">${questionsInSub.length}問</span>
              </button>
              ${chipsHtml}
            </div>
          </div>
        `;
      }

      return `
        <article class="subject-tile" data-subject-id="${subKey}">
          <div class="tile-top">
            <div class="tile-icon-title">
              <span class="tile-icon">${sub.icon}</span>
              <div>
                <h4 class="tile-title">${sub.name}</h4>
                <span class="tile-questions-count">${countLabel}</span>
              </div>
            </div>
            ${gradeBadge}
          </div>

          <p class="tile-desc">${isVocab ? 'スキマ時間に一問一答！同分野の紛らわしい類似用語を比較選択' : sub.desc}</p>

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

          ${subCatsHtml}
        </article>
      `;
    }).join('');

    // Bind sub-category chip clicks (優先実行)
    document.querySelectorAll('.subcat-chip-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // タイル全体のクリックを発火させない
        const subId = btn.getAttribute('data-subject-id');
        const subCatId = btn.getAttribute('data-subcat-id');
        startQuizSession('subject', subId, subCatId);
      });
    });

    // Bind tile clicks (実戦過去問モードは小カテゴリ選択モーダルを開く、一問一答は即開始)
    document.querySelectorAll('.subject-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const subId = tile.getAttribute('data-subject-id');
        if (isVocab) {
          startQuizSession('vocab', subId, 'all');
        } else {
          openSubCategoryModal(subId);
        }
      });
    });
  }

  // 常時表示 小カテゴリセレクターの描画
  renderSubcatFastPanel();
}

// ==========================================================================
// 小カテゴリ選択モーダル (Sub-Category Selection Modal)
// ==========================================================================

function openSubCategoryModal(subjectId) {
  const sub = SUBJECTS[subjectId];
  if (!sub) return;

  state.modalSubjectId = subjectId;

  if (ui.subcatModalIcon) ui.subcatModalIcon.textContent = sub.icon;
  if (ui.subcatModalTitle) ui.subcatModalTitle.textContent = sub.name;
  if (ui.subcatModalSub) {
    const yearLabel = state.selectedYear === 'all' ? '全年度' : state.selectedYear;
    ui.subcatModalSub.textContent = `演習する論点・小カテゴリを選択してください (${yearLabel})`;
  }

  // Update order mode pills state inside modal
  if (ui.mBtnOrderRandom && ui.mBtnOrderSeq) {
    ui.mBtnOrderRandom.classList.toggle('active', state.quizOrderMode === 'smart_random');
    ui.mBtnOrderSeq.classList.toggle('active', state.quizOrderMode === 'sequential');
  }

  // Populate sub-categories list
  if (ui.subcatModalList && typeof SUBJECT_SUBCATEGORIES !== 'undefined') {
    const subCats = SUBJECT_SUBCATEGORIES[subjectId] || [];
    let qList = QUESTIONS.filter(q => q.subject === subjectId);
    if (state.selectedYear !== 'all') {
      const yearFiltered = qList.filter(q => q.year === state.selectedYear);
      if (yearFiltered.length > 0) qList = yearFiltered;
    }

    ui.subcatModalList.innerHTML = subCats.map(sc => {
      const filtered = sc.id === 'all'
        ? qList
        : qList.filter(q => typeof getQuestionSubCategory === 'function' && getQuestionSubCategory(q) === sc.id);

      return `
        <div class="subcat-card-item" onclick="selectSubCategoryAndStart('${subjectId}', '${sc.id}')">
          <div class="subcat-card-left">
            <span class="subcat-item-icon">${sc.icon}</span>
            <div>
              <h4 class="subcat-item-name">${escapeHtml(sc.name)}</h4>
              <p class="subcat-item-desc">${escapeHtml(sc.desc || '科目の全範囲からバランスよく演習')}</p>
            </div>
          </div>
          <div class="subcat-item-right">
            <span class="subcat-item-count-badge">${filtered.length}問</span>
            <button class="subcat-item-start-btn">▶️ 特訓開始</button>
          </div>
        </div>
      `;
    }).join('');
  }

  if (ui.subCategoryModal) {
    ui.subCategoryModal.style.display = 'flex';
  }
}

function closeSubCategoryModal() {
  if (ui.subCategoryModal) {
    ui.subCategoryModal.style.display = 'none';
  }
}

function selectSubCategoryAndStart(subjectId, subCategoryId) {
  closeSubCategoryModal();
  startQuizSession('subject', subjectId, subCategoryId);
}

// ==========================================================================
// 常時表示 論点・小カテゴリ限定特訓セレクター (Fast Panel)
// ==========================================================================

function renderSubcatFastPanel(subjectId = null) {
  if (!ui.subcatFastPanel) return;

  if (state.practiceMode === 'vocab') {
    ui.subcatFastPanel.style.display = 'none';
    return;
  }
  ui.subcatFastPanel.style.display = 'block';

  const currentSub = subjectId || state.fastPanelSubject || 'management';
  state.fastPanelSubject = currentSub;

  // Update tabs active state
  if (ui.subcatFastSubjectTabs) {
    ui.subcatFastSubjectTabs.querySelectorAll('.sf-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-subject') === currentSub);
    });
  }

  // Populate chips
  if (ui.subcatFastChipsRow && typeof SUBJECT_SUBCATEGORIES !== 'undefined') {
    const subCats = SUBJECT_SUBCATEGORIES[currentSub] || [];
    let qList = QUESTIONS.filter(q => q.subject === currentSub);
    if (state.selectedYear !== 'all') {
      const yearFiltered = qList.filter(q => q.year === state.selectedYear);
      if (yearFiltered.length > 0) qList = yearFiltered;
    }

    ui.subcatFastChipsRow.innerHTML = subCats.map(sc => {
      const filtered = sc.id === 'all'
        ? qList
        : qList.filter(q => typeof getQuestionSubCategory === 'function' && getQuestionSubCategory(q) === sc.id);

      return `
        <div class="sf-chip-card" onclick="selectSubCategoryAndStart('${currentSub}', '${sc.id}')">
          <div class="sf-chip-card-left">
            <span class="sf-chip-icon">${sc.icon}</span>
            <div>
              <h5 class="sf-chip-name">${escapeHtml(sc.name)}</h5>
              <p class="sf-chip-desc">${escapeHtml(sc.desc || '科目の全範囲からバランスよく出題')}</p>
            </div>
          </div>
          <span class="sf-chip-badge">${filtered.length}問 ▶️</span>
        </div>
      `;
    }).join('');
  }
}

function renderAnalyticsScreen() {
  const metrics = calculateOverallMetrics();

  if (ui.diagPassProbBig) ui.diagPassProbBig.textContent = `${metrics.passProbability}%`;
  if (ui.diagGradeBig) {
    ui.diagGradeBig.textContent = metrics.gradeLabel || `${metrics.grade} 判定`;
    ui.diagGradeBig.className = `diag-grade-tag ${metrics.gradeClass}`;
  }
  if (ui.diagConfidenceBadge) {
    ui.diagConfidenceBadge.textContent = `予測精度: ${metrics.confidence}%`;
    ui.diagConfidenceBadge.style.color = metrics.confidence >= 70 ? '#10b981' : (metrics.confidence >= 30 ? '#f59e0b' : '#60a5fa');
  }
  if (ui.diagConfidencePct) {
    ui.diagConfidencePct.textContent = `${metrics.confidence}% (着手 ${metrics.coveredSubjectsCount}/${metrics.totalSubjectCount}科目)`;
  }
  if (ui.diagConfidenceBar) {
    ui.diagConfidenceBar.style.width = `${metrics.confidence}%`;
  }
  if (ui.diagAdviceText) ui.diagAdviceText.textContent = metrics.advice;

  if (ui.diagTotalAnswered) ui.diagTotalAnswered.textContent = `${metrics.totalAnswered} 問`;
  if (ui.diagTotalCorrect) ui.diagTotalCorrect.textContent = `${metrics.totalCorrect} 問`;
  if (ui.diagTotalAccuracy) ui.diagTotalAccuracy.textContent = `${metrics.overallAccuracy} % (実績正答率)`;
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

  updateStudyTimeUI();
  renderAchievementsGrid();
}

// ==========================================================================
// Quiz Session Management (Start, Options, Elimination, Anki, Finish)
// ==========================================================================

// 出題順序ソート（均等スマートランダム または 順番に解く）
function sortQuestionsByOrder(questions, orderMode = 'smart_random') {
  if (!questions || questions.length <= 1) return questions || [];

  if (orderMode === 'sequential') {
    // 順番に解く：年度順（最新順）、問題番号順
    return [...questions].sort((a, b) => {
      if (a.year !== b.year) return (b.year || '').localeCompare(a.year || '');
      const numA = parseInt((a.questionNumber || a.id || '').replace(/[^0-9]/g, '')) || 0;
      const numB = parseInt((b.questionNumber || b.id || '').replace(/[^0-9]/g, '')) || 0;
      if (numA !== numB) return numA - numB;
      return (a.id || '').localeCompare(b.id || '');
    });
  }

  // スマートランダム（未演習・低演習頻度優先 ＆ 均等出題）
  const items = state.history.items || {};
  return [...questions].sort((a, b) => {
    const recA = items[a.id];
    const recB = items[b.id];
    const countA = recA ? (recA.count || 0) : 0;
    const countB = recB ? (recB.count || 0) : 0;

    // 1. 解いた回数が少ない問題を最優先（未演習を先に）
    if (countA !== countB) {
      return countA - countB;
    }

    // 2. 回数が同じ場合は、最近解いた問題を後回し（昔解いた問題を優先）
    const lastA = recA && recA.lastTested ? new Date(recA.lastTested).getTime() : 0;
    const lastB = recB && recB.lastTested ? new Date(recB.lastTested).getTime() : 0;
    if (lastA !== lastB) {
      return lastA - lastB;
    }

    // 3. その他はランダム
    return Math.random() - 0.5;
  });
}

function startQuizSession(mode, subjectId = null, subCategoryId = 'all') {
  // Clear any existing timer
  if (state.session.timerId) clearInterval(state.session.timerId);

  state.session.mode = mode;
  state.session.subjectId = subjectId;
  state.session.subCategoryId = subCategoryId || 'all';
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

    // 小カテゴリ絞り込み（全範囲以外の場合）
    if (subCategoryId && subCategoryId !== 'all' && typeof getQuestionSubCategory === 'function') {
      qList = qList.filter(q => getQuestionSubCategory(q) === subCategoryId);
    }

    // 出題順序の適用（スマート均等ランダム または 順番に解く）
    state.session.questions = sortQuestionsByOrder(qList, state.quizOrderMode);

    const yearSuffix = state.selectedYear === 'all' ? '' : ` (${state.selectedYear})`;
    let subCatSuffix = '';
    if (subCategoryId && subCategoryId !== 'all' && typeof SUBJECT_SUBCATEGORIES !== 'undefined' && SUBJECT_SUBCATEGORIES[subjectId]) {
      const scObj = SUBJECT_SUBCATEGORIES[subjectId].find(sc => sc.id === subCategoryId);
      if (scObj) subCatSuffix = ` • ${scObj.name}`;
    }
    const orderSuffix = state.quizOrderMode === 'sequential' ? ' [通し番号順]' : ' [均等ランダム]';

    ui.quizModePill.textContent = `科目別演習${yearSuffix}${subCatSuffix}${orderSuffix}`;
    ui.examTimerBox.style.display = 'none';
  } else if (mode === 'vocab') {
    let vList = (typeof VOCAB_QUESTIONS !== 'undefined' ? VOCAB_QUESTIONS : []).filter(q => q.subject === subjectId);
    state.session.questions = sortQuestionsByOrder(vList, state.quizOrderMode);
    const orderSuffix = state.quizOrderMode === 'sequential' ? ' [通し番号順]' : ' [均等ランダム]';
    ui.quizModePill.textContent = `⚡ スピード用語マスター${orderSuffix}`;
    ui.examTimerBox.style.display = 'none';
  } else if (mode === 'mock') {
    // 予想模擬試験: MOCK_EXAM_CONFIG から厳選出題
    state.session.questions = MOCK_EXAM_CONFIG.questionIds
      .map(id => QUESTIONS.find(q => q.id === id))
      .filter(Boolean);
    ui.quizModePill.textContent = '⏱ 2026/2027年 予想模擬試験';
    ui.examTimerBox.style.display = 'flex';
    startMockTimer(MOCK_EXAM_CONFIG.timeLimitMinutes * 60);
  } else if (mode === 'weakness') {
    state.session.questions = sortQuestionsByOrder(getWeaknessQuestions(), state.quizOrderMode);
    ui.quizModePill.textContent = '⚠️ 弱点克服';
    ui.examTimerBox.style.display = 'none';
  } else if (mode === 'anki') {
    const due = getDueReviewQuestions();
    state.session.questions = due.length > 0 ? due : sortQuestionsByOrder(QUESTIONS, 'smart_random').slice(0, 10);
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
  const sourceLabel = q.term ? `⚡ 用語: ${q.term}` : (q.source || (q.year ? `${q.year}${q.questionNumber ? ' ' + q.questionNumber : ''}` : '精選過去問'));
  ui.qSourceChip.textContent = sourceLabel;
  
  // Stars difficulty
  const diff = q.difficulty || 2;
  const stars = q.term ? '⚡ 一問一答' : (diff === 1 ? '★☆☆ (基本)' : diff === 2 ? '★★☆ (標準)' : '★★★ (難関)');
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
  if (q.term) {
    ui.questionTextArea.innerHTML = `<span class="term-highlight-badge">対象用語</span><strong style="color:#e2e8f0;font-size:1.08em;">【${escapeHtml(q.term)}】</strong><br><br>${escapeHtml(q.question)}`;
  } else {
    ui.questionTextArea.textContent = q.question;
  }

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
    awardPlayerExp(20, '正解');
  }

  // Update Daily Missions & Achievements
  updateDailyMissions('questions', 1);
  if (state.session.mode === 'anki') updateDailyMissions('anki', true);
  checkAchievements();

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
  const allViews = [ui.viewHome, ui.viewMockExam, ui.viewWeakness, ui.viewQuiz, ui.viewResult, ui.viewAnalytics, ui.viewCaseExam, ui.viewMba];
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
  if (viewId === 'viewMba') {
    if (ui.mbaQuizView.style.display !== 'none') {
      // Keep quiz in progress
    } else {
      renderMbaTopScreen();
    }
  }
  if (viewId === 'viewCaseExam') {
    // ワークスペースを開いている場合は一覧に戻すか確認
    if (ui.caseWorkspaceView.style.display === 'flex') {
      // ワークスペースのまま
    } else {
      renderCaseListScreen(state.caseExam.filter);
    }
  }

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
  // Order Mode Switcher (スマート均等ランダム vs 順番に解く)
  ui.btnOrderSmartRandom?.addEventListener('click', () => {
    state.quizOrderMode = 'smart_random';
    ui.btnOrderSmartRandom.classList.add('active');
    ui.btnOrderSequential?.classList.remove('active');
    if (ui.orderModeDescText) {
      ui.orderModeDescText.textContent = '💡 現在【ランダム（均等出題）】に設定中：未演習の問題や解いた回数の少ない問題が優先して出題され、同じ問題ばかりが偏りません。';
    }
    showToast('🎲 出題順: 未演習・均等優先ランダム');
  });

  ui.btnOrderSequential?.addEventListener('click', () => {
    state.quizOrderMode = 'sequential';
    ui.btnOrderSequential.classList.add('active');
    ui.btnOrderSmartRandom?.classList.remove('active');
    if (ui.orderModeDescText) {
      ui.orderModeDescText.textContent = '📋 現在【順番に解く】に設定中：本試験の出題年度順・第1問〜第40問の通し番号順に体系的に演習します。';
    }
    showToast('📋 出題順: 通し番号順（第1問〜）');
  });

  // Modal Order Mode Switcher
  ui.mBtnOrderRandom?.addEventListener('click', () => {
    state.quizOrderMode = 'smart_random';
    ui.mBtnOrderRandom.classList.add('active');
    ui.mBtnOrderSeq?.classList.remove('active');
    ui.btnOrderSmartRandom?.classList.add('active');
    ui.btnOrderSequential?.classList.remove('active');
    showToast('🎲 出題順: 未演習・均等優先ランダム');
  });

  ui.mBtnOrderSeq?.addEventListener('click', () => {
    state.quizOrderMode = 'sequential';
    ui.mBtnOrderSeq.classList.add('active');
    ui.mBtnOrderRandom?.classList.remove('active');
    ui.btnOrderSequential?.classList.add('active');
    ui.btnOrderSmartRandom?.classList.remove('active');
    showToast('📋 出題順: 通し番号順（第1問〜）');
  });

  // Modal Close Button
  ui.btnCloseSubcatModal?.addEventListener('click', closeSubCategoryModal);

  // Sub-Category Fast Panel Subject Tabs
  ui.subcatFastSubjectTabs?.querySelectorAll('.sf-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const subId = tab.getAttribute('data-subject');
      if (subId) renderSubcatFastPanel(subId);
    });
  });

  // Practice Mode Switcher (実戦過去問 vs スピード用語マスター)
  ui.tabModeExam?.addEventListener('click', () => {
    state.practiceMode = 'exam';
    ui.tabModeExam.classList.add('active');
    ui.tabModeVocab?.classList.remove('active');
    if (ui.modeSwitcherDesc) {
      ui.modeSwitcherDesc.textContent = '本試験形式の実戦長文問題。消去法チェック＆法改正注記付きで本番得点力を養成。';
    }
    renderHomeScreen();
  });

  ui.tabModeVocab?.addEventListener('click', () => {
    state.practiceMode = 'vocab';
    ui.tabModeVocab.classList.add('active');
    ui.tabModeExam?.classList.remove('active');
    if (ui.modeSwitcherDesc) {
      ui.modeSwitcherDesc.textContent = '⚡ スピード用語マスター（一問一答 515問）：1問5〜10秒で意味・キーワードを選択。スキマ時間の暗記特訓に最適！';
    }
    renderHomeScreen();
  });

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
    } else if (state.currentView === 'viewMba') {
      if (ui.mbaQuizView.style.display !== 'none' || ui.mbaResultView.style.display !== 'none') {
        closeMbaQuiz();
      } else {
        switchView('viewHome');
      }
    } else if (state.currentView === 'viewCaseExam') {
      if (ui.caseWorkspaceView.style.display !== 'none') {
        closeCaseWorkspace();
      } else {
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

// ==========================================================================
// 第2次筆記試験 実戦ケーススタディ演習 (事例 I〜IV 全8事例) モジュール
// ==========================================================================

const CASE_DRAFT_KEY = 'shindanshi_case_drafts_v1';

function initCaseExam() {
  loadCaseDrafts();

  // Filter Buttons
  document.querySelectorAll('.case-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.case-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.caseExam.filter = btn.getAttribute('data-filter') || 'all';
      renderCaseListScreen(state.caseExam.filter);
    });
  });

  // Workspace Back Button
  ui.btnCaseBackToList?.addEventListener('click', () => {
    closeCaseWorkspace();
  });

  // Timer Toggle
  ui.btnCaseTimerToggle?.addEventListener('click', toggleCaseTimer);

  // Mobile Tabs (与件文 / 設問)
  ui.btnMobTabStory?.addEventListener('click', () => {
    ui.btnMobTabStory.classList.add('active');
    ui.btnMobTabQuestions.classList.remove('active');
    ui.caseStoryPane.classList.remove('hidden-mob');
    ui.caseQuestionsPane.classList.add('hidden-mob');
  });

  ui.btnMobTabQuestions?.addEventListener('click', () => {
    ui.btnMobTabQuestions.classList.add('active');
    ui.btnMobTabStory.classList.remove('active');
    ui.caseQuestionsPane.classList.remove('hidden-mob');
    ui.caseStoryPane.classList.add('hidden-mob');
  });

  // Modal Close Buttons
  ui.btnCloseCaseModal?.addEventListener('click', closeCaseResultModal);
  ui.btnModalCloseSecondary?.addEventListener('click', closeCaseResultModal);
  ui.btnModalNextQ?.addEventListener('click', () => {
    closeCaseResultModal();
    const c = state.caseExam.activeCase;
    if (!c) return;
    const nextIdx = state.caseExam.activeQuestionIndex + 1;
    if (nextIdx < c.questions.length) {
      renderCaseQuestion(nextIdx);
    } else {
      showToast('🎉 この事例の全設問を完答しました！');
    }
  });
}

function loadCaseDrafts() {
  try {
    const raw = localStorage.getItem(CASE_DRAFT_KEY);
    if (raw) {
      state.caseExam.drafts = JSON.parse(raw);
    }
  } catch (e) {
    console.error('Case drafts load error', e);
  }
}

function saveCaseDraft(caseId, fieldKey, text) {
  if (!state.caseExam.drafts[caseId]) {
    state.caseExam.drafts[caseId] = {};
  }
  state.caseExam.drafts[caseId][fieldKey] = text;
  try {
    localStorage.setItem(CASE_DRAFT_KEY, JSON.stringify(state.caseExam.drafts));
    if (ui.caseDraftIndicator) {
      ui.caseDraftIndicator.textContent = '💾 自動保存済';
      ui.caseDraftIndicator.style.color = '#10b981';
    }
  } catch (e) {
    console.error('Failed to save draft', e);
  }
}

function renderCaseListScreen(filter = 'all') {
  if (!ui.caseCardsGrid) return;
  const cases = window.CASES_DATA || [];
  const filtered = filter === 'all' ? cases : cases.filter(c => c.caseType === filter);

  if (filtered.length === 0) {
    ui.caseCardsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        該当する事例が見つかりませんでした。
      </div>
    `;
    return;
  }

  const badgeClasses = {
    case1: 'badge-case1',
    case2: 'badge-case2',
    case3: 'badge-case3',
    case4: 'badge-case4'
  };

  ui.caseCardsGrid.innerHTML = filtered.map(c => {
    const badgeCls = badgeClasses[c.caseType] || 'badge-case1';
    const draftCount = state.caseExam.drafts[c.id] ? Object.keys(state.caseExam.drafts[c.id]).length : 0;
    const draftBadge = draftCount > 0 ? `<span style="font-size: 0.72rem; color: #10b981; font-weight: 700;">💾 下書き保存あり</span>` : '';

    return `
      <div class="case-card">
        <div>
          <div class="case-card-header">
            <span class="case-badge-pill ${badgeCls}">${escapeHtml(c.caseTypeName)}</span>
            <span class="case-time-pill">⏱ ${c.timeLimitMinutes || 80}分 / 配点100点</span>
          </div>
          <h3 class="case-card-title">${escapeHtml(c.title)}</h3>
          <div class="case-card-meta">
            <div>🏢 <strong>業種:</strong> ${escapeHtml(c.industry)}</div>
            <div>👥 <strong>規模:</strong> ${escapeHtml(c.scale)}</div>
          </div>
          <p class="case-card-desc">${escapeHtml(c.companyProfile?.features || '')}</p>
        </div>

        <div class="case-card-footer">
          <div class="case-q-count">
            <span>📝 全${c.questions?.length || 0}問</span>
            ${draftBadge ? `&nbsp;•&nbsp;${draftBadge}` : ''}
          </div>
          <button class="btn-start-case" onclick="startCaseWorkspace('${c.id}')">
            ✍️ 演習を開始
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function startCaseWorkspace(caseId) {
  const cases = window.CASES_DATA || [];
  const targetCase = cases.find(c => c.id === caseId);
  if (!targetCase) {
    showToast('事例データが見つかりませんでした');
    return;
  }

  state.caseExam.activeCase = targetCase;
  state.caseExam.activeQuestionIndex = 0;

  // UI Setup
  ui.caseListView.style.display = 'none';
  ui.caseWorkspaceView.style.display = 'flex';
  ui.btnHeaderBack.style.display = 'flex';

  // Workspace Header
  ui.wsCaseTypeBadge.textContent = targetCase.caseTypeName;
  ui.wsCaseTypeBadge.className = `case-type-badge badge-${targetCase.caseType}`;
  ui.wsCaseTitle.textContent = targetCase.title;

  // Reset & Start 80min Timer
  state.caseExam.timerSeconds = (targetCase.timeLimitMinutes || 80) * 60;
  startCaseTimer();

  // Render Story Pane
  ui.storyCompanyName.textContent = targetCase.companyProfile?.business || targetCase.title;
  ui.storyCompanyMeta.innerHTML = `
    <span class="comp-tag">🏢 ${escapeHtml(targetCase.industry)}</span>
    <span class="comp-tag">👥 ${escapeHtml(targetCase.scale)}</span>
  `;
  ui.storyCompanySummary.innerHTML = `
    <div style="margin-bottom: 0.4rem;"><strong>【沿革・背景】</strong> ${escapeHtml(targetCase.companyProfile?.history || '')}</div>
    <div><strong>【強み・特徴】</strong> ${escapeHtml(targetCase.companyProfile?.features || '')}</div>
  `;

  // Financial Tables (Case IV)
  if (targetCase.financialData && ui.caseFinancialsArea) {
    ui.caseFinancialsArea.style.display = 'block';
    renderFinancialTables(targetCase.financialData);
  } else if (ui.caseFinancialsArea) {
    ui.caseFinancialsArea.style.display = 'none';
  }

  // Render Paragraphs
  ui.storyParagraphs.innerHTML = (targetCase.story || []).map(p => {
    return `
      <div class="story-para">
        <span class="para-num-badge">第${p.paraNum}段落</span>
        ${escapeHtml(p.text)}
      </div>
    `;
  }).join('');

  // Render Questions Nav & Active Question
  renderCaseQuestionsNav();
  renderCaseQuestion(0);

  // Mobile reset
  if (window.innerWidth <= 900) {
    ui.btnMobTabStory?.click();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeCaseWorkspace() {
  if (confirm('事例演習を終了して事例一覧に戻りますか？\n（入力した記述は自動保存されています）')) {
    stopCaseTimer();
    ui.caseWorkspaceView.style.display = 'none';
    ui.caseListView.style.display = 'flex';
    renderCaseListScreen(state.caseExam.filter);
  }
}

function startCaseTimer() {
  stopCaseTimer();
  state.caseExam.timerRunning = true;
  updateTimerDisplay();

  state.caseExam.timerInterval = setInterval(() => {
    if (!state.caseExam.timerRunning) return;
    if (state.caseExam.timerSeconds > 0) {
      state.caseExam.timerSeconds--;
      updateTimerDisplay();
      if (state.caseExam.timerSeconds === 10 * 60) {
        showToast('⚠️ 残り時間 10分 です！見直しを行いましょう。');
      }
    } else {
      stopCaseTimer();
      alert('⏱ 80分の制限時間が経過しました。記述内容の自己採点を行いましょう！');
    }
  }, 1000);
}

function stopCaseTimer() {
  if (state.caseExam.timerInterval) {
    clearInterval(state.caseExam.timerInterval);
    state.caseExam.timerInterval = null;
  }
  state.caseExam.timerRunning = false;
}

function toggleCaseTimer() {
  if (state.caseExam.timerRunning) {
    state.caseExam.timerRunning = false;
    if (ui.btnCaseTimerToggle) ui.btnCaseTimerToggle.textContent = '▶️';
    showToast('タイマーを一時停止しました');
  } else {
    state.caseExam.timerRunning = true;
    if (ui.btnCaseTimerToggle) ui.btnCaseTimerToggle.textContent = '⏸';
    showToast('タイマーを再開しました');
  }
}

function updateTimerDisplay() {
  if (!ui.caseTimerDisplay) return;
  const totalSec = state.caseExam.timerSeconds;
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  ui.caseTimerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  if (totalSec <= 10 * 60) {
    ui.caseTimerDisplay.style.color = '#ef4444';
  } else {
    ui.caseTimerDisplay.style.color = '#fbbf24';
  }
}

function renderFinancialTables(finData) {
  if (!ui.financialTablesContent) return;
  let html = '';

  const renderTable = (tbl, title) => {
    if (!tbl) return '';
    let ths = tbl.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('');
    let trs = tbl.rows.map(row => {
      let isCategoryHeader = row[0].startsWith('【');
      let tds = row.map((cell, idx) => {
        let style = isCategoryHeader ? 'font-weight: 700; color: #fbbf24;' : '';
        return `<td style="${style}">${escapeHtml(cell)}</td>`;
      }).join('');
      return `<tr>${tds}</tr>`;
    }).join('');

    return `
      <div class="fin-table-box">
        <div class="fin-table-title">📑 ${escapeHtml(title)}（単位：${escapeHtml(finData.unit || '百万円')}）</div>
        <table class="fin-table">
          <thead><tr>${ths}</tr></thead>
          <tbody>${trs}</tbody>
        </table>
      </div>
    `;
  };

  if (finData.bs) html += renderTable(finData.bs, '貸借対照表（B/S）');
  if (finData.pl) html += renderTable(finData.pl, '損益計算書（P/L）');

  ui.financialTablesContent.innerHTML = html;
}

function renderCaseQuestionsNav() {
  if (!ui.caseQNav) return;
  const c = state.caseExam.activeCase;
  if (!c) return;

  ui.caseQNav.innerHTML = (c.questions || []).map((q, idx) => {
    const activeCls = idx === state.caseExam.activeQuestionIndex ? 'active' : '';
    return `
      <button class="case-q-nav-btn ${activeCls}" onclick="renderCaseQuestion(${idx})">
        第${q.questionNum}問 (${q.points}点)
      </button>
    `;
  }).join('');
}

function renderCaseQuestion(qIndex) {
  state.caseExam.activeQuestionIndex = qIndex;
  renderCaseQuestionsNav();

  const c = state.caseExam.activeCase;
  if (!c || !c.questions || !c.questions[qIndex]) return;
  const q = c.questions[qIndex];
  const caseId = c.id;
  const drafts = state.caseExam.drafts[caseId] || {};

  let html = `
    <div class="q-header-box">
      <h3 class="q-title">${escapeHtml(q.title)}</h3>
      <span class="q-points-badge">配点 ${q.points}点 / 制限 ${q.maxChars || 100}字以内</span>
    </div>
    <div class="q-desc-box">
      ${escapeHtml(q.description)}
    </div>
  `;

  if (q.subQuestions && q.subQuestions.length > 0) {
    // Has sub-questions (e.g. (a) 強み / (b) 弱み)
    html += q.subQuestions.map((sub, sIdx) => {
      const fieldKey = `q_${q.questionNum}_sub_${sub.subId}`;
      const savedText = drafts[fieldKey] || '';
      return `
        <div class="sub-q-block">
          <div class="sub-q-title">
            <span>${escapeHtml(sub.title)}</span>
            <span style="font-size: 0.8rem; color: #fbbf24;">配点 ${sub.points}点 / ${sub.maxChars}字以内</span>
          </div>
          <div class="case-textarea-wrap">
            <textarea
              class="case-answer-textarea"
              id="txt_${fieldKey}"
              rows="4"
              placeholder="ここに${sub.maxChars}字以内で記述してください..."
              oninput="onCaseAnswerInput('${caseId}', '${fieldKey}', this, 'cnt_${fieldKey}', 'status_${fieldKey}', ${sub.maxChars})"
            >${escapeHtml(savedText)}</textarea>
            <div class="char-counter-strip">
              <span class="char-count-text" id="cnt_${fieldKey}">現在 ${savedText.length} / ${sub.maxChars} 字</span>
              <span class="char-status-badge ${savedText.length > sub.maxChars ? 'status-over' : 'status-ok'}" id="status_${fieldKey}">
                ${savedText.length > sub.maxChars ? `⚠️ 文字数超過 (+${savedText.length - sub.maxChars}字)` : '✅ 制限内'}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    // Single question
    const fieldKey = `q_${q.questionNum}`;
    const savedText = drafts[fieldKey] || '';
    html += `
      <div class="sub-q-block">
        <div class="case-textarea-wrap">
          <textarea
            class="case-answer-textarea"
            id="txt_${fieldKey}"
            rows="6"
            placeholder="ここに${q.maxChars || 100}字以内で記述してください..."
            oninput="onCaseAnswerInput('${caseId}', '${fieldKey}', this, 'cnt_${fieldKey}', 'status_${fieldKey}', ${q.maxChars || 100})"
          >${escapeHtml(savedText)}</textarea>
          <div class="char-counter-strip">
            <span class="char-count-text" id="cnt_${fieldKey}">現在 ${savedText.length} / ${q.maxChars || 100} 字</span>
            <span class="char-status-badge ${savedText.length > (q.maxChars || 100) ? 'status-over' : 'status-ok'}" id="status_${fieldKey}">
              ${savedText.length > (q.maxChars || 100) ? `⚠️ 文字数超過 (+${savedText.length - (q.maxChars || 100)}字)` : '✅ 制限内'}
            </span>
          </div>
        </div>
      </div>
    `;
  }

  html += `
    <div class="q-action-row">
      <button class="btn-score-case" onclick="scoreCaseQuestion(${qIndex})">
        🎯 この設問を採点する（キーワード診断＆模範解答）
      </button>
    </div>
  `;

  ui.caseQActiveCard.innerHTML = html;
}

function onCaseAnswerInput(caseId, fieldKey, textarea, countElId, statusElId, maxChars) {
  const text = textarea.value;
  const countEl = document.getElementById(countElId);
  const statusEl = document.getElementById(statusElId);
  const len = text.length;

  if (countEl) {
    countEl.textContent = `現在 ${len} / ${maxChars} 字`;
    countEl.classList.toggle('over-limit', len > maxChars);
  }

  if (statusEl) {
    if (len > maxChars) {
      statusEl.className = 'char-status-badge status-over';
      statusEl.textContent = `⚠️ 文字数超過 (+${len - maxChars}字)`;
    } else {
      statusEl.className = 'char-status-badge status-ok';
      statusEl.textContent = '✅ 制限内';
    }
  }

  saveCaseDraft(caseId, fieldKey, text);
}

function scoreCaseQuestion(qIndex) {
  const c = state.caseExam.activeCase;
  if (!c || !c.questions || !c.questions[qIndex]) return;
  const q = c.questions[qIndex];
  const caseId = c.id;
  const drafts = state.caseExam.drafts[caseId] || {};

  let totalScore = 0;
  let maxScore = q.points;
  let subResults = [];

  const evaluateAnswer = (userText, keyPoints, maxPoints) => {
    let earned = 0;
    let matchedKws = [];
    let missedKws = [];
    const ranges = [];

    if (keyPoints && keyPoints.length > 0) {
      keyPoints.forEach(kp => {
        try {
          const pattern = kp.regex || (kp.keyword ? kp.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : null);
          if (!pattern) return;
          const re = new RegExp(pattern, 'gi');
          let match;
          let hit = false;
          while ((match = re.exec(userText)) !== null) {
            hit = true;
            if (match[0].length === 0) break; // 空マッチによる無限ループ防止
            ranges.push({ start: match.index, end: match.index + match[0].length });
          }
          if (hit) {
            earned += (kp.score || 0);
            matchedKws.push(kp);
          } else {
            missedKws.push(kp);
          }
        } catch (e) {
          missedKws.push(kp);
        }
      });
    }

    if (earned > maxPoints) earned = maxPoints;

    // 重複・隣接ハイライト区間のマージ（HTMLタグ破壊防止・XSS対策）
    ranges.sort((a, b) => a.start - b.start);
    const merged = [];
    ranges.forEach(r => {
      if (merged.length === 0) {
        merged.push({ start: r.start, end: r.end });
      } else {
        const last = merged[merged.length - 1];
        if (r.start <= last.end) {
          last.end = Math.max(last.end, r.end);
        } else {
          merged.push({ start: r.start, end: r.end });
        }
      }
    });

    // 安全にエスケープしながらハイライトHTMLを構築
    let highlightedText = '';
    let curr = 0;
    merged.forEach(r => {
      if (r.start > curr) {
        highlightedText += escapeHtml(userText.slice(curr, r.start));
      }
      highlightedText += `<span class="kw-hit">${escapeHtml(userText.slice(r.start, r.end))}</span>`;
      curr = r.end;
    });
    if (curr < userText.length) {
      highlightedText += escapeHtml(userText.slice(curr));
    }

    return {
      earned,
      maxPoints,
      matchedKws,
      missedKws,
      highlightedText: highlightedText || '<span style="color: var(--text-muted);">(未入力)</span>'
    };
  };

  if (q.subQuestions && q.subQuestions.length > 0) {
    q.subQuestions.forEach(sub => {
      const fieldKey = `q_${q.questionNum}_sub_${sub.subId}`;
      const text = drafts[fieldKey] || '';
      const evalRes = evaluateAnswer(text, sub.keyPoints || [], sub.points);
      totalScore += evalRes.earned;
      subResults.push({
        title: sub.title,
        text,
        modelAnswer: sub.modelAnswer,
        framework: sub.framework,
        evalRes
      });
    });
  } else {
    const fieldKey = `q_${q.questionNum}`;
    const text = drafts[fieldKey] || '';
    const evalRes = evaluateAnswer(text, q.keyPoints || [], q.points);
    totalScore = evalRes.earned;
    subResults.push({
      title: q.title,
      text,
      modelAnswer: q.modelAnswer,
      framework: q.framework,
      evalRes
    });
  }

  // Populate Modal UI
  ui.modalQTitle.textContent = `${q.title} 診断レポート`;

  // Award EXP for 2nd stage written answers (得点×5 EXP)
  if (totalScore > 0) {
    const caseExp = totalScore * 5;
    awardPlayerExp(caseExp, `2次筆記 ${q.title} (${totalScore}点)`);
  }

  let bodyHtml = `
    <div class="score-summary-card">
      <div>
        <span style="font-size: 0.82rem; color: var(--text-muted);">キーワード獲得得点（推定）</span>
        <div class="score-display-box">
          <span class="score-achieved">${totalScore}</span>
          <span class="score-total">/ ${maxScore} 点</span>
        </div>
      </div>
      <div>
        <span class="char-status-badge ${totalScore >= maxScore * 0.6 ? 'status-ok' : 'status-over'}" style="font-size: 0.9rem; padding: 6px 14px;">
          ${totalScore >= maxScore * 0.6 ? '🎉 合格水準クリア' : '⚠️ キーワード不足'}
        </span>
      </div>
    </div>
  `;

  subResults.forEach(sr => {
    bodyHtml += `
      <div style="background: rgba(255, 255, 255, 0.02); border-radius: 12px; padding: 1.2rem; border: 1px solid rgba(255, 255, 255, 0.06);">
        <h4 style="color: #cbd5e1; font-size: 1rem; margin: 0 0 0.8rem 0;">
          ${escapeHtml(sr.title)}
          <span style="font-size: 0.82rem; color: #10b981; float: right;">得点: ${sr.evalRes.earned} / ${sr.evalRes.maxPoints}点</span>
        </h4>

        <!-- User Answer Preview with Highlights -->
        <div style="margin-bottom: 0.8rem;">
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.3rem;">【あなたの記述と検出キーワード】</div>
          <div class="user-ans-preview">${sr.evalRes.highlightedText}</div>
        </div>

        <!-- Keyword Match Checklist -->
        <div style="margin-bottom: 1rem;">
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.4rem;">【採点キーワード診断】</div>
          <div class="kw-analysis-box">
            ${sr.evalRes.matchedKws.map(kw => `
              <div class="kw-item-row matched">
                <span>✅ <strong>${escapeHtml(kw.keyword)}</strong></span>
                <span>+${kw.score}点</span>
              </div>
            `).join('')}
            ${sr.evalRes.missedKws.map(kw => `
              <div class="kw-item-row missed">
                <span>⚠️ <strong>${escapeHtml(kw.keyword)}</strong>（不足）</span>
                <span>配点 ${kw.score}点</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Model Answer -->
        <div class="model-answer-card">
          <div style="font-size: 0.82rem; font-weight: 700; color: #93c5fd;">🏆 完全模範解答例</div>
          <p class="model-ans-text">${escapeHtml(sr.modelAnswer || q.modelAnswer || '')}</p>
        </div>

        <!-- Framework & Thought Process -->
        ${(sr.framework || q.framework) ? `
          <div class="process-expl-card" style="margin-top: 0.8rem;">
            <span class="process-framework-tag">💡 思考プロセス・活用フレームワーク</span>
            <p class="process-text">${escapeHtml(sr.framework || q.framework)}</p>
          </div>
        ` : ''}
      </div>
    `;
  });

  if (q.overallAdvice) {
    bodyHtml += `
      <div class="process-expl-card" style="border-left: 3px solid #10b981;">
        <span style="color: #6ee7b7; font-weight: 700; font-size: 0.85rem; display: block; margin-bottom: 0.4rem;">🎯 診断士からの実戦アドバイス</span>
        <p class="process-text">${escapeHtml(q.overallAdvice)}</p>
      </div>
    `;
  }

  ui.modalResultBody.innerHTML = bodyHtml;
  ui.caseResultModal.style.display = 'flex';
}

function closeCaseResultModal() {
  if (ui.caseResultModal) {
    ui.caseResultModal.style.display = 'none';
  }
}

// ==========================================================================
// ゲーム性 (Lv・EXP・称号) コアエンジン
// ==========================================================================

const RANK_TITLES = [
  { minLvl: 90, title: "🌟 伝説のビジネスエキスパート", icon: "👑", avatar: "🦅", charName: "不死鳥フェニックス" },
  { minLvl: 70, title: "👑 取締役・CxO", icon: "💎", avatar: "🦁", charName: "黄金ライオン" },
  { minLvl: 50, title: "🏛️ 執行役員 / VP", icon: "🏛️", avatar: "🐻‍❄️", charName: "重厚シロクマ" },
  { minLvl: 30, title: "👔 事業戦略マネージャー", icon: "👔", avatar: "🦅", charName: "戦略タカ" },
  { minLvl: 20, title: "🎖️ シニアコンサルタント", icon: "🎖️", avatar: "🦊", charName: "敏腕キツネ" },
  { minLvl: 10, title: "🚀 プロジェクトリーダー", icon: "🚀", avatar: "🦉", charName: "インカムフクロウ" },
  { minLvl: 5,  title: "💼 自立型プレイヤー", icon: "💼", avatar: "🐧", charName: "スーツペンギン" },
  { minLvl: 1,  title: "🌱 新人アソシエイト", icon: "🌱", avatar: "🐣", charName: "見習いポッポ" }
];

function getExpForLevel(lvl) {
  if (lvl <= 1) return 0;
  // レベルが上がるにつれて緩やかに増加するEXPカーブ (Lv.2: 50, Lv.5: 350, Lv.10: 1100...)
  return Math.floor(35 * Math.pow(lvl - 1, 1.55) + 15 * (lvl - 1));
}

function calcPlayerLevel(totalExp) {
  let lvl = 1;
  while (lvl < 99 && totalExp >= getExpForLevel(lvl + 1)) {
    lvl++;
  }
  const curLvlBase = getExpForLevel(lvl);
  const nextLvlBase = getExpForLevel(lvl + 1);
  const progressInLvl = totalExp - curLvlBase;
  const neededInLvl = nextLvlBase - curLvlBase;
  const pct = Math.min(100, Math.max(0, Math.floor((progressInLvl / neededInLvl) * 100)));

  const rank = RANK_TITLES.find(r => lvl >= r.minLvl) || RANK_TITLES[RANK_TITLES.length - 1];

  return {
    level: lvl,
    totalExp,
    progressInLvl,
    neededInLvl,
    pct,
    rankTitle: rank.title,
    rankIcon: rank.icon,
    avatar: rank.avatar,
    charName: rank.charName
  };
}

function updatePlayerLevelUI() {
  const info = calcPlayerLevel(state.history.playerExp || 0);

  // Top App Bar
  if (ui.headerLvlNum) ui.headerLvlNum.textContent = info.level;
  if (ui.headerRankTitle) ui.headerRankTitle.textContent = info.rankTitle;
  if (ui.headerExpBar) ui.headerExpBar.style.width = `${info.pct}%`;
  if (ui.headerAvatarEmoji) ui.headerAvatarEmoji.textContent = info.avatar;

  // MBA Dashboard Card
  if (ui.mbaStatusLevelNum) ui.mbaStatusLevelNum.textContent = info.level;
  if (ui.mbaStatusRankTitle) ui.mbaStatusRankTitle.textContent = `${info.avatar} ${info.rankTitle.replace(/^[^\s]+\s*/, '')}`;
  if (ui.mbaStatusRankIcon) ui.mbaStatusRankIcon.textContent = info.avatar;
  if (ui.mbaStatusExpText) ui.mbaStatusExpText.textContent = `${info.progressInLvl} / ${info.neededInLvl} EXP (累計: ${info.totalExp})`;
  if (ui.mbaStatusExpFill) ui.mbaStatusExpFill.style.width = `${info.pct}%`;
}

function awardPlayerExp(amount, reason = '') {
  const oldLvlInfo = calcPlayerLevel(state.history.playerExp || 0);
  state.history.playerExp = (state.history.playerExp || 0) + amount;
  saveHistoryData();
  const newLvlInfo = calcPlayerLevel(state.history.playerExp);

  updatePlayerLevelUI();

  if (newLvlInfo.level > oldLvlInfo.level) {
    triggerLevelUpModal(newLvlInfo);
  } else if (reason) {
    showToast(`✨ +${amount} EXP 獲得！ (${reason})`);
  }
}

function triggerLevelUpModal(lvlInfo) {
  if (!ui.levelUpModal) return;
  if (ui.lvlUpModalLevel) ui.lvlUpModalLevel.textContent = lvlInfo.level;
  if (ui.lvlUpModalRankTitle) ui.lvlUpModalRankTitle.textContent = `${lvlInfo.avatar} ${lvlInfo.charName} (${lvlInfo.rankTitle})`;
  if (ui.lvlUpModalIcon) ui.lvlUpModalIcon.textContent = lvlInfo.avatar;
  ui.levelUpModal.style.display = 'flex';
}

function closeLevelUpModal() {
  if (ui.levelUpModal) {
    ui.levelUpModal.style.display = 'none';
  }
}

// ==========================================================================
// 🔰 初級編: MBA専門用語マスター モジュール (全7カテゴリ・計150問)
// ==========================================================================

function initMbaVocab() {
  ui.btnMbaRandomQuiz?.addEventListener('click', () => startMbaQuiz(null, 10));
  ui.btnMbaWeakQuiz?.addEventListener('click', () => startMbaWeakQuiz(10));
  ui.btnMbaBackToList?.addEventListener('click', closeMbaQuiz);
  ui.btnMbaNextQuestion?.addEventListener('click', nextMbaQuestion);
  ui.btnMbaResultRetry?.addEventListener('click', () => {
    startMbaQuiz(state.mbaSession.activeCategory, 10);
  });
  ui.btnMbaResultBackTop?.addEventListener('click', closeMbaQuiz);
  ui.btnLevelUpClose?.addEventListener('click', closeLevelUpModal);
  ui.playerLevelBadge?.addEventListener('click', () => {
    switchView('viewMba');
  });
}

function renderMbaTopScreen() {
  updatePlayerLevelUI();

  const allMbaQuestions = window.MBA_VOCAB_QUESTIONS || [];
  const categories = window.MBA_CATEGORIES || [];
  const historyItems = state.history.items || {};

  // Calculate MBA overall stats
  let answeredCount = 0;
  let correctTotal = 0;
  allMbaQuestions.forEach(q => {
    const rec = historyItems[q.id];
    if (rec && rec.count > 0) {
      answeredCount++;
      if (rec.lastResult === true) correctTotal++;
    }
  });

  const accuracyPct = answeredCount > 0 ? Math.round((correctTotal / answeredCount) * 100) : 0;
  if (ui.mbaStatusMasteredCount) ui.mbaStatusMasteredCount.textContent = `${correctTotal} / ${allMbaQuestions.length}`;
  if (ui.mbaStatusAccuracyPct) ui.mbaStatusAccuracyPct.textContent = answeredCount > 0 ? `${accuracyPct}%` : '--%';
  if (ui.mbaStatusStreakCount) ui.mbaStatusStreakCount.textContent = state.player.combo || 0;

  // Render 7 Categories Cards
  if (!ui.mbaCategoriesGrid) return;
  ui.mbaCategoriesGrid.innerHTML = categories.map(cat => {
    const catQs = allMbaQuestions.filter(q => q.category === cat.id);
    let catAnswered = 0;
    let catCorrect = 0;

    catQs.forEach(q => {
      const rec = historyItems[q.id];
      if (rec && rec.count > 0) {
        catAnswered++;
        if (rec.lastResult === true) catCorrect++;
      }
    });

    const isMastered = catQs.length > 0 && catCorrect === catQs.length;
    const masteryStar = isMastered ? '⭐ 制覇！' : (catCorrect > 0 ? `★ ${catCorrect}/${catQs.length}` : '未着手');

    return `
      <div class="mba-cat-card" onclick="startMbaQuiz('${cat.id}', 10)">
        <div class="cat-card-top">
          <div class="cat-card-icon" style="background: ${cat.color}22; color: ${cat.color};">${cat.icon}</div>
          <div>
            <h4 class="cat-card-title">${escapeHtml(cat.name)}</h4>
            <p class="cat-card-desc">${escapeHtml(cat.desc)}</p>
          </div>
        </div>

        <div class="cat-card-bottom">
          <div class="cat-stat-info">
            <span>📝 全${catQs.length}問</span>
            &nbsp;•&nbsp;
            <span style="color: ${isMastered ? '#fbbf24' : 'var(--text-muted)'}; font-weight: 700;">${masteryStar}</span>
          </div>
          <button class="cat-btn-train" style="background: ${cat.color};">
            ▶️ 特訓開始
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function startMbaQuiz(categoryId = null, count = 10) {
  const allQs = window.MBA_VOCAB_QUESTIONS || [];
  let pool = categoryId ? allQs.filter(q => q.category === categoryId) : [...allQs];

  if (pool.length === 0) {
    showToast('出題可能な問題がありません');
    return;
  }

  // Shuffle pool
  pool.sort(() => Math.random() - 0.5);
  const selected = pool.slice(0, Math.min(count, pool.length));

  state.mbaSession = {
    activeCategory: categoryId,
    questions: selected,
    currentIndex: 0,
    score: 0,
    answered: false,
    earnedExp: 0,
    combo: 0
  };

  ui.mbaCategoryView.style.display = 'none';
  ui.mbaResultView.style.display = 'none';
  ui.mbaQuizView.style.display = 'flex';
  ui.btnHeaderBack.style.display = 'flex';

  renderMbaQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startMbaWeakQuiz(count = 10) {
  const allQs = window.MBA_VOCAB_QUESTIONS || [];
  const historyItems = state.history.items || {};

  // 未マスターまたは間違えた問題を優先
  let pool = allQs.filter(q => {
    const rec = historyItems[q.id];
    return !rec || rec.lastResult !== true;
  });

  if (pool.length === 0) {
    showToast('🎉 すべてのMBA用語をマスターしています！ランダム特訓を開始します。');
    pool = [...allQs];
  }

  pool.sort(() => Math.random() - 0.5);
  const selected = pool.slice(0, Math.min(count, pool.length));

  state.mbaSession = {
    activeCategory: null,
    questions: selected,
    currentIndex: 0,
    score: 0,
    answered: false,
    earnedExp: 0,
    combo: 0
  };

  ui.mbaCategoryView.style.display = 'none';
  ui.mbaResultView.style.display = 'none';
  ui.mbaQuizView.style.display = 'flex';
  ui.btnHeaderBack.style.display = 'flex';

  renderMbaQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderMbaQuestion() {
  const s = state.mbaSession;
  const q = s.questions[s.currentIndex];
  if (!q) return;

  s.answered = false;

  // Header progress
  if (ui.mbaQuizCategoryTag) ui.mbaQuizCategoryTag.textContent = q.categoryName || 'MBA用語';
  if (ui.mbaQuizCounterText) ui.mbaQuizCounterText.textContent = `第 ${s.currentIndex + 1} / ${s.questions.length} 問`;
  if (ui.mbaQuizComboNum) ui.mbaQuizComboNum.textContent = s.combo;
  if (ui.mbaQuizFillBar) {
    const pct = ((s.currentIndex + 1) / s.questions.length) * 100;
    ui.mbaQuizFillBar.style.width = `${pct}%`;
  }

  // Question Content
  if (ui.mbaQuizTermPill) ui.mbaQuizTermPill.textContent = q.term;
  if (ui.mbaQuizQuestionText) ui.mbaQuizQuestionText.textContent = q.question;

  // Hide feedback box
  if (ui.mbaQuizFeedbackBox) ui.mbaQuizFeedbackBox.style.display = 'none';

  // 4 Options
  if (ui.mbaQuizOptionsGrid) {
    ui.mbaQuizOptionsGrid.innerHTML = q.options.map((opt, idx) => {
      const labels = ['ア', 'イ', 'ウ', 'エ'];
      return `
        <button class="mba-opt-btn" onclick="handleMbaOptionChoice(${idx})">
          <span style="font-weight: 700; color: #fbbf24; min-width: 1.5rem;">${labels[idx]}</span>
          <span>${escapeHtml(opt)}</span>
        </button>
      `;
    }).join('');
  }
}

function handleMbaOptionChoice(chosenIndex) {
  const s = state.mbaSession;
  if (s.answered) return;
  s.answered = true;

  const q = s.questions[s.currentIndex];
  const isCorrect = (chosenIndex === q.answerIndex);

  // Disable option buttons & mark colors
  const btns = ui.mbaQuizOptionsGrid.querySelectorAll('.mba-opt-btn');
  btns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answerIndex) {
      btn.classList.add('correct');
    } else if (idx === chosenIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Calculate EXP
  let expGain = 0;
  if (isCorrect) {
    s.score++;
    s.combo++;
    state.player.combo = Math.max(state.player.combo || 0, s.combo);

    // EXP formula: Base 20 + combo bonus (up to +10)
    const comboBonus = s.combo >= 5 ? 10 : (s.combo >= 3 ? 5 : 0);
    expGain = 20 + comboBonus;
    s.earnedExp += expGain;
    awardPlayerExp(expGain, comboBonus > 0 ? `正解! 連続ボーナス+${comboBonus}` : '正解');

    if (ui.mbaQuizResultBadge) {
      ui.mbaQuizResultBadge.className = 'fb-badge correct';
      ui.mbaQuizResultBadge.textContent = s.combo >= 3 ? `🔥 ${s.combo}問連続正解！ (+${expGain} EXP)` : `⭕️ 正解！ (+${expGain} EXP)`;
    }
  } else {
    s.combo = 0;
    if (ui.mbaQuizResultBadge) {
      ui.mbaQuizResultBadge.className = 'fb-badge wrong';
      ui.mbaQuizResultBadge.textContent = '❌ 不正解... 次回確実にマスターしよう！';
    }
  }

  if (ui.mbaQuizComboNum) ui.mbaQuizComboNum.textContent = s.combo;
  if (ui.mbaQuizExpGain) ui.mbaQuizExpGain.textContent = isCorrect ? `+${expGain} EXP` : '+0 EXP';
  if (ui.mbaQuizExplanationText) ui.mbaQuizExplanationText.textContent = q.explanation;

  // Save history
  let rec = state.history.items[q.id];
  if (!rec) {
    rec = { count: 0, correctCount: 0, wrongCount: 0, lastResult: null, intervalDays: 1, easeFactor: 2.5, nextDueDate: Date.now() };
    state.history.items[q.id] = rec;
  }
  rec.count++;
  if (isCorrect) rec.correctCount++; else rec.wrongCount++;
  rec.lastResult = isCorrect;
  saveHistoryData();

  if (ui.mbaQuizFeedbackBox) ui.mbaQuizFeedbackBox.style.display = 'flex';
}

function nextMbaQuestion() {
  const s = state.mbaSession;
  s.currentIndex++;
  if (s.currentIndex < s.questions.length) {
    renderMbaQuestion();
  } else {
    renderMbaResultScreen();
  }
}

function renderMbaResultScreen() {
  const s = state.mbaSession;
  ui.mbaQuizView.style.display = 'none';
  ui.mbaResultView.style.display = 'flex';

  const total = s.questions.length;
  const score = s.score;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  if (ui.mbaResultScorePct) ui.mbaResultScorePct.textContent = `${pct}%`;
  if (ui.mbaResultFraction) ui.mbaResultFraction.textContent = `${score} / ${total}問 正解`;
  if (ui.mbaResultExpEarned) ui.mbaResultExpEarned.textContent = `+${s.earnedExp} EXP`;

  if (pct >= 80) {
    if (ui.mbaResultTitle) ui.mbaResultTitle.textContent = '🎉 素晴らしい！MBA専門用語をマスター！';
  } else if (pct >= 60) {
    if (ui.mbaResultTitle) ui.mbaResultTitle.textContent = '👍 合格水準！あと一歩で完璧です！';
  } else {
    if (ui.mbaResultTitle) ui.mbaResultTitle.textContent = '💪 復習を重ねてビジネス戦闘力を磨こう！';
  }
}

function closeMbaQuiz() {
  ui.mbaQuizView.style.display = 'none';
  ui.mbaResultView.style.display = 'none';
  ui.mbaCategoryView.style.display = 'flex';
  renderMbaTopScreen();
}

// ==========================================================================
// 勉強時間自動トラッキング モジュール
// ==========================================================================

let studyTracker = {
  active: true,
  lastActivity: Date.now(),
  idleThresholdMs: 2 * 60 * 1000 // 2分間無操作で一時休止
};

function initStudyTracker() {
  const resetActivity = () => {
    studyTracker.lastActivity = Date.now();
    studyTracker.active = true;
  };

  ['mousemove', 'keydown', 'touchstart', 'scroll', 'click'].forEach(evt => {
    window.addEventListener(evt, resetActivity, { passive: true });
  });

  // 1秒ごとに勉強時間をインクリメント
  setInterval(() => {
    const isIdle = (Date.now() - studyTracker.lastActivity) > studyTracker.idleThresholdMs;
    if (isIdle) {
      studyTracker.active = false;
      return;
    }

    const st = state.history.studyTime || { todaySeconds: 0, totalSeconds: 0, lastActiveDate: new Date().toISOString().slice(0, 10), dailyHistory: {} };
    st.todaySeconds = (st.todaySeconds || 0) + 1;
    st.totalSeconds = (st.totalSeconds || 0) + 1;
    state.history.studyTime = st;

    updateStudyTimeUI();
  }, 1000);

  // 30秒ごとに自動保存
  setInterval(() => {
    if (studyTracker.active) {
      saveHistoryData();
    }
  }, 30000);

  updateStudyTimeUI();
  renderAchievementsGrid();
}

function formatStudyTime(seconds) {
  const m = Math.floor(seconds / 60);
  if (m < 60) {
    return `${m} 分`;
  }
  const h = (seconds / 3600).toFixed(1);
  return `${h} 時間`;
}

function updateStudyTimeUI() {
  const st = state.history.studyTime || { todaySeconds: 0, totalSeconds: 0, dailyHistory: {} };
  
  // Header badge
  if (ui.headerStudyTimeText) {
    ui.headerStudyTimeText.textContent = `本日 ${formatStudyTime(st.todaySeconds || 0)}`;
  }

  // Analytics View elements
  if (ui.diagTodayStudyTime) ui.diagTodayStudyTime.textContent = formatStudyTime(st.todaySeconds || 0);
  if (ui.diagTotalStudyTime) ui.diagTotalStudyTime.textContent = formatStudyTime(st.totalSeconds || 0);

  // Calculate Weekly and Daily Average
  if (ui.diagWeeklyStudyTime || ui.diagDailyAvgTime) {
    let weekTotalSec = st.todaySeconds || 0;
    const historyEntries = Object.entries(st.dailyHistory || {});
    // 直近6日分の過去ログを集計
    const sorted = historyEntries.sort((a, b) => b[0].localeCompare(a[0]));
    sorted.slice(0, 6).forEach(([_, sec]) => {
      weekTotalSec += sec;
    });

    if (ui.diagWeeklyStudyTime) ui.diagWeeklyStudyTime.textContent = formatStudyTime(weekTotalSec);

    const totalDays = Math.max(1, historyEntries.length + 1);
    const avgSec = Math.round((st.totalSeconds || 0) / totalDays);
    if (ui.diagDailyAvgTime) ui.diagDailyAvgTime.textContent = `${Math.floor(avgSec / 60)} 分 / 日`;
  }
}

// ==========================================================================
// PROプラン (マネタイズ機能) モジュール
// ==========================================================================

let selectedProPlan = 'yearly';

function initProModal() {
  ui.btnOpenProModal?.addEventListener('click', openProModal);
  ui.btnCloseProModal?.addEventListener('click', closeProModal);

  ui.btnPlanYearly?.addEventListener('click', () => {
    selectedProPlan = 'yearly';
    ui.btnPlanYearly.classList.add('active');
    ui.btnPlanMonthly.classList.remove('active');
  });

  ui.btnPlanMonthly?.addEventListener('click', () => {
    selectedProPlan = 'monthly';
    ui.btnPlanMonthly.classList.add('active');
    ui.btnPlanYearly.classList.remove('active');
  });

  ui.btnStartTrial?.addEventListener('click', () => {
    showToast(`🎉 7日間のPRO無料トライアルを開始しました！（${selectedProPlan === 'yearly' ? '年額プラン' : '月額プラン'}）`);
    closeProModal();
    if (ui.btnOpenProModal) {
      ui.btnOpenProModal.textContent = '👑 PRO会員';
      ui.btnOpenProModal.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    }
  });
}

function openProModal() {
  if (ui.proModal) ui.proModal.style.display = 'flex';
}

function closeProModal() {
  if (ui.proModal) ui.proModal.style.display = 'none';
}

// ==========================================================================
// LTV最大化・習慣化・アチーブメント・安全バックアップ モジュール
// ==========================================================================

const ACHIEVEMENTS = [
  { id: 'first_step', title: '初めの一歩', desc: '初めて問題に1問解答した', icon: '🌱', req: (h) => Object.keys(h.items || {}).length >= 1 },
  { id: 'streak_3', title: '三日坊主を卒業', desc: '3日連続で学習を継続した', icon: '🔥', req: (h) => (h.streak || 0) >= 3 },
  { id: 'streak_7', title: '7日連続の鉄人', desc: '1週間毎日学習を達成した', icon: '⚡', req: (h) => (h.streak || 0) >= 7 },
  { id: 'answered_50', title: '知識の探求者', desc: '累計50問以上を解答した', icon: '📚', req: (h) => getTotalAnsweredCount(h) >= 50 },
  { id: 'answered_200', title: '模試母数を走破', desc: '累計200問以上を解答した', icon: '🎯', req: (h) => getTotalAnsweredCount(h) >= 200 },
  { id: 'mba_master', title: 'MBA基礎の確立', desc: 'MBA専門用語を20問以上正解した', icon: '🎓', req: (h) => countMbaMastered(h) >= 20 },
  { id: 'case_challenger', title: '2次筆記の挑戦者', desc: '2次筆記試験の採点を1回以上実行した', icon: '✍️', req: (h) => (h.playerExp || 0) >= 300 },
  { id: 'speed_solver', title: 'スピードマスター', desc: 'MBA用語クイズで10問連続正解した', icon: '⚡', req: (h) => (state.player.combo || 0) >= 10 },
  { id: 'level_10', title: 'リーダーシップ発揮', desc: 'レベル10（プロジェクトリーダー）に到達', icon: '🚀', req: (h) => calcPlayerLevel(h.playerExp || 0).level >= 10 },
  { id: 'level_30', title: '戦略マネージャー', desc: 'レベル30（事業戦略マネージャー）に到達', icon: '👔', req: (h) => calcPlayerLevel(h.playerExp || 0).level >= 30 },
  { id: 'study_10h', title: '10時間の努力', desc: '累計学習時間が10時間を突破した', icon: '⏱', req: (h) => ((h.studyTime?.totalSeconds || 0) >= 36000) },
  { id: 'pro_mind', title: 'エリートの視座', desc: 'ビジネスエキスパートPROプランを体験した', icon: '👑', req: (h) => true }
];

function getTotalAnsweredCount(h) {
  let cnt = 0;
  Object.values(h.items || {}).forEach(item => {
    if (item && item.count) cnt += item.count;
  });
  return cnt;
}

function countMbaMastered(h) {
  let cnt = 0;
  const mbaIds = (window.MBA_VOCAB_QUESTIONS || []).map(q => q.id);
  mbaIds.forEach(id => {
    if (h.items && h.items[id] && h.items[id].lastResult === true) cnt++;
  });
  return cnt;
}

const AVATAR_QUOTES = [
  "「今日の一歩が、1年後の大きな差になるポ！」",
  "「素晴らしい集中力！ビジネス戦闘力がグングン上がってるポ！」",
  "「迷ったら基本に立ち返るのが一流の流儀だポ！」",
  "「PDCAを回し続ける者だけが、真のエキスパートになれるポ！」",
  "「休息も戦略の一部！無理せず自分のペースで進もうポ！」",
  "「分からない用語に出会えたのは、成長の最大のチャンスだポ！」",
  "「継続は力なり。君の努力をアバターはずっと見てるポ！」"
];

function initLtvFeatures() {
  // Avatar Speech Bubble Trigger
  ui.playerLevelBadge?.addEventListener('click', (e) => {
    e.stopPropagation();
    showAvatarSpeechBubble();
  });

  // Data Export & Import Listeners
  ui.btnExportData?.addEventListener('click', exportLearningData);
  ui.fileImportData?.addEventListener('change', importLearningData);

  renderDailyMissionCard();
}

function showAvatarSpeechBubble() {
  if (!ui.avatarSpeechBubble || !ui.avatarSpeechText) return;
  const quote = AVATAR_QUOTES[Math.floor(Math.random() * AVATAR_QUOTES.length)];
  ui.avatarSpeechText.textContent = quote;
  ui.avatarSpeechBubble.style.display = 'block';

  // Auto hide after 3.8s
  setTimeout(() => {
    if (ui.avatarSpeechBubble) ui.avatarSpeechBubble.style.display = 'none';
  }, 3800);
}

function renderDailyMissionCard() {
  const todayStr = new Date().toISOString().slice(0, 10);
  const m = state.history.dailyMissions || { date: todayStr, questions: 0, timeMinutes: 0, ankiCleared: false, claimed: [] };

  const qCount = m.questions || 0;
  const tCount = Math.floor((state.history.studyTime?.todaySeconds || 0) / 60);
  const ankiDone = !!m.ankiCleared;

  let clearedCount = 0;
  if (qCount >= 10) clearedCount++;
  if (tCount >= 15) clearedCount++;
  if (ankiDone) clearedCount++;

  const pct = Math.round((clearedCount / 3) * 100);

  if (ui.dailyGoalPct) ui.dailyGoalPct.textContent = `${pct}%`;
  if (ui.mCountQuestions) ui.mCountQuestions.textContent = Math.min(10, qCount);
  if (ui.mCountTime) ui.mCountTime.textContent = tCount;

  // Question task status
  if (ui.chkMissionQuestions) {
    ui.chkMissionQuestions.classList.toggle('completed', qCount >= 10);
    const icon = ui.chkMissionQuestions.querySelector('.m-icon-status');
    if (icon) icon.textContent = qCount >= 10 ? '✅' : '⏳';
  }

  // Time task status
  if (ui.chkMissionTime) {
    ui.chkMissionTime.classList.toggle('completed', tCount >= 15);
    const icon = ui.chkMissionTime.querySelector('.m-icon-status');
    if (icon) icon.textContent = tCount >= 15 ? '✅' : '⏳';
  }

  // Anki task status
  if (ui.chkMissionAnki) {
    ui.chkMissionAnki.classList.toggle('completed', ankiDone);
    const icon = ui.chkMissionAnki.querySelector('.m-icon-status');
    if (icon) icon.textContent = ankiDone ? '✅' : '⏳';
  }

  // Trigger celebration on full completion (once per day)
  if (clearedCount === 3 && !m.claimed.includes('all_clear')) {
    m.claimed.push('all_clear');
    saveHistoryData();
    awardPlayerExp(100, '🎉 本日の全デイリーミッション完全達成！');
    triggerConfetti();
  }
}

function updateDailyMissions(type, val = 1) {
  const todayStr = new Date().toISOString().slice(0, 10);
  let m = state.history.dailyMissions;
  if (!m || m.date !== todayStr) {
    m = { date: todayStr, questions: 0, timeMinutes: 0, ankiCleared: false, claimed: [] };
    state.history.dailyMissions = m;
  }

  if (type === 'questions') {
    m.questions = (m.questions || 0) + val;
  } else if (type === 'time') {
    m.timeMinutes = val;
  } else if (type === 'anki') {
    m.ankiCleared = true;
  }

  saveHistoryData();
  renderDailyMissionCard();
}

function checkAchievements() {
  const h = state.history;
  const unlocked = new Set(h.unlockedBadges || []);
  let newlyUnlocked = false;

  ACHIEVEMENTS.forEach(ach => {
    if (!unlocked.has(ach.id)) {
      if (ach.req(h)) {
        unlocked.add(ach.id);
        newlyUnlocked = true;
        showToast(`🏆 新実績解除: 【${ach.title}】 (+50 EXP)`);
        awardPlayerExp(50, `実績【${ach.title}】`);
      }
    }
  });

  if (newlyUnlocked) {
    h.unlockedBadges = Array.from(unlocked);
    saveHistoryData();
    renderAchievementsGrid();
    triggerConfetti();
  }
}

function renderAchievementsGrid() {
  if (!ui.achievementsBadgesGrid) return;
  const unlockedSet = new Set(state.history.unlockedBadges || []);

  if (ui.unlockedBadgesCountPill) {
    ui.unlockedBadgesCountPill.textContent = `獲得: ${unlockedSet.size} / ${ACHIEVEMENTS.length}`;
  }

  ui.achievementsBadgesGrid.innerHTML = ACHIEVEMENTS.map(ach => {
    const isUnlocked = unlockedSet.has(ach.id);
    return `
      <div class="achieve-badge-card ${isUnlocked ? 'unlocked' : 'locked'}" title="${isUnlocked ? '獲得済み' : '未解除'}">
        <div class="achieve-icon">${isUnlocked ? ach.icon : '🔒'}</div>
        <div class="achieve-info">
          <h4 class="achieve-title">${escapeHtml(ach.title)}</h4>
          <p class="achieve-desc">${escapeHtml(ach.desc)}</p>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 安全な学習データ バックアップ & 復元
// ==========================================================================

function exportLearningData() {
  try {
    const backupData = {
      app: 'PathOfTheBusinessExpert',
      version: '2.0',
      exportedAt: new Date().toISOString(),
      history: state.history,
      caseDrafts: state.caseExam.drafts
    };

    const jsonStr = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    a.href = url;
    a.download = `business_expert_backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('📥 学習データを安全にファイル保存しました');
  } catch (err) {
    console.error('Export error', err);
    alert('バックアップのエクスポートに失敗しました。');
  }
}

function importLearningData(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  // ファイルサイズ制限 (最大 5MB) - メモリ枯渇・DoS対策
  if (file.size > 5 * 1024 * 1024) {
    alert('ファイルサイズが大きすぎます（上限5MB）。');
    e.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      // Prototype Pollution 防御（危険なキーを破棄）
      const parsed = JSON.parse(evt.target.result, (key, value) => {
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return undefined;
        }
        return value;
      });

      if (!parsed || typeof parsed !== 'object') {
        throw new Error('無効なデータ形式です');
      }

      const importedHistory = parsed.history || (parsed.items ? { items: parsed.items } : null);
      if (!importedHistory || typeof importedHistory !== 'object') {
        throw new Error('有効な学習データが見つかりません');
      }

      if (confirm('現在の学習データを上書きしてバックアップから復元しますか？')) {
        // 安全なスキーマ正規化
        const cleanHistory = {
          items: {},
          player: { exp: 0, level: 1 },
          studyTime: {
            todaySeconds: 0,
            totalSeconds: 0,
            lastActiveDate: new Date().toISOString().slice(0, 10),
            dailyHistory: {}
          },
          dailyMissions: {
            date: new Date().toISOString().slice(0, 10),
            questions: 0,
            timeMinutes: 0,
            ankiCleared: false,
            claimed: []
          },
          unlockedBadges: []
        };

        // Items のサニタイズ（ホワイトリスト検証）
        if (importedHistory.items && typeof importedHistory.items === 'object') {
          Object.keys(importedHistory.items).forEach(k => {
            if (/^[a-zA-Z0-9_\-]+$/.test(k)) {
              const item = importedHistory.items[k];
              if (item && typeof item === 'object') {
                cleanHistory.items[k] = {
                  timesTested: Number(item.timesTested) || 0,
                  timesCorrect: Number(item.timesCorrect) || 0,
                  correctStreak: Number(item.correctStreak) || 0,
                  lastTested: typeof item.lastTested === 'string' ? item.lastTested.slice(0, 30) : null,
                  nextReviewDate: typeof item.nextReviewDate === 'string' ? item.nextReviewDate.slice(0, 30) : null,
                  intervalDays: Number(item.intervalDays) || 1,
                  starred: Boolean(item.starred)
                };
              }
            }
          });
        }

        // Player (EXP, Level) のサニタイズ
        if (importedHistory.player && typeof importedHistory.player === 'object') {
          cleanHistory.player.exp = Math.max(0, Math.min(10000000, Number(importedHistory.player.exp) || 0));
          cleanHistory.player.level = Math.max(1, Math.min(99, Number(importedHistory.player.level) || 1));
        }

        // StudyTime のサニタイズ
        if (importedHistory.studyTime && typeof importedHistory.studyTime === 'object') {
          cleanHistory.studyTime.totalSeconds = Math.max(0, Number(importedHistory.studyTime.totalSeconds) || 0);
          cleanHistory.studyTime.todaySeconds = Math.max(0, Number(importedHistory.studyTime.todaySeconds) || 0);
          cleanHistory.studyTime.lastActiveDate = String(importedHistory.studyTime.lastActiveDate || '').slice(0, 10);
          if (importedHistory.studyTime.dailyHistory && typeof importedHistory.studyTime.dailyHistory === 'object') {
            Object.keys(importedHistory.studyTime.dailyHistory).slice(0, 90).forEach(dk => {
              if (/^\d{4}-\d{2}-\d{2}$/.test(dk)) {
                cleanHistory.studyTime.dailyHistory[dk] = Math.max(0, Number(importedHistory.studyTime.dailyHistory[dk]) || 0);
              }
            });
          }
        }

        // Daily Missions のサニタイズ
        if (importedHistory.dailyMissions && typeof importedHistory.dailyMissions === 'object') {
          cleanHistory.dailyMissions.date = String(importedHistory.dailyMissions.date || '').slice(0, 10);
          cleanHistory.dailyMissions.questions = Math.max(0, Number(importedHistory.dailyMissions.questions) || 0);
          cleanHistory.dailyMissions.timeMinutes = Math.max(0, Number(importedHistory.dailyMissions.timeMinutes) || 0);
          cleanHistory.dailyMissions.ankiCleared = Boolean(importedHistory.dailyMissions.ankiCleared);
          if (Array.isArray(importedHistory.dailyMissions.claimed)) {
            cleanHistory.dailyMissions.claimed = importedHistory.dailyMissions.claimed.filter(c => typeof c === 'string');
          }
        }

        // Unlocked Badges のサニタイズ
        if (Array.isArray(importedHistory.unlockedBadges)) {
          cleanHistory.unlockedBadges = importedHistory.unlockedBadges.filter(b => typeof b === 'string' && /^[a-zA-Z0-9_\-]+$/.test(b));
        }

        // Case Drafts のサニタイズ
        if (parsed.caseDrafts && typeof parsed.caseDrafts === 'object') {
          const cleanDrafts = {};
          Object.keys(parsed.caseDrafts).slice(0, 50).forEach(ck => {
            if (/^[a-zA-Z0-9_\-]+$/.test(ck)) {
              cleanDrafts[ck] = String(parsed.caseDrafts[ck]).slice(0, 5000);
            }
          });
          state.caseExam.drafts = cleanDrafts;
          try {
            localStorage.setItem('shindanshi_case_drafts_v1', JSON.stringify(cleanDrafts));
          } catch (eDraft) {
            console.warn('Draft save error', eDraft);
          }
        }

        state.history = cleanHistory;
        saveHistoryData();
        updatePassMetricsUI();
        updatePlayerLevelUI();
        updateStudyTimeUI();
        renderHomeScreen();
        showToast('🎉 バックアップから安全にデータを復元しました！');
      }
    } catch (err) {
      console.error('Import error', err);
      alert('ファイルの読み込みに失敗しました。有効なJSONファイルを選択してください。');
    } finally {
      e.target.value = '';
    }
  };
  reader.readAsText(file);
}

// ==========================================================================
// 祝賀・紙吹雪 (Confetti) アニメーションエンジン
// ==========================================================================

function triggerConfetti() {
  const canvas = ui.confettiCanvas;
  if (!canvas) return;
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const particles = [];
  const colors = ['#f59e0b', '#10b981', '#6366f1', '#ec4899', '#3b82f6', '#fbbf24'];

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 15,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10
    });
  }

  let frames = 0;
  function animate() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vRot;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (frames < 90) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }

  animate();
}

// Global scope bindings for inline HTML handlers
window.startCaseWorkspace = startCaseWorkspace;
window.renderCaseQuestion = renderCaseQuestion;
window.scoreCaseQuestion = scoreCaseQuestion;
window.onCaseAnswerInput = onCaseAnswerInput;
window.startMbaQuiz = startMbaQuiz;
window.handleMbaOptionChoice = handleMbaOptionChoice;
window.openSubCategoryModal = openSubCategoryModal;
window.closeSubCategoryModal = closeSubCategoryModal;
window.selectSubCategoryAndStart = selectSubCategoryAndStart;

// Start Application on Load
document.addEventListener('DOMContentLoaded', init);
