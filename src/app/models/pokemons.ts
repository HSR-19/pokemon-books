// Python等では、モジュールはデフォルトで公開されているため、別のファイルからimportするだけで読み込めた。しかし、TypeScript(JavaScript)は逆で、デフォルトで非公開になっている。そのため、ほかのファイルからこのファイルを参照したいなら、このファイルでexportしておかなければならない。
export const POKEMONS = [
    {
      "id": 1,
      "name": "フシギダネ",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "Sp_Attack": 65,
        "Sp_Defense": 65,
        "Speed": 45
      }
    },
    {
      "id": 2,
      "name": "フシギソウ",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 60,
        "Attack": 62,
        "Defense": 63,
        "Sp_Attack": 80,
        "Sp_Defense": 80,
        "Speed": 60
      }
    },
    {
      "id": 3,
      "name": "フシギバナ",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 80,
        "Attack": 82,
        "Defense": 83,
        "Sp_Attack": 100,
        "Sp_Defense": 100,
        "Speed": 80
      }
    },
    {
      "id": 4,
      "name": "ヒトカゲ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 39,
        "Attack": 52,
        "Defense": 43,
        "Sp_Attack": 60,
        "Sp_Defense": 50,
        "Speed": 65
      }
    },
    {
      "id": 5,
      "name": "リザード",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 58,
        "Attack": 64,
        "Defense": 58,
        "Sp_Attack": 80,
        "Sp_Defense": 65,
        "Speed": 80
      }
    },
    {
      "id": 6,
      "name": "リザードン",
      "type": [
        "ほのお",
        "ひこう"
      ],
      "base": {
        "HP": 78,
        "Attack": 84,
        "Defense": 78,
        "Sp_Attack": 109,
        "Sp_Defense": 85,
        "Speed": 100
      }
    },
    {
      "id": 7,
      "name": "ゼニガメ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 44,
        "Attack": 48,
        "Defense": 65,
        "Sp_Attack": 50,
        "Sp_Defense": 64,
        "Speed": 43
      }
    },
    {
      "id": 8,
      "name": "カメール",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 59,
        "Attack": 63,
        "Defense": 80,
        "Sp_Attack": 65,
        "Sp_Defense": 80,
        "Speed": 58
      }
    },
    {
      "id": 9,
      "name": "カメックス",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 79,
        "Attack": 83,
        "Defense": 100,
        "Sp_Attack": 85,
        "Sp_Defense": 105,
        "Speed": 78
      }
    },
    {
      "id": 10,
      "name": "キャタピー",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 35,
        "Sp_Attack": 20,
        "Sp_Defense": 20,
        "Speed": 45
      }
    },
    {
      "id": 11,
      "name": "トランセル",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 50,
        "Attack": 20,
        "Defense": 55,
        "Sp_Attack": 25,
        "Sp_Defense": 25,
        "Speed": 30
      }
    },
    {
      "id": 12,
      "name": "バタフリー",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 50,
        "Sp_Attack": 90,
        "Sp_Defense": 80,
        "Speed": 70
      }
    },
    {
      "id": 13,
      "name": "ビードル",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 40,
        "Attack": 35,
        "Defense": 30,
        "Sp_Attack": 20,
        "Sp_Defense": 20,
        "Speed": 50
      }
    },
    {
      "id": 14,
      "name": "コクーン",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 45,
        "Attack": 25,
        "Defense": 50,
        "Sp_Attack": 25,
        "Sp_Defense": 25,
        "Speed": 35
      }
    },
    {
      "id": 15,
      "name": "スピアー",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 40,
        "Sp_Attack": 45,
        "Sp_Defense": 80,
        "Speed": 75
      }
    },
    {
      "id": 16,
      "name": "ポッポ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 40,
        "Sp_Attack": 35,
        "Sp_Defense": 35,
        "Speed": 56
      }
    },
    {
      "id": 17,
      "name": "ピジョン",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 63,
        "Attack": 60,
        "Defense": 55,
        "Sp_Attack": 50,
        "Sp_Defense": 50,
        "Speed": 71
      }
    },
    {
      "id": 18,
      "name": "ピジョット",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 83,
        "Attack": 80,
        "Defense": 75,
        "Sp_Attack": 70,
        "Sp_Defense": 70,
        "Speed": 101
      }
    },
    {
      "id": 19,
      "name": "コラッタ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 30,
        "Attack": 56,
        "Defense": 35,
        "Sp_Attack": 25,
        "Sp_Defense": 35,
        "Speed": 72
      }
    },
    {
      "id": 20,
      "name": "ラッタ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 55,
        "Attack": 81,
        "Defense": 60,
        "Sp_Attack": 50,
        "Sp_Defense": 70,
        "Speed": 97
      }
    },
    {
      "id": 21,
      "name": "オニスズメ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 40,
        "Attack": 60,
        "Defense": 30,
        "Sp_Attack": 31,
        "Sp_Defense": 31,
        "Speed": 70
      }
    },
    {
      "id": 22,
      "name": "オニドリル",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 65,
        "Sp_Attack": 61,
        "Sp_Defense": 61,
        "Speed": 100
      }
    },
    {
      "id": 23,
      "name": "アーボ",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 35,
        "Attack": 60,
        "Defense": 44,
        "Sp_Attack": 40,
        "Sp_Defense": 54,
        "Speed": 55
      }
    },
    {
      "id": 24,
      "name": "アーボック",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 60,
        "Attack": 95,
        "Defense": 69,
        "Sp_Attack": 65,
        "Sp_Defense": 79,
        "Speed": 80
      }
    },
    {
      "id": 25,
      "name": "ピカチュウ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 35,
        "Attack": 55,
        "Defense": 40,
        "Sp_Attack": 50,
        "Sp_Defense": 50,
        "Speed": 90
      }
    },
    {
      "id": 26,
      "name": "ライチュウ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 60,
        "Attack": 90,
        "Defense": 55,
        "Sp_Attack": 90,
        "Sp_Defense": 80,
        "Speed": 110
      }
    },
    {
      "id": 27,
      "name": "サンド",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 85,
        "Sp_Attack": 20,
        "Sp_Defense": 30,
        "Speed": 40
      }
    },
    {
      "id": 28,
      "name": "サンドパン",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 75,
        "Attack": 100,
        "Defense": 110,
        "Sp_Attack": 45,
        "Sp_Defense": 55,
        "Speed": 65
      }
    },
    {
      "id": 29,
      "name": "ニドラン♀",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 55,
        "Attack": 47,
        "Defense": 52,
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 41
      }
    },
    {
      "id": 30,
      "name": "ニドリーナ",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 70,
        "Attack": 62,
        "Defense": 67,
        "Sp_Attack": 55,
        "Sp_Defense": 55,
        "Speed": 56
      }
    },
    {
      "id": 31,
      "name": "ニドクイン",
      "type": [
        "どく",
        "じめん"
      ],
      "base": {
        "HP": 90,
        "Attack": 92,
        "Defense": 87,
        "Sp_Attack": 75,
        "Sp_Defense": 85,
        "Speed": 76
      }
    },
    {
      "id": 32,
      "name": "ニドラン♂",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 46,
        "Attack": 57,
        "Defense": 40,
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 50
      }
    },
    {
      "id": 33,
      "name": "ニドリーノ",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 61,
        "Attack": 72,
        "Defense": 57,
        "Sp_Attack": 55,
        "Sp_Defense": 55,
        "Speed": 65
      }
    },
    {
      "id": 34,
      "name": "ニドキング",
      "type": [
        "どく",
        "じめん"
      ],
      "base": {
        "HP": 81,
        "Attack": 102,
        "Defense": 77,
        "Sp_Attack": 85,
        "Sp_Defense": 75,
        "Speed": 85
      }
    },
    {
      "id": 35,
      "name": "ピッピ",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 70,
        "Attack": 45,
        "Defense": 48,
        "Sp_Attack": 60,
        "Sp_Defense": 65,
        "Speed": 35
      }
    },
    {
      "id": 36,
      "name": "ピクシー",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 95,
        "Attack": 70,
        "Defense": 73,
        "Sp_Attack": 95,
        "Sp_Defense": 90,
        "Speed": 60
      }
    },
    {
      "id": 37,
      "name": "ロコン",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 38,
        "Attack": 41,
        "Defense": 40,
        "Sp_Attack": 50,
        "Sp_Defense": 65,
        "Speed": 65
      }
    },
    {
      "id": 38,
      "name": "キュウコン",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 73,
        "Attack": 76,
        "Defense": 75,
        "Sp_Attack": 81,
        "Sp_Defense": 100,
        "Speed": 100
      }
    },
    {
      "id": 39,
      "name": "プリン",
      "type": [
        "ノーマル",
        "フェアリー"
      ],
      "base": {
        "HP": 115,
        "Attack": 45,
        "Defense": 20,
        "Sp_Attack": 45,
        "Sp_Defense": 25,
        "Speed": 20
      }
    },
    {
      "id": 40,
      "name": "プクリン",
      "type": [
        "ノーマル",
        "フェアリー"
      ],
      "base": {
        "HP": 140,
        "Attack": 70,
        "Defense": 45,
        "Sp_Attack": 85,
        "Sp_Defense": 50,
        "Speed": 45
      }
    },
    {
      "id": 41,
      "name": "ズバット",
      "type": [
        "どく",
        "ひこう"
      ],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 35,
        "Sp_Attack": 30,
        "Sp_Defense": 40,
        "Speed": 55
      }
    },
    {
      "id": 42,
      "name": "ゴルバット",
      "type": [
        "どく",
        "ひこう"
      ],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 70,
        "Sp_Attack": 65,
        "Sp_Defense": 75,
        "Speed": 90
      }
    },
    {
      "id": 43,
      "name": "ナゾノクサ",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 45,
        "Attack": 50,
        "Defense": 55,
        "Sp_Attack": 75,
        "Sp_Defense": 65,
        "Speed": 30
      }
    },
    {
      "id": 44,
      "name": "クサイハナ",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 60,
        "Attack": 65,
        "Defense": 70,
        "Sp_Attack": 85,
        "Sp_Defense": 75,
        "Speed": 40
      }
    },
    {
      "id": 45,
      "name": "ラフレシア",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 85,
        "Sp_Attack": 110,
        "Sp_Defense": 90,
        "Speed": 50
      }
    },
    {
      "id": 46,
      "name": "パラス",
      "type": [
        "むし",
        "くさ"
      ],
      "base": {
        "HP": 35,
        "Attack": 70,
        "Defense": 55,
        "Sp_Attack": 45,
        "Sp_Defense": 55,
        "Speed": 25
      }
    },
    {
      "id": 47,
      "name": "パラセクト",
      "type": [
        "むし",
        "くさ"
      ],
      "base": {
        "HP": 60,
        "Attack": 95,
        "Defense": 80,
        "Sp_Attack": 60,
        "Sp_Defense": 80,
        "Speed": 30
      }
    },
    {
      "id": 48,
      "name": "コンパン",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 60,
        "Attack": 55,
        "Defense": 50,
        "Sp_Attack": 40,
        "Sp_Defense": 55,
        "Speed": 45
      }
    },
    {
      "id": 49,
      "name": "モルフォン",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 70,
        "Attack": 65,
        "Defense": 60,
        "Sp_Attack": 90,
        "Sp_Defense": 75,
        "Speed": 90
      }
    },
    {
      "id": 50,
      "name": "ディグダ",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 10,
        "Attack": 55,
        "Defense": 25,
        "Sp_Attack": 35,
        "Sp_Defense": 45,
        "Speed": 95
      }
    },
    {
      "id": 51,
      "name": "ダグトリオ",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 35,
        "Attack": 100,
        "Defense": 50,
        "Sp_Attack": 50,
        "Sp_Defense": 70,
        "Speed": 120
      }
    },
    {
      "id": 52,
      "name": "ニャース",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 35,
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 90
      }
    },
    {
      "id": 53,
      "name": "ペルシアン",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 65,
        "Attack": 70,
        "Defense": 60,
        "Sp_Attack": 65,
        "Sp_Defense": 65,
        "Speed": 115
      }
    },
    {
      "id": 54,
      "name": "コダック",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 50,
        "Attack": 52,
        "Defense": 48,
        "Sp_Attack": 65,
        "Sp_Defense": 50,
        "Speed": 55
      }
    },
    {
      "id": 55,
      "name": "ゴルダック",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 80,
        "Attack": 82,
        "Defense": 78,
        "Sp_Attack": 95,
        "Sp_Defense": 80,
        "Speed": 85
      }
    },
    {
      "id": 56,
      "name": "マンキー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 40,
        "Attack": 80,
        "Defense": 35,
        "Sp_Attack": 35,
        "Sp_Defense": 45,
        "Speed": 70
      }
    },
    {
      "id": 57,
      "name": "オコリザル",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 65,
        "Attack": 105,
        "Defense": 60,
        "Sp_Attack": 60,
        "Sp_Defense": 70,
        "Speed": 95
      }
    },
    {
      "id": 58,
      "name": "ガーディ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 55,
        "Attack": 70,
        "Defense": 45,
        "Sp_Attack": 70,
        "Sp_Defense": 50,
        "Speed": 60
      }
    },
    {
      "id": 59,
      "name": "ウインディ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 90,
        "Attack": 110,
        "Defense": 80,
        "Sp_Attack": 100,
        "Sp_Defense": 80,
        "Speed": 95
      }
    },
    {
      "id": 60,
      "name": "ニョロモ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 40,
        "Attack": 50,
        "Defense": 40,
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 90
      }
    },
    {
      "id": 61,
      "name": "ニョロゾ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 65,
        "Attack": 65,
        "Defense": 65,
        "Sp_Attack": 50,
        "Sp_Defense": 50,
        "Speed": 90
      }
    },
    {
      "id": 62,
      "name": "ニョロボン",
      "type": [
        "みず",
        "かくとう"
      ],
      "base": {
        "HP": 90,
        "Attack": 95,
        "Defense": 95,
        "Sp_Attack": 70,
        "Sp_Defense": 90,
        "Speed": 70
      }
    },
    {
      "id": 63,
      "name": "ケーシィ",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 25,
        "Attack": 20,
        "Defense": 15,
        "Sp_Attack": 105,
        "Sp_Defense": 55,
        "Speed": 90
      }
    },
    {
      "id": 64,
      "name": "ユンゲラー",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 40,
        "Attack": 35,
        "Defense": 30,
        "Sp_Attack": 120,
        "Sp_Defense": 70,
        "Speed": 105
      }
    },
    {
      "id": 65,
      "name": "フーディン",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 55,
        "Attack": 50,
        "Defense": 45,
        "Sp_Attack": 135,
        "Sp_Defense": 95,
        "Speed": 120
      }
    },
    {
      "id": 66,
      "name": "ワンリキー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 70,
        "Attack": 80,
        "Defense": 50,
        "Sp_Attack": 35,
        "Sp_Defense": 35,
        "Speed": 35
      }
    },
    {
      "id": 67,
      "name": "ゴーリキー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 80,
        "Attack": 100,
        "Defense": 70,
        "Sp_Attack": 50,
        "Sp_Defense": 60,
        "Speed": 45
      }
    },
    {
      "id": 68,
      "name": "カイリキー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 90,
        "Attack": 130,
        "Defense": 80,
        "Sp_Attack": 65,
        "Sp_Defense": 85,
        "Speed": 55
      }
    },
    {
      "id": 69,
      "name": "マダツボミ",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 35,
        "Sp_Attack": 70,
        "Sp_Defense": 30,
        "Speed": 40
      }
    },
    {
      "id": 70,
      "name": "ウツドン",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 50,
        "Sp_Attack": 85,
        "Sp_Defense": 45,
        "Speed": 55
      }
    },
    {
      "id": 71,
      "name": "ウツボット",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 80,
        "Attack": 105,
        "Defense": 65,
        "Sp_Attack": 100,
        "Sp_Defense": 70,
        "Speed": 70
      }
    },
    {
      "id": 72,
      "name": "メノクラゲ",
      "type": [
        "みず",
        "どく"
      ],
      "base": {
        "HP": 40,
        "Attack": 40,
        "Defense": 35,
        "Sp_Attack": 50,
        "Sp_Defense": 100,
        "Speed": 70
      }
    },
    {
      "id": 73,
      "name": "ドククラゲ",
      "type": [
        "みず",
        "どく"
      ],
      "base": {
        "HP": 80,
        "Attack": 70,
        "Defense": 65,
        "Sp_Attack": 80,
        "Sp_Defense": 120,
        "Speed": 100
      }
    },
    {
      "id": 74,
      "name": "イシツブテ",
      "type": [
        "いわ",
        "じめん"
      ],
      "base": {
        "HP": 40,
        "Attack": 80,
        "Defense": 100,
        "Sp_Attack": 30,
        "Sp_Defense": 30,
        "Speed": 20
      }
    },
    {
      "id": 75,
      "name": "ゴローン",
      "type": [
        "いわ",
        "じめん"
      ],
      "base": {
        "HP": 55,
        "Attack": 95,
        "Defense": 115,
        "Sp_Attack": 45,
        "Sp_Defense": 45,
        "Speed": 35
      }
    },
    {
      "id": 76,
      "name": "ゴローニャ",
      "type": [
        "いわ",
        "じめん"
      ],
      "base": {
        "HP": 80,
        "Attack": 120,
        "Defense": 130,
        "Sp_Attack": 55,
        "Sp_Defense": 65,
        "Speed": 45
      }
    },
    {
      "id": 77,
      "name": "ポニータ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 50,
        "Attack": 85,
        "Defense": 55,
        "Sp_Attack": 65,
        "Sp_Defense": 65,
        "Speed": 90
      }
    },
    {
      "id": 78,
      "name": "ギャロップ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 65,
        "Attack": 100,
        "Defense": 70,
        "Sp_Attack": 80,
        "Sp_Defense": 80,
        "Speed": 105
      }
    },
    {
      "id": 79,
      "name": "ヤドン",
      "type": [
        "みず",
        "エスパー"
      ],
      "base": {
        "HP": 90,
        "Attack": 65,
        "Defense": 65,
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 15
      }
    },
    {
      "id": 80,
      "name": "ヤドラン",
      "type": [
        "みず",
        "エスパー"
      ],
      "base": {
        "HP": 95,
        "Attack": 75,
        "Defense": 110,
        "Sp_Attack": 100,
        "Sp_Defense": 80,
        "Speed": 30
      }
    },
    {
      "id": 81,
      "name": "コイル",
      "type": [
        "でんき",
        "はがね"
      ],
      "base": {
        "HP": 25,
        "Attack": 35,
        "Defense": 70,
        "Sp_Attack": 95,
        "Sp_Defense": 55,
        "Speed": 45
      }
    },
    {
      "id": 82,
      "name": "レアコイル",
      "type": [
        "でんき",
        "はがね"
      ],
      "base": {
        "HP": 50,
        "Attack": 60,
        "Defense": 95,
        "Sp_Attack": 120,
        "Sp_Defense": 70,
        "Speed": 70
      }
    },
    {
      "id": 83,
      "name": "カモネギ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 52,
        "Attack": 90,
        "Defense": 55,
        "Sp_Attack": 58,
        "Sp_Defense": 62,
        "Speed": 60
      }
    },
    {
      "id": 84,
      "name": "ドードー",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 35,
        "Attack": 85,
        "Defense": 45,
        "Sp_Attack": 35,
        "Sp_Defense": 35,
        "Speed": 75
      }
    },
    {
      "id": 85,
      "name": "ドードリオ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 60,
        "Attack": 110,
        "Defense": 70,
        "Sp_Attack": 60,
        "Sp_Defense": 60,
        "Speed": 110
      }
    },
    {
      "id": 86,
      "name": "パウワウ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 65,
        "Attack": 45,
        "Defense": 55,
        "Sp_Attack": 45,
        "Sp_Defense": 70,
        "Speed": 45
      }
    },
    {
      "id": 87,
      "name": "ジュゴン",
      "type": [
        "みず",
        "こおり"
      ],
      "base": {
        "HP": 90,
        "Attack": 70,
        "Defense": 80,
        "Sp_Attack": 70,
        "Sp_Defense": 95,
        "Speed": 70
      }
    },
    {
      "id": 88,
      "name": "ベトベター",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 80,
        "Attack": 80,
        "Defense": 50,
        "Sp_Attack": 40,
        "Sp_Defense": 50,
        "Speed": 25
      }
    },
    {
      "id": 89,
      "name": "ベトベトン",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 105,
        "Attack": 105,
        "Defense": 75,
        "Sp_Attack": 65,
        "Sp_Defense": 100,
        "Speed": 50
      }
    },
    {
      "id": 90,
      "name": "シェルダー",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 30,
        "Attack": 65,
        "Defense": 100,
        "Sp_Attack": 45,
        "Sp_Defense": 25,
        "Speed": 40
      }
    },
    {
      "id": 91,
      "name": "パルシェン",
      "type": [
        "みず",
        "こおり"
      ],
      "base": {
        "HP": 50,
        "Attack": 95,
        "Defense": 180,
        "Sp_Attack": 85,
        "Sp_Defense": 45,
        "Speed": 70
      }
    },
    {
      "id": 92,
      "name": "ゴース",
      "type": [
        "ゴースト",
        "どく"
      ],
      "base": {
        "HP": 30,
        "Attack": 35,
        "Defense": 30,
        "Sp_Attack": 100,
        "Sp_Defense": 35,
        "Speed": 80
      }
    },
    {
      "id": 93,
      "name": "ゴースト",
      "type": [
        "ゴースト",
        "どく"
      ],
      "base": {
        "HP": 45,
        "Attack": 50,
        "Defense": 45,
        "Sp_Attack": 115,
        "Sp_Defense": 55,
        "Speed": 95
      }
    },
    {
      "id": 94,
      "name": "ゲンガー",
      "type": [
        "ゴースト",
        "どく"
      ],
      "base": {
        "HP": 60,
        "Attack": 65,
        "Defense": 60,
        "Sp_Attack": 130,
        "Sp_Defense": 75,
        "Speed": 110
      }
    },
    {
      "id": 95,
      "name": "イワーク",
      "type": [
        "いわ",
        "じめん"
      ],
      "base": {
        "HP": 35,
        "Attack": 45,
        "Defense": 160,
        "Sp_Attack": 30,
        "Sp_Defense": 45,
        "Speed": 70
      }
    },
    {
      "id": 96,
      "name": "スリープ",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 60,
        "Attack": 48,
        "Defense": 45,
        "Sp_Attack": 43,
        "Sp_Defense": 90,
        "Speed": 42
      }
    },
    {
      "id": 97,
      "name": "スリーパー",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 85,
        "Attack": 73,
        "Defense": 70,
        "Sp_Attack": 73,
        "Sp_Defense": 115,
        "Speed": 67
      }
    },
    {
      "id": 98,
      "name": "クラブ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 30,
        "Attack": 105,
        "Defense": 90,
        "Sp_Attack": 25,
        "Sp_Defense": 25,
        "Speed": 50
      }
    },
    {
      "id": 99,
      "name": "キングラー",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 55,
        "Attack": 130,
        "Defense": 115,
        "Sp_Attack": 50,
        "Sp_Defense": 50,
        "Speed": 75
      }
    },
    {
      "id": 100,
      "name": "ビリリダマ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 40,
        "Attack": 30,
        "Defense": 50,
        "Sp_Attack": 55,
        "Sp_Defense": 55,
        "Speed": 100
      }
    },
    {
      "id": 101,
      "name": "マルマイン",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 70,
        "Sp_Attack": 80,
        "Sp_Defense": 80,
        "Speed": 150
      }
    },
    {
      "id": 102,
      "name": "タマタマ",
      "type": [
        "くさ",
        "エスパー"
      ],
      "base": {
        "HP": 60,
        "Attack": 40,
        "Defense": 80,
        "Sp_Attack": 60,
        "Sp_Defense": 45,
        "Speed": 40
      }
    },
    {
      "id": 103,
      "name": "ナッシー",
      "type": [
        "くさ",
        "エスパー"
      ],
      "base": {
        "HP": 95,
        "Attack": 95,
        "Defense": 85,
        "Sp_Attack": 125,
        "Sp_Defense": 75,
        "Speed": 55
      }
    },
    {
      "id": 104,
      "name": "カラカラ",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 95,
        "Sp_Attack": 40,
        "Sp_Defense": 50,
        "Speed": 35
      }
    },
    {
      "id": 105,
      "name": "ガラガラ",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 60,
        "Attack": 80,
        "Defense": 110,
        "Sp_Attack": 50,
        "Sp_Defense": 80,
        "Speed": 45
      }
    },
    {
      "id": 106,
      "name": "サワムラー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 50,
        "Attack": 120,
        "Defense": 53,
        "Sp_Attack": 35,
        "Sp_Defense": 110,
        "Speed": 87
      }
    },
    {
      "id": 107,
      "name": "エビワラー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 50,
        "Attack": 105,
        "Defense": 79,
        "Sp_Attack": 35,
        "Sp_Defense": 110,
        "Speed": 76
      }
    },
    {
      "id": 108,
      "name": "ベロリンガ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 90,
        "Attack": 55,
        "Defense": 75,
        "Sp_Attack": 60,
        "Sp_Defense": 75,
        "Speed": 30
      }
    },
    {
      "id": 109,
      "name": "ドガース",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 40,
        "Attack": 65,
        "Defense": 95,
        "Sp_Attack": 60,
        "Sp_Defense": 45,
        "Speed": 35
      }
    },
    {
      "id": 110,
      "name": "マタドガス",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 120,
        "Sp_Attack": 85,
        "Sp_Defense": 70,
        "Speed": 60
      }
    },
    {
      "id": 111,
      "name": "サイホーン",
      "type": [
        "じめん",
        "いわ"
      ],
      "base": {
        "HP": 80,
        "Attack": 85,
        "Defense": 95,
        "Sp_Attack": 30,
        "Sp_Defense": 30,
        "Speed": 25
      }
    },
    {
      "id": 112,
      "name": "サイドン",
      "type": [
        "じめん",
        "いわ"
      ],
      "base": {
        "HP": 105,
        "Attack": 130,
        "Defense": 120,
        "Sp_Attack": 45,
        "Sp_Defense": 45,
        "Speed": 40
      }
    },
    {
      "id": 113,
      "name": "ラッキー",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 250,
        "Attack": 5,
        "Defense": 5,
        "Sp_Attack": 35,
        "Sp_Defense": 105,
        "Speed": 50
      }
    },
    {
      "id": 114,
      "name": "モンジャラ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 65,
        "Attack": 55,
        "Defense": 115,
        "Sp_Attack": 100,
        "Sp_Defense": 40,
        "Speed": 60
      }
    },
    {
      "id": 115,
      "name": "ガルーラ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 105,
        "Attack": 95,
        "Defense": 80,
        "Sp_Attack": 40,
        "Sp_Defense": 80,
        "Speed": 90
      }
    },
    {
      "id": 116,
      "name": "タッツー",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 30,
        "Attack": 40,
        "Defense": 70,
        "Sp_Attack": 70,
        "Sp_Defense": 25,
        "Speed": 60
      }
    },
    {
      "id": 117,
      "name": "シードラ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 55,
        "Attack": 65,
        "Defense": 95,
        "Sp_Attack": 95,
        "Sp_Defense": 45,
        "Speed": 85
      }
    },
    {
      "id": 118,
      "name": "トサキント",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 45,
        "Attack": 67,
        "Defense": 60,
        "Sp_Attack": 35,
        "Sp_Defense": 50,
        "Speed": 63
      }
    },
    {
      "id": 119,
      "name": "アズマオウ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 80,
        "Attack": 92,
        "Defense": 65,
        "Sp_Attack": 65,
        "Sp_Defense": 80,
        "Speed": 68
      }
    },
    {
      "id": 120,
      "name": "ヒトデマン",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 30,
        "Attack": 45,
        "Defense": 55,
        "Sp_Attack": 70,
        "Sp_Defense": 55,
        "Speed": 85
      }
    },
    {
      "id": 121,
      "name": "スターミー",
      "type": [
        "みず",
        "エスパー"
      ],
      "base": {
        "HP": 60,
        "Attack": 75,
        "Defense": 85,
        "Sp_Attack": 100,
        "Sp_Defense": 85,
        "Speed": 115
      }
    },
    {
      "id": 122,
      "name": "バリヤード",
      "type": [
        "エスパー",
        "フェアリー"
      ],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 65,
        "Sp_Attack": 100,
        "Sp_Defense": 120,
        "Speed": 90
      }
    },
    {
      "id": 123,
      "name": "ストライク",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 70,
        "Attack": 110,
        "Defense": 80,
        "Sp_Attack": 55,
        "Sp_Defense": 80,
        "Speed": 105
      }
    },
    {
      "id": 124,
      "name": "ルージュラ",
      "type": [
        "こおり",
        "エスパー"
      ],
      "base": {
        "HP": 65,
        "Attack": 50,
        "Defense": 35,
        "Sp_Attack": 115,
        "Sp_Defense": 95,
        "Speed": 95
      }
    },
    {
      "id": 125,
      "name": "エレブー",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 65,
        "Attack": 83,
        "Defense": 57,
        "Sp_Attack": 95,
        "Sp_Defense": 85,
        "Speed": 105
      }
    },
    {
      "id": 126,
      "name": "ブーバー",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 65,
        "Attack": 95,
        "Defense": 57,
        "Sp_Attack": 100,
        "Sp_Defense": 85,
        "Speed": 93
      }
    },
    {
      "id": 127,
      "name": "カイロス",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 65,
        "Attack": 125,
        "Defense": 100,
        "Sp_Attack": 55,
        "Sp_Defense": 70,
        "Speed": 85
      }
    },
    {
      "id": 128,
      "name": "ケンタロス",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 75,
        "Attack": 100,
        "Defense": 95,
        "Sp_Attack": 40,
        "Sp_Defense": 70,
        "Speed": 110
      }
    },
    {
      "id": 129,
      "name": "コイキング",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 20,
        "Attack": 10,
        "Defense": 55,
        "Sp_Attack": 15,
        "Sp_Defense": 20,
        "Speed": 80
      }
    },
    {
      "id": 130,
      "name": "ギャラドス",
      "type": [
        "みず",
        "ひこう"
      ],
      "base": {
        "HP": 95,
        "Attack": 125,
        "Defense": 79,
        "Sp_Attack": 60,
        "Sp_Defense": 100,
        "Speed": 81
      }
    },
    {
      "id": 131,
      "name": "ラプラス",
      "type": [
        "みず",
        "こおり"
      ],
      "base": {
        "HP": 130,
        "Attack": 85,
        "Defense": 80,
        "Sp_Attack": 85,
        "Sp_Defense": 95,
        "Speed": 60
      }
    },
    {
      "id": 132,
      "name": "メタモン",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 48,
        "Attack": 48,
        "Defense": 48,
        "Sp_Attack": 48,
        "Sp_Defense": 48,
        "Speed": 48
      }
    },
    {
      "id": 133,
      "name": "イーブイ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 55,
        "Attack": 55,
        "Defense": 50,
        "Sp_Attack": 45,
        "Sp_Defense": 65,
        "Speed": 55
      }
    },
    {
      "id": 134,
      "name": "シャワーズ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 130,
        "Attack": 65,
        "Defense": 60,
        "Sp_Attack": 110,
        "Sp_Defense": 95,
        "Speed": 65
      }
    },
    {
      "id": 135,
      "name": "サンダース",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 65,
        "Attack": 65,
        "Defense": 60,
        "Sp_Attack": 110,
        "Sp_Defense": 95,
        "Speed": 130
      }
    },
    {
      "id": 136,
      "name": "ブースター",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 65,
        "Attack": 130,
        "Defense": 60,
        "Sp_Attack": 95,
        "Sp_Defense": 110,
        "Speed": 65
      }
    },
    {
      "id": 137,
      "name": "ポリゴン",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 65,
        "Attack": 60,
        "Defense": 70,
        "Sp_Attack": 85,
        "Sp_Defense": 75,
        "Speed": 40
      }
    },
    {
      "id": 138,
      "name": "オムナイト",
      "type": [
        "いわ",
        "みず"
      ],
      "base": {
        "HP": 35,
        "Attack": 40,
        "Defense": 100,
        "Sp_Attack": 90,
        "Sp_Defense": 55,
        "Speed": 35
      }
    },
    {
      "id": 139,
      "name": "オムスター",
      "type": [
        "いわ",
        "みず"
      ],
      "base": {
        "HP": 70,
        "Attack": 60,
        "Defense": 125,
        "Sp_Attack": 115,
        "Sp_Defense": 70,
        "Speed": 55
      }
    },
    {
      "id": 140,
      "name": "カブト",
      "type": [
        "いわ",
        "みず"
      ],
      "base": {
        "HP": 30,
        "Attack": 80,
        "Defense": 90,
        "Sp_Attack": 55,
        "Sp_Defense": 45,
        "Speed": 55
      }
    },
    {
      "id": 141,
      "name": "カブトプス",
      "type": [
        "いわ",
        "みず"
      ],
      "base": {
        "HP": 60,
        "Attack": 115,
        "Defense": 105,
        "Sp_Attack": 65,
        "Sp_Defense": 70,
        "Speed": 80
      }
    },
    {
      "id": 142,
      "name": "プテラ",
      "type": [
        "いわ",
        "ひこう"
      ],
      "base": {
        "HP": 80,
        "Attack": 105,
        "Defense": 65,
        "Sp_Attack": 60,
        "Sp_Defense": 75,
        "Speed": 130
      }
    },
    {
      "id": 143,
      "name": "カビゴン",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 160,
        "Attack": 110,
        "Defense": 65,
        "Sp_Attack": 65,
        "Sp_Defense": 110,
        "Speed": 30
      }
    },
    {
      "id": 144,
      "name": "フリーザー",
      "type": [
        "こおり",
        "ひこう"
      ],
      "base": {
        "HP": 90,
        "Attack": 85,
        "Defense": 100,
        "Sp_Attack": 95,
        "Sp_Defense": 125,
        "Speed": 85
      }
    },
    {
      "id": 145,
      "name": "サンダー",
      "type": [
        "でんき",
        "ひこう"
      ],
      "base": {
        "HP": 90,
        "Attack": 90,
        "Defense": 85,
        "Sp_Attack": 125,
        "Sp_Defense": 90,
        "Speed": 100
      }
    },
    {
      "id": 146,
      "name": "ファイヤー",
      "type": [
        "ほのお",
        "ひこう"
      ],
      "base": {
        "HP": 90,
        "Attack": 100,
        "Defense": 90,
        "Sp_Attack": 125,
        "Sp_Defense": 85,
        "Speed": 90
      }
    },
    {
      "id": 147,
      "name": "ミニリュウ",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 41,
        "Attack": 64,
        "Defense": 45,
        "Sp_Attack": 50,
        "Sp_Defense": 50,
        "Speed": 50
      }
    },
    {
      "id": 148,
      "name": "ハクリュー",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 61,
        "Attack": 84,
        "Defense": 65,
        "Sp_Attack": 70,
        "Sp_Defense": 70,
        "Speed": 70
      }
    },
    {
      "id": 149,
      "name": "カイリュー",
      "type": [
        "ドラゴン",
        "ひこう"
      ],
      "base": {
        "HP": 91,
        "Attack": 134,
        "Defense": 95,
        "Sp_Attack": 100,
        "Sp_Defense": 100,
        "Speed": 80
      }
    },
    {
      "id": 150,
      "name": "ミュウツー",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 106,
        "Attack": 110,
        "Defense": 90,
        "Sp_Attack": 154,
        "Sp_Defense": 90,
        "Speed": 130
      }
    },
    {
      "id": 151,
      "name": "ミュウ",
      "type": [
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
      "id": 152,
      "name": "チコリータ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 45,
        "Attack": 49,
        "Defense": 65,
        "Sp_Attack": 49,
        "Sp_Defense": 65,
        "Speed": 45
      }
    },
    {
      "id": 153,
      "name": "ベイリーフ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 60,
        "Attack": 62,
        "Defense": 80,
        "Sp_Attack": 63,
        "Sp_Defense": 80,
        "Speed": 60
      }
    },
    {
      "id": 154,
      "name": "メガニウム",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 80,
        "Attack": 82,
        "Defense": 100,
        "Sp_Attack": 83,
        "Sp_Defense": 100,
        "Speed": 80
      }
    },
    {
      "id": 155,
      "name": "ヒノアラシ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 39,
        "Attack": 52,
        "Defense": 43,
        "Sp_Attack": 60,
        "Sp_Defense": 50,
        "Speed": 65
      }
    },
    {
      "id": 156,
      "name": "マグマラシ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 58,
        "Attack": 64,
        "Defense": 58,
        "Sp_Attack": 80,
        "Sp_Defense": 65,
        "Speed": 80
      }
    },
    {
      "id": 157,
      "name": "バクフーン",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 78,
        "Attack": 84,
        "Defense": 78,
        "Sp_Attack": 109,
        "Sp_Defense": 85,
        "Speed": 100
      }
    },
    {
      "id": 158,
      "name": "ワニノコ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 50,
        "Attack": 65,
        "Defense": 64,
        "Sp_Attack": 44,
        "Sp_Defense": 48,
        "Speed": 43
      }
    },
    {
      "id": 159,
      "name": "アリゲイツ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 65,
        "Attack": 80,
        "Defense": 80,
        "Sp_Attack": 59,
        "Sp_Defense": 63,
        "Speed": 58
      }
    },
    {
      "id": 160,
      "name": "オーダイル",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 85,
        "Attack": 105,
        "Defense": 100,
        "Sp_Attack": 79,
        "Sp_Defense": 83,
        "Speed": 78
      }
    },
    {
      "id": 161,
      "name": "オタチ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 35,
        "Attack": 46,
        "Defense": 34,
        "Sp_Attack": 35,
        "Sp_Defense": 45,
        "Speed": 20
      }
    },
    {
      "id": 162,
      "name": "オオタチ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 85,
        "Attack": 76,
        "Defense": 64,
        "Sp_Attack": 45,
        "Sp_Defense": 55,
        "Speed": 90
      }
    },
    {
      "id": 163,
      "name": "ホーホー",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 60,
        "Attack": 30,
        "Defense": 30,
        "Sp_Attack": 36,
        "Sp_Defense": 56,
        "Speed": 50
      }
    },
    {
      "id": 164,
      "name": "ヨルノズク",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 100,
        "Attack": 50,
        "Defense": 50,
        "Sp_Attack": 86,
        "Sp_Defense": 96,
        "Speed": 70
      }
    },
    {
      "id": 165,
      "name": "レディバ",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 40,
        "Attack": 20,
        "Defense": 30,
        "Sp_Attack": 40,
        "Sp_Defense": 80,
        "Speed": 55
      }
    },
    {
      "id": 166,
      "name": "レディアン",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 55,
        "Attack": 35,
        "Defense": 50,
        "Sp_Attack": 55,
        "Sp_Defense": 110,
        "Speed": 85
      }
    },
    {
      "id": 167,
      "name": "イトマル",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 40,
        "Attack": 60,
        "Defense": 40,
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 30
      }
    },
    {
      "id": 168,
      "name": "アリアドス",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 70,
        "Attack": 90,
        "Defense": 70,
        "Sp_Attack": 60,
        "Sp_Defense": 70,
        "Speed": 40
      }
    },
    {
      "id": 169,
      "name": "クロバット",
      "type": [
        "どく",
        "ひこう"
      ],
      "base": {
        "HP": 85,
        "Attack": 90,
        "Defense": 80,
        "Sp_Attack": 70,
        "Sp_Defense": 80,
        "Speed": 130
      }
    },
    {
      "id": 170,
      "name": "チョンチー",
      "type": [
        "みず",
        "でんき"
      ],
      "base": {
        "HP": 75,
        "Attack": 38,
        "Defense": 38,
        "Sp_Attack": 56,
        "Sp_Defense": 56,
        "Speed": 67
      }
    },
    {
      "id": 171,
      "name": "ランターン",
      "type": [
        "みず",
        "でんき"
      ],
      "base": {
        "HP": 125,
        "Attack": 58,
        "Defense": 58,
        "Sp_Attack": 76,
        "Sp_Defense": 76,
        "Speed": 67
      }
    },
    {
      "id": 172,
      "name": "ピチュー",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 20,
        "Attack": 40,
        "Defense": 15,
        "Sp_Attack": 35,
        "Sp_Defense": 35,
        "Speed": 60
      }
    },
    {
      "id": 173,
      "name": "ピィ",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 50,
        "Attack": 25,
        "Defense": 28,
        "Sp_Attack": 45,
        "Sp_Defense": 55,
        "Speed": 15
      }
    },
    {
      "id": 174,
      "name": "ププリン",
      "type": [
        "ノーマル",
        "フェアリー"
      ],
      "base": {
        "HP": 90,
        "Attack": 30,
        "Defense": 15,
        "Sp_Attack": 40,
        "Sp_Defense": 20,
        "Speed": 15
      }
    },
    {
      "id": 175,
      "name": "トゲピー",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 35,
        "Attack": 20,
        "Defense": 65,
        "Sp_Attack": 40,
        "Sp_Defense": 65,
        "Speed": 20
      }
    },
    {
      "id": 176,
      "name": "トゲチック",
      "type": [
        "フェアリー",
        "ひこう"
      ],
      "base": {
        "HP": 55,
        "Attack": 40,
        "Defense": 85,
        "Sp_Attack": 80,
        "Sp_Defense": 105,
        "Speed": 40
      }
    },
    {
      "id": 177,
      "name": "ネイティ",
      "type": [
        "エスパー",
        "ひこう"
      ],
      "base": {
        "HP": 40,
        "Attack": 50,
        "Defense": 45,
        "Sp_Attack": 70,
        "Sp_Defense": 45,
        "Speed": 70
      }
    },
    {
      "id": 178,
      "name": "ネイティオ",
      "type": [
        "エスパー",
        "ひこう"
      ],
      "base": {
        "HP": 65,
        "Attack": 75,
        "Defense": 70,
        "Sp_Attack": 95,
        "Sp_Defense": 70,
        "Speed": 95
      }
    },
    {
      "id": 179,
      "name": "メリープ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 55,
        "Attack": 40,
        "Defense": 40,
        "Sp_Attack": 65,
        "Sp_Defense": 45,
        "Speed": 35
      }
    },
    {
      "id": 180,
      "name": "モココ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 70,
        "Attack": 55,
        "Defense": 55,
        "Sp_Attack": 80,
        "Sp_Defense": 60,
        "Speed": 45
      }
    },
    {
      "id": 181,
      "name": "デンリュウ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 90,
        "Attack": 75,
        "Defense": 85,
        "Sp_Attack": 115,
        "Sp_Defense": 90,
        "Speed": 55
      }
    },
    {
      "id": 182,
      "name": "キレイハナ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 95,
        "Sp_Attack": 90,
        "Sp_Defense": 100,
        "Speed": 50
      }
    },
    {
      "id": 183,
      "name": "マリル",
      "type": [
        "みず",
        "フェアリー"
      ],
      "base": {
        "HP": 70,
        "Attack": 20,
        "Defense": 50,
        "Sp_Attack": 20,
        "Sp_Defense": 50,
        "Speed": 40
      }
    },
    {
      "id": 184,
      "name": "マリルリ",
      "type": [
        "みず",
        "フェアリー"
      ],
      "base": {
        "HP": 100,
        "Attack": 50,
        "Defense": 80,
        "Sp_Attack": 60,
        "Sp_Defense": 80,
        "Speed": 50
      }
    },
    {
      "id": 185,
      "name": "ウソッキー",
      "type": [
        "いわ"
      ],
      "base": {
        "HP": 70,
        "Attack": 100,
        "Defense": 115,
        "Sp_Attack": 30,
        "Sp_Defense": 65,
        "Speed": 30
      }
    },
    {
      "id": 186,
      "name": "ニョロトノ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 90,
        "Attack": 75,
        "Defense": 75,
        "Sp_Attack": 90,
        "Sp_Defense": 100,
        "Speed": 70
      }
    },
    {
      "id": 187,
      "name": "ハネッコ",
      "type": [
        "くさ",
        "ひこう"
      ],
      "base": {
        "HP": 35,
        "Attack": 35,
        "Defense": 40,
        "Sp_Attack": 35,
        "Sp_Defense": 55,
        "Speed": 50
      }
    },
    {
      "id": 188,
      "name": "ポポッコ",
      "type": [
        "くさ",
        "ひこう"
      ],
      "base": {
        "HP": 55,
        "Attack": 45,
        "Defense": 50,
        "Sp_Attack": 45,
        "Sp_Defense": 65,
        "Speed": 80
      }
    },
    {
      "id": 189,
      "name": "ワタッコ",
      "type": [
        "くさ",
        "ひこう"
      ],
      "base": {
        "HP": 75,
        "Attack": 55,
        "Defense": 70,
        "Sp_Attack": 55,
        "Sp_Defense": 95,
        "Speed": 110
      }
    },
    {
      "id": 190,
      "name": "エイパム",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 55,
        "Attack": 70,
        "Defense": 55,
        "Sp_Attack": 40,
        "Sp_Defense": 55,
        "Speed": 85
      }
    },
    {
      "id": 191,
      "name": "ヒマナッツ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 30,
        "Attack": 30,
        "Defense": 30,
        "Sp_Attack": 30,
        "Sp_Defense": 30,
        "Speed": 30
      }
    },
    {
      "id": 192,
      "name": "キマワリ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 55,
        "Sp_Attack": 105,
        "Sp_Defense": 85,
        "Speed": 30
      }
    },
    {
      "id": 193,
      "name": "ヤンヤンマ",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 65,
        "Attack": 65,
        "Defense": 45,
        "Sp_Attack": 75,
        "Sp_Defense": 45,
        "Speed": 95
      }
    },
    {
      "id": 194,
      "name": "ウパー",
      "type": [
        "みず",
        "じめん"
      ],
      "base": {
        "HP": 55,
        "Attack": 45,
        "Defense": 45,
        "Sp_Attack": 25,
        "Sp_Defense": 25,
        "Speed": 15
      }
    },
    {
      "id": 195,
      "name": "ヌオー",
      "type": [
        "みず",
        "じめん"
      ],
      "base": {
        "HP": 95,
        "Attack": 85,
        "Defense": 85,
        "Sp_Attack": 65,
        "Sp_Defense": 65,
        "Speed": 35
      }
    },
    {
      "id": 196,
      "name": "エーフィ",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 65,
        "Attack": 65,
        "Defense": 60,
        "Sp_Attack": 130,
        "Sp_Defense": 95,
        "Speed": 110
      }
    },
    {
      "id": 197,
      "name": "ブラッキー",
      "type": [
        "あく"
      ],
      "base": {
        "HP": 95,
        "Attack": 65,
        "Defense": 110,
        "Sp_Attack": 60,
        "Sp_Defense": 130,
        "Speed": 65
      }
    },
    {
      "id": 198,
      "name": "ヤミカラス",
      "type": [
        "あく",
        "ひこう"
      ],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 42,
        "Sp_Attack": 85,
        "Sp_Defense": 42,
        "Speed": 91
      }
    },
    {
      "id": 199,
      "name": "ヤドキング",
      "type": [
        "みず",
        "エスパー"
      ],
      "base": {
        "HP": 95,
        "Attack": 75,
        "Defense": 80,
        "Sp_Attack": 100,
        "Sp_Defense": 110,
        "Speed": 30
      }
    },
    {
      "id": 200,
      "name": "ムウマ",
      "type": [
        "ゴースト"
      ],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 60,
        "Sp_Attack": 85,
        "Sp_Defense": 85,
        "Speed": 85
      }
    },
    {
      "id": 201,
      "name": "アンノーン",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 48,
        "Attack": 72,
        "Defense": 48,
        "Sp_Attack": 72,
        "Sp_Defense": 48,
        "Speed": 48
      }
    },
    {
      "id": 202,
      "name": "ソーナンス",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 190,
        "Attack": 33,
        "Defense": 58,
        "Sp_Attack": 33,
        "Sp_Defense": 58,
        "Speed": 33
      }
    },
    {
      "id": 203,
      "name": "キリンリキ",
      "type": [
        "ノーマル",
        "エスパー"
      ],
      "base": {
        "HP": 70,
        "Attack": 80,
        "Defense": 65,
        "Sp_Attack": 90,
        "Sp_Defense": 65,
        "Speed": 85
      }
    },
    {
      "id": 204,
      "name": "クヌギダマ",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 50,
        "Attack": 65,
        "Defense": 90,
        "Sp_Attack": 35,
        "Sp_Defense": 35,
        "Speed": 15
      }
    },
    {
      "id": 205,
      "name": "フォレトス",
      "type": [
        "むし",
        "はがね"
      ],
      "base": {
        "HP": 75,
        "Attack": 90,
        "Defense": 140,
        "Sp_Attack": 60,
        "Sp_Defense": 60,
        "Speed": 40
      }
    },
    {
      "id": 206,
      "name": "ノコッチ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 100,
        "Attack": 70,
        "Defense": 70,
        "Sp_Attack": 65,
        "Sp_Defense": 65,
        "Speed": 45
      }
    },
    {
      "id": 207,
      "name": "グライガー",
      "type": [
        "じめん",
        "ひこう"
      ],
      "base": {
        "HP": 65,
        "Attack": 75,
        "Defense": 105,
        "Sp_Attack": 35,
        "Sp_Defense": 65,
        "Speed": 85
      }
    },
    {
      "id": 208,
      "name": "ハガネール",
      "type": [
        "はがね",
        "じめん"
      ],
      "base": {
        "HP": 75,
        "Attack": 85,
        "Defense": 200,
        "Sp_Attack": 55,
        "Sp_Defense": 65,
        "Speed": 30
      }
    },
    {
      "id": 209,
      "name": "ブルー",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 60,
        "Attack": 80,
        "Defense": 50,
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 30
      }
    },
    {
      "id": 210,
      "name": "グランブル",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 90,
        "Attack": 120,
        "Defense": 75,
        "Sp_Attack": 60,
        "Sp_Defense": 60,
        "Speed": 45
      }
    },
    {
      "id": 211,
      "name": "ハリーセン",
      "type": [
        "みず",
        "どく"
      ],
      "base": {
        "HP": 65,
        "Attack": 95,
        "Defense": 85,
        "Sp_Attack": 55,
        "Sp_Defense": 55,
        "Speed": 85
      }
    },
    {
      "id": 212,
      "name": "ハッサム",
      "type": [
        "むし",
        "はがね"
      ],
      "base": {
        "HP": 70,
        "Attack": 130,
        "Defense": 100,
        "Sp_Attack": 55,
        "Sp_Defense": 80,
        "Speed": 65
      }
    },
    {
      "id": 213,
      "name": "ツボツボ",
      "type": [
        "むし",
        "いわ"
      ],
      "base": {
        "HP": 20,
        "Attack": 10,
        "Defense": 230,
        "Sp_Attack": 10,
        "Sp_Defense": 230,
        "Speed": 5
      }
    },
    {
      "id": 214,
      "name": "ヘラクロス",
      "type": [
        "むし",
        "かくとう"
      ],
      "base": {
        "HP": 80,
        "Attack": 125,
        "Defense": 75,
        "Sp_Attack": 40,
        "Sp_Defense": 95,
        "Speed": 85
      }
    },
    {
      "id": 215,
      "name": "ニューラ",
      "type": [
        "あく",
        "こおり"
      ],
      "base": {
        "HP": 55,
        "Attack": 95,
        "Defense": 55,
        "Sp_Attack": 35,
        "Sp_Defense": 75,
        "Speed": 115
      }
    },
    {
      "id": 216,
      "name": "ヒメグマ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 60,
        "Attack": 80,
        "Defense": 50,
        "Sp_Attack": 50,
        "Sp_Defense": 50,
        "Speed": 40
      }
    },
    {
      "id": 217,
      "name": "リングマ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 90,
        "Attack": 130,
        "Defense": 75,
        "Sp_Attack": 75,
        "Sp_Defense": 75,
        "Speed": 55
      }
    },
    {
      "id": 218,
      "name": "マグマッグ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 40,
        "Attack": 40,
        "Defense": 40,
        "Sp_Attack": 70,
        "Sp_Defense": 40,
        "Speed": 20
      }
    },
    {
      "id": 219,
      "name": "マグカルゴ",
      "type": [
        "ほのお",
        "いわ"
      ],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 120,
        "Sp_Attack": 90,
        "Sp_Defense": 80,
        "Speed": 30
      }
    },
    {
      "id": 220,
      "name": "ウリムー",
      "type": [
        "こおり",
        "じめん"
      ],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 40,
        "Sp_Attack": 30,
        "Sp_Defense": 30,
        "Speed": 50
      }
    },
    {
      "id": 221,
      "name": "イノムー",
      "type": [
        "こおり",
        "じめん"
      ],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 80,
        "Sp_Attack": 60,
        "Sp_Defense": 60,
        "Speed": 50
      }
    },
    {
      "id": 222,
      "name": "サニーゴ",
      "type": [
        "みず",
        "いわ"
      ],
      "base": {
        "HP": 65,
        "Attack": 55,
        "Defense": 95,
        "Sp_Attack": 65,
        "Sp_Defense": 95,
        "Speed": 35
      }
    },
    {
      "id": 223,
      "name": "テッポウオ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 35,
        "Attack": 65,
        "Defense": 35,
        "Sp_Attack": 65,
        "Sp_Defense": 35,
        "Speed": 65
      }
    },
    {
      "id": 224,
      "name": "オクタン",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 75,
        "Attack": 105,
        "Defense": 75,
        "Sp_Attack": 105,
        "Sp_Defense": 75,
        "Speed": 45
      }
    },
    {
      "id": 225,
      "name": "デリバード",
      "type": [
        "こおり",
        "ひこう"
      ],
      "base": {
        "HP": 45,
        "Attack": 55,
        "Defense": 45,
        "Sp_Attack": 65,
        "Sp_Defense": 45,
        "Speed": 75
      }
    },
    {
      "id": 226,
      "name": "マンタイン",
      "type": [
        "みず",
        "ひこう"
      ],
      "base": {
        "HP": 85,
        "Attack": 40,
        "Defense": 70,
        "Sp_Attack": 80,
        "Sp_Defense": 140,
        "Speed": 70
      }
    },
    {
      "id": 227,
      "name": "エアームド",
      "type": [
        "はがね",
        "ひこう"
      ],
      "base": {
        "HP": 65,
        "Attack": 80,
        "Defense": 140,
        "Sp_Attack": 40,
        "Sp_Defense": 70,
        "Speed": 70
      }
    },
    {
      "id": 228,
      "name": "デルビル",
      "type": [
        "あく",
        "ほのお"
      ],
      "base": {
        "HP": 45,
        "Attack": 60,
        "Defense": 30,
        "Sp_Attack": 80,
        "Sp_Defense": 50,
        "Speed": 65
      }
    },
    {
      "id": 229,
      "name": "ヘルガー",
      "type": [
        "あく",
        "ほのお"
      ],
      "base": {
        "HP": 75,
        "Attack": 90,
        "Defense": 50,
        "Sp_Attack": 110,
        "Sp_Defense": 80,
        "Speed": 95
      }
    },
    {
      "id": 230,
      "name": "キングドラ",
      "type": [
        "みず",
        "ドラゴン"
      ],
      "base": {
        "HP": 75,
        "Attack": 95,
        "Defense": 95,
        "Sp_Attack": 95,
        "Sp_Defense": 95,
        "Speed": 85
      }
    },
    {
      "id": 231,
      "name": "ゴマゾウ",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 90,
        "Attack": 60,
        "Defense": 60,
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 40
      }
    },
    {
      "id": 232,
      "name": "ドンファン",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 90,
        "Attack": 120,
        "Defense": 120,
        "Sp_Attack": 60,
        "Sp_Defense": 60,
        "Speed": 50
      }
    },
    {
      "id": 233,
      "name": "ポリゴン２",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 85,
        "Attack": 80,
        "Defense": 90,
        "Sp_Attack": 105,
        "Sp_Defense": 95,
        "Speed": 60
      }
    },
    {
      "id": 234,
      "name": "オドシシ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 73,
        "Attack": 95,
        "Defense": 62,
        "Sp_Attack": 85,
        "Sp_Defense": 65,
        "Speed": 85
      }
    },
    {
      "id": 235,
      "name": "ドーブル",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 55,
        "Attack": 20,
        "Defense": 35,
        "Sp_Attack": 20,
        "Sp_Defense": 45,
        "Speed": 75
      }
    },
    {
      "id": 236,
      "name": "バルキー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 35,
        "Attack": 35,
        "Defense": 35,
        "Sp_Attack": 35,
        "Sp_Defense": 35,
        "Speed": 35
      }
    },
    {
      "id": 237,
      "name": "カポエラー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 50,
        "Attack": 95,
        "Defense": 95,
        "Sp_Attack": 35,
        "Sp_Defense": 110,
        "Speed": 70
      }
    },
    {
      "id": 238,
      "name": "ムチュール",
      "type": [
        "こおり",
        "エスパー"
      ],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 15,
        "Sp_Attack": 85,
        "Sp_Defense": 65,
        "Speed": 65
      }
    },
    {
      "id": 239,
      "name": "エレキッド",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 45,
        "Attack": 63,
        "Defense": 37,
        "Sp_Attack": 65,
        "Sp_Defense": 55,
        "Speed": 95
      }
    },
    {
      "id": 240,
      "name": "ブビィ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 45,
        "Attack": 75,
        "Defense": 37,
        "Sp_Attack": 70,
        "Sp_Defense": 55,
        "Speed": 83
      }
    },
    {
      "id": 241,
      "name": "ミルタンク",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 95,
        "Attack": 80,
        "Defense": 105,
        "Sp_Attack": 40,
        "Sp_Defense": 70,
        "Speed": 100
      }
    },
    {
      "id": 242,
      "name": "ハピナス",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 255,
        "Attack": 10,
        "Defense": 10,
        "Sp_Attack": 75,
        "Sp_Defense": 135,
        "Speed": 55
      }
    },
    {
      "id": 243,
      "name": "ライコウ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 90,
        "Attack": 85,
        "Defense": 75,
        "Sp_Attack": 115,
        "Sp_Defense": 100,
        "Speed": 115
      }
    },
    {
      "id": 244,
      "name": "エンテイ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 115,
        "Attack": 115,
        "Defense": 85,
        "Sp_Attack": 90,
        "Sp_Defense": 75,
        "Speed": 100
      }
    },
    {
      "id": 245,
      "name": "スイクン",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 100,
        "Attack": 75,
        "Defense": 115,
        "Sp_Attack": 90,
        "Sp_Defense": 115,
        "Speed": 85
      }
    },
    {
      "id": 246,
      "name": "ヨーギラス",
      "type": [
        "いわ",
        "じめん"
      ],
      "base": {
        "HP": 50,
        "Attack": 64,
        "Defense": 50,
        "Sp_Attack": 45,
        "Sp_Defense": 50,
        "Speed": 41
      }
    },
    {
      "id": 247,
      "name": "サナギラス",
      "type": [
        "いわ",
        "じめん"
      ],
      "base": {
        "HP": 70,
        "Attack": 84,
        "Defense": 70,
        "Sp_Attack": 65,
        "Sp_Defense": 70,
        "Speed": 51
      }
    },
    {
      "id": 248,
      "name": "バンギラス",
      "type": [
        "いわ",
        "あく"
      ],
      "base": {
        "HP": 100,
        "Attack": 134,
        "Defense": 110,
        "Sp_Attack": 95,
        "Sp_Defense": 100,
        "Speed": 61
      }
    },
    {
      "id": 249,
      "name": "ルギア",
      "type": [
        "エスパー",
        "ひこう"
      ],
      "base": {
        "HP": 106,
        "Attack": 90,
        "Defense": 130,
        "Sp_Attack": 90,
        "Sp_Defense": 154,
        "Speed": 110
      }
    },
    {
      "id": 250,
      "name": "ホウオウ",
      "type": [
        "ほのお",
        "ひこう"
      ],
      "base": {
        "HP": 106,
        "Attack": 130,
        "Defense": 90,
        "Sp_Attack": 110,
        "Sp_Defense": 154,
        "Speed": 90
      }
    },
    {
      "id": 251,
      "name": "セレビィ",
      "type": [
        "エスパー",
        "くさ"
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
    },
    {
      "id": 387,
      "name": "ナエトル",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 55,
        "Attack": 68,
        "Defense": 64,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 31
      }
    },
    {
      "id": 388,
      "name": "ハヤシガメ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 75,
        "Attack": 89,
        "Defense": 85,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 36
      }
    },
    {
      "id": 389,
      "name": "ドダイトス",
      "type": [
        "くさ",
        "じめん"
      ],
      "base": {
        "HP": 95,
        "Attack": 109,
        "Defense": 105,
        "Sp. Attack": 75,
        "Sp. Defense": 85,
        "Speed": 56
      }
    },
    {
      "id": 390,
      "name": "ヒコザル",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 44,
        "Attack": 58,
        "Defense": 44,
        "Sp. Attack": 58,
        "Sp. Defense": 44,
        "Speed": 61
      }
    },
    {
      "id": 391,
      "name": "モウカザル",
      "type": [
        "ほのお",
        "かくとう"
      ],
      "base": {
        "HP": 64,
        "Attack": 78,
        "Defense": 52,
        "Sp. Attack": 78,
        "Sp. Defense": 52,
        "Speed": 81
      }
    },
    {
      "id": 392,
      "name": "ゴウカザル",
      "type": [
        "ほのお",
        "かくとう"
      ],
      "base": {
        "HP": 76,
        "Attack": 104,
        "Defense": 71,
        "Sp. Attack": 104,
        "Sp. Defense": 71,
        "Speed": 108
      }
    },
    {
      "id": 393,
      "name": "ポッチャマ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 53,
        "Attack": 51,
        "Defense": 53,
        "Sp. Attack": 61,
        "Sp. Defense": 56,
        "Speed": 40
      }
    },
    {
      "id": 394,
      "name": "ポッタイシ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 64,
        "Attack": 66,
        "Defense": 68,
        "Sp. Attack": 81,
        "Sp. Defense": 76,
        "Speed": 50
      }
    },
    {
      "id": 395,
      "name": "エンペルト",
      "type": [
        "みず",
        "はがね"
      ],
      "base": {
        "HP": 84,
        "Attack": 86,
        "Defense": 88,
        "Sp. Attack": 111,
        "Sp. Defense": 101,
        "Speed": 60
      }
    },
    {
      "id": 396,
      "name": "ムックル",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 30,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 60
      }
    },
    {
      "id": 397,
      "name": "ムクバード",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 55,
        "Attack": 75,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 80
      }
    },
    {
      "id": 398,
      "name": "ムクホーク",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 85,
        "Attack": 120,
        "Defense": 70,
        "Sp. Attack": 50,
        "Sp. Defense": 60,
        "Speed": 100
      }
    },
    {
      "id": 399,
      "name": "ビッパ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 59,
        "Attack": 45,
        "Defense": 40,
        "Sp. Attack": 35,
        "Sp. Defense": 40,
        "Speed": 31
      }
    },
    {
      "id": 400,
      "name": "ビーダル",
      "type": [
        "ノーマル",
        "みず"
      ],
      "base": {
        "HP": 79,
        "Attack": 85,
        "Defense": 60,
        "Sp. Attack": 55,
        "Sp. Defense": 60,
        "Speed": 71
      }
    },
    {
      "id": 401,
      "name": "コロボーシ",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 37,
        "Attack": 25,
        "Defense": 41,
        "Sp. Attack": 25,
        "Sp. Defense": 41,
        "Speed": 25
      }
    },
    {
      "id": 402,
      "name": "コロトック",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 77,
        "Attack": 85,
        "Defense": 51,
        "Sp. Attack": 55,
        "Sp. Defense": 51,
        "Speed": 65
      }
    },
    {
      "id": 403,
      "name": "コリンク",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 45,
        "Attack": 65,
        "Defense": 34,
        "Sp. Attack": 40,
        "Sp. Defense": 34,
        "Speed": 45
      }
    },
    {
      "id": 404,
      "name": "ルクシオ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 49,
        "Sp. Attack": 60,
        "Sp. Defense": 49,
        "Speed": 60
      }
    },
    {
      "id": 405,
      "name": "レントラー",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 80,
        "Attack": 120,
        "Defense": 79,
        "Sp. Attack": 95,
        "Sp. Defense": 79,
        "Speed": 70
      }
    },
    {
      "id": 406,
      "name": "スボミー",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 40,
        "Attack": 30,
        "Defense": 35,
        "Sp. Attack": 50,
        "Sp. Defense": 70,
        "Speed": 55
      }
    },
    {
      "id": 407,
      "name": "ロズレイド",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 60,
        "Attack": 70,
        "Defense": 65,
        "Sp. Attack": 125,
        "Sp. Defense": 105,
        "Speed": 90
      }
    },
    {
      "id": 408,
      "name": "ズガイドス",
      "type": [
        "いわ"
      ],
      "base": {
        "HP": 67,
        "Attack": 125,
        "Defense": 40,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 58
      }
    },
    {
      "id": 409,
      "name": "ラムパルド",
      "type": [
        "いわ"
      ],
      "base": {
        "HP": 97,
        "Attack": 165,
        "Defense": 60,
        "Sp. Attack": 65,
        "Sp. Defense": 50,
        "Speed": 58
      }
    },
    {
      "id": 410,
      "name": "タテトプス",
      "type": [
        "いわ",
        "はがね"
      ],
      "base": {
        "HP": 30,
        "Attack": 42,
        "Defense": 118,
        "Sp. Attack": 42,
        "Sp. Defense": 88,
        "Speed": 30
      }
    },
    {
      "id": 411,
      "name": "トリデプス",
      "type": [
        "いわ",
        "はがね"
      ],
      "base": {
        "HP": 60,
        "Attack": 52,
        "Defense": 168,
        "Sp. Attack": 47,
        "Sp. Defense": 138,
        "Speed": 30
      }
    },
    {
      "id": 412,
      "name": "ミノムッチ",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 40,
        "Attack": 29,
        "Defense": 45,
        "Sp. Attack": 29,
        "Sp. Defense": 45,
        "Speed": 36
      }
    },
    {
      "id": 413,
      "name": "ミノマダム",
      "type": [
        "むし",
        "くさ"
      ],
      "base": {
        "HP": 60,
        "Attack": 59,
        "Defense": 85,
        "Sp. Attack": 79,
        "Sp. Defense": 105,
        "Speed": 36
      }
    },
    {
      "id": 414,
      "name": "ガーメイル",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 70,
        "Attack": 94,
        "Defense": 50,
        "Sp. Attack": 94,
        "Sp. Defense": 50,
        "Speed": 66
      }
    },
    {
      "id": 415,
      "name": "ミツハニー",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 30,
        "Attack": 30,
        "Defense": 42,
        "Sp. Attack": 30,
        "Sp. Defense": 42,
        "Speed": 70
      }
    },
    {
      "id": 416,
      "name": "ビークイン",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 70,
        "Attack": 80,
        "Defense": 102,
        "Sp. Attack": 80,
        "Sp. Defense": 102,
        "Speed": 40
      }
    },
    {
      "id": 417,
      "name": "パチリス",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 70,
        "Sp. Attack": 45,
        "Sp. Defense": 90,
        "Speed": 95
      }
    },
    {
      "id": 418,
      "name": "ブイゼル",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 55,
        "Attack": 65,
        "Defense": 35,
        "Sp. Attack": 60,
        "Sp. Defense": 30,
        "Speed": 85
      }
    },
    {
      "id": 419,
      "name": "フローゼル",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 85,
        "Attack": 105,
        "Defense": 55,
        "Sp. Attack": 85,
        "Sp. Defense": 50,
        "Speed": 115
      }
    },
    {
      "id": 420,
      "name": "チェリンボ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 45,
        "Attack": 35,
        "Defense": 45,
        "Sp. Attack": 62,
        "Sp. Defense": 53,
        "Speed": 35
      }
    },
    {
      "id": 421,
      "name": "チェリム",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 70,
        "Attack": 60,
        "Defense": 70,
        "Sp. Attack": 87,
        "Sp. Defense": 78,
        "Speed": 85
      }
    },
    {
      "id": 422,
      "name": "カラナクシ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 76,
        "Attack": 48,
        "Defense": 48,
        "Sp. Attack": 57,
        "Sp. Defense": 62,
        "Speed": 34
      }
    },
    {
      "id": 423,
      "name": "トリトドン",
      "type": [
        "みず",
        "じめん"
      ],
      "base": {
        "HP": 111,
        "Attack": 83,
        "Defense": 68,
        "Sp. Attack": 92,
        "Sp. Defense": 82,
        "Speed": 39
      }
    },
    {
      "id": 424,
      "name": "エテボース",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 75,
        "Attack": 100,
        "Defense": 66,
        "Sp. Attack": 60,
        "Sp. Defense": 66,
        "Speed": 115
      }
    },
    {
      "id": 425,
      "name": "フワンテ",
      "type": [
        "ゴースト",
        "ひこう"
      ],
      "base": {
        "HP": 90,
        "Attack": 50,
        "Defense": 34,
        "Sp. Attack": 60,
        "Sp. Defense": 44,
        "Speed": 70
      }
    },
    {
      "id": 426,
      "name": "フワライド",
      "type": [
        "ゴースト",
        "ひこう"
      ],
      "base": {
        "HP": 150,
        "Attack": 80,
        "Defense": 44,
        "Sp. Attack": 90,
        "Sp. Defense": 54,
        "Speed": 80
      }
    },
    {
      "id": 427,
      "name": "ミミロル",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 55,
        "Attack": 66,
        "Defense": 44,
        "Sp. Attack": 44,
        "Sp. Defense": 56,
        "Speed": 85
      }
    },
    {
      "id": 428,
      "name": "ミミロップ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 65,
        "Attack": 76,
        "Defense": 84,
        "Sp. Attack": 54,
        "Sp. Defense": 96,
        "Speed": 105
      }
    },
    {
      "id": 429,
      "name": "ムウマージ",
      "type": [
        "ゴースト"
      ],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 60,
        "Sp. Attack": 105,
        "Sp. Defense": 105,
        "Speed": 105
      }
    },
    {
      "id": 430,
      "name": "ドンカラス",
      "type": [
        "あく",
        "ひこう"
      ],
      "base": {
        "HP": 100,
        "Attack": 125,
        "Defense": 52,
        "Sp. Attack": 105,
        "Sp. Defense": 52,
        "Speed": 71
      }
    },
    {
      "id": 431,
      "name": "ニャルマー",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 49,
        "Attack": 55,
        "Defense": 42,
        "Sp. Attack": 42,
        "Sp. Defense": 37,
        "Speed": 85
      }
    },
    {
      "id": 432,
      "name": "ブニャット",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 71,
        "Attack": 82,
        "Defense": 64,
        "Sp. Attack": 64,
        "Sp. Defense": 59,
        "Speed": 112
      }
    },
    {
      "id": 433,
      "name": "リーシャン",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 50,
        "Sp. Attack": 65,
        "Sp. Defense": 50,
        "Speed": 45
      }
    },
    {
      "id": 434,
      "name": "スカンプー",
      "type": [
        "どく",
        "あく"
      ],
      "base": {
        "HP": 63,
        "Attack": 63,
        "Defense": 47,
        "Sp. Attack": 41,
        "Sp. Defense": 41,
        "Speed": 74
      }
    },
    {
      "id": 435,
      "name": "スカタンク",
      "type": [
        "どく",
        "あく"
      ],
      "base": {
        "HP": 103,
        "Attack": 93,
        "Defense": 67,
        "Sp. Attack": 71,
        "Sp. Defense": 61,
        "Speed": 84
      }
    },
    {
      "id": 436,
      "name": "ドーミラー",
      "type": [
        "はがね",
        "エスパー"
      ],
      "base": {
        "HP": 57,
        "Attack": 24,
        "Defense": 86,
        "Sp. Attack": 24,
        "Sp. Defense": 86,
        "Speed": 23
      }
    },
    {
      "id": 437,
      "name": "ドータクン",
      "type": [
        "はがね",
        "エスパー"
      ],
      "base": {
        "HP": 67,
        "Attack": 89,
        "Defense": 116,
        "Sp. Attack": 79,
        "Sp. Defense": 116,
        "Speed": 33
      }
    },
    {
      "id": 438,
      "name": "ウソハチ",
      "type": [
        "いわ"
      ],
      "base": {
        "HP": 50,
        "Attack": 80,
        "Defense": 95,
        "Sp. Attack": 10,
        "Sp. Defense": 45,
        "Speed": 10
      }
    },
    {
      "id": 439,
      "name": "マネネ",
      "type": [
        "エスパー",
        "フェアリー"
      ],
      "base": {
        "HP": 20,
        "Attack": 25,
        "Defense": 45,
        "Sp. Attack": 70,
        "Sp. Defense": 90,
        "Speed": 60
      }
    },
    {
      "id": 440,
      "name": "ピンプク",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 100,
        "Attack": 5,
        "Defense": 5,
        "Sp. Attack": 15,
        "Sp. Defense": 65,
        "Speed": 30
      }
    },
    {
      "id": 441,
      "name": "ペラップ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 76,
        "Attack": 65,
        "Defense": 45,
        "Sp. Attack": 92,
        "Sp. Defense": 42,
        "Speed": 91
      }
    },
    {
      "id": 442,
      "name": "ミカルゲ",
      "type": [
        "ゴースト",
        "あく"
      ],
      "base": {
        "HP": 50,
        "Attack": 92,
        "Defense": 108,
        "Sp. Attack": 92,
        "Sp. Defense": 108,
        "Speed": 35
      }
    },
    {
      "id": 443,
      "name": "フカマル",
      "type": [
        "ドラゴン",
        "じめん"
      ],
      "base": {
        "HP": 58,
        "Attack": 70,
        "Defense": 45,
        "Sp. Attack": 40,
        "Sp. Defense": 45,
        "Speed": 42
      }
    },
    {
      "id": 444,
      "name": "ガバイト",
      "type": [
        "ドラゴン",
        "じめん"
      ],
      "base": {
        "HP": 68,
        "Attack": 90,
        "Defense": 65,
        "Sp. Attack": 50,
        "Sp. Defense": 55,
        "Speed": 82
      }
    },
    {
      "id": 445,
      "name": "ガブリアス",
      "type": [
        "ドラゴン",
        "じめん"
      ],
      "base": {
        "HP": 108,
        "Attack": 130,
        "Defense": 95,
        "Sp. Attack": 80,
        "Sp. Defense": 85,
        "Speed": 102
      }
    },
    {
      "id": 446,
      "name": "ゴンベ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 135,
        "Attack": 85,
        "Defense": 40,
        "Sp. Attack": 40,
        "Sp. Defense": 85,
        "Speed": 5
      }
    },
    {
      "id": 447,
      "name": "リオル",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 40,
        "Attack": 70,
        "Defense": 40,
        "Sp. Attack": 35,
        "Sp. Defense": 40,
        "Speed": 60
      }
    },
    {
      "id": 448,
      "name": "ルカリオ",
      "type": [
        "かくとう",
        "はがね"
      ],
      "base": {
        "HP": 70,
        "Attack": 110,
        "Defense": 70,
        "Sp. Attack": 115,
        "Sp. Defense": 70,
        "Speed": 90
      }
    },
    {
      "id": 449,
      "name": "ヒポポタス",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 68,
        "Attack": 72,
        "Defense": 78,
        "Sp. Attack": 38,
        "Sp. Defense": 42,
        "Speed": 32
      }
    },
    {
      "id": 450,
      "name": "カバルドン",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 108,
        "Attack": 112,
        "Defense": 118,
        "Sp. Attack": 68,
        "Sp. Defense": 72,
        "Speed": 47
      }
    },
    {
      "id": 451,
      "name": "スコルピ",
      "type": [
        "どく",
        "むし"
      ],
      "base": {
        "HP": 40,
        "Attack": 50,
        "Defense": 90,
        "Sp. Attack": 30,
        "Sp. Defense": 55,
        "Speed": 65
      }
    },
    {
      "id": 452,
      "name": "ドラピオン",
      "type": [
        "どく",
        "あく"
      ],
      "base": {
        "HP": 70,
        "Attack": 90,
        "Defense": 110,
        "Sp. Attack": 60,
        "Sp. Defense": 75,
        "Speed": 95
      }
    },
    {
      "id": 453,
      "name": "グレッグル",
      "type": [
        "どく",
        "かくとう"
      ],
      "base": {
        "HP": 48,
        "Attack": 61,
        "Defense": 40,
        "Sp. Attack": 61,
        "Sp. Defense": 40,
        "Speed": 50
      }
    },
    {
      "id": 454,
      "name": "ドクロッグ",
      "type": [
        "どく",
        "かくとう"
      ],
      "base": {
        "HP": 83,
        "Attack": 106,
        "Defense": 65,
        "Sp. Attack": 86,
        "Sp. Defense": 65,
        "Speed": 85
      }
    },
    {
      "id": 455,
      "name": "マスキッパ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 74,
        "Attack": 100,
        "Defense": 72,
        "Sp. Attack": 90,
        "Sp. Defense": 72,
        "Speed": 46
      }
    },
    {
      "id": 456,
      "name": "ケイコウオ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 49,
        "Attack": 49,
        "Defense": 56,
        "Sp. Attack": 49,
        "Sp. Defense": 61,
        "Speed": 66
      }
    },
    {
      "id": 457,
      "name": "ネオラント",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 69,
        "Attack": 69,
        "Defense": 76,
        "Sp. Attack": 69,
        "Sp. Defense": 86,
        "Speed": 91
      }
    },
    {
      "id": 458,
      "name": "タマンタ",
      "type": [
        "みず",
        "ひこう"
      ],
      "base": {
        "HP": 45,
        "Attack": 20,
        "Defense": 50,
        "Sp. Attack": 60,
        "Sp. Defense": 120,
        "Speed": 50
      }
    },
    {
      "id": 459,
      "name": "ユキカブリ",
      "type": [
        "くさ",
        "こおり"
      ],
      "base": {
        "HP": 60,
        "Attack": 62,
        "Defense": 50,
        "Sp. Attack": 62,
        "Sp. Defense": 60,
        "Speed": 40
      }
    },
    {
      "id": 460,
      "name": "ユキノオー",
      "type": [
        "くさ",
        "こおり"
      ],
      "base": {
        "HP": 90,
        "Attack": 92,
        "Defense": 75,
        "Sp. Attack": 92,
        "Sp. Defense": 85,
        "Speed": 60
      }
    },
    {
      "id": 461,
      "name": "マニューラ",
      "type": [
        "あく",
        "こおり"
      ],
      "base": {
        "HP": 70,
        "Attack": 120,
        "Defense": 65,
        "Sp. Attack": 45,
        "Sp. Defense": 85,
        "Speed": 125
      }
    },
    {
      "id": 462,
      "name": "ジバコイル",
      "type": [
        "でんき",
        "はがね"
      ],
      "base": {
        "HP": 70,
        "Attack": 70,
        "Defense": 115,
        "Sp. Attack": 130,
        "Sp. Defense": 90,
        "Speed": 60
      }
    },
    {
      "id": 463,
      "name": "ベロベルト",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 110,
        "Attack": 85,
        "Defense": 95,
        "Sp. Attack": 80,
        "Sp. Defense": 95,
        "Speed": 50
      }
    },
    {
      "id": 464,
      "name": "ドサイドン",
      "type": [
        "じめん",
        "いわ"
      ],
      "base": {
        "HP": 115,
        "Attack": 140,
        "Defense": 130,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 40
      }
    },
    {
      "id": 465,
      "name": "モジャンボ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 100,
        "Attack": 100,
        "Defense": 125,
        "Sp. Attack": 110,
        "Sp. Defense": 50,
        "Speed": 50
      }
    },
    {
      "id": 466,
      "name": "エレキブル",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 75,
        "Attack": 123,
        "Defense": 67,
        "Sp. Attack": 95,
        "Sp. Defense": 85,
        "Speed": 95
      }
    },
    {
      "id": 467,
      "name": "ブーバーン",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 75,
        "Attack": 95,
        "Defense": 67,
        "Sp. Attack": 125,
        "Sp. Defense": 95,
        "Speed": 83
      }
    },
    {
      "id": 468,
      "name": "トゲキッス",
      "type": [
        "フェアリー",
        "ひこう"
      ],
      "base": {
        "HP": 85,
        "Attack": 50,
        "Defense": 95,
        "Sp. Attack": 120,
        "Sp. Defense": 115,
        "Speed": 80
      }
    },
    {
      "id": 469,
      "name": "メガヤンマ",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 86,
        "Attack": 76,
        "Defense": 86,
        "Sp. Attack": 116,
        "Sp. Defense": 56,
        "Speed": 95
      }
    },
    {
      "id": 470,
      "name": "リーフィア",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 65,
        "Attack": 110,
        "Defense": 130,
        "Sp. Attack": 60,
        "Sp. Defense": 65,
        "Speed": 95
      }
    },
    {
      "id": 471,
      "name": "グレイシア",
      "type": [
        "こおり"
      ],
      "base": {
        "HP": 65,
        "Attack": 60,
        "Defense": 110,
        "Sp. Attack": 130,
        "Sp. Defense": 95,
        "Speed": 65
      }
    },
    {
      "id": 472,
      "name": "グライオン",
      "type": [
        "じめん",
        "ひこう"
      ],
      "base": {
        "HP": 75,
        "Attack": 95,
        "Defense": 125,
        "Sp. Attack": 45,
        "Sp. Defense": 75,
        "Speed": 95
      }
    },
    {
      "id": 473,
      "name": "マンムー",
      "type": [
        "こおり",
        "じめん"
      ],
      "base": {
        "HP": 110,
        "Attack": 130,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 60,
        "Speed": 80
      }
    },
    {
      "id": 474,
      "name": "ポリゴンＺ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 85,
        "Attack": 80,
        "Defense": 70,
        "Sp. Attack": 135,
        "Sp. Defense": 75,
        "Speed": 90
      }
    },
    {
      "id": 475,
      "name": "エルレイド",
      "type": [
        "エスパー",
        "かくとう"
      ],
      "base": {
        "HP": 68,
        "Attack": 125,
        "Defense": 65,
        "Sp. Attack": 65,
        "Sp. Defense": 115,
        "Speed": 80
      }
    },
    {
      "id": 476,
      "name": "ダイノーズ",
      "type": [
        "いわ",
        "はがね"
      ],
      "base": {
        "HP": 60,
        "Attack": 55,
        "Defense": 145,
        "Sp. Attack": 75,
        "Sp. Defense": 150,
        "Speed": 40
      }
    },
    {
      "id": 477,
      "name": "ヨノワール",
      "type": [
        "ゴースト"
      ],
      "base": {
        "HP": 45,
        "Attack": 100,
        "Defense": 135,
        "Sp. Attack": 65,
        "Sp. Defense": 135,
        "Speed": 45
      }
    },
    {
      "id": 478,
      "name": "ユキメノコ",
      "type": [
        "こおり",
        "ゴースト"
      ],
      "base": {
        "HP": 70,
        "Attack": 80,
        "Defense": 70,
        "Sp. Attack": 80,
        "Sp. Defense": 70,
        "Speed": 110
      }
    },
    {
      "id": 479,
      "name": "ロトム",
      "type": [
        "でんき",
        "ゴースト"
      ],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 77,
        "Sp. Attack": 95,
        "Sp. Defense": 77,
        "Speed": 91
      }
    },
    {
      "id": 480,
      "name": "ユクシー",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 130,
        "Sp. Attack": 75,
        "Sp. Defense": 130,
        "Speed": 95
      }
    },
    {
      "id": 481,
      "name": "エムリット",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 80,
        "Attack": 105,
        "Defense": 105,
        "Sp. Attack": 105,
        "Sp. Defense": 105,
        "Speed": 80
      }
    },
    {
      "id": 482,
      "name": "アグノム",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 75,
        "Attack": 125,
        "Defense": 70,
        "Sp. Attack": 125,
        "Sp. Defense": 70,
        "Speed": 115
      }
    },
    {
      "id": 483,
      "name": "ディアルガ",
      "type": [
        "はがね",
        "ドラゴン"
      ],
      "base": {
        "HP": 100,
        "Attack": 120,
        "Defense": 120,
        "Sp. Attack": 150,
        "Sp. Defense": 100,
        "Speed": 90
      }
    },
    {
      "id": 484,
      "name": "パルキア",
      "type": [
        "みず",
        "ドラゴン"
      ],
      "base": {
        "HP": 90,
        "Attack": 120,
        "Defense": 100,
        "Sp. Attack": 150,
        "Sp. Defense": 120,
        "Speed": 100
      }
    },
    {
      "id": 485,
      "name": "ヒードラン",
      "type": [
        "ほのお",
        "はがね"
      ],
      "base": {
        "HP": 91,
        "Attack": 90,
        "Defense": 106,
        "Sp. Attack": 130,
        "Sp. Defense": 106,
        "Speed": 77
      }
    },
    {
      "id": 486,
      "name": "レジギガス",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 110,
        "Attack": 160,
        "Defense": 110,
        "Sp. Attack": 80,
        "Sp. Defense": 110,
        "Speed": 100
      }
    },
    {
      "id": 487,
      "name": "ギラティナ",
      "type": [
        "ゴースト",
        "ドラゴン"
      ],
      "base": {
        "HP": 150,
        "Attack": 100,
        "Defense": 120,
        "Sp. Attack": 100,
        "Sp. Defense": 120,
        "Speed": 90
      }
    },
    {
      "id": 488,
      "name": "クレセリア",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 120,
        "Attack": 70,
        "Defense": 120,
        "Sp. Attack": 75,
        "Sp. Defense": 130,
        "Speed": 85
      }
    },
    {
      "id": 489,
      "name": "フィオネ",
      "type": [
        "みず"
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
      "id": 490,
      "name": "マナフィ",
      "type": [
        "みず"
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
      "id": 491,
      "name": "ダークライ",
      "type": [
        "あく"
      ],
      "base": {
        "HP": 70,
        "Attack": 90,
        "Defense": 90,
        "Sp. Attack": 135,
        "Sp. Defense": 90,
        "Speed": 125
      }
    },
    {
      "id": 492,
      "name": "シェイミ",
      "type": [
        "くさ"
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
      "id": 493,
      "name": "アルセウス",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 120,
        "Attack": 120,
        "Defense": 120,
        "Sp. Attack": 120,
        "Sp. Defense": 120,
        "Speed": 120
      }
    },
    {
      "id": 494,
      "name": "ビクティニ",
      "type": [
        "エスパー",
        "ほのお"
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
      "id": 495,
      "name": "ツタージャ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 45,
        "Attack": 45,
        "Defense": 55,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 63
      }
    },
    {
      "id": 496,
      "name": "ジャノビー",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 75,
        "Sp. Attack": 60,
        "Sp. Defense": 75,
        "Speed": 83
      }
    },
    {
      "id": 497,
      "name": "ジャローダ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 95,
        "Sp. Attack": 75,
        "Sp. Defense": 95,
        "Speed": 113
      }
    },
    {
      "id": 498,
      "name": "ポカブ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 65,
        "Attack": 63,
        "Defense": 45,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 45
      }
    },
    {
      "id": 499,
      "name": "チャオブー",
      "type": [
        "ほのお",
        "かくとう"
      ],
      "base": {
        "HP": 90,
        "Attack": 93,
        "Defense": 55,
        "Sp. Attack": 70,
        "Sp. Defense": 55,
        "Speed": 55
      }
    },
    {
      "id": 500,
      "name": "エンブオー",
      "type": [
        "ほのお",
        "かくとう"
      ],
      "base": {
        "HP": 110,
        "Attack": 123,
        "Defense": 65,
        "Sp. Attack": 100,
        "Sp. Defense": 65,
        "Speed": 65
      }
    },
    {
      "id": 501,
      "name": "ミジュマル",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 55,
        "Attack": 55,
        "Defense": 45,
        "Sp. Attack": 63,
        "Sp. Defense": 45,
        "Speed": 45
      }
    },
    {
      "id": 502,
      "name": "フタチマル",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 60,
        "Sp. Attack": 83,
        "Sp. Defense": 60,
        "Speed": 60
      }
    },
    {
      "id": 503,
      "name": "ダイケンキ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 95,
        "Attack": 100,
        "Defense": 85,
        "Sp. Attack": 108,
        "Sp. Defense": 70,
        "Speed": 70
      }
    },
    {
      "id": 504,
      "name": "ミネズミ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 45,
        "Attack": 55,
        "Defense": 39,
        "Sp. Attack": 35,
        "Sp. Defense": 39,
        "Speed": 42
      }
    },
    {
      "id": 505,
      "name": "ミルホッグ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 69,
        "Sp. Attack": 60,
        "Sp. Defense": 69,
        "Speed": 77
      }
    },
    {
      "id": 506,
      "name": "ヨーテリー",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 45,
        "Attack": 60,
        "Defense": 45,
        "Sp. Attack": 25,
        "Sp. Defense": 45,
        "Speed": 55
      }
    },
    {
      "id": 507,
      "name": "ハーデリア",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 65,
        "Attack": 80,
        "Defense": 65,
        "Sp. Attack": 35,
        "Sp. Defense": 65,
        "Speed": 60
      }
    },
    {
      "id": 508,
      "name": "ムーランド",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 85,
        "Attack": 110,
        "Defense": 90,
        "Sp. Attack": 45,
        "Sp. Defense": 90,
        "Speed": 80
      }
    },
    {
      "id": 509,
      "name": "チョロネコ",
      "type": [
        "あく"
      ],
      "base": {
        "HP": 41,
        "Attack": 50,
        "Defense": 37,
        "Sp. Attack": 50,
        "Sp. Defense": 37,
        "Speed": 66
      }
    },
    {
      "id": 510,
      "name": "レパルダス",
      "type": [
        "あく"
      ],
      "base": {
        "HP": 64,
        "Attack": 88,
        "Defense": 50,
        "Sp. Attack": 88,
        "Sp. Defense": 50,
        "Speed": 106
      }
    },
    {
      "id": 511,
      "name": "ヤナップ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 48,
        "Sp. Attack": 53,
        "Sp. Defense": 48,
        "Speed": 64
      }
    },
    {
      "id": 512,
      "name": "ヤナッキー",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 75,
        "Attack": 98,
        "Defense": 63,
        "Sp. Attack": 98,
        "Sp. Defense": 63,
        "Speed": 101
      }
    },
    {
      "id": 513,
      "name": "バオップ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 48,
        "Sp. Attack": 53,
        "Sp. Defense": 48,
        "Speed": 64
      }
    },
    {
      "id": 514,
      "name": "バオッキー",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 75,
        "Attack": 98,
        "Defense": 63,
        "Sp. Attack": 98,
        "Sp. Defense": 63,
        "Speed": 101
      }
    },
    {
      "id": 515,
      "name": "ヒヤップ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 48,
        "Sp. Attack": 53,
        "Sp. Defense": 48,
        "Speed": 64
      }
    },
    {
      "id": 516,
      "name": "ヒヤッキー",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 75,
        "Attack": 98,
        "Defense": 63,
        "Sp. Attack": 98,
        "Sp. Defense": 63,
        "Speed": 101
      }
    },
    {
      "id": 517,
      "name": "ムンナ",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 76,
        "Attack": 25,
        "Defense": 45,
        "Sp. Attack": 67,
        "Sp. Defense": 55,
        "Speed": 24
      }
    },
    {
      "id": 518,
      "name": "ムシャーナ",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 116,
        "Attack": 55,
        "Defense": 85,
        "Sp. Attack": 107,
        "Sp. Defense": 95,
        "Speed": 29
      }
    },
    {
      "id": 519,
      "name": "マメパト",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 50,
        "Attack": 55,
        "Defense": 50,
        "Sp. Attack": 36,
        "Sp. Defense": 30,
        "Speed": 43
      }
    },
    {
      "id": 520,
      "name": "ハトーボー",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 62,
        "Attack": 77,
        "Defense": 62,
        "Sp. Attack": 50,
        "Sp. Defense": 42,
        "Speed": 65
      }
    },
    {
      "id": 521,
      "name": "ケンホロウ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 80,
        "Attack": 115,
        "Defense": 80,
        "Sp. Attack": 65,
        "Sp. Defense": 55,
        "Speed": 93
      }
    },
    {
      "id": 522,
      "name": "シママ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 45,
        "Attack": 60,
        "Defense": 32,
        "Sp. Attack": 50,
        "Sp. Defense": 32,
        "Speed": 76
      }
    },
    {
      "id": 523,
      "name": "ゼブライカ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 75,
        "Attack": 100,
        "Defense": 63,
        "Sp. Attack": 80,
        "Sp. Defense": 63,
        "Speed": 116
      }
    },
    {
      "id": 524,
      "name": "ダンゴロ",
      "type": [
        "いわ"
      ],
      "base": {
        "HP": 55,
        "Attack": 75,
        "Defense": 85,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 15
      }
    },
    {
      "id": 525,
      "name": "ガントル",
      "type": [
        "いわ"
      ],
      "base": {
        "HP": 70,
        "Attack": 105,
        "Defense": 105,
        "Sp. Attack": 50,
        "Sp. Defense": 40,
        "Speed": 20
      }
    },
    {
      "id": 526,
      "name": "ギガイアス",
      "type": [
        "いわ"
      ],
      "base": {
        "HP": 85,
        "Attack": 135,
        "Defense": 130,
        "Sp. Attack": 60,
        "Sp. Defense": 80,
        "Speed": 25
      }
    },
    {
      "id": 527,
      "name": "コロモリ",
      "type": [
        "エスパー",
        "ひこう"
      ],
      "base": {
        "HP": 65,
        "Attack": 45,
        "Defense": 43,
        "Sp. Attack": 55,
        "Sp. Defense": 43,
        "Speed": 72
      }
    },
    {
      "id": 528,
      "name": "ココロモリ",
      "type": [
        "エスパー",
        "ひこう"
      ],
      "base": {
        "HP": 67,
        "Attack": 57,
        "Defense": 55,
        "Sp. Attack": 77,
        "Sp. Defense": 55,
        "Speed": 114
      }
    },
    {
      "id": 529,
      "name": "モグリュー",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 60,
        "Attack": 85,
        "Defense": 40,
        "Sp. Attack": 30,
        "Sp. Defense": 45,
        "Speed": 68
      }
    },
    {
      "id": 530,
      "name": "ドリュウズ",
      "type": [
        "じめん",
        "はがね"
      ],
      "base": {
        "HP": 110,
        "Attack": 135,
        "Defense": 60,
        "Sp. Attack": 50,
        "Sp. Defense": 65,
        "Speed": 88
      }
    },
    {
      "id": 531,
      "name": "タブンネ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 103,
        "Attack": 60,
        "Defense": 86,
        "Sp. Attack": 60,
        "Sp. Defense": 86,
        "Speed": 50
      }
    },
    {
      "id": 532,
      "name": "ドッコラー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 55,
        "Sp. Attack": 25,
        "Sp. Defense": 35,
        "Speed": 35
      }
    },
    {
      "id": 533,
      "name": "ドテッコツ",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 85,
        "Attack": 105,
        "Defense": 85,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 40
      }
    },
    {
      "id": 534,
      "name": "ローブシン",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 105,
        "Attack": 140,
        "Defense": 95,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 45
      }
    },
    {
      "id": 535,
      "name": "オタマロ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 40,
        "Sp. Attack": 50,
        "Sp. Defense": 40,
        "Speed": 64
      }
    },
    {
      "id": 536,
      "name": "ガマガル",
      "type": [
        "みず",
        "じめん"
      ],
      "base": {
        "HP": 75,
        "Attack": 65,
        "Defense": 55,
        "Sp. Attack": 65,
        "Sp. Defense": 55,
        "Speed": 69
      }
    },
    {
      "id": 537,
      "name": "ガマゲロゲ",
      "type": [
        "みず",
        "じめん"
      ],
      "base": {
        "HP": 105,
        "Attack": 95,
        "Defense": 75,
        "Sp. Attack": 85,
        "Sp. Defense": 75,
        "Speed": 74
      }
    },
    {
      "id": 538,
      "name": "ナゲキ",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 120,
        "Attack": 100,
        "Defense": 85,
        "Sp. Attack": 30,
        "Sp. Defense": 85,
        "Speed": 45
      }
    },
    {
      "id": 539,
      "name": "ダゲキ",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 75,
        "Attack": 125,
        "Defense": 75,
        "Sp. Attack": 30,
        "Sp. Defense": 75,
        "Speed": 85
      }
    },
    {
      "id": 540,
      "name": "クルミル",
      "type": [
        "むし",
        "くさ"
      ],
      "base": {
        "HP": 45,
        "Attack": 53,
        "Defense": 70,
        "Sp. Attack": 40,
        "Sp. Defense": 60,
        "Speed": 42
      }
    },
    {
      "id": 541,
      "name": "クルマユ",
      "type": [
        "むし",
        "くさ"
      ],
      "base": {
        "HP": 55,
        "Attack": 63,
        "Defense": 90,
        "Sp. Attack": 50,
        "Sp. Defense": 80,
        "Speed": 42
      }
    },
    {
      "id": 542,
      "name": "ハハコモリ",
      "type": [
        "むし",
        "くさ"
      ],
      "base": {
        "HP": 75,
        "Attack": 103,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 80,
        "Speed": 92
      }
    },
    {
      "id": 543,
      "name": "フシデ",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 30,
        "Attack": 45,
        "Defense": 59,
        "Sp. Attack": 30,
        "Sp. Defense": 39,
        "Speed": 57
      }
    },
    {
      "id": 544,
      "name": "ホイーガ",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 99,
        "Sp. Attack": 40,
        "Sp. Defense": 79,
        "Speed": 47
      }
    },
    {
      "id": 545,
      "name": "ペンドラー",
      "type": [
        "むし",
        "どく"
      ],
      "base": {
        "HP": 60,
        "Attack": 100,
        "Defense": 89,
        "Sp. Attack": 55,
        "Sp. Defense": 69,
        "Speed": 112
      }
    },
    {
      "id": 546,
      "name": "モンメン",
      "type": [
        "くさ",
        "フェアリー"
      ],
      "base": {
        "HP": 40,
        "Attack": 27,
        "Defense": 60,
        "Sp. Attack": 37,
        "Sp. Defense": 50,
        "Speed": 66
      }
    },
    {
      "id": 547,
      "name": "エルフーン",
      "type": [
        "くさ",
        "フェアリー"
      ],
      "base": {
        "HP": 60,
        "Attack": 67,
        "Defense": 85,
        "Sp. Attack": 77,
        "Sp. Defense": 75,
        "Speed": 116
      }
    },
    {
      "id": 548,
      "name": "チュリネ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 45,
        "Attack": 35,
        "Defense": 50,
        "Sp. Attack": 70,
        "Sp. Defense": 50,
        "Speed": 30
      }
    },
    {
      "id": 549,
      "name": "ドレディア",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 70,
        "Attack": 60,
        "Defense": 75,
        "Sp. Attack": 110,
        "Sp. Defense": 75,
        "Speed": 90
      }
    },
    {
      "id": 550,
      "name": "バスラオ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 70,
        "Attack": 92,
        "Defense": 65,
        "Sp. Attack": 80,
        "Sp. Defense": 55,
        "Speed": 98
      }
    },
    {
      "id": 551,
      "name": "メグロコ",
      "type": [
        "じめん",
        "あく"
      ],
      "base": {
        "HP": 50,
        "Attack": 72,
        "Defense": 35,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 65
      }
    },
    {
      "id": 552,
      "name": "ワルビル",
      "type": [
        "じめん",
        "あく"
      ],
      "base": {
        "HP": 60,
        "Attack": 82,
        "Defense": 45,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 74
      }
    },
    {
      "id": 553,
      "name": "ワルビアル",
      "type": [
        "じめん",
        "あく"
      ],
      "base": {
        "HP": 95,
        "Attack": 117,
        "Defense": 80,
        "Sp. Attack": 65,
        "Sp. Defense": 70,
        "Speed": 92
      }
    },
    {
      "id": 554,
      "name": "ダルマッカ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 70,
        "Attack": 90,
        "Defense": 45,
        "Sp. Attack": 15,
        "Sp. Defense": 45,
        "Speed": 50
      }
    },
    {
      "id": 555,
      "name": "ヒヒダルマ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 105,
        "Attack": 140,
        "Defense": 55,
        "Sp. Attack": 30,
        "Sp. Defense": 55,
        "Speed": 95
      }
    },
    {
      "id": 556,
      "name": "マラカッチ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 75,
        "Attack": 86,
        "Defense": 67,
        "Sp. Attack": 106,
        "Sp. Defense": 67,
        "Speed": 60
      }
    },
    {
      "id": 557,
      "name": "イシズマイ",
      "type": [
        "むし",
        "いわ"
      ],
      "base": {
        "HP": 50,
        "Attack": 65,
        "Defense": 85,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 55
      }
    },
    {
      "id": 558,
      "name": "イワパレス",
      "type": [
        "むし",
        "いわ"
      ],
      "base": {
        "HP": 70,
        "Attack": 105,
        "Defense": 125,
        "Sp. Attack": 65,
        "Sp. Defense": 75,
        "Speed": 45
      }
    },
    {
      "id": 559,
      "name": "ズルッグ",
      "type": [
        "あく",
        "かくとう"
      ],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 70,
        "Sp. Attack": 35,
        "Sp. Defense": 70,
        "Speed": 48
      }
    },
    {
      "id": 560,
      "name": "ズルズキン",
      "type": [
        "あく",
        "かくとう"
      ],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 115,
        "Sp. Attack": 45,
        "Sp. Defense": 115,
        "Speed": 58
      }
    },
    {
      "id": 561,
      "name": "シンボラー",
      "type": [
        "エスパー",
        "ひこう"
      ],
      "base": {
        "HP": 72,
        "Attack": 58,
        "Defense": 80,
        "Sp. Attack": 103,
        "Sp. Defense": 80,
        "Speed": 97
      }
    },
    {
      "id": 562,
      "name": "デスマス",
      "type": [
        "ゴースト"
      ],
      "base": {
        "HP": 38,
        "Attack": 30,
        "Defense": 85,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 30
      }
    },
    {
      "id": 563,
      "name": "デスカーン",
      "type": [
        "ゴースト"
      ],
      "base": {
        "HP": 58,
        "Attack": 50,
        "Defense": 145,
        "Sp. Attack": 95,
        "Sp. Defense": 105,
        "Speed": 30
      }
    },
    {
      "id": 564,
      "name": "プロトーガ",
      "type": [
        "みず",
        "いわ"
      ],
      "base": {
        "HP": 54,
        "Attack": 78,
        "Defense": 103,
        "Sp. Attack": 53,
        "Sp. Defense": 45,
        "Speed": 22
      }
    },
    {
      "id": 565,
      "name": "アバゴーラ",
      "type": [
        "みず",
        "いわ"
      ],
      "base": {
        "HP": 74,
        "Attack": 108,
        "Defense": 133,
        "Sp. Attack": 83,
        "Sp. Defense": 65,
        "Speed": 32
      }
    },
    {
      "id": 566,
      "name": "アーケン",
      "type": [
        "いわ",
        "ひこう"
      ],
      "base": {
        "HP": 55,
        "Attack": 112,
        "Defense": 45,
        "Sp. Attack": 74,
        "Sp. Defense": 45,
        "Speed": 70
      }
    },
    {
      "id": 567,
      "name": "アーケオス",
      "type": [
        "いわ",
        "ひこう"
      ],
      "base": {
        "HP": 75,
        "Attack": 140,
        "Defense": 65,
        "Sp. Attack": 112,
        "Sp. Defense": 65,
        "Speed": 110
      }
    },
    {
      "id": 568,
      "name": "ヤブクロン",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 62,
        "Sp. Attack": 40,
        "Sp. Defense": 62,
        "Speed": 65
      }
    },
    {
      "id": 569,
      "name": "ダストダス",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 80,
        "Attack": 95,
        "Defense": 82,
        "Sp. Attack": 60,
        "Sp. Defense": 82,
        "Speed": 75
      }
    },
    {
      "id": 570,
      "name": "ゾロア",
      "type": [
        "あく"
      ],
      "base": {
        "HP": 40,
        "Attack": 65,
        "Defense": 40,
        "Sp. Attack": 80,
        "Sp. Defense": 40,
        "Speed": 65
      }
    },
    {
      "id": 571,
      "name": "ゾロアーク",
      "type": [
        "あく"
      ],
      "base": {
        "HP": 60,
        "Attack": 105,
        "Defense": 60,
        "Sp. Attack": 120,
        "Sp. Defense": 60,
        "Speed": 105
      }
    },
    {
      "id": 572,
      "name": "チラーミィ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 55,
        "Attack": 50,
        "Defense": 40,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 75
      }
    },
    {
      "id": 573,
      "name": "チラチーノ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 75,
        "Attack": 95,
        "Defense": 60,
        "Sp. Attack": 65,
        "Sp. Defense": 60,
        "Speed": 115
      }
    },
    {
      "id": 574,
      "name": "ゴチム",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 50,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 45
      }
    },
    {
      "id": 575,
      "name": "ゴチミル",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 70,
        "Sp. Attack": 75,
        "Sp. Defense": 85,
        "Speed": 55
      }
    },
    {
      "id": 576,
      "name": "ゴチルゼル",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 70,
        "Attack": 55,
        "Defense": 95,
        "Sp. Attack": 95,
        "Sp. Defense": 110,
        "Speed": 65
      }
    },
    {
      "id": 577,
      "name": "ユニラン",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 40,
        "Sp. Attack": 105,
        "Sp. Defense": 50,
        "Speed": 20
      }
    },
    {
      "id": 578,
      "name": "ダブラン",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 65,
        "Attack": 40,
        "Defense": 50,
        "Sp. Attack": 125,
        "Sp. Defense": 60,
        "Speed": 30
      }
    },
    {
      "id": 579,
      "name": "ランクルス",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 110,
        "Attack": 65,
        "Defense": 75,
        "Sp. Attack": 125,
        "Sp. Defense": 85,
        "Speed": 30
      }
    },
    {
      "id": 580,
      "name": "コアルヒー",
      "type": [
        "みず",
        "ひこう"
      ],
      "base": {
        "HP": 62,
        "Attack": 44,
        "Defense": 50,
        "Sp. Attack": 44,
        "Sp. Defense": 50,
        "Speed": 55
      }
    },
    {
      "id": 581,
      "name": "スワンナ",
      "type": [
        "みず",
        "ひこう"
      ],
      "base": {
        "HP": 75,
        "Attack": 87,
        "Defense": 63,
        "Sp. Attack": 87,
        "Sp. Defense": 63,
        "Speed": 98
      }
    },
    {
      "id": 582,
      "name": "バニプッチ",
      "type": [
        "こおり"
      ],
      "base": {
        "HP": 36,
        "Attack": 50,
        "Defense": 50,
        "Sp. Attack": 65,
        "Sp. Defense": 60,
        "Speed": 44
      }
    },
    {
      "id": 583,
      "name": "バニリッチ",
      "type": [
        "こおり"
      ],
      "base": {
        "HP": 51,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 80,
        "Sp. Defense": 75,
        "Speed": 59
      }
    },
    {
      "id": 584,
      "name": "バイバニラ",
      "type": [
        "こおり"
      ],
      "base": {
        "HP": 71,
        "Attack": 95,
        "Defense": 85,
        "Sp. Attack": 110,
        "Sp. Defense": 95,
        "Speed": 79
      }
    },
    {
      "id": 585,
      "name": "シキジカ",
      "type": [
        "ノーマル",
        "くさ"
      ],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 75
      }
    },
    {
      "id": 586,
      "name": "メブキジカ",
      "type": [
        "ノーマル",
        "くさ"
      ],
      "base": {
        "HP": 80,
        "Attack": 100,
        "Defense": 70,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 95
      }
    },
    {
      "id": 587,
      "name": "エモンガ",
      "type": [
        "でんき",
        "ひこう"
      ],
      "base": {
        "HP": 55,
        "Attack": 75,
        "Defense": 60,
        "Sp. Attack": 75,
        "Sp. Defense": 60,
        "Speed": 103
      }
    },
    {
      "id": 588,
      "name": "カブルモ",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 45,
        "Sp. Attack": 40,
        "Sp. Defense": 45,
        "Speed": 60
      }
    },
    {
      "id": 589,
      "name": "シュバルゴ",
      "type": [
        "むし",
        "はがね"
      ],
      "base": {
        "HP": 70,
        "Attack": 135,
        "Defense": 105,
        "Sp. Attack": 60,
        "Sp. Defense": 105,
        "Speed": 20
      }
    },
    {
      "id": 590,
      "name": "タマゲタケ",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 69,
        "Attack": 55,
        "Defense": 45,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 15
      }
    },
    {
      "id": 591,
      "name": "モロバレル",
      "type": [
        "くさ",
        "どく"
      ],
      "base": {
        "HP": 114,
        "Attack": 85,
        "Defense": 70,
        "Sp. Attack": 85,
        "Sp. Defense": 80,
        "Speed": 30
      }
    },
    {
      "id": 592,
      "name": "プルリル",
      "type": [
        "みず",
        "ゴースト"
      ],
      "base": {
        "HP": 55,
        "Attack": 40,
        "Defense": 50,
        "Sp. Attack": 65,
        "Sp. Defense": 85,
        "Speed": 40
      }
    },
    {
      "id": 593,
      "name": "ブルンゲル",
      "type": [
        "みず",
        "ゴースト"
      ],
      "base": {
        "HP": 100,
        "Attack": 60,
        "Defense": 70,
        "Sp. Attack": 85,
        "Sp. Defense": 105,
        "Speed": 60
      }
    },
    {
      "id": 594,
      "name": "ママンボウ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 165,
        "Attack": 75,
        "Defense": 80,
        "Sp. Attack": 40,
        "Sp. Defense": 45,
        "Speed": 65
      }
    },
    {
      "id": 595,
      "name": "バチュル",
      "type": [
        "むし",
        "でんき"
      ],
      "base": {
        "HP": 50,
        "Attack": 47,
        "Defense": 50,
        "Sp. Attack": 57,
        "Sp. Defense": 50,
        "Speed": 65
      }
    },
    {
      "id": 596,
      "name": "デンチュラ",
      "type": [
        "むし",
        "でんき"
      ],
      "base": {
        "HP": 70,
        "Attack": 77,
        "Defense": 60,
        "Sp. Attack": 97,
        "Sp. Defense": 60,
        "Speed": 108
      }
    },
    {
      "id": 597,
      "name": "テッシード",
      "type": [
        "くさ",
        "はがね"
      ],
      "base": {
        "HP": 44,
        "Attack": 50,
        "Defense": 91,
        "Sp. Attack": 24,
        "Sp. Defense": 86,
        "Speed": 10
      }
    },
    {
      "id": 598,
      "name": "ナットレイ",
      "type": [
        "くさ",
        "はがね"
      ],
      "base": {
        "HP": 74,
        "Attack": 94,
        "Defense": 131,
        "Sp. Attack": 54,
        "Sp. Defense": 116,
        "Speed": 20
      }
    },
    {
      "id": 599,
      "name": "ギアル",
      "type": [
        "はがね"
      ],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 70,
        "Sp. Attack": 45,
        "Sp. Defense": 60,
        "Speed": 30
      }
    },
    {
      "id": 600,
      "name": "ギギアル",
      "type": [
        "はがね"
      ],
      "base": {
        "HP": 60,
        "Attack": 80,
        "Defense": 95,
        "Sp. Attack": 70,
        "Sp. Defense": 85,
        "Speed": 50
      }
    },
    {
      "id": 601,
      "name": "ギギギアル",
      "type": [
        "はがね"
      ],
      "base": {
        "HP": 60,
        "Attack": 100,
        "Defense": 115,
        "Sp. Attack": 70,
        "Sp. Defense": 85,
        "Speed": 90
      }
    },
    {
      "id": 602,
      "name": "シビシラス",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 35,
        "Attack": 55,
        "Defense": 40,
        "Sp. Attack": 45,
        "Sp. Defense": 40,
        "Speed": 60
      }
    },
    {
      "id": 603,
      "name": "シビビール",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 65,
        "Attack": 85,
        "Defense": 70,
        "Sp. Attack": 75,
        "Sp. Defense": 70,
        "Speed": 40
      }
    },
    {
      "id": 604,
      "name": "シビルドン",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 85,
        "Attack": 115,
        "Defense": 80,
        "Sp. Attack": 105,
        "Sp. Defense": 80,
        "Speed": 50
      }
    },
    {
      "id": 605,
      "name": "リグレー",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 55,
        "Attack": 55,
        "Defense": 55,
        "Sp. Attack": 85,
        "Sp. Defense": 55,
        "Speed": 30
      }
    },
    {
      "id": 606,
      "name": "オーベム",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 75,
        "Attack": 75,
        "Defense": 75,
        "Sp. Attack": 125,
        "Sp. Defense": 95,
        "Speed": 40
      }
    },
    {
      "id": 607,
      "name": "ヒトモシ",
      "type": [
        "ゴースト",
        "ほのお"
      ],
      "base": {
        "HP": 50,
        "Attack": 30,
        "Defense": 55,
        "Sp. Attack": 65,
        "Sp. Defense": 55,
        "Speed": 20
      }
    },
    {
      "id": 608,
      "name": "ランプラー",
      "type": [
        "ゴースト",
        "ほのお"
      ],
      "base": {
        "HP": 60,
        "Attack": 40,
        "Defense": 60,
        "Sp. Attack": 95,
        "Sp. Defense": 60,
        "Speed": 55
      }
    },
    {
      "id": 609,
      "name": "シャンデラ",
      "type": [
        "ゴースト",
        "ほのお"
      ],
      "base": {
        "HP": 60,
        "Attack": 55,
        "Defense": 90,
        "Sp. Attack": 145,
        "Sp. Defense": 90,
        "Speed": 80
      }
    },
    {
      "id": 610,
      "name": "キバゴ",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 46,
        "Attack": 87,
        "Defense": 60,
        "Sp. Attack": 30,
        "Sp. Defense": 40,
        "Speed": 57
      }
    },
    {
      "id": 611,
      "name": "オノンド",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 66,
        "Attack": 117,
        "Defense": 70,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 67
      }
    },
    {
      "id": 612,
      "name": "オノノクス",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 76,
        "Attack": 147,
        "Defense": 90,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 97
      }
    },
    {
      "id": 613,
      "name": "クマシュン",
      "type": [
        "こおり"
      ],
      "base": {
        "HP": 55,
        "Attack": 70,
        "Defense": 40,
        "Sp. Attack": 60,
        "Sp. Defense": 40,
        "Speed": 40
      }
    },
    {
      "id": 614,
      "name": "ツンベアー",
      "type": [
        "こおり"
      ],
      "base": {
        "HP": 95,
        "Attack": 130,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 80,
        "Speed": 50
      }
    },
    {
      "id": 615,
      "name": "フリージオ",
      "type": [
        "こおり"
      ],
      "base": {
        "HP": 80,
        "Attack": 50,
        "Defense": 50,
        "Sp. Attack": 95,
        "Sp. Defense": 135,
        "Speed": 105
      }
    },
    {
      "id": 616,
      "name": "チョボマキ",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 50,
        "Attack": 40,
        "Defense": 85,
        "Sp. Attack": 40,
        "Sp. Defense": 65,
        "Speed": 25
      }
    },
    {
      "id": 617,
      "name": "アギルダー",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 80,
        "Attack": 70,
        "Defense": 40,
        "Sp. Attack": 100,
        "Sp. Defense": 60,
        "Speed": 145
      }
    },
    {
      "id": 618,
      "name": "マッギョ",
      "type": [
        "じめん",
        "でんき"
      ],
      "base": {
        "HP": 109,
        "Attack": 66,
        "Defense": 84,
        "Sp. Attack": 81,
        "Sp. Defense": 99,
        "Speed": 32
      }
    },
    {
      "id": 619,
      "name": "コジョフー",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 45,
        "Attack": 85,
        "Defense": 50,
        "Sp. Attack": 55,
        "Sp. Defense": 50,
        "Speed": 65
      }
    },
    {
      "id": 620,
      "name": "コジョンド",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 65,
        "Attack": 125,
        "Defense": 60,
        "Sp. Attack": 95,
        "Sp. Defense": 60,
        "Speed": 105
      }
    },
    {
      "id": 621,
      "name": "クリムガン",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 77,
        "Attack": 120,
        "Defense": 90,
        "Sp. Attack": 60,
        "Sp. Defense": 90,
        "Speed": 48
      }
    },
    {
      "id": 622,
      "name": "ゴビット",
      "type": [
        "じめん",
        "ゴースト"
      ],
      "base": {
        "HP": 59,
        "Attack": 74,
        "Defense": 50,
        "Sp. Attack": 35,
        "Sp. Defense": 50,
        "Speed": 35
      }
    },
    {
      "id": 623,
      "name": "ゴルーグ",
      "type": [
        "じめん",
        "ゴースト"
      ],
      "base": {
        "HP": 89,
        "Attack": 124,
        "Defense": 80,
        "Sp. Attack": 55,
        "Sp. Defense": 80,
        "Speed": 55
      }
    },
    {
      "id": 624,
      "name": "コマタナ",
      "type": [
        "あく",
        "はがね"
      ],
      "base": {
        "HP": 45,
        "Attack": 85,
        "Defense": 70,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 60
      }
    },
    {
      "id": 625,
      "name": "キリキザン",
      "type": [
        "あく",
        "はがね"
      ],
      "base": {
        "HP": 65,
        "Attack": 125,
        "Defense": 100,
        "Sp. Attack": 60,
        "Sp. Defense": 70,
        "Speed": 70
      }
    },
    {
      "id": 626,
      "name": "バッフロン",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 95,
        "Attack": 110,
        "Defense": 95,
        "Sp. Attack": 40,
        "Sp. Defense": 95,
        "Speed": 55
      }
    },
    {
      "id": 627,
      "name": "ワシボン",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 70,
        "Attack": 83,
        "Defense": 50,
        "Sp. Attack": 37,
        "Sp. Defense": 50,
        "Speed": 60
      }
    },
    {
      "id": 628,
      "name": "ウォーグル",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 100,
        "Attack": 123,
        "Defense": 75,
        "Sp. Attack": 57,
        "Sp. Defense": 75,
        "Speed": 80
      }
    },
    {
      "id": 629,
      "name": "バルチャイ",
      "type": [
        "あく",
        "ひこう"
      ],
      "base": {
        "HP": 70,
        "Attack": 55,
        "Defense": 75,
        "Sp. Attack": 45,
        "Sp. Defense": 65,
        "Speed": 60
      }
    },
    {
      "id": 630,
      "name": "バルジーナ",
      "type": [
        "あく",
        "ひこう"
      ],
      "base": {
        "HP": 110,
        "Attack": 65,
        "Defense": 105,
        "Sp. Attack": 55,
        "Sp. Defense": 95,
        "Speed": 80
      }
    },
    {
      "id": 631,
      "name": "クイタラン",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 85,
        "Attack": 97,
        "Defense": 66,
        "Sp. Attack": 105,
        "Sp. Defense": 66,
        "Speed": 65
      }
    },
    {
      "id": 632,
      "name": "アイアント",
      "type": [
        "むし",
        "はがね"
      ],
      "base": {
        "HP": 58,
        "Attack": 109,
        "Defense": 112,
        "Sp. Attack": 48,
        "Sp. Defense": 48,
        "Speed": 109
      }
    },
    {
      "id": 633,
      "name": "モノズ",
      "type": [
        "あく",
        "ドラゴン"
      ],
      "base": {
        "HP": 52,
        "Attack": 65,
        "Defense": 50,
        "Sp. Attack": 45,
        "Sp. Defense": 50,
        "Speed": 38
      }
    },
    {
      "id": 634,
      "name": "ジヘッド",
      "type": [
        "あく",
        "ドラゴン"
      ],
      "base": {
        "HP": 72,
        "Attack": 85,
        "Defense": 70,
        "Sp. Attack": 65,
        "Sp. Defense": 70,
        "Speed": 58
      }
    },
    {
      "id": 635,
      "name": "サザンドラ",
      "type": [
        "あく",
        "ドラゴン"
      ],
      "base": {
        "HP": 92,
        "Attack": 105,
        "Defense": 90,
        "Sp. Attack": 125,
        "Sp. Defense": 90,
        "Speed": 98
      }
    },
    {
      "id": 636,
      "name": "メラルバ",
      "type": [
        "むし",
        "ほのお"
      ],
      "base": {
        "HP": 55,
        "Attack": 85,
        "Defense": 55,
        "Sp. Attack": 50,
        "Sp. Defense": 55,
        "Speed": 60
      }
    },
    {
      "id": 637,
      "name": "ウルガモス",
      "type": [
        "むし",
        "ほのお"
      ],
      "base": {
        "HP": 85,
        "Attack": 60,
        "Defense": 65,
        "Sp. Attack": 135,
        "Sp. Defense": 105,
        "Speed": 100
      }
    },
    {
      "id": 638,
      "name": "コバルオン",
      "type": [
        "はがね",
        "かくとう"
      ],
      "base": {
        "HP": 91,
        "Attack": 90,
        "Defense": 129,
        "Sp. Attack": 90,
        "Sp. Defense": 72,
        "Speed": 108
      }
    },
    {
      "id": 639,
      "name": "テラキオン",
      "type": [
        "いわ",
        "かくとう"
      ],
      "base": {
        "HP": 91,
        "Attack": 129,
        "Defense": 90,
        "Sp. Attack": 72,
        "Sp. Defense": 90,
        "Speed": 108
      }
    },
    {
      "id": 640,
      "name": "ビリジオン",
      "type": [
        "くさ",
        "かくとう"
      ],
      "base": {
        "HP": 91,
        "Attack": 90,
        "Defense": 72,
        "Sp. Attack": 90,
        "Sp. Defense": 129,
        "Speed": 108
      }
    },
    {
      "id": 641,
      "name": "トルネロス",
      "type": [
        "ひこう"
      ],
      "base": {
        "HP": 79,
        "Attack": 115,
        "Defense": 70,
        "Sp. Attack": 125,
        "Sp. Defense": 80,
        "Speed": 111
      }
    },
    {
      "id": 642,
      "name": "ボルトロス",
      "type": [
        "でんき",
        "ひこう"
      ],
      "base": {
        "HP": 79,
        "Attack": 115,
        "Defense": 70,
        "Sp. Attack": 125,
        "Sp. Defense": 80,
        "Speed": 111
      }
    },
    {
      "id": 643,
      "name": "レシラム",
      "type": [
        "ドラゴン",
        "ほのお"
      ],
      "base": {
        "HP": 100,
        "Attack": 120,
        "Defense": 100,
        "Sp. Attack": 150,
        "Sp. Defense": 120,
        "Speed": 90
      }
    },
    {
      "id": 644,
      "name": "ゼクロム",
      "type": [
        "ドラゴン",
        "でんき"
      ],
      "base": {
        "HP": 100,
        "Attack": 150,
        "Defense": 120,
        "Sp. Attack": 120,
        "Sp. Defense": 100,
        "Speed": 90
      }
    },
    {
      "id": 645,
      "name": "ランドロス",
      "type": [
        "じめん",
        "ひこう"
      ],
      "base": {
        "HP": 89,
        "Attack": 125,
        "Defense": 90,
        "Sp. Attack": 115,
        "Sp. Defense": 80,
        "Speed": 101
      }
    },
    {
      "id": 646,
      "name": "キュレム",
      "type": [
        "ドラゴン",
        "こおり"
      ],
      "base": {
        "HP": 125,
        "Attack": 130,
        "Defense": 90,
        "Sp. Attack": 130,
        "Sp. Defense": 90,
        "Speed": 95
      }
    },
    {
      "id": 647,
      "name": "ケルディオ",
      "type": [
        "みず",
        "かくとう"
      ],
      "base": {
        "HP": 91,
        "Attack": 72,
        "Defense": 90,
        "Sp. Attack": 129,
        "Sp. Defense": 90,
        "Speed": 108
      }
    },
    {
      "id": 648,
      "name": "メロエッタ",
      "type": [
        "ノーマル",
        "エスパー"
      ],
      "base": {
        "HP": 100,
        "Attack": 77,
        "Defense": 77,
        "Sp. Attack": 128,
        "Sp. Defense": 128,
        "Speed": 90
      }
    },
    {
      "id": 649,
      "name": "ゲノセクト",
      "type": [
        "むし",
        "はがね"
      ],
      "base": {
        "HP": 71,
        "Attack": 120,
        "Defense": 95,
        "Sp. Attack": 120,
        "Sp. Defense": 95,
        "Speed": 99
      }
    },
    {
      "id": 650,
      "name": "ハリマロン",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 56,
        "Attack": 61,
        "Defense": 65,
        "Sp. Attack": 48,
        "Sp. Defense": 45,
        "Speed": 38
      }
    },
    {
      "id": 651,
      "name": "ハリボーグ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 61,
        "Attack": 78,
        "Defense": 95,
        "Sp. Attack": 56,
        "Sp. Defense": 58,
        "Speed": 57
      }
    },
    {
      "id": 652,
      "name": "ブリガロン",
      "type": [
        "くさ",
        "かくとう"
      ],
      "base": {
        "HP": 88,
        "Attack": 107,
        "Defense": 122,
        "Sp. Attack": 74,
        "Sp. Defense": 75,
        "Speed": 64
      }
    },
    {
      "id": 653,
      "name": "フォッコ",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 40,
        "Sp. Attack": 62,
        "Sp. Defense": 60,
        "Speed": 60
      }
    },
    {
      "id": 654,
      "name": "テールナー",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 59,
        "Attack": 59,
        "Defense": 58,
        "Sp. Attack": 90,
        "Sp. Defense": 70,
        "Speed": 73
      }
    },
    {
      "id": 655,
      "name": "マフォクシー",
      "type": [
        "ほのお",
        "エスパー"
      ],
      "base": {
        "HP": 75,
        "Attack": 69,
        "Defense": 72,
        "Sp. Attack": 114,
        "Sp. Defense": 100,
        "Speed": 104
      }
    },
    {
      "id": 656,
      "name": "ケロマツ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 41,
        "Attack": 56,
        "Defense": 40,
        "Sp. Attack": 62,
        "Sp. Defense": 44,
        "Speed": 71
      }
    },
    {
      "id": 657,
      "name": "ゲコガシラ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 54,
        "Attack": 63,
        "Defense": 52,
        "Sp. Attack": 83,
        "Sp. Defense": 56,
        "Speed": 97
      }
    },
    {
      "id": 658,
      "name": "ゲッコウガ",
      "type": [
        "みず",
        "あく"
      ],
      "base": {
        "HP": 72,
        "Attack": 95,
        "Defense": 67,
        "Sp. Attack": 103,
        "Sp. Defense": 71,
        "Speed": 122
      }
    },
    {
      "id": 659,
      "name": "ホルビー",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 38,
        "Attack": 36,
        "Defense": 38,
        "Sp. Attack": 32,
        "Sp. Defense": 36,
        "Speed": 57
      }
    },
    {
      "id": 660,
      "name": "ホルード",
      "type": [
        "ノーマル",
        "じめん"
      ],
      "base": {
        "HP": 85,
        "Attack": 56,
        "Defense": 77,
        "Sp. Attack": 50,
        "Sp. Defense": 77,
        "Speed": 78
      }
    },
    {
      "id": 661,
      "name": "ヤヤコマ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 45,
        "Attack": 50,
        "Defense": 43,
        "Sp. Attack": 40,
        "Sp. Defense": 38,
        "Speed": 62
      }
    },
    {
      "id": 662,
      "name": "ヒノヤコマ",
      "type": [
        "ほのお",
        "ひこう"
      ],
      "base": {
        "HP": 62,
        "Attack": 73,
        "Defense": 55,
        "Sp. Attack": 56,
        "Sp. Defense": 52,
        "Speed": 84
      }
    },
    {
      "id": 663,
      "name": "ファイアロー",
      "type": [
        "ほのお",
        "ひこう"
      ],
      "base": {
        "HP": 78,
        "Attack": 81,
        "Defense": 71,
        "Sp. Attack": 74,
        "Sp. Defense": 69,
        "Speed": 126
      }
    },
    {
      "id": 664,
      "name": "コフキムシ",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 38,
        "Attack": 35,
        "Defense": 40,
        "Sp. Attack": 27,
        "Sp. Defense": 25,
        "Speed": 35
      }
    },
    {
      "id": 665,
      "name": "コフーライ",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 45,
        "Attack": 22,
        "Defense": 60,
        "Sp. Attack": 27,
        "Sp. Defense": 30,
        "Speed": 29
      }
    },
    {
      "id": 666,
      "name": "ビビヨン",
      "type": [
        "むし",
        "ひこう"
      ],
      "base": {
        "HP": 80,
        "Attack": 52,
        "Defense": 50,
        "Sp. Attack": 90,
        "Sp. Defense": 50,
        "Speed": 89
      }
    },
    {
      "id": 667,
      "name": "シシコ",
      "type": [
        "ほのお",
        "ノーマル"
      ],
      "base": {
        "HP": 62,
        "Attack": 50,
        "Defense": 58,
        "Sp. Attack": 73,
        "Sp. Defense": 54,
        "Speed": 72
      }
    },
    {
      "id": 668,
      "name": "カエンジシ",
      "type": [
        "ほのお",
        "ノーマル"
      ],
      "base": {
        "HP": 86,
        "Attack": 68,
        "Defense": 72,
        "Sp. Attack": 109,
        "Sp. Defense": 66,
        "Speed": 106
      }
    },
    {
      "id": 669,
      "name": "フラベベ",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 44,
        "Attack": 38,
        "Defense": 39,
        "Sp. Attack": 61,
        "Sp. Defense": 79,
        "Speed": 42
      }
    },
    {
      "id": 670,
      "name": "フラエッテ",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 54,
        "Attack": 45,
        "Defense": 47,
        "Sp. Attack": 75,
        "Sp. Defense": 98,
        "Speed": 52
      }
    },
    {
      "id": 671,
      "name": "フラージェス",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 78,
        "Attack": 65,
        "Defense": 68,
        "Sp. Attack": 112,
        "Sp. Defense": 154,
        "Speed": 75
      }
    },
    {
      "id": 672,
      "name": "メェークル",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 66,
        "Attack": 65,
        "Defense": 48,
        "Sp. Attack": 62,
        "Sp. Defense": 57,
        "Speed": 52
      }
    },
    {
      "id": 673,
      "name": "ゴーゴート",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 123,
        "Attack": 100,
        "Defense": 62,
        "Sp. Attack": 97,
        "Sp. Defense": 81,
        "Speed": 68
      }
    },
    {
      "id": 674,
      "name": "ヤンチャム",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 67,
        "Attack": 82,
        "Defense": 62,
        "Sp. Attack": 46,
        "Sp. Defense": 48,
        "Speed": 43
      }
    },
    {
      "id": 675,
      "name": "ゴロンダ",
      "type": [
        "かくとう",
        "あく"
      ],
      "base": {
        "HP": 95,
        "Attack": 124,
        "Defense": 78,
        "Sp. Attack": 69,
        "Sp. Defense": 71,
        "Speed": 58
      }
    },
    {
      "id": 676,
      "name": "トリミアン",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 75,
        "Attack": 80,
        "Defense": 60,
        "Sp. Attack": 65,
        "Sp. Defense": 90,
        "Speed": 102
      }
    },
    {
      "id": 677,
      "name": "ニャスパー",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 62,
        "Attack": 48,
        "Defense": 54,
        "Sp. Attack": 63,
        "Sp. Defense": 60,
        "Speed": 68
      }
    },
    {
      "id": 678,
      "name": "ニャオニクス",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 74,
        "Attack": 48,
        "Defense": 76,
        "Sp. Attack": 83,
        "Sp. Defense": 81,
        "Speed": 104
      }
    },
    {
      "id": 679,
      "name": "ヒトツキ",
      "type": [
        "はがね",
        "ゴースト"
      ],
      "base": {
        "HP": 45,
        "Attack": 80,
        "Defense": 100,
        "Sp. Attack": 35,
        "Sp. Defense": 37,
        "Speed": 28
      }
    },
    {
      "id": 680,
      "name": "ニダンギル",
      "type": [
        "はがね",
        "ゴースト"
      ],
      "base": {
        "HP": 59,
        "Attack": 110,
        "Defense": 150,
        "Sp. Attack": 45,
        "Sp. Defense": 49,
        "Speed": 35
      }
    },
    {
      "id": 681,
      "name": "ギルガルド",
      "type": [
        "はがね",
        "ゴースト"
      ],
      "base": {
        "HP": 60,
        "Attack": 50,
        "Defense": 150,
        "Sp. Attack": 50,
        "Sp. Defense": 150,
        "Speed": 60
      }
    },
    {
      "id": 682,
      "name": "シュシュプ",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 78,
        "Attack": 52,
        "Defense": 60,
        "Sp. Attack": 63,
        "Sp. Defense": 65,
        "Speed": 23
      }
    },
    {
      "id": 683,
      "name": "フレフワン",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 101,
        "Attack": 72,
        "Defense": 72,
        "Sp. Attack": 99,
        "Sp. Defense": 89,
        "Speed": 29
      }
    },
    {
      "id": 684,
      "name": "ペロッパフ",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 62,
        "Attack": 48,
        "Defense": 66,
        "Sp. Attack": 59,
        "Sp. Defense": 57,
        "Speed": 49
      }
    },
    {
      "id": 685,
      "name": "ペロリーム",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 82,
        "Attack": 80,
        "Defense": 86,
        "Sp. Attack": 85,
        "Sp. Defense": 75,
        "Speed": 72
      }
    },
    {
      "id": 686,
      "name": "マーイーカ",
      "type": [
        "あく",
        "エスパー"
      ],
      "base": {
        "HP": 53,
        "Attack": 54,
        "Defense": 53,
        "Sp. Attack": 37,
        "Sp. Defense": 46,
        "Speed": 45
      }
    },
    {
      "id": 687,
      "name": "カラマネロ",
      "type": [
        "あく",
        "エスパー"
      ],
      "base": {
        "HP": 86,
        "Attack": 92,
        "Defense": 88,
        "Sp. Attack": 68,
        "Sp. Defense": 75,
        "Speed": 73
      }
    },
    {
      "id": 688,
      "name": "カメテテ",
      "type": [
        "いわ",
        "みず"
      ],
      "base": {
        "HP": 42,
        "Attack": 52,
        "Defense": 67,
        "Sp. Attack": 39,
        "Sp. Defense": 56,
        "Speed": 50
      }
    },
    {
      "id": 689,
      "name": "ガメノデス",
      "type": [
        "いわ",
        "みず"
      ],
      "base": {
        "HP": 72,
        "Attack": 105,
        "Defense": 115,
        "Sp. Attack": 54,
        "Sp. Defense": 86,
        "Speed": 68
      }
    },
    {
      "id": 690,
      "name": "クズモー",
      "type": [
        "どく",
        "みず"
      ],
      "base": {
        "HP": 50,
        "Attack": 60,
        "Defense": 60,
        "Sp. Attack": 60,
        "Sp. Defense": 60,
        "Speed": 30
      }
    },
    {
      "id": 691,
      "name": "ドラミドロ",
      "type": [
        "どく",
        "ドラゴン"
      ],
      "base": {
        "HP": 65,
        "Attack": 75,
        "Defense": 90,
        "Sp. Attack": 97,
        "Sp. Defense": 123,
        "Speed": 44
      }
    },
    {
      "id": 692,
      "name": "ウデッポウ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 62,
        "Sp. Attack": 58,
        "Sp. Defense": 63,
        "Speed": 44
      }
    },
    {
      "id": 693,
      "name": "ブロスター",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 71,
        "Attack": 73,
        "Defense": 88,
        "Sp. Attack": 120,
        "Sp. Defense": 89,
        "Speed": 59
      }
    },
    {
      "id": 694,
      "name": "エリキテル",
      "type": [
        "でんき",
        "ノーマル"
      ],
      "base": {
        "HP": 44,
        "Attack": 38,
        "Defense": 33,
        "Sp. Attack": 61,
        "Sp. Defense": 43,
        "Speed": 70
      }
    },
    {
      "id": 695,
      "name": "エレザード",
      "type": [
        "でんき",
        "ノーマル"
      ],
      "base": {
        "HP": 62,
        "Attack": 55,
        "Defense": 52,
        "Sp. Attack": 109,
        "Sp. Defense": 94,
        "Speed": 109
      }
    },
    {
      "id": 696,
      "name": "チゴラス",
      "type": [
        "いわ",
        "ドラゴン"
      ],
      "base": {
        "HP": 58,
        "Attack": 89,
        "Defense": 77,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 48
      }
    },
    {
      "id": 697,
      "name": "ガチゴラス",
      "type": [
        "いわ",
        "ドラゴン"
      ],
      "base": {
        "HP": 82,
        "Attack": 121,
        "Defense": 119,
        "Sp. Attack": 69,
        "Sp. Defense": 59,
        "Speed": 71
      }
    },
    {
      "id": 698,
      "name": "アマルス",
      "type": [
        "いわ",
        "こおり"
      ],
      "base": {
        "HP": 77,
        "Attack": 59,
        "Defense": 50,
        "Sp. Attack": 67,
        "Sp. Defense": 63,
        "Speed": 46
      }
    },
    {
      "id": 699,
      "name": "アマルルガ",
      "type": [
        "いわ",
        "こおり"
      ],
      "base": {
        "HP": 123,
        "Attack": 77,
        "Defense": 72,
        "Sp. Attack": 99,
        "Sp. Defense": 92,
        "Speed": 58
      }
    },
    {
      "id": 700,
      "name": "ニンフィア",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 95,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 110,
        "Sp. Defense": 130,
        "Speed": 60
      }
    },
    {
      "id": 701,
      "name": "ルチャブル",
      "type": [
        "かくとう",
        "ひこう"
      ],
      "base": {
        "HP": 78,
        "Attack": 92,
        "Defense": 75,
        "Sp. Attack": 74,
        "Sp. Defense": 63,
        "Speed": 118
      }
    },
    {
      "id": 702,
      "name": "デデンネ",
      "type": [
        "でんき",
        "フェアリー"
      ],
      "base": {
        "HP": 67,
        "Attack": 58,
        "Defense": 57,
        "Sp. Attack": 81,
        "Sp. Defense": 67,
        "Speed": 101
      }
    },
    {
      "id": 703,
      "name": "メレシー",
      "type": [
        "いわ",
        "フェアリー"
      ],
      "base": {
        "HP": 50,
        "Attack": 50,
        "Defense": 150,
        "Sp. Attack": 50,
        "Sp. Defense": 150,
        "Speed": 50
      }
    },
    {
      "id": 704,
      "name": "ヌメラ",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 45,
        "Attack": 50,
        "Defense": 35,
        "Sp. Attack": 55,
        "Sp. Defense": 75,
        "Speed": 40
      }
    },
    {
      "id": 705,
      "name": "ヌメイル",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 68,
        "Attack": 75,
        "Defense": 53,
        "Sp. Attack": 83,
        "Sp. Defense": 113,
        "Speed": 60
      }
    },
    {
      "id": 706,
      "name": "ヌメルゴン",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 90,
        "Attack": 100,
        "Defense": 70,
        "Sp. Attack": 110,
        "Sp. Defense": 150,
        "Speed": 80
      }
    },
    {
      "id": 707,
      "name": "クレッフィ",
      "type": [
        "はがね",
        "フェアリー"
      ],
      "base": {
        "HP": 57,
        "Attack": 80,
        "Defense": 91,
        "Sp. Attack": 80,
        "Sp. Defense": 87,
        "Speed": 75
      }
    },
    {
      "id": 708,
      "name": "ボクレー",
      "type": [
        "ゴースト",
        "くさ"
      ],
      "base": {
        "HP": 43,
        "Attack": 70,
        "Defense": 48,
        "Sp. Attack": 50,
        "Sp. Defense": 60,
        "Speed": 38
      }
    },
    {
      "id": 709,
      "name": "オーロット",
      "type": [
        "ゴースト",
        "くさ"
      ],
      "base": {
        "HP": 85,
        "Attack": 110,
        "Defense": 76,
        "Sp. Attack": 65,
        "Sp. Defense": 82,
        "Speed": 56
      }
    },
    {
      "id": 710,
      "name": "バケッチャ",
      "type": [
        "ゴースト",
        "くさ"
      ],
      "base": {
        "HP": 59,
        "Attack": 66,
        "Defense": 70,
        "Sp. Attack": 44,
        "Sp. Defense": 55,
        "Speed": 41
      }
    },
    {
      "id": 711,
      "name": "パンプジン",
      "type": [
        "ゴースト",
        "くさ"
      ],
      "base": {
        "HP": 85,
        "Attack": 100,
        "Defense": 122,
        "Sp. Attack": 58,
        "Sp. Defense": 75,
        "Speed": 54
      }
    },
    {
      "id": 712,
      "name": "カチコール",
      "type": [
        "こおり"
      ],
      "base": {
        "HP": 55,
        "Attack": 69,
        "Defense": 85,
        "Sp. Attack": 32,
        "Sp. Defense": 35,
        "Speed": 28
      }
    },
    {
      "id": 713,
      "name": "クレベース",
      "type": [
        "こおり"
      ],
      "base": {
        "HP": 95,
        "Attack": 117,
        "Defense": 184,
        "Sp. Attack": 44,
        "Sp. Defense": 46,
        "Speed": 28
      }
    },
    {
      "id": 714,
      "name": "オンバット",
      "type": [
        "ひこう",
        "ドラゴン"
      ],
      "base": {
        "HP": 40,
        "Attack": 30,
        "Defense": 35,
        "Sp. Attack": 45,
        "Sp. Defense": 40,
        "Speed": 55
      }
    },
    {
      "id": 715,
      "name": "オンバーン",
      "type": [
        "ひこう",
        "ドラゴン"
      ],
      "base": {
        "HP": 85,
        "Attack": 70,
        "Defense": 80,
        "Sp. Attack": 97,
        "Sp. Defense": 80,
        "Speed": 123
      }
    },
    {
      "id": 716,
      "name": "ゼルネアス",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 126,
        "Attack": 131,
        "Defense": 95,
        "Sp. Attack": 131,
        "Sp. Defense": 98,
        "Speed": 99
      }
    },
    {
      "id": 717,
      "name": "イベルタル",
      "type": [
        "あく",
        "ひこう"
      ],
      "base": {
        "HP": 126,
        "Attack": 131,
        "Defense": 95,
        "Sp. Attack": 131,
        "Sp. Defense": 98,
        "Speed": 99
      }
    },
    {
      "id": 718,
      "name": "ジガルデ",
      "type": [
        "ドラゴン",
        "じめん"
      ],
      "base": {
        "HP": 108,
        "Attack": 100,
        "Defense": 121,
        "Sp. Attack": 81,
        "Sp. Defense": 95,
        "Speed": 95
      }
    },
    {
      "id": 719,
      "name": "ディアンシー",
      "type": [
        "いわ",
        "フェアリー"
      ],
      "base": {
        "HP": 50,
        "Attack": 100,
        "Defense": 150,
        "Sp. Attack": 100,
        "Sp. Defense": 150,
        "Speed": 50
      }
    },
    {
      "id": 720,
      "name": "フーパ",
      "type": [
        "エスパー",
        "ゴースト"
      ],
      "base": {
        "HP": 80,
        "Attack": 110,
        "Defense": 60,
        "Sp. Attack": 150,
        "Sp. Defense": 130,
        "Speed": 70
      }
    },
    {
      "id": 721,
      "name": "ボルケニオン",
      "type": [
        "ほのお",
        "みず"
      ],
      "base": {
        "HP": 80,
        "Attack": 110,
        "Defense": 120,
        "Sp. Attack": 130,
        "Sp. Defense": 90,
        "Speed": 70
      }
    },
    {
      "id": 722,
      "name": "モクロー",
      "type": [
        "くさ",
        "ひこう"
      ],
      "base": {
        "HP": 68,
        "Attack": 55,
        "Defense": 55,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 42
      }
    },
    {
      "id": 723,
      "name": "フクスロー",
      "type": [
        "くさ",
        "ひこう"
      ],
      "base": {
        "HP": 78,
        "Attack": 75,
        "Defense": 75,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        "Speed": 52
      }
    },
    {
      "id": 724,
      "name": "ジュナイパー",
      "type": [
        "くさ",
        "ゴースト"
      ],
      "base": {
        "HP": 78,
        "Attack": 107,
        "Defense": 75,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 70
      }
    },
    {
      "id": 725,
      "name": "ニャビー",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 45,
        "Attack": 65,
        "Defense": 40,
        "Sp. Attack": 60,
        "Sp. Defense": 40,
        "Speed": 70
      }
    },
    {
      "id": 726,
      "name": "ニャヒート",
      "type": [
        "ほのお"
      ],
      "base": {
        "HP": 65,
        "Attack": 85,
        "Defense": 50,
        "Sp. Attack": 80,
        "Sp. Defense": 50,
        "Speed": 90
      }
    },
    {
      "id": 727,
      "name": "ガオガエン",
      "type": [
        "ほのお",
        "あく"
      ],
      "base": {
        "HP": 95,
        "Attack": 115,
        "Defense": 90,
        "Sp. Attack": 80,
        "Sp. Defense": 90,
        "Speed": 60
      }
    },
    {
      "id": 728,
      "name": "アシマリ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 50,
        "Attack": 54,
        "Defense": 54,
        "Sp. Attack": 66,
        "Sp. Defense": 56,
        "Speed": 40
      }
    },
    {
      "id": 729,
      "name": "オシャマリ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 60,
        "Attack": 69,
        "Defense": 69,
        "Sp. Attack": 91,
        "Sp. Defense": 81,
        "Speed": 50
      }
    },
    {
      "id": 730,
      "name": "アシレーヌ",
      "type": [
        "みず",
        "フェアリー"
      ],
      "base": {
        "HP": 80,
        "Attack": 74,
        "Defense": 74,
        "Sp. Attack": 126,
        "Sp. Defense": 116,
        "Speed": 60
      }
    },
    {
      "id": 731,
      "name": "ツツケラ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 35,
        "Attack": 75,
        "Defense": 30,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 65
      }
    },
    {
      "id": 732,
      "name": "ケララッパ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 55,
        "Attack": 85,
        "Defense": 50,
        "Sp. Attack": 40,
        "Sp. Defense": 50,
        "Speed": 75
      }
    },
    {
      "id": 733,
      "name": "ドデカバシ",
      "type": [
        "ノーマル",
        "ひこう"
      ],
      "base": {
        "HP": 80,
        "Attack": 120,
        "Defense": 75,
        "Sp. Attack": 75,
        "Sp. Defense": 75,
        "Speed": 60
      }
    },
    {
      "id": 734,
      "name": "ヤングース",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 48,
        "Attack": 70,
        "Defense": 30,
        "Sp. Attack": 30,
        "Sp. Defense": 30,
        "Speed": 45
      }
    },
    {
      "id": 735,
      "name": "デカグース",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 88,
        "Attack": 110,
        "Defense": 60,
        "Sp. Attack": 55,
        "Sp. Defense": 60,
        "Speed": 45
      }
    },
    {
      "id": 736,
      "name": "アゴジムシ",
      "type": [
        "むし"
      ],
      "base": {
        "HP": 47,
        "Attack": 62,
        "Defense": 45,
        "Sp. Attack": 55,
        "Sp. Defense": 45,
        "Speed": 46
      }
    },
    {
      "id": 737,
      "name": "デンヂムシ",
      "type": [
        "むし",
        "でんき"
      ],
      "base": {
        "HP": 57,
        "Attack": 82,
        "Defense": 95,
        "Sp. Attack": 55,
        "Sp. Defense": 75,
        "Speed": 36
      }
    },
    {
      "id": 738,
      "name": "クワガノン",
      "type": [
        "むし",
        "でんき"
      ],
      "base": {
        "HP": 77,
        "Attack": 70,
        "Defense": 90,
        "Sp. Attack": 145,
        "Sp. Defense": 75,
        "Speed": 43
      }
    },
    {
      "id": 739,
      "name": "マケンカニ",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 47,
        "Attack": 82,
        "Defense": 57,
        "Sp. Attack": 42,
        "Sp. Defense": 47,
        "Speed": 63
      }
    },
    {
      "id": 740,
      "name": "ケケンカニ",
      "type": [
        "かくとう",
        "こおり"
      ],
      "base": {
        "HP": 97,
        "Attack": 132,
        "Defense": 77,
        "Sp. Attack": 62,
        "Sp. Defense": 67,
        "Speed": 43
      }
    },
    {
      "id": 741,
      "name": "オドリドリ",
      "type": [
        "ほのお",
        "ひこう"
      ],
      "base": {
        "HP": 75,
        "Attack": 70,
        "Defense": 70,
        "Sp. Attack": 98,
        "Sp. Defense": 70,
        "Speed": 93
      }
    },
    {
      "id": 742,
      "name": "アブリー",
      "type": [
        "むし",
        "フェアリー"
      ],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 40,
        "Sp. Attack": 55,
        "Sp. Defense": 40,
        "Speed": 84
      }
    },
    {
      "id": 743,
      "name": "アブリボン",
      "type": [
        "むし",
        "フェアリー"
      ],
      "base": {
        "HP": 60,
        "Attack": 55,
        "Defense": 60,
        "Sp. Attack": 95,
        "Sp. Defense": 70,
        "Speed": 124
      }
    },
    {
      "id": 744,
      "name": "イワンコ",
      "type": [
        "いわ"
      ],
      "base": {
        "HP": 45,
        "Attack": 65,
        "Defense": 40,
        "Sp. Attack": 30,
        "Sp. Defense": 40,
        "Speed": 60
      }
    },
    {
      "id": 745,
      "name": "ルガルガン",
      "type": [
        "いわ"
      ],
      "base": {
        "HP": 75,
        "Attack": 115,
        "Defense": 65,
        "Sp. Attack": 55,
        "Sp. Defense": 65,
        "Speed": 112
      }
    },
    {
      "id": 746,
      "name": "ヨワシ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 45,
        "Attack": 20,
        "Defense": 20,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 40
      }
    },
    {
      "id": 747,
      "name": "ヒドイデ",
      "type": [
        "どく",
        "みず"
      ],
      "base": {
        "HP": 50,
        "Attack": 53,
        "Defense": 62,
        "Sp. Attack": 43,
        "Sp. Defense": 52,
        "Speed": 45
      }
    },
    {
      "id": 748,
      "name": "ドヒドイデ",
      "type": [
        "どく",
        "みず"
      ],
      "base": {
        "HP": 50,
        "Attack": 63,
        "Defense": 152,
        "Sp. Attack": 53,
        "Sp. Defense": 142,
        "Speed": 35
      }
    },
    {
      "id": 749,
      "name": "ドロバンコ",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 70,
        "Attack": 100,
        "Defense": 70,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 45
      }
    },
    {
      "id": 750,
      "name": "バンバドロ",
      "type": [
        "じめん"
      ],
      "base": {
        "HP": 100,
        "Attack": 125,
        "Defense": 100,
        "Sp. Attack": 55,
        "Sp. Defense": 85,
        "Speed": 35
      }
    },
    {
      "id": 751,
      "name": "シズクモ",
      "type": [
        "みず",
        "むし"
      ],
      "base": {
        "HP": 38,
        "Attack": 40,
        "Defense": 52,
        "Sp. Attack": 40,
        "Sp. Defense": 72,
        "Speed": 27
      }
    },
    {
      "id": 752,
      "name": "オニシズクモ",
      "type": [
        "みず",
        "むし"
      ],
      "base": {
        "HP": 68,
        "Attack": 70,
        "Defense": 92,
        "Sp. Attack": 50,
        "Sp. Defense": 132,
        "Speed": 42
      }
    },
    {
      "id": 753,
      "name": "カリキリ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 40,
        "Attack": 55,
        "Defense": 35,
        "Sp. Attack": 50,
        "Sp. Defense": 35,
        "Speed": 35
      }
    },
    {
      "id": 754,
      "name": "ラランテス",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 70,
        "Attack": 105,
        "Defense": 90,
        "Sp. Attack": 80,
        "Sp. Defense": 90,
        "Speed": 45
      }
    },
    {
      "id": 755,
      "name": "ネマシュ",
      "type": [
        "くさ",
        "フェアリー"
      ],
      "base": {
        "HP": 40,
        "Attack": 35,
        "Defense": 55,
        "Sp. Attack": 65,
        "Sp. Defense": 75,
        "Speed": 15
      }
    },
    {
      "id": 756,
      "name": "マシェード",
      "type": [
        "くさ",
        "フェアリー"
      ],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 80,
        "Sp. Attack": 90,
        "Sp. Defense": 100,
        "Speed": 30
      }
    },
    {
      "id": 757,
      "name": "ヤトウモリ",
      "type": [
        "どく",
        "ほのお"
      ],
      "base": {
        "HP": 48,
        "Attack": 44,
        "Defense": 40,
        "Sp. Attack": 71,
        "Sp. Defense": 40,
        "Speed": 77
      }
    },
    {
      "id": 758,
      "name": "エンニュート",
      "type": [
        "どく",
        "ほのお"
      ],
      "base": {
        "HP": 68,
        "Attack": 64,
        "Defense": 60,
        "Sp. Attack": 111,
        "Sp. Defense": 60,
        "Speed": 117
      }
    },
    {
      "id": 759,
      "name": "ヌイコグマ",
      "type": [
        "ノーマル",
        "かくとう"
      ],
      "base": {
        "HP": 70,
        "Attack": 75,
        "Defense": 50,
        "Sp. Attack": 45,
        "Sp. Defense": 50,
        "Speed": 50
      }
    },
    {
      "id": 760,
      "name": "キテルグマ",
      "type": [
        "ノーマル",
        "かくとう"
      ],
      "base": {
        "HP": 120,
        "Attack": 125,
        "Defense": 80,
        "Sp. Attack": 55,
        "Sp. Defense": 60,
        "Speed": 60
      }
    },
    {
      "id": 761,
      "name": "アマカジ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 42,
        "Attack": 30,
        "Defense": 38,
        "Sp. Attack": 30,
        "Sp. Defense": 38,
        "Speed": 32
      }
    },
    {
      "id": 762,
      "name": "アママイコ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 52,
        "Attack": 40,
        "Defense": 48,
        "Sp. Attack": 40,
        "Sp. Defense": 48,
        "Speed": 62
      }
    },
    {
      "id": 763,
      "name": "アマージョ",
      "type": [
        "くさ"
      ],
      "base": {
        "HP": 72,
        "Attack": 120,
        "Defense": 98,
        "Sp. Attack": 50,
        "Sp. Defense": 98,
        "Speed": 72
      }
    },
    {
      "id": 764,
      "name": "キュワワー",
      "type": [
        "フェアリー"
      ],
      "base": {
        "HP": 51,
        "Attack": 52,
        "Defense": 90,
        "Sp. Attack": 82,
        "Sp. Defense": 110,
        "Speed": 100
      }
    },
    {
      "id": 765,
      "name": "ヤレユータン",
      "type": [
        "ノーマル",
        "エスパー"
      ],
      "base": {
        "HP": 90,
        "Attack": 60,
        "Defense": 80,
        "Sp. Attack": 90,
        "Sp. Defense": 110,
        "Speed": 60
      }
    },
    {
      "id": 766,
      "name": "ナゲツケサル",
      "type": [
        "かくとう"
      ],
      "base": {
        "HP": 100,
        "Attack": 120,
        "Defense": 90,
        "Sp. Attack": 40,
        "Sp. Defense": 60,
        "Speed": 80
      }
    },
    {
      "id": 767,
      "name": "コソクムシ",
      "type": [
        "むし",
        "みず"
      ],
      "base": {
        "HP": 25,
        "Attack": 35,
        "Defense": 40,
        "Sp. Attack": 20,
        "Sp. Defense": 30,
        "Speed": 80
      }
    },
    {
      "id": 768,
      "name": "グソクムシャ",
      "type": [
        "むし",
        "みず"
      ],
      "base": {
        "HP": 75,
        "Attack": 125,
        "Defense": 140,
        "Sp. Attack": 60,
        "Sp. Defense": 90,
        "Speed": 40
      }
    },
    {
      "id": 769,
      "name": "スナバァ",
      "type": [
        "ゴースト",
        "じめん"
      ],
      "base": {
        "HP": 55,
        "Attack": 55,
        "Defense": 80,
        "Sp. Attack": 70,
        "Sp. Defense": 45,
        "Speed": 15
      }
    },
    {
      "id": 770,
      "name": "シロデスナ",
      "type": [
        "ゴースト",
        "じめん"
      ],
      "base": {
        "HP": 85,
        "Attack": 75,
        "Defense": 110,
        "Sp. Attack": 100,
        "Sp. Defense": 75,
        "Speed": 35
      }
    },
    {
      "id": 771,
      "name": "ナマコブシ",
      "type": [
        "みず"
      ],
      "base": {
        "HP": 55,
        "Attack": 60,
        "Defense": 130,
        "Sp. Attack": 30,
        "Sp. Defense": 130,
        "Speed": 5
      }
    },
    {
      "id": 772,
      "name": "タイプ：ヌル",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 95,
        "Attack": 95,
        "Defense": 95,
        "Sp. Attack": 95,
        "Sp. Defense": 95,
        "Speed": 59
      }
    },
    {
      "id": 773,
      "name": "シルヴァディ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 95,
        "Attack": 95,
        "Defense": 95,
        "Sp. Attack": 95,
        "Sp. Defense": 95,
        "Speed": 95
      }
    },
    {
      "id": 774,
      "name": "メテノ",
      "type": [
        "いわ",
        "ひこう"
      ],
      "base": {
        "HP": 60,
        "Attack": 60,
        "Defense": 100,
        "Sp. Attack": 60,
        "Sp. Defense": 100,
        "Speed": 60
      }
    },
    {
      "id": 775,
      "name": "ネッコアラ",
      "type": [
        "ノーマル"
      ],
      "base": {
        "HP": 65,
        "Attack": 115,
        "Defense": 65,
        "Sp. Attack": 75,
        "Sp. Defense": 95,
        "Speed": 65
      }
    },
    {
      "id": 776,
      "name": "バクガメス",
      "type": [
        "ほのお",
        "ドラゴン"
      ],
      "base": {
        "HP": 60,
        "Attack": 78,
        "Defense": 135,
        "Sp. Attack": 91,
        "Sp. Defense": 85,
        "Speed": 36
      }
    },
    {
      "id": 777,
      "name": "トゲデマル",
      "type": [
        "でんき",
        "はがね"
      ],
      "base": {
        "HP": 65,
        "Attack": 98,
        "Defense": 63,
        "Sp. Attack": 40,
        "Sp. Defense": 73,
        "Speed": 96
      }
    },
    {
      "id": 778,
      "name": "ミミッキュ",
      "type": [
        "ゴースト",
        "フェアリー"
      ],
      "base": {
        "HP": 55,
        "Attack": 90,
        "Defense": 80,
        "Sp. Attack": 50,
        "Sp. Defense": 105,
        "Speed": 96
      }
    },
    {
      "id": 779,
      "name": "ハギギシリ",
      "type": [
        "みず",
        "エスパー"
      ],
      "base": {
        "HP": 68,
        "Attack": 105,
        "Defense": 70,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        "Speed": 92
      }
    },
    {
      "id": 780,
      "name": "ジジーロン",
      "type": [
        "ノーマル",
        "ドラゴン"
      ],
      "base": {
        "HP": 78,
        "Attack": 60,
        "Defense": 85,
        "Sp. Attack": 135,
        "Sp. Defense": 91,
        "Speed": 36
      }
    },
    {
      "id": 781,
      "name": "ダダリン",
      "type": [
        "ゴースト",
        "くさ"
      ],
      "base": {
        "HP": 70,
        "Attack": 131,
        "Defense": 100,
        "Sp. Attack": 86,
        "Sp. Defense": 90,
        "Speed": 40
      }
    },
    {
      "id": 782,
      "name": "ジャラコ",
      "type": [
        "ドラゴン"
      ],
      "base": {
        "HP": 45,
        "Attack": 55,
        "Defense": 65,
        "Sp. Attack": 45,
        "Sp. Defense": 45,
        "Speed": 45
      }
    },
    {
      "id": 783,
      "name": "ジャランゴ",
      "type": [
        "ドラゴン",
        "かくとう"
      ],
      "base": {
        "HP": 55,
        "Attack": 75,
        "Defense": 90,
        "Sp. Attack": 65,
        "Sp. Defense": 70,
        "Speed": 65
      }
    },
    {
      "id": 784,
      "name": "ジャラランガ",
      "type": [
        "ドラゴン",
        "かくとう"
      ],
      "base": {
        "HP": 75,
        "Attack": 110,
        "Defense": 125,
        "Sp. Attack": 100,
        "Sp. Defense": 105,
        "Speed": 85
      }
    },
    {
      "id": 785,
      "name": "カプ・コケコ",
      "type": [
        "でんき",
        "フェアリー"
      ],
      "base": {
        "HP": 70,
        "Attack": 115,
        "Defense": 85,
        "Sp. Attack": 95,
        "Sp. Defense": 75,
        "Speed": 130
      }
    },
    {
      "id": 786,
      "name": "カプ・テテフ",
      "type": [
        "エスパー",
        "フェアリー"
      ],
      "base": {
        "HP": 70,
        "Attack": 85,
        "Defense": 75,
        "Sp. Attack": 130,
        "Sp. Defense": 115,
        "Speed": 95
      }
    },
    {
      "id": 787,
      "name": "カプ・ブルル",
      "type": [
        "くさ",
        "フェアリー"
      ],
      "base": {
        "HP": 70,
        "Attack": 130,
        "Defense": 115,
        "Sp. Attack": 85,
        "Sp. Defense": 95,
        "Speed": 75
      }
    },
    {
      "id": 788,
      "name": "カプ・レヒレ",
      "type": [
        "みず",
        "フェアリー"
      ],
      "base": {
        "HP": 70,
        "Attack": 75,
        "Defense": 115,
        "Sp. Attack": 95,
        "Sp. Defense": 130,
        "Speed": 85
      }
    },
    {
      "id": 789,
      "name": "コスモッグ",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 43,
        "Attack": 29,
        "Defense": 31,
        "Sp. Attack": 29,
        "Sp. Defense": 31,
        "Speed": 37
      }
    },
    {
      "id": 790,
      "name": "コスモウム",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 43,
        "Attack": 29,
        "Defense": 131,
        "Sp. Attack": 29,
        "Sp. Defense": 131,
        "Speed": 37
      }
    },
    {
      "id": 791,
      "name": "ソルガレオ",
      "type": [
        "エスパー",
        "はがね"
      ],
      "base": {
        "HP": 137,
        "Attack": 137,
        "Defense": 107,
        "Sp. Attack": 113,
        "Sp. Defense": 89,
        "Speed": 97
      }
    },
    {
      "id": 792,
      "name": "ルナアーラ",
      "type": [
        "エスパー",
        "ゴースト"
      ],
      "base": {
        "HP": 137,
        "Attack": 113,
        "Defense": 89,
        "Sp. Attack": 137,
        "Sp. Defense": 107,
        "Speed": 97
      }
    },
    {
      "id": 793,
      "name": "ウツロイド",
      "type": [
        "いわ",
        "どく"
      ],
      "base": {
        "HP": 109,
        "Attack": 53,
        "Defense": 47,
        "Sp. Attack": 127,
        "Sp. Defense": 131,
        "Speed": 103
      }
    },
    {
      "id": 794,
      "name": "マッシブーン",
      "type": [
        "むし",
        "かくとう"
      ],
      "base": {
        "HP": 107,
        "Attack": 139,
        "Defense": 139,
        "Sp. Attack": 53,
        "Sp. Defense": 53,
        "Speed": 79
      }
    },
    {
      "id": 795,
      "name": "フェローチェ",
      "type": [
        "むし",
        "かくとう"
      ],
      "base": {
        "HP": 71,
        "Attack": 137,
        "Defense": 37,
        "Sp. Attack": 137,
        "Sp. Defense": 37,
        "Speed": 151
      }
    },
    {
      "id": 796,
      "name": "デンジュモク",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 83,
        "Attack": 89,
        "Defense": 71,
        "Sp. Attack": 173,
        "Sp. Defense": 71,
        "Speed": 83
      }
    },
    {
      "id": 797,
      "name": "テッカグヤ",
      "type": [
        "はがね",
        "ひこう"
      ],
      "base": {
        "HP": 97,
        "Attack": 101,
        "Defense": 103,
        "Sp. Attack": 107,
        "Sp. Defense": 101,
        "Speed": 61
      }
    },
    {
      "id": 798,
      "name": "カミツルギ",
      "type": [
        "くさ",
        "はがね"
      ],
      "base": {
        "HP": 59,
        "Attack": 181,
        "Defense": 131,
        "Sp. Attack": 59,
        "Sp. Defense": 31,
        "Speed": 109
      }
    },
    {
      "id": 799,
      "name": "アクジキング",
      "type": [
        "あく",
        "ドラゴン"
      ],
      "base": {
        "HP": 223,
        "Attack": 101,
        "Defense": 53,
        "Sp. Attack": 97,
        "Sp. Defense": 53,
        "Speed": 43
      }
    },
    {
      "id": 800,
      "name": "ネクロズマ",
      "type": [
        "エスパー"
      ],
      "base": {
        "HP": 97,
        "Attack": 107,
        "Defense": 101,
        "Sp. Attack": 127,
        "Sp. Defense": 89,
        "Speed": 79
      }
    },
    {
      "id": 801,
      "name": "マギアナ",
      "type": [
        "はがね",
        "フェアリー"
      ],
      "base": {
        "HP": 80,
        "Attack": 95,
        "Defense": 115,
        "Sp. Attack": 130,
        "Sp. Defense": 115,
        "Speed": 65
      }
    },
    {
      "id": 802,
      "name": "マーシャドー",
      "type": [
        "かくとう",
        "ゴースト"
      ],
      "base": {
        "HP": 90,
        "Attack": 125,
        "Defense": 80,
        "Sp. Attack": 90,
        "Sp. Defense": 90,
        "Speed": 125
      }
    },
    {
      "id": 803,
      "name": "ベベノム",
      "type": [
        "どく"
      ],
      "base": {
        "HP": 67,
        "Attack": 73,
        "Defense": 67,
        "Sp. Attack": 73,
        "Sp. Defense": 67,
        "Speed": 73
      }
    },
    {
      "id": 804,
      "name": "アーゴヨン",
      "type": [
        "どく",
        "ドラゴン"
      ],
      "base": {
        "HP": 73,
        "Attack": 73,
        "Defense": 73,
        "Sp. Attack": 127,
        "Sp. Defense": 73,
        "Speed": 121
      }
    },
    {
      "id": 805,
      "name": "ツンデツンデ",
      "type": [
        "いわ",
        "はがね"
      ],
      "base": {
        "HP": 61,
        "Attack": 131,
        "Defense": 211,
        "Sp. Attack": 53,
        "Sp. Defense": 101,
        "Speed": 13
      }
    },
    {
      "id": 806,
      "name": "ズガドーン",
      "type": [
        "ほのお",
        "ゴースト"
      ],
      "base": {
        "HP": 53,
        "Attack": 127,
        "Defense": 53,
        "Sp. Attack": 151,
        "Sp. Defense": 79,
        "Speed": 107
      }
    },
    {
      "id": 807,
      "name": "ゼラオラ",
      "type": [
        "でんき"
      ],
      "base": {
        "HP": 88,
        "Attack": 112,
        "Defense": 75,
        "Sp. Attack": 102,
        "Sp. Defense": 80,
        "Speed": 143
      }
    },
    {
      "id": 808,
      "name": "メルタン",
      "type": [
        "はがね"
      ],
      "base": {
        "HP": 46,
        "Attack": 65,
        "Defense": 65,
        "Sp. Attack": 55,
        "Sp. Defense": 35,
        "Speed": 34
      }
    },
    {
      "id": 809,
      "name": "メルメタル",
      "type": [
        "はがね"
      ],
      "base": {
        "HP": 135,
        "Attack": 143,
        "Defense": 143,
        "Sp. Attack": 80,
        "Sp. Defense": 65,
        "Speed": 34
      }
    }
  ]
  