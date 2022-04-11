// Python等では、モジュールはデフォルトで公開されているため、別のファイルからimportするだけで読み込めた。しかし、TypeScript(JavaScript)は逆で、デフォルトで非公開になっている。そのため、ほかのファイルからこのファイルを参照したいなら、このファイルでexportしておかなければならない。
export const POKEMONS_HOEEN = [
  {
    "id": 252,
    "name": "キモリ",
    "type": [
      "くさ"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp_Attack": 65,
      "Sp_Defense": 55,
      "Speed": 70
    }
  },
  {
    "id": 253,
    "name": "ジュプトル",
    "type": [
      "くさ"
    ],
    "base": {
      "HP": 50,
      "Attack": 65,
      "Defense": 45,
      "Sp_Attack": 85,
      "Sp_Defense": 65,
      "Speed": 95
    }
  },
  {
    "id": 254,
    "name": "ジュカイン",
    "type": [
      "くさ"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 65,
      "Sp_Attack": 105,
      "Sp_Defense": 85,
      "Speed": 120
    }
  },
  {
    "id": 255,
    "name": "アチャモ",
    "type": [
      "ほのお"
    ],
    "base": {
      "HP": 45,
      "Attack": 60,
      "Defense": 40,
      "Sp_Attack": 70,
      "Sp_Defense": 50,
      "Speed": 45
    }
  },
  {
    "id": 256,
    "name": "ワカシャモ",
    "type": [
      "ほのお",
      "かくとう"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 60,
      "Sp_Attack": 85,
      "Sp_Defense": 60,
      "Speed": 55
    }
  },
  {
    "id": 257,
    "name": "バシャーモ",
    "type": [
      "ほのお",
      "かくとう"
    ],
    "base": {
      "HP": 80,
      "Attack": 120,
      "Defense": 70,
      "Sp_Attack": 110,
      "Sp_Defense": 70,
      "Speed": 80
    }
  },
  {
    "id": 258,
    "name": "ミズゴロウ",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 50,
      "Attack": 70,
      "Defense": 50,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 40
    }
  },
  {
    "id": 259,
    "name": "ヌマクロー",
    "type": [
      "みず",
      "じめん"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 70,
      "Sp_Attack": 60,
      "Sp_Defense": 70,
      "Speed": 50
    }
  },
  {
    "id": 260,
    "name": "ラグラージ",
    "type": [
      "みず",
      "じめん"
    ],
    "base": {
      "HP": 100,
      "Attack": 110,
      "Defense": 90,
      "Sp_Attack": 85,
      "Sp_Defense": 90,
      "Speed": 60
    }
  },
  {
    "id": 261,
    "name": "ポチエナ",
    "type": [
      "あく"
    ],
    "base": {
      "HP": 35,
      "Attack": 55,
      "Defense": 35,
      "Sp_Attack": 30,
      "Sp_Defense": 30,
      "Speed": 35
    }
  },
  {
    "id": 262,
    "name": "グラエナ",
    "type": [
      "あく"
    ],
    "base": {
      "HP": 70,
      "Attack": 90,
      "Defense": 70,
      "Sp_Attack": 60,
      "Sp_Defense": 60,
      "Speed": 70
    }
  },
  {
    "id": 263,
    "name": "ジグザグマ",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 38,
      "Attack": 30,
      "Defense": 41,
      "Sp_Attack": 30,
      "Sp_Defense": 41,
      "Speed": 60
    }
  },
  {
    "id": 264,
    "name": "マッスグマ",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 78,
      "Attack": 70,
      "Defense": 61,
      "Sp_Attack": 50,
      "Sp_Defense": 61,
      "Speed": 100
    }
  },
  {
    "id": 265,
    "name": "ケムッソ",
    "type": [
      "むし"
    ],
    "base": {
      "HP": 45,
      "Attack": 45,
      "Defense": 35,
      "Sp_Attack": 20,
      "Sp_Defense": 30,
      "Speed": 20
    }
  },
  {
    "id": 266,
    "name": "カラサリス",
    "type": [
      "むし"
    ],
    "base": {
      "HP": 50,
      "Attack": 35,
      "Defense": 55,
      "Sp_Attack": 25,
      "Sp_Defense": 25,
      "Speed": 15
    }
  },
  {
    "id": 267,
    "name": "アゲハント",
    "type": [
      "むし",
      "ひこう"
    ],
    "base": {
      "HP": 60,
      "Attack": 70,
      "Defense": 50,
      "Sp_Attack": 100,
      "Sp_Defense": 50,
      "Speed": 65
    }
  },
  {
    "id": 268,
    "name": "マユルド",
    "type": [
      "むし"
    ],
    "base": {
      "HP": 50,
      "Attack": 35,
      "Defense": 55,
      "Sp_Attack": 25,
      "Sp_Defense": 25,
      "Speed": 15
    }
  },
  {
    "id": 269,
    "name": "ドクケイル",
    "type": [
      "むし",
      "どく"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 70,
      "Sp_Attack": 50,
      "Sp_Defense": 90,
      "Speed": 65
    }
  },
  {
    "id": 270,
    "name": "ハスボー",
    "type": [
      "みず",
      "くさ"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 30,
      "Sp_Attack": 40,
      "Sp_Defense": 50,
      "Speed": 30
    }
  },
  {
    "id": 271,
    "name": "ハスブレロ",
    "type": [
      "みず",
      "くさ"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 50,
      "Sp_Attack": 60,
      "Sp_Defense": 70,
      "Speed": 50
    }
  },
  {
    "id": 272,
    "name": "ルンパッパ",
    "type": [
      "みず",
      "くさ"
    ],
    "base": {
      "HP": 80,
      "Attack": 70,
      "Defense": 70,
      "Sp_Attack": 90,
      "Sp_Defense": 100,
      "Speed": 70
    }
  },
  {
    "id": 273,
    "name": "タネボー",
    "type": [
      "くさ"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 50,
      "Sp_Attack": 30,
      "Sp_Defense": 30,
      "Speed": 30
    }
  },
  {
    "id": 274,
    "name": "コノハナ",
    "type": [
      "くさ",
      "あく"
    ],
    "base": {
      "HP": 70,
      "Attack": 70,
      "Defense": 40,
      "Sp_Attack": 60,
      "Sp_Defense": 40,
      "Speed": 60
    }
  },
  {
    "id": 275,
    "name": "ダーテング",
    "type": [
      "くさ",
      "あく"
    ],
    "base": {
      "HP": 90,
      "Attack": 100,
      "Defense": 60,
      "Sp_Attack": 90,
      "Sp_Defense": 60,
      "Speed": 80
    }
  },
  {
    "id": 276,
    "name": "スバメ",
    "type": [
      "ノーマル",
      "ひこう"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 30,
      "Sp_Attack": 30,
      "Sp_Defense": 30,
      "Speed": 85
    }
  },
  {
    "id": 277,
    "name": "オオスバメ",
    "type": [
      "ノーマル",
      "ひこう"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 60,
      "Sp_Attack": 75,
      "Sp_Defense": 50,
      "Speed": 125
    }
  },
  {
    "id": 278,
    "name": "キャモメ",
    "type": [
      "みず",
      "ひこう"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 30,
      "Sp_Attack": 55,
      "Sp_Defense": 30,
      "Speed": 85
    }
  },
  {
    "id": 279,
    "name": "ペリッパー",
    "type": [
      "みず",
      "ひこう"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 100,
      "Sp_Attack": 95,
      "Sp_Defense": 70,
      "Speed": 65
    }
  },
  {
    "id": 280,
    "name": "ラルトス",
    "type": [
      "エスパー",
      "フェアリー"
    ],
    "base": {
      "HP": 28,
      "Attack": 25,
      "Defense": 25,
      "Sp_Attack": 45,
      "Sp_Defense": 35,
      "Speed": 40
    }
  },
  {
    "id": 281,
    "name": "キルリア",
    "type": [
      "エスパー",
      "フェアリー"
    ],
    "base": {
      "HP": 38,
      "Attack": 35,
      "Defense": 35,
      "Sp_Attack": 65,
      "Sp_Defense": 55,
      "Speed": 50
    }
  },
  {
    "id": 282,
    "name": "サーナイト",
    "type": [
      "エスパー",
      "フェアリー"
    ],
    "base": {
      "HP": 68,
      "Attack": 65,
      "Defense": 65,
      "Sp_Attack": 125,
      "Sp_Defense": 115,
      "Speed": 80
    }
  },
  {
    "id": 283,
    "name": "アメタマ",
    "type": [
      "むし",
      "みず"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 32,
      "Sp_Attack": 50,
      "Sp_Defense": 52,
      "Speed": 65
    }
  },
  {
    "id": 284,
    "name": "アメモース",
    "type": [
      "むし",
      "ひこう"
    ],
    "base": {
      "HP": 70,
      "Attack": 60,
      "Defense": 62,
      "Sp_Attack": 100,
      "Sp_Defense": 82,
      "Speed": 80
    }
  },
  {
    "id": 285,
    "name": "キノココ",
    "type": [
      "くさ"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 60,
      "Sp_Attack": 40,
      "Sp_Defense": 60,
      "Speed": 35
    }
  },
  {
    "id": 286,
    "name": "キノガッサ",
    "type": [
      "くさ",
      "かくとう"
    ],
    "base": {
      "HP": 60,
      "Attack": 130,
      "Defense": 80,
      "Sp_Attack": 60,
      "Sp_Defense": 60,
      "Speed": 70
    }
  },
  {
    "id": 287,
    "name": "ナマケロ",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 60,
      "Sp_Attack": 35,
      "Sp_Defense": 35,
      "Speed": 30
    }
  },
  {
    "id": 288,
    "name": "ヤルキモノ",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 80,
      "Sp_Attack": 55,
      "Sp_Defense": 55,
      "Speed": 90
    }
  },
  {
    "id": 289,
    "name": "ケッキング",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 150,
      "Attack": 160,
      "Defense": 100,
      "Sp_Attack": 95,
      "Sp_Defense": 65,
      "Speed": 100
    }
  },
  {
    "id": 290,
    "name": "ツチニン",
    "type": [
      "むし",
      "じめん"
    ],
    "base": {
      "HP": 31,
      "Attack": 45,
      "Defense": 90,
      "Sp_Attack": 30,
      "Sp_Defense": 30,
      "Speed": 40
    }
  },
  {
    "id": 291,
    "name": "テッカニン",
    "type": [
      "むし",
      "ひこう"
    ],
    "base": {
      "HP": 61,
      "Attack": 90,
      "Defense": 45,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 160
    }
  },
  {
    "id": 292,
    "name": "ヌケニン",
    "type": [
      "むし",
      "ゴースト"
    ],
    "base": {
      "HP": 1,
      "Attack": 90,
      "Defense": 45,
      "Sp_Attack": 30,
      "Sp_Defense": 30,
      "Speed": 40
    }
  },
  {
    "id": 293,
    "name": "ゴニョニョ",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 64,
      "Attack": 51,
      "Defense": 23,
      "Sp_Attack": 51,
      "Sp_Defense": 23,
      "Speed": 28
    }
  },
  {
    "id": 294,
    "name": "ドゴーム",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 84,
      "Attack": 71,
      "Defense": 43,
      "Sp_Attack": 71,
      "Sp_Defense": 43,
      "Speed": 48
    }
  },
  {
    "id": 295,
    "name": "バクオング",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 104,
      "Attack": 91,
      "Defense": 63,
      "Sp_Attack": 91,
      "Sp_Defense": 73,
      "Speed": 68
    }
  },
  {
    "id": 296,
    "name": "マクノシタ",
    "type": [
      "かくとう"
    ],
    "base": {
      "HP": 72,
      "Attack": 60,
      "Defense": 30,
      "Sp_Attack": 20,
      "Sp_Defense": 30,
      "Speed": 25
    }
  },
  {
    "id": 297,
    "name": "ハリテヤマ",
    "type": [
      "かくとう"
    ],
    "base": {
      "HP": 144,
      "Attack": 120,
      "Defense": 60,
      "Sp_Attack": 40,
      "Sp_Defense": 60,
      "Speed": 50
    }
  },
  {
    "id": 298,
    "name": "ルリリ",
    "type": [
      "ノーマル",
      "フェアリー"
    ],
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 40,
      "Sp_Attack": 20,
      "Sp_Defense": 40,
      "Speed": 20
    }
  },
  {
    "id": 299,
    "name": "ノズパス",
    "type": [
      "いわ"
    ],
    "base": {
      "HP": 30,
      "Attack": 45,
      "Defense": 135,
      "Sp_Attack": 45,
      "Sp_Defense": 90,
      "Speed": 30
    }
  },
  {
    "id": 300,
    "name": "エネコ",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 50,
      "Attack": 45,
      "Defense": 45,
      "Sp_Attack": 35,
      "Sp_Defense": 35,
      "Speed": 50
    }
  },
  {
    "id": 301,
    "name": "エネコロロ",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 70,
      "Attack": 65,
      "Defense": 65,
      "Sp_Attack": 55,
      "Sp_Defense": 55,
      "Speed": 90
    }
  },
  {
    "id": 302,
    "name": "ヤミラミ",
    "type": [
      "あく",
      "ゴースト"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 75,
      "Sp_Attack": 65,
      "Sp_Defense": 65,
      "Speed": 50
    }
  },
  {
    "id": 303,
    "name": "クチート",
    "type": [
      "はがね",
      "フェアリー"
    ],
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 85,
      "Sp_Attack": 55,
      "Sp_Defense": 55,
      "Speed": 50
    }
  },
  {
    "id": 304,
    "name": "ココドラ",
    "type": [
      "はがね",
      "いわ"
    ],
    "base": {
      "HP": 50,
      "Attack": 70,
      "Defense": 100,
      "Sp_Attack": 40,
      "Sp_Defense": 40,
      "Speed": 30
    }
  },
  {
    "id": 305,
    "name": "コドラ",
    "type": [
      "はがね",
      "いわ"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 140,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 40
    }
  },
  {
    "id": 306,
    "name": "ボスゴドラ",
    "type": [
      "はがね",
      "いわ"
    ],
    "base": {
      "HP": 70,
      "Attack": 110,
      "Defense": 180,
      "Sp_Attack": 60,
      "Sp_Defense": 60,
      "Speed": 50
    }
  },
  {
    "id": 307,
    "name": "アサナン",
    "type": [
      "かくとう",
      "エスパー"
    ],
    "base": {
      "HP": 30,
      "Attack": 40,
      "Defense": 55,
      "Sp_Attack": 40,
      "Sp_Defense": 55,
      "Speed": 60
    }
  },
  {
    "id": 308,
    "name": "チャーレム",
    "type": [
      "かくとう",
      "エスパー"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 75,
      "Sp_Attack": 60,
      "Sp_Defense": 75,
      "Speed": 80
    }
  },
  {
    "id": 309,
    "name": "ラクライ",
    "type": [
      "でんき"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp_Attack": 65,
      "Sp_Defense": 40,
      "Speed": 65
    }
  },
  {
    "id": 310,
    "name": "ライボルト",
    "type": [
      "でんき"
    ],
    "base": {
      "HP": 70,
      "Attack": 75,
      "Defense": 60,
      "Sp_Attack": 105,
      "Sp_Defense": 60,
      "Speed": 105
    }
  },
  {
    "id": 311,
    "name": "プラスル",
    "type": [
      "でんき"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 40,
      "Sp_Attack": 85,
      "Sp_Defense": 75,
      "Speed": 95
    }
  },
  {
    "id": 312,
    "name": "マイナン",
    "type": [
      "でんき"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 50,
      "Sp_Attack": 75,
      "Sp_Defense": 85,
      "Speed": 95
    }
  },
  {
    "id": 313,
    "name": "バルビート",
    "type": [
      "むし"
    ],
    "base": {
      "HP": 65,
      "Attack": 73,
      "Defense": 75,
      "Sp_Attack": 47,
      "Sp_Defense": 85,
      "Speed": 85
    }
  },
  {
    "id": 314,
    "name": "イルミーゼ",
    "type": [
      "むし"
    ],
    "base": {
      "HP": 65,
      "Attack": 47,
      "Defense": 75,
      "Sp_Attack": 73,
      "Sp_Defense": 85,
      "Speed": 85
    }
  },
  {
    "id": 315,
    "name": "ロゼリア",
    "type": [
      "くさ",
      "どく"
    ],
    "base": {
      "HP": 50,
      "Attack": 60,
      "Defense": 45,
      "Sp_Attack": 100,
      "Sp_Defense": 80,
      "Speed": 65
    }
  },
  {
    "id": 316,
    "name": "ゴクリン",
    "type": [
      "どく"
    ],
    "base": {
      "HP": 70,
      "Attack": 43,
      "Defense": 53,
      "Sp_Attack": 43,
      "Sp_Defense": 53,
      "Speed": 40
    }
  },
  {
    "id": 317,
    "name": "マルノーム",
    "type": [
      "どく"
    ],
    "base": {
      "HP": 100,
      "Attack": 73,
      "Defense": 83,
      "Sp_Attack": 73,
      "Sp_Defense": 83,
      "Speed": 55
    }
  },
  {
    "id": 318,
    "name": "キバニア",
    "type": [
      "みず",
      "あく"
    ],
    "base": {
      "HP": 45,
      "Attack": 90,
      "Defense": 20,
      "Sp_Attack": 65,
      "Sp_Defense": 20,
      "Speed": 65
    }
  },
  {
    "id": 319,
    "name": "サメハダー",
    "type": [
      "みず",
      "あく"
    ],
    "base": {
      "HP": 70,
      "Attack": 120,
      "Defense": 40,
      "Sp_Attack": 95,
      "Sp_Defense": 40,
      "Speed": 95
    }
  },
  {
    "id": 320,
    "name": "ホエルコ",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 130,
      "Attack": 70,
      "Defense": 35,
      "Sp_Attack": 70,
      "Sp_Defense": 35,
      "Speed": 60
    }
  },
  {
    "id": 321,
    "name": "ホエルオー",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 170,
      "Attack": 90,
      "Defense": 45,
      "Sp_Attack": 90,
      "Sp_Defense": 45,
      "Speed": 60
    }
  },
  {
    "id": 322,
    "name": "ドンメル",
    "type": [
      "ほのお",
      "じめん"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 40,
      "Sp_Attack": 65,
      "Sp_Defense": 45,
      "Speed": 35
    }
  },
  {
    "id": 323,
    "name": "バクーダ",
    "type": [
      "ほのお",
      "じめん"
    ],
    "base": {
      "HP": 70,
      "Attack": 100,
      "Defense": 70,
      "Sp_Attack": 105,
      "Sp_Defense": 75,
      "Speed": 40
    }
  },
  {
    "id": 324,
    "name": "コータス",
    "type": [
      "ほのお"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 140,
      "Sp_Attack": 85,
      "Sp_Defense": 70,
      "Speed": 20
    }
  },
  {
    "id": 325,
    "name": "バネブー",
    "type": [
      "エスパー"
    ],
    "base": {
      "HP": 60,
      "Attack": 25,
      "Defense": 35,
      "Sp_Attack": 70,
      "Sp_Defense": 80,
      "Speed": 60
    }
  },
  {
    "id": 326,
    "name": "ブーピッグ",
    "type": [
      "エスパー"
    ],
    "base": {
      "HP": 80,
      "Attack": 45,
      "Defense": 65,
      "Sp_Attack": 90,
      "Sp_Defense": 110,
      "Speed": 80
    }
  },
  {
    "id": 327,
    "name": "パッチール",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 60,
      "Sp_Attack": 60,
      "Sp_Defense": 60,
      "Speed": 60
    }
  },
  {
    "id": 328,
    "name": "ナックラー",
    "type": [
      "じめん"
    ],
    "base": {
      "HP": 45,
      "Attack": 100,
      "Defense": 45,
      "Sp_Attack": 45,
      "Sp_Defense": 45,
      "Speed": 10
    }
  },
  {
    "id": 329,
    "name": "ビブラーバ",
    "type": [
      "じめん",
      "ドラゴン"
    ],
    "base": {
      "HP": 50,
      "Attack": 70,
      "Defense": 50,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 70
    }
  },
  {
    "id": 330,
    "name": "フライゴン",
    "type": [
      "じめん",
      "ドラゴン"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 80,
      "Sp_Attack": 80,
      "Sp_Defense": 80,
      "Speed": 100
    }
  },
  {
    "id": 331,
    "name": "サボネア",
    "type": [
      "くさ"
    ],
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 40,
      "Sp_Attack": 85,
      "Sp_Defense": 40,
      "Speed": 35
    }
  },
  {
    "id": 332,
    "name": "ノクタス",
    "type": [
      "くさ",
      "あく"
    ],
    "base": {
      "HP": 70,
      "Attack": 115,
      "Defense": 60,
      "Sp_Attack": 115,
      "Sp_Defense": 60,
      "Speed": 55
    }
  },
  {
    "id": 333,
    "name": "チルット",
    "type": [
      "ノーマル",
      "ひこう"
    ],
    "base": {
      "HP": 45,
      "Attack": 40,
      "Defense": 60,
      "Sp_Attack": 40,
      "Sp_Defense": 75,
      "Speed": 50
    }
  },
  {
    "id": 334,
    "name": "チルタリス",
    "type": [
      "ドラゴン",
      "ひこう"
    ],
    "base": {
      "HP": 75,
      "Attack": 70,
      "Defense": 90,
      "Sp_Attack": 70,
      "Sp_Defense": 105,
      "Speed": 80
    }
  },
  {
    "id": 335,
    "name": "ザングース",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 73,
      "Attack": 115,
      "Defense": 60,
      "Sp_Attack": 60,
      "Sp_Defense": 60,
      "Speed": 90
    }
  },
  {
    "id": 336,
    "name": "ハブネーク",
    "type": [
      "どく"
    ],
    "base": {
      "HP": 73,
      "Attack": 100,
      "Defense": 60,
      "Sp_Attack": 100,
      "Sp_Defense": 60,
      "Speed": 65
    }
  },
  {
    "id": 337,
    "name": "ルナトーン",
    "type": [
      "いわ",
      "エスパー"
    ],
    "base": {
      "HP": 90,
      "Attack": 55,
      "Defense": 65,
      "Sp_Attack": 95,
      "Sp_Defense": 85,
      "Speed": 70
    }
  },
  {
    "id": 338,
    "name": "ソルロック",
    "type": [
      "いわ",
      "エスパー"
    ],
    "base": {
      "HP": 90,
      "Attack": 95,
      "Defense": 85,
      "Sp_Attack": 55,
      "Sp_Defense": 65,
      "Speed": 70
    }
  },
  {
    "id": 339,
    "name": "ドジョッチ",
    "type": [
      "みず",
      "じめん"
    ],
    "base": {
      "HP": 50,
      "Attack": 48,
      "Defense": 43,
      "Sp_Attack": 46,
      "Sp_Defense": 41,
      "Speed": 60
    }
  },
  {
    "id": 340,
    "name": "ナマズン",
    "type": [
      "みず",
      "じめん"
    ],
    "base": {
      "HP": 110,
      "Attack": 78,
      "Defense": 73,
      "Sp_Attack": 76,
      "Sp_Defense": 71,
      "Speed": 60
    }
  },
  {
    "id": 341,
    "name": "ヘイガニ",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 43,
      "Attack": 80,
      "Defense": 65,
      "Sp_Attack": 50,
      "Sp_Defense": 35,
      "Speed": 35
    }
  },
  {
    "id": 342,
    "name": "シザリガー",
    "type": [
      "みず",
      "あく"
    ],
    "base": {
      "HP": 63,
      "Attack": 120,
      "Defense": 85,
      "Sp_Attack": 90,
      "Sp_Defense": 55,
      "Speed": 55
    }
  },
  {
    "id": 343,
    "name": "ヤジロン",
    "type": [
      "じめん",
      "エスパー"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 55,
      "Sp_Attack": 40,
      "Sp_Defense": 70,
      "Speed": 55
    }
  },
  {
    "id": 344,
    "name": "ネンドール",
    "type": [
      "じめん",
      "エスパー"
    ],
    "base": {
      "HP": 60,
      "Attack": 70,
      "Defense": 105,
      "Sp_Attack": 70,
      "Sp_Defense": 120,
      "Speed": 75
    }
  },
  {
    "id": 345,
    "name": "リリーラ",
    "type": [
      "いわ",
      "くさ"
    ],
    "base": {
      "HP": 66,
      "Attack": 41,
      "Defense": 77,
      "Sp_Attack": 61,
      "Sp_Defense": 87,
      "Speed": 23
    }
  },
  {
    "id": 346,
    "name": "ユレイドル",
    "type": [
      "いわ",
      "くさ"
    ],
    "base": {
      "HP": 86,
      "Attack": 81,
      "Defense": 97,
      "Sp_Attack": 81,
      "Sp_Defense": 107,
      "Speed": 43
    }
  },
  {
    "id": 347,
    "name": "アノプス",
    "type": [
      "いわ",
      "むし"
    ],
    "base": {
      "HP": 45,
      "Attack": 95,
      "Defense": 50,
      "Sp_Attack": 40,
      "Sp_Defense": 50,
      "Speed": 75
    }
  },
  {
    "id": 348,
    "name": "アーマルド",
    "type": [
      "いわ",
      "むし"
    ],
    "base": {
      "HP": 75,
      "Attack": 125,
      "Defense": 100,
      "Sp_Attack": 70,
      "Sp_Defense": 80,
      "Speed": 45
    }
  },
  {
    "id": 349,
    "name": "ヒンバス",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 20,
      "Attack": 15,
      "Defense": 20,
      "Sp_Attack": 10,
      "Sp_Defense": 55,
      "Speed": 80
    }
  },
  {
    "id": 350,
    "name": "ミロカロス",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 95,
      "Attack": 60,
      "Defense": 79,
      "Sp_Attack": 100,
      "Sp_Defense": 125,
      "Speed": 81
    }
  },
  {
    "id": 351,
    "name": "ポワルン",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 70,
      "Attack": 70,
      "Defense": 70,
      "Sp_Attack": 70,
      "Sp_Defense": 70,
      "Speed": 70
    }
  },
  {
    "id": 352,
    "name": "カクレオン",
    "type": [
      "ノーマル"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 70,
      "Sp_Attack": 60,
      "Sp_Defense": 120,
      "Speed": 40
    }
  },
  {
    "id": 353,
    "name": "カゲボウズ",
    "type": [
      "ゴースト"
    ],
    "base": {
      "HP": 44,
      "Attack": 75,
      "Defense": 35,
      "Sp_Attack": 63,
      "Sp_Defense": 33,
      "Speed": 45
    }
  },
  {
    "id": 354,
    "name": "ジュペッタ",
    "type": [
      "ゴースト"
    ],
    "base": {
      "HP": 64,
      "Attack": 115,
      "Defense": 65,
      "Sp_Attack": 83,
      "Sp_Defense": 63,
      "Speed": 65
    }
  },
  {
    "id": 355,
    "name": "ヨマワル",
    "type": [
      "ゴースト"
    ],
    "base": {
      "HP": 20,
      "Attack": 40,
      "Defense": 90,
      "Sp_Attack": 30,
      "Sp_Defense": 90,
      "Speed": 25
    }
  },
  {
    "id": 356,
    "name": "サマヨール",
    "type": [
      "ゴースト"
    ],
    "base": {
      "HP": 40,
      "Attack": 70,
      "Defense": 130,
      "Sp_Attack": 60,
      "Sp_Defense": 130,
      "Speed": 25
    }
  },
  {
    "id": 357,
    "name": "トロピウス",
    "type": [
      "くさ",
      "ひこう"
    ],
    "base": {
      "HP": 99,
      "Attack": 68,
      "Defense": 83,
      "Sp_Attack": 72,
      "Sp_Defense": 87,
      "Speed": 51
    }
  },
  {
    "id": 358,
    "name": "チリーン",
    "type": [
      "エスパー"
    ],
    "base": {
      "HP": 75,
      "Attack": 50,
      "Defense": 80,
      "Sp_Attack": 95,
      "Sp_Defense": 90,
      "Speed": 65
    }
  },
  {
    "id": 359,
    "name": "アブソル",
    "type": [
      "あく"
    ],
    "base": {
      "HP": 65,
      "Attack": 130,
      "Defense": 60,
      "Sp_Attack": 75,
      "Sp_Defense": 60,
      "Speed": 75
    }
  },
  {
    "id": 360,
    "name": "ソーナノ",
    "type": [
      "エスパー"
    ],
    "base": {
      "HP": 95,
      "Attack": 23,
      "Defense": 48,
      "Sp_Attack": 23,
      "Sp_Defense": 48,
      "Speed": 23
    }
  },
  {
    "id": 361,
    "name": "ユキワラシ",
    "type": [
      "こおり"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 50,
      "Sp_Attack": 50,
      "Sp_Defense": 50,
      "Speed": 50
    }
  },
  {
    "id": 362,
    "name": "オニゴーリ",
    "type": [
      "こおり"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 80,
      "Sp_Attack": 80,
      "Sp_Defense": 80,
      "Speed": 80
    }
  },
  {
    "id": 363,
    "name": "タマザラシ",
    "type": [
      "こおり",
      "みず"
    ],
    "base": {
      "HP": 70,
      "Attack": 40,
      "Defense": 50,
      "Sp_Attack": 55,
      "Sp_Defense": 50,
      "Speed": 25
    }
  },
  {
    "id": 364,
    "name": "トドグラー",
    "type": [
      "こおり",
      "みず"
    ],
    "base": {
      "HP": 90,
      "Attack": 60,
      "Defense": 70,
      "Sp_Attack": 75,
      "Sp_Defense": 70,
      "Speed": 45
    }
  },
  {
    "id": 365,
    "name": "トドゼルガ",
    "type": [
      "こおり",
      "みず"
    ],
    "base": {
      "HP": 110,
      "Attack": 80,
      "Defense": 90,
      "Sp_Attack": 95,
      "Sp_Defense": 90,
      "Speed": 65
    }
  },
  {
    "id": 366,
    "name": "パールル",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 35,
      "Attack": 64,
      "Defense": 85,
      "Sp_Attack": 74,
      "Sp_Defense": 55,
      "Speed": 32
    }
  },
  {
    "id": 367,
    "name": "ハンテール",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 55,
      "Attack": 104,
      "Defense": 105,
      "Sp_Attack": 94,
      "Sp_Defense": 75,
      "Speed": 52
    }
  },
  {
    "id": 368,
    "name": "サクラビス",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 55,
      "Attack": 84,
      "Defense": 105,
      "Sp_Attack": 114,
      "Sp_Defense": 75,
      "Speed": 52
    }
  },
  {
    "id": 369,
    "name": "ジーランス",
    "type": [
      "みず",
      "いわ"
    ],
    "base": {
      "HP": 100,
      "Attack": 90,
      "Defense": 130,
      "Sp_Attack": 45,
      "Sp_Defense": 65,
      "Speed": 55
    }
  },
  {
    "id": 370,
    "name": "ラブカス",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 43,
      "Attack": 30,
      "Defense": 55,
      "Sp_Attack": 40,
      "Sp_Defense": 65,
      "Speed": 97
    }
  },
  {
    "id": 371,
    "name": "タツベイ",
    "type": [
      "ドラゴン"
    ],
    "base": {
      "HP": 45,
      "Attack": 75,
      "Defense": 60,
      "Sp_Attack": 40,
      "Sp_Defense": 30,
      "Speed": 50
    }
  },
  {
    "id": 372,
    "name": "コモルー",
    "type": [
      "ドラゴン"
    ],
    "base": {
      "HP": 65,
      "Attack": 95,
      "Defense": 100,
      "Sp_Attack": 60,
      "Sp_Defense": 50,
      "Speed": 50
    }
  },
  {
    "id": 373,
    "name": "ボーマンダ",
    "type": [
      "ドラゴン",
      "ひこう"
    ],
    "base": {
      "HP": 95,
      "Attack": 135,
      "Defense": 80,
      "Sp_Attack": 110,
      "Sp_Defense": 80,
      "Speed": 100
    }
  },
  {
    "id": 374,
    "name": "ダンバル",
    "type": [
      "はがね",
      "エスパー"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 80,
      "Sp_Attack": 35,
      "Sp_Defense": 60,
      "Speed": 30
    }
  },
  {
    "id": 375,
    "name": "メタング",
    "type": [
      "はがね",
      "エスパー"
    ],
    "base": {
      "HP": 60,
      "Attack": 75,
      "Defense": 100,
      "Sp_Attack": 55,
      "Sp_Defense": 80,
      "Speed": 50
    }
  },
  {
    "id": 376,
    "name": "メタグロス",
    "type": [
      "はがね",
      "エスパー"
    ],
    "base": {
      "HP": 80,
      "Attack": 135,
      "Defense": 130,
      "Sp_Attack": 95,
      "Sp_Defense": 90,
      "Speed": 70
    }
  },
  {
    "id": 377,
    "name": "レジロック",
    "type": [
      "いわ"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 200,
      "Sp_Attack": 50,
      "Sp_Defense": 100,
      "Speed": 50
    }
  },
  {
    "id": 378,
    "name": "レジアイス",
    "type": [
      "こおり"
    ],
    "base": {
      "HP": 80,
      "Attack": 50,
      "Defense": 100,
      "Sp_Attack": 100,
      "Sp_Defense": 200,
      "Speed": 50
    }
  },
  {
    "id": 379,
    "name": "レジスチル",
    "type": [
      "はがね"
    ],
    "base": {
      "HP": 80,
      "Attack": 75,
      "Defense": 150,
      "Sp_Attack": 75,
      "Sp_Defense": 150,
      "Speed": 50
    }
  },
  {
    "id": 380,
    "name": "ラティアス",
    "type": [
      "ドラゴン",
      "エスパー"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 90,
      "Sp_Attack": 110,
      "Sp_Defense": 130,
      "Speed": 110
    }
  },
  {
    "id": 381,
    "name": "ラティオス",
    "type": [
      "ドラゴン",
      "エスパー"
    ],
    "base": {
      "HP": 80,
      "Attack": 90,
      "Defense": 80,
      "Sp_Attack": 130,
      "Sp_Defense": 110,
      "Speed": 110
    }
  },
  {
    "id": 382,
    "name": "カイオーガ",
    "type": [
      "みず"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 90,
      "Sp_Attack": 150,
      "Sp_Defense": 140,
      "Speed": 90
    }
  },
  {
    "id": 383,
    "name": "グラードン",
    "type": [
      "じめん"
    ],
    "base": {
      "HP": 100,
      "Attack": 150,
      "Defense": 140,
      "Sp_Attack": 100,
      "Sp_Defense": 90,
      "Speed": 90
    }
  },
  {
    "id": 384,
    "name": "レックウザ",
    "type": [
      "ドラゴン",
      "ひこう"
    ],
    "base": {
      "HP": 105,
      "Attack": 150,
      "Defense": 90,
      "Sp_Attack": 150,
      "Sp_Defense": 90,
      "Speed": 95
    }
  },
  {
    "id": 385,
    "name": "ジラーチ",
    "type": [
      "はがね",
      "エスパー"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp_Attack": 100,
      "Sp_Defense": 100,
      "Speed": 100
    }
  },
  {
    "id": 386,
    "name": "デオキシス",
    "type": [
      "エスパー"
    ],
    "base": {
      "HP": 50,
      "Attack": 150,
      "Defense": 50,
      "Sp_Attack": 150,
      "Sp_Defense": 50,
      "Speed": 150
    }
  }
]
