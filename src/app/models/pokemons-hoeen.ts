// Python等では、モジュールはデフォルトで公開されているため、別のファイルからimportするだけで読み込めた。しかし、TypeScript(JavaScript)は逆で、デフォルトで非公開になっている。そのため、ほかのファイルからこのファイルを参照したいなら、このファイルでexportしておかなければならない。
export const POKEMONS_HOEEN = [
  {
    "id": 252,
    "name": "キモリ",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      "Speed": 70
    }
  },
  {
    "id": 253,
    "name": "ジュプトル",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 50,
      "Attack": 65,
      "Defense": 45,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      "Speed": 95
    }
  },
  {
    "id": 254,
    "name": "ジュカイン",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 65,
      "Sp. Attack": 105,
      "Sp. Defense": 85,
      "Speed": 120
    }
  },
  {
    "id": 255,
    "name": "アチャモ",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 45,
      "Attack": 60,
      "Defense": 40,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      "Speed": 45
    }
  },
  {
    "id": 256,
    "name": "ワカシャモ",
    "type": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 60,
      "Sp. Attack": 85,
      "Sp. Defense": 60,
      "Speed": 55
    }
  },
  {
    "id": 257,
    "name": "バシャーモ",
    "type": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "HP": 80,
      "Attack": 120,
      "Defense": 70,
      "Sp. Attack": 110,
      "Sp. Defense": 70,
      "Speed": 80
    }
  },
  {
    "id": 258,
    "name": "ミズゴロウ",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 70,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 40
    }
  },
  {
    "id": 259,
    "name": "ヌマクロー",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 50
    }
  },
  {
    "id": 260,
    "name": "ラグラージ",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 100,
      "Attack": 110,
      "Defense": 90,
      "Sp. Attack": 85,
      "Sp. Defense": 90,
      "Speed": 60
    }
  },
  {
    "id": 261,
    "name": "ポチエナ",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 35,
      "Attack": 55,
      "Defense": 35,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 35
    }
  },
  {
    "id": 262,
    "name": "グラエナ",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 90,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 70
    }
  },
  {
    "id": 263,
    "name": "ジグザグマ",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 38,
      "Attack": 30,
      "Defense": 41,
      "Sp. Attack": 30,
      "Sp. Defense": 41,
      "Speed": 60
    }
  },
  {
    "id": 264,
    "name": "マッスグマ",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 78,
      "Attack": 70,
      "Defense": 61,
      "Sp. Attack": 50,
      "Sp. Defense": 61,
      "Speed": 100
    }
  },
  {
    "id": 265,
    "name": "ケムッソ",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      "Speed": 20
    }
  },
  {
    "id": 266,
    "name": "カラサリス",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 35,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 15
    }
  },
  {
    "id": 267,
    "name": "アゲハント",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 70,
      "Defense": 50,
      "Sp. Attack": 100,
      "Sp. Defense": 50,
      "Speed": 65
    }
  },
  {
    "id": 268,
    "name": "マユルド",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 35,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 15
    }
  },
  {
    "id": 269,
    "name": "ドクケイル",
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 70,
      "Sp. Attack": 50,
      "Sp. Defense": 90,
      "Speed": 65
    }
  },
  {
    "id": 270,
    "name": "ハスボー",
    "type": [
      "Water",
      "Grass"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 30,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 30
    }
  },
  {
    "id": 271,
    "name": "ハスブレロ",
    "type": [
      "Water",
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 50,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 50
    }
  },
  {
    "id": 272,
    "name": "ルンパッパ",
    "type": [
      "Water",
      "Grass"
    ],
    "base": {
      "HP": 80,
      "Attack": 70,
      "Defense": 70,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      "Speed": 70
    }
  },
  {
    "id": 273,
    "name": "タネボー",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 50,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 30
    }
  },
  {
    "id": 274,
    "name": "コノハナ",
    "type": [
      "Grass",
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 70,
      "Defense": 40,
      "Sp. Attack": 60,
      "Sp. Defense": 40,
      "Speed": 60
    }
  },
  {
    "id": 275,
    "name": "ダーテング",
    "type": [
      "Grass",
      "Dark"
    ],
    "base": {
      "HP": 90,
      "Attack": 100,
      "Defense": 60,
      "Sp. Attack": 90,
      "Sp. Defense": 60,
      "Speed": 80
    }
  },
  {
    "id": 276,
    "name": "スバメ",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 85
    }
  },
  {
    "id": 277,
    "name": "オオスバメ",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 85,
      "Defense": 60,
      "Sp. Attack": 75,
      "Sp. Defense": 50,
      "Speed": 125
    }
  },
  {
    "id": 278,
    "name": "キャモメ",
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 30,
      "Sp. Attack": 55,
      "Sp. Defense": 30,
      "Speed": 85
    }
  },
  {
    "id": 279,
    "name": "ペリッパー",
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 100,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      "Speed": 65
    }
  },
  {
    "id": 280,
    "name": "ラルトス",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 28,
      "Attack": 25,
      "Defense": 25,
      "Sp. Attack": 45,
      "Sp. Defense": 35,
      "Speed": 40
    }
  },
  {
    "id": 281,
    "name": "キルリア",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 38,
      "Attack": 35,
      "Defense": 35,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      "Speed": 50
    }
  },
  {
    "id": 282,
    "name": "サーナイト",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 68,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 125,
      "Sp. Defense": 115,
      "Speed": 80
    }
  },
  {
    "id": 283,
    "name": "アメタマ",
    "type": [
      "Bug",
      "Water"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 32,
      "Sp. Attack": 50,
      "Sp. Defense": 52,
      "Speed": 65
    }
  },
  {
    "id": 284,
    "name": "アメモース",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 70,
      "Attack": 60,
      "Defense": 62,
      "Sp. Attack": 100,
      "Sp. Defense": 82,
      "Speed": 80
    }
  },
  {
    "id": 285,
    "name": "キノココ",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 60,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      "Speed": 35
    }
  },
  {
    "id": 286,
    "name": "キノガッサ",
    "type": [
      "Grass",
      "Fighting"
    ],
    "base": {
      "HP": 60,
      "Attack": 130,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 70
    }
  },
  {
    "id": 287,
    "name": "ナマケロ",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 60,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 30
    }
  },
  {
    "id": 288,
    "name": "ヤルキモノ",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 80,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 90
    }
  },
  {
    "id": 289,
    "name": "ケッキング",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 150,
      "Attack": 160,
      "Defense": 100,
      "Sp. Attack": 95,
      "Sp. Defense": 65,
      "Speed": 100
    }
  },
  {
    "id": 290,
    "name": "ツチニン",
    "type": [
      "Bug",
      "Ground"
    ],
    "base": {
      "HP": 31,
      "Attack": 45,
      "Defense": 90,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 40
    }
  },
  {
    "id": 291,
    "name": "テッカニン",
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 61,
      "Attack": 90,
      "Defense": 45,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 160
    }
  },
  {
    "id": 292,
    "name": "ヌケニン",
    "type": [
      "Bug",
      "Ghost"
    ],
    "base": {
      "HP": 1,
      "Attack": 90,
      "Defense": 45,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 40
    }
  },
  {
    "id": 293,
    "name": "ゴニョニョ",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 64,
      "Attack": 51,
      "Defense": 23,
      "Sp. Attack": 51,
      "Sp. Defense": 23,
      "Speed": 28
    }
  },
  {
    "id": 294,
    "name": "ドゴーム",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 84,
      "Attack": 71,
      "Defense": 43,
      "Sp. Attack": 71,
      "Sp. Defense": 43,
      "Speed": 48
    }
  },
  {
    "id": 295,
    "name": "バクオング",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 104,
      "Attack": 91,
      "Defense": 63,
      "Sp. Attack": 91,
      "Sp. Defense": 73,
      "Speed": 68
    }
  },
  {
    "id": 296,
    "name": "マクノシタ",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 72,
      "Attack": 60,
      "Defense": 30,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      "Speed": 25
    }
  },
  {
    "id": 297,
    "name": "ハリテヤマ",
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 144,
      "Attack": 120,
      "Defense": 60,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      "Speed": 50
    }
  },
  {
    "id": 298,
    "name": "ルリリ",
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 40,
      "Sp. Attack": 20,
      "Sp. Defense": 40,
      "Speed": 20
    }
  },
  {
    "id": 299,
    "name": "ノズパス",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 30,
      "Attack": 45,
      "Defense": 135,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      "Speed": 30
    }
  },
  {
    "id": 300,
    "name": "エネコ",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 50,
      "Attack": 45,
      "Defense": 45,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 50
    }
  },
  {
    "id": 301,
    "name": "エネコロロ",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 70,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 90
    }
  },
  {
    "id": 302,
    "name": "ヤミラミ",
    "type": [
      "Dark",
      "Ghost"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 75,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 50
    }
  },
  {
    "id": 303,
    "name": "クチート",
    "type": [
      "Steel",
      "Fairy"
    ],
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 85,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 50
    }
  },
  {
    "id": 304,
    "name": "ココドラ",
    "type": [
      "Steel",
      "Rock"
    ],
    "base": {
      "HP": 50,
      "Attack": 70,
      "Defense": 100,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 30
    }
  },
  {
    "id": 305,
    "name": "コドラ",
    "type": [
      "Steel",
      "Rock"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 140,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 40
    }
  },
  {
    "id": 306,
    "name": "ボスゴドラ",
    "type": [
      "Steel",
      "Rock"
    ],
    "base": {
      "HP": 70,
      "Attack": 110,
      "Defense": 180,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 50
    }
  },
  {
    "id": 307,
    "name": "アサナン",
    "type": [
      "Fighting",
      "Psychic"
    ],
    "base": {
      "HP": 30,
      "Attack": 40,
      "Defense": 55,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      "Speed": 60
    }
  },
  {
    "id": 308,
    "name": "チャーレム",
    "type": [
      "Fighting",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 80
    }
  },
  {
    "id": 309,
    "name": "ラクライ",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 65,
      "Sp. Defense": 40,
      "Speed": 65
    }
  },
  {
    "id": 310,
    "name": "ライボルト",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 70,
      "Attack": 75,
      "Defense": 60,
      "Sp. Attack": 105,
      "Sp. Defense": 60,
      "Speed": 105
    }
  },
  {
    "id": 311,
    "name": "プラスル",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 40,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 95
    }
  },
  {
    "id": 312,
    "name": "マイナン",
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 50,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      "Speed": 95
    }
  },
  {
    "id": 313,
    "name": "バルビート",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 65,
      "Attack": 73,
      "Defense": 75,
      "Sp. Attack": 47,
      "Sp. Defense": 85,
      "Speed": 85
    }
  },
  {
    "id": 314,
    "name": "イルミーゼ",
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 65,
      "Attack": 47,
      "Defense": 75,
      "Sp. Attack": 73,
      "Sp. Defense": 85,
      "Speed": 85
    }
  },
  {
    "id": 315,
    "name": "ロゼリア",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 50,
      "Attack": 60,
      "Defense": 45,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      "Speed": 65
    }
  },
  {
    "id": 316,
    "name": "ゴクリン",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 43,
      "Defense": 53,
      "Sp. Attack": 43,
      "Sp. Defense": 53,
      "Speed": 40
    }
  },
  {
    "id": 317,
    "name": "マルノーム",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 100,
      "Attack": 73,
      "Defense": 83,
      "Sp. Attack": 73,
      "Sp. Defense": 83,
      "Speed": 55
    }
  },
  {
    "id": 318,
    "name": "キバニア",
    "type": [
      "Water",
      "Dark"
    ],
    "base": {
      "HP": 45,
      "Attack": 90,
      "Defense": 20,
      "Sp. Attack": 65,
      "Sp. Defense": 20,
      "Speed": 65
    }
  },
  {
    "id": 319,
    "name": "サメハダー",
    "type": [
      "Water",
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 120,
      "Defense": 40,
      "Sp. Attack": 95,
      "Sp. Defense": 40,
      "Speed": 95
    }
  },
  {
    "id": 320,
    "name": "ホエルコ",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 130,
      "Attack": 70,
      "Defense": 35,
      "Sp. Attack": 70,
      "Sp. Defense": 35,
      "Speed": 60
    }
  },
  {
    "id": 321,
    "name": "ホエルオー",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 170,
      "Attack": 90,
      "Defense": 45,
      "Sp. Attack": 90,
      "Sp. Defense": 45,
      "Speed": 60
    }
  },
  {
    "id": 322,
    "name": "ドンメル",
    "type": [
      "Fire",
      "Ground"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 40,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      "Speed": 35
    }
  },
  {
    "id": 323,
    "name": "バクーダ",
    "type": [
      "Fire",
      "Ground"
    ],
    "base": {
      "HP": 70,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 105,
      "Sp. Defense": 75,
      "Speed": 40
    }
  },
  {
    "id": 324,
    "name": "コータス",
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 70,
      "Attack": 85,
      "Defense": 140,
      "Sp. Attack": 85,
      "Sp. Defense": 70,
      "Speed": 20
    }
  },
  {
    "id": 325,
    "name": "バネブー",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 25,
      "Defense": 35,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      "Speed": 60
    }
  },
  {
    "id": 326,
    "name": "ブーピッグ",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 80,
      "Attack": 45,
      "Defense": 65,
      "Sp. Attack": 90,
      "Sp. Defense": 110,
      "Speed": 80
    }
  },
  {
    "id": 327,
    "name": "パッチール",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 60,
      "Attack": 60,
      "Defense": 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 60
    }
  },
  {
    "id": 328,
    "name": "ナックラー",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 45,
      "Attack": 100,
      "Defense": 45,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 10
    }
  },
  {
    "id": 329,
    "name": "ビブラーバ",
    "type": [
      "Ground",
      "Dragon"
    ],
    "base": {
      "HP": 50,
      "Attack": 70,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 70
    }
  },
  {
    "id": 330,
    "name": "フライゴン",
    "type": [
      "Ground",
      "Dragon"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 100
    }
  },
  {
    "id": 331,
    "name": "サボネア",
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 40,
      "Sp. Attack": 85,
      "Sp. Defense": 40,
      "Speed": 35
    }
  },
  {
    "id": 332,
    "name": "ノクタス",
    "type": [
      "Grass",
      "Dark"
    ],
    "base": {
      "HP": 70,
      "Attack": 115,
      "Defense": 60,
      "Sp. Attack": 115,
      "Sp. Defense": 60,
      "Speed": 55
    }
  },
  {
    "id": 333,
    "name": "チルット",
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 45,
      "Attack": 40,
      "Defense": 60,
      "Sp. Attack": 40,
      "Sp. Defense": 75,
      "Speed": 50
    }
  },
  {
    "id": 334,
    "name": "チルタリス",
    "type": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 70,
      "Defense": 90,
      "Sp. Attack": 70,
      "Sp. Defense": 105,
      "Speed": 80
    }
  },
  {
    "id": 335,
    "name": "ザングース",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 73,
      "Attack": 115,
      "Defense": 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 90
    }
  },
  {
    "id": 336,
    "name": "ハブネーク",
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 73,
      "Attack": 100,
      "Defense": 60,
      "Sp. Attack": 100,
      "Sp. Defense": 60,
      "Speed": 65
    }
  },
  {
    "id": 337,
    "name": "ルナトーン",
    "type": [
      "Rock",
      "Psychic"
    ],
    "base": {
      "HP": 90,
      "Attack": 55,
      "Defense": 65,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      "Speed": 70
    }
  },
  {
    "id": 338,
    "name": "ソルロック",
    "type": [
      "Rock",
      "Psychic"
    ],
    "base": {
      "HP": 90,
      "Attack": 95,
      "Defense": 85,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 70
    }
  },
  {
    "id": 339,
    "name": "ドジョッチ",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 48,
      "Defense": 43,
      "Sp. Attack": 46,
      "Sp. Defense": 41,
      "Speed": 60
    }
  },
  {
    "id": 340,
    "name": "ナマズン",
    "type": [
      "Water",
      "Ground"
    ],
    "base": {
      "HP": 110,
      "Attack": 78,
      "Defense": 73,
      "Sp. Attack": 76,
      "Sp. Defense": 71,
      "Speed": 60
    }
  },
  {
    "id": 341,
    "name": "ヘイガニ",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 43,
      "Attack": 80,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 35,
      "Speed": 35
    }
  },
  {
    "id": 342,
    "name": "シザリガー",
    "type": [
      "Water",
      "Dark"
    ],
    "base": {
      "HP": 63,
      "Attack": 120,
      "Defense": 85,
      "Sp. Attack": 90,
      "Sp. Defense": 55,
      "Speed": 55
    }
  },
  {
    "id": 343,
    "name": "ヤジロン",
    "type": [
      "Ground",
      "Psychic"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 55,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      "Speed": 55
    }
  },
  {
    "id": 344,
    "name": "ネンドール",
    "type": [
      "Ground",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 70,
      "Defense": 105,
      "Sp. Attack": 70,
      "Sp. Defense": 120,
      "Speed": 75
    }
  },
  {
    "id": 345,
    "name": "リリーラ",
    "type": [
      "Rock",
      "Grass"
    ],
    "base": {
      "HP": 66,
      "Attack": 41,
      "Defense": 77,
      "Sp. Attack": 61,
      "Sp. Defense": 87,
      "Speed": 23
    }
  },
  {
    "id": 346,
    "name": "ユレイドル",
    "type": [
      "Rock",
      "Grass"
    ],
    "base": {
      "HP": 86,
      "Attack": 81,
      "Defense": 97,
      "Sp. Attack": 81,
      "Sp. Defense": 107,
      "Speed": 43
    }
  },
  {
    "id": 347,
    "name": "アノプス",
    "type": [
      "Rock",
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 95,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 75
    }
  },
  {
    "id": 348,
    "name": "アーマルド",
    "type": [
      "Rock",
      "Bug"
    ],
    "base": {
      "HP": 75,
      "Attack": 125,
      "Defense": 100,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      "Speed": 45
    }
  },
  {
    "id": 349,
    "name": "ヒンバス",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 20,
      "Attack": 15,
      "Defense": 20,
      "Sp. Attack": 10,
      "Sp. Defense": 55,
      "Speed": 80
    }
  },
  {
    "id": 350,
    "name": "ミロカロス",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 95,
      "Attack": 60,
      "Defense": 79,
      "Sp. Attack": 100,
      "Sp. Defense": 125,
      "Speed": 81
    }
  },
  {
    "id": 351,
    "name": "ポワルン",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 70,
      "Attack": 70,
      "Defense": 70,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 70
    }
  },
  {
    "id": 352,
    "name": "カクレオン",
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 120,
      "Speed": 40
    }
  },
  {
    "id": 353,
    "name": "カゲボウズ",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 44,
      "Attack": 75,
      "Defense": 35,
      "Sp. Attack": 63,
      "Sp. Defense": 33,
      "Speed": 45
    }
  },
  {
    "id": 354,
    "name": "ジュペッタ",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 64,
      "Attack": 115,
      "Defense": 65,
      "Sp. Attack": 83,
      "Sp. Defense": 63,
      "Speed": 65
    }
  },
  {
    "id": 355,
    "name": "ヨマワル",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 20,
      "Attack": 40,
      "Defense": 90,
      "Sp. Attack": 30,
      "Sp. Defense": 90,
      "Speed": 25
    }
  },
  {
    "id": 356,
    "name": "サマヨール",
    "type": [
      "Ghost"
    ],
    "base": {
      "HP": 40,
      "Attack": 70,
      "Defense": 130,
      "Sp. Attack": 60,
      "Sp. Defense": 130,
      "Speed": 25
    }
  },
  {
    "id": 357,
    "name": "トロピウス",
    "type": [
      "Grass",
      "Flying"
    ],
    "base": {
      "HP": 99,
      "Attack": 68,
      "Defense": 83,
      "Sp. Attack": 72,
      "Sp. Defense": 87,
      "Speed": 51
    }
  },
  {
    "id": 358,
    "name": "チリーン",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 75,
      "Attack": 50,
      "Defense": 80,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      "Speed": 65
    }
  },
  {
    "id": 359,
    "name": "アブソル",
    "type": [
      "Dark"
    ],
    "base": {
      "HP": 65,
      "Attack": 130,
      "Defense": 60,
      "Sp. Attack": 75,
      "Sp. Defense": 60,
      "Speed": 75
    }
  },
  {
    "id": 360,
    "name": "ソーナノ",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 95,
      "Attack": 23,
      "Defense": 48,
      "Sp. Attack": 23,
      "Sp. Defense": 48,
      "Speed": 23
    }
  },
  {
    "id": 361,
    "name": "ユキワラシ",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 50
    }
  },
  {
    "id": 362,
    "name": "オニゴーリ",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 80
    }
  },
  {
    "id": 363,
    "name": "タマザラシ",
    "type": [
      "Ice",
      "Water"
    ],
    "base": {
      "HP": 70,
      "Attack": 40,
      "Defense": 50,
      "Sp. Attack": 55,
      "Sp. Defense": 50,
      "Speed": 25
    }
  },
  {
    "id": 364,
    "name": "トドグラー",
    "type": [
      "Ice",
      "Water"
    ],
    "base": {
      "HP": 90,
      "Attack": 60,
      "Defense": 70,
      "Sp. Attack": 75,
      "Sp. Defense": 70,
      "Speed": 45
    }
  },
  {
    "id": 365,
    "name": "トドゼルガ",
    "type": [
      "Ice",
      "Water"
    ],
    "base": {
      "HP": 110,
      "Attack": 80,
      "Defense": 90,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      "Speed": 65
    }
  },
  {
    "id": 366,
    "name": "パールル",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 35,
      "Attack": 64,
      "Defense": 85,
      "Sp. Attack": 74,
      "Sp. Defense": 55,
      "Speed": 32
    }
  },
  {
    "id": 367,
    "name": "ハンテール",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 104,
      "Defense": 105,
      "Sp. Attack": 94,
      "Sp. Defense": 75,
      "Speed": 52
    }
  },
  {
    "id": 368,
    "name": "サクラビス",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 84,
      "Defense": 105,
      "Sp. Attack": 114,
      "Sp. Defense": 75,
      "Speed": 52
    }
  },
  {
    "id": 369,
    "name": "ジーランス",
    "type": [
      "Water",
      "Rock"
    ],
    "base": {
      "HP": 100,
      "Attack": 90,
      "Defense": 130,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      "Speed": 55
    }
  },
  {
    "id": 370,
    "name": "ラブカス",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 43,
      "Attack": 30,
      "Defense": 55,
      "Sp. Attack": 40,
      "Sp. Defense": 65,
      "Speed": 97
    }
  },
  {
    "id": 371,
    "name": "タツベイ",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 45,
      "Attack": 75,
      "Defense": 60,
      "Sp. Attack": 40,
      "Sp. Defense": 30,
      "Speed": 50
    }
  },
  {
    "id": 372,
    "name": "コモルー",
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 65,
      "Attack": 95,
      "Defense": 100,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 50
    }
  },
  {
    "id": 373,
    "name": "ボーマンダ",
    "type": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "HP": 95,
      "Attack": 135,
      "Defense": 80,
      "Sp. Attack": 110,
      "Sp. Defense": 80,
      "Speed": 100
    }
  },
  {
    "id": 374,
    "name": "ダンバル",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 40,
      "Attack": 55,
      "Defense": 80,
      "Sp. Attack": 35,
      "Sp. Defense": 60,
      "Speed": 30
    }
  },
  {
    "id": 375,
    "name": "メタング",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 75,
      "Defense": 100,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      "Speed": 50
    }
  },
  {
    "id": 376,
    "name": "メタグロス",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 80,
      "Attack": 135,
      "Defense": 130,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      "Speed": 70
    }
  },
  {
    "id": 377,
    "name": "レジロック",
    "type": [
      "Rock"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 200,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      "Speed": 50
    }
  },
  {
    "id": 378,
    "name": "レジアイス",
    "type": [
      "Ice"
    ],
    "base": {
      "HP": 80,
      "Attack": 50,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 200,
      "Speed": 50
    }
  },
  {
    "id": 379,
    "name": "レジスチル",
    "type": [
      "Steel"
    ],
    "base": {
      "HP": 80,
      "Attack": 75,
      "Defense": 150,
      "Sp. Attack": 75,
      "Sp. Defense": 150,
      "Speed": 50
    }
  },
  {
    "id": 380,
    "name": "ラティアス",
    "type": [
      "Dragon",
      "Psychic"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 90,
      "Sp. Attack": 110,
      "Sp. Defense": 130,
      "Speed": 110
    }
  },
  {
    "id": 381,
    "name": "ラティオス",
    "type": [
      "Dragon",
      "Psychic"
    ],
    "base": {
      "HP": 80,
      "Attack": 90,
      "Defense": 80,
      "Sp. Attack": 130,
      "Sp. Defense": 110,
      "Speed": 110
    }
  },
  {
    "id": 382,
    "name": "カイオーガ",
    "type": [
      "Water"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 90,
      "Sp. Attack": 150,
      "Sp. Defense": 140,
      "Speed": 90
    }
  },
  {
    "id": 383,
    "name": "グラードン",
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 100,
      "Attack": 150,
      "Defense": 140,
      "Sp. Attack": 100,
      "Sp. Defense": 90,
      "Speed": 90
    }
  },
  {
    "id": 384,
    "name": "レックウザ",
    "type": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "HP": 105,
      "Attack": 150,
      "Defense": 90,
      "Sp. Attack": 150,
      "Sp. Defense": 90,
      "Speed": 95
    }
  },
  {
    "id": 385,
    "name": "ジラーチ",
    "type": [
      "Steel",
      "Psychic"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 100
    }
  },
  {
    "id": 386,
    "name": "デオキシス",
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 50,
      "Attack": 150,
      "Defense": 50,
      "Sp. Attack": 150,
      "Sp. Defense": 50,
      "Speed": 150
    }
  }
]
