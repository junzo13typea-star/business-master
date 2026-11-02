/**
 * ビジネスエキスパートの道 - オリジナルマスコットキャラクター「ホウ助 (Housuke)」
 * SVGベクター ＆ インタラクティブ・アニメーションエンジン
 */

(function(window) {
  'use strict';

  /**
   * キャラクターSVGを生成
   * @param {number} level プレイヤーレベル (1〜5以上)
   * @param {string} emotion 表情 ('idle' | 'happy' | 'thinking' | 'cheer' | 'celebrate')
   * @param {number} size 表示サイズ (px)
   * @returns {string} SVG HTML文字列
   */
  function renderCharacterSvg(level = 1, emotion = 'idle', size = 80) {
    const isLevel2 = level >= 2;
    const isLevel3 = level >= 3;
    const isLevel4 = level >= 4;
    const isLevel5 = level >= 5;

    // 表情による目・口・羽のパス
    let leftEye = `
      <circle cx="38" cy="46" r="9" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
      <circle cx="40" cy="46" r="5" fill="#0f172a" class="pupil-left"/>
      <circle cx="42" cy="44" r="2" fill="#ffffff"/>
    `;
    let rightEye = `
      <circle cx="62" cy="46" r="9" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
      <circle cx="60" cy="46" r="5" fill="#0f172a" class="pupil-right"/>
      <circle cx="62" cy="44" r="2" fill="#ffffff"/>
    `;
    let beak = `<polygon points="50,51 44,57 56,57" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>`;
    let leftWing = `<path d="M 24 50 Q 14 62 26 72 Q 28 60 27 50" fill="#0284c7" stroke="#0369a1" stroke-width="2" class="wing-left"/>`;
    let rightWing = `<path d="M 76 50 Q 86 62 74 72 Q 72 60 73 50" fill="#0284c7" stroke="#0369a1" stroke-width="2" class="wing-right"/>`;
    let blush = `
      <circle cx="32" cy="55" r="4" fill="#f43f5e" opacity="0.4"/>
      <circle cx="68" cy="55" r="4" fill="#f43f5e" opacity="0.4"/>
    `;

    if (emotion === 'happy' || emotion === 'celebrate') {
      leftEye = `
        <path d="M 31 48 Q 38 40 45 48" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="38" cy="53" r="1.5" fill="#f43f5e"/>
      `;
      rightEye = `
        <path d="M 55 48 Q 62 40 69 48" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="62" cy="53" r="1.5" fill="#f43f5e"/>
      `;
      beak = `<polygon points="50,52 43,59 57,59" fill="#f59e0b"/>
              <path d="M 45 59 Q 50 64 55 59" fill="#e11d48"/>`;
      leftWing = `<path d="M 24 48 Q 12 30 22 24 Q 28 36 26 48" fill="#0284c7" stroke="#0369a1" stroke-width="2" class="wing-left-happy"/>`;
      rightWing = `<path d="M 76 48 Q 88 30 78 24 Q 72 36 74 48" fill="#0284c7" stroke="#0369a1" stroke-width="2" class="wing-right-happy"/>`;
    } else if (emotion === 'thinking') {
      leftEye = `
        <circle cx="38" cy="44" r="8" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
        <circle cx="40" cy="41" r="4" fill="#0f172a"/>
      `;
      rightEye = `
        <path d="M 56 46 Q 62 42 68 46" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
      `;
    } else if (emotion === 'cheer') {
      leftEye = `
        <circle cx="38" cy="46" r="9" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
        <circle cx="41" cy="46" r="5" fill="#0f172a"/>
        <circle cx="43" cy="44" r="2" fill="#ffffff"/>
      `;
      rightEye = `
        <path d="M 55 48 Q 62 41 69 48" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
      `;
      rightWing = `<path d="M 76 48 Q 88 32 80 26 Q 72 38 74 48" fill="#0284c7" stroke="#0369a1" stroke-width="2" class="wing-cheer"/>`;
    }

    // レベル進化アクセサリー
    let accessories = '';
    
    // ネクタイ (全レベル共通)
    accessories += `
      <!-- 赤いビジネスネクタイ -->
      <polygon points="50,60 47,65 53,65" fill="#ef4444"/>
      <polygon points="47,65 53,65 54,76 50,80 46,76" fill="#dc2626"/>
    `;

    // Lv.1: タマゴの殻パンツ
    if (level === 1) {
      accessories += `
        <!-- タマゴの殻 -->
        <path d="M 26 70 Q 20 84 32 90 Q 50 94 68 90 Q 80 84 74 70 L 68 76 L 60 70 L 52 77 L 46 70 L 38 76 Z" 
              fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      `;
    }

    // Lv.2以上: ビジネスバッグ
    if (isLevel2 && level < 5) {
      accessories += `
        <!-- アタッシュケース (右脇) -->
        <rect x="74" y="66" width="16" height="13" rx="2" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
        <path d="M 79 66 L 79 63 Q 82 61 85 63 L 85 66" fill="none" stroke="#d97706" stroke-width="1.5"/>
        <circle cx="82" cy="72" r="1.5" fill="#f59e0b"/>
      `;
    }

    // Lv.3以上: 知性メガネ
    if (isLevel3) {
      accessories += `
        <!-- 金縁インテリメガネ -->
        <circle cx="38" cy="46" r="11" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
        <circle cx="62" cy="46" r="11" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
        <line x1="49" y1="46" x2="51" y2="46" stroke="#f59e0b" stroke-width="2.5"/>
        <line x1="27" y1="44" x2="21" y2="46" stroke="#f59e0b" stroke-width="2"/>
        <line x1="73" y1="44" x2="79" y2="46" stroke="#f59e0b" stroke-width="2"/>
      `;
    }

    // Lv.4以上: テーラードジャケットの襟
    if (isLevel4) {
      accessories += `
        <!-- スーツジャケットの襟 -->
        <path d="M 33 60 L 45 74 L 41 78 L 28 65 Z" fill="#1e293b"/>
        <path d="M 67 60 L 55 74 L 59 78 L 72 65 Z" fill="#1e293b"/>
      `;
    }

    // Lv.5: 黄金クラウン＆エグゼクティブマント
    if (isLevel5) {
      accessories += `
        <!-- ゴールドクラウン (王冠) -->
        <polygon points="34,22 40,31 50,18 60,31 66,22 64,34 36,34" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
        <circle cx="34" cy="22" r="2.5" fill="#ef4444"/>
        <circle cx="50" cy="18" r="3" fill="#3b82f6"/>
        <circle cx="66" cy="22" r="2.5" fill="#ef4444"/>
        <circle cx="50" cy="29" r="2" fill="#ffffff"/>
        <!-- マント -->
        <path d="M 22 55 Q 10 75 14 90 Q 25 88 28 78 Z" fill="#b91c1c" opacity="0.9"/>
        <path d="M 78 55 Q 90 75 86 90 Q 75 88 72 78 Z" fill="#b91c1c" opacity="0.9"/>
      `;
    }

    const animClass = emotion === 'happy' || emotion === 'celebrate' ? 'ch-bounce-happy' : 'ch-idle-float';

    return `
      <svg viewBox="0 0 100 100" width="${size}" height="${size}" class="housuke-character-svg ${animClass}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bodyGrad" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="70%" stop-color="#0284c7"/>
            <stop offset="100%" stop-color="#0369a1"/>
          </radialGradient>
          <linearGradient id="bellyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#e2e8f0"/>
          </linearGradient>
          <filter id="chDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" flood-opacity="0.3"/>
          </filter>
        </defs>

        <g filter="url(#chDropShadow)" class="character-body-group">
          <!-- フクロウの耳羽 (左右のチョンマゲ) -->
          <path d="M 26 34 Q 22 16 34 26 Z" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
          <path d="M 74 34 Q 78 16 66 26 Z" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>

          <!-- 本体丸っこいボディ -->
          <ellipse cx="50" cy="56" rx="30" ry="32" fill="url(#bodyGrad)" stroke="#0369a1" stroke-width="2.5"/>

          <!-- 白いおなか -->
          <ellipse cx="50" cy="65" rx="18" ry="20" fill="url(#bellyGrad)"/>

          <!-- 足 (オレンジ色の爪) -->
          <ellipse cx="40" cy="88" rx="6" ry="4" fill="#f59e0b"/>
          <ellipse cx="60" cy="88" rx="6" ry="4" fill="#f59e0b"/>

          <!-- 羽 (左右) -->
          ${leftWing}
          ${rightWing}

          <!-- 顔パーツ (目・くちばし・ほっぺ) -->
          ${leftEye}
          ${rightEye}
          ${blush}
          ${beak}

          <!-- アクセサリー (ネクタイ・メガネ・クラウン等) -->
          ${accessories}
        </g>
      </svg>
    `;
  }

  const HOUSUKE_QUOTES = {
    general: [
      "「1問解くだけでも昨日の自分より確実に前進してるポ！」",
      "「スキマ時間の5分が、本番の1点を引き寄せるポ！」",
      "「間違えた問題こそ、あなたの伸びしろの宝庫だポ！」",
      "「焦らなくて大丈夫。今日のストリークを繋ごうポ！」",
      "「ビジネス思考は一生モノの武器になるポ！」",
      "「疲れたら1問だけ解いて、自分を褒めて寝るポ！」"
    ],
    levelUp: [
      "「ピキーン！新しい知識が身について進化したポ！」",
      "「すごいポ！着実に経営の眼が養われてるポ！」",
      "「この調子でビジネスエキスパートの頂点を目指すポ！」"
    ],
    correct: [
      "「見事だポ！その調子！」",
      "「ナイス正解！本質を捉えてるポ！」",
      "「素晴らしい論理的思考だポ！」"
    ],
    incorrect: [
      "「ドンマイだポ！解説を読んで理解を深めよう！」",
      "「ここで間違えておけば本番で必ず解けるポ！」",
      "「復習リストに追加したポ！次は必ず解ける！」"
    ]
  };

  function getRandomHousukeQuote(type = 'general') {
    const list = HOUSUKE_QUOTES[type] || HOUSUKE_QUOTES.general;
    return list[Math.floor(Math.random() * list.length)];
  }

  // グローバル公開
  window.renderCharacterSvg = renderCharacterSvg;
  window.getRandomHousukeQuote = getRandomHousukeQuote;
  window.HOUSUKE_QUOTES = HOUSUKE_QUOTES;

})(typeof window !== 'undefined' ? window : this);
