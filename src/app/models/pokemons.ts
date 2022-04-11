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
        "Fairy"
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
        "Fairy"
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
        "Fairy"
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
        "Fairy"
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
        "Fairy"
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
    }
  ]
  