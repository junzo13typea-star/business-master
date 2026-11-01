/**
 * ビジネスエキスパートの道 - 初級編: MBA専門用語マスター（全7カテゴリ・計451問）
 */
window.MBA_CATEGORIES = [
  {
    "id": "strategy",
    "name": "経営戦略 (Strategy)",
    "shortName": "経営戦略",
    "icon": "♟️",
    "color": "#8b5cf6",
    "desc": "全社戦略・3C・5F・VRIO・ブルーオーシャン・競争優位の構築"
  },
  {
    "id": "marketing",
    "name": "マーケティング (Marketing)",
    "shortName": "マーケ",
    "icon": "🎯",
    "color": "#ec4899",
    "desc": "STP・4P/4C・LTV/CAC・ペルソナ・ブランド・顧客体験価値"
  },
  {
    "id": "finance",
    "name": "財務・ファイナンス (Finance & Accounting)",
    "shortName": "財務・会計",
    "icon": "📈",
    "color": "#3b82f6",
    "desc": "NPV・DCF法・WACC・ROIC・企業価値評価・資本コスト"
  },
  {
    "id": "leadership",
    "name": "組織行動・人事 (OB & Leadership)",
    "shortName": "組織・人事",
    "icon": "🤝",
    "color": "#10b981",
    "desc": "心理的安全性・タックマン・変革型リーダーシップ・OKR・動機づけ"
  },
  {
    "id": "operations",
    "name": "オペレーション・SCM (Operations)",
    "shortName": "生産・SCM",
    "icon": "⚙️",
    "color": "#f59e0b",
    "desc": "TOCボトルネック・ブルウィップ効果・トヨタ生産方式・カイゼン"
  },
  {
    "id": "innovation",
    "name": "DX・イノベーション (Innovation)",
    "shortName": "DX・革新",
    "icon": "💡",
    "color": "#06b6d4",
    "desc": "破壊的イノベーション・SaaS指標(ARR/NRR)・アジャイル・デザイン思考"
  },
  {
    "id": "analytics",
    "name": "意思決定・定量分析 (Data Analytics)",
    "shortName": "定量分析",
    "icon": "📊",
    "color": "#6366f1",
    "desc": "MECE・A/Bテスト・意思決定ツリー・期待値・パレート・統計思考"
  }
];

window.MBA_VOCAB_QUESTIONS = [
  {
    "id": "mba-strat-001",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "3C分析",
    "difficulty": "basic",
    "question": "事業の外部環境および内部環境を整理し、成功要因（KSF）を導き出すフレームワーク「3C分析」の3つの要素として正しい組み合わせはどれか。",
    "options": [
      "Customer（市場・顧客）、Competitor（競合）、Company（自社）",
      "Cost（コスト）、Competitor（競合）、Channel（流通）",
      "Customer（市場・顧客）、Company（自社）、Community（地域社会）",
      "Capital（資本）、Competitor（競合）、Customer（顧客）"
    ],
    "answerIndex": 0,
    "explanation": "3C分析はマッキンゼーの大前研一氏が提唱したフレームワークで、Customer（市場・顧客のニーズや規模）、Competitor（競合の動向や強み・弱み）、Company（自社の経営資源・強み）の3つの視点から戦略の基本方針を導き出します。"
  },
  {
    "id": "mba-strat-002",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ファイブフォース分析 (5 Forces)",
    "difficulty": "basic",
    "question": "マイケル・ポーターが提唱した、業界全体の収益性や構造的魅力を決定づける「5つの競争要因（5 Forces）」に含まれないものはどれか。",
    "options": [
      "売り手（供給者）の交渉力",
      "代替品の脅威",
      "政府・規制当局の介入",
      "買い手（顧客）の交渉力"
    ],
    "answerIndex": 2,
    "explanation": "ポーターの5フォースは①既存競合企業同士の敵対関係、②新規参入の脅威、③代替品の脅威、④買い手の交渉力、⑤売り手の交渉力の5つです。政府や規制はこれら5つの力に影響を与える背景要因（マクロ環境）として位置づけられます。"
  },
  {
    "id": "mba-strat-003",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "VRIO分析",
    "difficulty": "basic",
    "question": "ジェイ・バーニーのリソース・ベースト・ビュー（RBV）に基づくVRIO分析において、企業が「持続的な競争優位」を確立するために必要な4つの評価基準の組み合わせとして正しいものはどれか。",
    "options": [
      "Value（価値）、Rarity（希少性）、Inimitability（模倣困難性）、Organization（組織）",
      "Vision（ビジョン）、Rarity（希少性）、Innovation（革新性）、Operation（運用力）",
      "Value（価値）、ROI（投資対効果）、Inimitability（模倣困難性）、Ownership（所有権）",
      "Volume（規模）、Rarity（希少性）、Identity（独自性）、Organization（組織）"
    ],
    "answerIndex": 0,
    "explanation": "VRIOは企業の内部資源を評価するツールです。価値（V）と希少性（R）があれば一時的優位を得られますが、他社が真似できない模倣困難性（I）とそれを活かす組織体制（O）が揃うことで初めて持続的な競争優位が実現します。"
  },
  {
    "id": "mba-strat-004",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ブルー・オーシャン戦略",
    "difficulty": "basic",
    "question": "W・チャン・キムとレネ・モボルニュが提唱した「ブルー・オーシャン戦略」の本質的な説明として最も適切なものはどれか。",
    "options": [
      "競合のひしめく既存市場において、徹底的な低価格競争によりシェアトップを奪取する戦略",
      "バリュー・イノベーション（価値とコストの両立）により、競争のない未開拓の新たな市場空間を創造する戦略",
      "海洋資源や環境分野に特化し、ESG投資を呼び込む持続可能型ビジネスモデル",
      "多額の研究開発投資によって最新技術を独占し、特許網で市場参入障壁を構築する戦略"
    ],
    "answerIndex": 1,
    "explanation": "ブルー・オーシャン戦略は、血みどろの競争が繰り広げられる「レッド・オーシャン（既存市場）」を抜け出し、顧客にとって不要な要素を削ぎ落とし（コスト減）、新たな価値要素を付け加える「バリュー・イノベーション」によって未開拓の新市場を創り出す戦略です。"
  },
  {
    "id": "mba-strat-005",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "コア・コンピタンス",
    "difficulty": "standard",
    "question": "C.K.プラハラードとゲイリー・ハメルが定義した「コア・コンピタンス（中核的能力）」の要件として誤っているものはどれか。",
    "options": [
      "多様な市場・製品分野へのアクセスを可能にする広がりがあること",
      "最終製品がもたらす顧客価値・利益に大きく寄与していること",
      "競合他社が真似しにくい（模倣困難である）こと",
      "現行の特定製品ラインにおいて最大の売上高とシェアを占めていること"
    ],
    "answerIndex": 3,
    "explanation": "コア・コンピタンスは製品そのものではなく、製品の背後にある「企業の根源的な技術力や組織的能力」のことです（例：ホンダのエンジン技術、キヤノンの光学・微細加工技術）。単なる特定製品の売上規模は要件ではありません。"
  },
  {
    "id": "mba-strat-006",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "アンゾフの成長マトリクス",
    "difficulty": "basic",
    "question": "イゴール・アンゾフが提唱した事業拡大のマトリクスにおいて、「新製品」を「新市場」に投入する成長戦略を何と呼ぶか。",
    "options": [
      "市場浸透戦略",
      "製品開発戦略",
      "市場開拓戦略",
      "多角化戦略"
    ],
    "answerIndex": 3,
    "explanation": "アンゾフのマトリクスは「既存／新規」の製品と市場で4象限に分類されます。既存×既存＝市場浸透、新規製品×既存市場＝製品開発、既存製品×新規市場＝市場開拓、新規製品×新規市場＝多角化戦略（最もリスクが高い）です。"
  },
  {
    "id": "mba-strat-007",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ポーターの基本戦略（3類型）",
    "difficulty": "basic",
    "question": "マイケル・ポーターが提唱した競争優位を築くための3つの基本戦略として正しい組み合わせはどれか。",
    "options": [
      "コストリーダーシップ戦略、差別化戦略、集中戦略",
      "価格戦略、ブランド戦略、グローバル戦略",
      "スピード戦略、品質戦略、ニッチ戦略",
      "サプライチェーン戦略、提携戦略、イノベーション戦略"
    ],
    "answerIndex": 0,
    "explanation": "ポーターは、業界全体をターゲットにする「コストリーダーシップ戦略」と「差別化戦略」、特定のセグメント・顧客層に経営資源を集中させる「集中戦略（コスト集中／差別化集中）」の3つに分類しました。"
  },
  {
    "id": "mba-strat-008",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "PPM（プロダクト・ポートフォリオ・マネジメント）",
    "difficulty": "basic",
    "question": "ボストン・コンサルティング・グループ（BCG）が開発したPPMにおいて、「市場成長率が高く、相対的市場シェアが低い」事業象限はどれか。",
    "options": [
      "花形（スター）",
      "金のなる木（キャッシュ・カウ）",
      "問題児（クエスチョン・マーク）",
      "負け犬（ドッグ）"
    ],
    "answerIndex": 2,
    "explanation": "「問題児」は市場が急成長しているもののシェアが低いため、将来スターに育てるために多額の追加投資（資金注入）が必要な事業フェーズです。"
  },
  {
    "id": "mba-strat-009",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "価値連鎖（バリューチェーン）",
    "difficulty": "standard",
    "question": "企業の活動を主活動と支援活動に分類し、どこで付加価値が生み出されているかを分析するバリューチェーンにおいて、「主活動（Primary Activities）」に含まれるものはどれか。",
    "options": [
      "購買物流（インバウンド・ロジスティクス）",
      "技術開発（研究開発・IT）",
      "調達活動（資材・備品の調達）",
      "人事・労務管理"
    ],
    "answerIndex": 0,
    "explanation": "主活動は製品が顧客に届く一連の流れ（購買物流、製造・オペレーション、出荷物流、マーケティング・販売、サービス）の5つです。全社インフラ、人事、技術開発、調達はこれらを支える「支援活動」に分類されます。"
  },
  {
    "id": "mba-strat-010",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "両利きの経営 (Ambidexterity)",
    "difficulty": "standard",
    "question": "チャールズ・オライリーらが提唱した「両利きの経営（Ambidexterity）」において、企業が持続的に成長するために両立すべき2つの行動の組み合わせはどれか。",
    "options": [
      "既存事業の「知の深化（Exploitation）」と、新規事業の「知の探索（Exploration）」",
      "コスト削減の徹底と、株主還元の最大化",
      "国内市場での寡占化と、海外市場への直接投資",
      "トップダウンの意思決定と、ボトムアップの提案制度"
    ],
    "answerIndex": 0,
    "explanation": "「知の深化（既存事業の強みを磨き効率化すること）」だけに偏るとイノベーションが枯渇し、「知の探索（枠を超えて新しい知の組み合わせを探すこと）」ばかりでは収益が安定しません。高収益企業はこの両者を高いレベルで両立させています。"
  },
  {
    "id": "mba-strat-011",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ネットワーク外部性 (Network Externality)",
    "difficulty": "standard",
    "question": "SNSやプラットフォームビジネスにおいて、ユーザー数が増加するほど既存ユーザーや新規ユーザーにとっての製品・サービスの価値が飛躍的に高まる現象を何と呼ぶか。",
    "options": [
      "規模の経済（Scale Economy）",
      "範囲の経済（Scope Economy）",
      "ネットワーク外部性（直接／間接ネットワーク効果）",
      "経験曲線効果（Experience Curve）"
    ],
    "answerIndex": 2,
    "explanation": "電話やSNS（LINE、Instagram等）、クレジットカード決済プラットフォームなど、利用者が増えれば増えるほど利用者の便益が増加し、一度クリティカルマスを超えると競合が追いつけなくなる現象をネットワーク効果（外部性）と呼びます。"
  },
  {
    "id": "mba-strat-012",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "プラットフォーム戦略",
    "difficulty": "standard",
    "question": "複数の異なるプレイヤー（例：買い手と売り手、アプリ開発者とエンドユーザー）を仲介し、場を提供することで収益を上げる市場をMBAで何と呼ぶか。",
    "options": [
      "ツーサイド・プラットフォーム（Two-sided Market）",
      "垂直統合型バリューチェーン",
      "オープン・クローズ戦略",
      "ファブレス・サプライチェーン"
    ],
    "answerIndex": 0,
    "explanation": "ツーサイド（マルチサイド）・プラットフォームは、例えばApp Store（アプリ開発者とiPhoneユーザー）やAirbnb（宿泊提供者と宿泊者）のように、2つ以上の異なるグループを結びつけ相互の交流や取引を促進するモデルです。"
  },
  {
    "id": "mba-strat-013",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ダイナミック・ケイパビリティ",
    "difficulty": "standard",
    "question": "デイビッド・ティースが提唱した、急速に変化する激動の環境に対応して、企業が保有する資源を再構成・変革・統合し続ける動的能力を何と呼ぶか。",
    "options": [
      "スタティック・アジリティ",
      "ダイナミック・ケイパビリティ（Dynamic Capabilities）",
      "コア・リソース・ベース",
      "バランスド・スコアカード"
    ],
    "answerIndex": 1,
    "explanation": "ダイナミック・ケイパビリティは、環境変化を感知する能力（Sensing）、機会を捕捉する能力（Seizing）、経営資源を再結合・変革する能力（Transforming）の3要素からなり、不確実性の高い現代の経営戦略論の中核概念です。"
  },
  {
    "id": "mba-strat-014",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ゲーム理論（ナッシュ均衡）",
    "difficulty": "standard",
    "question": "戦略的意思決定において、すべてのプレイヤーが他者の戦略を前提とした上で最適な選択をとっており、どのプレイヤーも単独で戦略を変更する動機を持たない安定した状態を何と呼ぶか。",
    "options": [
      "パレート最適",
      "ナッシュ均衡",
      "ゼロサムゲーム",
      "囚人のジレンマの崩壊"
    ],
    "answerIndex": 1,
    "explanation": "ジョン・ナッシュが提唱した「ナッシュ均衡」は、互いに手の内を読み合った結果、誰も自分一人だけ戦略を変えても得をしない膠着した均衡状態を指します。"
  },
  {
    "id": "mba-strat-015",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "スイッチング・コスト",
    "difficulty": "basic",
    "question": "顧客が現在利用している製品やサービスから、競合他社の製品やサービスに乗り換える際に発生する金銭的・心理的・手続き的負担を何と呼ぶか。",
    "options": [
      "サンク・コスト（埋没費用）",
      "スイッチング・コスト（乗り換え費用）",
      "マージナル・コスト（限界費用）",
      "オポチュニティ・コスト（機会費用）"
    ],
    "answerIndex": 1,
    "explanation": "スイッチング・コストを高めること（データのロックイン、ポイント制度、操作習得コスト等）は、顧客の離反を防ぎ、参入障壁を築くための重要な戦略的手段です。"
  },
  {
    "id": "mba-strat-016",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "M&Aにおけるシナジー効果",
    "difficulty": "basic",
    "question": "企業買収・合併（M&A）において、「1＋1が2以上になる効果」を指すシナジー（Synergy）のうち、重複部門の統合や共同仕入れによるコスト削減効果を特に何と呼ぶか。",
    "options": [
      "売上シナジー（レベニュー・シナジー）",
      "コストシナジー（費用削減シナジー）",
      "財務シナジー（資金調達シナジー）",
      "ブランドシナジー"
    ],
    "answerIndex": 1,
    "explanation": "M&Aのシナジーは主に、クロスセル等による「売上シナジー」、物流やバックオフィスの統合・大量購買による「コストシナジー」、資金調達力向上や節税による「財務シナジー」に分類されます。"
  },
  {
    "id": "mba-strat-017",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "規模の経済と範囲の経済",
    "difficulty": "basic",
    "question": "「単一製品の生産量を増やすことで単位あたり固定費が下がり平均費用が低下する効果」と、「同一企業が複数事業を営み共通のインフラやノウハウを共有して効率化する効果」の正しい組み合わせはどれか。",
    "options": [
      "前者が「規模の経済（Scale）」、後者が「範囲の経済（Scope）」",
      "前者が「範囲の経済（Scope）」、後者が「規模の経済（Scale）」",
      "前者が「経験曲線効果」、後者が「学習効果」",
      "前者が「ネットワーク外部性」、後者が「規模の経済」"
    ],
    "answerIndex": 0,
    "explanation": "生産規模（量）の拡大によるコスト低下は規模の経済（スケールメリット）、多角化により複数製品間で資源（流通網・ブランド等）を共有する効果は範囲の経済（スコープメリット）です。"
  },
  {
    "id": "mba-strat-018",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "垂直統合と水平分業",
    "difficulty": "standard",
    "question": "製造業などにおいて、原材料調達から部品製造、組立、流通・小売に至る上流から下流までのサプライチェーン全体を1社が傘下に収める戦略を何と呼ぶか。",
    "options": [
      "水平統合",
      "垂直統合",
      "モジュール化",
      "ファブレス戦略"
    ],
    "answerIndex": 1,
    "explanation": "バリューチェーンの前後工程を自社で統合することを「垂直統合（Vertical Integration）」と呼びます（例：ユニクロ等のSPA、テスラの直販・独自バッテリー開発）。一方、特定工程に特化して他社と水平に連携するモデルを「水平分業」と呼びます。"
  },
  {
    "id": "mba-strat-019",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "先行者優位 (First Mover Advantage)",
    "difficulty": "basic",
    "question": "市場にいち早く参入した企業が得られる「先行者優位」の要因として適切でないものはどれか。",
    "options": [
      "初期の顧客獲得によるブランドの認知と忠誠心の確立",
      "優れた流通チャネルや重要資源の優先的確保",
      "市場の需要動向や技術標準の不確実性に伴うリスクの回避",
      "経験の蓄積による早期の製造コスト低減（経験曲線効果）"
    ],
    "answerIndex": 2,
    "explanation": "先行者は不確実性の高い未開拓市場に多額の投資をするため「市場失敗リスク」や「模倣によるフォロワーのフリーライダー（ただ乗り）リスク」を負います。不確実性の回避はむしろ「後発者（フォロワー）」のメリットです。"
  },
  {
    "id": "mba-strat-020",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "オープン・イノベーション",
    "difficulty": "standard",
    "question": "ヘンリー・チェスブロウが提唱した、自社内部の研究開発だけに頼る「クローズド・イノベーション」に対し、外部の大学・スタートアップ・他企業の技術やアイデアを有機的に結合して革新を起こす手法を何と呼ぶか。",
    "options": [
      "オープン・イノベーション",
      "リバース・イノベーション",
      "ソーシャル・イノベーション",
      "プラットフォーム・エンジニアリング"
    ],
    "answerIndex": 0,
    "explanation": "オープン・イノベーションは、社外の技術やアイデアを社内に取り込む「インバウンド」と、社内の休眠特許や技術を社外にライセンス・スピンアウトして活用する「アウトバウンド」の双方向から革新を加速させる概念です。"
  },
  {
    "id": "mba-strat-021",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "バランスド・スコアカード (BSC)",
    "difficulty": "standard",
    "question": "ロバート・キャプランとデビッド・ノートンが開発した、企業のビジョンと戦略を多面的に管理・実行するためのフレームワークBSCの4つの視点に含まれないものはどれか。",
    "options": [
      "財務の視点",
      "顧客の視点",
      "競合他社の視点",
      "学習と成長の視点"
    ],
    "answerIndex": 2,
    "explanation": "BSCの4つの視点は、①財務の視点、②顧客の視点、③内部ビジネスプロセスの視点、④学習と成長の視点です。財務指標だけでなく非財務指標をバランス良く組み合わせて戦略実行をトラッキングします。"
  },
  {
    "id": "mba-strat-022",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ケイパビリティ (Capabilities)",
    "difficulty": "basic",
    "question": "戦略論において、単なる保有資産（工場や特許等のリソース）そのものではなく、それらを組み合わせて業務を効率的・効果的に遂行する「組織的な遂行能力」を何と呼ぶか。",
    "options": [
      "アセット",
      "ケイパビリティ（組織能力）",
      "ガバナンス",
      "シェアード・バリュー"
    ],
    "answerIndex": 1,
    "explanation": "ジョージ・ストークスらが提唱した概念で、個人のスキルを超えた「組織全体のプロセスやルーティンとして定着した遂行力（例：トヨタのカイゼン能力、ウォルマートのロジスティクス運用力）」を指します。"
  },
  {
    "id": "mba-mkt-001",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "STP分析",
    "difficulty": "basic",
    "question": "フィリップ・コトラーが提唱した、市場におけるターゲットと自社の立ち位置を明確にするSTP分析の3つのステップとして正しい組み合わせはどれか。",
    "options": [
      "Segmentation（市場細分化）、Targeting（標的市場選定）、Positioning（立ち位置設定）",
      "Strategy（戦略）、Targeting（標的選定）、Promotion（販売促進）",
      "Sales（営業）、Targeting（標的選定）、Pricing（価格設定）",
      "Segmentation（市場細分化）、Testing（検証）、Pricing（価格設定）"
    ],
    "answerIndex": 0,
    "explanation": "STP分析は近代マーケティングの王道です。市場を共通のニーズを持つ顧客グループに分ける（S）、その中から自社が狙うべきグループを決める（T）、ターゲット顧客の心の中で競合と差別化された魅力的な独自のポジションを築く（P）の流れをとります。"
  },
  {
    "id": "mba-mkt-002",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "マーケティングの4Pと4C",
    "difficulty": "basic",
    "question": "企業視点の「4P（Product, Price, Place, Promotion）」に対し、ロバート・ローターボーンが提唱した顧客視点の「4C」の組み合わせとして正しいものはどれか。",
    "options": [
      "Customer Value（顧客価値）、Cost（顧客負担コスト）、Convenience（利便性）、Communication（対話）",
      "Company（企業）、Cost（原価）、Channel（流通）、Campaign（宣伝）",
      "Customer（顧客）、Capital（資本）、Convenience（利便性）、Community（共同体）",
      "Core（核心）、Cost（コスト）、Coverage（網羅性）、Communication（対話）"
    ],
    "answerIndex": 0,
    "explanation": "製品（Product）→顧客価値（Customer Value）、価格（Price）→顧客負担費用（Cost）、流通（Place）→入手の利便性（Convenience）、販促（Promotion）→双方向の対話（Communication）が対比されます。"
  },
  {
    "id": "mba-mkt-003",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "LTV（Life Time Value：顧客生涯価値）",
    "difficulty": "basic",
    "question": "ある顧客が取引を開始してから終了するまでの全期間を通じて、企業にもたらす利益（または売上）の総額を表す経営・マーケティング指標はどれか。",
    "options": [
      "LTV（Life Time Value）",
      "CAC（Customer Acquisition Cost）",
      "CPA（Cost Per Acquisition）",
      "ROI（Return on Investment）"
    ],
    "answerIndex": 0,
    "explanation": "LTVはサブスクリプション型ビジネスやCRMにおいて極めて重視される指標です。「平均購買単価 × 購買頻度 × 継続期間」で算出され、顧客ロイヤルティ向上や解約防止（チャーン抑制）施策の評価基準となります。"
  },
  {
    "id": "mba-mkt-004",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "CAC（顧客獲得単価）とユニットエコノミクス",
    "difficulty": "standard",
    "question": "新規顧客を1件獲得するために費やしたマーケティングおよび営業コストの総額を表す指標CACに関する記述として、最も適切なものはどれか。",
    "options": [
      "SaaS等のビジネスモデルでは、健全な事業成長の基準として「LTV ÷ CAC ≧ 3」が推奨される",
      "CACは高ければ高いほど、ブランドプレミアムが高まり事業健全性が向上する",
      "CACは「顧客の総利用期間」で除して計算される",
      "CACは固定費のみを含み、広告宣伝費や営業人件費は含まない"
    ],
    "answerIndex": 0,
    "explanation": "ユニットエコノミクス（1顧客あたりの採算性）において、一般に「LTV / CAC」が3以上、かつCAC回収期間（Payback Period）が12ヶ月以内であることが健全な成長の目安とされます。"
  },
  {
    "id": "mba-mkt-005",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "チャーンレート (Churn Rate)",
    "difficulty": "basic",
    "question": "サブスクリプション（定額課金）や会員制サービスにおいて、特定期間内に有料会員が契約を解除（解約）した割合を表す重要指標はどれか。",
    "options": [
      "チャーンレート（解約率）",
      "コンバージョンレート（CVR）",
      "バウンスレート（直帰率）",
      "アトリビューションレート"
    ],
    "answerIndex": 0,
    "explanation": "解約率（チャーンレート）を低く抑えることは、LTVの伸長と安定した売上成長に直結します。顧客の成功を伴走支援する「カスタマーサクセス」部門の主要KPIです。"
  },
  {
    "id": "mba-mkt-006",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ペルソナ (Persona)",
    "difficulty": "basic",
    "question": "マーケティングにおいて、自社製品・サービスのターゲットとなる架空の典型的な顧客像（氏名・年齢・職業・趣味・価値観・日々の悩み等まで詳細に設定したもの）を何と呼ぶか。",
    "options": [
      "ペルソナ",
      "セグメント",
      "アバター",
      "インフルエンサー"
    ],
    "answerIndex": 0,
    "explanation": "単なるデモグラフィック属性（例：30代男性）ではなく、生活実態や感情、課題解決への動機まで具体化した「ペルソナ」を設計することで、開発・営業・マーケティング部門間で共通の顧客理解を形成できます。"
  },
  {
    "id": "mba-mkt-007",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "カスタマージャーニー (Customer Journey)",
    "difficulty": "basic",
    "question": "顧客が製品やサービスを「認知」し、興味・検討を経て「購入」し、最終的に「利用・推奨（ファン化）」に至る一連の行動・思考・感情のプロセスを図式化したものを何と呼ぶか。",
    "options": [
      "カスタマージャーニーマップ",
      "バリューストリームマップ",
      "コンバージョンファネル",
      "ガントチャート"
    ],
    "answerIndex": 0,
    "explanation": "顧客接点（タッチポイント）ごとの顧客の感情やペインポイント（不満）を可視化することで、最適なタイミングで適切な情報や施策を提供するオムニチャネル戦略の設計に活用されます。"
  },
  {
    "id": "mba-mkt-008",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ブランド・エクイティ (Brand Equity)",
    "difficulty": "standard",
    "question": "デイビッド・アーカーが体系化した、企業が持つブランド名やシンボルが製品やサービスに付加する無形の資産価値「ブランド・エクイティ」の構成要素に含まれないものはどれか。",
    "options": [
      "ブランド認知（Awareness）",
      "知覚品質（Perceived Quality）",
      "ブランド・ロイヤルティ（忠誠度）",
      "ブランド原価率（Cost Ratio）"
    ],
    "answerIndex": 3,
    "explanation": "アーカーのブランド・エクイティモデルは、①ブランド認知、②知覚品質、③ブランド連想（Associations）、④ブランド・ロイヤルティ、⑤その他知的所有権の5要素から構成されます。"
  },
  {
    "id": "mba-mkt-009",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "キャズム理論 (The Chasm)",
    "difficulty": "standard",
    "question": "ジェフリー・ムーアがハイテク製品の普及過程に関して提唱した「キャズム（深い溝）」は、エベレット・ロジャーズのイノベーター理論におけるどのグループの間に存在するか。",
    "options": [
      "アーリーアダプター（初期採用層）と アーリーマジョリティ（前期追随層）の間",
      "イノベーター（革新層）と アーリーアダプター（初期採用層）の間",
      "アーリーマジョリティ（前期追随層）と レイトマジョリティ（後期追随層）の間",
      "レイトマジョリティと ラガード（遅滞層）の間"
    ],
    "answerIndex": 0,
    "explanation": "先進的なビジョンを持つ「初期採用層（アーリーアダプター）」と、実用性・安心感を重視する「前期追随層（アーリーマジョリティ）」の間には巨大な意識の溝（キャズム）が存在し、ここを超えられない新製品は市場で失速・失敗します。"
  },
  {
    "id": "mba-mkt-010",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "プロダクト・ライフサイクル (PLC)",
    "difficulty": "basic",
    "question": "製品が市場に投入されてから衰退するまでの4つの段階（導入期・成長期・成熟期・衰退期）において、一般に「売上高が最大に達し、価格競争が激化してシェア防衛が主要課題となる」ステージはどれか。",
    "options": [
      "導入期",
      "成長期",
      "成熟期",
      "衰退期"
    ],
    "answerIndex": 2,
    "explanation": "成熟期では市場全体が飽和し、新規参入よりも既存競合同士のシェア争いやコスト競争が激化します。製品差別化や付加価値サービス、リピート顧客の維持が重要となります。"
  },
  {
    "id": "mba-mkt-011",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "価格戦略（スキミングとペネトレーション）",
    "difficulty": "standard",
    "question": "新製品発売時の価格戦略において、「初期に高価格を設定してイノベーター層から高い利益を早期回収する手法（上澄み吸収価格）」を何と呼ぶか。",
    "options": [
      "スキミング・プライシング（初期高価格戦略）",
      "ペネトレーション・プライシング（市場浸透価格戦略）",
      "ダイナミック・プライシング（変動価格制）",
      "フリーミアム・プライシング"
    ],
    "answerIndex": 0,
    "explanation": "高価格で開発費を早期回収するのがスキミング（上澄み吸収）。一方、初期から低価格で一気に市場シェアを奪取するのがペネトレーション（市場浸透）戦略です。"
  },
  {
    "id": "mba-mkt-012",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "オムニチャネル (Omnichannel)",
    "difficulty": "basic",
    "question": "実店舗、ECサイト、アプリ、SNS、カタログなど、顧客と企業が接するすべての販売チャネル・情報経路をシームレスに統合し、顧客に一貫した購買体験を提供する戦略を何と呼ぶか。",
    "options": [
      "マルチチャネル",
      "オムニチャネル",
      "フランチャイズ",
      "ドロップシッピング"
    ],
    "answerIndex": 1,
    "explanation": "マルチチャネルは各店舗やWebが独立して並存している状態ですが、オムニチャネルは在庫データ・顧客ID・ポイントが一元化され、「店舗で見てアプリで買い、最寄り店で受け取る」といったシームレスな購買が可能になります。"
  },
  {
    "id": "mba-mkt-013",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "フリーミアム (Freemium)",
    "difficulty": "basic",
    "question": "基本的な機能やサービスは無料で提供し、より高度な機能や容量、広告非表示などの追加価値に対して課金するビジネスモデルを何と呼ぶか。",
    "options": [
      "フリーミアム（Free + Premium）",
      "サブスクリプション",
      "成果報酬型モデル",
      "レベニューシェア"
    ],
    "answerIndex": 0,
    "explanation": "Dropbox、Spotify、LinkedIn、スマホアプリゲームなどで幅広く採用される代表的なデジタル収益モデルです。膨大な無料ユーザーの数％を有料会員に転換（コンバージョン）させて収益をあげます。"
  },
  {
    "id": "mba-mkt-014",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "NPS（Net Promoter Score：顧客推奨度）",
    "difficulty": "standard",
    "question": "ベイン・アンド・カンパニーのフレッド・ライクヘルドが開発した「この企業（製品）を友人や同僚に薦める可能性はどのくらいありますか？（0〜10点）」の設問から算出するロイヤルティ指標はどれか。",
    "options": [
      "NPS（Net Promoter Score）",
      "CSAT（Customer Satisfaction Score）",
      "CES（Customer Effort Score）",
      "CTR（Click Through Rate）"
    ],
    "answerIndex": 0,
    "explanation": "推奨者（9〜10点）の割合（％）から批判者（0〜6点）の割合（％）を差し引いて算出します。顧客の将来的な継続利用や口コミによる成長率と極めて高い相関があることで知られます。"
  },
  {
    "id": "mba-mkt-015",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ポジショニングマップ",
    "difficulty": "basic",
    "question": "顧客が製品やサービスを選択する際の最も重視する2つの決定基準（KBF：Key Buying Factors）を縦軸と横軸にとり、競合との位置関係や自社の差別化スペースを視覚化する図を何と呼ぶか。",
    "options": [
      "ポジショニングマップ（知覚マップ）",
      "レーダーチャート",
      "散布図マトリクス",
      "ベン図"
    ],
    "answerIndex": 0,
    "explanation": "競合が密集している領域（レッドオーシャン）を避け、顧客ニーズがありながら他社が満たしていない「ホワイトスペース」を発見するために活用されます。"
  },
  {
    "id": "mba-mkt-016",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "D2C（Direct to Consumer）",
    "difficulty": "basic",
    "question": "メーカーやブランドが問屋や小売店などの中間流通を介さず、自社のECサイトや直営店舗を通じて消費者に直接製品を企画・製造・販売するモデルを何と呼ぶか。",
    "options": [
      "B2B2C",
      "D2C（Direct to Consumer）",
      "C2C",
      "OEM"
    ],
    "answerIndex": 1,
    "explanation": "中間マージンをカットして高い利益率を確保できるだけでなく、顧客データや購買行動を直接蓄積・分析し、ブランドの世界観（ストーリー）をSNS等でダイレクトに発信して熱狂的なファンを育てる特徴があります。"
  },
  {
    "id": "mba-mkt-017",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ダイナミック・プライシング",
    "difficulty": "basic",
    "question": "航空券やホテル、テーマパーク、スポーツ観戦チケットなどで導入されている、需要と供給の状況に応じてAIやアルゴリズムがリアルタイムに価格を変動させる手法を何と呼ぶか。",
    "options": [
      "コストプラス価格設定",
      "ダイナミック・プライシング（価格変動制）",
      "均一価格設定（ペネトレーション）",
      "二重価格制"
    ],
    "answerIndex": 1,
    "explanation": "繁忙期の収益最大化（プライスアップ）と閑散期の稼働率維持（値下げ）を同時に達成し、レベニューマネジメント（収益管理）を最適化する仕組みです。"
  },
  {
    "id": "mba-mkt-018",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "リードナーチャリング (Lead Nurturing)",
    "difficulty": "standard",
    "question": "展示会やWebサイト等で獲得した見込み客（リード）に対し、メルマガ、ウェビナー、ホワイトペーパー等の有益な情報を定期的に提供し、購買意欲を徐々に高めて商談へと育成する活動を何と呼ぶか。",
    "options": [
      "リードジェネレーション",
      "リードナーチャリング（見込み客育成）",
      "リードクオリフィケーション",
      "インサイドセールス"
    ],
    "answerIndex": 1,
    "explanation": "獲得（Generation）→育成（Nurturing）→選別（Qualification）というB2Bマーケティングの重要プロセスの一つです。"
  },
  {
    "id": "mba-mkt-019",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "プライス・エラスティシティ（価格弾力性）",
    "difficulty": "standard",
    "question": "価格が1％変動したときに、製品の需要量が何％変化するかを表す経済・マーケティング指標を何と呼ぶか。",
    "options": [
      "限界効用",
      "需要の価格弾力性",
      "マークアップ率",
      "損益分岐点比率"
    ],
    "answerIndex": 1,
    "explanation": "価格弾力性が1より大きい場合（弾力的：値上げすると需要が激減する日用品など）、値上げは売上減を招きます。逆に弾力性が小さい（非弾力的：代替品がない医薬品や熱狂的ブランドなど）製品は、値上げしても需要が落ちず利益を増やせます。"
  },
  {
    "id": "mba-mkt-020",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "アンバサダー・マーケティング",
    "difficulty": "basic",
    "question": "単なる一過性のインフルエンサー広告とは異なり、製品やブランドに強い愛着を持つ熱心なファンを公式な「大使（アンバサダー）」に任命し、中長期的に口コミや魅力を発信してもらう手法を何と呼ぶか。",
    "options": [
      "アンバサダー・マーケティング",
      "ステルス・マーケティング",
      "バズ・マーケティング",
      "アフィリエイト・マーケティング"
    ],
    "answerIndex": 0,
    "explanation": "熱狂的なファン（エバンジェリスト）の本音の言葉や体験談を活用することで、広告嫌悪感の強い現代の消費者に対しても高い信頼性と共感を獲得できます。"
  },
  {
    "id": "mba-mkt-021",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ジョブ理論 (Jobs to be Done)",
    "difficulty": "standard",
    "question": "クレイトン・クリステンセン教授が提唱した「顧客は製品そのものを買っているのではなく、特定の生活状況で生じる課題（Job：成し遂げたい用事）を片付けるために製品を『雇っている（Hire）』」という理論を何と呼ぶか。",
    "options": [
      "ジョブ理論（JTBD）",
      "行動経済学",
      "機能的便益理論",
      "サービス・ドミナント・ロジック"
    ],
    "answerIndex": 0,
    "explanation": "「顧客は4分の1インチのドリルが欲しいのではなく、4分の1インチの穴が欲しいのだ」という有名な格言の通り、顧客が真に解決したい根本的な状況と感情に寄り添うイノベーション創出手法です。"
  },
  {
    "id": "mba-mkt-022",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "コンテンツ・マーケティング",
    "difficulty": "basic",
    "question": "自社製品の売り込みを前面に出すのではなく、ターゲット読者にとって有益で質の高い情報（ブログ、動画、白書、事例など）を提供し続け、信頼関係を築いて最終的に顧客化する手法を何と呼ぶか。",
    "options": [
      "コンテンツ・マーケティング",
      "テレマーケティング",
      "プッシュ型ダイレクトメール",
      "リスティング広告"
    ],
    "answerIndex": 0,
    "explanation": "検索エンジン（SEO）やソーシャルメディアを通じて顧客自らが能動的に見つけ出す「インバウンド・マーケティング」の中核をなす手法です。"
  },
  {
    "id": "mba-fin-001",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "NPV（Net Present Value：正味現在価値）",
    "difficulty": "basic",
    "question": "設備投資や企業価値評価において、将来創出されるキャッシュフローの現在価値合計から、初期投資額を差し引いた指標を何と呼ぶか。",
    "options": [
      "NPV（正味現在価値）",
      "IRR（内部収益率）",
      "ROE（自己資本利益率）",
      "回収期間（Payback Period）"
    ],
    "answerIndex": 0,
    "explanation": "コーポレート・ファイナンスで最も信頼される投資判断基準です。「NPV ＞ 0」であれば企業価値を高めるため投資を実行し、「NPV ＜ 0」であれば見送ります。"
  },
  {
    "id": "mba-fin-002",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "DCF法 (Discounted Cash Flow)",
    "difficulty": "standard",
    "question": "将来生み出されるフリーキャッシュフローを、その事業のリスクを反映した割引率（WACC等）で割り引いて現在価値を求め、企業価値や事業価値を算出する評価手法を何と呼ぶか。",
    "options": [
      "DCF法（割引キャッシュフロー法）",
      "マルチプル法（類似企業比較法）",
      "簿価純資産法",
      "取引事例比較法"
    ],
    "answerIndex": 0,
    "explanation": "インカム・アプローチの代表格で、M&Aの買収価格算定や事業性評価において最も理論的とされるバリュエーション手法です。"
  },
  {
    "id": "mba-fin-003",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "WACC（加重平均資本コスト）",
    "difficulty": "standard",
    "question": "企業の資金調達コストを表す指標で、株主が要求する期待リターン（株主資本コスト）と、銀行等の債権者が要求する金利（負債コスト：節税効果考慮後）を加重平均したものを何と呼ぶか。",
    "options": [
      "WACC（Weighted Average Cost of Capital）",
      "CAPM（Capital Asset Pricing Model）",
      "EBITDAマージン",
      "ROICスプレッド"
    ],
    "answerIndex": 0,
    "explanation": "企業が投資家や金融機関から資金を集めて事業を行うための「ハードル・レート（最低限クリアすべき投資収益率）」として機能します。"
  },
  {
    "id": "mba-fin-004",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ROIC（投下資本利益率）",
    "difficulty": "standard",
    "question": "株主と銀行から集めた本業の投下資本に対して、税引後営業利益（NOPAT）をどれだけ効率的に生み出したかを表す、近年日本企業でも経営目標に導入が進む指標はどれか。",
    "options": [
      "ROIC（Return on Invested Capital）",
      "ROE（Return on Equity）",
      "ROA（Return on Assets）",
      "ROS（Return on Sales）"
    ],
    "answerIndex": 0,
    "explanation": "「NOPAT ÷ 投下資本（有利子負債＋株主資本）」で算出されます。ROICが資本コスト（WACC）を上回っている状態（ROICスプレッド＞0）でのみ、企業は真の経済的付加価値を創出していると評価されます。"
  },
  {
    "id": "mba-fin-005",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "フリーキャッシュフロー (FCF)",
    "difficulty": "basic",
    "question": "企業が事業活動によって稼ぎ出し、借入金返済や配当、将来の成長投資などに自由に使うことができる純粋な余剰現金を何と呼ぶか。",
    "options": [
      "営業キャッシュフロー",
      "フリーキャッシュフロー（FCF）",
      "当期純利益",
      "経常利益"
    ],
    "answerIndex": 1,
    "explanation": "一般に「営業キャッシュフロー − 設備投資額（投資キャッシュフロー）」として求められます。会計上の利益と異なり、手元に実在する現金の増加を示すため企業価値評価の源泉となります。"
  },
  {
    "id": "mba-fin-006",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "IRR（Internal Rate of Return：内部収益率）",
    "difficulty": "standard",
    "question": "投資案件のNPV（正味現在価値）がちょうどゼロになるような割引率を指し、投資資金が何％の利回りで複利運用されるかを示す指標はどれか。",
    "options": [
      "IRR（内部収益率）",
      "配当利回り",
      "売上高営業利益率",
      "クーポンレート"
    ],
    "answerIndex": 0,
    "explanation": "IRRが企業の資本コスト（WACC等）を上回っていれば投資採算が合います。プライベート・エクイティ（PEファンド）やVCが投資先を評価する最重要指標の一つです。"
  },
  {
    "id": "mba-fin-007",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "EBITDA（利払前・税引前・償却前利益）",
    "difficulty": "basic",
    "question": "国ごとの税率や減価償却方法、借入金の利息負担の違いを排除し、本業のグローバルな現金創出力を純粋に比較するために国際的なM&A等で多用される指標はどれか。",
    "options": [
      "EBITDA（イービットディーエー）",
      "NOPAT",
      "売上総利益",
      "経常利益"
    ],
    "answerIndex": 0,
    "explanation": "「営業利益 ＋ 減価償却費 ＋ のれん償却費」で簡易的に算出され、多額の設備投資を抱える企業のキャッシュ創出力評価や、EV/EBITDA倍率による企業買収価格評価で不可欠な指標です。"
  },
  {
    "id": "mba-fin-008",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ROEとデュポン分析",
    "difficulty": "standard",
    "question": "自己資本利益率（ROE）を3つの要素に分解して要因分析を行う「デュポンシステム（デュポンモデル）」の3要素として正しい組み合わせはどれか。",
    "options": [
      "売上高純利益率（収益性）× 総資産回転率（効率性）× 財務レバレッジ（財務構成）",
      "営業利益率 × 固定資産回転率 × 自己資本比率",
      "粗利益率 × 棚卸資産回転率 × 負債比率",
      "売上高経常利益率 × 流動比率 × 配当性向"
    ],
    "answerIndex": 0,
    "explanation": "ROE ＝（当期純利益/売上高）×（売上高/総資産）×（総資産/自己資本）。これにより、ROEの高さが本業の利益率によるものか、資産を回転させた成果か、借入金（レバレッジ）によるものかを識別できます。"
  },
  {
    "id": "mba-fin-009",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "EVA（経済的付加価値）",
    "difficulty": "standard",
    "question": "スターン・スチュワート社が開発した指標で、税引後営業利益（NOPAT）から、投下資本にかかる資本コスト（資本額×WACC）を全額差し引いて算出する「真の経済的利益」を何と呼ぶか。",
    "options": [
      "EVA（Economic Value Added）",
      "EBIT",
      "包括利益",
      "キャッシュフロー・マージン"
    ],
    "answerIndex": 0,
    "explanation": "会計上の利益が黒字であっても、投資家が期待する資本コストを上回る利益を上げていなければ株主価値を毀損しているという視点を与える経営指標です。"
  },
  {
    "id": "mba-fin-010",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "マルチプル法（類似企業比較法）",
    "difficulty": "basic",
    "question": "M&AやIPO（新規公開）時の企業価値算定において、上場している類似企業の指標（PER、PBR、EV/EBITDA等）の倍率をもとに評価対象企業の価値を推計する手法を何と呼ぶか。",
    "options": [
      "マルチプル法（マーケット・アプローチ）",
      "DCF法（インカム・アプローチ）",
      "修正簿価純資産法（コスト・アプローチ）",
      "リアル・オプション法"
    ],
    "answerIndex": 0,
    "explanation": "市場の客観的な取引相場を即座に反映できるため、実務でDCF法と並行して確からしさを検証（クロスチェック）するために必ず用いられます。"
  },
  {
    "id": "mba-fin-011",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "CAPM（資本資産価格モデル）",
    "difficulty": "standard",
    "question": "株式市場全体の動きに対する個別銘柄の感応度を示す係数を「ベータ（β）」と呼ぶが、個別株主資本コスト＝「リスクフリーレート ＋ β × マーケットリスクプレミアム」で算出するファイナンス理論を何と呼ぶか。",
    "options": [
      "CAPM（Capital Asset Pricing Model）",
      "ブラック・ショールズ方程式",
      "MM理論（モディリアーニ・ミラー）",
      "アービトラージ・プライシング理論"
    ],
    "answerIndex": 0,
    "explanation": "ウィリアム・シャープらが提唱した現代ポートフォリオ理論の中核です。株主が引き受ける市場リスク（β）に応じた期待リターンを定量化します。"
  },
  {
    "id": "mba-fin-012",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "タックス・シールド（節税効果）",
    "difficulty": "basic",
    "question": "借入金の支払利息や減価償却費が税法上の「損金（費用）」として認められることにより、法人税等の支払額が減少してキャッシュアウトが抑制される効果を何と呼ぶか。",
    "options": [
      "タックス・シールド（利息・償却の節税効果）",
      "キャピタルゲイン免税",
      "レバレッジド・バイアウト",
      "デット・エクイティ・スワップ"
    ],
    "answerIndex": 0,
    "explanation": "例えば法人税率30%の場合、100万円の減価償却費は「100万円×30%＝30万円」の税金を直接減らし、手元キャッシュを増やす効果（減価償却のタックスシールド）をもたらします。"
  },
  {
    "id": "mba-fin-013",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "CCC（Cash Conversion Cycle）",
    "difficulty": "standard",
    "question": "企業が仕入れのために現金を支出してから、製品を販売して売上代金を現金として回収するまでにかかる日数（資金拘束期間）を表す指標はどれか。",
    "options": [
      "CCC（キャッシュ・コンバージョン・サイクル）",
      "売掛金回収日数",
      "棚卸資産回転率",
      "インタレスト・カバレッジ・レシオ"
    ],
    "answerIndex": 0,
    "explanation": "「売上債権回転日数 ＋ 棚卸資産回転日数 − 仕入債務回転日数」で算出されます。アップルやアマゾンはCCCをマイナス（代金回収が仕入れ代金支払いより早い）にすることで無借金・潤沢な運転資金を実現しています。"
  },
  {
    "id": "mba-fin-014",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "財務レバレッジ (Financial Leverage)",
    "difficulty": "basic",
    "question": "自己資本（株式）だけでなく、有利子負債（借入金・社債）を活用して総資産を拡大し、自己資本に対する利益率（ROE）をテコの原理のように高める効果を何と呼ぶか。",
    "options": [
      "財務レバレッジ効果",
      "オペレーティング・レバレッジ",
      "ヘッジ効果",
      "システマティック・リスク"
    ],
    "answerIndex": 0,
    "explanation": "借入金利よりも高い利回り（事業利益率）を稼ぎ出せる場合、負債を増やすほど株主へのリターン（ROE）は高まります。ただし、業績悪化時には元利返済が重荷となり倒産リスクが高まる両刃の剣です。"
  },
  {
    "id": "mba-fin-015",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "PBR（株価純資産倍率）1倍割れ問題",
    "difficulty": "basic",
    "question": "東証が改善を求めたことで話題となった「PBR（株価純資産倍率）が1倍を割り込んでいる状態」が意味するファイナンス上の評価として最も適切なものはどれか。",
    "options": [
      "市場から「会社を今すぐ解散して資産を分配した方が、事業を継続するよりも価値が高い」と評価されている状態",
      "企業の売上成長率が過去最高の水準にある状態",
      "自己資本比率が100%を超えている健全な状態",
      "配当利回りが国債利回りを下回っている状態"
    ],
    "answerIndex": 0,
    "explanation": "PBR＝株価÷1株あたり純資産。1倍未満は、企業が保有する資産から資本コストを上回る利益を生み出せておらず、市場から企業価値の毀損を突きつけられている状態を意味します。"
  },
  {
    "id": "mba-fin-016",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "リアル・オプション (Real Options)",
    "difficulty": "standard",
    "question": "将来の不確実性が高い新規事業や研究開発投資において、状況の変化に応じて「投資を拡大する」「延期する」「撤退する」といった経営陣の意思決定の柔軟性を金融オプション理論で評価する手法はどれか。",
    "options": [
      "リアル・オプション理論",
      "感応度分析（センシティビティ分析）",
      "損益分岐点分析",
      "モンテカルロ・シミュレーション"
    ],
    "answerIndex": 0,
    "explanation": "従来のDCF法では見落とされがちな「失敗しそうなら早期撤退して損失を限定する権利」や「成功したら追加投資して大化けさせる権利」の価値を正当に評価できます。"
  },
  {
    "id": "mba-fin-017",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "のれん（Goodwill）とその減損",
    "difficulty": "standard",
    "question": "M&A（企業買収）において、買収対価が被買収企業の純資産時価を上回る差額（将来の収益力やブランド力へのプレミアム）を会計上「のれん」と計上するが、買収先の業績が悪化して見込み通りの利益が出なくなった際に行う会計処理はどれか。",
    "options": [
      "のれんの減損処理（損失計上）",
      "のれんの資本金振替",
      "のれんの持分法適用",
      "のれんの株式分割"
    ],
    "answerIndex": 0,
    "explanation": "期待したシナジーや利益が創出できないと判断された場合、将来キャッシュフローの下方修正に基づきのれんの価値を一括で切り下げる「減損損失（特別損失）」を計上し、多額の赤字要因となります。"
  },
  {
    "id": "mba-fin-018",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "LBO（レバレッジド・バイアウト）",
    "difficulty": "standard",
    "question": "PEファンド等による企業買収において、買い手自身の信用力ではなく「買収対象企業の資産や将来生み出すキャッシュフロー」を担保にして多額の借入金を調達し、少額の自己資金で大規模買収を行う手法を何と呼ぶか。",
    "options": [
      "LBO（Leveraged Buyout）",
      "MBO（Management Buyout）",
      "TOB（株式公開買付）",
      "EBO（Employee Buyout）"
    ],
    "answerIndex": 0,
    "explanation": "買収後に借入金の返済義務は買収先企業が負います。少ない自己資金で高い投資利回り（IRR）を狙える一方、買収先企業の財務レバレッジが急上昇するリスクを伴います。"
  },
  {
    "id": "mba-fin-019",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "CVP分析と安全余裕率",
    "difficulty": "basic",
    "question": "現在の売上高が、損益分岐点売上高をどれくらい上回っているか（売上高が何％落ち込んでも赤字に転落しないか）を示す安全性の指標を何と呼ぶか。",
    "options": [
      "安全余裕率（Margin of Safety）",
      "限界利益率",
      "営業レバレッジ係数",
      "流動比率"
    ],
    "answerIndex": 0,
    "explanation": "「（現在の売上高 − 損益分岐点売上高）÷ 現在の売上高」で算出されます。安全余裕率が高い企業ほど、不況や需要急減に対する耐久力（耐性）が高いと評価されます。"
  },
  {
    "id": "mba-fin-020",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "サンクコスト（埋没費用）の呪縛",
    "difficulty": "basic",
    "question": "過去に既に投資・支出してしまい、どのような意思決定を行っても二度と回収することができない費用を何と呼び、これに囚われて不採算事業の撤退を遅らせる心理的罠を何と呼ぶか。",
    "options": [
      "サンクコスト（コンコルド効果）",
      "機会費用（オポチュニティコスト）",
      "限界費用（マージナルコスト）",
      "変動費トラップ"
    ],
    "answerIndex": 0,
    "explanation": "合理的なファイナンス的意思決定においては「過去のサンクコストは完全に無視し、将来の増分キャッシュフローのみで判断すべき」とされますが、心理的な執着から撤退が遅れ損失が拡大するケースが頻発します。"
  },
  {
    "id": "mba-fin-021",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ターミナル・バリュー（継続価値）",
    "difficulty": "standard",
    "question": "DCF法による企業価値算定において、詳細な事業計画期間（例：向こう5年間）を終えた後、企業が将来にわたって永久に存続すると仮定して算出する現在価値を何と呼ぶか。",
    "options": [
      "ターミナル・バリュー（Terminal Value / 継続価値）",
      "清算価値（Liquidation Value）",
      "スクラップ・バリュー（残存価額）",
      "帳簿価格（Book Value）"
    ],
    "answerIndex": 0,
    "explanation": "ゴードン・グロース・モデル（永久還元法）などを用いて算出され、DCF法による企業価値全体の過半（60〜80%程度）を占めることが多いため、前提となる永久成長率の設定が極めて重要です。"
  },
  {
    "id": "mba-fin-022",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ストック・オプション（株式報酬）",
    "difficulty": "basic",
    "question": "企業の役員や従業員に対し、あらかじめ定められた価格（行使価格）で将来自社株を購入できる権利を付与し、株価上昇による利益をインセンティブにして株主と利害を一致させる制度を何と呼ぶか。",
    "options": [
      "ストック・オプション",
      "譲渡制限付株式（RS）",
      "持株会奨励金",
      "従業員退職慰労金"
    ],
    "answerIndex": 0,
    "explanation": "経営陣と株主の間のプリンシパル＝エージェント問題（エージェンシー問題）を解消し、企業価値・株価向上への強い動機づけを与えるコーポレートガバナンス上の重要施策です。"
  },
  {
    "id": "mba-ob-001",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "心理的安全性 (Psychological Safety)",
    "difficulty": "basic",
    "question": "エイミー・エドモンドソン教授が提唱し、Googleの社内プロジェクト「プロジェクト・アリストテレス」で最高成果を出すチームの最重要要素と結論づけられた概念はどれか。",
    "options": [
      "心理的安全性（Psychological Safety）",
      "情緒的コミットメント",
      "マインドフルネス",
      "サーバント・オーソリティ"
    ],
    "answerIndex": 0,
    "explanation": "チームの誰もが無知や無能だと思われることを恐れず、率直な意見や懸念、失敗の報告をリスクなしに発言できるチームの共有された信念・雰囲気を指します。"
  },
  {
    "id": "mba-ob-002",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "タックマンモデル (Tuckman's Stages)",
    "difficulty": "basic",
    "question": "ブルース・タックマンが提唱したチームの発達段階モデルにおいて、「メンバー同士の意見の衝突や対立が生じるステージ（第2段階）」はどれか。",
    "options": [
      "形成期（Forming）",
      "混乱期（Storming）",
      "統一期（Norming）",
      "機能期（Performing）"
    ],
    "answerIndex": 1,
    "explanation": "チームは形成期（手探り）→混乱期（意見の衝突・葛藤）→統一期（共通ルール・役割確立）→機能期（阿吽の呼吸で高成果）→散会期（プロジェクト完了）のプロセスを経て進化します。"
  },
  {
    "id": "mba-ob-003",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "OKR（Objectives and Key Results）",
    "difficulty": "basic",
    "question": "インテルで生まれGoogleが導入して世界に広がった、全社とチーム、個人の目標を連動させ、野心的な定性目標と定量的成果指標を設定する目標管理手法はどれか。",
    "options": [
      "OKR（Objectives and Key Results）",
      "MBO（目標による管理）",
      "KPIツリー",
      "360度評価"
    ],
    "answerIndex": 0,
    "explanation": "ワクワクするストレッチ目標「Objective（定性）」に対し、達成度を客観測定する3〜5個の「Key Results（定量指標）」を紐付け、短サイクル（四半期等）で見直しを行う手法です。"
  },
  {
    "id": "mba-ob-004",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "サーバント・リーダーシップ",
    "difficulty": "standard",
    "question": "ロバート・グリーンリーフが提唱した、リーダーはメンバーの上に君臨して命令するのではなく、「まず相手に奉仕し、その後で導く（リーダーはメンバーの支援者）」とするリーダーシップ哲学を何と呼ぶか。",
    "options": [
      "サーバント・リーダーシップ",
      "専制型リーダーシップ",
      "トランザクショナル・リーダーシップ",
      "カリスマ的リーダーシップ"
    ],
    "answerIndex": 0,
    "explanation": "メンバーの自律性を重んじ、成長を後押しする環境づくりに徹することで、自発的な強い組織をつくる現代の重要リーダーシップ理論です。"
  },
  {
    "id": "mba-ob-005",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ハーズバーグの動機づけ・衛生理論（二要因理論）",
    "difficulty": "standard",
    "question": "ハーズバーグの二要因理論において、「それが満たされても不満が解消するだけで、積極的なモチベーション（満足）を高めるわけではない要素（衛生要因）」に含まれるものはどれか。",
    "options": [
      "達成感・成し遂げた実感",
      "仕事そのものの面白さ・やりがい",
      "給与・作業環境・会社の諸方針",
      "承認や責任の拡大"
    ],
    "answerIndex": 2,
    "explanation": "給与や職場環境は「衛生要因（不満を防ぐ要素）」であり、これらを改善しても不満が減るだけでやる気は湧きません。真のモチベーションは仕事の達成感や承認、責任といった「動機づけ要因」から生まれます。"
  },
  {
    "id": "mba-ob-006",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "マズローの欲求5段階説",
    "difficulty": "basic",
    "question": "アブラハム・マズローが提唱した欲求階層説において、最上位に位置する欲求はどれか。",
    "options": [
      "生理的欲求",
      "安全の欲求",
      "所属と愛の欲求（社会的欲求）",
      "自己実現の欲求"
    ],
    "answerIndex": 3,
    "explanation": "生理的→安全→社会的（所属）→承認（尊厳）→自己実現（自らの持つ潜在的能力を最大限に発揮し、自分らしくありたいという欲求）の順に高次の欲求へと移行します。"
  },
  {
    "id": "mba-ob-007",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "変革型リーダーシップ (Transformational)",
    "difficulty": "standard",
    "question": "部下との間で「業績と報酬の交換条件（ギブ＆テイク）」で動かす取引型（トランザクショナル）リーダーシップに対し、共有ビジョンや情熱、知的好奇心の刺激によって部下の意識を根本から変革し、期待以上の成果を引き出すリーダーシップを何と呼ぶか。",
    "options": [
      "変革型リーダーシップ（トランスフォーメーショナル）",
      "放任型リーダーシップ（レッセフェール）",
      "官僚型リーダーシップ",
      "ペーシング型リーダーシップ"
    ],
    "answerIndex": 0,
    "explanation": "バーナード・バスらが体系化した理論で、激変する環境下での組織変革（DXや企業再生）において必須とされるリーダーシップ像です。"
  },
  {
    "id": "mba-ob-008",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ジョン・コッターの変革の8段階プロセス",
    "difficulty": "standard",
    "question": "ジョン・コッター教授が提唱した「大企業が組織変革を成功させるための8段階プロセス」の記念すべき第1ステップはどれか。",
    "options": [
      "危機意識（切迫感）を高める (Create a Sense of Urgency)",
      "変革のための連帯チームを築く",
      "ビジョンと戦略を策定する",
      "短期的成果（クイックウィン）を生み出す"
    ],
    "answerIndex": 0,
    "explanation": "変革の失敗の7割は第1段階で躓きます。「このままでは会社が立ち行かなくなる」という切迫感（危機感）を組織全体で共有しない限り、人間は現状維持（コンフォートゾーン）を選んでしまいます。"
  },
  {
    "id": "mba-ob-009",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "クルト・レウィンの組織変革3段階モデル",
    "difficulty": "basic",
    "question": "組織変革の心理的プロセスを表すレウィンのモデルにおける3つの段階の順序として正しいものはどれか。",
    "options": [
      "解凍（Unfreeze） → 変革・移行（Change） → 再凍結（Refreeze）",
      "計画（Plan） → 実行（Do） → 評価（See）",
      "診断（Diagnosis） → 介入（Intervention） → 撤退（Exit）",
      "覚醒（Awake） → 行動（Action） → 完了（Done）"
    ],
    "answerIndex": 0,
    "explanation": "既存の固定観念や習慣をまず「解凍」し、新しい行動様式を学習して「変革」を起こし、定着させて新しい日常として「再凍結」するという3ステップです。"
  },
  {
    "id": "mba-ob-010",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "認知バイアス（確証バイアス）",
    "difficulty": "basic",
    "question": "意思決定において、自分の持っている先入観や仮説を肯定する情報ばかりを無意識に集め、それに反する都合の悪い客観的事実を軽視・無視してしまう心理的傾向を何と呼ぶか。",
    "options": [
      "確証バイアス",
      "ハロー効果",
      "アンカリング効果",
      "利用可能性ヒューリスティック"
    ],
    "answerIndex": 0,
    "explanation": "経営陣が失敗事業の撤退を誤ったり、市場調査のデータを都合よく解釈してしまう最大の原因となる認知的罠です。"
  },
  {
    "id": "mba-ob-011",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ハロー効果 (Halo Effect)",
    "difficulty": "basic",
    "question": "人事評価や人物観察において、ある対象の際立った一つの特徴（高学歴、有名企業出身、容姿など）に引きずられて、他のすべての能力や人格まで優れている（または劣っている）と歪んで評価してしまう現象を何と呼ぶか。",
    "options": [
      "ハロー効果（後光効果）",
      "ピグマリオン効果",
      "寛大化傾向",
      "中心化傾向"
    ],
    "answerIndex": 0,
    "explanation": "「有名大学卒だから営業もプレゼンも完璧だろう」といった先入観が客観的な人事評価を妨げる典型例です。"
  },
  {
    "id": "mba-ob-012",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "チーミング (Teaming)",
    "difficulty": "standard",
    "question": "固定された静的な部署ではなく、不確実で複雑な課題を解決するために、多様な専門性を持つメンバーが流動的に集まり、素早く学び合いながら協働・解散していく動的なチーム活動を何と呼ぶか。",
    "options": [
      "チーミング（Teaming）",
      "タスクフォース",
      "官僚制組織",
      "マトリックス組織"
    ],
    "answerIndex": 0,
    "explanation": "エイミー・エドモンドソン教授が提唱した概念で、VUCA時代に素早く仮説検証とイノベーションを回すための新しい協働様式です。"
  },
  {
    "id": "mba-ob-013",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "シチュエーショナル・リーダーシップ (SL理論)",
    "difficulty": "standard",
    "question": "ハーシィとブランチャードが提唱したSL理論において、リーダーシップ行動（指示的／援助的）は部下の何の発達度合いに応じて適合させるべきとされるか。",
    "options": [
      "部下の成熟度（業務遂行能力と意欲）",
      "部下の勤続年数と年齢",
      "部下の学歴と専門資格",
      "組織の売上高規模"
    ],
    "answerIndex": 0,
    "explanation": "新人のうちは「指示型（教示的）」、少し慣れたら「説得型」、スキルが上がれば「参加型（援助中心）」、自立したベテランには「委任型」へと部下の成熟度に合わせて変幻自在に切り替えます。"
  },
  {
    "id": "mba-ob-014",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "グループシンク（集団浅慮）",
    "difficulty": "standard",
    "question": "結束力の強い同質的な集団が議論する際、和を乱すことを恐れて批判的検討を避け、全体として非合理的で極端に危険な意思決定を下してしまう現象を何と呼ぶか。",
    "options": [
      "グループシンク（集団浅慮）",
      "ソーシャルローフィング（社会的手抜き）",
      "集合知",
      "デルファイ法"
    ],
    "answerIndex": 0,
    "explanation": "経営陣がイエスマンばかりで固められた企業が不祥事や無謀な買収に突き進む背景には、グループシンクが存在します。これを防ぐためにあえて反対意見を述べる役「悪魔の代弁者（デビルズ・アドボケイト）」を置く手法が推奨されます。"
  },
  {
    "id": "mba-ob-015",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "DE&I（ダイバーシティ、エクイティ＆インクルージョン）",
    "difficulty": "basic",
    "question": "「多様性（Diversity）」を認めるだけでなく、一人ひとりの異なる境遇やスタートラインに配慮した「公正さ（Equity）」を担保し、すべての個人が尊重され強みを発揮できる「包摂（Inclusion）」を実現する現代の組織経営概念を何と呼ぶか。",
    "options": [
      "DE&I（Diversity, Equity & Inclusion）",
      "CSR（企業の社会的責任）",
      "SDGs（持続可能な開発目標）",
      "ESG経営"
    ],
    "answerIndex": 0,
    "explanation": "単に形式的に女性比率や外国人比率を高めるだけでなく、個々の能力が正当に活かされる公平な土台と心理的安全性を育むことがイノベーションの源泉となります。"
  },
  {
    "id": "mba-ob-016",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "エンゲージメント (Employee Engagement)",
    "difficulty": "basic",
    "question": "単に会社に対する満足度（居心地の良さ）を示す従業員満足度（ES）と異なり、企業のビジョンや目標に共感し、自発的に情熱を持って貢献しようとする「組織と個人の相思相愛の結びつき」を表す指標はどれか。",
    "options": [
      "従業員エンゲージメント（Engagement）",
      "勤続年数",
      "有給消化率",
      "離職率"
    ],
    "answerIndex": 0,
    "explanation": "エンゲージメントが高い組織は、生産性、顧客満足度、収益性において競合を大きく上回り、優秀層の離職率が低いことが多くの実証研究で示されています。"
  },
  {
    "id": "mba-ob-017",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "360度多面評価 (360-Degree Feedback)",
    "difficulty": "basic",
    "question": "直属の上司からの一方的な評価だけでなく、同僚、部下、関連部署の担当者など、多角的な視点から本人の行動やリーダーシップを評価・フィードバックする人事制度を何と呼ぶか。",
    "options": [
      "360度評価（多面評価）",
      "ノーレイティング",
      "職務給制度",
      "コンピテンシー評価"
    ],
    "answerIndex": 0,
    "explanation": "上司にだけ良い顔をする「社内政治的」な行動を抑止し、本人が自覚していない盲点（客観的な強み・改善点）に気付かせる人材開発ツールとして活用されます。"
  },
  {
    "id": "mba-ob-018",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ピグマリオン効果",
    "difficulty": "basic",
    "question": "上司や教育者が「この部下は能力が高く、期待に応えて大きく成長する」と強く期待を寄せて接することで、部下が実際に高い成果を出すようになる心理効果を何と呼ぶか。",
    "options": [
      "ピグマリオン効果（ローゼンタール効果）",
      "プラセボ効果",
      "ゴーレム効果",
      "ストループ効果"
    ],
    "answerIndex": 0,
    "explanation": "人間は他者からの期待や信頼を感じると自己効力感（Self-efficacy）が高まり、モチベーションとパフォーマンスが向上するメカニズムを表します。"
  },
  {
    "id": "mba-ob-019",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "マトリックス組織",
    "difficulty": "standard",
    "question": "従来の縦割り（職能別や事業部別）の指揮命令系統に加え、製品軸や地域軸、プロジェクト軸などの横断的な指揮命令系統を格子状に組み合わせた組織形態を何と呼ぶか。",
    "options": [
      "マトリックス組織",
      "ピラミッド型組織",
      "純粋持株会社",
      "カンパニー制"
    ],
    "answerIndex": 0,
    "explanation": "情報共有や経営資源の有効活用が進む反面、「ワン・マン・ツー・ボス（1人の社員に2人の上司）」となり、指示の対立や社内調整コストが増大しやすいデメリットがあります。"
  },
  {
    "id": "mba-ob-020",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "ジョブ型人事制度とメンバーシップ型",
    "difficulty": "basic",
    "question": "職務内容（Job Description）、必要なスキル、責任範囲を明確に定義し、その職務の市場価値に応じて人を採用・処遇する人事制度を何と呼ぶか。",
    "options": [
      "ジョブ型雇用（人事制度）",
      "メンバーシップ型雇用",
      "年功序列制",
      "終身雇用制"
    ],
    "answerIndex": 0,
    "explanation": "「人に仕事をあてる」従来の日本型メンバーシップ型に対し、欧米グローバル標準である「仕事に人をあてる」仕組みです。専門人材の獲得や成果に応じた公平な処遇に適しています。"
  },
  {
    "id": "mba-ob-021",
    "category": "leadership",
    "categoryName": "組織行動・リーダーシップ (OB & HR)",
    "term": "内発的動機づけと外発的動機づけ",
    "difficulty": "basic",
    "question": "金銭的報酬や昇進、処罰の回避などの外部からの刺激によって動機づけられる「外発的動機づけ」に対し、仕事そのものの面白さ、好奇心、成長実感など自らの内面から湧き出る動機づけを何と呼ぶか。",
    "options": [
      "内発的動機づけ (Intrinsic Motivation)",
      "アンダーマイニング効果",
      "条件反射",
      "オペラント条件づけ"
    ],
    "answerIndex": 0,
    "explanation": "クリエイティブな知的能力やイノベーションが求められる現代のナレッジワーカーにおいては、自律性（Autonomy）、熟達（Mastery）、目的（Purpose）に基づく内発的動機づけが極めて重要です。"
  },
  {
    "id": "mba-ops-001",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "TOC（制約理論：Theory of Constraints）",
    "difficulty": "basic",
    "question": "エリヤフ・ゴールドラットのベストセラー『ザ・ゴール』で提唱された、生産ラインや業務プロセス全体のスループットを最大化するために、最も処理能力の低い「ボトルネック工程」に集中して改善を行うマネジメント理論はどれか。",
    "options": [
      "TOC（制約条件の理論）",
      "シックスシグマ",
      "TQM（総合的品質管理）",
      "サプライチェーン・ファイナンス"
    ],
    "answerIndex": 0,
    "explanation": "「鎖の強さは、最も弱い輪の強さで決まる」という原理に基づき、ボトルネックを特定して徹底活用し、他工程のペースをボトルネックに同期させることで仕掛品を劇的に削減します。"
  },
  {
    "id": "mba-ops-002",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ブルウィップ効果 (Bullwhip Effect)",
    "difficulty": "standard",
    "question": "サプライチェーンにおいて、小売現場における最終消費者の小さな需要変動が、卸、メーカー、原材料供給業者と川上（上流）に遡るにつれて、情報の遅延や安全在庫の積み増しによって増幅され巨大なブレとなる現象を何と呼ぶか。",
    "options": [
      "ブルウィップ効果（鞭効果）",
      "バタフライ効果",
      "ピグー効果",
      "ネットワーク効果"
    ],
    "answerIndex": 0,
    "explanation": "鞭（ブルウィップ）の手元のわずかな振りが先端では巨大なしなりとなることに例えられます。川上から川下までPOSデータ等をリアルタイム共有し情報連携することで防止します。"
  },
  {
    "id": "mba-ops-003",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "トヨタ生産方式 (TPS) の2本柱",
    "difficulty": "basic",
    "question": "世界中の製造業やサービス業（リーン）に多大な影響を与えたトヨタ生産方式（TPS）を支える2つの基本思想の組み合わせとして正しいものはどれか。",
    "options": [
      "「ジャスト・イン・タイム（JIT）」と「自働化（ニンベンの付いたじどうか）」",
      "「多品種少量生産」と「全数検査」",
      "「徹底的な自動機械化」と「大量在庫保有」",
      "「歩留まり最大化」と「外注化の推進」"
    ],
    "answerIndex": 0,
    "explanation": "必要なものを必要な時に必要な量だけ生産・運搬する「JIT」と、異常が発生したら機械が自動で止まり不良品を後工程に流さない「自働化（ポカヨケ・アンドン）」の2本柱です。"
  },
  {
    "id": "mba-ops-004",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "カイゼン（7つのムダ）",
    "difficulty": "basic",
    "question": "リーン・オペレーションにおいて徹底的に排除すべきとされる「7つのムダ（造りすぎ、手待ち、運搬、加工そのもの、在庫、動作、不良をつくる）」の中で、「最も悪質で他のすべてのムダを隠蔽する」とされるムダはどれか。",
    "options": [
      "造りすぎのムダ",
      "手待ちのムダ",
      "運搬のムダ",
      "動作のムダ"
    ],
    "answerIndex": 0,
    "explanation": "「造りすぎのムダ」は、余計な原材料費を消費し、保管場所や運搬を必要とし、不良品の隠蔽を招くため、TPSでは最悪のムダと位置づけられています。"
  },
  {
    "id": "mba-ops-005",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "リードタイム (Lead Time)",
    "difficulty": "basic",
    "question": "発注を行ってから製品が納入されるまでの期間や、原材料が工場に投入されてから完成品として出荷されるまでにかかる総時間を何と呼ぶか。",
    "options": [
      "リードタイム",
      "サイクルタイム",
      "タクトタイム",
      "稼働時間"
    ],
    "answerIndex": 0,
    "explanation": "リードタイムを短縮することは、顧客満足度の向上だけでなく、過剰な安全在庫の削減、キャッシュフロー改善に直結するオペレーションの最重要テーマです。"
  },
  {
    "id": "mba-ops-006",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "タクトタイム (Takt Time)",
    "difficulty": "standard",
    "question": "「市場の需要（顧客の購入ペース）に合わせて、1個の製品を何分何秒で作らなければならないか」を表す生産速度の指標を何と呼ぶか。",
    "options": [
      "タクトタイム（歩調時間）",
      "標準作業時間",
      "ダウンタイム",
      "正味稼働率"
    ],
    "answerIndex": 0,
    "explanation": "「稼働可能時間 ÷ 顧客の必要数」で計算されます。タクトタイムに各工程の作業時間を同期させることで、作りすぎのムダや工程間の仕掛品滞留をなくします。"
  },
  {
    "id": "mba-ops-007",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "シックス・シグマ (Six Sigma)",
    "difficulty": "standard",
    "question": "モトローラで開発されGEのジャック・ウェルチが全社導入して有名になった、製品や業務プロセスのバラツキを抑え、不良品発生率を「100万回あたり3.4回以下」に抑える品質管理・経営改善手法はどれか。",
    "options": [
      "シックス・シグマ",
      "5S活動",
      "QCサークル",
      "カンバン方式"
    ],
    "answerIndex": 0,
    "explanation": "DMAIC（Define：定義、Measure：測定、Analyze：分析、Improve：改善、Control：定着）の5ステップで進めるデータ主導型のプロセス改善フレームワークです。"
  },
  {
    "id": "mba-ops-008",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "遅延化戦略 (Postponement)",
    "difficulty": "standard",
    "question": "製品の組み立てや最終的な味付け・色づけ、パッケージングなどの工程を、顧客からの確定注文が入る直前まで意図的に遅らせて「半製品」で保持することで、在庫リスクの低減と多様なニーズへの迅速な対応を両立する戦略を何と呼ぶか。",
    "options": [
      "遅延化戦略（ポストポーンメント）",
      "先行調達戦略",
      "ロット集約戦略",
      "早期出荷戦略"
    ],
    "answerIndex": 0,
    "explanation": "Benettonの「セーターを無着色の糸で編み上げ、流行色に合わせて後から染める」手法や、DellのBTO（受注生産）モデルなどが代表例です。"
  },
  {
    "id": "mba-ops-009",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "経済的発注量 (EOQ：Economic Order Quantity)",
    "difficulty": "standard",
    "question": "在庫管理において、発注ごとに発生する「発注費用」と、在庫を保管するために発生する「在庫保管費用」の合計が最小となる最適な1回あたり発注量を算出するモデルはどれか。",
    "options": [
      "EOQ（経済的発注量モデル）",
      "ABC分析モデル",
      "安全在庫係数モデル",
      "定期発注方式"
    ],
    "answerIndex": 0,
    "explanation": "発注回数を増やすと発注費が増え、まとめ買いすると保管費用が増えるというトレードオフの均衡点（総費用最小化）を求める古典的数理モデルです。"
  },
  {
    "id": "mba-ops-010",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "SCM（サプライチェーン・マネジメント）",
    "difficulty": "basic",
    "question": "原材料調達から製造、物流、販売、消費者に至る一連の商流・物流・情報流を企業や部門の壁を越えて統合管理し、全体最適によって在庫削減と納期の短縮を図る経営手法を何と呼ぶか。",
    "options": [
      "SCM（サプライチェーン・マネジメント）",
      "CRM（顧客関係管理）",
      "PLM（製品ライフサイクル管理）",
      "BPO（ビジネスプロセスアウトソーシング）"
    ],
    "answerIndex": 0,
    "explanation": "個別最適（各部門や各社が勝手に都合よく動くこと）を排し、サプライチェーン全体で需要情報を共有して全体最適を達成することを目指します。"
  },
  {
    "id": "mba-ops-011",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "5S（整理・整頓・清掃・清潔・躾）",
    "difficulty": "basic",
    "question": "現場管理の基本である5Sにおいて、「必要なものと不要なものを明確に分け、不要なものを直ちに捨てる」ことを指す言葉はどれか。",
    "options": [
      "整理 (Seiri)",
      "整頓 (Seiton)",
      "清掃 (Seisou)",
      "清潔 (Seiketsu)"
    ],
    "answerIndex": 0,
    "explanation": "「整理」は捨てること、「整頓」は必要なものを誰でもすぐ取り出せるように置き場を明示して決めることです。不要なものを捨てずに並べ替えるのは整頓ではなく単なる片付けです。"
  },
  {
    "id": "mba-ops-012",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "VMI（Vendor Managed Inventory）",
    "difficulty": "standard",
    "question": "サプライチェーンにおいて、納入業者（サプライヤー）が納入先（顧客や小売店）の在庫状況や販売データを常時監視し、納入業者側の責任で自動的に補充・在庫管理を行う仕組みを何と呼ぶか。",
    "options": [
      "VMI（ベンダー主導型在庫管理）",
      "ドロップシッピング",
      "受託加工",
      "リバースロジスティクス"
    ],
    "answerIndex": 0,
    "explanation": "ウォルマートとP&Gの連携が有名です。納入先は発注業務の手間を省け、サプライヤーは生産計画を平準化できるWin-WinのSCM施策です。"
  },
  {
    "id": "mba-ops-013",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "歩留まり（歩留率）",
    "difficulty": "basic",
    "question": "製造業などにおいて、投入した原材料の総量に対し、実際に良品として完成した製品の割合（％）を示す生産効率・品質指標はどれか。",
    "options": [
      "歩留まり（Yield Rate）",
      "稼働率",
      "可動率",
      "直行率"
    ],
    "answerIndex": 0,
    "explanation": "半導体製造や精密機械加工、食品加工等で収益性を左右する最重要KPIです。歩留まりが向上すると、同じ原材料費・エネルギー費から取れる良品数が増え、原価が劇的に下がります。"
  },
  {
    "id": "mba-ops-014",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "セル生産方式（屋台方式）",
    "difficulty": "standard",
    "question": "従来のベルトコンベアによる流れ作業（ライン生産）に対し、1人または少数の多能工が作業台（セル）を囲んで、1台の製品の組立から最終検査までを一貫して担当する方式を何と呼ぶか。",
    "options": [
      "セル生産方式",
      "バッチ生産方式",
      "連続生産方式",
      "完全自動化ライン"
    ],
    "answerIndex": 0,
    "explanation": "多品種少量生産に適しており、需要変動に応じたラインの増減が容易で、仕掛品が滞留せず、作業者の責任感やモチベーション向上につながる利点があります。"
  },
  {
    "id": "mba-ops-015",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "カンバン方式 (Kanban)",
    "difficulty": "basic",
    "question": "前工程が部品を作って次工程に無理やり押し込む「プッシュ型」に対し、後工程が必要な時に必要な量だけ前工程に取りに行き、取り出した分だけ前工程が補充する「プル型（後工程引き取り方式）」の情報伝達ツールはどれか。",
    "options": [
      "カンバン（Kanban）",
      "バーコードラベル",
      "作業手順書",
      "出荷伝票"
    ],
    "answerIndex": 0,
    "explanation": "カンバンを回すことで、過剰生産を物理的に防ぎ、中間在庫（仕掛品）を極小化する仕組みです。ソフトウェア開発のアジャイルでも広く応用されています。"
  },
  {
    "id": "mba-ops-016",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ポカヨケ (Poka-yoke)",
    "difficulty": "basic",
    "question": "作業者が誤った手順を行おうとしたり部品を取り違えようとした際、物理的にセットできないようにしたり警告音で知らせることで、人為的ミス（ポカ）による不良発生を未然に防ぐからくり・治具の仕組みを何と呼ぶか。",
    "options": [
      "ポカヨケ（Error Proofing）",
      "目視全数検査",
      "ダブルチェック",
      "抜き取り検査"
    ],
    "answerIndex": 0,
    "explanation": "「人間の注意深さに頼るな、仕組みでミスを防げ」という思想で、現在では世界中で「Poka-yoke」という英語として定着しています（例：SIMカードの切り欠き、踏切の遮断機）。"
  },
  {
    "id": "mba-ops-017",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "多能工化 (Cross-training)",
    "difficulty": "basic",
    "question": "一人の作業員が単一の工程（旋盤のみなど）しか担当できない「単能工」に対し、複数の異なる工程や機械の操作（溶接、旋盤、検査等）を柔軟にこなせるスキルを身につけさせる施策を何と呼ぶか。",
    "options": [
      "多能工化（マルチスキル化）",
      "専門職化",
      "ジョブローテーション",
      "外部委託化"
    ],
    "answerIndex": 0,
    "explanation": "工程間の負荷の偏り（ボトルネック）や作業員の突発的な欠勤に対して柔軟に応援・人員再配置ができるようになり、生産ラインの停止を防ぎます。"
  },
  {
    "id": "mba-ops-018",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "段取り替え時間の短縮（シングル段取り）",
    "difficulty": "standard",
    "question": "金型の交換や設備の清掃など、製品種類の切り替えにかかる段取り替え時間を「10分未満（一桁台の分）」に短縮する技術・ノウハウをトヨタ生産方式で何と呼ぶか。",
    "options": [
      "シングル段取り（SMED：Single-Minute Exchange of Die）",
      "ダブル段取り",
      "ゼロ段取り",
      "バッチサイズ拡大"
    ],
    "answerIndex": 0,
    "explanation": "機械を止めた状態で行う「内段取り」と、機械を動かしたまま準備できる「外段取り」を徹底的に分離・改善することで、小ロット生産と短納期を可能にします。"
  },
  {
    "id": "mba-ops-019",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "BPR（ビジネスプロセス・リエンジニアリング）",
    "difficulty": "standard",
    "question": "マイケル・ハマーらが提唱した、既存の業務手順の小手先の改善にとどまらず、企業の目標（コスト、品質、サービス、スピード）を劇的に向上させるために、業務プロセスを根本から見直し再設計することを何と呼ぶか。",
    "options": [
      "BPR（Business Process Reengineering）",
      "PDCAサイクル",
      "5S活動",
      "バランスド・スコアカード"
    ],
    "answerIndex": 0,
    "explanation": "縦割りの組織構造や慣習を白紙に戻し、顧客への価値提供というプロセスの視点からITを活用してゼロベースで再構築する手法です。"
  },
  {
    "id": "mba-ops-020",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "リバース・ロジスティクス (Reverse Logistics)",
    "difficulty": "basic",
    "question": "工場から消費者へ向かう通常の物流に対し、消費者や顧客から返品、修理品、リサイクル品、使用済み容器・パレット等を回収・再資源化するための逆方向の物流を何と呼ぶか。",
    "options": [
      "静脈物流（リバース・ロジスティクス）",
      "動脈物流",
      "サードパーティ・ロジスティクス (3PL)",
      "ラストワンマイル配送"
    ],
    "answerIndex": 0,
    "explanation": "循環型経済（サーキュラー・エコノミー）やサステナビリティ、ECでの返品対応の効率化において、競争優位を左右する重要分野です。"
  },
  {
    "id": "mba-ops-021",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ラストワンマイル (Last Mile)",
    "difficulty": "basic",
    "question": "EC物流や宅配サービスにおいて、最終の配送拠点（物流センターや営業所）からエンドユーザーの自宅や手元に荷物が届くまでの「最後の区間」を指す用語はどれか。",
    "options": [
      "ラストワンマイル",
      "幹線輸送",
      "クロスドッキング",
      "ハブ＆スポーク"
    ],
    "answerIndex": 0,
    "explanation": "宅配ドライバーの人手不足や再配達問題が深刻化する一方で、顧客満足度やブランド体験に最も直結する物流の最激戦区です。"
  },
  {
    "id": "mba-dx-001",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "イノベーションのジレンマ",
    "difficulty": "basic",
    "question": "ハーバード・ビジネススクールのクレイトン・クリステンセン教授が提唱した、優良企業が既存顧客の要望に真摯に耳を傾け、高品質で高機能な製品を正しく開発し続けた結果、市場下位から台頭したシンプルな新興技術に足をすくわれて敗北する現象を何と呼ぶか。",
    "options": [
      "イノベーションのジレンマ",
      "死の谷（デスバレー）",
      "ダーウィンの海",
      "囚人のジレンマ"
    ],
    "answerIndex": 0,
    "explanation": "「持続的イノベーション（既存の高収益顧客向けの高性能化）」に真面目に取り組む優良企業ほど、「破壊的イノベーション（最初は低性能・低価格だが別軸の利便性を持つ技術）」を無視してしまい、やがて市場を奪われます。"
  },
  {
    "id": "mba-dx-002",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "破壊的イノベーション (Disruptive Innovation)",
    "difficulty": "standard",
    "question": "破壊的イノベーションの典型的な2つの型として正しい組み合わせはどれか。",
    "options": [
      "ローエンド型破壊 と 新市場型破壊",
      "持続型破壊 と 漸進型破壊",
      "クローズド型破壊 と プラットフォーム型破壊",
      "ハードウェア型破壊 と ソフトウェア型破壊"
    ],
    "answerIndex": 0,
    "explanation": "既存客にとって「過剰スペック（オーバースペック）」となった市場の最底辺を低価格・シンプルさで奪う「ローエンド型」と、これまで製品を使えなかった非消費者をターゲットにする「新市場型」があります。"
  },
  {
    "id": "mba-dx-003",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "SaaSの最重要指標：ARRとMRR",
    "difficulty": "basic",
    "question": "サブスクリプション型SaaSビジネスにおいて、毎月繰り返し得られる定期収益をMRRと呼ぶが、これを年換算した「年間経常収益（毎年確実に得られる契約売上高）」を表す略称はどれか。",
    "options": [
      "ARR（Annual Recurring Revenue）",
      "GMV（流通取引総額）",
      "EBITDA",
      "ROAS（広告費用対効果）"
    ],
    "answerIndex": 0,
    "explanation": "単発の売り切り型売上と異なり、予測可能性が高く安定したキャッシュフローを示すため、SaaS企業のバリュエーション（企業価値評価）の根幹指標となります。"
  },
  {
    "id": "mba-dx-004",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "NRR（Net Revenue Retention：売上継続率）",
    "difficulty": "standard",
    "question": "既存顧客からの売上が、アップセルやクロスセルによる増加、解約やダウングレードによる減少を含めて1年後に何％維持・成長しているかを示すSaaS指標NRRにおいて、優良企業のベンチマークとされる水準はどれか。",
    "options": [
      "100%を大きく超えている（110%〜130%以上）",
      "ちょうど50%前後",
      "新規顧客獲得数と同じ数値",
      "チャーンレートと同じ数値"
    ],
    "answerIndex": 0,
    "explanation": "NRRが100%を超える（ネット・ネガティブ・チャーン）ということは、新規顧客を一切獲得しなくても既存顧客の追加利用だけで売上が前年比で自然増していく極めて強い事業状態を示します。"
  },
  {
    "id": "mba-dx-005",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "MVP（Minimum Viable Product）",
    "difficulty": "basic",
    "question": "エリック・リースの『リーン・スタートアップ』において、実用最小限の機能だけを備え、最小限の時間と労力で初期顧客に提供して実証・学習サイクルを回すための製品試作品を何と呼ぶか。",
    "options": [
      "MVP（実用最小限の製品）",
      "ベータ版完成品",
      "モックアップ",
      "量産試作機"
    ],
    "answerIndex": 0,
    "explanation": "最初から完璧な製品を作り込んで市場に出すのではなく、仮説検証に必要な最小限のプロトタイプを素早く世に出し、顧客の反応（データ）から学ぶことで無駄な投資を防ぎます。"
  },
  {
    "id": "mba-dx-006",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "PMF（Product Market Fit）",
    "difficulty": "basic",
    "question": "スタートアップや新規事業において、「自社の製品が、急成長する有望な市場のニーズに完全に適合し、顧客が熱狂して自発的に広がる状態」を何と呼ぶか。",
    "options": [
      "PMF（プロダクト・マーケット・フィット）",
      "PoC（概念実証）",
      "IPO（新規株式公開）",
      "M&A（企業の買収・合併）"
    ],
    "answerIndex": 0,
    "explanation": "PMFを達成する前に多額の広告費を使って拡大しようとすると、穴の空いたバケツに水を注ぐように資金が尽きて失敗します。PMF達成後にアクセルを踏むのが鉄則です。"
  },
  {
    "id": "mba-dx-007",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "PoC（Proof of Concept：概念実証）",
    "difficulty": "basic",
    "question": "新しい技術（AI、IoT、ブロックチェーン等）や斬新なビジネスモデルを本格開発する前に、小規模な実証実験を行い、技術的実現性やビジネス上の有効性を確認するプロセスを何と呼ぶか。",
    "options": [
      "PoC（概念実証）",
      "ROI測定",
      "ストレステスト",
      "デューデリジェンス"
    ],
    "answerIndex": 0,
    "explanation": "多額の投資判断を下す前にリスクを最小化するために実施されますが、実証実験ばかり繰り返して本番導入に進まない「PoC死」が日本企業の課題となっています。"
  },
  {
    "id": "mba-dx-008",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "アジャイル開発とスクラム",
    "difficulty": "basic",
    "question": "従来の仕様を完全に固めてから順に工程を進める「ウォーターフォール開発」に対し、1〜4週間の短い期間（スプリント）で設計・開発・テストを繰り返し、変化に柔軟に対応する開発手法を何と呼ぶか。",
    "options": [
      "アジャイル開発（Agile）",
      "受託一括開発",
      "フェーズゲート法",
      "クリティカルパス法"
    ],
    "answerIndex": 0,
    "explanation": "不確実性の高いDXやWebサービス開発において、顧客からのフィードバックを即座に取り込みながらプロダクトを進化させる標準的な開発手法です。"
  },
  {
    "id": "mba-dx-009",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "デザイン思考 (Design Thinking)",
    "difficulty": "standard",
    "question": "スタンフォード大学d.schoolやIDEOが体系化した、デザイナーの感性や手法をビジネスの課題解決に応用するデザイン思考の5つのプロセスの正しい順序はどれか。",
    "options": [
      "共感（Empathize） → 問題定義（Define） → アイデア創出（Ideate） → 試作（Prototype） → テスト（Test）",
      "調査（Survey） → 分析（Analyze） → 企画（Plan） → 開発（Develop） → 販売（Sell）",
      "仮説（Hypothesis） → 検証（Verify） → 修正（Fix） → 納品（Deliver） → 評価（Review）",
      "観察（Observe） → 設計（Design） → 製作（Build） → 広告（Promote） → 終了（Done）"
    ],
    "answerIndex": 0,
    "explanation": "徹底した人間中心（ユーザーへの共感）からスタートし、手を動かして素早くプロトタイプを作ってテストと失敗を重ねながら真の解決策を探索します。"
  },
  {
    "id": "mba-dx-010",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "デジタライゼーションとデジタルトランスフォーメーション (DX)",
    "difficulty": "basic",
    "question": "紙の電子化や単一業務の自動化を指す「デジタイゼーション」、業務プロセスのデジタル化を指す「デジタライゼーション」に対し、真の「デジタルトランスフォーメーション（DX）」が目指すゴールとして最も適切なものはどれか。",
    "options": [
      "データとデジタル技術を活用して、ビジネスモデルや組織・企業文化そのものを変革し、競争優位を確立すること",
      "社内のPCやタブレット端末を最新機種に入れ替えること",
      "すべての会議をオンライン（Zoom等）に移行すること",
      "社内基幹システムをオンプレミスから単にクラウドへ移行すること"
    ],
    "answerIndex": 0,
    "explanation": "経済産業省のDX定義にもある通り、単なるITツールの導入にとどまらず、顧客への提供価値、ビジネスモデル、企業カルチャーを根本から変革することがDXの本質です。"
  },
  {
    "id": "mba-dx-011",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "APIエコノミー",
    "difficulty": "standard",
    "question": "自社のソフトウェアや保有データ、決済・認証などの機能を外部企業が自由に接続・連携できる形式（Web API）で公開し、他社サービスと結びつくことで新たな経済圏や価値を創出する仕組みを何と呼ぶか。",
    "options": [
      "APIエコノミー",
      "クローズド・システム",
      "イントラネット",
      "ファイアウォール・エコノミー"
    ],
    "answerIndex": 0,
    "explanation": "Stripe（決済）、Google Maps（地図）、Twilio（通信）などのように、自社機能をAPIとして提供することで世界中のアプリに組み込まれ、指数関数的なエコシステムを築くモデルです。"
  },
  {
    "id": "mba-dx-012",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ピボット (Pivot)",
    "difficulty": "basic",
    "question": "スタートアップや新規事業において、当初立てたビジネスモデルの仮説が市場に適合しないと分かった際、軸足（コア技術やビジョン）を残しながら事業戦略やターゲット、提供価値の方向性を機敏に転換することを何と呼ぶか。",
    "options": [
      "ピボット（Pivot）",
      "ロールバック",
      "スクラップ＆ビルド",
      "リバランス"
    ],
    "answerIndex": 0,
    "explanation": "バスケットボールのピボット（片足を軸にして方向を変える）に由来します。Slack（ゲーム開発からチャットツールへ）やYouTube（デート動画サイトから動画共有へ）など、大成功企業の多くがピボットを経て飛躍しています。"
  },
  {
    "id": "mba-dx-013",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "サブスクリプション・ビジネスと所有から利用へ",
    "difficulty": "basic",
    "question": "消費者が製品を「買い取って所有」するのではなく、必要な期間だけ「利用する権利」に対価（定額料金）を支払うビジネスモデルへのシフトの本質的なメリットとして誤っているものはどれか。",
    "options": [
      "一度販売してしまえば、その後顧客とのコミュニケーションを取る必要が一切なくなること",
      "企業側にとっては、売切型と比べて安定的・予測可能な継続収益（リカーリングレベニュー）が得られること",
      "顧客側にとっては、初期費用を抑えて手軽に最新サービスを利用できること",
      "利用データを通じて顧客行動を継続的に分析し、サービス改善やLTV最大化を図れること"
    ],
    "answerIndex": 0,
    "explanation": "サブスクリプションの本質は「販売して終わり」ではなく「利用開始からが顧客関係の始まり」である点です。継続的な価値提供とカスタマーサクセスが不可欠です。"
  },
  {
    "id": "mba-dx-014",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "死の谷 (Valley of Death)",
    "difficulty": "standard",
    "question": "研究開発型ベンチャー企業や新規事業において、初期の基礎研究や技術開発に成功した後、それを製品化・量産化して商業化の軌道に乗せるまでの間に資金が尽きて倒産する難関フェーズを何と呼ぶか。",
    "options": [
      "死の谷（Valley of Death）",
      "ダーウィンの海",
      "魔の川",
      "キャズム"
    ],
    "answerIndex": 0,
    "explanation": "魔の川（研究から開発への関門）→死の谷（開発から事業化への関門）→ダーウィンの海（事業化から市場での生き残り・競争の関門）という技術経営（MOT）の3大難関の一つです。"
  },
  {
    "id": "mba-dx-015",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "データドリブン経営",
    "difficulty": "basic",
    "question": "経営者の経験や勘、度胸（KKD）だけに頼る意思決定を脱却し、蓄積されたPOSデータ、アクセスログ、顧客行動データなどの定量的な分析結果に基づいて戦略や意思決定を行うアプローチを何と呼ぶか。",
    "options": [
      "データドリブン経営",
      "トップダウン専制経営",
      "コンセンサス経営",
      "成り行き経営"
    ],
    "answerIndex": 0,
    "explanation": "意思決定のスピードと確からしさを高め、組織的な仮説検証サイクル（PDCA）を高速化するためのDX時代の基本姿勢です。"
  },
  {
    "id": "mba-dx-016",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "プラットフォームのロックイン効果",
    "difficulty": "standard",
    "question": "ユーザーが特定のプラットフォームやOS（iOS、Android等）を使い続けるうちに、購入したアプリ、保存された写真やデータ、操作の習熟度などが蓄積され、他社プラットフォームへ乗り換えにくくなる現象を何と呼ぶか。",
    "options": [
      "ロックイン効果（Lock-in Effect）",
      "スピルオーバー効果",
      "スノッブ効果",
      "アンダーマイニング効果"
    ],
    "answerIndex": 0,
    "explanation": "高いスイッチングコストを創出して顧客離反を防ぎ、LTV（生涯顧客価値）を極大化するためのプラットフォームビジネスの強力な堀（Moat）となります。"
  },
  {
    "id": "mba-dx-017",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ノーコード・ローコード開発",
    "difficulty": "basic",
    "question": "複雑なプログラミング言語のコードを一から記述することなく、視覚的なGUI（ドラッグ＆ドロップ操作等）を使って業務アプリやWebサイトを迅速に構築できる開発ツールを何と呼ぶか。",
    "options": [
      "ノーコード・ローコード（No-code / Low-code）",
      "オープンソース・アセンブラ",
      "ハードコーディング",
      "オブジェクト指向プログラミング"
    ],
    "answerIndex": 0,
    "explanation": "非エンジニアの現場部門（シチズンデベロッパー）が自ら業務自動化やプロトタイプ開発を推進できるため、現場主導のDXを加速する手段として注目されています。"
  },
  {
    "id": "mba-dx-018",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "サービタイゼーション (Servitization)",
    "difficulty": "standard",
    "question": "製造業が単に「機械や製品を売り切る（モノ売り）」ビジネスから脱却し、IoTで稼働データを監視しながら「保全、運用最適化、成果保証（コト売り）」などの高収益サービスを提供するビジネスモデル転換を何と呼ぶか。",
    "options": [
      "サービタイゼーション（製造業のサービス化）",
      "ファブレス化",
      "OEM化",
      "ディスインフォメーション"
    ],
    "answerIndex": 0,
    "explanation": "ロールス・ロイスが航空機エンジンを売るのではなく「エンジンの飛行稼働時間（Power by the Hour）」に応じて課金するモデルや、建設機械の稼働モニタリング（コマツのKOMTRAX）が代表例です。"
  },
  {
    "id": "mba-dx-019",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ゼロパーティデータ",
    "difficulty": "standard",
    "question": "プライバシー規制強化（Cookie規制等）が進む中、顧客が自らの意図で能動的・明示的に企業と共有するデータ（自身の好み、関心事、購入意図、生活スタイル等）を何と呼ぶか。",
    "options": [
      "ゼロパーティデータ",
      "ファーストパーティデータ",
      "セカンドパーティデータ",
      "サードパーティCookie"
    ],
    "answerIndex": 0,
    "explanation": "アンケートや診断コンテンツなどを通じて顧客から直接提供される高精度な意図データであり、個客にパーソナライズされた価値提案を行うための最重要資産となっています。"
  },
  {
    "id": "mba-dx-020",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "リーン・スタートアップの構築・計測・学習ループ",
    "difficulty": "basic",
    "question": "リーン・スタートアップにおける、無駄を削ぎ落として素早く仮説検証を回す「フィードバックループ」の3つの要素の正しい順序はどれか。",
    "options": [
      "構築（Build） → 計測（Measure） → 学習（Learn）",
      "計画（Plan） → 実行（Do） → 是正（Action）",
      "調査（Survey） → 分析（Analyze） → 発表（Report）",
      "資金調達（Finance） → 採用（Hire） → 拡大（Scale）"
    ],
    "answerIndex": 0,
    "explanation": "アイデアから最小限の製品を作り（Build）、顧客の反応や行動データを測定し（Measure）、仮説が合っていたか検証して学び（Learn）、ピボットか継続かを判断します。"
  },
  {
    "id": "mba-dx-021",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "生成AIとプロンプトエンジニアリング",
    "difficulty": "basic",
    "question": "大規模言語モデル（LLM）などの生成AIから、ビジネスの実務において最も高精度で意図に沿った出力や洞察を引き出すために、入力指示文（プロンプト）を論理的・構造的に最適化する技術を何と呼ぶか。",
    "options": [
      "プロンプトエンジニアリング",
      "リバースエンジニアリング",
      "ソーシャルエンジニアリング",
      "コンパイラ最適化"
    ],
    "answerIndex": 0,
    "explanation": "役割の指定、明確なコンテキスト付与、制約条件、出力フォーマットの明示（Few-shotプロンプティング等）を駆使し、ビジネス意思決定や分析の生産性を飛躍的に高めるスキルです。"
  },
  {
    "id": "mba-data-001",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "MECE（ミーシー）",
    "difficulty": "basic",
    "question": "マッキンゼーをはじめとする戦略コンサルティングやロジカルシンキングの基本概念で、「モレなく、ダブりなく」対象を分解・整理することを意味する略称はどれか。",
    "options": [
      "MECE（Mutually Exclusive, Collectively Exhaustive）",
      "SMARTの法則",
      "ロジックツリー",
      "フィッシュボーンダイアグラム"
    ],
    "answerIndex": 0,
    "explanation": "全体を漏れや重複のない要素に分解することで、見落としによるリスクを防ぎ、問題の本質（真因）を正確に特定するための論理的思考の最重要ツールです。"
  },
  {
    "id": "mba-data-002",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "A/Bテスト（ランダム化比較実験）",
    "difficulty": "basic",
    "question": "Webサイトのボタン色や広告コピー、料金プランなどにおいて、ユーザーを無作為にグループAとグループBに振り分け、どちらがより高いコンバージョン率（成果）をもたらすかを統計的に検証する手法を何と呼ぶか。",
    "options": [
      "A/Bテスト（Split Run Test）",
      "回帰分析",
      "フォーカスグループインタビュー",
      "ベンチマークテスト"
    ],
    "answerIndex": 0,
    "explanation": "個人の主観や好みに頼る議論を排し、実際のユーザー行動の客観的なデータ（統計的有意差）に基づいて最適な施策を選択するデータドリブンの代表的手法です。"
  },
  {
    "id": "mba-data-003",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "意思決定ツリーと期待値 (Expected Value)",
    "difficulty": "standard",
    "question": "不確実な状況下での投資判断において、発生しうる各シナリオの「発生確率」と、その時に得られる「利益（ペイオフ）」を掛け合わせて合計した、平均的に期待できる金銭的価値を何と呼ぶか。",
    "options": [
      "期待値（Expected Monetary Value）",
      "中央値（メディアン）",
      "最頻値（モード）",
      "標準偏差"
    ],
    "answerIndex": 0,
    "explanation": "例えば「60%の確率で1億円の利益、40%の確率で▲2,000万円の損失」の場合、期待値＝（1億×0.6）＋（▲2,000万×0.4）＝6,000万−800万＝5,200万円と定量的に比較評価できます。"
  },
  {
    "id": "mba-data-004",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "相関関係と因果関係 (Correlation vs Causation)",
    "difficulty": "basic",
    "question": "「2つの事象が連動して変化する関係（相関関係）」と、「一方が原因となって他方の結果を引き起こす関係（因果関係）」の混同に関する記述として、最も適切なものはどれか。",
    "options": [
      "相関関係があるからといって、必ずしも因果関係があるとは限らない（第3の交絡因子の存在等）",
      "相関関係が確認されれば、必ず因果関係も成立する",
      "相関関係と因果関係は統計学上まったく同じ概念である",
      "因果関係を証明するためには単なるアンケート調査だけで十分である"
    ],
    "answerIndex": 0,
    "explanation": "「交番の数が多い地域ほど犯罪件数が多い（真の原因は人口の多さ）」のように、見かけ上の相関（疑似相関）に騙されて誤った経営判断を下さないことが定量分析のリテラシーです。"
  },
  {
    "id": "mba-data-005",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "パレートの法則（80対20の法則）",
    "difficulty": "basic",
    "question": "経済やビジネス現象において、「全体の成果（売上高や利益）の大部分（約80%）は、全体のわずかな要素（約20%の優良顧客や主力製品）によってもたらされている」という経験則を何と呼ぶか。",
    "options": [
      "パレートの法則（ABC分析）",
      "ムーアの法則",
      "グレシャムの法則",
      "メタカーフの法則"
    ],
    "answerIndex": 0,
    "explanation": "経営資源（ヒト・モノ・カネ）をすべてに平等に配分するのではなく、最も成果に直結する上位2割の顧客や重点製品に集中投下する「重点管理」の論理的根拠となります。"
  },
  {
    "id": "mba-data-006",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "単回帰分析と重回帰分析",
    "difficulty": "standard",
    "question": "売上高（目的変数・結果）に対して、広告宣伝費、店舗面積、周辺人口など複数の要因（説明変数・原因）がそれぞれどの程度影響を与えているかを数式化・予測する統計手法を何と呼ぶか。",
    "options": [
      "重回帰分析（Multiple Regression Analysis）",
      "主成分分析",
      "クラスター分析",
      "コレスポンデンス分析"
    ],
    "answerIndex": 0,
    "explanation": "要因が1つの場合は単回帰分析、複数要因の影響度（偏回帰係数）と貢献度（決定係数R2）を検証する場合は重回帰分析を用います。"
  },
  {
    "id": "mba-data-007",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "標準偏差と正規分布",
    "difficulty": "basic",
    "question": "データの平均値からの「ばらつき（散らばり）の大きさ」を定量的に表す指標であり、投資リスクの尺度や品質管理（シグマ）で中心的な役割を果たす統計値はどれか。",
    "options": [
      "標準偏差（Standard Deviation：σ）",
      "平均値（Mean）",
      "範囲（レンジ）",
      "歪度（Skewness）"
    ],
    "answerIndex": 0,
    "explanation": "ファイナンスにおいて投資リターンの振れ幅（ボラティリティ＝リスク）を測る物差しであり、正規分布では「平均値±1σ」に約68.3%、「平均値±2σ」に約95.4%のデータが収まります。"
  },
  {
    "id": "mba-data-008",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "仮説検定とp値（有意水準）",
    "difficulty": "standard",
    "question": "新機能の導入前後で顧客満足度に差があるかを検証する際、「差がない」という仮説（帰無仮説）を立て、これが偶然起きる確率（p値）が設定した基準（通常5%未満）を下回った場合に「統計的に意味のある有意な差がある」と判断する手法を何と呼ぶか。",
    "options": [
      "統計的仮説検定",
      "モンテカルロ法",
      "感応度テスト",
      "時系列平滑化"
    ],
    "answerIndex": 0,
    "explanation": "偶然のばらつき（ノイズ）と、真の効果（シグナル）を客観的・数学的に峻別するための統計的意思決定手法です。"
  },
  {
    "id": "mba-data-009",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "感応度分析（センシティビティ分析）",
    "difficulty": "standard",
    "question": "事業計画や投資回収モデルにおいて、為替レート、原材料価格、販売単価などの主要な前提変数が10%悪化・好転した際、最終利益やNPVがどの程度変動するかをシミュレーションする手法を何と呼ぶか。",
    "options": [
      "感応度分析（センシティビティ分析）",
      "ブレインストーミング",
      "デルファイ法",
      "ストレステスト"
    ],
    "answerIndex": 0,
    "explanation": "「どの変数のブレが事業計画に最も致命的な打撃を与えるか（最も敏感なリスク要因）」を特定し、重点的なリスクヘッジ策を打つために活用されます。"
  },
  {
    "id": "mba-data-010",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "アンカリング効果 (Anchoring Effect)",
    "difficulty": "basic",
    "question": "価格交渉や意思決定において、最初に提示された特定の数値（アンカー・錨）に思考が強く引っ張られ、その後の判断や評価が無意識に偏ってしまう認知バイアスを何と呼ぶか。",
    "options": [
      "アンカリング効果",
      "バンドワゴン効果",
      "フレーミング効果",
      "サンクコスト効果"
    ],
    "answerIndex": 0,
    "explanation": "「通常価格50,000円のところ、今だけ19,800円！」のように、最初の5万円というアンカーを見せられると、19,800円が絶対的価値以上に割安に感じてしまう心理効果です。"
  },
  {
    "id": "mba-data-011",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "プロスペクト理論と損失回避性",
    "difficulty": "standard",
    "question": "行動経済学のダニエル・カーネマンとエイモス・トベルスキーが提唱した、人間は「同額の利益を得る喜び」よりも「同額の損失を被る痛み」を約2倍強く感じるという心理特性を何と呼ぶか。",
    "options": [
      "損失回避性（Loss Aversion）",
      "リスク中立性",
      "現状維持バイアス",
      "保有効果"
    ],
    "answerIndex": 0,
    "explanation": "1万円拾った嬉しさよりも、1万円落としたショックの方がはるかに大きく、投資の損切り（ロスカット）が遅れる原因となります。"
  },
  {
    "id": "mba-data-012",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "フレーミング効果 (Framing Effect)",
    "difficulty": "basic",
    "question": "実質的な意味や客観的確率は全く同一であるにもかかわらず、提示する表現の枠組み（フレーム）を変えるだけで、相手の受け止め方や意思決定が劇的に変化する現象を何と呼ぶか。",
    "options": [
      "フレーミング効果",
      "ハロー効果",
      "初頭効果",
      "親近効果"
    ],
    "answerIndex": 0,
    "explanation": "「手術の死亡率は10%です」と説明されると怖気づくが、「手術の成功率は90%です」と説明されると安心感を持って承諾してしまう心理現象です。"
  },
  {
    "id": "mba-data-013",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "フェルミ推定 (Fermi Estimation)",
    "difficulty": "basic",
    "question": "「日本全国に電柱は何本あるか？」「シカゴにピアノ調律師は何人いるか？」のように、一見調査が不可能な把握困難な数量を、論理的な手がかりと概算ロジックを用いて短時間で概算する手法を何と呼ぶか。",
    "options": [
      "フェルミ推定",
      "モンテカルロ法",
      "デルファイ法",
      "全数センサス調査"
    ],
    "answerIndex": 0,
    "explanation": "物理学者エンリコ・フェルミに由来し、マッキンゼー等の戦略コンサルティング面接や、新規事業の市場規模（TAM）の初期推計で必須の論理的思考スキルです。"
  },
  {
    "id": "mba-data-014",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "ロジックツリー（WhyツリーとHowツリー）",
    "difficulty": "basic",
    "question": "ある主要な問題を頂点に置き、MECE（モレなくダブりなく）のルールに基づいて「なぜ（Why）？」を繰り返して原因を深掘りしたり、「どうやって（How）？」を繰り返して具体策を展開する樹形図を何と呼ぶか。",
    "options": [
      "ロジックツリー",
      "組織図",
      "デシジョンツリー",
      "PERT図"
    ],
    "answerIndex": 0,
    "explanation": "問題の原因特定（Whyツリー）や施策のアイデア出し（Howツリー）、KPIの因数分解（KPIツリー）など、複雑な経営課題を解像度高く分解してアクションに落とし込むツールです。"
  },
  {
    "id": "mba-data-015",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "生存者バイアス (Survivorship Bias)",
    "difficulty": "standard",
    "question": "成功を収めた一握りの企業や人物（生存者）の共通点や行動パターンばかりを熱心に分析し、同じ行動をとって脱落・倒産していった膨大な敗者（非生存者）の存在を無視してしまう論理的誤謬を何と呼ぶか。",
    "options": [
      "生存者バイアス",
      "結果バイアス",
      "後知恵バイアス",
      "楽観主義バイアス"
    ],
    "answerIndex": 0,
    "explanation": "「成功した起業家は全員睡眠時間を削っていたから、寝る間を惜しめば成功する」のように、失敗例を無視した偏った教訓を導き出してしまう危険な罠です。"
  },
  {
    "id": "mba-data-016",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "コホート分析 (Cohort Analysis)",
    "difficulty": "standard",
    "question": "ユーザーを登録月や初回購入時期などの「共通の属性や開始時期を持つグループ（コホート）」ごとに分類し、時間の経過に伴うリピート率や残存率（継続率）の変化を時系列で追跡する分析手法を何と呼ぶか。",
    "options": [
      "コホート分析（コホートマトリクス）",
      "クロス集計分析",
      "ファンネル分析",
      "トレンド分析"
    ],
    "answerIndex": 0,
    "explanation": "SaaSやアプリにおいて、プロダクト改善や機能追加の前後で、新しく獲得したユーザー層の定着率が過去のユーザー層と比べて向上しているかどうかを検証するために多用されます。"
  },
  {
    "id": "mba-data-017",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "決定木（ディシジョン・ツリー）分析",
    "difficulty": "standard",
    "question": "機械学習やデータマイニングにおいて、目的とする結果（成約／不成約など）を予測するために、データを条件分岐（IF-THENルール）の樹形図として可視化し、分類や回帰を行うアルゴリズムを何と呼ぶか。",
    "options": [
      "決定木（Decision Tree）",
      "ニューラルネットワーク",
      "サポートベクターマシン",
      "主成分回帰"
    ],
    "answerIndex": 0,
    "explanation": "ブラックボックスになりがちなAIモデルと異なり、「どのような条件の顧客が購入しやすいか」を直感的に人間が解釈・説明しやすい特徴があります。"
  },
  {
    "id": "mba-data-018",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "KPIツリー（重要業績評価指標の因数分解）",
    "difficulty": "basic",
    "question": "KGI（重要目標達成指標：例として売上高）を達成するために、売上高＝「顧客数 × 客単価」＝「（新規顧客＋既存顧客）×（購買頻度×1回あたり購買点数×商品単価）」のように数式で因数分解した階層図を何と呼ぶか。",
    "options": [
      "KPIツリー",
      "バリューチェーンマップ",
      "ガントチャート",
      "PERTネットワーク"
    ],
    "answerIndex": 0,
    "explanation": "漠然と「売上を伸ばせ」と指示するのではなく、どのレバー（指標）を何％改善すれば全体目標に届くかを現場のアクションレベルまで明確にするツールです。"
  },
  {
    "id": "mba-data-019",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "シンプソンのパラドックス (Simpson's Paradox)",
    "difficulty": "standard",
    "question": "データを複数のグループに細分化して分析すると各グループ内では一貫して「A ＞ B」という関係が成り立っているのに、データをすべて合算して全体で見ると逆の「B ＞ A」という結論になってしまう統計の逆転現象を何と呼ぶか。",
    "options": [
      "シンプソンのパラドックス",
      "モンティ・ホール問題",
      "平均への回帰",
      "囚人のジレンマ"
    ],
    "answerIndex": 0,
    "explanation": "グループごとのサンプル数や属性比率の違いが原因で発生します。合算データだけを見て誤った経営判断を下さないための高度な統計的教訓です。"
  },
  {
    "id": "mba-data-020",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "平均値・中央値・最頻値の使い分け",
    "difficulty": "basic",
    "question": "日本の世帯所得や個人の純資産額のように、一部の極端な大富豪（外れ値）が存在してデータが正の方向に大きく歪んでいる分布において、「一般的な生活水準の実態」を把握するのに最も適した代表値はどれか。",
    "options": [
      "中央値（メディアン）",
      "相加平均値",
      "相乗平均値",
      "最大値"
    ],
    "answerIndex": 0,
    "explanation": "外れ値に引っ張られて平均値は実態より高くなりやすいため、データを小さい順に並べたちょうど真ん中の値である「中央値」を見るのが鉄則です。"
  },
  {
    "id": "mba-data-021",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "外れ値 (Outliers) の扱い",
    "difficulty": "basic",
    "question": "データ分析において、他のデータ群から極端に離れた異常値（外れ値）を発見した際のデータサイエンス的な対処として最も適切なものはどれか。",
    "options": [
      "入力ミス等の異常データか、革新的な顧客セグメントの予兆（異常な高額購買者など）か理由を精査し、分析目的に応じて適切に除外または別枠分析する",
      "理由を調べることなく直ちにすべての外れ値を自動削除する",
      "すべての外れ値を無理やり平均値に置き換えて計算する",
      "外れ値をそのまま放置し、通常の平均値だけをレポートする"
    ],
    "answerIndex": 0,
    "explanation": "外れ値は単なるノイズの場合もありますが、時に新たなビジネスチャンスや重大な不正・不具合の兆候を示す貴重なシグナルとなります。"
  },
  {
    "id": "mba-strat-023",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "リソース・ベースド・ビュー (RBV)",
    "difficulty": "standard",
    "question": "企業の競争優位の源泉は外部市場構造ではなく、企業内部に蓄積された独自の経営資源（リソース）にあるとする経営戦略論の学派はどれか。",
    "options": [
      "ポジショニング・ビュー（産業組織論的アプローチ）",
      "リソース・ベースド・ビュー（資源依拠型アプローチ）",
      "組織生態学アプローチ（ポピュレーション・エコロジー）",
      "取引コスト理論（新制度派経済学）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（リソース・ベースド・ビュー：RBV）です。ジェイ・バーニーやウェルナーフェルトらが提唱し、模倣困難で希少な内部資源こそが持続的な競争優位をもたらすと説きます。ポジショニング派（ポーター）が「魅力的な市場での位置取り」を重視するのに対し、RBVは内部能力の差別化に焦点を当てます。"
  },
  {
    "id": "mba-strat-024",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "コープティション (協調的競争)",
    "difficulty": "standard",
    "question": "競合する企業同士が、業界標準の策定や基礎研究など共通の利益を生む領域では協調（Cooperation）しつつ、製品開発や販売領域では厳しく競争（Competition）する戦略的関係を何と呼ぶか。",
    "options": [
      "コングロマリット経営",
      "カルテル・トラスト",
      "コープティション（協調的競争）",
      "敵対的買収（TOB）"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（コープティション）です。ブランデンバーガーとネイルバフが提唱した概念で、パイを拡大する段階では協調し、パイを分配する段階では競争します。実務では、EVの急速充電規格の統一や、IT業界でのオープンソース基盤の共同開発などで広く見られます。"
  },
  {
    "id": "mba-strat-025",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ビジネス・エコシステム",
    "difficulty": "standard",
    "question": "単一の企業グループやサプライチェーンの枠を超え、顧客、開発者、提携企業などの多様なプレイヤーが相互依存しながら共創・共生し、全体として価値を生み出す事業生態系を指す用語はどれか。",
    "options": [
      "ケイレツ（系列取引システム）",
      "コンソーシアム共同事業体",
      "垂直的統合モデル",
      "ビジネス・エコシステム"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（ビジネス・エコシステム）です。ジェームズ・ムーアが自然界の生態系になぞらえて提唱しました。AppleやGoogleのように、自社プラットフォーム上にアプリ開発者やアクセサリ企業を惹きつけ、ネットワーク効果によってエコシステム全体の魅力度を高める戦略が代表例です。"
  },
  {
    "id": "mba-strat-026",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "リアル・オプション思考",
    "difficulty": "standard",
    "question": "不確実性の高い新規事業やR&D投資において、初期に小規模な投資で探索を行い、市場動向を見極めた段階で追加投資・事業拡大・撤退の意思決定を行う柔軟な投資戦略手法はどれか。",
    "options": [
      "リアル・オプション",
      "DCF法（割引キャッシュフロー法）",
      "回収期間法（ペイバック法）",
      "資本資産価格モデル（CAPM）"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（リアル・オプション）です。金融オプションの考え方を実物投資に応用したもので、事業展開を段階的に進め、不確実性が解消されるまで「拡大する権利」「撤退する権利」を保持することでダウンサイドリスクを抑えつつアップサイドの収益を狙います。"
  },
  {
    "id": "mba-strat-027",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "一時的競争優位 (競争優位の終焉)",
    "difficulty": "standard",
    "question": "リタ・マグラスが提唱した、急速に環境が変化するデジタル時代において、従来の『持続的な競争優位』はもはや存在せず、企業は次々と優位性を掴んでは手放すサイクルを回し続けるべきだとする概念はどれか。",
    "options": [
      "永続的差別化優位",
      "一時的競争優位（トランジェント・アドバンテージ）",
      "コスト・リーダーシップ優位",
      "先行者永続優位"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（一時的競争優位：Transient Advantage）です。コロンビア大学教授のリタ・マグラスが『競争優位の終焉』で提唱しました。単一の強みに固執するのではなく、「参入・活用・再構成・撤退」を俊敏に繰り返す動的な戦略ポートフォリオ管理が求められます。"
  },
  {
    "id": "mba-strat-028",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "破壊的イノベーション",
    "difficulty": "standard",
    "question": "クレイトン・クリステンセンが提唱した、主流顧客にとって性能は劣るものの『シンプル・低価格・扱いやすさ』を備えた製品で未利用層や低価格市場に参入し、技術向上とともに既存リーダーを駆逐するイノベーションはどれか。",
    "options": [
      "持続的イノベーション（Sustaining Innovation）",
      "プロセス・イノベーション",
      "破壊的イノベーション（Disruptive Innovation）",
      "インクリメンタル・イノベーション"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（破壊的イノベーション）です。優良企業が既存の最上位顧客の声に耳を傾け高機能化（持続的イノベーション）を追求するあまり、下位市場の破壊的脅威を見過ごして敗北する現象を「イノベーションのジレンマ」と呼びます。"
  },
  {
    "id": "mba-strat-029",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "PMI (買収後統合)",
    "difficulty": "standard",
    "question": "M&A（企業の合併・買収）の成立後に、経営陣・組織体制・業務プロセス・企業文化・ITシステムなどを統合し、想定していたシナジー効果を確実に創出するための実務プロセスはどれか。",
    "options": [
      "デューデリジェンス（DD）",
      "バリュエーション（企業価値評価）",
      "レバレッジド・バイアウト（LBO）",
      "PMI（Post Merger Integration）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（PMI）です。M&Aの失敗原因の大半はディールそのものではなくPMIの不備（文化の摩擦、優秀な人材の流出、IT統合の遅延など）にあります。買収初期の「100日プラン」など、明確なリーダーシップと綿密な計画策定が極めて重要です。"
  },
  {
    "id": "mba-strat-030",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "事業ドメインの定義 (CTMモデル)",
    "difficulty": "standard",
    "question": "デレク・エイベルが提唱した、企業の事業領域（ドメイン）を明確に定義するための3つの次元（顧客層、顧客機能、代替技術）を何というか。",
    "options": [
      "エイベルのCTMモデル（Who / What / How）",
      "3C分析フレームワーク",
      "マッキンゼーの7Sフレームワーク",
      "ポーターの5フォースモデル"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（エイベルのCTMモデル）です。Customer groups（誰に：顧客層）、Customer functions（何を：顧客機能・ニーズ）、Alternative technologies（どのように：技術・提供方法）の3軸でドメインを定義します。狭すぎる物理的定義（例：鉄道会社）ではなく機能的定義（移動サービス）を促します。"
  },
  {
    "id": "mba-strat-031",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ポジショニング派 vs 資源派",
    "difficulty": "standard",
    "question": "戦略論における代表的な2大潮流のうち、ポーターに代表される『魅力的な産業を選び、競争相手に対して防衛可能な位置取り（ポジショニング）を築くこと』を重視する学派の主眼として最も適切なものはどれか。",
    "options": [
      "組織ルーティンと動的能力の進化による競争優位の構築",
      "外部環境分析に基づく魅力的な業界構造の選択と参入障壁の構築",
      "自社固有の暗黙知・組織文化の模倣困難性の追求",
      "従業員のエンゲージメント向上によるイノベーション創出"
    ],
    "answerIndex": 1,
    "explanation": "正解はBです。ポジショニング派（外向きアプローチ）は産業組織論（SCPパラダイム）を基礎とし、魅力的な業界構造を選び差別化やコストリーダーシップの位置を占めることを重視します。対する資源派（RBV：内向きアプローチ）は独自資源の蓄積を重視します。"
  },
  {
    "id": "mba-strat-032",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "CSV (共通価値の創造)",
    "difficulty": "standard",
    "question": "マイケル・ポーターとマーク・クラマーが提唱した、単なる利益の社会還元（慈善事業的CSR）ではなく、社会課題の解決を本業のビジネスプロセスに組み込み、社会的価値と経済的価値を両立させる経営概念はどれか。",
    "options": [
      "フィランソロピー（社会貢献慈善活動）",
      "メセナ（文化芸術活動の支援）",
      "CSV（Creating Shared Value：共通価値の創造）",
      "グリーンウォッシング"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（CSV）です。社会課題（環境負荷、貧困、健康問題等）の解決をコストや制約と捉えるのではなく、新市場の開拓や生産性の向上をもたらす「競争優位の源泉」と再定義する点が従来のCSRと決定的に異なります。"
  },
  {
    "id": "mba-strat-033",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "リバース・イノベーション",
    "difficulty": "standard",
    "question": "新興国や途上国の特有の制約や低コストニーズに合わせて開発された安価で簡素な製品・サービスが、先進国の市場に逆流して普及するイノベーション現象を何というか。",
    "options": [
      "グローバリゼーション",
      "オフショア・アウトソーシング",
      "リバース・エンジニアリング",
      "リバース・イノベーション"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（リバース・イノベーション）です。ビジャイ・ゴビンダラジャンらが提唱しました。GEがインド向けに開発した超低価格・バッテリー駆動の携帯型心電計が、後に先進国の救急車や往診用として逆普及した事例が有名です。"
  },
  {
    "id": "mba-strat-034",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ESG経営",
    "difficulty": "standard",
    "question": "企業の持続可能な成長と中長期的な企業価値向上のために、財務情報だけでなく『環境（Environment）』『社会（Social）』『企業統治（Governance）』の非財務要素を経営戦略に統合するアプローチはどれか。",
    "options": [
      "ESG経営",
      "利益至上主義（株主資本主義）",
      "内部統制システム構築",
      "TQC（全社的品質管理）"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（ESG経営）です。気候変動対応、人権尊重、ダイバーシティ、ガバナンス体制の透明性を高めることで、機関投資家からの資金調達コスト低減やレピュテーションリスクの回避、中長期的な競争優位の確立を目指します。"
  },
  {
    "id": "mba-strat-035",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "バリュー・イノベーション (アクション・マトリクス)",
    "difficulty": "standard",
    "question": "ブルー・オーシャン戦略の中核ツールである『アクション・マトリクス（ERRCフレームワーク）』を構成する4つのアクションとして正しい組み合わせはどれか。",
    "options": [
      "模倣、改善、集中、多角化",
      "取り除く（Eliminate）、減らす（Reduce）、増やす（Raise）、付け加える（Create）",
      "計画（Plan）、実行（Do）、確認（Check）、行動（Act）",
      "強み（Strengths）、弱み（Weaknesses）、機会（Opportunities）、脅威（Threats）"
    ],
    "answerIndex": 1,
    "explanation": "正解はBです。業界標準とされている要素を「取り除く」「減らす」ことでコストを引き下げ、業界で提供されたことのない価値を「増やす」「付け加える」ことで買い手への差別化を実現し、トレードオフを打破します。"
  },
  {
    "id": "mba-strat-036",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "コア・リジディティ (中核的硬直性)",
    "difficulty": "standard",
    "question": "ドロシー・レオナルドが提唱した、過去に企業の成功と競争優位の源泉であったはずの中核的能力（コア・コンピタンス）が、環境変化に適応できず、かえって革新を阻害する足かせとなる現象はどれか。",
    "options": [
      "コア・コンピタンスの希薄化",
      "サンクコストの誤謬",
      "コア・リジディティ（中核的硬直性）",
      "イノベーターのジレンマ"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（コア・リジディティ）です。成功体験に基づくルーティンや組織規範、価値観が強固になりすぎると、新規事業や新技術を「自社らしくない」と排除してしまい、環境激変期に致命的な弱点へ転換してしまいます。"
  },
  {
    "id": "mba-strat-037",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "コングロマリット・ディスカウント",
    "difficulty": "standard",
    "question": "多角化経営を行う複合企業（コングロマリット）の市場時価総額が、各事業単位を独立企業として評価・合算した総価値（SOTP）よりも低く割り引かれて評価される現象を何というか。",
    "options": [
      "シナジー・プレミアム",
      "Tobin's q（トービンのq）",
      "エージェンシー・スラック",
      "コングロマリット・ディスカウント"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（コングロマリット・ディスカウント）です。事業の多角化により経営の不透明さが増し、本社管理コストの肥大化や成長事業から不採算事業への内部補助（不合理な資本配分）が懸念されることで株式市場から敬遠されます。"
  },
  {
    "id": "mba-strat-038",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "アライアンス戦略",
    "difficulty": "standard",
    "question": "企業が自社単独での開発や買収（M&A）を行わず、他社と資本や業務提携を結ぶことで、経営の独立性を保ちながら迅速に補完的経営資源を獲得・共有する戦略はどれか。",
    "options": [
      "アライアンス戦略（戦略的提携）",
      "フルインハウス戦略",
      "ホスタイル・テイクオーバー（敵対的買収）",
      "マネジメント・バイアウト（MBO）"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（アライアンス戦略）です。M&Aに比べて多額の資金や統合リスクを回避でき、契約の解消も比較的柔軟に行える利点があります。一方、技術流出やフリーライダー問題、ガバナンスの難しさといったデメリットも存在します。"
  },
  {
    "id": "mba-strat-039",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "組織ルーティン (Organizational Routines)",
    "difficulty": "standard",
    "question": "進化経済学（ネルソン＆ウィンター）において、企業が反復的に実行する標準化された業務手続きやパターン化された行動様式であり、組織の記憶や知識の担い手とされる概念はどれか。",
    "options": [
      "タスクフォース",
      "組織ルーティン",
      "就業規則",
      "稟議制度"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（組織ルーティン）です。組織ルーティンは日々の業務を効率化し調整コストを最小化する強みを持つ一方、硬直化すると環境変化への適応を妨げる要因にもなります。これを更新する能力が「ダイナミック・ケイパビリティ」です。"
  },
  {
    "id": "mba-strat-040",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "デ・ファクト・スタンダード",
    "difficulty": "standard",
    "question": "公的な標準化機関の認証による標準（デ・ジューレ・スタンダード）ではなく、市場における激しい競争やネットワーク外部性の獲得によって、事実上の業界標準となった規格・基準を何というか。",
    "options": [
      "オープン・アーキテクチャ",
      "ISO国際規格",
      "デ・ファクト・スタンダード（事実上の標準）",
      "知的財産権（特許）"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（デ・ファクト・スタンダード）です。VHS対ベータマックス、WindowsOS、Blu-ray規格などが代表例です。デ・ファクトを制した企業は自己強化型のフィードバックループにより市場の大半の収益を独占することが可能になります。"
  },
  {
    "id": "mba-strat-041",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "バンドリング戦略",
    "difficulty": "standard",
    "question": "複数の製品やサービスを個別ではなくセットにして一体として販売することで、顧客の支払意思額を抽出し総売上を高めたり、競合製品の参入を防ぐ戦略手法はどれか。",
    "options": [
      "アンバンドリング戦略",
      "ダイナミック・プライシング",
      "プライスペネトレーション",
      "バンドリング戦略（抱き合わせ・セット販売）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（バンドリング戦略）です。Office製品群（Word・Excel・PowerPoint）や通信回線とスマートフォンのセット割などが好例です。顧客ごとに各製品に対する評価額のばらつきがある場合、セット化により消費者余剰を効果的に回収できます。"
  },
  {
    "id": "mba-strat-042",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "移動障壁 (Mobility Barriers)",
    "difficulty": "standard",
    "question": "マイケル・ポーターの戦略グループ論において、同一産業内の特定の戦略グループから別の戦略グループへと企業が移行することを困難にしている参入障壁に類似した障壁はどれか。",
    "options": [
      "移動障壁（Mobility Barriers）",
      "退出障壁（Exit Barriers）",
      "関税障壁（Tariff Barriers）",
      "スイッチング・コスト"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（移動障壁）です。例えば低価格路線から高付加価値・高価格ブランド路線へシフトしようとしても、ブランド構築、独自技術、流通網などの障壁があり簡単には移行できません。この移動障壁の高さがグループ間の収益性格差を生み出します。"
  },
  {
    "id": "mba-strat-043",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "知の探索と知の深化",
    "difficulty": "standard",
    "question": "ジェームズ・マーチが提唱した組織学習の二本柱のうち、自社の既存の知識・認知の範囲外にある遠くの知識を幅広く探し出し、新結合を試みる行動を指すものはどれか。",
    "options": [
      "知の深化（Exploitation）",
      "知の探索（Exploration）",
      "知の標準化（Standardization）",
      "知の暗黙化（Tacit Knowledge）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（知の探索）です。「知の探索」は新しい知見を遠くに求めイノベーションを生む一方、成果の不確実性が高い特徴があります。一方「知の深化」は既存知識を磨き短期的効率を高めます。両者を高いレベルで両立させることが「両利きの経営」です。"
  },
  {
    "id": "mba-strat-044",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "タイムベース競争 (Time-Based Competition)",
    "difficulty": "standard",
    "question": "ジョージ・ストークらボストン・コンサルティング・グループが提唱した、製品開発から製造、流通、顧客納品に至る全プロセスの『時間短縮（リードタイム圧縮）』を最大の競争優位の源泉とする戦略概念はどれか。",
    "options": [
      "価格主導型競争",
      "規模の経済競争",
      "タイムベース競争（時間基準の競争）",
      "コスト・リダクション戦略"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（タイムベース競争）です。時間を圧縮することで、在庫保有コストの低減、市場のトレンド変化への即応、顧客満足度の向上を実現し、競合他社が追随できないスピード優位を構築します（ZARAのサプライチェーンなど）。"
  },
  {
    "id": "mba-strat-045",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "技術ロードマップ (MOT)",
    "difficulty": "standard",
    "question": "技術経営（MOT）において、自社の将来の事業ビジョンを達成するために必要な市場ニーズ、製品機能、獲得すべき要素技術の時間軸に沿った進化シナリオを一覧化した図表はどれか。",
    "options": [
      "ガントチャート",
      "PERT工程図",
      "バリューストリームマップ",
      "技術ロードマップ（テクノロジー・ロードマップ）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（技術ロードマップ）です。「市場層」「製品層」「技術層」の3層を時間軸で結びつけることで、経営陣、マーケティング、研究開発部門の間で将来の方向性を共有し、戦略的なR&D投資や知財獲得の意思決定を可能にします。"
  },
  {
    "id": "mba-strat-046",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "方針管理とTQM",
    "difficulty": "standard",
    "question": "経営トップが策定した中長期経営計画や年次経営方針を、各階層の部門目標や具体的アクションプランに整合性を持って展開（カスケード）し、PDCAサイクルを回す全社的経営管理手法はどれか。",
    "options": [
      "方針管理（Hoshin Kanri / Policy Deployment）",
      "ワークシェアリング",
      "ジョブ・ディスクリプション（職務記述書）",
      "キャリア・アンカー"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（方針管理）です。日本発祥のTQM（総合的品質管理）の重要手法であり、トップの方針と現場の課題をすり合わせる「キャッチボール」を行いながら全社目標のベクトルを一致させ、着実に戦略を実行に移します。"
  },
  {
    "id": "mba-strat-047",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "経験曲線効果 (Experience Curve Effect)",
    "difficulty": "standard",
    "question": "BCGが提唱した、累積生産量が2倍になるごとに、製品1個当たりの実質加工コスト（単位コスト）が一定割合（通常10〜30%程度）低下するという法則はどれか。",
    "options": [
      "規模の経済（スケールメリット）",
      "経験曲線効果（エクスペリエンス・カーブ）",
      "範囲の経済（スコープメリット）",
      "限界費用逓減の法則"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（経験曲線効果）です。「規模の経済」が同一時点での生産規模拡大による固定費分散であるのに対し、「経験曲線効果」は累積生産量に伴う作業者の習熟、工程改善、新素材の採用など時間経過に伴う学習効果を含みます。"
  },
  {
    "id": "mba-strat-048",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "ファブレス経営とEMS",
    "difficulty": "standard",
    "question": "自社で生産工場を持たず、企画・製品設計・マーケティングに特化する企業（ファブレス）と、製造工程を受託して大量生産を行う企業（EMS）による水平分業モデルとして最も適切な説明はどれか。",
    "options": [
      "製造業の空洞化を招き、利益率を必ず悪化させる構造的欠陥モデルである",
      "原材料の調達から最終小売りまでを単一資本で囲い込む垂直統合戦略である",
      "固定資産投資負担を抑制しつつ、双方の特化による高い資本効率とスピードを実現するモデルである",
      "技術流出のリスクが一切存在しない安全な協業形態である"
    ],
    "answerIndex": 2,
    "explanation": "正解はCです。Apple（ファブレス）とFoxconn（EMS）の分業が象徴的です。自前で巨額の製造設備投資を抱えるリスクを回避し、コアとなるデザインや知財、ブランドに経営資源を集中投下して高収益（高ROIC）を実現します。"
  },
  {
    "id": "mba-strat-049",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "オープン＆クローズ戦略",
    "difficulty": "standard",
    "question": "自社のプラットフォーム普及や市場拡大のために一部の技術・インターフェースを標準化・無償開示（オープン）しつつ、コアコンピタンスとなる中核部品や差別化要素をブラックボックス・特許で厳重に保護（クローズ）する知財戦略はどれか。",
    "options": [
      "完全秘匿戦略（トレードシークレット化）",
      "オープンソース・コミュニティ戦略",
      "コピーレフト戦略",
      "オープン＆クローズ戦略"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（オープン＆クローズ戦略）です。東京大学の小川紘一教授らが提唱しました。全開示（オープン）すると模倣されて利益を失い、全秘匿（クローズ）すると仲間が集まらず孤立します。どの境界で開示しどの領域で収益を回収するかを巧みに設計します。"
  },
  {
    "id": "mba-strat-050",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "創発的戦略 (Emergent Strategy)",
    "difficulty": "standard",
    "question": "ヘンリー・ミンツバーグが提唱した、経営陣が机上で事前に綿密に策定した戦略ではなく、日々の現場の試行錯誤や予期せぬ環境変化への対応の中からボトムアップで自発的に形成される戦略はどれか。",
    "options": [
      "創発的戦略（Emergent Strategy）",
      "意図された戦略（Intended Strategy）",
      "公式戦略（Deliberate Strategy）",
      "指示的戦略（Command Strategy）"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（創発的戦略）です。ホンダの米国二輪車市場参入（大型車狙いから予期せぬ小型車スーパーカブの大ヒットへの転換）の事例で知られます。経営者は計画に縛られすぎず、現場の創発的な芽を認識し公式化する柔軟性が重要です。"
  },
  {
    "id": "mba-strat-051",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "しっぺ返し戦略 (Tit-for-Tat)",
    "difficulty": "standard",
    "question": "ゲーム理論の『繰り返し囚人のジレンマ』において、ロバート・アクセルロッドの実験で最も高い成果を挙げた、最初は協調から入り、相手が裏切ったら次回は裏切り、相手が協調に戻れば許して協調に戻る単純かつ強力な戦略はどれか。",
    "options": [
      "常に裏切る戦略（All-D）",
      "しっぺ返し戦略（Tit-for-Tat）",
      "トリガー戦略（永久報復戦略）",
      "ランダム戦略"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（しっぺ返し戦略）です。「親切（最初裏切らない）」「報復的（裏切りには即応酬）」「寛容（改心すれば許す）」「明快（意図が相手にすぐ伝わる）」という4特性を備えており、長期的な協調関係を維持するための戦略的示唆に富みます。"
  },
  {
    "id": "mba-strat-052",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "撤退障壁 (Exit Barriers)",
    "difficulty": "standard",
    "question": "不採算事業であるにもかかわらず、巨額の解雇費用、設備の転用不能性、顧客への供給義務、経営陣のプライドなどが原因で事業から撤退できない要因を何というか。",
    "options": [
      "参入障壁（Entry Barriers）",
      "スイッチング・障壁",
      "撤退障壁（Exit Barriers）",
      "法的規制障壁"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（撤退障壁）です。業界全体の撤退障壁が高い場合、不採算企業が撤退できず過剰供給が続き、業界全体の価格破壊と収益性悪化（共倒れ）を引き起こします。事業計画時には初期から撤退基準を定めておくことが不可欠です。"
  },
  {
    "id": "mba-strat-053",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "アンバンドリング戦略",
    "difficulty": "standard",
    "question": "従来ひとまとめ（パッケージ）で提供されていた製品やサービス、バリューチェーンを要素ごとに分解し、顧客が必要な特定の機能やパーツだけを切り離して安価・柔軟に提供する戦略手法はどれか。",
    "options": [
      "バンドリング戦略",
      "垂直統合戦略",
      "フルライン戦略",
      "アンバンドリング戦略（切り離し戦略）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（アンバンドリング戦略）です。新聞社からニュース記事単位で配信するポータルサイトや、銀行の総合サービスから「決済機能」だけを切り離したFinTechアプリ、アルバムから1曲単位で購入できる音楽配信などが典型です。"
  },
  {
    "id": "mba-strat-054",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "シナリオ・プランニング",
    "difficulty": "standard",
    "question": "将来を単一の数値目標として予測するのではなく、不確実性の高い外部環境の変動要因（ドライビングフォース）を抽出し、起こり得る複数の未来シナリオを描いて戦略の頑健性を検証する手法はどれか。",
    "options": [
      "シナリオ・プランニング",
      "線形回帰分析予測",
      "デルファイ法",
      "単年度予算編成"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（シナリオ・プランニング）です。ロイヤル・ダッチ・シェルがオイルショックを事前に予見・対応したことで一躍有名になりました。不確実性の軸（例：脱炭素政策の進展度×地政学リスクの強弱）を設定し、4象限等のストーリーを検証します。"
  },
  {
    "id": "mba-strat-055",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "両面市場 (Two-Sided Market)",
    "difficulty": "standard",
    "question": "クレジットカード（加盟店とカード会員）やライドシェア（乗客とドライバー）のように、プラットフォームが2つの異なる顧客グループを仲介し、一方の参加者増が他方の効用を高める間接的ネットワーク効果が働く市場を何というか。",
    "options": [
      "一面市場（Single-Sided Market）",
      "両面市場（Two-Sided Market / プラットフォーム市場）",
      "完全競争市場",
      "寡占独占市場"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（両面市場：ツーサイド・プラットフォーム）です。鶏と卵のジレンマを解消するため、一方のサイド（例：ユーザー）には無料や低価格で参加を促し（補助サイド）、もう一方（例：広告主や加盟店）から収益を回収する価格設計（マネタイズ構造）が鍵となります。"
  },
  {
    "id": "mba-strat-056",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "サービタイゼーション (Servitization)",
    "difficulty": "standard",
    "question": "製造業が単なる物理的製品の売り切りビジネスから脱却し、製品の利用データや保守、成果保証などを組み合わせた『サービス型ビジネスモデル（コト売り）』へとシフトする事業変革はどれか。",
    "options": [
      "OEM生産受託",
      "ダウンサイジング",
      "サービタイゼーション（サービス化 / XaaS）",
      "ディスインターミディエーション"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（サービタイゼーション）です。ロールス・ロイスが航空機エンジンを販売するのではなく「飛行時間当たりの稼働保証（Power by the Hour）」として課金するモデルや、コマツのKOMTRAXによる稼働管理サービスが代表例です。"
  },
  {
    "id": "mba-strat-057",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "経路依存性 (Path Dependency)",
    "difficulty": "standard",
    "question": "過去になされた技術選択、組織慣習、制度などの初期の偶然の決定が、その後の学習効果やスイッチング・コストによって自己強化され、たとえ後から優れた選択肢が登場しても容易に変更できなくなる現象はどれか。",
    "options": [
      "規模の不経済",
      "バタフライ効果",
      "サンクコストバイアス",
      "経路依存性（パス・ディペンデンシー）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（経路依存性）です。QWERTYキーボード配列のデファクト化や、古いレガシーITシステムから容易に脱却できない企業の技術選定などで見られます。歴史的経緯が現在の戦略的選択肢を強力に制約する要因となります。"
  },
  {
    "id": "mba-strat-058",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "デジタル・ディスラプション",
    "difficulty": "standard",
    "question": "デジタルテクノロジーや新しいデジタルビジネスモデル（例：シェアリングエコノミー、ストリーミング配信等）が、既存産業の価値提案やエコシステムを根底から破壊・再構築する現象はどれか。",
    "options": [
      "デジタル・ディスラプション（デジタル破壊）",
      "リモートワーク移行",
      "インターネット・バブル",
      "システム・インテグレーション"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（デジタル・ディスラプション）です。Netflixによるレンタルビデオ店の淘汰や、Uberによるタクシー業界の変革が典型です。既存企業が単に既存業務を電子化する（デジタイゼーション）だけでは、新規ディスラプターに対抗できません。"
  },
  {
    "id": "mba-strat-059",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "BOPビジネス (Base of the Pyramid)",
    "difficulty": "standard",
    "question": "C.K.プラハラードが提唱した、世界人口の大多数を占める年間所得が極めて低い低所得層・貧困層を単なる援助対象ではなく『潜在的な市場・生産パートナー』と捉え、持続可能なビジネスを通じて生活向上と収益化を両立する戦略はどれか。",
    "options": [
      "ラグジュアリー戦略",
      "BOPビジネス（Base / Bottom of the Pyramid）",
      "プライベートエクイティ投資",
      "クラウドファンディング"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（BOPビジネス）です。ユニリーバがインドの農村で女性起業家を通じて1回使い切りの小袋シャンプーを販売した事例が有名です。過酷な制約条件下での現地適応や極限のコスト低減設計（フルーガル・イノベーション）が求められます。"
  },
  {
    "id": "mba-strat-060",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "リーン・スタートアップ",
    "difficulty": "standard",
    "question": "エリック・リースが提唱した、不確実性の高い事業開発において、実用最小限の製品（MVP）を素早く市場に投入し、『構築・計測・学習（Build-Measure-Learn）』のループを高速で回してピボットを判断する手法はどれか。",
    "options": [
      "ウォーターフォール開発モデル",
      "ステージゲート法",
      "リーン・スタートアップ（Lean Startup）",
      "6シグマ品質管理"
    ],
    "answerIndex": 2,
    "explanation": "正解は C（リーン・スタートアップ）です。従来の完璧な事業計画書を作ってから巨額投資を行うアプローチを否定し、事実に基づいた学習（検証された学び）を通じて、無駄なリソース消費を最小化しながら成功確度を高めます。"
  },
  {
    "id": "mba-strat-061",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "実現された戦略 (Realized Strategy)",
    "difficulty": "standard",
    "question": "ミンツバーグの戦略モデルにおいて、企業が当初意図した戦略（Intended Strategy）のうち実現しなかった『未実現の戦略』を除き、現場の柔軟な対応から生まれた『創発的戦略』が加わって最終的に実行された戦略を何というか。",
    "options": [
      "棄却された戦略（Unrealized Strategy）",
      "熟慮された戦略（Deliberate Strategy）",
      "形式的戦略（Formal Strategy）",
      "実現された戦略（Realized Strategy）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（実現された戦略）です。現実のビジネス環境では、計画通りに100%進むことは稀であり、当初計画（意図した戦略）の軌道修正と、現場での臨機応変な創発的戦略の融合によって『実現された戦略』が形成されます。"
  },
  {
    "id": "mba-strat-062",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "補完業者・補完財 (Complementors)",
    "difficulty": "standard",
    "question": "ポーターの5フォースにブランドンバーガー＆ネイルバフが第6の力として加えた『バリュー・ネット』において、自社の製品・サービスと組み合わされることで顧客にとっての自社製品の価値を高める存在（例：ゲーム機に対するゲームソフト）はどれか。",
    "options": [
      "補完業者（Complementors / 補完財）",
      "代替品提供企業（Substitutes）",
      "新規参入企業（New Entrants）",
      "供給業者（Suppliers）"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（補完業者）です。ハードウェアとソフトウェア、OSとアプリケーション、プリンターとトナーのように、補完財が豊富に存在するほどコア製品の魅力が高まります。自社製品だけでなく補完エコシステムをいかに活性化するかが競争の鍵です。"
  },
  {
    "id": "mba-strat-063",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "リポジショニング (Repositioning)",
    "difficulty": "standard",
    "question": "成熟化や陳腐化、競合激化によってブランド価値や市場シェアが低下した製品に対し、ターゲット顧客や訴求する知覚価値（バリュープロポジション）を再定義して市場での位置づけを転換する戦略はどれか。",
    "options": [
      "コストリーダーシップへの転換",
      "リポジショニング戦略",
      "事業清算・スクラップ",
      "価格弾力性の引き上げ"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（リポジショニング）です。例えば、かつて作業着中心だった衣料メーカーが「高機能アウトドア・カジュアルウェア」として再定義した事例や、芳香剤を「除菌消臭スプレー」として再定義した事例などが成功例です。"
  },
  {
    "id": "mba-strat-064",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "カーブアウト (Carve-out)",
    "difficulty": "standard",
    "question": "大企業が特定の事業部門や子会社を社外へ切り離し（独立させ）、外部のベンチャーキャピタルや戦略パートナーからの出資を受け入れて別会社として迅速な成長を目指す手法はどれか。",
    "options": [
      "インサイダー取引",
      "敵対的TOB",
      "カーブアウト（Carve-out）",
      "株式交換による完全子会社化"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（カーブアウト）です。親会社の硬直的な意思決定や給与体系から切り離し、外部資金と独立したインセンティブ設計（ストックオプション等）を導入することで、成長スピードを加速させ企業価値を最大化します。"
  },
  {
    "id": "mba-strat-065",
    "category": "strategy",
    "categoryName": "経営戦略 (Strategy)",
    "term": "レベニューモデルとマネタイズ設計",
    "difficulty": "standard",
    "question": "ビジネスモデルの設計において、『誰から、どのような名目で、どのような形態・頻度で対価（キャッシュ）を回収するのか』という課金・収益化の具体的仕組みを規定する概念はどれか。",
    "options": [
      "内部統制モデル",
      "コーポレート・ガバナンス・コード",
      "キャピタル・ストラクチャー（資本構成）",
      "レベニューモデル（収益モデル / マネタイズ設計）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（レベニューモデル）です。定額課金（サブスクリプション）、従量課金、広告収益モデル、レベニューシェア、ジレットモデル（カミソリ本体を安くし替刃で継続課金）など多様なモデルがあり、顧客提供価値との整合性が成否を分けます。"
  },
  {
    "id": "mba-mkt-023",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "イノベーター理論 (普及理論)",
    "difficulty": "standard",
    "question": "E.M.ロジャーズの普及理論において、新商品が市場に導入された際に、全体の約13.5%を占め、オピニオンリーダーとして他の消費者の購買行動に強い影響を与える顧客層はどれか。",
    "options": [
      "イノベーター（革新者：2.5%）",
      "アーリーアダプター（初期採用者：13.5%）",
      "アーリーマジョリティ（前期追随者：34%）",
      "レガード（遅滞者：16%）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（アーリーアダプター）です。新技術への冒険心だけでなく実用的なベネフィットにも敏感であり、流行の発信源（インフルエンサー）として市場への普及拡大を決定づける極めて重要なセグメントです。"
  },
  {
    "id": "mba-mkt-024",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "AARRRモデル (海賊指標)",
    "difficulty": "standard",
    "question": "グロースハックにおいて、Webサービスやアプリのユーザーライフサイクルを5つの段階に分解して最適化するフレームワーク（AARRR）の頭文字の正しい組み合わせはどれか。",
    "options": [
      "Awareness, Action, Repeat, Return, Recommend",
      "Advertising, Access, Reading, Reaction, Result",
      "Acquisition（獲得）, Activation（活性化）, Retention（継続）, Referral（紹介）, Revenue（収益化）",
      "Attention, Appeal, Research, Request, Retain"
    ],
    "answerIndex": 2,
    "explanation": "正解はCです。デイブ・マクルーアが提唱した「パイレーツ・メトリクス（海賊指標）」です。特にユーザーが価値を実感する瞬間（Activation）や、離脱を防ぐ継続率（Retention）の改善がユニットエコノミクス健全化の基盤となります。"
  },
  {
    "id": "mba-mkt-025",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "インバウンド・マーケティング",
    "difficulty": "standard",
    "question": "従来のテレアポや一方的な広告（アウトバウンド）ではなく、ブログやホワイトペーパー、SNSなどで顧客にとって有益なコンテンツを発信し、見込み顧客自らに『発見してもらう』マーケティング手法はどれか。",
    "options": [
      "ポスティング・マーケティング",
      "ダイレクト・レスポンス・マーケティング",
      "コールドコール営業",
      "インバウンド・マーケティング"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（インバウンド・マーケティング）です。HubSpotのブライアン・ハリガンらが提唱しました。「Attract（惹きつける）」「Engage（関係構築）」「Delight（感動させる）」のサイクルを通じて、信頼に基づく持続的な顧客獲得を目指します。"
  },
  {
    "id": "mba-mkt-026",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "グロースハック (Growth Hacking)",
    "difficulty": "standard",
    "question": "莫大なマーケティング広告費に頼るのではなく、プロダクト開発とデータ分析を一体化させ、高速なA/BテストやUX改善を繰り返すことでプロダクト自体に自己増殖的な成長機構を組み込む手法はどれか。",
    "options": [
      "グロースハック（Growth Hacking）",
      "ブランディング広告キャンペーン",
      "マスメディア・タイアップ",
      "訪問販売（フィールドセールス）"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（グロースハック）です。ショーン・エリスが提唱し、Dropbox（紹介プログラムで容量プレゼント）やHotmail（メール末尾の署名リンク）などの爆発的成長を牽引したことで世界的に定着しました。"
  },
  {
    "id": "mba-mkt-027",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "サービス・ドミナント・ロジック (S-DL)",
    "difficulty": "standard",
    "question": "バルゴとラッシュが提唱した、有形財（モノ）と無形財（サービス）を区別せず、あらゆる経済交換はサービス（知識・スキルの適用）の交換であり、価値は企業が一方的に創るのではなく『顧客との使用過程で共創される（使用価値）』とするパラダイムはどれか。",
    "options": [
      "グッズ・ドミナント・ロジック（G-DL）",
      "サービス・ドミナント・ロジック（S-DL）",
      "クラウドソーシング理論",
      "サプライチェーン・マネジメント"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（サービス・ドミナント・ロジック）です。従来は製品を販売した時点の交換価値（価格）を重視していましたが、S-DLでは顧客が製品を実際に使い課題解決や体験を得る「使用価値（Value-in-use）」と「価値共創（Co-creation）」を中核に据えます。"
  },
  {
    "id": "mba-mkt-028",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "リテンション・マーケティング",
    "difficulty": "standard",
    "question": "新規顧客の獲得コストが既存顧客維持コストの5倍かかる（1:5の法則）環境下で、既存顧客の満足度を高め、解約・離脱を防ぎリピート利用や契約更新を促すマーケティング施策はどれか。",
    "options": [
      "プロスペクティング（新規開拓営業）",
      "ペネトレーション・プライシング",
      "リテンション・マーケティング（維持マーケティング）",
      "マス・アドバタイジング"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（リテンション・マーケティング）です。SaaSやサブスクリプション型ビジネスにおいて極めて重要で、既存顧客の離脱率を5%改善するだけで利益が25〜95%改善する（5:25の法則）とされています。"
  },
  {
    "id": "mba-mkt-029",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "センサリー・マーケティング (五感マーケティング)",
    "difficulty": "standard",
    "question": "視覚情報だけでなく、聴覚（BGM・音響）、嗅覚（香り・アロマ）、触覚（パッケージの手触り）、味覚といった五感すべてに訴求することで、無意識下で消費者の感情やブランド記憶を刺激する手法はどれか。",
    "options": [
      "ダイレクトメール広告",
      "デジタル・サイネージ",
      "テレマーケティング",
      "センサリー・マーケティング（感覚マーケティング）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（センサリー・マーケティング）です。高級ホテルのロビー独自の香り、高級車のドアが閉まる重厚な音、飲料缶を開ける爽快なクリック音など、五感の刺激を通じて他社が真似できない情緒的価値やブランド愛着を形成します。"
  },
  {
    "id": "mba-mkt-030",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "パーミッション・マーケティング",
    "difficulty": "standard",
    "question": "セス・ゴーディンが提唱した、消費者の注意を無理やり奪う『割り込み型広告（Interruption）』を廃し、見込み客から明示的な許可・同意（オプトイン）を得た上で有益な情報を段階的に提供していく手法はどれか。",
    "options": [
      "パーミッション・マーケティング",
      "スパム・マーケティング",
      "ステルス・マーケティング",
      "ポップアップ広告"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（パーミッション・マーケティング）です。プライバシー保護規制（GDPR等）が強化される現代において、顧客が『自ら望んで情報を受け取る関係』を丁寧に構築することが長期的なエンゲージメントと高いCVRにつながります。"
  },
  {
    "id": "mba-mkt-031",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "カスタマー・サクセス (Customer Success)",
    "difficulty": "standard",
    "question": "顧客からの問い合わせを待ってトラブルに対応する従来の受動的なカスタマーサポートとは異なり、能動的に顧客に関与してプロダクト活用の成果（サクセス）を支援し、解約防止やアップセル・クロスセルを実現する組織機能はどれか。",
    "options": [
      "コールセンター受付窓口",
      "カスタマー・サクセス（CS）",
      "総務・法務部",
      "インサイドセールス（IS）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（カスタマー・サクセス）です。SaaSビジネスの台頭に伴い発展しました。導入支援（オンボーディング）、ヘルススコアのモニタリング、活用提案などをプロアクティブに実施し、顧客のLTV（生涯価値）を最大化します。"
  },
  {
    "id": "mba-mkt-032",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ABM (Account Based Marketing)",
    "difficulty": "standard",
    "question": "B2Bマーケティングにおいて、不特定多数のリードを広く集めるのではなく、自社にとって最も戦略的価値の高い特定の重要企業（アカウント）をターゲットとして選定し、個社ごとに最適化された施策を展開する戦略はどれか。",
    "options": [
      "マス・マーケティング",
      "アフィリエイト・マーケティング",
      "ABM（アカウント・ベースド・マーケティング）",
      "バズ・マーケティング"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（ABM）です。営業部門とマーケティング部門が緊密に連携し、ターゲット大企業の組織構造、意思決定者、個別課題を徹底分析した上でパーソナライズされた提案を行い、大型受注の獲得とROIの極大化を図ります。"
  },
  {
    "id": "mba-mkt-033",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "フック・モデル (Hook Model)",
    "difficulty": "standard",
    "question": "ニール・イヤールが提唱した、ユーザーが無意識のうちにサービスを習慣的に利用（プロダクトへの依存・定着）する心理的ループ『トリガー → アクション → 可変型リワード → 投資』の4ステップからなるモデルはどれか。",
    "options": [
      "AIDMAモデル",
      "デュアルプロセス理論",
      "バス普及モデル",
      "フック・モデル（Hook Model）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（フック・モデル）です。SNSの通知（トリガー）、アプリ起動（アクション）、何件いいねがついたか予測できない期待（可変的報酬）、データ入力や友達追加（投資）というサイクルが回ることで習慣が形成されます。"
  },
  {
    "id": "mba-mkt-034",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "RFM分析",
    "difficulty": "standard",
    "question": "顧客の過去の購買履歴データに基づき、『最終購買日（Recency）』『購買頻度（Frequency）』『累計購買金額（Monetary）』の3つの指標で顧客をランク分け・セグメンテーションするCRM分析手法はどれか。",
    "options": [
      "RFM分析",
      "SWOT分析",
      "ABC分析（重点分析）",
      "因子分析"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（RFM分析）です。優良顧客、休眠顧客、新規顧客、低額安定顧客などのグループに分類することで、各セグメントに最適なアプローチ（限定クーポン、フォローメール、休眠復帰施策等）を効率的に実施できます。"
  },
  {
    "id": "mba-mkt-035",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ブランド・アーキテクチャ",
    "difficulty": "standard",
    "question": "P&Gのように、各製品（パンテーン、アリエール、ファブリーズ等）が独立した強力な個別ブランドを持ち、コーポレートブランドの影を前面に出さないブランドポートフォリオ戦略の呼称はどれか。",
    "options": [
      "ブランデッド・ハウス（Branded House）",
      "ハウス・オブ・ブランズ（House of Brands）",
      "コーポレート・ブランド統合戦略",
      "サブブランド戦略"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（ハウス・オブ・ブランズ）です。製品ごとの明確なポジショニングが可能で、1つのブランドで不祥事や失敗が起きても他製品や企業全体への風評被害を遮断できるメリットがあります。一方、ブランド構築コストが重複するデメリットもあります。"
  },
  {
    "id": "mba-mkt-036",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "プッシュ戦略とプル戦略",
    "difficulty": "standard",
    "question": "マーケティングのプロモーション戦略において、メーカーが卸売業者や小売店などの流通チャネルに対してリベートや販売奨励金を提供し、店頭で自社製品を積極的に販売させるアプローチはどれか。",
    "options": [
      "プル戦略（Pull Strategy）",
      "スキミング戦略",
      "プッシュ戦略（Push Strategy）",
      "ステルス戦略"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（プッシュ戦略）です。流通経路を通じて製品を消費者に押し出す（Push）戦略です。対するプル戦略は、マスメディア広告やSNSでエンドユーザーに直接訴求し、「指名買い」によって小売店に仕入れを促す（Pull）戦略です。"
  },
  {
    "id": "mba-mkt-037",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "アトリビューション分析",
    "difficulty": "standard",
    "question": "顧客が商品購入や問い合わせ（コンバージョン）に至るまでに接触した複数の接点（検索広告、SNS、記事、メール等）に対し、最終クリックだけでなく各広告媒体の貢献度を適切に配分・評価する手法はどれか。",
    "options": [
      "クラスタリング分析",
      "A/Bテスト",
      "LTV計算",
      "アトリビューション分析（貢献度分析）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（アトリビューション分析）です。ラストクリックだけを評価すると初回認知を作ったSNSやバナー広告が過小評価されてしまいます。線形モデル、減衰モデル、データドリブンモデル等を用いて広告予算配分を最適化します。"
  },
  {
    "id": "mba-mkt-038",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ナッジ理論 (Nudge Theory)",
    "difficulty": "standard",
    "question": "行動経済学（リチャード・セイラーら）において、人々に経済的インセンティブを与えたり強制・禁止したりするのではなく、選択肢の提示方法（デフォルト設定等）を工夫することで、自然と望ましい行動を選択させる手法はどれか。",
    "options": [
      "ナッジ（Nudge：そっと肘で押す）",
      "ハードロー（法的拘束力）",
      "価格破壊（Price War）",
      "レモン市場モデル"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（ナッジ）です。例えば『初期状態で設定がONになっている（デフォルト効果）』『他人の多くが選んでいると表示する（社会的証明）』などにより、ユーザーの自主性を損なわずに望ましい意思決定を促します。"
  },
  {
    "id": "mba-mkt-039",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "UGC (ユーザー生成コンテンツ)",
    "difficulty": "standard",
    "question": "企業が制作した公式プロモーション素材ではなく、一般消費者やユーザー自身がSNS、レビューサイト、ブログなどに投稿した写真・動画・口コミコンテンツを指す用語はどれか。",
    "options": [
      "PGC（Professionally Generated Content）",
      "UGC（User Generated Content）",
      "SEO（検索エンジン最適化）",
      "PR（パブリック・リレーションズ）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（UGC）です。現代の消費者は企業発信の広告メッセージに対して警戒心を持つ一方、実際のユーザーによるリアルな投稿やレビュー（UGC）に高い信頼を置くため、購買決定に強い影響力を持ちます。"
  },
  {
    "id": "mba-mkt-040",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "デカップリング理論 (Decoupling)",
    "difficulty": "standard",
    "question": "タレス・テイシェイラが提唱した、新興デジタル企業が既存企業の顧客バリューチェーン全体（評価・選定・購入・使用等）を丸ごと奪うのではなく、特定の一段階（例：購入のみ、評価のみ）だけを切り離して奪取する破壊モデルはどれか。",
    "options": [
      "フルスタック統合",
      "コングロマリット多角化",
      "デカップリング理論（顧客活動の分断）",
      "サプライチェーン最適化"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（デカップリング）です。例えば、店舗で商品を確かめた顧客が購入段階だけ安価なAmazonで行う（ショールーミング）ように、既存プレイヤーの重い固定費負担を利用しながら美味しい部分だけを抜き取ります。"
  },
  {
    "id": "mba-mkt-041",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "コホート分析 (Cohort Analysis)",
    "difficulty": "standard",
    "question": "ユーザーを『登録年月』や『初回購入時期』などの共通の属性や行動を持つグループ（コホート）に分類し、時間経過に伴うリピート率や利用継続率の変化をマトリクス形式で追跡・比較する分析手法はどれか。",
    "options": [
      "クロス集計分析",
      "重回帰分析",
      "パレート分析",
      "コホート分析"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（コホート分析）です。全体の平均継続率だけを見ていると、直近の施策改善で新規獲得したユーザーの定着率が向上しているのか、過去ユーザーの離脱が悪化しているのかが判別できないため、コホート別の推移検証が不可欠です。"
  },
  {
    "id": "mba-mkt-042",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ブランド・アイデンティティ vs ブランド・イメージ",
    "difficulty": "standard",
    "question": "デービッド・アーカーのブランド論において、『企業側が自社ブランドを顧客にどのように認識・記憶してもらいたいかという意図された旗印』を何と呼ぶか。",
    "options": [
      "ブランド・アイデンティティ",
      "ブランド・イメージ",
      "ブランド・エクイティ",
      "ブランド・ロイヤルティ"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（ブランド・アイデンティティ）です。企業が自ら定義する目指す姿（発信側）が「ブランド・アイデンティティ」であり、それが顧客や市場の頭の中に実際にどのように知覚されているか（受信側）が「ブランド・イメージ」です。"
  },
  {
    "id": "mba-mkt-043",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "狩野モデル (KANO Model)",
    "difficulty": "standard",
    "question": "製品・サービスの品質要素のうち、『満たされていても当たり前と受け止められ満足度は上がらないが、欠けていると顧客に強い不満を引き起こす品質』を狩野モデルでは何と呼ぶか。",
    "options": [
      "魅力的品質（Attractive Quality）",
      "当たり前品質（Must-be Quality）",
      "一元的品質（One-dimensional Quality）",
      "無関心品質（Indifferent Quality）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（当たり前品質）です。スマートフォンの通話が途切れないことやホテルの部屋の清潔さなどが該当します。一方、無くても不満はないがあれば顧客を歓喜させるものは「魅力的品質」と呼ばれます。"
  },
  {
    "id": "mba-mkt-044",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "メンタル・アカウンティング (心理的財布)",
    "difficulty": "standard",
    "question": "行動経済学者リチャード・セイラーが提唱した、同じ1万円の金銭であっても、苦労して稼いだ給与と宝くじや臨時ボーナスで得たお金とで、人間が無意識に異なる心理的勘定（財布）を設けて浪費しやすくなる現象はどれか。",
    "options": [
      "機会費用の無視",
      "確実性効果",
      "メンタル・アカウンティング（心理的会計）",
      "サンクコスト効果"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（メンタル・アカウンティング）です。マーケティングでは、「自分へのご褒美」「旅先のレジャー用財布」など特別な文脈（勘定枠）を設定することで、価格への抵抗感を下げ高付加価値商品を訴求する実務に応用されます。"
  },
  {
    "id": "mba-mkt-045",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "市場規模分析 (TAM・SAM・SOM)",
    "difficulty": "standard",
    "question": "スタートアップの事業計画や市場規模の推計において、『自社の現在のビジネスモデルや現実的な販売チャネル、競争環境を踏まえて実際に獲得可能な市場規模』を示す指標はどれか。",
    "options": [
      "TAM（Total Addressable Market：全体潜在市場）",
      "SAM（Serviceable Addressable Market：有効市場）",
      "GDP（国内総生産）",
      "SOM（Serviceable Obtainable Market：獲得可能市場）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（SOM）です。市場全体（TAM）→ 自社製品がアプローチ可能な市場（SAM）→ 現実的に数年内で獲得を目指す市場（SOM）の3階層で分解することで、投資家への説得力や現実的な事業計画の精度を高めます。"
  },
  {
    "id": "mba-mkt-046",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "チャネル・コンフリクト",
    "difficulty": "standard",
    "question": "メーカーが自社の直販ECサイトを立ち上げたり値下げ販売を開始した際に、従来からの主要な販売先である既存の卸売業者や実店舗小売店との間で利害が対立し、取引停止などの摩擦が生じる現象はどれか。",
    "options": [
      "チャネル・コンフリクト（流通摩擦）",
      "カニバリゼーション",
      "ディスインフレーション",
      "サプライチェーン・ボトルネック"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（チャネル・コンフリクト）です。D2C展開やオムニチャネル化の推進時によく直面する課題です。限定商品の差別化、店舗受け取りサービスの提供、店舗への送客インセンティブ設計などで摩擦を緩和する工夫が求められます。"
  },
  {
    "id": "mba-mkt-047",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "プロスペクト理論と損失回避性",
    "difficulty": "standard",
    "question": "ダニエル・カネマンらが提唱したプロスペクト理論において、人間は同額の『得（利益）』から得る喜びよりも『損（損失）』から受ける苦痛を約2〜2.5倍強く感じる心理的バイアスを何というか。",
    "options": [
      "現状維持バイアス",
      "損失回避性（Loss Aversion）",
      "双曲割引",
      "後知恵バイアス"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（損失回避性）です。マーケティングでは「今買わないと損をする（限定性・希少性の強調）」や「全額返金保証（購入による損失リスクの完全除去）」といった訴求が絶大な効果を発揮する理論的根拠となっています。"
  },
  {
    "id": "mba-mkt-048",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "リターゲティング広告",
    "difficulty": "standard",
    "question": "自社のWebサイトやECサイトを過去に訪問したことがあるユーザーに対し、閲覧履歴やカート放棄データに基づいて他サイトやSNS上で再度広告を表示し、再訪と購買を促す手法はどれか。",
    "options": [
      "純広告（タイアップ広告）",
      "アフィリエイト広告",
      "リターゲティング広告（リマーケティング）",
      "オーガニック検索流入"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（リターゲティング広告）です。検討確度が高い層にピンポイントでアプローチできるため高CVRを期待できる一方、過度な頻度で配信するとユーザーにしつこさや不快感（フリクエンシー過多）を与えるリスクがあります。"
  },
  {
    "id": "mba-mkt-049",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "マイクロインフルエンサー",
    "difficulty": "standard",
    "question": "フォロワー数が数十万〜数百万人規模のメガインフルエンサーに対し、フォロワー数1万〜数万人程度で特定分野（美容・キャンプ・料理等）に特化し、ファンとの距離が近く非常に高いエンゲージメント率を持つ発信者を何というか。",
    "options": [
      "アンバサダー",
      "芸能人セレブリティ",
      "アーリーマジョリティ",
      "マイクロインフルエンサー"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（マイクロインフルエンサー）です。メガインフルエンサーに比べてフォロワーとの双方向コミュニケーションが密で信頼感が高く、特定ターゲット層に対して費用対効果の高い購買転換をもたらすケースが多いのが特徴です。"
  },
  {
    "id": "mba-mkt-050",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "エンゲージメント率 (Engagement Rate)",
    "difficulty": "standard",
    "question": "SNSマーケティングにおいて、単なる投稿の表示回数（インプレッション）やフォロワー数だけでなく、いいね・コメント・シェア・クリックなどユーザーが実際に能動的な反応を示した割合を測定する重要指標はどれか。",
    "options": [
      "エンゲージメント率（Engagement Rate）",
      "クリックスルー率（CTR）",
      "コンバージョン率（CVR）",
      "バウンス率（直帰率）"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（エンゲージメント率）です。アルゴリズムが投稿の質を評価する基準として重視されており、フォロワー数が見かけ上多くてもエンゲージメント率が低ければ実際のリーチや購買影響力は限定的となります。"
  },
  {
    "id": "mba-mkt-051",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ソーシャルリスニング (Social Listening)",
    "difficulty": "standard",
    "question": "X（旧Twitter）やInstagramなどのSNS、ブログ、レビューサイト上の投稿データを収集・分析し、自社ブランドや競合に対する消費者のリアルな感情（ポジ・ネガ）や隠れたニーズを把握する調査手法はどれか。",
    "options": [
      "グループインタビュー（FGI）",
      "ソーシャルリスニング",
      "街頭アンケート調査",
      "ミステリーショッパー（覆面調査）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（ソーシャルリスニング）です。アンケートのような質問バイアスを受けない『消費者のフィルターのない本音』をリアルタイムに検知できるため、新商品開発や炎上対策の早期覚知に不可欠なツールとなっています。"
  },
  {
    "id": "mba-mkt-052",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "カスタマー・エクスペリエンス (CX)",
    "difficulty": "standard",
    "question": "製品の物理的な機能や価格だけでなく、購入前の情報探索から購入手続き、利用、アフターサポート、解約に至るあらゆる顧客接点（タッチポイント）を通じて顧客が得る総体的な知覚体験価値を何というか。",
    "options": [
      "UI（ユーザー・インターフェース）",
      "CS（顧客満足度調査）",
      "CX（カスタマー・エクスペリエンス / 顧客体験）",
      "UXデザイン（単一アプリの操作性）"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（CX）です。個別の部門ごとの対応が良くても、手続きのたらい回しやWebと店舗の連携不備などがあるとCX全体は低下します。エンド・ツー・エンドでのジャーニー全体を一貫して設計・改善することが競争力の源泉です。"
  },
  {
    "id": "mba-mkt-053",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "フレーミング効果 (Framing Effect)",
    "difficulty": "standard",
    "question": "全く同じ客観的情報であっても、『手術後の生存率90%』と伝えるか『手術後の死亡率10%』と伝えるかのように、情報提示の切り口（フレーム）を変えることで受け手の意思決定や感情が大きく変化する認知バイアスはどれか。",
    "options": [
      "ハロー効果",
      "確証バイアス",
      "クレショフ効果",
      "フレーミング効果（Framing Effect）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（フレーミング効果）です。「脂肪分10%含有」と書くより「90%無脂肪」と表示する方が健康志向の消費者に好まれるなど、マーケティングコピーや価格設定の表現において極めて強力な心理効果です。"
  },
  {
    "id": "mba-mkt-054",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "バイラル係数 (Kファクター)",
    "difficulty": "standard",
    "question": "プロダクトやサービスの口コミ・紹介による自己増殖力を示す指標で、『既存ユーザー1人が平均して何人の新規ユーザーを連れてくるか』を表し、この値が1を超えると指数関数的な自然成長が起きる係数はどれか。",
    "options": [
      "バイラル係数（Kファクター）",
      "シャープレシオ",
      "相関係数",
      "ジニ係数"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（バイラル係数：K-factor）です。K = （ユーザー1人当たりの招待送信数）×（招待された人の登録転換率）で算出されます。K > 1を達成すると、有料広告に頼らずともプロダクトがウイルスのように爆発的拡大（バイラル成長）を遂げます。"
  },
  {
    "id": "mba-mkt-055",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "マーケティング・オートメーション (MA)",
    "difficulty": "standard",
    "question": "見込み客（リード）の獲得から育成（ナーチャリング）、確度判定（スコアリング）に至る一連のマーケティング業務を自動化・効率化し、最適なタイミングでパーソナライズされたメールやコンテンツを届けるソフトウェアツールはどれか。",
    "options": [
      "SFA（営業支援システム）",
      "MA（マーケティング・オートメーション）",
      "ERP（統合基幹業務システム）",
      "RPA（ロボティック・プロセス・オートメーション）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（MA）です。Webサイトの閲覧履歴や資料ダウンロード等の行動ログに基づいて見込み客の購買意欲（スコア）を自動判定し、ホットリードになった段階で営業部門（インサイドセールス）へ引き継ぐことで成約率を高めます。"
  },
  {
    "id": "mba-mkt-056",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "アンカリング効果 (Anchoring Effect)",
    "difficulty": "standard",
    "question": "最初に提示された特定の数値や価格（アンカー）が基準点となり、その後の価値判断や価格評価が無意識のうちに引きずられて歪んでしまう認知バイアスはどれか。",
    "options": [
      "サンクコストバイアス",
      "バンドワゴン効果",
      "アンカリング効果（Anchoring Effect）",
      "ピグマリオン効果"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（アンカリング効果）です。「通常価格50,000円のところ、今なら特別価格29,800円！」のように元値を先に見せることで、29,800円が非常に割安であると知覚させるプライシング手法の基礎理論です。"
  },
  {
    "id": "mba-mkt-057",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "知覚マップ (Perceptual Map)",
    "difficulty": "standard",
    "question": "ターゲット顧客の心理の中で、自社ブランドや競合製品がどのような位置（イメージや特徴）を占めているかを、重要な2つの購買決定要因（KBF）をX軸・Y軸に取って視覚的にプロットした図表はどれか。",
    "options": [
      "ヒートマップ",
      "パレート図",
      "ポジショニングマップ（知覚マップ）",
      "ガントチャート"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（知覚マップ / ポジショニングマップ）です。自社製品の独自ポジションを明確にし、競合との直接対決を避けられるブルーオーシャン領域（空白地帯）を見つけ出すために活用されます。"
  },
  {
    "id": "mba-mkt-058",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ゼロパーティ・データ (Zero-Party Data)",
    "difficulty": "standard",
    "question": "Forrester Researchが定義した、顧客が自発的かつ意図的に企業に対して共有するデータ（好み、購買意図、個人的な興味関心、希望するコミュニケーション方法など）を指す用語はどれか。",
    "options": [
      "ファーストパーティ・データ",
      "サードパーティ・データ",
      "オープンデータ",
      "ゼロパーティ・データ（Zero-Party Data）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（ゼロパーティ・データ）です。Cookie規制の強化に伴い注目されています。アンケートや診断コンテンツを通じて顧客自身が進んで提供した高精度なデータであり、プライバシーに配慮しつつ高度なパーソナライズを実現できます。"
  },
  {
    "id": "mba-mkt-059",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ショールーミングとウェブルーミング",
    "difficulty": "standard",
    "question": "消費者が実店舗で実際に商品を手に取ってサイズや質感を確認（ショールーミング）した後に安価なネット通販で購入する行動に対し、ネットで事前に口コミや価格を徹底調査した上で最終的に実店舗に出向いて購入する行動を何というか。",
    "options": [
      "ウェブルーミング（Webrooming）",
      "ソーシャルコマース",
      "O2O（Online to Offline）",
      "クリック＆コレクト"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（ウェブルーミング）です。「送料を払いたくない」「今日すぐに手に入れたい」「実物を見て安心したい」といったニーズから発生します。店舗とECのデータを統合し、どちらの購買行動にも柔軟に対応するオムニチャネル戦略が求められます。"
  },
  {
    "id": "mba-mkt-060",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "顧客努力指標 (CES: Customer Effort Score)",
    "difficulty": "standard",
    "question": "顧客体験（CX）の評価指標の一つで、『問い合わせや問題解決、購入手続きにおいて、顧客がどれだけの労力・手間（Effort）を強いられたか』を測定し、顧客維持率との相関が高い指標はどれか。",
    "options": [
      "NPS（ネット・プロモーター・スコア）",
      "CES（カスタマー・エフォート・スコア / 顧客努力指標）",
      "CSAT（顧客満足度）",
      "CVR（コンバージョン率）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（CES）です。ハーバード・ビジネス・レビューの研究等により、「顧客を感動させる」ことよりも「顧客にかかる余計な手間やストレスを極限まで減らす」ことの方が顧客の離脱防止（ロイヤルティ維持）に寄与することが明らかになっています。"
  },
  {
    "id": "mba-mkt-061",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ヴェブレン効果とスノッブ効果",
    "difficulty": "standard",
    "question": "価格が高くなるほど『見せびらかしたい』という顕示的心理から需要が増加する現象（ヴェブレン効果）に対し、『他人が持っていると欲しくなくなり、他人と違う希少なものを持ちたい』という心理から需要が変化する効果はどれか。",
    "options": [
      "バンドワゴン効果（流行同調効果）",
      "アンカリング効果",
      "スノッブ効果（スノッブ現象）",
      "デコイ効果"
    ],
    "answerIndex": 2,
    "explanation": "正解はC（スノッブ効果）です。大衆化すると価値が落ちるため、限定生産や会員制などの希少性コントロールが鍵となります。一方、他人が持っているほど人気が加速するのは「バンドワゴン効果」です。"
  },
  {
    "id": "mba-mkt-062",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "プライベートブランド戦略 (PB戦略)",
    "difficulty": "standard",
    "question": "流通業者（小売・卸）自らが企画・開発し、メーカーに製造を委託して独自のブランド名で自社店舗限定で販売する商品（PB）の特徴として、ナショナルブランド（NB）と比較した説明として最も適切なものはどれか。",
    "options": [
      "NBに比べて広告宣伝費や中間マージンを削減でき、低価格または高利益率を実現しやすい",
      "全国どこでも買えるため、NBよりもブランド認知度が圧倒的に高くなりやすい",
      "在庫リスクをすべて受託製造メーカー側に負担させることができるため、小売店のリスクは皆無である",
      "メーカー側の開発力を完全に排除するため、常にNBより品質が著しく劣る"
    ],
    "answerIndex": 0,
    "explanation": "正解はAです。流通主導で中間流通コストや大規模マス広告費を抑制できるため、消費者に割安で提供しながら小売側の売上総利益率（マージン）を高められます。一方で、売れ残った際の在庫リスクは小売業者が負うことになります。"
  },
  {
    "id": "mba-mkt-063",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ダークパターン (Dark Patterns)",
    "difficulty": "standard",
    "question": "WebサイトやアプリのUI/UXデザインにおいて、無料体験から意図せず有料サブスクリプションへ自動更新させたり、解約ボタンを極端に見つけにくくするなど、ユーザーを騙して意図しない行動を取らせる倫理上問題のある手法はどれか。",
    "options": [
      "ナッジ（親切な後押し）",
      "グロースハック（健全な検証）",
      "ゲーミフィケーション",
      "ダークパターン（欺瞞的デザイン）"
    ],
    "answerIndex": 3,
    "explanation": "正解はD（ダークパターン）です。短期的なCVRや課金売上を伸ばせても、顧客の信頼を著しく損ない、ブランド毀損や法的規制（各国の消費者保護法規制等）の対象となるため、現代のマーケティング倫理として厳しく排除が求められています。"
  },
  {
    "id": "mba-mkt-064",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "ZMOT (Zero Moment of Truth)",
    "difficulty": "standard",
    "question": "Googleが提唱した購買意思決定モデルにおいて、消費者が実店舗の店頭（FMOT）に立つ前、あるいは商品を購入する前に、手元のスマートフォンやPCで検索・口コミ比較を行い、購入の意思決定をすでに完了させている瞬間を何というか。",
    "options": [
      "ZMOT（Zero Moment of Truth）",
      "FMOT（First Moment of Truth：店頭陳列での第1の瞬間）",
      "SMOT（Second Moment of Truth：商品使用時の第2の瞬間）",
      "TMOT（Third Moment of Truth：ファン化の第3の瞬間）"
    ],
    "answerIndex": 0,
    "explanation": "正解はA（ZMOT）です。P&Gが提唱した「店頭の3〜7秒（FMOT）」以前に、消費者はネット上の情報接触によって勝負を決めています。検索対策（SEO）、動画レビュー、比較サイト対策等でZMOTを制することが現代マーケティングの必須要件です。"
  },
  {
    "id": "mba-mkt-065",
    "category": "marketing",
    "categoryName": "マーケティング (Marketing)",
    "term": "PLG (Product-Led Growth)",
    "difficulty": "standard",
    "question": "大規模な営業部隊（セールス主導）や高額な広告宣伝ではなく、無料体験やフリーミアムを通じて『プロダクトそのものの優れた体験と価値』を最大の牽引力として顧客獲得・定着・課金拡大を実現する成長戦略はどれか。",
    "options": [
      "SLG（Sales-Led Growth / セールス主導型成長）",
      "PLG（Product-Led Growth / プロダクト主導型成長）",
      "MLG（Marketing-Led Growth）",
      "ILG（Investor-Led Growth）"
    ],
    "answerIndex": 1,
    "explanation": "正解はB（PLG）です。Slack、Zoom、Notion、Figmaなどが代表例です。エンドユーザーがセルフサーブで容易に使い始められ、共同作業を通じてチームや組織全体へと自然にバイラル拡大し、有料プランへ移行させるモデルです。"
  },
  {
    "id": "mba-fin-023",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "モジリアーニ＝ミラーの定理（MM理論）",
    "difficulty": "standard",
    "question": "法人税が存在しない完全資本市場という前提のもとでは、企業の資金調達方法（株式か借入金か）の違いは企業価値に一切影響を与えないとする、コーポレートファイナンスの基礎理論はどれか。",
    "options": [
      "モジリアーニ＝ミラーの定理（MM理論・第1命題）",
      "ペッキングオーダー理論",
      "トレードオフ理論",
      "エージェンシー理論"
    ],
    "answerIndex": 0,
    "explanation": "MM理論の第1命題は「完全資本市場において企業価値は資本構成に依存しない（パイの切り方を変えてもパイ自体の大きさは変わらない）」と主張します。現実には法人税（負債の節税効果）や倒産コスト、情報の非対称性が存在するため、この前提を緩和して最適資本構成が議論されます。"
  },
  {
    "id": "mba-fin-024",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ペッキングオーダー理論（最適資金調達順序理論）",
    "difficulty": "standard",
    "question": "経営者と外部投資家との間の「情報の非対称性」を前提とした際、企業は資金調達手段としてまず内部留保を用い、次に安全なデット（負債）、最後にエクイティ（新株発行）を選択するという理論はどれか。",
    "options": [
      "ペッキングオーダー理論",
      "シグナリング理論",
      "トレードオフ理論",
      "資本構成の無関連命題"
    ],
    "answerIndex": 0,
    "explanation": "マイヤーズとマジュラフが提唱した理論です。増資（新株発行）は株価が割高であるというネガティブなシグナルと受け取られ株価下落を招きやすいため、企業は内部留保（自己資金）→ 借入・社債（負債）→ 新株発行（株式）の順序で調達を好むと説明します。"
  },
  {
    "id": "mba-fin-025",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "メザニンファイナンス",
    "difficulty": "standard",
    "question": "シニアローン（通常の普通銀行借入）と普通株式（エクイティ）の中間に位置し、劣後債や優先株、転換社債などを活用して、担保不足や既存株主の希薄化抑制に対応する調達手法はどれか。",
    "options": [
      "メザニンファイナンス",
      "シンジケートローン",
      "コマーシャルペーパー",
      "クラウドファンディング"
    ],
    "answerIndex": 0,
    "explanation": "中二階（メザニン）に由来する手法で、返済順位はシニアデットに劣るものの、株式よりは優先されます。ハイリスク・ハイリターンの性質を持ち、MBOや企業買収、事業承継などで調達余力を補完する際に重宝されます。"
  },
  {
    "id": "mba-fin-026",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "シンジケートローン（協調融資）",
    "difficulty": "standard",
    "question": "大型の資金需要に対して、幹事金融機関（アレンジャー）が組成した単一の融資契約書に基づき、複数の金融機関が同一条件で協調して貸出を行う融資形態はどれか。",
    "options": [
      "ノンリコースローン",
      "リボルビング・クレジット",
      "シンジケートローン",
      "メザニンローン"
    ],
    "answerIndex": 2,
    "explanation": "シンジケートローンは、借入企業にとっては一度に多額の長期資金を統一条件で調達でき、金融機関にとっては信用リスクを分散できるメリットがあります。アレンジャーやエージェントへの手数料が発生します。"
  },
  {
    "id": "mba-fin-027",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "限界利益と限界利益率",
    "difficulty": "standard",
    "question": "売上高から変動費を差し引いた金額であり、固定費を回収した後の利益創出力を示すとともに、価格戦略や追加受注の受託可否判断に直結する管理会計指標はどれか。",
    "options": [
      "売上総利益（粗利益率）",
      "営業利益（営業利益率）",
      "EBITDA（EBITDAマージン）",
      "限界利益（限界利益率）"
    ],
    "answerIndex": 3,
    "explanation": "限界利益＝売上高 − 変動費です。固定費は短期的には増減しないため、追加案件が限界利益を生む（限界利益率＞0）限り、全体の固定費回収と営業利益押し上げに貢献するという意思決定の基本基準となります。"
  },
  {
    "id": "mba-fin-028",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "安全余裕率（Margin of Safety）",
    "difficulty": "standard",
    "question": "現在の売上高が損益分岐点売上高をどれだけ上回っているかを示す比率で、「（現在の売上高 − 損益分岐点売上高）÷ 現在の売上高」で求められる企業の経営安全度指標はどれか。",
    "options": [
      "損益分岐点比率",
      "安全余裕率",
      "営業レバレッジ係数",
      "自己資本比率"
    ],
    "answerIndex": 1,
    "explanation": "安全余裕率は「売上が何％落ちても赤字に転落しないか」を示します（安全余裕率＝1 − 損益分岐点比率）。一般に20%以上が良好、40%以上あれば極めて安全と評価され、不況耐性や価格下落耐性を測る指標です。"
  },
  {
    "id": "mba-fin-029",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "正味運転資本（Net Working Capital: NWC）",
    "difficulty": "standard",
    "question": "日常の事業運営を維持するために恒常的に拘束される資金であり、一般に「売掛債権 ＋ 棚卸資産 − 買掛債務」として計算される項目はどれか。",
    "options": [
      "設備投資資金",
      "現金同等物",
      "支払準備金",
      "正味運転資本（Working Capital）"
    ],
    "answerIndex": 3,
    "explanation": "売上が急成長する局面では売掛金や在庫が膨らむため、正味運転資本が増加（＝現金の流出）して「黒字倒産」の危機が生じます。FCF算出時にも「運転資本増減額」として利益から差し引く必要があります。"
  },
  {
    "id": "mba-fin-030",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "デュポン分解（3要素分析）",
    "difficulty": "standard",
    "question": "株主資本利益率（ROE）を企業の3つの経営効率性（収益性、効率性、財務健全性）に分解するモデルにおいて、正しい3要素の組み合わせはどれか。",
    "options": [
      "売上高営業利益率 × 有形固定資産回転率 × 自己資本比率",
      "限界利益率 × 売掛債権回転日数 × 負債比率",
      "売上高純利益率 × 総資産回転率 × 財務レバレッジ",
      "NOPATマージン × 投下資本回転率 × ギアリング比率"
    ],
    "answerIndex": 2,
    "explanation": "デュポンシステムでは「ROE ＝ 売上高当期純利益率（マージン） × 総資産回転率（アセット効率） × 財務レバレッジ（総資産/自己資本）」に分解します。ROE向上要因が本業の稼ぐ力か、資産の効率活用か、単なる借金依存かを識別できます。"
  },
  {
    "id": "mba-fin-031",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "株式譲渡 vs 事業譲渡",
    "difficulty": "standard",
    "question": "M&Aの買収手法において、対象企業の簿外債務や偶発債務を引き継ぐリスクを完全に遮断したい場合に、買収対象の資産・負債・契約を個別に選別して承継できるスキームはどれか。",
    "options": [
      "事業譲渡（アセット・ディール）",
      "株式交換",
      "吸収合併",
      "株式譲渡"
    ],
    "answerIndex": 0,
    "explanation": "株式譲渡（シェア・ディール）は企業全体を包括承継するため簿外債務も引き継ぎますが手続きは簡便です。一方、事業譲渡は引き継ぐ資産・負債を選別できるため簿外債務を回避できますが、取引先や従業員との再契約・個別同意が必要となります。"
  },
  {
    "id": "mba-fin-032",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "のれんの会計基準（IFRS vs 日本基準）",
    "difficulty": "standard",
    "question": "M&A時に発生した「のれん（Goodwill）」の会計処理に関して、日本基準（J-GAAP）と国際財務報告基準（IFRS）の違いとして正しい記述はどれか。",
    "options": [
      "日本基準・IFRSともに毎年一律で5年間にわたる均等償却が義務付けられている",
      "IFRSは20年以内の定期償却を行い、日本基準は非償却で減損テストのみを行う",
      "どちらの基準でものれんは純資産から直接全額を一括控除するためP/Lには一切影響しない",
      "日本基準は20年以内で規則的に償却するが、IFRSは定期償却を行わず毎期減損テストを実施する"
    ],
    "answerIndex": 3,
    "explanation": "日本基準では最長20年での定額償却が義務付けられ毎期P/Lを圧迫しますが、IFRSでは定期償却がなく業績が好調なら営業利益が出やすくなります。ただしIFRSでは買収先事業が悪化した際に巨額の減損損失が一気に計上されるリスクがあります。"
  },
  {
    "id": "mba-fin-033",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "減損会計（Impairment Accounting）",
    "difficulty": "standard",
    "question": "固定資産の収益性が低下し投資額の回収が見込めなくなった際に行われる会計処理において、「減損損失」が認識・測定されるステップとして正しいものはどれか。",
    "options": [
      "時価が簿価をわずかでも下回った段階で、直ちに差額全額を費用計上する",
      "監査法人の指示があった年度末においてのみ、直近3年間の平均営業赤字額を限度として計上する",
      "減損の兆候がある資産について、割引前将来キャッシュフローが帳簿価額を下回る場合に減損を認識し、回収可能価額まで帳簿価額を減額する",
      "将来の割引後キャッシュフローが負債総額を下回った場合に、株式時価総額との差額を減損処理する"
    ],
    "answerIndex": 2,
    "explanation": "減損会計では①減損の兆候の把握、②減損損失の認識（資産から得られる「割引前」将来CF総額＜帳簿価額か判定）、③減損損失の測定（回収可能価額＝正味売却価額と使用価値のいずれか高い方まで減額）という3段階を踏みます。"
  },
  {
    "id": "mba-fin-034",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "コーポレートガバナンス・コード",
    "difficulty": "standard",
    "question": "上場企業に対して「持続的な成長と中長期的な企業価値の向上」を促すために金融庁と東京証券取引所が策定した原則規範であり、「コンプライ・オア・エクスプレイン（遵守せよ、さもなくば理由を説明せよ）」の手法を採る指針はどれか。",
    "options": [
      "スチュワードシップ・コード",
      "コーポレートガバナンス・コード",
      "会社法第1条規範",
      "内部統制報告制度（J-SOX）"
    ],
    "answerIndex": 1,
    "explanation": "コーポレートガバナンス・コードは企業側の行動原則（独立社外取締役の選任、政策保有株の縮減、資本コスト経営等）を定めたものです。一方、機関投資家側の行動原則を定めたものはスチュワードシップ・コードと呼ばれ、車の両輪を成します。"
  },
  {
    "id": "mba-fin-035",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ベータ値（Beta: β）",
    "difficulty": "standard",
    "question": "CAPM（資本資産価格モデル）において、株式市場全体の変動に対して個別銘柄の株価がどれだけ連動して敏感に変動するかを表すシステマティック・リスクの指標はどれか。",
    "options": [
      "アルファ値（α）",
      "シャープレシオ",
      "ベータ値（β）",
      "トラッキングエラー"
    ],
    "answerIndex": 2,
    "explanation": "市場全体が10%動いたときに個別株が15%動くならβ＝1.5、5%しか動かなければβ＝0.5となります。β＝1は市場平均と同等、β＞1はハイリスク・ハイリターンな景気敏感株、β＜1はディフェンシブ株に多く見られます。"
  },
  {
    "id": "mba-fin-036",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "アンレバード・ベータ（Asset Beta）",
    "difficulty": "standard",
    "question": "未上場企業の資本コストを算定する際、類似上場企業の株式ベータから借入金（財務レバレッジ）によるリスク要因を取り除き、純粋な事業そのもののリスクを抽出したベータを何と呼ぶか。",
    "options": [
      "レバード・ベータ（株式ベータ）",
      "アンレバード・ベータ（資産ベータ）",
      "ヒストリカル・ベータ",
      "ファンダメンタル・ベータ"
    ],
    "answerIndex": 1,
    "explanation": "類似上場企業のレバード・ベータを資本構成（D/E比率と税率）を用いて「アンレバード化」し、純粋な事業リスク（アンレバード・ベータ）を求めた上で、評価対象企業の目標D/E比率で「リレバード」して資本コストを導きます。"
  },
  {
    "id": "mba-fin-037",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ハードル・レート（Hurdle Rate）",
    "difficulty": "standard",
    "question": "企業が新規設備投資やM&Aなどのプロジェクトを実行するか否かを判断する際、最低限クリアしなければならない目標投資収益率（最低要求利回り）を何と呼ぶか。",
    "options": [
      "内部留保率",
      "ハードル・レート",
      "名目実効金利",
      "売上高営業利益率"
    ],
    "answerIndex": 1,
    "explanation": "ハードル・レートは通常、加重平均資本コスト（WACC）に国や事業固有のリスクプレミアムを上乗せして設定されます。投資プロジェクトのIRRがハードル・レートを上回る（またはNPV＞0）場合に投資が承認されます。"
  },
  {
    "id": "mba-fin-038",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "回収期間法（Payback Period Method）",
    "difficulty": "standard",
    "question": "投資評価手法の一つで、初期投資額を事業キャッシュフローによって何年で全額回収できるかを計算する手法であり、計算が簡便である一方「投資回収後のキャッシュフローや貨幣の時間価値を無視している」と批判される方法はどれか。",
    "options": [
      "正味現在価値法（NPV法）",
      "内部収益率法（IRR法）",
      "回収期間法（ペイバック法）",
      "収益性指数法（PI法）"
    ],
    "answerIndex": 2,
    "explanation": "回収期間法は流動性リスクや資金回収のスピード感を直感的に把握できるため日本の中小企業や現場で多用されますが、回収期間以降の巨額CFや割引率を考慮しないため、資本コストを重視するMBA理論ではNPV法の補完として扱われます。"
  },
  {
    "id": "mba-fin-039",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "キャッシュ・コンバージョン・サイクル（CCC）",
    "difficulty": "standard",
    "question": "仕入代金を現金で支払ってから、原材料を加工・販売し、最終的に売上代金を現金として回収するまでの所要日数を示し、資金効率の改善指標とされるものはどれか。",
    "options": [
      "総資産回転期間",
      "固定資産耐用年数",
      "売掛金回収猶予期間",
      "キャッシュ・コンバージョン・サイクル（CCC）"
    ],
    "answerIndex": 3,
    "explanation": "CCC ＝ 売掛債権回転日数 ＋ 棚卸資産回転日数 − 仕入債務回転日数 で算出されます。CCCが短い（あるいはAppleやAmazonのようにマイナス）企業は、取引先からの信用供与で事業を回せるため極めて資金繰りが楽になります。"
  },
  {
    "id": "mba-fin-040",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "NOPAT（税引後営業利益）",
    "difficulty": "standard",
    "question": "財務活動（借入金の利息支払いや受取配当金）の影響を除外し、本業の事業活動から生み出された純粋な営業利益に対して実効税率を適用して算出される「税引後営業利益」の略称はどれか。",
    "options": [
      "EBITDA",
      "EPS",
      "ROE",
      "NOPAT（Net Operating Profit After Tax）"
    ],
    "answerIndex": 3,
    "explanation": "NOPAT ＝ 営業利益 × (1 − 実効税率) です。資本構成（借金が多いか無借金か）に左右されずに本業の稼ぐ力を評価できるため、ROICの分子やフリーキャッシュフロー（FCF）の算定の起点として不可欠な指標です。"
  },
  {
    "id": "mba-fin-041",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "EVA（経済的付加価値: Economic Value Added）",
    "difficulty": "standard",
    "question": "企業の真の経済的利益を測定するため、税引後営業利益（NOPAT）から、事業に投下された資本に対して株主・債権者が要求する「資本コスト総額（投下資本×WACC）」を差し引いて算出される指標はどれか。",
    "options": [
      "限界利益",
      "経常利益",
      "EVA（経済的付加価値）",
      "営業キャッシュフロー"
    ],
    "answerIndex": 2,
    "explanation": "スターン・スチュワート社が開発した指標です。会計上の利益が黒字であっても、投下資本×WACC（資本コスト）を下回っていればEVAはマイナスとなり、「株主価値を破壊している」と判定されます。"
  },
  {
    "id": "mba-fin-042",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "インタレスト・カバレッジ・レシオ（ICR）",
    "difficulty": "standard",
    "question": "企業の借入利息の支払能力を判定する財務健全性指標で、営業利益と受取利息・配当金の合計を、支払利息・割引料で割って算出される倍率はどれか。",
    "options": [
      "負債比率（D/Eレシオ）",
      "インタレスト・カバレッジ・レシオ（ICR）",
      "自己資本比率",
      "流動比率"
    ],
    "answerIndex": 1,
    "explanation": "本業の稼ぎが支払利息の何倍あるかを示します。1倍未満は「金利すら本業で払えていない（利払不能）」危険水準であり、一般に2倍以上が安全、優良企業では10倍を超えることもあります。格付けや銀行融資審査の最重要指標です。"
  },
  {
    "id": "mba-fin-043",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "コベナンツ（財務制限条項）",
    "difficulty": "standard",
    "question": "銀行融資や社債発行において、借入企業の財務規律を担保し債権者を保護するために契約書に明記される、「純資産維持義務」や「利益維持条項」「格付維持条項」などの義務条項を何と呼ぶか。",
    "options": [
      "レペタンス条項",
      "エスクロー条項",
      "コベナンツ（財務制限条項）",
      "ネガティブ・プレッジ条項"
    ],
    "answerIndex": 2,
    "explanation": "コベナンツに抵触すると、期限の利益を喪失（即時一括返済要求）したり金利ペナルティが課されたりします。大型融資やシンジケートローン、LBOファイナンスにおいて債権者のリスク管理手段として不可欠です。"
  },
  {
    "id": "mba-fin-044",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "財務レバレッジ効果",
    "difficulty": "standard",
    "question": "総資産利益率（ROA）が借入金の調達金利を上回っている場合、負債比率を高めて事業規模を拡大させることで自己資本利益率（ROE）が飛躍的に高まる効果を何と呼ぶか。",
    "options": [
      "営業レバレッジ効果",
      "財務レバレッジ効果（テコの原理）",
      "スケールメリット",
      "ポートフォリオ効果"
    ],
    "answerIndex": 1,
    "explanation": "ROA＞借入金利の状況下では、他人資本を使って稼いだ超過利得がすべて株主に帰属するためROEが押し上げられます。しかし業績が悪化してROA＜借入金利になると逆のテコが働き、ROEの急激な悪化や債務超過リスクに直面します。"
  },
  {
    "id": "mba-fin-045",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "類似取引比較法（Precedent Transactions Analysis）",
    "difficulty": "standard",
    "question": "M&Aのバリュエーションにおいて、過去に成立した類似の買収事例における買収価格（EV/EBITDA倍率やPBRなど）を参照して対象企業の株式価値を算定するマーケット・アプローチの手法はどれか。",
    "options": [
      "DCF法",
      "コンプス（類似上場企業比較法）",
      "取引事例比較法（プレシデント・トランザクション法）",
      "純資産簿価法"
    ],
    "answerIndex": 2,
    "explanation": "類似上場企業比較法（Comps）が「平時の少数株主価値（時価）」を反映するのに対し、類似取引比較法は実際のM&A事例に基づくため「経営権プレミアム（買収プレミアム）」を含んだ買収価格水準の相場を把握できる特徴があります。"
  },
  {
    "id": "mba-fin-046",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ターミナルバリューの永久成長モデル",
    "difficulty": "standard",
    "question": "DCF法において詳細予測期間以降の継続価値（ターミナルバリュー）を算出する際、フリーキャッシュフローが一定率（g）で永久に成長し続けると仮定して「FCF ÷ (WACC − g)」で求める公式はどれか。",
    "options": [
      "キャピタル・アセット・フォーミュラ",
      "ブラック・ショールズ方程式",
      "デュポン展開モデル",
      "ゴードン成長モデル（定率成長配当割引モデル）"
    ],
    "answerIndex": 3,
    "explanation": "ゴードン成長モデルを応用した計算式です。永久成長率（g）は長期的な経済成長率（GDP成長率やインフレ率）を超えることはできないとされ、通常0〜2%程度で保守的に設定されます。gがわずか1%変わるだけで企業価値が大きく変動します。"
  },
  {
    "id": "mba-fin-047",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "エクイティ・スプレッド",
    "difficulty": "standard",
    "question": "株主目線での企業価値創出を測る指標で、自己資本利益率（ROE）から株主が要求する期待利回り（株主資本コスト: Cost of Equity）を差し引いた差分を何と呼ぶか。",
    "options": [
      "クレジット・スプレッド",
      "ビッド・アスク・スプレッド",
      "エクイティ・スプレッド",
      "ROICスプレッド"
    ],
    "answerIndex": 2,
    "explanation": "伊藤レポート（2014年）でも強調された概念で、ROEが単に高いだけでなく「株主資本コスト（通常7〜8%程度）」を上回るスプレッド（正の超過リターン）を生み出している企業のみがPBR1倍超を継続的に達成できるとされます。"
  },
  {
    "id": "mba-fin-048",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "自社株買い（Share Repurchase）",
    "difficulty": "standard",
    "question": "手元余剰現金を活用して市場から自社の株式を買い戻す施策であり、発行済株式総数を減少させることで1株当たり当期純利益（EPS）やROEを向上させる資本政策はどれか。",
    "options": [
      "株式分割",
      "自社株買い",
      "第三者割当増資",
      "無償減資"
    ],
    "answerIndex": 1,
    "explanation": "自社株買いは配当と並ぶ代表的な株主還元策です。配当と異なり一度実施しても将来の支払いが義務化されないため経営陣にとって機動性が高く、また「自社の株価は割安である」という強いシグナリング効果を持ちます。"
  },
  {
    "id": "mba-fin-049",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "フリーキャッシュフロー仮説（ジェンセンの仮説）",
    "difficulty": "standard",
    "question": "マイケル・ジェンセンが提唱した理論で、経営陣が潤沢な手元余剰現金を抱えると、低収益な多角化や過剰な設備投資に資金を浪費しがちになるため、配当や負債返済を通じて資金を外部吐き出しさせることが規律付けになるという学説はどれか。",
    "options": [
      "ペッキングオーダー仮説",
      "フリーキャッシュフロー仮説",
      "ランダムウォーク仮説",
      "効率的市場仮説"
    ],
    "answerIndex": 1,
    "explanation": "エージェンシー問題の典型例です。余剰現金を溜め込むと経営陣の帝国建設（自己保身や規模拡大至上主義）が促されるため、あえて負債（借入金）を負わせて利払いプレッシャーをかけることや、増配・自社株買いを迫ることがガバナンスとして有効とされます。"
  },
  {
    "id": "mba-fin-050",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "負債の節税効果（Interest Tax Shield）",
    "difficulty": "standard",
    "question": "企業が借入金（有利子負債）を利用すると、支払利息が損金（税法上の費用）に算入されることで課税所得が減少し、結果として法人税の支払額が軽減される効果を何と呼ぶか。",
    "options": [
      "デット・エクイティ・スワップ",
      "キャッシュ・フロー・ヘッジ",
      "繰延税金資産効果",
      "タックス・シールド（負債の節税効果）"
    ],
    "answerIndex": 3,
    "explanation": "年間節税額は「支払利息 × 法人税率」で計算されます。負債が永久に維持される場合、節税効果の現在価値は「負債額 × 法人税率」となります。修正MM理論では、この節税効果の存在により負債比率を高めるほど企業価値が高まると論じられました。"
  },
  {
    "id": "mba-fin-051",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "プロジェクトファイナンス",
    "difficulty": "standard",
    "question": "発電所建設や空港開発などの大規模インフラ事業において、親会社の全体信用力ではなく、独立させた特別目的会社（SPC）が将来生み出すキャッシュフローと保有資産のみを返済原資とする非遡及型（ノンリコース）融資手法はどれか。",
    "options": [
      "コーポレートファイナンス",
      "コマーシャルローン",
      "ベンチャーデット",
      "プロジェクトファイナンス"
    ],
    "answerIndex": 3,
    "explanation": "プロジェクトファイナンスは母体企業のバランスシートを傷つけずに巨額のオフバランス調達ができる利点があります。貸手側は精緻なキャッシュフロー予測やリスク分担（オフテイク契約等）を行い、金利や手数料は高めに設定されます。"
  },
  {
    "id": "mba-fin-052",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "資産担保証券（ABS: Asset Backed Securities）",
    "difficulty": "standard",
    "question": "企業が保有する売掛債権や自動車ローン、リース債権などの特定資産をSPC（特別目的事業体）に譲渡し、その資産から生じる将来キャッシュフローを裏付けとして発行される証券化商品を何と呼ぶか。",
    "options": [
      "ソブリン債",
      "ハイイールド債",
      "資産担保証券（ABS）",
      "新株予約権付社債"
    ],
    "answerIndex": 2,
    "explanation": "オリジネーター（原保有企業）の倒産リスクから対象資産を法的に隔離（真正譲渡）することで、オリジネーター自身の信用格付以上の高格付証券を組成でき、低コストかつ多様な投資家層からの資金調達が可能となります。"
  },
  {
    "id": "mba-fin-053",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "固変分解（高低点法など）",
    "difficulty": "standard",
    "question": "管理会計やCVP分析において、人件費や光熱費などの総費用を「売上高や操業度に連動する費用（変動費）」と「売上に関わらず一定して発生する費用（固定費）」に区分する手法として、実務上用いられる「最高操業度と最低操業度の実績値から傾きを求める手法」はどれか。",
    "options": [
      "高低点法（High-Low Method）",
      "モンテカルロ法",
      "DCF法",
      "スクラップ・アンド・ビルド法"
    ],
    "answerIndex": 0,
    "explanation": "固変分解には勘定科目法、高低点法、スキャッター・チャート法、回帰分析法（最小二乗法）などがあります。高低点法は最も活動量が高かった月と低かった月の「費用差 ÷ 活動量差」から単位あたり変動費を求める直感的で簡便な手法です。"
  },
  {
    "id": "mba-fin-054",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "経営安全率（Profit-Volume Margin）",
    "difficulty": "standard",
    "question": "損益分岐点分析（CVP分析）において、「営業利益 ÷ 限界利益」で求められ、限界利益のうちどれだけが営業利益として残るか（固定費負担の軽重度）を表す指標はどれか。",
    "options": [
      "経営安全率",
      "限界利益率",
      "売上高営業利益率",
      "資本回収率"
    ],
    "answerIndex": 0,
    "explanation": "経営安全率は「限界利益 − 固定費 ＝ 営業利益」の構造に基づき、稼いだ限界利益のうち固定費を引いて手元に残る割合を示します。数値が高いほど固定費の重圧が小さく、不況期に売上が急減しても赤字転落しにくい筋肉質な体質を意味します。"
  },
  {
    "id": "mba-fin-055",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "キャピタル・アロケーション（資本配分）",
    "difficulty": "standard",
    "question": "企業が生み出した営業キャッシュフローや調達資金を、「既存事業への再投資・設備投資」「M&A」「有利子負債返済」「株主還元（配当・自社株買い）」のいずれにどう配分するかを決定する、CEO/CFOの最重要責務はどれか。",
    "options": [
      "タックス・プランニング",
      "バジェット・コントロール",
      "キャピタル・アロケーション（資本配分方針）",
      "ワーキングキャピタル・マネジメント"
    ],
    "answerIndex": 2,
    "explanation": "ウォーレン・バフェットが「CEOの長期的な企業価値創造における最大の試練」と位置づけた概念です。WACCを上回る期待リターンが見込める成長投資があるなら再投資し、ないなら過剰保有せず自社株買いや増配で株主に還元するのが定石です。"
  },
  {
    "id": "mba-fin-056",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ポイズンピル（事前警告型買収防衛策）",
    "difficulty": "standard",
    "question": "敵対的買収者が一定割合以上の株式を取得した場合に、既存株主に対して割安で新株を取得できる権利（新株予約権）を行使させ、買収者の持分比率を大幅に希薄化させて買収コストを跳ね上がらせる防衛策はどれか。",
    "options": [
      "ポイズンピル（毒薬条項）",
      "パックマン・ディフェンス",
      "ホワイトナイト（白馬の騎士）",
      "クラウンジュエル（王冠の宝石）の売却"
    ],
    "answerIndex": 0,
    "explanation": "ポイズンピルは米国で普及した強力な防衛策です。買収者以外の全株主に新株が行き渡るため買収者の議決権比率が急落します。ただし保身目的の乱用は株主価値を損ねるため、日本の裁判所や機関投資家は厳しい発動要件を求めています。"
  },
  {
    "id": "mba-fin-057",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "MBO（マネジメント・バイアウト）",
    "difficulty": "standard",
    "question": "企業の現経営陣がプライベート・エクイティ（PE）ファンドなどと組んで自社の株式を既存株主から買い取り、上場廃止（非公開化）して中長期的な構造改革を推し進める手法はどれか。",
    "options": [
      "EBO（エンプロイー・バイアウト）",
      "リバース・マージャー",
      "カーブアウト",
      "MBO（マネジメント・バイアウト）"
    ],
    "answerIndex": 3,
    "explanation": "短期的な四半期開示や市場の圧力から離れ、抜本的な事業再生やリストラを行うために用いられます。ただし経営陣にとっては「安く買いたい」、既存一般株主にとっては「高く売りたい」という構造的な『構造的利益相反』への配慮が不可欠です。"
  },
  {
    "id": "mba-fin-058",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "カーブアウト（Carve-out）とコングロマリット・ディスカウント",
    "difficulty": "standard",
    "question": "多様な事業を抱える大企業において、全体価値が各事業の単体価値の合計を下回る現象（コングロマリット・ディスカウント）を解消するために、特定事業を子会社として切り出して外部資本導入や上場を行う施策はどれか。",
    "options": [
      "カーブアウト（事業切り出し）",
      "ダウンサイジング",
      "レバレッジド・リース",
      "ロールアップM&A"
    ],
    "answerIndex": 0,
    "explanation": "カーブアウトはノンコア事業の切り離しや、成長事業の独立資金調達・機動的経営を可能にします。親子上場廃止の流れやアクティビストの要請により、事業ポートフォリオ再編の切り札として日本でも急増しています。"
  },
  {
    "id": "mba-fin-059",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "デューデリジェンス（DD: Due Diligence）",
    "difficulty": "standard",
    "question": "M&Aや投資の実行に先立ち、買収対象企業の財務、税務、法務、ビジネス、IT、人事などの実態や潜在的リスクを多角的に精密調査・精査する一連の手続きを何と呼ぶか。",
    "options": [
      "デューデリジェンス（DD）",
      "フィージビリティ・スタディ",
      "コーポレート・ガバナンス",
      "コンプライアンス・チェック"
    ],
    "answerIndex": 0,
    "explanation": "DDの結果は、買収価格の調整（純有利子負債や運転資本の修正）、株式譲渡契約書における表明保証（R&W）条項の策定、買収後の統合プロセス（PMI）計画の立案などに直接反映される極めてクリティカルな実務です。"
  },
  {
    "id": "mba-fin-060",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ABL（Asset-Based Lending: 動産・売掛金担保融資）",
    "difficulty": "standard",
    "question": "不動産担保や個人保証に依存せず、企業が事業活動の中で保有する売掛債権や在庫（原材料・製品・家畜など）を担保として設定し、資金調達を行う金融手法はどれか。",
    "options": [
      "プロミス・ノート",
      "ABL（動産・債権担保融資）",
      "リバース・モーゲージ",
      "サブプライムローン"
    ],
    "answerIndex": 1,
    "explanation": "不動産を持たない中小企業やスタートアップ、農林水産業者でも、売掛金や商品在庫の事業価値を評価してもらうことで機動的な運転資金を調達できる手法です。金融機関側には継続的な在庫モニタリング能力が求められます。"
  },
  {
    "id": "mba-fin-061",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "新収益認識会計基準（5ステップアプローチ）",
    "difficulty": "standard",
    "question": "2021年4月以降本格適用された新収益認識基準において、「契約の識別」「履行義務の識別」「取引価格の算定」「履行義務への取引価格の配分」に続く最終ステップとして正しいものはどれか。",
    "options": [
      "契約代金の銀行口座への着金確認時点での収益認識",
      "履行義務の充足による収益の認識（支配の移転時点）",
      "税務署への確定申告書の提出完了時点での収益認識",
      "製品の工場出荷完了時点での一括収益認識"
    ],
    "answerIndex": 1,
    "explanation": "新基準では「出荷基準」や「検収基準」といった形式論から、顧客に商品やサービスの「支配（Control）」が移転した時点で履行義務が充足され収益を認識するという実質論（国際基準準拠）へ統一されました。"
  },
  {
    "id": "mba-fin-062",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "新リース会計基準（オンバランス化）",
    "difficulty": "standard",
    "question": "国際会計基準（IFRS16）および今後日本基準にも全面導入される新リース基準において、従来のオペレーティング・リース（賃貸借処理）を含め、すべての借手リース契約について原則として義務付けられる会計処理はどれか。",
    "options": [
      "リース料をすべて営業外費用として処理しオフバランスを維持する",
      "資産側に「使用権資産」、負債側に「リース負債」を両建て計上するオンバランス処理",
      "リース契約満了時に一括して減価償却費を特別損失に計上する",
      "リース料の支払いを損益計算書を経由させず株主資本から直接減額する"
    ],
    "answerIndex": 1,
    "explanation": "店舗賃貸借や航空機リースなど、従来オフバランス化されていた膨大なリース契約が貸借対照表（B/S）に載るため、総資産が膨らんで自己資本比率やROAが低下する一方、支払利息と減価償却費に分かれるためEBITDAは増加する影響が生じます。"
  },
  {
    "id": "mba-fin-063",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "資本コストや株価を意識した経営（東証要請）",
    "difficulty": "standard",
    "question": "2023年3月に東京証券取引所がプライム・スタンダード上場企業に対して要請したアクションにおいて、特に重視された「現状分析・方針開示」の主眼として最も適切なものはどれか。",
    "options": [
      "資本コスト（WACC等）と資本収益性（ROIC/ROE）の的確な把握およびPBR1倍割れ改善に向けた具体的取組の開示",
      "全社員の基本給を一律30%引き上げることの公表",
      "すべての有利子負債を完済し無借金経営を達成することの義務付け",
      "海外投資家へのIR面談の禁止と国内個人株主優遇の徹底"
    ],
    "answerIndex": 0,
    "explanation": "東証はPBR1倍割れ企業の多さを問題視し、自社の資本コストを的確に把握した上で、成長投資や事業ポートフォリオ見直し、積極的対話を通じて持続的な企業価値向上を果たすよう強く要請しました。"
  },
  {
    "id": "mba-fin-064",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "ホワイトナイト（White Knight: 白馬の騎士）",
    "difficulty": "standard",
    "question": "敵対的TOB（株式公開買付け）を仕掛けられた企業が、買収者の要求を拒絶し、友好的な第三者に自社株をより有利な条件で取得・合併してもらうことで敵対的買収を阻止する対抗策はどれか。",
    "options": [
      "ホワイトナイト（友好的買収者）",
      "パックマン・ディフェンス",
      "スコーチドアース（焦土作戦）",
      "グリーンメーラーの買収"
    ],
    "answerIndex": 0,
    "explanation": "敵対的買収者（ブラックナイト）に対抗して現れる「白馬の騎士」です。敵対的買収者の提示価格より高い対抗TOBを実施してもらったり資本提携を行ったりしますが、最終的にホワイトナイトに経営権を委ねる結果となる場合もあります。"
  },
  {
    "id": "mba-fin-065",
    "category": "finance",
    "categoryName": "財務・ファイナンス (Finance & Accounting)",
    "term": "企業価値（EV）と株式価値（Equity Value）のブリッジ",
    "difficulty": "standard",
    "question": "M&Aの企業価値評価において、「事業価値（Enterprise Value: EV）」から「株式価値（Equity Value）」を導き出す際の計算式として正しいものはどれか。",
    "options": [
      "株式価値 ＝ EV ＋ 純有利子負債 − 非事業用資産",
      "株式価値 ＝ EV × 自己資本比率 ÷ 株価収益率（PER）",
      "株式価値 ＝ EV ÷ 資本金 ＋ 買掛金",
      "株式価値 ＝ EV − 純有利子負債（有利子負債 − 現預金） ＋ 非事業用資産"
    ],
    "answerIndex": 3,
    "explanation": "EV（事業価値）は債権者と株主の双方に帰属する本業の価値です。そこから債権者に帰属する「純有利子負債」を差し引き、余剰現預金や投資有価証券などの「非事業用資産」を加算することで、純粋に株主に帰属する株式価値が算出されます。"
  },
  {
    "id": "mba-lead-022",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "タックマンモデル（チーム発展の5段階）",
    "difficulty": "standard",
    "question": "タックマンが提唱したチームの発展プロセス（形成期・混乱期・統一期・機能期・散会期）において、メンバー間の意見の衝突や目標・役割をめぐる対立が表面化し、これを乗り越えることで真の結束へと進む第2段階はどれか。",
    "options": [
      "ストーミング（Storming: 混乱期・嵐の時期）",
      "フォーミング（Forming: 形成期）",
      "ノーミング（Norming: 統一期）",
      "パフォーミング（Performing: 機能期）"
    ],
    "answerIndex": 0,
    "explanation": "チームビルディングにおいてストーミング（混乱期）の衝突を恐れて回避すると、表面的で本音の出ない脆弱なチームに留まります。リーダーはこの段階を建設的な対話で乗り越えさせ、規範を確立するノーミングへと導くことが求められます。"
  },
  {
    "id": "mba-lead-023",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "ハウスのパス・ゴール理論",
    "difficulty": "standard",
    "question": "リーダーの役割は「部下が目標（ゴール）を達成するための道筋（パス）を明確にし、障害を取り除くこと」であり、部下の特性や職務環境に応じて「指示型・支援型・参加型・達成志向型」の4つのスタイルを使い分けるべきとする状況適応型理論はどれか。",
    "options": [
      "パス・ゴール理論（Path-Goal Theory）",
      "期待理論",
      "目標設定理論（Goal-Setting Theory）",
      "リーダー・メンバー交換理論（LMX理論）"
    ],
    "answerIndex": 0,
    "explanation": "ロバート・ハウスが提唱した理論です。部下の業務習熟度やタスクの曖昧さに応じて、曖昧な仕事には指示型、ストレスの高い仕事には支援型、高い能力を持つ部下には参加型や達成志向型を適用してモチベーションと成果を高めます。"
  },
  {
    "id": "mba-lead-024",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "トランザクショナル・リーダーシップ（交換型）",
    "difficulty": "standard",
    "question": "リーダーシップ類型において、理念やビジョンへの共感によって内発的変革を促す「トランスフォーメーショナル（変革型）」に対置され、報酬と業績の取引（交換関係）や信賞必罰、例外管理をベースに部下を動かす手法はどれか。",
    "options": [
      "トランザクショナル・リーダーシップ（交換型リーダーシップ）",
      "カリスマ的リーダーシップ",
      "サーバント・リーダーシップ",
      "オーセンティック・リーダーシップ"
    ],
    "answerIndex": 0,
    "explanation": "定型業務や短期的な業績達成にはトランザクショナル（成果に対して昇進やボーナスを与える条件付き報酬）が機能しますが、不確実性の高いDX環境やイノベーション創出には、ビジョンで啓発するトランスフォーメーショナルな指導が不可欠です。"
  },
  {
    "id": "mba-lead-025",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "シャインの組織文化の3階層モデル",
    "difficulty": "standard",
    "question": "エドガー・シャインが提唱した組織文化モデルにおいて、最も深層にあり、メンバーが無意識に当然視している共有の信念・知覚・思考の根本的前提を何と呼ぶか。",
    "options": [
      "目に見える人工物（Artifacts: 社屋、服装、儀式）",
      "信奉する価値観（Espoused Values: 経営理念、行動指針）",
      "基本的前提（Basic Underlying Assumptions: 暗黙の前提・信念）",
      "組織気候（Organizational Climate）"
    ],
    "answerIndex": 2,
    "explanation": "シャインは組織文化を①人工物（可視）、②信奉する価値観（標榜）、③基本的仮定（不可視・無意識）の3層に分けました。表面的な制度やスローガン（人工物）だけを変えても、最深部の「基本的仮定」に手をつけなければ組織風土改革は頓挫します。"
  },
  {
    "id": "mba-lead-026",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "ピーターの法則（無能化の法則）",
    "difficulty": "standard",
    "question": "階層型組織において、従業員は現在の職務で有能さを示す限り昇進し続け、最終的には「自らの能力限界を超えるポスト」に到達して無能化し、組織の要職が無能な人材で埋め尽くされるという観察はどれか。",
    "options": [
      "パーキンソンの法則",
      "メラビアンの法則",
      "パレートの法則",
      "ピーターの法則"
    ],
    "answerIndex": 3,
    "explanation": "ローレンス・J・ピーターが提唱しました。「優秀な営業マンが、必ずしも優秀な営業マネージャーになれるとは限らない」という典型例です。これに対処するため、専門職コースの新設や、マネジメント適性の厳格な見極めが行われます。"
  },
  {
    "id": "mba-lead-027",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "コンピテンシーモデル",
    "difficulty": "standard",
    "question": "単なる知識や資格の有無ではなく、高い成果を継続的に上げているハイパフォーマーに共通して見られる「行動特性・思考パターン」を抽出・体系化し、採用や人事評価基準に反映させる枠組みはどれか。",
    "options": [
      "スキルマップ",
      "コンピテンシーモデル",
      "職務記述書（Job Description）",
      "職能資格制度"
    ],
    "answerIndex": 1,
    "explanation": "ハーバード大のマクレランド教授らの研究に端を発します。従来の「学歴や保有知識」による評価から「状況下でどのような行動を再現性高く取れるか」という行動評価へとシフトさせ、成果直結型の人材育成に寄与します。"
  },
  {
    "id": "mba-lead-028",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "アンコンシャス・バイアス（無意識の偏見）",
    "difficulty": "standard",
    "question": "過去の経験や社会的刷り込みによって、誰しもが無自覚のうちに「男性は外で稼ぎ女性は家事」「若手はITが得意でシニアは保守的」といったステレオタイプで他者を評価してしまう心理的歪みはどれか。",
    "options": [
      "確証バイアス",
      "サンクコストバイアス",
      "利用可能性ヒューリスティック",
      "アンコンシャス・バイアス（無意識の思い込み・偏見）"
    ],
    "answerIndex": 3,
    "explanation": "採用面接、昇進登用、タスク割り振りの現場で公正な評価を阻害する最大要因です。グローバル企業では「自分にも無意識の偏見がある」ことを認知・客観視させるためのトレーニングが必須化されています。"
  },
  {
    "id": "mba-lead-029",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "リスキリング（Reskilling）",
    "difficulty": "standard",
    "question": "DXの進展やビジネスモデルの激変に伴い、従業員が今後新たに発生する職務や高度なデジタル業務に適応できるよう、企業が主導して新しい知識・スキルを習得させる能力再開発の取り組みはどれか。",
    "options": [
      "リカレント教育（学び直し）",
      "OJT（職場内訓練）",
      "リスキリング（職務再適応のスキル習得）",
      "アウトプレースメント"
    ],
    "answerIndex": 2,
    "explanation": "リカレント教育が個人の自発的意思による離職後の学び直しを広く含むのに対し、リスキリングは「企業の事業戦略転換に伴い、既存社員のスキルギャップを埋めて新たな職務へシフトさせる」という企業主導の戦略的投資の色彩が強い点に特徴があります。"
  },
  {
    "id": "mba-lead-030",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "タレントマネジメントとサクセッションプラン",
    "difficulty": "standard",
    "question": "全社の人材のスキル、経験、評価、キャリア志向を一元管理し、特に経営幹部や重要ポストの将来的な後継者を計画的に選抜・育成・配置するための「後継者育成計画」はどれか。",
    "options": [
      "サクセッションプラン（後継者育成計画）",
      "人員配置計画（スタッフィング）",
      "コーチングプログラム",
      "メンター制度"
    ],
    "answerIndex": 0,
    "explanation": "キーポジションに突然の欠員が生じた際のリスクを防ぐため、将来のCxO候補プールをあらかじめ特定し、ストレッチな経験（海外赴任や難関PJリーダー等）を計画的に積ませるグローバル標準のタレントマネジメント手法です。"
  },
  {
    "id": "mba-lead-031",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "エイミー・エドモンドソンの心理的安全性",
    "difficulty": "standard",
    "question": "エイミー・エドモンドソン教授の研究において、チーム内で対人関係のリスクをとることを恐れず、発言や挑戦をためらわない状態を指す「心理的安全性」を阻害する『4つの不安』に含まれないものはどれか。",
    "options": [
      "無知だと思われる不安（Ignorant）",
      "無能だと思われる不安（Incompetent）",
      "邪魔・お節介だと思われる不安（Intrusive）",
      "給与が減額される不安（Financial Demotion）"
    ],
    "answerIndex": 3,
    "explanation": "エドモンドソンの4つの対人不安は①無知（質問できない）、②無能（失敗やミスを隠す）、③邪魔（提案を躊躇する）、④否定的/批判的（現状に異を唱えられない）です。金銭的ペナルティではなく、心理的な評価懸念を排除することが本質です。"
  },
  {
    "id": "mba-lead-032",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "マズローの自己実現と自己超越（Z理論）",
    "difficulty": "standard",
    "question": "アブラハム・マズローの欲求5段階説（生理・安全・社会的・承認・自己実現）において、晩年にマズロー自身が「自己の枠組みを超え、他者や社会全体の幸福に尽くす至高体験」として追加提唱した第6の段階はどれか。",
    "options": [
      "自己防衛欲求",
      "権力統制欲求",
      "自己超越欲求（Self-Transcendence）",
      "認知的一貫性欲求"
    ],
    "answerIndex": 2,
    "explanation": "マズローは晩年、自己実現のさらに上に「自己超越（Self-Transcendence）」を見出しました。利己的な欲求充足を超え、目的や他者への貢献に没頭する状態であり、近年のパーパス経営やESG/SDGs志向の心理的基盤とも通底します。"
  },
  {
    "id": "mba-lead-033",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "ハーズバーグの職務充実（Job Enrichment）",
    "difficulty": "standard",
    "question": "ハーズバーグの二要因理論に基づき、衛生要因（給与や職場環境など不満を防ぐ要因）の改善にとどまらず、仕事そのものに裁量や責任、達成感を持たせることで動機づけ要因を高める人事施策はどれか。",
    "options": [
      "職務拡大（Job Enlargement: 作業種類の単純増加）",
      "職務充実（Job Enrichment: 垂直的職務拡大）",
      "ジョブ・ローテーション（定期異動）",
      "タイムカードの厳格管理"
    ],
    "answerIndex": 1,
    "explanation": "職務拡大（水平的拡大）が担当業務の数を増やすだけなのに対し、職務充実（垂直的拡大）は計画立案や意思決定の権限を現場に委譲し、仕事そのものから達成感や承認感（動機づけ要因）を得られるようにする手法です。"
  },
  {
    "id": "mba-lead-034",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "自己決定理論（Self-Determination Theory）",
    "difficulty": "standard",
    "question": "エドワード・デシとリチャード・ライアンが提唱した、人間の内発的動機づけを駆動する中核的な「3つの基本的心理的欲求」の正しい組み合わせはどれか。",
    "options": [
      "権力欲求、達成欲求、親和欲求",
      "生存欲求、関係欲求、成長欲求",
      "自律性（Autonomy）、有能感（Competence）、関係性（Relatedness）",
      "安全欲求、承認欲求、報酬欲求"
    ],
    "answerIndex": 2,
    "explanation": "自己決定理論では、①自分で行動を選択している感覚（自律性）、②能力を発揮して成果を出せている感覚（有能感）、③他者と深く結びつき認められている感覚（関係性）の3つが満たされたときに最も高いパフォーマンスと幸福感が得られるとします。"
  },
  {
    "id": "mba-lead-035",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "サーバント・リーダーシップ（奉仕型）",
    "difficulty": "standard",
    "question": "ロバート・グリーンリーフが提唱した、「リーダーはまず部下に奉仕（Servant）し、その上で導く（Leader）」という哲学において、リーダーが備えるべき姿勢として最も適切なものはどれか。",
    "options": [
      "部下に指示命令を徹底させ、成果が出ない場合は即座にペナルティを科す姿勢",
      "部下の声に耳を傾け共感し、成長を支援して環境を整える「支えるリーダーシップ」",
      "自分のカリスマ性と先見性のみを誇示し、メンバーに無条件の服従を求める姿勢",
      "全ての意思決定を放棄し、現場の成り行きに任せる放任（レッセフェール）の姿勢"
    ],
    "answerIndex": 1,
    "explanation": "サーバント・リーダーは「傾聴」「共感」「癒やし」「気づき」「説得」「概念化」「先見力」「執事役」「人々の成長へのコミットメント」「コミュニティづくり」の10特性を重視し、現場のポテンシャルを最大化させます。"
  },
  {
    "id": "mba-lead-036",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "状況対応リーダーシップ（SL理論）",
    "difficulty": "standard",
    "question": "ハーシィとブランチャードが提唱したSL理論において、部下が「能力も意欲も高く自立している（成熟度が高い）」段階において、リーダーがとるべき最適なスタイルはどれか。",
    "options": [
      "教示的・指示型（Telling）",
      "委任型（Delegating）",
      "説得的・コーチ型（Selling）",
      "参加的・支援型（Participating）"
    ],
    "answerIndex": 1,
    "explanation": "部下の成熟度（業務能力と意欲）に応じて指導法を変える理論です。成熟度が低い新人は「教示型」、意欲はあるがスキル不足なら「説得型」、スキルはあるが自信不足なら「参加型」、双方十分に高いベテランには「委任型（権限移譲）」が最適です。"
  },
  {
    "id": "mba-lead-037",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "CFR（Conversations, Feedback, Recognition）",
    "difficulty": "standard",
    "question": "Googleなどで採用された目標管理フレームワーク「OKR」を形骸化させず、日々の現場で機能させるために不可欠とされる対話的運用プロセス「CFR」の3要素はどれか。",
    "options": [
      "コスト（Cost）、財務（Finance）、リスク（Risk）",
      "命令（Command）、追従（Follow）、報告（Report）",
      "対話（Conversations）、フィードバック（Feedback）、承認・称賛（Recognition）",
      "コンプライアンス（Compliance）、柔軟性（Flexibility）、規則（Rule）"
    ],
    "answerIndex": 2,
    "explanation": "ジョン・ドーアが著書『Measure What Matters』で説いた概念です。OKRが「目標の骨組み」なら、CFRは「組織の血液」であり、1on1での親密な対話、タイムリーなフィードバック、成果への称賛が組み合わさることで高難度目標の達成を後押しします。"
  },
  {
    "id": "mba-lead-038",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "360度多面評価の運用留意点",
    "difficulty": "standard",
    "question": "上司だけでなく同僚・部下・他部署からも多面的に評価を収集する「360度評価」を導入する際、人気投票化や評価への報復、組織の萎縮を防ぐための実務上の原則として最も適切なものはどれか。",
    "options": [
      "誰がどのような点数を付けたかを本人の名誉のために全員に実名で開示する",
      "評価結果を即座に賞与査定や降格処分に直結させ、給与格差の最大化に利用する",
      "同僚や部下からの厳しい意見は除外し、ポジティブな称賛コメントのみを本人に渡す",
      "処遇査定への直接連動は避け、本人の客観的な自己認知や能力開発・育成フィードバックを主目的にする"
    ],
    "answerIndex": 3,
    "explanation": "360度評価を給与や昇進に直結させると、「厳しいことを言われたら低評価をつけ返す」報復や、部下に迎合する「仲良しクラブ化」が起きます。そのため、処遇直結ではなく「気づきを通じたリーダーシップ開発・育成」に特化するのが鉄則です。"
  },
  {
    "id": "mba-lead-039",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "メンバーシップ型雇用（日本型雇用慣行）",
    "difficulty": "standard",
    "question": "終身雇用や年功序列、新卒一括採用を特徴とし、職務内容や勤務地を限定せずに「会社という共同体への帰属」を前提として人材を育成・処遇する雇用モデルはどれか。",
    "options": [
      "ジョブ型雇用",
      "ギグエコノミー",
      "インディペンデント・コントラクター",
      "メンバーシップ型雇用"
    ],
    "answerIndex": 3,
    "explanation": "濱口桂一郎氏が提起した概念です。職務が特定されていないため柔軟な人事異動やチームワークが可能ですが、専門人材が育ちにくい点や、過重労働、客観的な市場価値との乖離などの課題が生じ、見直しが進んでいます。"
  },
  {
    "id": "mba-lead-040",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "ジョブ型人事制度の運用課題",
    "difficulty": "standard",
    "question": "職務記述書（ジョブディスクリプション）に基づき、仕事の難易度や市場相場に応じて処遇を決定する「ジョブ型人事制度」を導入した企業が直面しやすい運用上の落とし穴はどれか。",
    "options": [
      "終身雇用が保証されているため、従業員の転職意欲がゼロになってしまう問題",
      "全社員の給与が年功序列で一律に上がってしまい、人件費が高騰し続ける問題",
      "職務記述書に書かれていない突発的な業務やグレーゾーン業務を誰も引き受けなくなる「それ私の仕事ではありません」問題",
      "専門スキルが全く身につかず、ジェネラリストしか育成できなくなる問題"
    ],
    "answerIndex": 2,
    "explanation": "ジョブ型では職務責任が明確になる反面、記述書にない「隙間業務」「他部署の支援」を敬遠するサイロ化が生じやすくなります。成功企業では、共通コンピテンシーやチーム貢献度を副評価軸に組み込む等の工夫を凝らしています。"
  },
  {
    "id": "mba-lead-041",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "ワーク・エンゲージメント（Utrecht Work Engagement Scale）",
    "difficulty": "standard",
    "question": "シャウフェリらが提唱した概念で、仕事に対して前向きで充実した心理状態を指し、「活力（Vigor）」「熱意（Dedication）」「没頭（Absorption）」の3要素から測定される指標はどれか。",
    "options": [
      "ワーク・アディクション（仕事中毒）",
      "ワーク・エンゲージメント",
      "組織コミットメント",
      "職務満足度（Job Satisfaction）"
    ],
    "answerIndex": 1,
    "explanation": "ワーク・エンゲージメントは、単なる「職場への居心地の良さ（職務満足感）」や「心身をすり減らして働く状態（ワーク・アディクション）」とは異なり、高いエネルギーと強い熱意を持って前向きに仕事に没入している状態を指します。"
  },
  {
    "id": "mba-lead-042",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "表層的多様性と深層的多様性（Deep-level Diversity）",
    "difficulty": "standard",
    "question": "ダイバーシティ推進において、性別・年齢・国籍といった外見から容易に判別できる「表層的多様性」に対して、価値観、性格、思考特性、職務経験などの内面的な違いを何と呼ぶか。",
    "options": [
      "機能的多様性",
      "認知的協調性",
      "深層的多様性（Deep-level Diversity）",
      "制度的多様性"
    ],
    "answerIndex": 2,
    "explanation": "表層的多様性（属性）を満たすだけでは組織の真のイノベーションにはつながりません。バックグラウンドや視点、問題解決アプローチが異なる「深層的多様性」を尊重しインクルージョン（包摂）することで、創造的な意思決定が可能になります。"
  },
  {
    "id": "mba-lead-043",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "心理的契約（Psychological Contract）",
    "difficulty": "standard",
    "question": "書面上の雇用契約とは別に、従業員と雇用主との間で暗黙のうちに形成される「互いにこれを提供し、相手からはこれを得られるはずだ」という主観的な期待や信頼関係を何と呼ぶか。",
    "options": [
      "労働協約",
      "心理的契約（Psychological Contract）",
      "就業規則",
      "信託契約"
    ],
    "answerIndex": 1,
    "explanation": "デニス・ルソーが研究を体系化しました。「会社は安定を保障してくれる」「自分は忠誠を尽くす」という心理的契約が、一方的なリストラや制度改変で侵害（Breach）されると、従業員のコミットメント低下や大量離職を引き起こします。"
  },
  {
    "id": "mba-lead-044",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "クルト・レヴィンの変革モデル（解凍・変革・再凍結）",
    "difficulty": "standard",
    "question": "組織変革を成功させるための古典的フレームワークにおいて、既存の慣行や固定観念を疑わせ変革の必要性を痛感させる最初のステップ（Unfreezing）を日本語で何と呼ぶか。",
    "options": [
      "変革・移行（Changing / Moving）",
      "再凍結（Refreezing）",
      "解凍（Unfreezing）",
      "再構築（Restructuring）"
    ],
    "answerIndex": 2,
    "explanation": "レヴィンは組織変革を「解凍→変革→再凍結」の3段階で捉えました。解凍（現状の危機感を醸成し、古い習慣を手放す準備）を怠ったまま新しい制度（変革）を押し付けても、抵抗勢力に押し戻されて失敗します。"
  },
  {
    "id": "mba-lead-045",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "認知的多様性（Cognitive Diversity）",
    "difficulty": "standard",
    "question": "チームで複雑な問題解決や新事業のアイデア出しを行う際、メンバー間で「情報の捉え方」「問題の定義の仕方」「思考の道筋」が異なることによって、集団浅慮（グループシンク）を防ぎ創造性を高める多様性を何と呼ぶか。",
    "options": [
      "感情的多様性",
      "世代的多様性",
      "階層的多様性",
      "認知的多様性（Cognitive Diversity）"
    ],
    "answerIndex": 3,
    "explanation": "均質で同質的なエリート集団よりも、異なる認知スタイル（分析重視、直感重視、批判的思考重視など）を持つメンバーが集まったチームの方が、不確実な環境での難題解決スピードと質が劇的に高まることが実証されています。"
  },
  {
    "id": "mba-lead-046",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "モラルハザード（組織のエージェンシー問題）",
    "difficulty": "standard",
    "question": "組織行動や経済学において、情報の非対称性のもとで監視やモニタリングが不十分な環境にあるエージェント（従業員や管理職）が、自らの私利を優先して手抜きを行ったり過度なリスクをとったりする倫理的弛緩を何と呼ぶか。",
    "options": [
      "逆淘汰（アドバース・セレクション）",
      "フリーライダー問題",
      "モラルハザード（道徳的危険）",
      "サンクコスト効果"
    ],
    "answerIndex": 2,
    "explanation": "固定給で成果を問われない環境や、失敗のツケを会社が全額被る環境ではモラルハザードが多発します。これを防ぐために、適切なモニタリング体制、インセンティブ報酬の設計、企業理念の浸透が重要となります。"
  },
  {
    "id": "mba-lead-047",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "アダムスの公平説（Equity Theory）",
    "difficulty": "standard",
    "question": "従業員は「自分が組織に投入した貢献（インプット）に対する見返り（アウトプット）」の比率を他者と比較し、不公平だと感じた場合に手抜きや不満表明、離職によって不公平感を解消しようとするという理論はどれか。",
    "options": [
      "欲求階層説",
      "アダムスの公平説（衡平理論）",
      "二要因理論",
      "認知的不協和理論"
    ],
    "answerIndex": 1,
    "explanation": "ジョン・S・アダムスが提唱しました。「同僚よりも自分の方が働いているのに同じ給料である」と感じると、人は投入量（努力）を減らすか、報酬増額を要求するか、離職します。人事評価における「手続き的公正性」の担保が極めて重要です。"
  },
  {
    "id": "mba-lead-048",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "ヴルームの期待理論（VIE理論）",
    "difficulty": "standard",
    "question": "ビクター・ヴルームが提唱したモチベーション理論で、動機づけの強さは「努力が成果につながる確信（期待）」「成果が報酬につながる確信（道具性）」「その報酬が本人にとって魅力的か（誘意性）」の3要素の積（掛け算）で決まるとする学説はどれか。",
    "options": [
      "強化理論",
      "期待理論（Expectancy Theory）",
      "目標設定理論",
      "X理論・Y理論"
    ],
    "answerIndex": 1,
    "explanation": "動機づけ ＝ 期待（Expectancy） × 道具性（Instrumentality） × 誘意性（Valence）です。掛け算であるため、どれか1つでもゼロ（例：どんなに頑張っても達成不可能な目標、達成しても何の報酬も出ない、出される報酬が要らない）であれば動機づけはゼロになります。"
  },
  {
    "id": "mba-lead-049",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "ジョブ・クラフティング（Job Crafting）",
    "difficulty": "standard",
    "question": "トップダウンで与えられた職務記述書に対して受動的に従うのではなく、従業員自らが「タスクの範囲」「関係性（関わる人）」「仕事への意味づけ（認知的捉え直し）」を主体的に再設計・工夫していく行動を何と呼ぶか。",
    "options": [
      "ジョブ・エンリッチメント",
      "ジョブ・ローテーション",
      "ジョブ・シャドウイング",
      "ジョブ・クラフティング"
    ],
    "answerIndex": 3,
    "explanation": "WrzesniewskiとDuttonが提唱した概念です。清掃員が単に掃除をするだけでなく「患者の治癒を助ける環境づくり」と意味づけを変えたり、関わる同僚との対話を工夫することで、内発的モチベーションと幸福感（Well-being）を高める実践手法です。"
  },
  {
    "id": "mba-lead-050",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "組織社会化（Organizational Socialization / オンボーディング）",
    "difficulty": "standard",
    "question": "新入社員や中途採用者が、組織の一員として必要な知識、スキル、価値観、行動規範を獲得し、早期に戦力化および適応していく一連の受入・定着プロセスを何と呼ぶか。",
    "options": [
      "アウトソーシング",
      "リストラクチャリング",
      "レインフォースメント",
      "組織社会化（オンボーディング）"
    ],
    "answerIndex": 3,
    "explanation": "組織社会化が不十分だと「リアリティ・ショック（入社前期待と現実の落差）」による早期離職を招きます。良質なオンボーディングプログラムは、業務の手順習得だけでなく、社内のインフォーマルな人脈形成や暗黙知の共有を促進します。"
  },
  {
    "id": "mba-lead-051",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "境界連結者（Boundary Spanner）",
    "difficulty": "standard",
    "question": "自社の部署間や、組織の内と外（顧客、取引先、他業界など）の境界線に立ち、異なるコミュニティ間の情報や知見を橋渡し（翻訳・媒介）してオープンイノベーションを誘発する役割を持つキーパーソンを何と呼ぶか。",
    "options": [
      "ゲートキーパー（門番）",
      "オピニオンリーダー",
      "境界連結者（バウンダリー・スパナー）",
      "チェンジエージェント"
    ],
    "answerIndex": 2,
    "explanation": "社内の縦割りサイロを越え、外部の異質な知と社内の知を「知の探索・知の深化」の両面で結びつける存在です。両者の言語や文脈を理解する高いコミュニケーション能力とネットワークが要求されます。"
  },
  {
    "id": "mba-lead-052",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "アメーバ経営（京セラ方式）",
    "difficulty": "standard",
    "question": "稲盛和夫氏が考案した経営管理手法で、会社組織を10人前後の独立採算可能な小集団に細分化し、各小集団のリーダーに経営を委ねて「時間当り採算」を最大化させる自立分散型の組織モデルはどれか。",
    "options": [
      "アメーバ経営",
      "事業部制組織",
      "カンパニー制組織",
      "ホラクラシー"
    ],
    "answerIndex": 0,
    "explanation": "全員参加経営を実現し、社員一人ひとりに「経営者意識（オーナーシップ）」を持たせるシステムです。市場価格に基づく社内売買取引を通じて各アメーバの付加価値を可視化し、採算意識とリーダーシップを徹底的に涵養します。"
  },
  {
    "id": "mba-lead-053",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "ティール組織（Teal Organization）",
    "difficulty": "standard",
    "question": "フレデリック・ラルーが提唱した次世代の組織モデルで、階層的な指示命令系統を排し、「自主経営（セルフ・マネジメント）」「全体性（ホールネス）」「進化的目的（エボリューショナリー・パーパス）」の3要素を柱とする組織形態はどれか。",
    "options": [
      "ティール組織（進化型組織）",
      "官僚制組織（アンバー組織）",
      "成果主義組織（オレンジ組織）",
      "家族的組織（グリーン組織）"
    ],
    "answerIndex": 0,
    "explanation": "組織を固定的な機械ではなく一つの生命体として捉えます。予算管理や中間管理職を置かず、現場の各メンバーが助言プロセス（Advice Process）を経て自ら意思決定し、組織が向かうべきパーパスに自然と適応していくのが特徴です。"
  },
  {
    "id": "mba-lead-054",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "ホラクラシー（Holacracy）",
    "difficulty": "standard",
    "question": "役職や肩書き、上下関係を完全に撤廃し、組織の目的達成に必要な「ロール（役割）」と「サークル（チーム）」を定義して、現場メンバーに意思決定権限を徹底的に分散させる統治システムはどれか。",
    "options": [
      "マトリックス組織",
      "ピラミッド型組織",
      "ホラクラシー（分散型組織運営システム）",
      "プロジェクト型タスクフォース"
    ],
    "answerIndex": 2,
    "explanation": "ザッポス（Zappos）などが導入して話題となった管理手法です。人ではなく「ロール（役割）」に権限が紐づき、定期的なガバナンス・ミーティングを通じて憲法（Holacracy Constitution）に従ってルールがアップデートされます。"
  },
  {
    "id": "mba-lead-055",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "学習する組織（ピーター・センゲの5つのディシプリン）",
    "difficulty": "standard",
    "question": "ピーター・センゲが提唱した「学習する組織（Learning Organization）」において、物事の単なる表面的な事象ではなく背後にある因果関係のループや構造的相互作用を捉える中核の考え方はどれか。",
    "options": [
      "システム思考（Systems Thinking）",
      "自己マスタリー（Personal Mastery）",
      "メンタル・モデルの変革",
      "共有ビジョンの構築"
    ],
    "answerIndex": 0,
    "explanation": "システム思考は5つのディシプリン（規律）の要（礎石）です。「目先の対症療法が巡り巡って将来の悪化を招く」ようなフィードバック構造を俯瞰し、根本的なレバレッジ・ポイント（急所）を見極めて変革を導きます。"
  },
  {
    "id": "mba-lead-056",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "SECIモデル（知識創造理論）",
    "difficulty": "standard",
    "question": "野中郁次郎と竹内弘高が提唱した知識創造スパイラルにおいて、個人の経験や勘などの「暗黙知」を言語化・概念化して「形式知」へと変換・表現するフェーズはどれか。",
    "options": [
      "共同化（Socialization: 暗黙知から暗黙知）",
      "連結化（Combination: 形式知から形式知）",
      "内面化（Internalization: 形式知から暗黙知）",
      "表出化（Externalization: 暗黙知から形式知）"
    ],
    "answerIndex": 3,
    "explanation": "SECIモデルの核心プロセスです。暗黙知（職人の勘やベテランのノウハウ）をメタファーやアナロジーを用いてマニュアルやコンセプト（形式知）に落とし込むことで、組織全体で共有・再利用可能な知恵へと昇華させます。"
  },
  {
    "id": "mba-lead-057",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "心理的リアクタンス（Psychological Reactance）",
    "difficulty": "standard",
    "question": "他者から特定の行動を強制されたり自由を制限されたりした際に、人間が心理的抵抗を感じて「指示された方向とは真逆の行動を取りたくなる（自由を回復しようとする）」反発心理はどれか。",
    "options": [
      "心理的リアクタンス",
      "心理的安全性",
      "アンダーマイニング効果",
      "プラセボ効果"
    ],
    "answerIndex": 0,
    "explanation": "ジャック・ブレームが提唱しました。上司がマイクロマネジメントで細かく指図したり、制度を一方的に押し付けたりすると部下に強いリアクタンスが生じ、サボタージュや意欲減退を招きます。「選択の余地（自己決定感）」を残すことがリーダーシップの要諦です。"
  },
  {
    "id": "mba-lead-058",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "1on1ミーティングの目的と留意点",
    "difficulty": "standard",
    "question": "シリコンバレーを発祥とし日本企業でも広く定着した定期的な個別面談「1on1」において、従来の上司・部下の進捗管理面談と根本的に異なる特徴として最も適切なものはどれか。",
    "options": [
      "部下のキャリア支援・内省促進・能力開発のための「部下の時間」であり、部下がアジェンダを決める対話の場である",
      "あくまで上司が業務の納期遅れを詰問し、ノルマ達成のための対策を厳しく指示する場である",
      "年に1回だけ実施し、部下の翌年度の基本給とボーナス額を一方的に言い渡すための儀礼である",
      "社内での愚痴や噂話を聞き流すだけで、実際の業務改善や成長目標には一切関与しない雑談の時間である"
    ],
    "answerIndex": 0,
    "explanation": "1on1は「業務進捗の報告会（上司の時間）」ではなく、「部下のための時間」です。部下の内省（リフレクション）を促し、直面している課題の壁打ち相手となって自発的な成長と心理的安全性を育む伴走型マネジメントです。"
  },
  {
    "id": "mba-lead-059",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "人的資本経営とISO 30414",
    "difficulty": "standard",
    "question": "人材を単なる「管理すべきコスト」ではなく「価値を創出する資本」として捉え、その価値を最大限に引き出す経営手法であり、国際標準化機構が定めた人的資本情報開示の国際ガイドラインはどれか。",
    "options": [
      "ISO 9001",
      "ISO 30414",
      "ISO 14001",
      "ISO 27001"
    ],
    "answerIndex": 1,
    "explanation": "ISO 30414は人的資本に関する11領域58指標（コンプライアンス、ダイバーシティ、リーダーシップ、育成、生産性、エンゲージメント等）の開示指針です。有価証券報告書での人的資本開示義務化とともに、投資家が企業価値を測る決定打となっています。"
  },
  {
    "id": "mba-lead-060",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "シャインのキャリア・アンカー（Career Anchors）",
    "difficulty": "standard",
    "question": "エドガー・シャインが提唱した、個人がキャリアを選択・形成する際に「これだけは絶対に妥協・放棄したくない」と感じる不動の自己概念（拠り所）を何と呼ぶか。",
    "options": [
      "キャリア・プラトー",
      "キャリア・アンカー",
      "キャリア・ドリフト",
      "キャリア・サバイバル"
    ],
    "answerIndex": 1,
    "explanation": "専門能力、全般管理、自律、保障・安定、起業家精神、社会貢献、純粋な挑戦、ライフスタイルの8つのカテゴリーに分類されます。アンカーと職務適性が一致していると高い満足感と成果が得られますが、不一致だと深刻なストレスや早期退職に直結します。"
  },
  {
    "id": "mba-lead-061",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "プロティアン・キャリア（Protean Career）",
    "difficulty": "standard",
    "question": "ダグラス・ホールが提唱した、組織に依存して階段を昇る従来のキャリア観に対し、環境の変化に応じて自らの意思で柔軟に変幻自在に自己変容させ、「心理的成功」を目指すキャリア概念はどれか。",
    "options": [
      "トディショナル・キャリア",
      "プロティアン・キャリア（変幻自在なキャリア）",
      "バウンドレス・キャリア",
      "終身雇用型キャリア"
    ],
    "answerIndex": 1,
    "explanation": "ギリシャ神話の変幻自在な神プロテウスに由来します。外的成功（地位や年収）ではなく「アイデンティティ」と「アダプタビリティ（適応力）」を軸に、生涯を通じて自律的に学び変化し続ける現代型キャリア論の支柱です。"
  },
  {
    "id": "mba-lead-062",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "サバティカル休暇（Sabbatical Leave）",
    "difficulty": "standard",
    "question": "大学の教授職から一般企業へと普及した制度で、長年貢献した社員に対して数ヶ月から1年程度の使途自由な長期有給・無給休暇を与え、燃え尽き防止や学び直し、クリエイティビティの再充填を促す仕組みはどれか。",
    "options": [
      "サバティカル休暇（長期使途自由休暇）",
      "育児休業",
      "介護休業",
      "裁量労働制"
    ],
    "answerIndex": 0,
    "explanation": "安息日（サバト）を語源とします。優秀なハイパフォーマーのバーンアウト（燃え尽き症候群）を防ぎ、留学やボランティア、新規プロジェクト準備などによる自己変革を促すことで、中長期的な離職防止と組織活性化をもたらします。"
  },
  {
    "id": "mba-lead-063",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "譲渡制限付株式（RSU / Restricted Stock Units）",
    "difficulty": "standard",
    "question": "役員や重要幹部のリテンション（引き留め）と中長期的な株主価値向上へのコミットメントを目的に、一定の勤務期間（ベスティング期間）を経過するまで売却を制限した自社株式を付与するインセンティブ制度はどれか。",
    "options": [
      "譲渡制限付株式報酬（リストリクテッド・ストック / RSU）",
      "ストック・オプション（新株予約権）",
      "従業員持株会",
      "ファントム・ストック"
    ],
    "answerIndex": 0,
    "explanation": "株価が行使価格を下回ると価値がゼロになるストックオプションと異なり、RSUは株価が下落しても株式そのものの価値が残るため、人材引き留め効果（ゴールデン・ハンドカフ）が極めて強いのが特徴です。"
  },
  {
    "id": "mba-lead-064",
    "category": "leadership",
    "categoryName": "組織行動・人事 (OB & Leadership)",
    "term": "アルムナイ・ネットワーク（退職者コミュニティ）",
    "difficulty": "standard",
    "question": "かつて自社に在籍していた退職者（元社員）を「裏切り者」として排除するのではなく、貴重な人的資産として良好な関係を維持し、オープンイノベーション、協業、将来の再雇用（ブーメラン採用）へとつなげる仕組みはどれか。",
    "options": [
      "アウトソーシング・ベンダー",
      "労働組合（ユニオン）",
      "社友会（定年退職者懇親会）",
      "アルムナイ・ネットワーク（退職者ネットワーク）"
    ],
    "answerIndex": 3,
    "explanation": "アクセンチュアやマッキンゼーなどが先駆けた手法です。退職者が社外で培った新たな知見や人脈を自社に還元してもらったり、事業の共同パートナーや顧客となったり、即戦力として再入社する経路として戦略的に活用されています。"
  },
  {
    "id": "mba-ops-022",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "制約理論（TOC）",
    "difficulty": "standard",
    "question": "エリヤフ・ゴールドラットが提唱した、製造業やプロジェクト管理における改善手法であり、「全体のパフォーマンスはシステムの最も弱い環（制約）によって決定される」という前提に立ち、その制約を集中的に強化・改善することで全体最適を目指すマネジメント理論はどれか。",
    "options": [
      "制約理論（TOC: Theory of Constraints）",
      "シックスシグマ（Six Sigma）",
      "活動基準原価計算（ABC）",
      "トータル・プロダクティブ・メンテナンス（TPM）"
    ],
    "answerIndex": 0,
    "explanation": "正解は制約理論（TOC: Theory of Constraints）です。TOCでは、どんな複雑なシステムであってもスループット（収益）を制約している要素（ボトルネック）はごく少数であり、その制約を特定・活用・従属・向上させる5段階の集中プロセスを繰り返すことで劇的な改善を達成します。局所最適の積み上げが全体最適を阻害するという警鐘を鳴らしています。"
  },
  {
    "id": "mba-ops-023",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ボトルネック工程",
    "difficulty": "standard",
    "question": "一連の製造ラインや業務プロセスにおいて、生産能力（処理能力）が最も低く、全体の処理速度や最大産出量（スループット）を決定づけている工程を指す用語はどれか。",
    "options": [
      "クリティカル・チェーン",
      "ボトルネック工程",
      "バッファー工程",
      "ゲートウェイ工程"
    ],
    "answerIndex": 1,
    "explanation": "正解はボトルネック工程です。ボトルの首のように最も狭い部分が液体が出る速度を決めることに由来します。ボトルネック以外の工程でいくら作業スピードを上げても仕掛品（WIP）が積み上がるだけで全体の産出量は増えません。実務ではボトルネック工程の稼働率を100%に保ち、手前に適切なバッファーを置くことが重要です。"
  },
  {
    "id": "mba-ops-024",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "スループット会計",
    "difficulty": "standard",
    "question": "TOCの枠組みに基づく管理会計手法で、伝統的全部原価計算の「在庫を作れば固定費が繰り延べられて利益が増える」という歪みを防ぐため、指標を「スループット（販売額－真の変動費）」「投資・在庫」「業務費用」の3つに絞り込んで意思決定を行う手法はどれか。",
    "options": [
      "変動直接原価計算",
      "原価企画（ターゲットコスティング）",
      "スループット会計",
      "経済的付加価値（EVA）"
    ],
    "answerIndex": 2,
    "explanation": "正解はスループット会計です。伝統的な全部原価計算では過剰生産しても在庫に固定費が配賦されて見かけ上の利益が増加する欠点がありました。スループット会計では、真の変動費（主に原材料費）のみを売上から差し引いた「スループット」の最大化を目指し、在庫を減らし業務費用を抑制することでキャッシュフロー重視の的確な意思決定を可能にします。"
  },
  {
    "id": "mba-ops-025",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ブルウィップ効果",
    "difficulty": "standard",
    "question": "サプライチェーンにおいて、小売店でのわずかな最終需要の変動が、卸売業者、中間流通、一次メーカー、原材料メーカーへと上流に遡るにつれて増幅され、過剰在庫や欠品を深刻化させる現象を何と呼ぶか。",
    "options": [
      "スノーボール効果",
      "ピグマリオン効果",
      "バタフライ効果",
      "ブルウィップ効果（鞭効果）"
    ],
    "answerIndex": 3,
    "explanation": "正解はブルウィップ効果（鞭効果）です。鞭の持ち手のわずかな揺れが先端で巨大な波打ちになる様子に例えられます。リードタイムの長さ、不正確な需要予測の積み重ね、バッチ発注、価格変動による買いだめなどが原因です。対策としてPOSデータのリアルタイム共有、情報の一元化（EDI）、リードタイム短縮、VMIの導入などが有効です。"
  },
  {
    "id": "mba-ops-026",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "JIT（ジャストインタイム）",
    "difficulty": "standard",
    "question": "トヨタ生産方式（TPS）の2本柱の1つであり、「必要なものを、必要なときに、必要な量だけ」生産・運搬することによって、工程間の無駄な在庫や停滞を極限まで排除する生産思想はどれか。",
    "options": [
      "JIT（ジャストインタイム）",
      "自働化（ニンベンのある自働化）",
      "モジュラー生産",
      "バッチ・アンド・キュー方式"
    ],
    "answerIndex": 0,
    "explanation": "正解はJIT（ジャストインタイム）です。トヨタ生産方式は「自働化」と「JIT」を2本柱としています。JITを成立させるためには、後工程引き取り（かんばん方式）、工程の流れ化（平準化生産）、小ロット化・段取り時間の短縮が不可欠です。「在庫は諸悪の根源」と捉え、在庫を減らすことで潜在化していた工程の問題点を浮き彫りにします。"
  },
  {
    "id": "mba-ops-027",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "かんばん方式",
    "difficulty": "standard",
    "question": "後工程が使った部品の分だけ前工程に取りに行き、前工程は引き取られた分だけを生産するという「後工程引き取り」を実現するために、指示書となる伝票や電子タグを用いる自律分散型の工程管理ツールはどれか。",
    "options": [
      "ガントチャート",
      "かんばん方式",
      "MRP（所要量計画）",
      "PERT/CPM"
    ],
    "answerIndex": 1,
    "explanation": "正解はかんばん方式です。かんばんには「引取かんばん」と「仕掛けかんばん」があり、工程間やサプライヤーとの間で循環しながら生産・運搬指示として機能します。中央の生産計画に基づくプッシュ型生産（MRP等）と異なり、現場の現物消費に連動するプル型生産の代表例です。現在では電子化された「e-かんばん」も普及しています。"
  },
  {
    "id": "mba-ops-028",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "リーン生産方式",
    "difficulty": "standard",
    "question": "トヨタ生産方式（TPS）の強みを米MITのWomackらが研究・体系化し、付加価値を生まない一切の「ムダ（Waste）」を徹底的に排除して、高品質かつ高効率なオペレーションを実現する世界的マネジメント概念はどれか。",
    "options": [
      "アジャイルマニフェスト",
      "フォーディズム（大量生産方式）",
      "リーン生産方式（Lean Manufacturing）",
      "サプライチェーンカウンシル"
    ],
    "answerIndex": 2,
    "explanation": "正解はリーン生産方式（Lean Manufacturing）です。「lean（贅肉のない）」の名の通り、作りすぎのムダ、手待ちのムダ、運搬のムダ、加工そのもののムダ、在庫のムダ、動作のムダ、不良をつくるムダの「7つのムダ」を排除します。製造業にとどまらず、リーンスタートアップやリーンITなど幅広いビジネス領域に応用されています。"
  },
  {
    "id": "mba-ops-029",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "シックスシグマ（Six Sigma）",
    "difficulty": "standard",
    "question": "モトローラが開発しGEが全社展開して広く知られた品質管理・経営変革手法で、統計的手法を用いてプロセスのバラツキを抑え、100万回の機会あたり3.4個以下の欠陥レベルを目指すアプローチはどれか。",
    "options": [
      "QCサークル",
      "ISO 9001",
      "クリティカルパス法",
      "シックスシグマ（Six Sigma）"
    ],
    "answerIndex": 3,
    "explanation": "正解はシックスシグマ（Six Sigma）です。シグマ（σ）は標準偏差を表し、規格限界が平均値から±6σの幅に収まる（正規分布で片側1.5σのシフトを考慮すると3.4 DPMO: Defects Per Million Opportunities）品質水準を意味します。改善プロジェクトはDMAIC（Define-Measure-Analyze-Improve-Control）と呼ばれる5段階のプロセスに沿って、ブラックベルト等の認定者が主導します。"
  },
  {
    "id": "mba-ops-030",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "安全在庫",
    "difficulty": "standard",
    "question": "調達や生産のリードタイムの遅延、あるいは予期せぬ需要の急増といった不確実性に対応し、所定の品切れ率（サービス率）を維持するために保持されるバッファー在庫はどれか。",
    "options": [
      "安全在庫（Safety Stock）",
      "サイクル在庫",
      "投機在庫",
      "パイプライン在庫"
    ],
    "answerIndex": 0,
    "explanation": "正解は安全在庫（Safety Stock）です。平常時の需要に対応する「サイクル在庫」とは区別されます。安全在庫量は一般に「安全係数（要求サービス率に対応する標準正規分布の値）× 需要の標準偏差 × √(調達リードタイム)」で計算されます。サービス率を99%以上に高めようとすると安全在庫は指数関数的に急増するため、コストと欠品損失のバランスを取ることが経営上重要です。"
  },
  {
    "id": "mba-ops-031",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "EOQ（経済的発注量）",
    "difficulty": "standard",
    "question": "年間需要量が一定の状況下で、「発注ごとに発生する発注費用（段取り費用）」の年額と、「在庫を保管・維持するための在庫保持費用」の年額の合計が最小となる最適な1回あたり発注量を求めるモデルはどれか。",
    "options": [
      "MRP（資材所要量計画）",
      "EOQ（経済的発注量: Economic Order Quantity）",
      "安全余裕率",
      "ロットサイズ・テーラリング"
    ],
    "answerIndex": 1,
    "explanation": "正解はEOQ（経済的発注量: Economic Order Quantity）です。発注回数を増やすと1回あたりの発注費用が嵩む一方、平均在庫が減るため在庫保持費用は下がります。逆に発注量を増やすと発注費用は下がりますが保持費用が増加します。両者の合計費用曲線の底（交点）となる発注量 Q = √(2 × 年間需要量 × 1回あたり発注費 / 単位あたり年間保持費) を算出します。"
  },
  {
    "id": "mba-ops-032",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "定期発注方式と定量発注方式",
    "difficulty": "standard",
    "question": "在庫管理における発注方式の分類において、あらかじめ定めた一定の周期ごとにその時点の在庫量や需要予測を考慮して毎回異なる量を発注する方式として適切なものはどれか。",
    "options": [
      "定量発注方式（発注点方式）",
      "2ビン方式（複棚法）",
      "定期発注方式",
      "随時発注方式"
    ],
    "answerIndex": 2,
    "explanation": "正解は定期発注方式です。定期発注方式は毎週・毎月など決まった時期に（予測需要量＋安全在庫－現在庫量－発注残）を算出して発注します。需要変動が大きく単価の高い重要品目（ABC分析のAランク品など）に適用されます。一方、在庫が一定水準（発注点）まで減少した時に毎回決まった数量を発注するのが定量発注方式（発注点方式）で、B/Cランク品等に適しています。"
  },
  {
    "id": "mba-ops-033",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ABC分析",
    "difficulty": "standard",
    "question": "在庫管理や販売管理において、売上高や在庫金額などの累計構成比に基づいて品目を重要度順に3つのグループに分類し、重点管理を行う手法はどれか。",
    "options": [
      "3C分析",
      "SWOT分析",
      "ポジショニングマップ分析",
      "ABC分析（重点分析）"
    ],
    "answerIndex": 3,
    "explanation": "正解はABC分析（重点分析）です。パレートの法則（80:20の法則）を応用した手法で、通常、売上構成比上位70〜80%を占める品目を「Aランク（最重点管理・定期発注等）」、続く15〜20%を「Bランク」、残り5〜10%の多数の品目を「Cランク（簡易管理・定量発注等）」に分類し、経営資源を効率的に配分します。"
  },
  {
    "id": "mba-ops-034",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "セル生産方式",
    "difficulty": "standard",
    "question": "ベルトコンベアによる細分化されたライン生産方式とは異なり、1人または少数の多能工が「U字型」などの作業台（セル）を囲み、製品の組み立てから検査までの一連の工程を担当する多品種少量生産向けの生産方式はどれか。",
    "options": [
      "セル生産方式（屋台方式）",
      "フローショップ型生産",
      "プロセスオートメーション",
      "プロジェクト型生産"
    ],
    "answerIndex": 0,
    "explanation": "正解はセル生産方式（屋台方式）です。作業者が複数の工程を担当するため多能工化が必要ですが、需要変動に応じた生産量の調整（ラインの増減）が容易であり、仕掛品在庫の削減や作業者の責任感・モチベーション向上につながります。デジカメやパソコンなど、製品ライフサイクルが短く需要変化の激しい電子機器組立で広く普及しました。"
  },
  {
    "id": "mba-ops-035",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "VMI（ベンダー主導型在庫管理）",
    "difficulty": "standard",
    "question": "サプライヤー（納入業者）が、顧客（小売業者や完成品メーカー）の在庫情報や販売情報をリアルタイムで共有され、自らの責任と判断で顧客側の在庫補充計画を立てて補充を行うSCM手法はどれか。",
    "options": [
      "EDI（電子データ交換）",
      "VMI（Vendor Managed Inventory: ベンダー主導型在庫管理）",
      "OEM（相手先ブランド名製造）",
      "3PL（サードパーティ・ロジスティクス）"
    ],
    "answerIndex": 1,
    "explanation": "正解はVMI（Vendor Managed Inventory）です。従来は顧客からの発注を受けてサプライヤーが納品していましたが、VMIでは顧客の倉庫や店頭の在庫レベルをサプライヤーが遠隔監視し、適正在庫を維持するように自律的に納入します。顧客は発注・在庫管理工数を削減でき、サプライヤーは需要の波を直接把握して生産計画を平準化できるメリットがあります。"
  },
  {
    "id": "mba-ops-036",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "CPFR",
    "difficulty": "standard",
    "question": "小売業者とメーカー（サプライヤー）が、販売計画、需要予測、在庫補充の全プロセスにおいて協働・合意形成を行い、サプライチェーン全体の効率化と欠品撲滅を同時に目指すグローバルなSCM協働モデルはどれか。",
    "options": [
      "ERP（統合基幹業務システム）",
      "S&OP（セールス＆オペレーションズ・プランニング）",
      "CPFR（協働型計画・予測・補充）",
      "SCOR（サプライチェーン運用参照モデル）"
    ],
    "answerIndex": 2,
    "explanation": "正解はCPFR（Collaborative Planning, Forecasting and Replenishment: 協働型計画・予測・補充）です。米VICSが提唱した枠組みで、単なるデータ共有にとどまらず、販促キャンペーンや新商品投入などの販売計画、需要予測の策定、予測値に乖離が生じた場合の例外処理基準まで両者で事前に合意し、サプライチェーンの無駄と欠品リスクを最小化します。"
  },
  {
    "id": "mba-ops-037",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "リバースロジスティクス",
    "difficulty": "standard",
    "question": "製品が生産者から消費者に届く順方向の流通（動脈物流）に対し、返品、修理、リユース、リサイクル、廃棄などのために消費者側から生産者・回収拠点へと遡る物流プロセスの総称はどれか。",
    "options": [
      "調達物流",
      "社内物流",
      "ラストワンマイル物流",
      "リバースロジスティクス（静脈物流）"
    ],
    "answerIndex": 3,
    "explanation": "正解はリバースロジスティクス（静脈物流）です。循環型社会（サーキュラーエコノミー）への移行やEC市場の拡大に伴う返品対応、電子機器の再資源化法規制への対応などから重要性が急激に高まっています。荷姿や発生タイミングが不規則であるため、順方向の物流よりもコスト管理やトレーサビリティの確保が難易度の高いオペレーションとなります。"
  },
  {
    "id": "mba-ops-038",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "SMED（シングル段取り）",
    "difficulty": "standard",
    "question": "多品種少量生産を効率化するために新郷重雄氏らが考案した、金型やツールの交換などの段取り替え時間を「10分未満（1桁分＝Single Minute）」に短縮する手法はどれか。",
    "options": [
      "SMED（Single Minute Exchange of Die）",
      "5S運動",
      "TPM（全員参加の生産保全）",
      "カンバン・ローリング"
    ],
    "answerIndex": 0,
    "explanation": "正解はSMED（Single Minute Exchange of Die: シングル段取り）です。段取り作業を「機械を止めて行う内段取り」と「機械の稼働中に事前準備・後片付けを行う外段取り」に峻別し、内段取りを極力外段取り化したり、ボルト締めのワンタッチ化などを推進します。段取り時間が短縮されれば小ロット生産が可能になり、仕掛品在庫の劇的削減とリードタイム短縮が実現します。"
  },
  {
    "id": "mba-ops-039",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ポカヨケ",
    "difficulty": "standard",
    "question": "作業者が不注意や勘違い（ポカ）を起こしても、物理的な治具やセンサー、インターロック機構などによってミスが発生しない、あるいはミスを即座に検知して工程を停止させる仕組みはどれか。",
    "options": [
      "フェイルセーフ",
      "ポカヨケ（フールプルーフ）",
      "アンドン",
      "タイムスタンプ"
    ],
    "answerIndex": 1,
    "explanation": "正解はポカヨケ（フールプルーフ / Error-proofing）です。トヨタ生産方式で確立され、今や世界中で「Poka-yoke」として通じる概念です。例えば形状が合わないとプラグが挿入できないコネクタ設計や、部品を取り忘れると次の工程へ進めない光電センサーなどが該当します。人間の注意力だけに依存せず、仕組みで品質を作り込む思想です。"
  },
  {
    "id": "mba-ops-040",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "OEE（総合設備効率）",
    "difficulty": "standard",
    "question": "製造設備の生産性を総合的に評価する指標で、「時間稼働率」「性能稼働率」「良品率」の3つの要素を掛け合わせて算出するグローバルスタンダードな指標はどれか。",
    "options": [
      "ROI（投下資本利益率）",
      "MTBF（平均故障間隔）",
      "OEE（Overall Equipment Effectiveness: 総合設備効率）",
      "タクトタイム充足率"
    ],
    "answerIndex": 2,
    "explanation": "正解はOEE（Overall Equipment Effectiveness: 総合設備効率）です。TPM（総合的設備保全）で提唱されました。計算式は「時間稼働率（停止ロスを排除）× 性能稼働率（速度低下やチョコ停ロスを排除）× 良品率（不良・手直しロスを排除）」です。一般にワールドクラスの製造ラインでは85%以上のOEEが目標とされ、設備の隠れたロスを可視化するために重宝されます。"
  },
  {
    "id": "mba-ops-041",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ラインバランシング",
    "difficulty": "standard",
    "question": "組立ラインなどの連続工程において、各工程の作業時間のバラツキをなくし、均等に配分することで、工程間の手待ち時間や仕掛品滞留を削減して編成効率を高める設計手法はどれか。",
    "options": [
      "スケジューリング",
      "ディスパッチング",
      "ロードレベリング",
      "ラインバランシング（工程編成）"
    ],
    "answerIndex": 3,
    "explanation": "正解はラインバランシング（工程編成）です。ライン全体のサイクルタイムは最も作業時間の長い「ピッチ（ボトルネック工程）」に支配されるため、他の工程に無駄な手待ち時間（バランスロス）が生じます。工程間で作業を分割・再配分したり治具を導入して作業時間を平準化し、編成効率＝（各工程作業時間の合計）÷（工程数 × サイクルタイム）を100%に近づけます。"
  },
  {
    "id": "mba-ops-042",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "歩留まり（歩留率）",
    "difficulty": "standard",
    "question": "投入された主原料や原材料の量に対して、実際に得られた良品の割合（合格品数や良品重量の比率）を示す生産効率・品質指標はどれか。",
    "options": [
      "歩留まり（歩留率: Yield Rate）",
      "稼働率",
      "直行率",
      "負荷率"
    ],
    "answerIndex": 0,
    "explanation": "正解は歩留まり（歩留率: Yield Rate）です。半導体製造や化学プロセス、食品製造などにおいて極めて重視される指標です。歩留まりが向上すると、同じ原材料・エネルギー・労力から得られる製品数量が増加するため、製造原価の劇的な低減と利益率の改善に直結します。"
  },
  {
    "id": "mba-ops-043",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "タクトタイム",
    "difficulty": "standard",
    "question": "「市場の需要ペース」に合わせて製品を何分何秒に1台作らなければならないかを示す値であり、「稼働可能時間 ÷ 必要生産数量」で求められる指標はどれか。",
    "options": [
      "サイクルタイム",
      "タクトタイム（ピッチタイム）",
      "リードタイム",
      "スループットタイム"
    ],
    "answerIndex": 1,
    "explanation": "正解はタクトタイム（Takt Time）です。ドイツ語のTakt（拍子・指揮棒）に由来します。現場の実際の作業速度である「サイクルタイム」とは区別され、タクトタイムは市場の需要によって決まる外生的な目標テンポです。サイクルタイムがタクトタイムより長ければ納期遅れが生じ、短すぎれば過剰生産のムダが発生するため、両者を一致させる改善が行われます。"
  },
  {
    "id": "mba-ops-044",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "5S",
    "difficulty": "standard",
    "question": "製造現場やオフィスの環境改善・規律維持の基本活動であり、「整理・整頓・清掃・清潔・躾」の5つの頭文字をとった活動の総称はどれか。",
    "options": [
      "3定（定位・定品・定量）",
      "4M（人・機械・材料・方法）",
      "5S",
      "7つのムダ"
    ],
    "answerIndex": 2,
    "explanation": "正解は5Sです。「整理（要るものと要らないものを分け、要らないものを捨てる）」「整頓（要るものを誰でもすぐ取り出せるよう明示・配置する）」「清掃（ゴミや汚れをなくし点検する）」「清潔（前の3Sを維持する）」「躾（ルールを正しく守る習慣をつける）」から成ります。あらゆるオペレーション改善や安全衛生・品質管理の基礎と位置づけられます。"
  },
  {
    "id": "mba-ops-045",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "MTS（見込み生産）とMTO（受注生産）",
    "difficulty": "standard",
    "question": "顧客から注文を受ける前に需要予測に基づいてあらかじめ製品を生産・在庫化しておき、注文が入ると即座に在庫から引き当てて出荷する生産形態はどれか。",
    "options": [
      "MTO（Make to Order: 受注生産）",
      "ATO（Assemble to Order: 受注組立生産）",
      "ETO（Engineer to Order: 受注設計生産）",
      "MTS（Make to Stock: 見込み生産）"
    ],
    "answerIndex": 3,
    "explanation": "正解はMTS（Make to Stock: 見込み生産）です。標準規格品や消費財で多く採用され、顧客のリードタイム要求が極めて短い場合に適しています。ただし需要予測が外れると欠品や過剰在庫・廃棄ロスを抱えるリスクがあります。これに対し、注文確定後に生産を開始するのがMTO（受注生産）であり、在庫リスクは低いものの顧客納期の短縮が課題となります。"
  },
  {
    "id": "mba-ops-046",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "TQM（総合的品質管理）",
    "difficulty": "standard",
    "question": "製造現場での品質管理（TQC）を発展させ、設計、購買、営業、管理部門を含む全部門・全階層の全従業員が参加し、顧客満足の向上を経営目標として組織横断で展開する経営管理体系はどれか。",
    "options": [
      "TQM（Total Quality Management: 総合的品質管理）",
      "BPR（ビジネスプロセス・リエンジニアリング）",
      "BSC（バランスト・スコアカード）",
      "MBO（目標による管理）"
    ],
    "answerIndex": 0,
    "explanation": "正解はTQM（Total Quality Management: 総合的品質管理）です。製品そのものの品質だけでなく、業務の質、プロセスの質、経営の質を高めることを目指します。PDCAサイクルの徹底、事実に基づく管理、重点指向、プロセス重視などの原則を持ち、デミング賞やマルコム・ボルドリッジ賞の評価軸にもなっています。"
  },
  {
    "id": "mba-ops-047",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "管理図（Control Chart）",
    "difficulty": "standard",
    "question": "製造工程の品質特性値を時系列にプロットし、中心線（CL）と上方管理限界線（UCL）・下方管理限界線（LCL）を用いて、工程が統計的管理状態にあるか（異常原因によるバラツキが発生していないか）を判定するツールはどれか。",
    "options": [
      "パレート図",
      "管理図（Control Chart）",
      "特性要因図（フィッシュボーン）",
      "散布図"
    ],
    "answerIndex": 1,
    "explanation": "正解は管理図（Control Chart: シューハート管理図）です。新旧QC7つ道具の1つであり、統計的工程管理（SPC）の中核です。工程のバラツキを「偶然原因（不可避な通常ノイズ）」と「異常原因（材料不良・機械異常・作業ミス等）」に峻別し、限界線の外側へのプロットや連続する特異パターンを検知することで、不良品の発生を未然に防ぎます。"
  },
  {
    "id": "mba-ops-048",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "なぜなぜ5回（5 Whys）",
    "difficulty": "standard",
    "question": "問題が発生した際、表面的な事象への対症療法で終わらせず、「なぜそれが起きたのか？」という問いを何度も繰り返すことで、根本原因（真因: Root Cause）を突き止める分析手法はどれか。",
    "options": [
      "5つの力（ファイブフォース）",
      "5W1H分析",
      "なぜなぜ5回（5 Whys）",
      "シナリオプランニング"
    ],
    "answerIndex": 2,
    "explanation": "正解はなぜなぜ5回（5 Whys）です。トヨタ生産方式で大野耐一氏らが実践・定着させた根本原因分析（RCA）の手法です。「機械が止まった→ヒューズが切れた→過負荷がかかった→軸受の潤滑油が切れた→ポンプが壊れていた」のように論理の連鎖を辿り、個人のミスではなくプロセスの構造的な欠陥を是正・再発防止します。"
  },
  {
    "id": "mba-ops-049",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ミルクラン（巡回集荷）",
    "difficulty": "standard",
    "question": "複数の部品メーカーが個別に完成品組立工場へトラックで納入するのではなく、1台のトラックが複数の仕入先を決められたルート・時間で巡回して部品を集荷し、工場へ運ぶ物流方式はどれか。",
    "options": [
      "チャーター便",
      "ドロップシッピング",
      "ピギーバック輸送",
      "ミルクラン（巡回集荷便）"
    ],
    "answerIndex": 3,
    "explanation": "正解はミルクラン（巡回集荷便）です。酪農地帯で牛乳集荷車が複数の農家を回って搾乳したミルクを集めたことに由来します。完成品メーカーが主導して運行管理を行うことで、小ロットでの高頻度納入が可能となり、工場内の受入混雑の緩和やサプライチェーン全体の仕掛品在庫の削減、積載効率向上が達成できます。"
  },
  {
    "id": "mba-ops-050",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "クロスドッキング",
    "difficulty": "standard",
    "question": "物流センターにおいて、入庫した商品を棚に格納して保管することなく、荷受ドックから即座に仕分け・積み替えを行い、配送先ごとのトラックに積み込んで短時間で出庫する高効率な物流手法はどれか。",
    "options": [
      "クロスドッキング（Cross Docking）",
      "自動倉庫ピッキング",
      "ロケーション管理",
      "デッドストック引当"
    ],
    "answerIndex": 0,
    "explanation": "正解はクロスドッキング（Cross Docking）です。米ウォルマートがサプライチェーンの強みとして確立したことで有名です。倉庫を「保管場所」ではなく「積み替え・仕分けの結節点（ハブ）」として機能させるため、倉庫保管費用やハンドリング工数が大幅に削減され、サプライチェーン全体のリードタイムが極小化されます。"
  },
  {
    "id": "mba-ops-051",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "3PL（サードパーティ・ロジスティクス）",
    "difficulty": "standard",
    "question": "荷主企業に対して、単なる輸送や保管などの個別業務の請負にとどまらず、輸送ルートの最適化や在庫管理、情報システムの構築まで含めた包括的な物流改革を長期的契約で一括受託するサービスはどれか。",
    "options": [
      "1PL（ファーストパーティ・ロジスティクス）",
      "3PL（Third Party Logistics）",
      "2PL（セカンドパーティ・ロジスティクス）",
      "フォワーダー（利用運送事業者）"
    ],
    "answerIndex": 1,
    "explanation": "正解は3PL（Third Party Logistics）です。荷主（1st Party）、実運送・倉庫事業者（2nd Party）に対し、第3者として荷主の立場に立ち、全体最適の観点から物流戦略・オペレーションを一括設計・運営します。自社で車両や倉庫を持つアセット型と、自社資産を持たず提携ネットワークを活用するノンアセット型があります。"
  },
  {
    "id": "mba-ops-052",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "モジュラー設計（組み合わせ型アーキテクチャ）",
    "difficulty": "standard",
    "question": "製品を構成する部品やサブシステム間のインターフェース（接続規格）を標準化し、各部品（モジュール）を独立して設計・改良できるようにすることで、多様なバリエーションを容易に生み出す設計手法はどれか。",
    "options": [
      "インテグラル設計（擦り合わせ型アーキテクチャ）",
      "リバースエンジニアリング",
      "モジュラー設計（組み合わせ型アーキテクチャ）",
      "オープンソースハードウェア"
    ],
    "answerIndex": 2,
    "explanation": "正解はモジュラー設計（組み合わせ型アーキテクチャ）です。パソコン（CPU、メモリ、SSDの組み合わせ）が代表例です。部品間の相互依存性が強い「インテグラル設計（自動車のエンジンと車体など）」に比べ、開発スピードが速く、サプライチェーンの分業化やコスト削減が容易ですが、参入障壁が低くなりコモディティ化しやすい特徴があります。"
  },
  {
    "id": "mba-ops-053",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "マスカスタマイゼーション",
    "difficulty": "standard",
    "question": "大量生産（マスプロダクション）が持つ高い生産効率・低コストのメリットと、個別受注生産（カスタム化）が持つ顧客一人ひとりの個別ニーズへの対応力を両立させるオペレーション手法はどれか。",
    "options": [
      "クラウドソーシング",
      "サブスクリプションモデル",
      "OEM供給",
      "マスカスタマイゼーション（Mass Customization）"
    ],
    "answerIndex": 3,
    "explanation": "正解はマスカスタマイゼーション（Mass Customization）です。B.J.パインらが提唱しました。共通化されたモジュール部品の大量調達・大量生産を行いながら、最終組み立てやカラーリング、仕様選択を顧客の注文に応じて組み合わせることで、低コスト・短納期と個別仕様の両立を実現します。スニーカーのオーダーメイドやPCのBTOなどが典型例です。"
  },
  {
    "id": "mba-ops-054",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "遅延戦略（Postponement）",
    "difficulty": "standard",
    "question": "製品の最終的な仕様決定（組立、包装、ラベル貼り、塗装など）を可能な限り顧客の注文確定の直前まで遅らせることで、多様な仕様ごとの在庫リスクを低減し、需要変動への適応力を高めるSCM戦略はどれか。",
    "options": [
      "遅延戦略（ポストポーンメント）",
      "先行手配戦略",
      "プッシュ型一括供給戦略",
      "アンカリング戦略"
    ],
    "answerIndex": 0,
    "explanation": "正解は遅延戦略（ポストポーンメント: Postponement Strategy）です。HPのプリンターが世界各国の電源プラグや取扱説明書の同梱を仕向地（現地物流センター）で行うようにした事例や、セーターを白地で編んでおき流行色が決まってから染色する「形状遅延（Form Postponement）」が有名です。共通部品の段階で保持することで集約効果が働き、安全在庫を削減できます。"
  },
  {
    "id": "mba-ops-055",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "ドロップシッピング",
    "difficulty": "standard",
    "question": "EC小売業者が顧客から注文を受けた際、自社で在庫を持たず、提携先のメーカーや卸売業者に注文情報を転送して、そこから顧客へ直接製品を発送させる販売・物流形態はどれか。",
    "options": [
      "コンテナ輸送",
      "ドロップシッピング（Drop Shipping）",
      "ボンダーデポ",
      "VMI方式"
    ],
    "answerIndex": 1,
    "explanation": "正解はドロップシッピング（Drop Shipping）です。小売業者は在庫の保有リスクや倉庫管理・梱包発送のオペレーション負担を完全に回避できるため、少ない資本で多様な品揃えを提供できます。一方で、サプライヤー側の在庫切れによる納期遅延リスクや、品質不良時のコントロールが難しいといったデメリットも存在します。"
  },
  {
    "id": "mba-ops-056",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "デカップリングポイント",
    "difficulty": "standard",
    "question": "サプライチェーンにおいて、「需要予測に基づいて生産・在庫化するプッシュ型領域」と「実際の顧客注文情報に基づいて生産・手配するプル型領域」が切り替わる境界点を何と呼ぶか。",
    "options": [
      "ブレークイーブンポイント",
      "ボトルネックポイント",
      "デカップリングポイント（注文分離点）",
      "クリティカルノード"
    ],
    "answerIndex": 2,
    "explanation": "正解はデカップリングポイント（注文分離点 / Decoupling Point）です。このポイントに戦略的な在庫を配置することで、上流の生産平準化と下流の顧客リードタイム要求の短縮を両立させます。MTS（見込み生産）では製品倉庫、ATO（受注組立）では半製品・モジュール倉庫、MTO（受注生産）では原材料倉庫がデカップリングポイントとなります。"
  },
  {
    "id": "mba-ops-057",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "リトルの法則（Little's Law）",
    "difficulty": "standard",
    "question": "待ち行列理論やオペレーション管理における基本法則で、定常状態のシステムにおいて「平均仕掛品数（L）＝ 平均到着率（スループット: λ）× 平均滞留時間（リードタイム: W）」が成立することを示した法則はどれか。",
    "options": [
      "ムーアの法則",
      "メトカーフの法則",
      "ツァイガルニク効果",
      "リトルの法則（Little's Law）"
    ],
    "answerIndex": 3,
    "explanation": "正解はリトルの法則（Little's Law）です。MITのジョン・リトルによって証明されました。業務プロセスにおいて仕掛品（WIP）を増やせばリードタイムが長くなり、リードタイムを短縮したければ仕掛品を減らすかスループットを高める必要があるという、製造業やサービスプロセスの在庫・フロー管理における数学的基盤となっています。"
  },
  {
    "id": "mba-ops-058",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "コンカレント・エンジニアリング",
    "difficulty": "standard",
    "question": "製品開発において、企画・設計・生産技術・購買・製造・保守などの各工程を直列（順送り）に進めるのではなく、初期段階から各部門が並行して同時進行・協働することで、手戻りを防止し開発期間を大幅に短縮する手法はどれか。",
    "options": [
      "コンカレント・エンジニアリング（Concurrent Engineering）",
      "ウォーターフォールモデル",
      "リバースエンジニアリング",
      "ステージゲート法"
    ],
    "answerIndex": 0,
    "explanation": "正解はコンカレント・エンジニアリング（Concurrent Engineering）です。3D CADやデジタルモックアップなどのITツールの発展により大きく進展しました。設計段階で製造性や調達性、組み立てやすさを織り込む（DFM: Design for Manufacturability）ことで、試作後の設計変更（手戻り）による開発遅延やコスト超過を未然に防ぎます。"
  },
  {
    "id": "mba-ops-059",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "アンドン（目視管理）",
    "difficulty": "standard",
    "question": "製造ラインでライン停止や設備異常、部品切れなどのトラブルが発生した際、ランプの点灯や表示板で即座に現場全体に知らせ、監督者や保全担当者が迅速に支援に駆けつけられるようにする表示装置・仕組みはどれか。",
    "options": [
      "カンバン",
      "アンドン（Andon）",
      "スコープマネジメント",
      "オピニオンボード"
    ],
    "answerIndex": 1,
    "explanation": "正解はアンドン（Andon）です。行灯（あんどん）に由来するトヨタ生産方式の用語で、国際的にもそのまま使われます。作業者は異常を見つけたら躊躇なく「ライン停止ボタン」を押す権限を持ち、アンドンが点灯することで問題が即座に可視化（見える化）され、不良を次工程に流さない品質担保の基盤となります。"
  },
  {
    "id": "mba-ops-060",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "稼働率と可動率",
    "difficulty": "standard",
    "question": "トヨタ生産方式において、「機械を動かしたいときにいつでも正常に動く状態にある割合（目標は100%）」を指し、生産計画に対する実際の操業度合いを示す「稼働率」と明確に区別される概念はどれか。",
    "options": [
      "歩留率",
      "直行率",
      "可動率（べきどうりつ）",
      "負荷率"
    ],
    "answerIndex": 2,
    "explanation": "正解は可動率（べきどうりつ / Availability）です。需要がないのに機械を動かし続けると「稼働率」は上がりますが過剰在庫のムダを生みます。一方、「可動率」は『動かしたいときにきちんと動くか』という設備の保全状態を示し、日常の点検・段取り改善により100%を目指すべき指標とされます。同音異義を避けるため現場では「べきどうりつ」と呼びます。"
  },
  {
    "id": "mba-ops-061",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "サプライチェーン・レジリエンス",
    "difficulty": "standard",
    "question": "自然災害、地政学的リスク、感染症のパンデミックなどの不測のサプライチェーン寸断危機に直面した際、被害を最小限に抑え、代替ルートや代替調達により迅速に機能を回復・適応させる組織的な強靭性はどれか。",
    "options": [
      "サプライチェーン・アジリティ",
      "スケールメリット",
      "ローカルソーシング",
      "サプライチェーン・レジリエンス（強靭性）"
    ],
    "answerIndex": 3,
    "explanation": "正解はサプライチェーン・レジリエンス（強靭性: Resilience）です。従来の効率性・低コスト重視（シングルソーシングや在庫極小化）一辺倒から、不確実性に耐えうる複数購買（マルチソーシング）、サプライチェーンの多層的可視化、BCP（事業継続計画）の策定など、しなやかな復元力を備えた体制づくりが重視されています。"
  },
  {
    "id": "mba-ops-062",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "SCORモデル",
    "difficulty": "standard",
    "question": "米サプライチェーン・カウンシル（SCC）が策定した、サプライチェーン全体のプロセスを「Plan・Source・Make・Deliver・Return・Enable」の基本プロセスで標準的に記述・分析・ベンチマーク評価するための参照モデルはどれか。",
    "options": [
      "SCORモデル（Supply Chain Operations Reference model）",
      "バリューチェーンモデル",
      "ポーターのダイヤモンドモデル",
      "ガントチャートモデル"
    ],
    "answerIndex": 0,
    "explanation": "正解はSCORモデル（Supply Chain Operations Reference model）です。業界横断でサプライチェーンプロセスを標準的な用語・階層構造で定義し、信頼性、応答性、俊敏性、コスト、資産管理効率のKPI指標を用いて競合他社との客観的なベンチマーク比較を可能にします。"
  },
  {
    "id": "mba-ops-063",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "グリーンサプライチェーンマネジメント",
    "difficulty": "standard",
    "question": "原材料調達から設計、製造、流通、使用、廃棄・リサイクルに至るライフサイクル全体を通じて、CO2排出量削減、省資源、有害物質排除などの環境負荷低減を追求するSCMの取り組みはどれか。",
    "options": [
      "リーングローバルソーシング",
      "グリーンサプライチェーンマネジメント（GSCM）",
      "クローズドループファイナンス",
      "カーボンオフセット証書"
    ],
    "answerIndex": 1,
    "explanation": "正解はグリーンサプライチェーンマネジメント（GSCM）です。Scope 1/2（自社排出）だけでなく、Scope 3（サプライヤーや製品使用・廃棄に伴うサプライチェーン排出）の削減が強く求められる中で、ESG経営や欧州の環境規制（CBAM等）への対応において企業の競争力を左右する中核課題となっています。"
  },
  {
    "id": "mba-ops-064",
    "category": "operations",
    "categoryName": "オペレーション・SCM (Operations)",
    "term": "共同輸配送",
    "difficulty": "standard",
    "question": "物流分野における「2024年問題」（ドライバー不足）やCO2削減への対策として、競合関係にある複数の企業同士が荷物を同じトラックに混載したり、配送網を相互利用して積載効率を高める取り組みはどれか。",
    "options": [
      "専属貸切輸送",
      "自社専用便運行",
      "共同輸配送（共配）",
      "トンキロ法"
    ],
    "answerIndex": 2,
    "explanation": "正解は共同輸配送（共配）です。特に食品・日用品・飲料業界などにおいて、ライバル企業同士が物流プラットフォームを共有し、トラックの積載率向上と運行本数の削減を実現しています。物流コストの削減だけでなく、温室効果ガスの抑制や深刻化するトラックドライバー不足の緩和に直結する水平連携の好例です。"
  },
  {
    "id": "mba-inno-022",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "デジタルトランスフォーメーション（DX）",
    "difficulty": "standard",
    "question": "企業がデータとデジタル技術を活用して、顧客や社会のニーズを基に製品やサービス、ビジネスモデルを変革するとともに、業務、組織、プロセス、企業文化・風土をも変革し、競争上の優位性を確立することを指す概念はどれか。",
    "options": [
      "デジタルトランスフォーメーション（DX）",
      "ITアウトソーシング",
      "ビジネスプロセスマネジメント",
      "リーンエンタープライズ"
    ],
    "answerIndex": 0,
    "explanation": "正解はデジタルトランスフォーメーション（DX）です。経済産業省の「DX推進ガイドライン」でも定義されています。単なる既存業務のデジタル化（IT化）にとどまらず、ビジネスモデルや組織文化そのものを抜本的に変革して持続的な競争優位を獲得することが本質です。"
  },
  {
    "id": "mba-inno-023",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "デジタイゼーションとデジタライゼーション",
    "difficulty": "standard",
    "question": "DXに至る発展段階において、紙書類のスキャンや請求書の電子化など「単一業務のアナログ情報をデジタル形式に変換する部分最適」を指す用語はどれか。",
    "options": [
      "デジタルトランスフォーメーション",
      "デジタイゼーション（Digitization）",
      "デジタライゼーション（Digitalization）",
      "デジタルツイン"
    ],
    "answerIndex": 1,
    "explanation": "正解はデジタイゼーション（Digitization）です。デジタイゼーション（情報の電子化・守りのIT）、デジタライゼーション（特定業務プロセスやバリューチェーンのデジタル化・効率化）、そしてデジタルトランスフォーメーション（ビジネスモデルや社会全体の変革）の3段階モデルとして整理されます。"
  },
  {
    "id": "mba-inno-024",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "生成AIとLLM",
    "difficulty": "standard",
    "question": "膨大なテキストデータから学習したTransformerアーキテクチャなどの深層学習モデルを基盤とし、文章生成、要約、コード生成などを高度に行うAI技術はどれか。",
    "options": [
      "ルールベース推論エンジン",
      "サポートベクターマシン",
      "大規模言語モデル（LLM）と生成AI",
      "エキスパートシステム"
    ],
    "answerIndex": 2,
    "explanation": "正解は大規模言語モデル（LLM）と生成AIです。GPT-4やGeminiなどに代表されるLLMは、自然言語処理のブレークスルーをもたらしました。企業の社内FAQ自動化、マーケティング原稿作成、プログラムコーディング、契約書レビューなど知的生産活動の生産性を飛躍的に高めています。"
  },
  {
    "id": "mba-inno-025",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "RAG（検索拡張生成）",
    "difficulty": "standard",
    "question": "大規模言語モデル（LLM）の回答精度を高めるため、自社の独自データベースや最新ドキュメントから関連情報を検索・抽出し、その検索結果をプロンプトに付加して回答を生成させる技術はどれか。",
    "options": [
      "ファインチューニング",
      "ゼロショット学習",
      "強化学習（RLHF）",
      "RAG（Retrieval-Augmented Generation: 検索拡張生成）"
    ],
    "answerIndex": 3,
    "explanation": "正解はRAG（Retrieval-Augmented Generation: 検索拡張生成）です。LLMの事前学習データに含まれていない社内機密情報や最新の規約などをベクター検索等で取得し、文脈として与えることで、事実に基づかない嘘（ハルシネーション）を大幅に抑制し、正確な業務支援を実現します。"
  },
  {
    "id": "mba-inno-026",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "プロンプトエンジニアリング",
    "difficulty": "standard",
    "question": "生成AIモデルから期待する高品質で的確な出力結果を引き出すために、入力文の指示内容、役割設定、コンテキスト、出力形式などを体系的に設計・最適化する技術・技法はどれか。",
    "options": [
      "プロンプトエンジニアリング",
      "リバースエンジニアリング",
      "ハイパーパラメータチューニング",
      "特徴量エンジニアリング"
    ],
    "answerIndex": 0,
    "explanation": "正解はプロンプトエンジニアリングです。Few-shotプロンプティング（例示の提示）、Chain-of-Thought（思考過程の明示を促す）、ペルソナ指定（『一流のマーケターとして回答してください』）など、適切な入力構造を工夫することでLLMの推論能力と回答品質を最大化します。"
  },
  {
    "id": "mba-inno-027",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "SaaS（Software as a Service）",
    "difficulty": "standard",
    "question": "ベンダーがクラウドサーバー上で稼働させているソフトウェア機能を、利用者がインターネット経由で必要な分だけ月額課金などのサブスクリプションで利用するクラウドサービス形態はどれか。",
    "options": [
      "PaaS（Platform as a Service）",
      "SaaS（Software as a Service）",
      "IaaS（Infrastructure as a Service）",
      "オンプレミス"
    ],
    "answerIndex": 1,
    "explanation": "正解はSaaS（Software as a Service）です。Salesforce、Google Workspace、Slack、Microsoft 365などが代表的です。自社でサーバーを調達・構築する必要がなく、端末とブラウザがあれば常に最新機能を利用できます。初期費用を抑え迅速に導入できる一方、個別カスタマイズには制約があります。"
  },
  {
    "id": "mba-inno-028",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "PaaS（Platform as a Service）",
    "difficulty": "standard",
    "question": "アプリケーション開発・実行に必要なOS、ミドルウェア、データベース、ランタイム環境一式をクラウド上のプラットフォームとして提供するサービス形態はどれか。",
    "options": [
      "SaaS",
      "IaaS",
      "PaaS（Platform as a Service）",
      "DaaS"
    ],
    "answerIndex": 2,
    "explanation": "正解はPaaS（Platform as a Service）です。Google App Engine、AWS Elastic Beanstalk、Herokuなどが該当します。開発者はハードウェアやOSのパッチ適用などのインフラ管理から解放され、アプリケーションのコード開発とビジネスロジックの実装に集中できます。"
  },
  {
    "id": "mba-inno-029",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "IaaS（Infrastructure as a Service）",
    "difficulty": "standard",
    "question": "サーバー（仮想マシン）、CPU、ストレージ、ネットワークなどの基礎的なコンピューティングインフラをインターネット経由で必要なリソース分だけオンデマンドで提供するクラウド形態はどれか。",
    "options": [
      "PaaS",
      "SaaS",
      "FaaS",
      "IaaS（Infrastructure as a Service）"
    ],
    "answerIndex": 3,
    "explanation": "正解はIaaS（Infrastructure as a Service）です。Amazon EC2、Google Compute Engine、Microsoft Azure Virtual Machinesなどが代表例です。OSの選定からネットワーク構成、ミドルウェア導入まで高い自由度を持ちますが、セキュリティ設定やOSアップデートなどの運用責任は利用企業側に帰属します。"
  },
  {
    "id": "mba-inno-030",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "APIエコノミー",
    "difficulty": "standard",
    "question": "企業が自社の保有するデータや機能をAPI（Application Programming Interface）として外部に公開し、他社のサービスとシームレスに連携することで、相互に新たなビジネス価値やエコシステムを創出する経済圏はどれか。",
    "options": [
      "APIエコノミー",
      "サーキュラーエコノミー",
      "シェアリングエコノミー",
      "ギグエコノミー"
    ],
    "answerIndex": 0,
    "explanation": "正解はAPIエコノミーです。Stripe（決済API）、Google Maps（地図API）、OpenAI（LLM API）などが典型例です。自前ですべてを開発することなく、外部APIをレゴブロックのように組み合わせることで、新サービスの立ち上げスピードを劇的に加速させることができます。"
  },
  {
    "id": "mba-inno-031",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "アジャイル開発",
    "difficulty": "standard",
    "question": "従来の仕様を完全に固めてから進めるウォーターフォール開発に対し、システムを小さな単位に分割し、1〜4週間程度の短い反復サイクル（イテレーション）で開発・テスト・リリースを繰り返す柔軟な開発手法はどれか。",
    "options": [
      "V字モデル開発",
      "アジャイル開発（Agile Development）",
      "スパイラルモデル",
      "クリティカルチェーン法"
    ],
    "answerIndex": 1,
    "explanation": "正解はアジャイル開発（Agile Development）です。「計画に従うことよりも変化への対応を重視する」などのアジャイルソフトウェア開発宣言に基づきます。不確実性が高く、ユーザーの要望や市場環境が急速に変化するDXやWebサービス開発において標準的な開発手法となっています。"
  },
  {
    "id": "mba-inno-032",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "スクラム（Scrum）",
    "difficulty": "standard",
    "question": "アジャイル開発で最も普及しているフレームワークで、プロダクトオーナー、スクラムマスター、開発チームから構成され、「スプリント」と呼ばれる固定期間で動作するソフトウェアを反復提供する手法はどれか。",
    "options": [
      "エクストリーム・プログラミング（XP）",
      "カンバン開発",
      "スクラム（Scrum）",
      "リーンソフトウェア開発"
    ],
    "answerIndex": 2,
    "explanation": "正解はスクラム（Scrum）です。ラグビーのスクラムのようにチーム全員が一体となって前進します。プロダクトバックログ（要求一覧）を優先順位付けし、毎日のデイリースクラム、スプリントレビュー、レトロスペクティブ（振り返り）を通じて継続的に自己組織化と改善を図ります。"
  },
  {
    "id": "mba-inno-033",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "DevOps",
    "difficulty": "standard",
    "question": "開発担当（Development）と運用担当（Operations）が緊密に連携・協調し、CI/CDツールなどを活用して、ソフトウェアの機能追加やバグ修正を迅速かつ安定的に本番環境へ提供し続ける組織文化・プラクティスはどれか。",
    "options": [
      "ITIL",
      "シックスシグマ",
      "PMBOK",
      "DevOps"
    ],
    "answerIndex": 3,
    "explanation": "正解はDevOpsです。開発側の「早く新しい変更をリリースしたい」という動機と、運用側の「システムの安定性を維持したい」という対立を解消します。継続的インテグレーション（CI）と継続的デリバリー（CD）の自動化パイプラインを構築することで、リリース頻度を高めつつ障害復旧時間を短縮します。"
  },
  {
    "id": "mba-inno-034",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "デザイン思考",
    "difficulty": "standard",
    "question": "スタンフォード大学d.schoolや米IDEO社が提唱したイノベーション創出手法で、「共感・問題定義・アイデア創出・プロトタイプ・テスト」の5ステップを通じてユーザー中心の課題解決を行う手法はどれか。",
    "options": [
      "デザイン思考（Design Thinking）",
      "システム思考",
      "クリティカルシンキング",
      "トリーズ（TRIZ）"
    ],
    "answerIndex": 0,
    "explanation": "正解はデザイン思考（Design Thinking）です。技術的実現可能性（Feasibility）や経済的採算性（Viability）に先立ち、人間の欲求や課題への深い「共感（Empathy）」からスタートするのが最大の特徴です。素早いプロトタイピングとユーザーテストを繰り返すことで、真のインサイトを発見します。"
  },
  {
    "id": "mba-inno-035",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "リーンスタートアップ",
    "difficulty": "standard",
    "question": "エリック・リースが提唱した新規事業開発手法で、不確実な環境下において、仮説構築・実験・検証のサイクル（構築-計測-学習ループ）を可能な限り高速で回すことで、無駄な投資を避け成功確率を高めるアプローチはどれか。",
    "options": [
      "ブルーオーシャン戦略",
      "リーンスタートアップ（Lean Startup）",
      "ステージゲート法",
      "ポーターの基本戦略"
    ],
    "answerIndex": 1,
    "explanation": "正解はリーンスタートアップ（Lean Startup）です。完璧な事業計画を立ててから大規模な開発を行う従来型アプローチを否定し、「構築（Build）→計測（Measure）→学習（Learn）」のループを最小の資源と最速のスピードで回すことで、市場に本当に必要とされる製品・サービスを探索します。"
  },
  {
    "id": "mba-inno-036",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "MVP（実用最小限の製品）",
    "difficulty": "standard",
    "question": "リーンスタートアップにおいて、顧客に対する中核的な仮説を検証するために必要最小限の機能だけを備えた試作品・プロトタイプを何と呼ぶか。",
    "options": [
      "PoC（概念実証）",
      "アルファ版",
      "MVP（Minimum Viable Product）",
      "レディメイド製品"
    ],
    "answerIndex": 2,
    "explanation": "正解はMVP（Minimum Viable Product: 実用最小限の製品）です。不要な付加機能を一切削ぎ落とし、中核となる価値提案が顧客に刺さるかどうかを迅速に検証するために投入されます。ランディングページ1枚の事前登録サイトや、裏側を手動で動かすコンシェルジュMVPなども含まれます。"
  },
  {
    "id": "mba-inno-037",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ピボット（Pivot）",
    "difficulty": "standard",
    "question": "スタートアップや新規事業において、MVPの検証や市場からのフィードバックに基づき、事業の根底にあるビジョンを維持しながら、製品機能・ターゲット顧客・収益モデルなどの戦略方針を根本的に転換することを何と呼ぶか。",
    "options": [
      "アライアンス",
      "スピンオフ",
      "エグジット",
      "ピボット（Pivot）"
    ],
    "answerIndex": 3,
    "explanation": "正解はピボット（Pivot）です。バスケットボールで片足を軸にして方向転換する動きに由来します。初期の仮説が外れた際に失敗を認め、得られた学びを活かしてターゲット顧客の変更（ズームイン/ズームアウトピボット）やビジネスモデルの修正を行い、プロダクトマーケットフィット（PMF）を目指します。"
  },
  {
    "id": "mba-inno-038",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "データレイク",
    "difficulty": "standard",
    "question": "社内外から収集される構造化データ（表形式など）だけでなく、テキスト、画像、ログ、音声などの非構造化データも含め、加工や事前スキーマ定義を行わずに元の形式のまま大規模に蓄積する保管リポジトリはどれか。",
    "options": [
      "データレイク（Data Lake）",
      "データマート",
      "リレーショナルデータベース（RDB）",
      "データウェアハウス（DWH）"
    ],
    "answerIndex": 0,
    "explanation": "正解はデータレイク（Data Lake）です。あらかじめ整形されたデータを蓄積するDWHと異なり、生データ（Raw Data）をそのまま保存するため、機械学習の学習データや事後的な高度データサイエンス分析に極めて適しています。ただし管理を怠ると検索不能な「データスワンプ（データの沼）」に陥るリスクがあります。"
  },
  {
    "id": "mba-inno-039",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "データウェアハウス（DWH）",
    "difficulty": "standard",
    "question": "企業の基幹システムや業務アプリからデータを抽出し、意思決定やBI（ビジネスインテリジェンス）分析を目的として、時系列に沿って主題別に統合・クレンジング・構造化して蓄積する大規模データベースはどれか。",
    "options": [
      "オンライントランザクション処理（OLTP）",
      "データウェアハウス（DWH: Data Warehouse）",
      "キャッシュサーバー",
      "ブロックチェーン"
    ],
    "answerIndex": 1,
    "explanation": "正解はデータウェアハウス（DWH: Data Warehouse）です。「データの倉庫」を意味し、Snowflake、Google BigQuery、Amazon Redshiftなどが代表例です。日常の受発注処理を行うOLTP（オンライントランザクション）とは分離され、OLAP（多次元分析）や経営ダッシュボードへのデータ供給に特化して最適化されています。"
  },
  {
    "id": "mba-inno-040",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ゼロトラストセキュリティ",
    "difficulty": "standard",
    "question": "「社内ネットワークは安全で社外は危険」とする従来の境界防御モデルを見直し、「あらゆるアクセスを信用せず、常に厳格に検証する（Never Trust, Always Verify）」という前提に立つ現代のセキュリティ概念はどれか。",
    "options": [
      "ファイアウォール防御",
      "VPN集中管理",
      "ゼロトラストセキュリティ（Zero Trust Architecture）",
      "DMZ分離モデル"
    ],
    "answerIndex": 2,
    "explanation": "正解はゼロトラストセキュリティです。テレワークの普及やSaaS・クラウド利用の急増により、社内と社外の境界が消失したことで必須となりました。端末の健全性、ユーザーID、コンテキストを認証・認可のたびに検証し、最小権限の原則（Least Privilege）に基づいてリソースへのアクセスを制御します。"
  },
  {
    "id": "mba-inno-041",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ブロックチェーン",
    "difficulty": "standard",
    "question": "ネットワーク上の複数の参加者が同一の取引記録台帳を分散して共有・保持し、暗号技術と合意形成アルゴリズムによって改ざんを極めて困難にした分散型台帳技術はどれか。",
    "options": [
      "分散ファイルシステム（HDFS）",
      "リレーショナルデータベース",
      "レプリケーションストレージ",
      "ブロックチェーン（Blockchain）"
    ],
    "answerIndex": 3,
    "explanation": "正解はブロックチェーン（Blockchain）です。暗号資産（ビットコイン等）の基盤技術として誕生しました。中央管理者（銀行やプラットフォーマー）が存在しなくても信頼できる取引の記録と移転が可能であり、スマートコントラクト、サプライチェーンのトレーサビリティ管理、NFTなどに広く活用されています。"
  },
  {
    "id": "mba-inno-042",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "スマートファクトリー（インダストリー4.0）",
    "difficulty": "standard",
    "question": "ドイツ政府が提唱した「インダストリー4.0」の中核概念で、工場内の工作機械やセンサー、作業者をIoTで接続し、デジタル上で全体を可視化・自律制御することでマスカスタマイゼーションや保全最適化を実現する次世代工場はどれか。",
    "options": [
      "スマートファクトリー",
      "ファブレス工場",
      "クリーンルーム工場",
      "マザー工場"
    ],
    "answerIndex": 0,
    "explanation": "正解はスマートファクトリーです。CPS（サイバーフィジカルシステム）を活用し、物理空間の生産現場のデータをサイバー空間に取り込んで分析し、AIが最適な生産パラメータや予兆保全の指示を自律的にフィードバックします。これにより生産性の向上、省人化、エネルギー効率化が劇的に進展します。"
  },
  {
    "id": "mba-inno-043",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ノーコード・ローコード開発",
    "difficulty": "standard",
    "question": "複雑なプログラミング言語のソースコードを手書きすることなく、GUI（グラフィカルユーザーインターフェース）上のドラッグ＆ドロップや設定画面の操作でアプリケーションを迅速に構築できる開発手法・ツールはどれか。",
    "options": [
      "コンパイラ型開発",
      "ノーコード／ローコード（No-code / Low-code）",
      "オブジェクト指向プログラミング",
      "アセンブリ開発"
    ],
    "answerIndex": 1,
    "explanation": "正解はノーコード／ローコード（No-code / Low-code）です。IT人材が不足する中で、現場の業務担当者（市民開発者: Citizen Developer）が自ら業務効率化アプリや顧客向けポータルを素早く開発できるため、DXの裾野を広げる強力な武器として世界中で普及が進んでいます。"
  },
  {
    "id": "mba-inno-044",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "組み込み型金融（Embedded Finance）",
    "difficulty": "standard",
    "question": "ECサイト、配車アプリ、SaaSなどの非金融事業者が、APIを介して自社のサービスプラットフォーム内に決済、融資、保険、口座開設などの金融機能をシームレスに組み込んで提供する潮流はどれか。",
    "options": [
      "クラウドファンディング",
      "シャドーバンキング",
      "組み込み型金融（Embedded Finance）",
      "ソブリン・ウェルス・ファンド"
    ],
    "answerIndex": 2,
    "explanation": "正解は組み込み型金融（Embedded Finance）です。FinTechの第2章とも呼ばれます。ユーザーは銀行の窓口や別サイトに移動することなく、Uberでの降車時自動決済や、ECサイトでのBNPL（後払い決済）、会計ソフトからの即時事業性融資など、日常のサービス体験の中で摩擦なく金融機能を利用できます。"
  },
  {
    "id": "mba-inno-045",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "データドリブン経営",
    "difficulty": "standard",
    "question": "経営者の経験や直感（勘・経験・度胸: KKD）のみに頼る意思決定から脱却し、社内外の膨大なデータを収集・統合・定量分析した客観的なエビデンスに基づいて、迅速かつ高精度な経営戦略やオペレーションの意思決定を行うアプローチはどれか。",
    "options": [
      "トップダウン経営",
      "コーポレート・ガバナンス",
      "オーセンティック・リーダーシップ",
      "データドリブン経営"
    ],
    "answerIndex": 3,
    "explanation": "正解はデータドリブン経営です。BIツールやAI分析を組織全体に浸透させ、現場の第一線から経営幹部までが共通のKPIダッシュボードやリアルタイムデータを参照しながらPDCAサイクルを高速で回す経営スタイルです。不確実性の高い現代ビジネスにおいて成功率を高める基盤となります。"
  },
  {
    "id": "mba-inno-046",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "デジタルツイン（Digital Twin）",
    "difficulty": "standard",
    "question": "IoTセンサー等を通じて現実世界の工場、航空機、都市インフラなどの状態・稼働データを収集し、仮想空間（サイバー空間）上に全く同じ双子のようなリアルタイム3Dモデルやシミュレーション環境を再現する技術はどれか。",
    "options": [
      "デジタルツイン（Digital Twin）",
      "バーチャルリアリティ（VR）",
      "メタバース空間",
      "ホログラム投影"
    ],
    "answerIndex": 0,
    "explanation": "正解はデジタルツイン（Digital Twin）です。現実の機械を止めることなく、仮想空間上で設計変更のシミュレーション、故障の予兆保全、災害時の避難経路検証などを高精度に行うことができます。製造業の設計・開発からスマートシティ、医療分野まで幅広く活用されています。"
  },
  {
    "id": "mba-inno-047",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "マイクロサービスアーキテクチャ",
    "difficulty": "standard",
    "question": "単一の巨大なプログラム（モノリス）としてシステムを構築するのではなく、業務機能を独立した小さなサービス単位に分割し、それぞれを軽量なAPIで連携させるソフトウェアアーキテクチャはどれか。",
    "options": [
      "クライアントサーバーシステム",
      "マイクロサービスアーキテクチャ",
      "モノリシックアーキテクチャ",
      "ピアツーピア（P2P）"
    ],
    "answerIndex": 1,
    "explanation": "正解はマイクロサービスアーキテクチャです。各サービスが独立して開発・テスト・デプロイできるため、障害の局所化やサービスごとの柔軟なスケールアウトが可能になります。NetflixやAmazonなど大規模Webサービスで広く採用されており、迅速な機能追加を実現する反面、サービス間通信の管理が複雑になるトレードオフがあります。"
  },
  {
    "id": "mba-inno-048",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "クラウドネイティブとコンテナ技術",
    "difficulty": "standard",
    "question": "OSカーネルを共有しながらアプリケーションとその依存ライブラリを軽量にパッケージ化し、どのクラウド環境でも同一に動作させる技術（Dockerなど）と、そのオーケストレーションを行うKubernetesを活用した設計思想はどれか。",
    "options": [
      "仮想化ハイパーバイザー",
      "ベアメタルプロビジョニング",
      "クラウドネイティブ（コンテナ技術）",
      "オンプレミスホスティング"
    ],
    "answerIndex": 2,
    "explanation": "正解はクラウドネイティブ（コンテナ技術）です。従来の仮想マシン（VM）に比べて起動が格段に速く、リソース消費が少ないため、マイクロサービスやDevOpsを支える基盤技術となっています。Kubernetesによって自動復旧や負荷に応じた自動スケーリングが実現します。"
  },
  {
    "id": "mba-inno-049",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "エッジコンピューティング",
    "difficulty": "standard",
    "question": "すべてのデータを中央のクラウドサーバーに送信して処理するのではなく、端末や現場の近く（エッジ側）に分散配置したサーバーでリアルタイムに分散処理を行うコンピューティングモデルはどれか。",
    "options": [
      "メインフレーム処理",
      "バッチ処理",
      "グリッドコンピューティング",
      "エッジコンピューティング"
    ],
    "answerIndex": 3,
    "explanation": "正解はエッジコンピューティングです。自動運転、工場のロボット制御、監視カメラの映像解析など、わずかな通信遅延（レイテンシ）も許されない低遅延要求や、膨大なデータ通信によるネットワーク帯域の逼迫・通信コストを解消するために不可欠な技術です。"
  },
  {
    "id": "mba-inno-050",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "RPA（Robotic Process Automation）",
    "difficulty": "standard",
    "question": "人間がPC上で行っている定型的・反復的なデスクワーク（データのコピペ、システム入力、メール送受信など）を、ソフトウェアロボットがルールに従って代行・自動化する仕組みはどれか。",
    "options": [
      "RPA（Robotic Process Automation）",
      "産業用ロボットアーム",
      "人工汎用知能（AGI）",
      "OCRスキャン"
    ],
    "answerIndex": 0,
    "explanation": "正解はRPA（Robotic Process Automation）です。UI（画面）レベルで操作を記録・実行できるため、既存の基幹システムを改修することなく短期間・低コストで業務効率化が可能です。近年では生成AIやOCRと連携して非構造化データも処理するインテリジェント・オートメーション（IPA）へと進化しています。"
  },
  {
    "id": "mba-inno-051",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "IoT（モノのインターネット）",
    "difficulty": "standard",
    "question": "家電、自動車、工作機械、センサーなど、あらゆる物理的な「モノ」がインターネットに接続され、状態の遠隔監視、データの相互送信、遠隔制御を可能にする技術基盤はどれか。",
    "options": [
      "RFIDタグ",
      "IoT（Internet of Things: モノのインターネット）",
      "LAN（ローカルエリアネットワーク）",
      "NFC通信"
    ],
    "answerIndex": 1,
    "explanation": "正解はIoT（Internet of Things: モノのインターネット）です。モノがインターネットと繋がることで、製品販売後に利用状況を把握してアップデートを提供する「売り切りからサービス化（サービタイゼーション）」へのビジネスモデル転換や、スマートホーム、遠隔医療、農業IoTなどの新産業を創出しています。"
  },
  {
    "id": "mba-inno-052",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "オープンイノベーション",
    "difficulty": "standard",
    "question": "自社の内部リソース（研究開発・技術・ノウハウ）だけに依存する自前主義（クローズドイノベーション）から脱却し、大学、他企業、スタートアップなどの外部の知見やアイデアを有機的に結合して革新的な新結合を生み出す戦略はどれか。",
    "options": [
      "クローズドイノベーション",
      "企業買収（M&A）",
      "オープンイノベーション",
      "インハウスデザイン"
    ],
    "answerIndex": 2,
    "explanation": "正解はオープンイノベーションです。UCバークレーのヘンリー・チェスブロウ教授が提唱しました。外部の技術を自社のビジネスに取り込む「インバウンド型（バイ・イン）」と、自社で活用しきれていない特許や技術を外部ライセンスやスピンオフで社会還元する「アウトバウンド型（バイ・アウト）」があります。"
  },
  {
    "id": "mba-inno-053",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "破壊的イノベーション",
    "difficulty": "standard",
    "question": "クレイトン・クリステンセンが提唱した、既存の主流市場で要求される性能指標では劣るものの、低価格、シンプル、利便性などの新たな価値軸を持ち、最初はローエンド層や非消費者を惹きつけ、最終的に業界の巨人を駆逐する革新形態はどれか。",
    "options": [
      "持続的イノベーション",
      "インクリメンタルイノベーション",
      "コアコンピタンス経営",
      "破壊的イノベーション（Disruptive Innovation）"
    ],
    "answerIndex": 3,
    "explanation": "正解は破壊的イノベーション（Disruptive Innovation）です。既存顧客の声に耳を傾け製品改良を続ける「持続的イノベーション」に対し、性能過剰となった市場の隙間を突く「ローエンド型破壊」や、従来の顧客以外の潜在需要を開拓する「新市場型破壊」があります。フィルムカメラに対するデジカメ、鉄鋼ミニミルなどが典型です。"
  },
  {
    "id": "mba-inno-054",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "イノベーションのジレンマ",
    "difficulty": "standard",
    "question": "優良企業が、既存の優良顧客の要望に誠実に応え、最も利益率の高い高級製品への投資を合理的に続けた結果、技術的なオーバーシュート（性能過剰）を起こし、新興企業の破壊的技術に市場を奪われて敗北する現象はどれか。",
    "options": [
      "イノベーションのジレンマ",
      "規模の不経済",
      "経路依存性",
      "サンクコスト効果"
    ],
    "answerIndex": 0,
    "explanation": "正解はイノベーションのジレンマ（Innovator's Dilemma）です。失敗の真因が「経営の無能」ではなく、顧客第一主義や財務規律といった「極めて合理的で優れた経営判断」そのものにあるという皮肉を示しました。対策として、破壊的技術を育てるための独立した別動隊組織（スピンアウト）の設立が推奨されます。"
  },
  {
    "id": "mba-inno-055",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ネットワーク外部性（ネットワーク効果）",
    "difficulty": "standard",
    "question": "ある製品やサービスの利用者が増えれば増えるほど、そのプラットフォーム全体の有用性や価値が指数関数的に高まり、さらに新たな利用者を呼び寄せる好循環をもたらす現象はどれか。",
    "options": [
      "外部不経済",
      "ネットワーク外部性（ネットワーク効果）",
      "規模の経済",
      "範囲の経済"
    ],
    "answerIndex": 1,
    "explanation": "正解はネットワーク外部性（ネットワーク効果: Network Effects）です。同種のユーザー間での直接的ネットワーク効果（SNSやチャットなど）と、異なるユーザーグループ間（配車アプリの乗客とドライバー、OSのユーザーと開発者など）での間接的ネットワーク効果（2面市場）があります。勝者総取り（Winner-take-all）の市場構造を生み出す源泉です。"
  },
  {
    "id": "mba-inno-056",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "両利きの経営（Ambidexterity）",
    "difficulty": "standard",
    "question": "チャールズ・オライリーらが提唱した概念で、既存事業の効率化や漸進的改善を徹底する「知の深化（Exploitation）」と、新しい技術やビジネスモデルを果敢に探索・実験する「知の探索（Exploration）」を高次元で両立させる経営手法はどれか。",
    "options": [
      "ブルーオーシャンシフト",
      "コーポレート・ベンチャリング",
      "両利きの経営（Ambidexterity）",
      "垂直統合モデル"
    ],
    "answerIndex": 2,
    "explanation": "正解は両利きの経営（Ambidexterity）です。成熟企業は放っておくと効率的でリスクの低い「知の深化」ばかりに経営資源を集中させ、「コンピテンシー・トラップ（成功の罠）」に陥って環境変化に追従できなくなります。トップリーダーが明確な意思を持って両者を組織的に両立させることが持続的成長の要となります。"
  },
  {
    "id": "mba-inno-057",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "プロダクト主導型成長（PLG）",
    "difficulty": "standard",
    "question": "営業担当者が売り込むセールス主導型（SLG）とは異なり、プロダクトそのものの使いやすさやフリーミアム体験を起点として、エンドユーザー自身が自然にファンとなり、組織内外へ口コミで拡散・有料転換していくグロースモデルはどれか。",
    "options": [
      "フィールドセールスモデル",
      "リセラー販売モデル",
      "インバウンドマーケティング",
      "プロダクト主導型成長（PLG: Product-Led Growth）"
    ],
    "answerIndex": 3,
    "explanation": "正解はプロダクト主導型成長（PLG: Product-Led Growth）です。Zoom、Slack、Notion、Figmaなどが代表例です。ボトムアップで現場の個人が無料で使い始め、チーム内で共同作業するうちに有料プランへとアップグレードされるため、CAC（顧客獲得コスト）を極めて低く抑えながら急速なスケールを実現します。"
  },
  {
    "id": "mba-inno-058",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "シャドーIT",
    "difficulty": "standard",
    "question": "企業のIT管理部門や情報セキュリティ責任者の許可・把握がないまま、現場の従業員や事業部門が独自に導入・利用している個人用スマートフォン、無料クラウドストレージ、SaaSツールなどを指す用語はどれか。",
    "options": [
      "シャドーIT（Shadow IT）",
      "BYOD（私用端末の業務利用）",
      "レガシーシステム",
      "ダークウェブ"
    ],
    "answerIndex": 0,
    "explanation": "正解はシャドーIT（Shadow IT）です。業務を効率化したい現場の意図から生じることが多いですが、情報漏洩や不正アクセス、コンプライアンス違反の重大なセキュリティリスクとなります。単に利用を全面禁止するだけでなく、現場が必要とする便利な正規ツールの導入やガイドライン整備が求められます。"
  },
  {
    "id": "mba-inno-059",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "多要素認証（MFA）とSSO",
    "difficulty": "standard",
    "question": "「知識情報（パスワード）」「所持情報（スマホやハードウェアトークン）」「生体情報（指紋や顔認証）」のうち、独立した2つ以上の異なる要素を組み合わせて本人確認を行うセキュリティ対策はどれか。",
    "options": [
      "シングルサインオン（SSO）",
      "多要素認証（MFA: Multi-Factor Authentication）",
      "2段階パスワード更新",
      "パスワードレス認証"
    ],
    "answerIndex": 1,
    "explanation": "正解は多要素認証（MFA: Multi-Factor Authentication）です。パスワードだけ（単一要素）ではフィッシング詐欺や辞書攻撃で容易に突破される危険がありますが、スマートフォンに届くワンタイムパスワードや生体認証などを組み合わせることで、アカウント乗っ取りを強力に防止します。"
  },
  {
    "id": "mba-inno-060",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "MLOps（Machine Learning Operations）",
    "difficulty": "standard",
    "question": "機械学習（ML）モデルの開発から、テスト、本番環境へのデプロイ、稼働監視、データのドリフト（乖離）に応じた再学習までの一連のライフサイクルを自動化・効率化するプラクティスはどれか。",
    "options": [
      "AIOps",
      "DataOps",
      "MLOps（Machine Learning Operations）",
      "GitOps"
    ],
    "answerIndex": 2,
    "explanation": "正解はMLOps（Machine Learning Operations）です。DevOpsの概念を機械学習に応用したものです。機械学習モデルは一度作って終わりではなく、実環境のデータ傾向が変化（データドリフト・コンセプトドリフト）すると精度が低下するため、継続的な監視とモデルの再学習・パイプライン管理が不可欠となります。"
  },
  {
    "id": "mba-inno-061",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "技術的負債（Technical Debt）",
    "difficulty": "standard",
    "question": "短納期や目先の開発スピードを優先して一時的な間に合わせの設計や乱雑なコーディングを行った結果、後々のシステム改修、機能追加、保守運用のコストが利息のように雪だるま式に増大していく状態を比喩した概念はどれか。",
    "options": [
      "コストオーバーラン",
      "システムサイロ化",
      "2025年の崖",
      "技術的負債（Technical Debt）"
    ],
    "answerIndex": 3,
    "explanation": "正解は技術的負債（Technical Debt）です。ウォード・カニンガムが提唱しました。借金と同様に、短期的にはスピードという恩恵を受けられるものの、適切なリファクタリングによって「返済」しない限り、利息（保守コストの増大や開発速度の極端な低下）を払い続けることになり、DXの大きな足かせとなります。"
  },
  {
    "id": "mba-inno-062",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "ハルシネーション（Hallucination）",
    "difficulty": "standard",
    "question": "大規模言語モデル（LLM）などの生成AIが、事実とは全く異なる誤った情報や存在しない架空の根拠を、あたかも真実であるかのようにもっともらしく出力してしまう現象を何と呼ぶか。",
    "options": [
      "ハルシネーション（幻覚）",
      "バイアスドリフト",
      "過学習（Overfitting）",
      "アライメントエラー"
    ],
    "answerIndex": 0,
    "explanation": "正解はハルシネーション（幻覚 / Hallucination）です。LLMは統計的に「次に続く確率が高い単語」を予測して文章を生成しているため、真偽の事実確認を行っているわけではありません。ビジネス利用における重大なリスク要因であり、RAG（検索拡張生成）の適用やグラウンディング、人間による確認（Human-in-the-loop）が対策として重要です。"
  },
  {
    "id": "mba-inno-063",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "スマートコントラクト",
    "difficulty": "standard",
    "question": "ブロックチェーン上で実行されるプログラムであり、あらかじめ定められた条件が満たされた場合に、第三者の仲介者を介さずに契約や取引を自動的に執行・検証・記録する仕組みはどれか。",
    "options": [
      "電子署名システム",
      "スマートコントラクト（Smart Contract）",
      "オートメーションAPI",
      "デジタルエスクロー"
    ],
    "answerIndex": 1,
    "explanation": "正解はスマートコントラクト（Smart Contract）です。ニック・サボが提唱し、イーサリアムなどで実装されました。契約の履行がコードによって自動担保されるため、仲介手数料の削減、改ざん防止、取引の即時決済が可能になり、DeFi（分散型金融）やサプライチェーン管理などに活用されています。"
  },
  {
    "id": "mba-inno-064",
    "category": "innovation",
    "categoryName": "DX・イノベーション (Innovation)",
    "term": "リスキリング（Reskilling）",
    "difficulty": "standard",
    "question": "DXやAIの進展に伴い、技術革新によって業務や職業構造が大きく変化する中で、従業員が新たな業務や成長分野に適応するために必要な新しいスキルや知識を習得させる組織的な取り組みはどれか。",
    "options": [
      "リカレント教育",
      "OJT（On the Job Training）",
      "リスキリング（Reskilling）",
      "アンラーニング"
    ],
    "answerIndex": 2,
    "explanation": "正解はリスキリング（Reskilling: スキルの再習得）です。個人の学び直しである「リカレント教育」とは異なり、企業が事業戦略の変革・DX推進のために主体となって従業員のスキルギャップを埋める戦略的人材投資として位置づけられます。経済産業省やダボス会議でも企業の最重要課題として強調されています。"
  },
  {
    "id": "mba-ana-022",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "ディシジョンツリー（決定木）",
    "difficulty": "standard",
    "question": "不確実性下での多段階の意思決定において、自社の「決定ノード（四角）」と将来起きる「確率事象ノード（丸）」を樹形図に整理し、各分岐の発生確率と損益から期待値（EMV）を算出して最適な選択肢を導出するツールはどれか。",
    "options": [
      "ディシジョンツリー（決定木）",
      "レーダーチャート",
      "特性要因図",
      "ガントチャート"
    ],
    "answerIndex": 0,
    "explanation": "正解はディシジョンツリー（決定木）です。大規模投資や新製品開発など、将来の外部環境変化（好況・不況など）に応じて後続の意思決定が分岐する状況を視覚化し、後ろから前へと期待値を計算（バックワード・インダクション / 後退帰納法）することで合理的な意思決定を支援します。"
  },
  {
    "id": "mba-ana-023",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "感度分析（センシティビティ分析）",
    "difficulty": "standard",
    "question": "事業計画や投資採算性評価（DCF法など）において、販売単価、原価率、割引率などの前提パラメータが変動した際に、NPV（正味現在価値）や営業利益などの最終成果値がどの程度敏感に影響を受けるかを検証する手法はどれか。",
    "options": [
      "パレート分析",
      "感度分析（センシティビティ分析）",
      "コホート分析",
      "クロス集計分析"
    ],
    "answerIndex": 1,
    "explanation": "正解は感度分析（センシティビティ分析）です。どの変数が結果に最も大きなインパクト（リスク）を与えるかを特定できるため、プロジェクトのキードライバーを把握し、重点的にモニタリング・リスクヘッジを行うために不可欠な財務・事業計画手法です。"
  },
  {
    "id": "mba-ana-024",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "モンテカルロシミュレーション",
    "difficulty": "standard",
    "question": "不確実な複数の変数（需要量、為替レート、原材料価格など）について特定の確率分布（正規分布や三角分布など）を設定し、コンピュータ上で乱数を用いて数千〜数万回の試行を繰り返すことで、将来成果の発生確率分布を推定する定量分析手法はどれか。",
    "options": [
      "マルコフ連鎖分析",
      "クラスタリング",
      "モンテカルロシミュレーション",
      "勾配降下法"
    ],
    "answerIndex": 2,
    "explanation": "正解はモンテカルロシミュレーションです。単一の「平均シナリオ」や「最悪・最良の3シナリオ」だけでなく、「NPVがマイナスになる確率は何%か」「95%の確率で達成できる利益水準はいくらか」といった総合的なリスク分布・信頼区間を把握できる強力な手法です。"
  },
  {
    "id": "mba-ana-025",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "A/Bテスト",
    "difficulty": "standard",
    "question": "WebサイトのUIや広告クリエイティブ、価格設定などにおいて、ユーザーを無作為（ランダム）に統制群（Aパターン）と実験群（Bパターン）に振り分け、コンバージョン率や売上などの重要指標を統計的に比較検証する手法はどれか。",
    "options": [
      "フォーカスグループインタビュー",
      "デルファイ法",
      "ベンチマーキング",
      "A/Bテスト（スプリットテスト）"
    ],
    "answerIndex": 3,
    "explanation": "正解はA/Bテスト（スプリットテスト）です。統計学のランダム化比較試験（RCT）をデジタルマーケティングに応用したもので、外部要因（季節性やキャンペーン効果など）を均等に相殺しながら、施策自体の純粋な因果効果を厳密に測定できます。"
  },
  {
    "id": "mba-ana-026",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "単回帰分析と重回帰分析",
    "difficulty": "standard",
    "question": "ある目的変数（売上など）の変動を、1つまたは複数の説明変数（広告費、店舗面積、駅からの距離など）を用いて線形モデルとして数式化し、要因の影響度合いの推定や将来予測を行う統計手法はどれか。",
    "options": [
      "回帰分析（単回帰・重回帰分析）",
      "主成分分析",
      "判別分析",
      "アソシエーション分析"
    ],
    "answerIndex": 0,
    "explanation": "正解は回帰分析（単回帰・重回帰分析）です。説明変数が1つのものを単回帰分析、2つ以上のものを重回帰分析と呼びます。最小二乗法（OLS）を用いて偏回帰係数を求めることで、「広告費を100万円増やすと売上がいくら増えるか」といった弾力性・感度を定量的に導き出せます。"
  },
  {
    "id": "mba-ana-027",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "決定係数（R2）",
    "difficulty": "standard",
    "question": "回帰分析において、構築した回帰モデルが目的変数の全変動をどの程度説明できているかを示す「モデルの当てはまりの良さ」を表す0から1の範囲を取る統計指標はどれか。",
    "options": [
      "t値",
      "決定係数（R2: R-squared）",
      "p値",
      "Durbin-Watson比"
    ],
    "answerIndex": 1,
    "explanation": "正解は決定係数（R2: R-squared）です。1に近いほど説明変数によって目的変数の散らばりがよく説明されていることを意味します。重回帰分析では説明変数を無意味に増やすと見かけ上R2が上昇するため、変数の個数によるペナルティを考慮した「自由度調整済み決定係数」が実務上重視されます。"
  },
  {
    "id": "mba-ana-028",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "多重共線性（マルチコ）",
    "difficulty": "standard",
    "question": "重回帰分析において、説明変数同士の間に極めて強い相関関係が存在する場合に生じ、回帰係数の符号が直感と逆になったり推定の標準誤差が極端に増大してモデルの信頼性が損なわれる現象はどれか。",
    "options": [
      "異分散性",
      "自己相関",
      "多重共線性（マルチコ: Multicollinearity）",
      "打ち切りバイアス"
    ],
    "answerIndex": 2,
    "explanation": "正解は多重共線性（マルチコ: Multicollinearity）です。例えば「店舗面積」と「店内の席数」のようにほぼ同一の情報を表す変数を同時に投入すると発生します。VIF（分散拡大係数）が10を超える場合にマルチコが疑われ、相関の高い変数の一方を削除したり主成分分析で合成するなどの対処が必要です。"
  },
  {
    "id": "mba-ana-029",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "コホート分析",
    "difficulty": "standard",
    "question": "共通の時期に特定の行動を行ったユーザー群（例えば「○年○月に新規登録した顧客」など）を1つの集団（コホート）として定義し、その後の継続率やLTV（顧客生涯価値）の推移を時間軸に沿って追跡・比較する分析手法はどれか。",
    "options": [
      "RFM分析",
      "バスケット分析",
      "ファネル分析",
      "コホート分析（Cohort Analysis）"
    ],
    "answerIndex": 3,
    "explanation": "正解はコホート分析（Cohort Analysis）です。SaaSビジネスやサブスクリプション、アプリ事業におけるチャーンレート（解約率）やリテンション（維持率）を分析する必須手法です。プロダクト改善や施策の変更が、どの時期に獲得したユーザーの定着率を向上させたかを明確に浮き彫りにできます。"
  },
  {
    "id": "mba-ana-030",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "仮説思考",
    "difficulty": "standard",
    "question": "情報が不完全な初期段階において、まず全体像や結論に対する「最も確からしい仮の答え（仮説）」を先手で構築し、その仮説を検証するために必要な最低限のデータ収集・分析を行う問題解決アプローチはどれか。",
    "options": [
      "仮説思考（Hypothesis-driven Thinking）",
      "網羅的データ収集法",
      "トライアル・アンド・エラー法",
      "ゼロベース予算編成"
    ],
    "answerIndex": 0,
    "explanation": "正解は仮説思考（Hypothesis-driven Thinking）です。あらゆるデータを手当たり次第に集めてから考える「網羅思考」に比べ、圧倒的なスピードと効率で本質的な課題に迫ることができます。ビジネスにおける意思決定スピードを劇的に高めるトップコンサルタントや経営者の基礎スキルです。"
  },
  {
    "id": "mba-ana-031",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "演繹法と帰納法",
    "difficulty": "standard",
    "question": "論理的推論の2大体系のうち、「一般論・ルール（大前提）」に「個別の具体的事実（小前提）」を当てはめて必然的な結論を導き出す三段論法のアプローチはどれか。",
    "options": [
      "帰納法（Induction）",
      "演繹法（Deduction）",
      "アブダクション（仮説形成）",
      "アナロジー思考"
    ],
    "answerIndex": 1,
    "explanation": "正解は演繹法（Deduction）です。「人間は必ず死ぬ（大前提）」「ソクラテスは人間である（小前提）」「ゆえにソクラテスは死ぬ（結論）」が古典例です。一方、複数の個別の観察事実から共通のパターンや一般的なルールを導き出す推論を帰納法（Induction）と呼びます。両者を適切に組み合わせることが論理的思考の基本です。"
  },
  {
    "id": "mba-ana-032",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "MECE（ミーシー）",
    "difficulty": "standard",
    "question": "ロジカルシンキングの中核原則であり、物事や概念を分類・分解する際に、「重なり（重複）がなく、漏れ（欠落）もない」状態を指す略語はどれか。",
    "options": [
      "SMART",
      "SWOT",
      "MECE（Mutually Exclusive, Collectively Exhaustive）",
      "PDCA"
    ],
    "answerIndex": 2,
    "explanation": "正解はMECE（Mutually Exclusive, Collectively Exhaustive: ミーシー）です。マッキンゼーで確立された概念です。課題を分析する際にMECEで分解（例: 新規顧客と既存顧客、国内と海外、固定費と変動費など）することで、見落としによる致命的なリスクを防ぎ、二重検討のムダを排除します。"
  },
  {
    "id": "mba-ana-033",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "ロジックツリー",
    "difficulty": "standard",
    "question": "主要な課題や問題を起点とし、MECEのルールに従って上位概念から下位概念へと枝分かれ（ツリー状）に分解していくことで、原因の特定や解決策の具体化を行うフレームワークはどれか。",
    "options": [
      "マトリクス図",
      "アイゼンハワーマトリクス",
      "親和図法",
      "ロジックツリー（Logic Tree）"
    ],
    "answerIndex": 3,
    "explanation": "正解はロジックツリー（Logic Tree）です。要素を網羅的に洗い出す「Whatツリー（要素分解）」、問題の根本原因を深掘りする「Whyツリー（原因究明）」、具体的な解決策を導き出す「Howツリー（課題解決）」の3種類があります。問題の構造化と優先順位付けに不可欠です。"
  },
  {
    "id": "mba-ana-034",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "ピラミッドストラクチャー",
    "difficulty": "standard",
    "question": "バーバラ・ミントが提唱した文書作成・プレゼンテーション構造で、頂点に「主要な主張（キーメッセージ）」を置き、その直下にそれを支える複数の論拠を配置して、「So What?（だから何？）」「Why So?（なぜそう言えるのか？）」の双方向の論理整合性を保つ論理構造はどれか。",
    "options": [
      "ピラミッドストラクチャー（ピラミッド原則）",
      "フィッシュボーンチャート",
      "バリューピラミッド",
      "階層的意思決定法（AHP）"
    ],
    "answerIndex": 0,
    "explanation": "正解はピラミッドストラクチャー（ピラミッド原則）です。聞き手に対して結論から明確に伝える論理構成法です。下層の事実から上層へ「So What?」と問いかけてメッセージを導き、上層の主張に対して下層へ「Why So?」と問いかけて強固な論拠を示すことで、説得力のある提案書や報告書を作成できます。"
  },
  {
    "id": "mba-ana-035",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "サンクコスト効果（埋没費用）",
    "difficulty": "standard",
    "question": "すでに投じてしまい、どのような意思決定を行っても回収することが不可能な過去のコストに囚われ、「これまで投資したのがもったいない」という心理から、不採算と分かっている事業やプロジェクトの撤退・中止を躊躇してしまう意思決定バイアスはどれか。",
    "options": [
      "保有効果",
      "サンクコスト効果（コンコルド効果）",
      "現状維持バイアス",
      "アンカリング効果"
    ],
    "answerIndex": 1,
    "explanation": "正解はサンクコスト効果（埋没費用 / コンコルド効果）です。合理的な意思決定においては、「過去にいくら使ったか」は完全に無視し、「将来発生するキャッシュフローとリターン」のみを比較衡量すべきです。超音速旅客機コンコルドの開発中止が遅れ莫大な赤字を出した事例が有名です。"
  },
  {
    "id": "mba-ana-036",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "プロスペクト理論（損失回避性）",
    "difficulty": "standard",
    "question": "ダニエル・カーネマンとエイモス・トベルスキーが提唱した行動経済学の理論で、「人間は同額の利得から得る喜びよりも、同額の損失から受ける苦痛を約2倍強く感じる（損失回避性）」という心理特性を数理モデル化したものはどれか。",
    "options": [
      "期待効用理論",
      "効率的市場仮説",
      "プロスペクト理論（Prospect Theory）",
      "ゲーム理論"
    ],
    "answerIndex": 2,
    "explanation": "正解はプロスペクト理論（Prospect Theory）です。価値関数が参照点を境に「S字カーブ」を描き、利益領域ではリスク回避的（確実に利益を確定したい）になり、損失領域ではリスク愛好的（損失を取り戻そうとギャンブル的なリスクを取る）になる傾向を説明します。投資家の損切り遅れやマーケティングの返金保証の有効性の根拠となります。"
  },
  {
    "id": "mba-ana-037",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "アンカリング効果",
    "difficulty": "standard",
    "question": "最初に提示された特定の数値や情報（いかり: アンカー）が基準点として強烈な印象を与え、その後の交渉、見積もり、価格評価の意思決定が無意識のうちにその数値に引きずられて歪んでしまう認知バイアスはどれか。",
    "options": [
      "ハロー効果",
      "プライミング効果",
      "フレーミング効果",
      "アンカリング効果（Anchoring Effect）"
    ],
    "answerIndex": 3,
    "explanation": "正解はアンカリング効果（Anchoring Effect）です。「通常価格50,000円のところ、特別価格29,800円」と提示されると、50,000円がアンカーとなり割安感を強く感じる値付け戦略が典型です。価格交渉でも最初に提示する提案額が交渉全体の落としどころを大きく左右します。"
  },
  {
    "id": "mba-ana-038",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "確証バイアス",
    "difficulty": "standard",
    "question": "自分の先入観や仮説を支持・肯定する都合の良い情報ばかりを無意識に集め、それを否定・反証する客観的な証拠を無視・過小評価してしまう心理的傾向はどれか。",
    "options": [
      "確証バイアス（Confirmation Bias）",
      "正常性バイアス",
      "自己奉仕バイアス",
      "連帯バイアス"
    ],
    "answerIndex": 0,
    "explanation": "正解は確証バイアス（Confirmation Bias）です。ビジネスリーダーが新規事業や大型投資に惚れ込むあまり、市場のネガティブな予兆を過小評価して大失敗を招く主因となります。対策として、あえて批判的な視点から反論を行う「悪魔の代弁者（デビルズ・アドボケイト）」を会議に置く手法が有効です。"
  },
  {
    "id": "mba-ana-039",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "利用可能性ヒューリスティック",
    "difficulty": "standard",
    "question": "確率や頻度を評価する際、記憶から容易に思い出しやすい（印象が強烈、直近で起きた、ニュースで大きく報道されたなど）事象の発生確率を、実際よりも極端に高く見積もってしまう直感的思考の偏りはどれか。",
    "options": [
      "代表性ヒューリスティック",
      "利用可能性ヒューリスティック",
      "基準率の無視",
      "感情ヒューリスティック"
    ],
    "answerIndex": 1,
    "explanation": "正解は利用可能性ヒューリスティック（Availability Heuristic）です。飛行機事故のニュースを直前に見た人が、自動車事故よりはるかに低い飛行機の事故確率を極度に恐れるケースが典型です。実務でも、直近に発生したクレーム1件に過剰反応して会社全体のルールを非効率に変えてしまうような弊害を生みます。"
  },
  {
    "id": "mba-ana-040",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "代表性ヒューリスティック",
    "difficulty": "standard",
    "question": "ある人物や事象が特定のカテゴリーの「典型的なイメージ（ステレオタイプ）」にどれだけ類似しているかのみで判断し、統計的な事前確率（ベースレート / 基準率）を無視して確率を誤認してしまうバイアスはどれか。",
    "options": [
      "連言錯誤（リンダ問題）",
      "おとり効果",
      "代表性ヒューリスティック（Representativeness Heuristic）",
      "バンドワゴン効果"
    ],
    "answerIndex": 2,
    "explanation": "正解は代表性ヒューリスティック（Representativeness Heuristic）です。「几帳面で静かな人物」という描写を聞いて、母数が圧倒的に多い営業職よりも、イメージが合致する図書館司書である確率が高いと錯覚してしまう（基準率の無視）などが有名です。定性的な印象だけで判断し、母集団の規模を見誤るリスクがあります。"
  },
  {
    "id": "mba-ana-041",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "パレートの法則",
    "difficulty": "standard",
    "question": "イタリアの経済学者ヴィルフレド・パレートが提唱した経験則で、「全体の成果や事象の大部分（約80%）は、全体を構成するごくわずかな要素（約20%）から生み出されている」とする法則はどれか。",
    "options": [
      "パーキンソンの法則",
      "グレシャムの法則",
      "ジップの法則",
      "パレートの法則（80:20の法則）"
    ],
    "answerIndex": 3,
    "explanation": "正解はパレートの法則（80:20の法則）です。「売上の8割は2割の優良顧客（または売れ筋商品）がもたらす」「全ソフトウェアの不具合の8割は2割のバグ原因に起因する」などビジネスに広く当てはまります。リソースが限られる中で、どの重要部分に集中投資すべきかを判断する重点管理の基本指針です。"
  },
  {
    "id": "mba-ana-042",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "ベイズ推定（事前確率と事後確率）",
    "difficulty": "standard",
    "question": "トーマス・ベイズが提唱した確率論の定理を応用し、あらかじめ設定した「事前確率」に対し、新たに得られたデータや証拠（エビデンス）を反映して確率を「事後確率」へと逐次更新していく統計的推論アプローチはどれか。",
    "options": [
      "ベイズ推定（Bayesian Inference）",
      "頻度論的統計",
      "最尤推定法",
      "ブートストラップ法"
    ],
    "answerIndex": 0,
    "explanation": "正解はベイズ推定（Bayesian Inference）です。迷惑メールフィルター（スパム判定）や機械学習、感染症の陽性診断時の真の罹患確率計算、新薬開発の臨床試験などに幅広く用いられます。「データが増えるにつれて信念（確率）を柔軟に更新していく」という思考法は、不確実性の高いDX時代の経営判断にも合致しています。"
  },
  {
    "id": "mba-ana-043",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "相関関係と因果関係（疑似相関）",
    "difficulty": "standard",
    "question": "「アイスクリームの売上が増えると水難事故が増加する」のように、2つの変数の間に統計的な連動関係が見られるものの、実際には背後にある第3の共通要因（気温上昇）によって見かけ上の関係が生じている現象を何と呼ぶか。",
    "options": [
      "逆の因果関係",
      "疑似相関（Spurious Correlation）",
      "交互作用効果",
      "媒介効果"
    ],
    "answerIndex": 1,
    "explanation": "正解は疑似相関（見かけ上の相関 / Spurious Correlation）です。「相関関係があるからといって因果関係があるとは限らない」というデータ分析の最重要原則です。潜伏変数（交絡因子: Confounder）を見抜かないまま意思決定を行うと、的外れな施策に多額の予算を浪費することになります。"
  },
  {
    "id": "mba-ana-044",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "標準偏差とボラティリティ",
    "difficulty": "standard",
    "question": "データの散らばり具合（バラツキ）を平均値からの偏差の2乗平均の平方根として表す統計指標であり、ファイナンスにおいて株価や為替のリターン変動リスク（ボラティリティ）の尺度として広く使われるものはどれか。",
    "options": [
      "中央値（メディアン）",
      "四分位範囲（IQR）",
      "標準偏差（Standard Deviation: σ）",
      "歪度（Skewness）"
    ],
    "answerIndex": 2,
    "explanation": "正解は標準偏差（Standard Deviation: σ）です。分散の平方根をとることで元のデータと同じ単位に戻したものです。ファイナンス理論（現代ポートフォリオ理論など）では、リターンの不確実性そのものを「リスク」と定義し、標準偏差（σ）の大きさでリスク量を測定します。"
  },
  {
    "id": "mba-ana-045",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "正規分布と経験則（68-95-99.7則）",
    "difficulty": "standard",
    "question": "平均値を中心とした左右対称の釣鐘型（ベルカーブ）の連続確率分布において、平均値から「±1標準偏差」「±2標準偏差」「±3標準偏差」の区間にデータが含まれる割合として正しい組み合わせはどれか。",
    "options": [
      "約50% / 約75% / 約90%",
      "約60% / 約80% / 約99%",
      "約70% / 約90% / 約95%",
      "約68% / 約95% / 約99.7%"
    ],
    "answerIndex": 3,
    "explanation": "正解は「約68% / 約95% / 約99.7%」です。正規分布（ガウス分布）の基本特性であり、シックスシグマの品質基準や金融のVaR（バリュー・アット・リスク）、安全在庫計算の安全係数の算出など、実務のあらゆる統計的リスク推計の根拠として頻繁に利用されます。"
  },
  {
    "id": "mba-ana-046",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "中心極限定理",
    "difficulty": "standard",
    "question": "母集団がどのような確率分布（非対称や歪んだ分布）であっても、そこから無作為抽出した標本のサイズ（n）が十分に大きい場合、標本平均の分布は近似的に正規分布に従うという統計学の根幹定理はどれか。",
    "options": [
      "中心極限定理（Central Limit Theorem）",
      "大数の法則",
      "チェビシェフの不等式",
      "ガウス・マルコフの定理"
    ],
    "answerIndex": 0,
    "explanation": "正解は中心極限定理（Central Limit Theorem）です。この定理のおかげで、元の母集団の分布形状が分からなくても、十分なサンプル数（通常n≧30程度）を確保すれば正規分布を仮定した検定や区間推定が可能となり、世論調査やマーケティングリサーチ、品質管理の実務が成り立っています。"
  },
  {
    "id": "mba-ana-047",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "仮説検定とp値",
    "difficulty": "standard",
    "question": "統計的仮説検定において、「効果や差がない」とする帰無仮説のもとで、実際に得られたデータ（またはそれ以上に極端なデータ）が偶然生じる確率を示し、これが有意水準（通常5%や1%）未満であれば帰無仮説を棄却して差があると判断する指標はどれか。",
    "options": [
      "t値",
      "p値（有意確率: p-value）",
      "F値",
      "Z値"
    ],
    "answerIndex": 1,
    "explanation": "正解はp値（有意確率: p-value）です。A/Bテストで「新デザインBは旧デザインAより成約率が高い」と主張したい場合、「両者に差はない」という帰無仮説を立て、p値が0.05（5%）未満となった場合に「偶然とは考えにくい有意な差がある」と判定します。"
  },
  {
    "id": "mba-ana-048",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "第1種の過誤と第2種の過誤",
    "difficulty": "standard",
    "question": "統計的仮説検定や品質検査において、「実際には差や不良がない（帰無仮説が真である）にもかかわらず、誤って差や不良があると判断して棄却してしまう誤り（偽陽性 / 生産者危険）」を何と呼ぶか。",
    "options": [
      "第2種の過誤（Type II Error: βエラー）",
      "標本抽出誤差",
      "第1種の過誤（Type I Error: αエラー）",
      "生存バイアス誤差"
    ],
    "answerIndex": 2,
    "explanation": "正解は第1種の過誤（Type I Error: αエラー / 偽陽性）です。良品を不良品と誤診して廃棄する「生産者危険」とも呼ばれます。これに対し、実際には差や不良があるのに見逃してしまう誤り（偽陰性 / 消費者危険）を「第2種の過誤（Type II Error: βエラー）」と呼び、両者はトレードオフの関係にあります。"
  },
  {
    "id": "mba-ana-049",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "損益分岐点分析（CVP分析）",
    "difficulty": "standard",
    "question": "費用を固定費と変動費に分類し、売上高と費用の関係を分析することで、売上高と総費用が等しくなり利益がちょうどゼロになる売上高（または販売数量）を求める管理会計手法はどれか。",
    "options": [
      "資本回収期間法",
      "内部収益率法（IRR）",
      "バリューアットリスク分析",
      "損益分岐点分析（CVP分析: Cost-Volume-Profit）"
    ],
    "answerIndex": 3,
    "explanation": "正解は損益分岐点分析（CVP分析: Cost-Volume-Profit）です。損益分岐点売上高は「固定費 ÷ 限界利益率」で計算されます。新規事業の採算ラインの把握や、固定費削減・価格改定が利益に与える影響のシミュレーションなど、経営意思決定の基礎ツールとして活用されます。"
  },
  {
    "id": "mba-ana-050",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "安全余裕率",
    "difficulty": "standard",
    "question": "企業の現在の売上高が損益分岐点売上高をどの程度上回っているかを示す指標であり、「（現在の売上高－損益分岐点売上高）÷ 現在の売上高」で求められる企業の財務安全性の指標はどれか。",
    "options": [
      "安全余裕率（Margin of Safety）",
      "営業利益率",
      "操業度比率",
      "ギアリング比率"
    ],
    "answerIndex": 0,
    "explanation": "正解は安全余裕率（Margin of Safety）です。例えば安全余裕率が30%であれば、「売上高が30%落ち込んでも赤字に転落しない」という経営体力の余裕度合いを意味します。不況に対する企業の抵抗力を測る重要指標であり、一般に20%以上が望ましいとされます。"
  },
  {
    "id": "mba-ana-051",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "限界利益と限界利益率",
    "difficulty": "standard",
    "question": "売上高から売上に比例して発生する変動費を差し引いた金額であり、固定費の回収と純利益の創出にどれだけ貢献（寄与）しているかを表す管理会計上の利益概念はどれか。",
    "options": [
      "経常利益",
      "限界利益（貢献利益 / Contribution Margin）",
      "売上総利益",
      "営業キャッシュフロー"
    ],
    "answerIndex": 1,
    "explanation": "正解は限界利益（貢献利益 / Contribution Margin）です。「売上高－変動費」で算出され、売上高に対する割合を「限界利益率」と呼びます。短期間の意思決定（製品ラインの追加・撤退や特売注文の受諾可否など）において、埋没する固定費に惑わされず限界利益がプラスか否かで判断することが重要です。"
  },
  {
    "id": "mba-ana-052",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "期待値（Expected Value）",
    "difficulty": "standard",
    "question": "将来発生し得る各事象の損益やリターンに対し、それぞれの事象が発生する確率を掛け合わせ、それらを合計することで算出される確率論的加重平均値はどれか。",
    "options": [
      "最頻値（モード）",
      "幾何平均値",
      "期待値（Expected Value: EV）",
      "変動係数"
    ],
    "answerIndex": 2,
    "explanation": "正解は期待値（Expected Value: EV）です。例えば「60%の確率で1億円の利益、40%の確率で2000万円の損失」が見込める事業投資の期待値は、0.6×1億＋0.4×(-2000万)＝5200万円となります。不確実な環境下で複数の投資案件を客観的・定量的に比較評価する際の基準となります。"
  },
  {
    "id": "mba-ana-053",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "マキシミン基準とマキシマックス基準",
    "difficulty": "standard",
    "question": "将来の生起確率が全く分からない不確実性下の意思決定基準のうち、各選択肢の「最悪の結果」を想定し、その最悪のケースの中で最もマシな（最大となる）選択肢を選ぶ極めて保守的・悲観的な基準はどれか。",
    "options": [
      "マキシマックス基準（Maximax）",
      "ラプラスの基準",
      "ハーヴィッツの基準",
      "マキシミン基準（Maximin / ワルドの基準）"
    ],
    "answerIndex": 3,
    "explanation": "正解はマキシミン基準（Maximin / ワルドの基準）です。「最悪（Min）の中の最大（Max）」を狙うリスク回避的な意思決定アプローチです。一方、各選択肢の「最高の結果」を比較してその中から最大のものを選ぶ超強気・楽観的な基準をマキシマックス基準（Maximax）と呼びます。"
  },
  {
    "id": "mba-ana-054",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "機会損失（リグレット基準）",
    "difficulty": "standard",
    "question": "ある状況が発生した際、仮にその状況を事前に予知して最適な選択肢を選んでいた場合に得られたはずの最大利益と、実際に選んだ選択肢との差額（取り逃した利益・後悔の大きさ）を最小化しようとするサベッジの意思決定基準はどれか。",
    "options": [
      "ミニマックス・リグレット基準（機会損失最小化基準）",
      "期待値最大化基準",
      "サンクコスト最適化基準",
      "ペイオフ・マトリクス基準"
    ],
    "answerIndex": 0,
    "explanation": "正解はミニマックス・リグレット基準（機会損失最小化基準 / サベッジの基準）です。得られる利益そのものではなく、「あの時こうしておけばよかった」という後悔（リグレット / 機会費用）の最大値を各選択肢ごとに計算し、その最大後悔が最も小さくなる選択肢を選びます。"
  },
  {
    "id": "mba-ana-055",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "散布図と外れ値",
    "difficulty": "standard",
    "question": "2つの量的変数の関係を可視化するために縦軸と横軸にデータをプロットしたグラフであり、他の大半のデータ群から極端に離れた位置に存在する特異なデータ点（外れ値）を発見・精査するために適したツールはどれか。",
    "options": [
      "ヒストグラム",
      "散布図（Scatter Plot）",
      "円グラフ",
      "積み上げ棒グラフ"
    ],
    "answerIndex": 1,
    "explanation": "正解は散布図（Scatter Plot）です。変数の相関傾向（正の相関、負の相関、無相関）を一目で直感的に把握できます。外れ値（Outlier）が含まれていると平均値や相関係数が大きく歪むため、入力ミスや異常値なのか、それとも新ビジネスの種となる極めて特異な顧客行動なのかを見極める重要な第一歩となります。"
  },
  {
    "id": "mba-ana-056",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "生存者バイアス",
    "difficulty": "standard",
    "question": "過去の過酷な競争や選別のプロセスを生き残った「成功者（生存した対象）」のみを標本として分析し、途中で淘汰・失敗して脱落した多数の「非生存者」のデータを無視することで、成功要因や成功確率を過大評価してしまう誤謬はどれか。",
    "options": [
      "ハロー効果",
      "自己選択バイアス",
      "生存者バイアス（Survivorship Bias）",
      "出版バイアス"
    ],
    "answerIndex": 2,
    "explanation": "正解は生存者バイアス（Survivorship Bias）です。第2次大戦中に帰還した戦闘機の被弾箇所を補強しようとした際、数学者エイブラハム・ウォールドが「被弾がなかった場所こそ撃墜された戦闘機の急所である」と見抜いた逸話が有名です。「成功した起業家の習慣」だけを真似ても、同様の習慣を持ちながら倒産した数万社のデータを見落としていれば誤った結論に至ります。"
  },
  {
    "id": "mba-ana-057",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "クラスター分析",
    "difficulty": "standard",
    "question": "あらかじめ分類基準（正解ラベル）が与えられていない多数の顧客やデータの中から、購買履歴や行動特性などの類似度（距離）に基づいて、似たもの同士のグループ（セグメント）に自動的に分類する教師なし機械学習・多変量解析手法はどれか。",
    "options": [
      "重回帰分析",
      "ロジスティック回帰",
      "決定木分析",
      "クラスター分析（Cluster Analysis）"
    ],
    "answerIndex": 3,
    "explanation": "正解はクラスター分析（Cluster Analysis）です。階層的クラスタリング（ウォード法など）と非階層的クラスタリング（k-means法など）があります。マーケティングにおける顧客セグメンテーションやペルソナ設計、類似店舗のグルーピングなどに幅広く活用されます。"
  },
  {
    "id": "mba-ana-058",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "主成分分析（PCA）",
    "difficulty": "standard",
    "question": "互いに関連性（相関）を持つ多数の変数から、データの情報損失（分散）を最小限に抑えながら、より少数の互いに無相関な合成変数（主成分）を合成して縮約する多変量解析・次元削減手法はどれか。",
    "options": [
      "主成分分析（PCA: Principal Component Analysis）",
      "t-SNE",
      "判別分析",
      "因子分析"
    ],
    "answerIndex": 0,
    "explanation": "正解は主成分分析（PCA: Principal Component Analysis）です。例えば企業の総合力評価において「売上高」「利益率」「自己資本比率」「従業員数」などの多数の指標を、「収益規模性（第1主成分）」と「財務安全性（第2主成分）」の2軸に集約して散布図上にポジショニングマップとして可視化する際などに重宝されます。"
  },
  {
    "id": "mba-ana-059",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "コンジョイント分析",
    "difficulty": "standard",
    "question": "新商品のコンセプト評価において、デザイン、価格、ブランド、バッテリー持続時間などの複数の属性（要因）とその水準を組み合わせた仮想製品プロファイルを消費者に提示して選ばせ、各属性の重要度（効用値）を推定する手法はどれか。",
    "options": [
      "PSM分析（価格感度測定）",
      "コンジョイント分析（Conjoint Analysis）",
      "因子分析",
      "構造方程式モデリング（SEM）"
    ],
    "answerIndex": 1,
    "explanation": "正解はコンジョイント分析（Conjoint Analysis）です。消費者に「価格と機能のどちらが重要か」と単に聞くだけでは「高機能で安いものがいい」という非現実的な回答になりがちです。トレードオフを伴う全体プロファイルを評価させることで、消費者の無意識の効用構造を科学的に推定し、最適な仕様と価格設定を導き出します。"
  },
  {
    "id": "mba-ana-060",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "探索的データ分析（EDA）",
    "difficulty": "standard",
    "question": "統計モデルの構築や厳密な仮説検定を行う前に、要約統計量の算出（平均、中央値、分散等）や視覚化（ヒストグラム、箱ひげ図、散布図等）を通じて、データ全体の分布形状、欠損値、外れ値、隠れた構造を直感的に探る一連の初期分析アプローチはどれか。",
    "options": [
      "仮説検証型アプローチ",
      "感度シミュレーション",
      "探索的データ分析（EDA: Exploratory Data Analysis）",
      "メタアナリシス"
    ],
    "answerIndex": 2,
    "explanation": "正解は探索的データ分析（EDA: Exploratory Data Analysis）です。統計学者ジョン・テューキーが提唱しました。事前の強い仮説に囚われずにデータそのものと対話することで、想定外のパターンやデータの歪みにいち早く気付き、より精度の高い仮説立案や機械学習の前処理に繋げることができます。"
  },
  {
    "id": "mba-ana-061",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "ピアソンの積率相関係数",
    "difficulty": "standard",
    "question": "2つの量的変数の間における「直線的な関係の強さと方向性」を定量化する指標で、－1から＋1の範囲をとり、＋1に近いほど正の相関、－1に近いほど負の相関が強いことを示す統計量はどれか。",
    "options": [
      "スピアマンの順位相関係数",
      "共分散",
      "ジニ係数",
      "ピアソンの積率相関係数（r）"
    ],
    "answerIndex": 3,
    "explanation": "正解はピアソンの積率相関係数（r）です。共分散をそれぞれの標準偏差の積で割って無次元化したものです。注意点として、相関係数はあくまで「直線的な線形関係」しか測定できないため、二次関数的なU字型の強い関係があっても相関係数は0付近になることがあります。必ず散布図と併せて確認することが鉄則です。"
  },
  {
    "id": "mba-ana-062",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "先行指標と遅行指標",
    "difficulty": "standard",
    "question": "企業のKPIマネジメントにおいて、売上や利益のように「結果として後から判明する指標（遅行指標）」に対し、将来の目標達成の確度を予測し、現時点でコントロール可能な行動量や中間プロセスを示す指標（先行指標）を何と呼ぶか。",
    "options": [
      "先行指標（Leading Indicators）",
      "遅行指標（Lagging Indicators）",
      "コインシデント指標",
      "プロキシ指標"
    ],
    "answerIndex": 0,
    "explanation": "正解は先行指標（Leading Indicators）です。売上（遅行指標）を伸ばそうと指示するだけでは現場は何をすべきか曖昧ですが、「新規商談数」「提案書提出数」「Webセミナー参加者数」といった先行指標を管理することで、結果が出る前の段階で軌道修正が可能になります。"
  },
  {
    "id": "mba-ana-063",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "時系列分析と移動平均法",
    "difficulty": "standard",
    "question": "日次や月次の売上データなど時系列データの変動において、曜日や季節による短期的なノイズや周期変動を平滑化し、データの長期的な基調（トレンド）を捉えるために、過去の一定期間ごとの平均値を順次ずらしながら算出・プロットする手法はどれか。",
    "options": [
      "指数平滑化法",
      "移動平均法（Moving Average）",
      "重み付き幾何平均法",
      "ARIMAモデル"
    ],
    "answerIndex": 1,
    "explanation": "正解は移動平均法（Moving Average）です。7日間移動平均（曜日変動の除去）や12ヶ月移動平均（季節変動の除去）が代表的です。株価のテクニカル分析（ゴールデンクロス・デッドクロスなど）や需要予測のベースライン推計において、ノイズを排して真のトレンドを見極めるために広く使われます。"
  },
  {
    "id": "mba-ana-064",
    "category": "analytics",
    "categoryName": "意思決定・定量分析 (Data Analytics)",
    "term": "後知恵バイアス",
    "difficulty": "standard",
    "question": "ある物事（選挙結果、株価暴落、プロジェクトの失敗など）が実際に発生した後に、「初めからそうなることは分かっていた」「当然の結果だ」と、過去の予測可能性を過大評価してしまう認知バイアスはどれか。",
    "options": [
      "自己都合バイアス",
      "ダニング＝クルーガー効果",
      "後知恵バイアス（Hindsight Bias）",
      "盲点バイアス"
    ],
    "answerIndex": 2,
    "explanation": "正解は後知恵バイアス（Hindsight Bias）です。「結果論」で過去を評価してしまうため、当時の不確実性や判断材料の制約を過小評価し、失敗した担当者を理不尽に責めたり、組織としての真の学習を阻害する深刻な弊害をもたらします。意思決定プロセスの客観的な事後検証において最も警戒すべき心理的罠です。"
  }
];
