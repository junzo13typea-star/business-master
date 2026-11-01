/**
 * 中小企業診断士 第1次試験 実戦過去問・模試データベース (Pro Master)
 * 
 * 【特長】
 * 1. 年度別アーカイブ対応（令和5年度〜令和元年度の出題）
 * 2. 法改正アラート対応（意匠法・会社法・民法・中小企業定義の変遷と解説）
 * 3. 7科目モジュール統合（1科目100問規模へのスムーズな拡張基盤）
 */

// 過去問年度リスト（令和8年度〜令和元年度）
const EXAM_YEARS = [
  { id: "all", name: "全年度（精選マスター）", countLabel: "全問" },
  { id: "令和8年度", name: "令和8年度（最新出題）", icon: "🌟" },
  { id: "令和7年度", name: "令和7年度", icon: "🔥" },
  { id: "令和6年度", name: "令和6年度", icon: "📑" },
  { id: "令和5年度", name: "令和5年度", icon: "📑" },
  { id: "令和4年度", name: "令和4年度", icon: "📑" },
  { id: "令和3年度", name: "令和3年度", icon: "📑" },
  { id: "令和2年度", name: "令和2年度", icon: "📑" },
  { id: "令和元年度", name: "令和元年度", icon: "📑" }
];

// 7科目メタデータ
const SUBJECTS = {
  management: {
    id: "management",
    name: "企業経営理論",
    shortName: "経営",
    color: "#6366f1",
    icon: "📈",
    desc: "戦略論、組織論、マーケティング論の最重要基幹科目",
    examQuestions: 41 // 本番の問題数
  },
  finance: {
    id: "finance",
    name: "財務・会計",
    shortName: "財務",
    color: "#10b981",
    icon: "💰",
    desc: "簿記、財務諸表分析、CVP、ファイナンス（投資決定）",
    examQuestions: 25
  },
  operations: {
    id: "operations",
    name: "運営管理",
    shortName: "運営",
    color: "#f59e0b",
    icon: "🏭",
    desc: "生産管理（IE、工程管理）＆ 店舗・商業施設管理",
    examQuestions: 42
  },
  economics: {
    id: "economics",
    name: "経済学・経済政策",
    shortName: "経済",
    color: "#06b6d4",
    icon: "📊",
    desc: "ミクロ経済学（価格理論、不完全競争）＆ マクロ経済学（IS-LM）",
    examQuestions: 25
  },
  law: {
    id: "law",
    name: "経営法務",
    shortName: "法務",
    color: "#ec4899",
    icon: "⚖️",
    desc: "会社法（機関設計・M&A）、知的財産権、民法等",
    examQuestions: 25
  },
  it: {
    id: "it",
    name: "経営情報システム",
    shortName: "情報",
    color: "#8b5cf6",
    icon: "💻",
    desc: "IT基礎、データベース、セキュリティ、DX・クラウド戦略",
    examQuestions: 25
  },
  policy: {
    id: "policy",
    name: "中小企業経営・政策",
    shortName: "政策",
    color: "#14b8a6",
    icon: "🏢",
    desc: "中小企業白書（統計データ実態）＆ 中小企業支援施策",
    examQuestions: 42
  }
};

// 本番基準パラメータ
const REAL_EXAM_BENCHMARK = {
  totalQuestions: 225, // 診断士1次試験の合計本番問題数
  reliableThreshold: 150, // 信頼度80%以上で判定アンロック
  passingPct: 60,         // 全体60%以上
  cutoffPct: 40           // 1科目でも40%未満で不合格
};

// 統合問題プール
const CORE_QUESTIONS = [
  // --- 経営法務（過去問 ＆ 法改正対応）---
  {
    id: "law-r05-01",
    subject: "law",
    subjectName: "経営法務",
    year: "令和5年度",
    questionNumber: "第1問",
    category: "知的財産権（意匠法）",
    isRevisedLaw: true,
    revisedExplanation: "【令和元年意匠法改正】画像デザイン・建築物・内装が保護対象に追加され、存続期間も「出願の日から25年」となっています（旧法：登録から20年）。",
    question: "意匠法における意匠の保護対象および意匠権の効力に関する記述として、法改正に準拠した最も適切なものはどれか。",
    options: [
      "建築物の外観や店舗の内装デザインは、不動産であるため意匠法上の保護対象となることはない。",
      "ネットワーク経由で提供され、機器に記憶されていないクラウド上の操作画像も、意匠法の保護対象となり得る。",
      "意匠権の存続期間は、設定登録の日から起算して20年をもって終了する。",
      "関連意匠制度において、本意匠の出願日から1年を経過した後は、いかなる場合も関連意匠の出願は認められない。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× 令和元年改正により、「建築物」および「内装」のデザインも意匠法の保護対象として認められるようになりました。",
      "○ 正しい！改正意匠法では、機器にプレインストールされていないウェブ上・クラウド上の「画像」自体も保護対象となります。",
      "× 存続期間は「出願の日から25年」です（旧法：登録から20年から改正）。",
      "× 関連意匠の出願可能期間は、本意匠の出願日から「10年未満」まで大幅に延長されました。"
    ],
    explanation: "【意匠法大改正の総まとめ】\n① 保護対象拡大: 物品を離れた「画像」、不動産である「建築物」「内装」が保護対象に。\n② 存続期間延長: 「出願日から25年」へ。\n③ 関連意匠制度拡充: 本意匠の出願から「10年」まで登録可能に。",
    keyPoint: "意匠法改正3大ポイント：画像・建築・内装保護、出願から25年、関連意匠10年。"
  },
  {
    id: "law-r04-05",
    subject: "law",
    subjectName: "経営法務",
    year: "令和4年度",
    questionNumber: "第5問",
    category: "会社法（株主総会）",
    isRevisedLaw: true,
    revisedExplanation: "【令和元年会社法改正（2022年9月施行）】上場会社等において、株主総会資料をウェブ掲載しアクセス通知する「電子提供制度」が義務化されました。",
    question: "会社法における株主総会資料の電子提供制度に関する記述として、最も適切なものはどれか。",
    options: [
      "株主総会資料の電子提供制度を導入するためには、全株主の書面による個別の同意が必須である。",
      "電子提供措置をとる旨を定款で定めた会社であっても、株主が書面交付請求をした場合は、原則として書面を交付しなければならない。",
      "電子提供措置をとる会社では、株主総会の招集通知自体を発送することは一切禁止される。",
      "非上場会社（非公開会社）であっても、法律上当然に電子提供措置をとる義務が課されている。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× 個別同意は不要で、定款に電子提供措置をとる旨を定めることで導入できます。",
      "○ 正しい。ネット利用が困難な株主を保護するため、基準日までに書面交付請求をした株主には原則書面交付義務があります。",
      "× 招集通知（日時・場所・URL等を記載した書面）は引き続き郵送等で発送します。",
      "× 義務付けられているのは「振替株式発行会社（上場会社等）」であり、非公開会社は任意導入です。"
    ],
    explanation: "【株主総会資料の電子提供制度のポイント】\n・対象: 上場会社は義務。非上場会社は定款変更により任意導入可能。\n・方法: 総会の3週間前等からウェブサイト等に掲載。\n・株主保護: 弱者のための「書面交付請求権」が保障されています。",
    keyPoint: "電子提供制度：上場会社は義務、ウェブ掲載＋アクセス通知。書面交付請求権で弱者保護。"
  },
  {
    id: "law-r01-15",
    subject: "law",
    subjectName: "経営法務",
    year: "令和元年度",
    questionNumber: "第15問",
    category: "民法（債権法改正）",
    isRevisedLaw: true,
    revisedExplanation: "【2020年施行 民法（債権法）改正】消滅時効が「知った時から5年 / 行使できる時から10年」に統一され、法定利率は3%変動制、瑕疵担保責任は「契約不適合責任」へ移行しました。",
    question: "民法における消滅時効および契約不適合責任に関する記述として、現行民法に準拠した最も適切なものはどれか。",
    options: [
      "売買の目的物に契約内容との不適合があった場合、買主は追完請求（修補・代替物引渡し）をすることはできず、直ちに契約解除のみが認められる。",
      "債権の消滅時効期間は、原則として「債権者が権利を行使できることを知った時から5年間」または「権利を行使できる時から10年間」のいずれか早い方である。",
      "民法上の法定利率は年5%で固定されており、市場金利の変動に関わらず改定されることはない。",
      "個人が事業用融資の保証人（連帯保証人）になる場合、公正証書による保証意思の確認手続きは一切不要である。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× 買主の救済手段として、①追完請求、②代金減額請求、③解除、④損害賠償請求が認められています。",
      "○ 正しい！旧民法の職業別短期消滅時効は廃止され、「知った時から5年 / 行使可能時から10年」に統一されました。",
      "× 法定利率は固定5%から「年3%の変動制」に改められました。",
      "× 事業用融資の個人保証人には公正証書の作成（保証意思確認）が義務付けられました。"
    ],
    explanation: "【民法改正ポイント】時効は「知って5年・行使10年」。法定利率は3%変動制。契約不適合には追完・減額請求が追加。",
    keyPoint: "消滅時効＝知って5年。法定利率＝年3%変動制。買主の権利＝追完・減額・解除・賠償。"
  },

  // --- 中小企業経営・政策（過去問 ＆ 定義基準）---
  {
    id: "pol-r05-01",
    subject: "policy",
    subjectName: "中小企業経営・政策",
    year: "令和5年度",
    questionNumber: "第1問",
    category: "中小企業基本法・定義",
    isRevisedLaw: false,
    revisedExplanation: "【小規模企業者の定義基準】資本金基準はなく、常時従業員数のみで判定する超頻出論点。",
    question: "中小企業基本法における「小規模企業者」の定義に関する記述として、最も適切なものはどれか。",
    options: [
      "製造業においては、常時使用する従業員の数が50人以下の会社および個人を指す。",
      "商業・サービス業（宿泊業・娯楽業を除く）においては、常時使用する従業員の数が5人以下の会社および個人を指す。",
      "宿泊業および娯楽業においては、常時使用する従業員の数が5人以下でなければ小規模企業者とはみなされない。",
      "小規模企業者の判定においては、資本金の額が1,000万円以下であることが必須条件である。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× 製造業その他は「従業員20人以下」です。",
      "○ 正しい！商業（卸売・小売）およびサービス業（原則）は「常時使用する従業員5人以下」です。",
      "× 宿泊業と娯楽業は例外として、製造業と同様に「従業員20人以下」が小規模企業者となります。",
      "× 小規模企業者の定義に「資本金基準」はありません。"
    ],
    explanation: "【小規模企業者の基準】製造・建設・運輸・宿泊・娯楽＝20人以下。卸売・小売・一般サービス＝5人以下。",
    keyPoint: "小規模企業者：製造・宿泊・娯楽＝20人以下。商業・サービス＝5人以下（資本金要件なし）。"
  },
  {
    id: "pol-r04-10",
    subject: "policy",
    subjectName: "中小企業経営・政策",
    year: "令和4年度",
    questionNumber: "第10問",
    category: "事業承継税制（特例措置）",
    isRevisedLaw: true,
    revisedExplanation: "【事業承継税制 特例措置】納税猶予割合が全株式・100%全額猶予に拡充され、親族外承継も対象となった最重要施策。",
    question: "事業承継税制の「特例措置」に関する記述として、最も適切なものはどれか。",
    options: [
      "特例措置においては、対象株式の80%までしか贈与税・相続税の納税猶予が認められない。",
      "特例措置の適用を受けるためには、都道府県知事に「特例承継計画」を提出し確認を受ける必要がある。",
      "後継者は、先代経営者の親族（直系卑属）に限定されており、社内の第三者や外部の引受人は対象外である。",
      "贈与税の納税猶予を受けた場合、後継者が事業を継続している限りであっても、10年後には猶予税額を全額一括納付しなければならない。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× 特例措置では、全株式（100%）について納税額の100%全額が猶予されます。",
      "○ 正しい。特例承継計画を都道府県知事に提出して認定を受ける必要があります。",
      "× 親族外の後継者（従業員・外部役員等）も広く対象となります。",
      "× 事業と株式保有を継続する限り、猶予は生涯継続します。"
    ],
    explanation: "【特例承継税制】全株式・全額(100%)猶予。親族外OK。都道府県知事への特例承継計画提出が要件。",
    keyPoint: "事業承継税制特例：100%全額猶予、親族外承継対象、知事への計画提出が必須。"
  },

  // --- 企業経営理論（過去問）---
  {
    id: "mgt-r05-01",
    subject: "management",
    subjectName: "企業経営理論",
    year: "令和5年度",
    questionNumber: "第1問",
    category: "経営戦略論（ドメイン）",
    isRevisedLaw: false,
    revisedExplanation: "【戦略論の標準】エイベルのドメイン定義（物理的定義 vs 機能的定義）。",
    question: "企業の事業領域（ドメイン）の策定に関する記述として、最も適切なものはどれか。",
    options: [
      "事業ドメインを「モノ（物理的定義）」で定義すると、将来的な市場ニーズの変化に対する適応力が高まる。",
      "事業ドメインを「顧客機能（機能的定義）」で定義すると、自社の提供価値を広範に捉えられ、代替品の脅威にも気づきやすくなる。",
      "全社ドメインと事業ドメインは完全に独立しており、両者の間で整合性を図る必要はない。",
      "ドメインを極端に抽象的に定義するほど、現場の従業員に対して明確な行動指針を与えることができる。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× 物理的定義は近視眼的マーケティング（マイオピア）に陥りやすいです。",
      "○ 正しい。顧客が求める本質的ニーズ（機能）で捉えることで、市場の変化や代替品に対応できます。",
      "× 全社ドメインと個別事業ドメインは整合性・シナジーを持つ必要があります。",
      "× 抽象的すぎるドメインは日常の行動指針として機能しません。"
    ],
    explanation: "【ドメイン定義】物理的定義（線路と列車）はマイオピアを招く。機能的定義（移動・輸送サービス）で広角に捉える。",
    keyPoint: "ドメインは機能的定義（提供価値・ニーズ軸）で策定し、視野狭窄を防ぐ。"
  },
  {
    id: "mgt-r04-03",
    subject: "management",
    subjectName: "企業経営理論",
    year: "令和4年度",
    questionNumber: "第3問",
    category: "競争地位戦略",
    isRevisedLaw: false,
    revisedExplanation: "【コトラーの競争地位】リーダー、チャレンジャー、フォロワー、ニッチャー。",
    question: "コトラーの競争地位別戦略における「ニッチャー」の基本方針として、最も適切なものはどれか。",
    options: [
      "市場全体の最大化を目指し、全方位で競合の動きを同質化（模倣）する。",
      "特定市場の隙間（ミニマム・オプティマム）に特化し、独自の専門性を高めることで高い収益性を確保する。",
      "リーダー企業に対して正面から価格競争を仕掛け、トップシェアの強奪を狙う。",
      "上位企業の成功製品を迅速に低コストで模倣し、開発リスクを最小限に抑える。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× これは「リーダー（最大手）」の同質化・全方位戦略です。",
      "○ 正しい！ニッチャーは大手が進出しない隙間（ニッチ）市場で専門化し、高収益・高シェアを目指します。",
      "× これは「チャレンジャー」の差別化・対抗戦略です。",
      "× これは「フォロワー」の模倣・低コスト戦略です。"
    ],
    explanation: "【競争地位4類型】リーダー＝同質化、チャレンジャー＝差別化、ニッチャー＝特定隙間の専門化、フォロワー＝低コスト模倣。",
    keyPoint: "ニッチャー＝隙間市場への集中と専門化（大手との正面衝突を避ける）。"
  },

  // --- 財務・会計 ---
  {
    id: "fin-r05-01",
    subject: "finance",
    subjectName: "財務・会計",
    year: "令和5年度",
    questionNumber: "第1問",
    category: "CVP分析",
    isRevisedLaw: false,
    revisedExplanation: "【管理会計の定番】損益分岐点売上高と損益分岐点比率の計算。",
    question: "ある製品の年間売上高が2,000万円、変動費が1,200万円、固定費が600万円である。この企業の損益分岐点比率はいくらか。",
    options: [
      "65.0 %",
      "75.0 %",
      "80.0 %",
      "85.0 %"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× 計算誤りです。",
      "○ 正解です！限界利益率＝40%、損益分岐点売上高＝1,500万円。比率＝1,500/2,000＝75.0%。",
      "× 80.0%ではありません。",
      "× 85.0%ではありません。"
    ],
    explanation: "限界利益率＝(2,000-1,200)/2,000＝0.4。分岐点売上＝600/0.4＝1,500万円。比率＝1,500/2,000＝75%。",
    keyPoint: "損益分岐点比率 ＝ 分岐点売上高 ÷ 実際売上高（低いほど安全性が高い）。"
  },
  {
    id: "fin-r04-03",
    subject: "finance",
    subjectName: "財務・会計",
    year: "令和4年度",
    questionNumber: "第3問",
    category: "ファイナンス（WACC）",
    isRevisedLaw: false,
    revisedExplanation: "【企業財務の最頻出】WACCの計算における節税効果と時価ウェイト。",
    question: "加重平均資本コスト（WACC）に関する記述として、最も適切なものはどれか。",
    options: [
      "負債コストには利息の損金算入による節税効果があるため、税引前負債コストに (1 - 実効税率) を乗じて計算する。",
      "株主資本コストは、国債利回りなどのリスクフリーレートよりも常に低い値となる。",
      "有利子負債比率を高めていけば、財務リスクの増大に関わらずWACCはゼロまで低下し続ける。",
      "WACCを計算する際の負債と株主資本の比率は、簿価を用いることが理論上の原則である。"
    ],
    answerIndex: 0,
    optionsExplanation: [
      "○ 正しい！支払利息の損金算入により、実質負債コストは rD × (1 - t) となります。",
      "× 株式リスクプレミアムが乗るため、株主資本コストは国債より高くなります。",
      "× 負債が増えすぎると倒産リスク増で要求利回りが急騰し、WACCは上昇します。",
      "× ファイナンス理論上、WACCには「時価（市場価値）」を用います。"
    ],
    explanation: "WACC ＝ [D/(D+E)] × rD × (1-t) ＋ [E/(D+E)] × rE。負債コストの節税効果が核心。",
    keyPoint: "WACC：負債の節税効果 (1-t) ＆ 時価ウェイトの採用。"
  },

  // --- 運営管理 ---
  {
    id: "ops-r05-01",
    subject: "operations",
    subjectName: "運営管理",
    year: "令和5年度",
    questionNumber: "第1問",
    category: "生産管理・JIT",
    isRevisedLaw: false,
    revisedExplanation: "【生産管理の標準】JITの後工程引取り（プル方式）と自働化（異常停止）。",
    question: "トヨタ生産方式（JITシステム）の基本原則に関する記述として、最も適切なものはどれか。",
    options: [
      "後工程引取り方式では、前工程が生産したものを後工程へ順次プッシュ（押出し）供給する。",
      "自働化（ニンベンの付いたじどうか）とは、機械に人間の知恵を付与し、異常が発生した際にラインが自動停止する仕組みである。",
      "かんばん方式を円滑に機能させるためには、生産の平準化を行う必要はなく、ロットサイズを極大化させることが望ましい。",
      "段取時間の短縮において、機械を停止させた状態で行う段取作業を「外段取」と呼ぶ。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× JITは「プル方式」です。必要なものを後工程が引き取りに行きます。",
      "○ 正しい！自働化とは不良品を流さないため、異常時に自動停止する仕組みです。",
      "× 平準化と小ロット化がJITの必須前提条件です。",
      "× 機械停止中に行う作業は「内段取」です。"
    ],
    explanation: "JITの2本柱：ジャストインタイム（後工程引取り・平準化）＋ 自働化（異常時自動停止）。",
    keyPoint: "自働化＝異常時に機械が止まる（ニンベンの知恵）。内段取の外段取化が段取改善の定石。"
  },

  // --- 経済学・経済政策 ---
  {
    id: "eco-r05-01",
    subject: "economics",
    subjectName: "経済学・経済政策",
    year: "令和5年度",
    questionNumber: "第1問",
    category: "マクロ経済学（IS-LM）",
    isRevisedLaw: false,
    revisedExplanation: "【マクロの定石】拡張的財政政策とクラウディング・アウト。",
    question: "閉鎖経済下のIS-LMモデルにおいて、政府支出を増加させた（拡張的財政政策）場合の効果として、最も適切なものはどれか。",
    options: [
      "LM曲線が右方にシフトし、利子率は低下して国民所得が増加する。",
      "IS曲線が右方にシフトし、国民所得が増加するとともに利子率が上昇する。",
      "クラウディング・アウトが発生すると、国民所得の増加分が当初の政府支出額を上回る。",
      "流動性のわな（LM曲線が水平）の領域では、財政政策を行っても利子率が急騰し効果が相殺される。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× 財政政策でシフトするのは「IS曲線」です。",
      "○ 正しい！IS曲線が右シフトし、所得Yが増加するとともに貨幣需要増で利子率rが上昇します。",
      "× クラウディング・アウトにより、民間の投資が抑制され効果の一部が相殺されます。",
      "× 流動性のわなでは利子率が上がらないため、クラウディングアウトなしで最大効果となります。"
    ],
    explanation: "財政拡大 ➔ IS右シフト ➔ 所得増 ➔ 利子率上昇（クラウディング・アウト）。",
    keyPoint: "財政政策＝ISシフト。金融政策＝LMシフト。利子率上昇による民間投資抑制＝クラウディングアウト。"
  },

  // --- 経営情報システム ---
  {
    id: "it-r05-01",
    subject: "it",
    subjectName: "経営情報システム",
    year: "令和5年度",
    questionNumber: "第1問",
    category: "クラウドサービスモデル",
    isRevisedLaw: false,
    revisedExplanation: "【IT標準】IaaS, PaaS, SaaSの責任分界点。",
    question: "クラウドコンピューティングのサービスモデル（IaaS, PaaS, SaaS）に関する記述として、最も適切なものはどれか。",
    options: [
      "SaaSでは、ユーザー企業がOSのパッチ適用やミドルウェアのバージョン管理を行う責任を負う。",
      "PaaSでは、アプリケーションの実行基盤（OS、ランタイム、DB環境等）がクラウド側から提供され、ユーザーは自作アプリやデータのみを管理する。",
      "IaaSでは、物理サーバーの設置場所だけでなく、ユーザーが作成した業務アプリケーションソフトそのものまでクラウド事業者が運用管理する。",
      "オンプレミスと比較して、パブリッククラウドの導入は常に初期投資（CAPEX）を増大させる特徴がある。"
    ],
    answerIndex: 1,
    optionsExplanation: [
      "× SaaSは完成したソフトを利用するため、OS管理等は事業者側の責任です。",
      "○ 正しい！PaaSは開発・実行プラットフォームが提供され、ユーザーはアプリ開発に専念できます。",
      "× IaaSはインフラ（仮想マシン等）の提供であり、OS以上のアプリ管理はユーザー責任です。",
      "× クラウドは資産を持たない従量課金のため、初期投資（CAPEX）を抑制できます。"
    ],
    explanation: "IaaS（インフラ提供）→ PaaS（実行プラットフォーム提供）→ SaaS（完成アプリ提供）。",
    keyPoint: "クラウド3層：IaaS・PaaS・SaaSの責任分界点を明確に区別。"
  }
];

// グローバル問題配列（各科目の分割モジュールを統合・ID重複排除）
const QUESTIONS = (() => {
  const modulePools = [
    typeof MANAGEMENT_QUESTIONS !== 'undefined' ? MANAGEMENT_QUESTIONS : [],
    typeof FINANCE_QUESTIONS !== 'undefined' ? FINANCE_QUESTIONS : [],
    typeof OPERATIONS_QUESTIONS !== 'undefined' ? OPERATIONS_QUESTIONS : [],
    typeof ECONOMICS_QUESTIONS !== 'undefined' ? ECONOMICS_QUESTIONS : [],
    typeof LAW_QUESTIONS !== 'undefined' ? LAW_QUESTIONS : [],
    typeof IT_QUESTIONS !== 'undefined' ? IT_QUESTIONS : [],
    typeof POLICY_QUESTIONS !== 'undefined' ? POLICY_QUESTIONS : [],
    CORE_QUESTIONS
  ];
  const seen = new Set();
  const merged = [];
  for (const pool of modulePools) {
    for (const q of pool) {
      if (q && q.id && !seen.has(q.id)) {
        seen.add(q.id);
        merged.push(q);
      }
    }
  }
  return merged;
})();

// スピード用語マスター問題配列（全7科目515問を一元統合）
const VOCAB_QUESTIONS = (() => {
  const vocabPools = [
    typeof VOCAB_MANAGEMENT_QUESTIONS !== 'undefined' ? VOCAB_MANAGEMENT_QUESTIONS : [],
    typeof VOCAB_FINANCE_QUESTIONS !== 'undefined' ? VOCAB_FINANCE_QUESTIONS : [],
    typeof VOCAB_OPERATIONS_QUESTIONS !== 'undefined' ? VOCAB_OPERATIONS_QUESTIONS : [],
    typeof VOCAB_ECONOMICS_QUESTIONS !== 'undefined' ? VOCAB_ECONOMICS_QUESTIONS : [],
    typeof VOCAB_LAW_QUESTIONS !== 'undefined' ? VOCAB_LAW_QUESTIONS : [],
    typeof VOCAB_IT_QUESTIONS !== 'undefined' ? VOCAB_IT_QUESTIONS : [],
    typeof VOCAB_POLICY_QUESTIONS !== 'undefined' ? VOCAB_POLICY_QUESTIONS : []
  ];
  const seen = new Set();
  const merged = [];
  for (const pool of vocabPools) {
    for (const q of pool) {
      if (q && q.id && !seen.has(q.id)) {
        seen.add(q.id);
        merged.push(q);
      }
    }
  }
  return merged;
})();

// 模擬試験（全国統一プレ模試：全7科目からバランスよく計21問＝各科目3問を厳選）
const MOCK_EXAM_CONFIG = {
  title: "中小企業診断士 1次試験 全国統一プレ模擬試験",
  timeLimitMinutes: 40,
  passingScorePct: 60,
  cutOffScorePct: 40,
  questionIds: (() => {
    const picked = [];
    Object.keys(SUBJECTS).forEach(subKey => {
      const subQs = QUESTIONS.filter(q => q.subject === subKey).slice(0, 3);
      subQs.forEach(q => picked.push(q.id));
    });
    return picked;
  })()
};
