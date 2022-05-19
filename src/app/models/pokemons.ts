// Python等では、モジュールはデフォルトで公開されているため、別のファイルからimportするだけで読み込めた。しかし、TypeScript(JavaScript)は逆で、デフォルトで非公開になっている。そのため、ほかのファイルからこのファイルを参照したいなら、このファイルでexportしておかなければならない。
export const POKEMONS = {
  "kanto": [
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F001.png?alt=media&token=215ae239-2c4d-4878-9d3d-1e9471915f3b"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F002.png?alt=media&token=5d2ae7bd-e690-49f3-bdd2-6457f31770d8"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F003.png?alt=media&token=8a5919f6-de91-488d-a1f0-c486376c63b1"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F004.png?alt=media&token=ae74e533-3b28-4bc5-a4f6-6fc6c12ea3f4"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F005.png?alt=media&token=8f306e08-19ca-4251-bc74-c5728822021e"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F006.png?alt=media&token=755bd8e4-6546-4557-aa41-943f9e08cf0b"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F007.png?alt=media&token=a5aa2ecd-bdf4-47ff-bcea-2ecbdc49788d"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F008.png?alt=media&token=a863159b-e933-4d19-8949-9bd13f5048fc"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F009.png?alt=media&token=666645be-4198-4bc6-8437-a9fdaef0293a"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F010.png?alt=media&token=d5335b72-dbf6-451f-a8d1-0e996fd0c9bc"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F011.png?alt=media&token=c4f85e6d-4820-4c2b-9870-e6f1782e1ae8"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F012.png?alt=media&token=4376f2f4-75a4-42ff-96f3-5cca8f79ee9a"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F013.png?alt=media&token=ef1ce2a6-345e-4289-8a18-119a61d6fca1"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F014.png?alt=media&token=e86c07a2-c9c5-498d-bc73-1d410fbb1909"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F015.png?alt=media&token=940eff24-dde0-4cf2-b108-45cff2899b4e"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F016.png?alt=media&token=a8d17dd2-b2cb-4991-80ce-b2b1b2edaa92"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F017.png?alt=media&token=1d26765c-75fa-4e94-9772-7f5e9acae731"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F018.png?alt=media&token=08a51488-1cec-4d4e-885c-75b35c50b598"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F019.png?alt=media&token=3acef9f2-60e9-44a2-8dde-1f02e32a2aaf"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F020.png?alt=media&token=a67403a3-85c7-4909-a994-8a9c7d46444c"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F021.png?alt=media&token=e8bd51ec-0540-48b4-b958-17b5b30ccd66"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F022.png?alt=media&token=99bbd3f5-f5e2-40d0-a1b7-bddc2e0c85d1"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F023.png?alt=media&token=31d654d9-3928-415d-868b-dc12f69030c9"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F024.png?alt=media&token=8481af16-aadd-47d2-8b82-ae788436ec23"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F025.png?alt=media&token=7f29c587-e945-4d52-bbad-f8c097449a43"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F026.png?alt=media&token=4c2eca70-f664-48d2-8221-685e25a8348e"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F027.png?alt=media&token=a9e2d7c9-ca58-4d4b-83ff-8efba4aff680"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F028.png?alt=media&token=00c2739c-e677-4ccd-a341-d681ea551088"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F029.png?alt=media&token=e3583437-a498-463b-9923-74b4aebe5320"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F030.png?alt=media&token=ee3d5360-b0a4-4506-b6f4-dccb28cfd43d"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F031.png?alt=media&token=4b08883c-5b15-410b-a803-3cc1ae45065d"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F032.png?alt=media&token=f80c1ff2-2652-4786-87cb-3f46d280529b"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F033.png?alt=media&token=45e92d9d-bd17-425b-a625-902154d70750"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F034.png?alt=media&token=29d0f6cf-5288-47ac-897a-1b80dfc82873"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F035.png?alt=media&token=7355f8bc-73eb-42a0-8a44-ce6d2a080295"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F036.png?alt=media&token=d414c747-1a8d-414d-9cb5-dc34488e950e"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F037.png?alt=media&token=3d729873-71bd-4958-9f79-a0644f21f096"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F038.png?alt=media&token=db486cfb-d587-4540-ad85-e318203b36d0"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F039.png?alt=media&token=85ab2679-016f-4ab3-aefc-7508f93d9ae4"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F040.png?alt=media&token=23a7841e-8fdc-4b76-9656-012e6d4de52d"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F041.png?alt=media&token=330aa41e-e074-4d30-bc1a-41fe0ef5fad9"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F042.png?alt=media&token=f7f4b227-07cc-4544-916a-228fc8bb39b3"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F043.png?alt=media&token=3e0c356c-8c20-47d8-b75a-e75ab0f49800"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F044.png?alt=media&token=8bf55a3d-b900-49b1-96e8-57caa7ebfacc"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F045.png?alt=media&token=3d7b60c4-90e0-4c2f-a8df-830cfaf1fc1f"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F046.png?alt=media&token=cf5da201-add6-4a74-919d-dc6dd86cf70e"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F047.png?alt=media&token=98f9af25-36d6-4a10-9c2c-afa8d9cd46d0"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F047.png?alt=media&token=98f9af25-36d6-4a10-9c2c-afa8d9cd46d0"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F049.png?alt=media&token=9cc5384c-02a0-4efd-b6a0-a70890b39ecf"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F050.png?alt=media&token=fe6821e0-0526-463d-9cea-f537fdc76a44"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F051.png?alt=media&token=f71c0f49-5e4d-4ef4-a0b8-9a817ac273b1"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F052.png?alt=media&token=56382438-dd44-4175-9f11-80524898823e"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F053.png?alt=media&token=4618a9a9-2437-4460-b18e-5b71ee85ba40"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F054.png?alt=media&token=4b09c5d8-9468-42f4-802b-d6cbb59ea553"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F055.png?alt=media&token=e9c31425-bfb2-443c-b8e1-9783b38abc65"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F056.png?alt=media&token=e86ff3ca-d191-43e1-a5aa-3ce5d0f30030"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F057.png?alt=media&token=a7e3ed62-fc52-4b50-a53e-3d8b46b90aaf"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F058.png?alt=media&token=5157440d-65fd-4de0-af58-a3d98c376abb"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F059.png?alt=media&token=9e72dc75-1c73-458c-8dba-81d728ac1323"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F060.png?alt=media&token=42344f29-bf45-4158-9d46-36b09a677ec1"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F061.png?alt=media&token=042f7faf-0e04-4ca7-8570-d77e220d137e"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F062.png?alt=media&token=65386041-60bb-4ea2-97fe-18627a2d96ce"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F063.png?alt=media&token=21391df5-e948-4035-9d40-c844f384bda1"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F064.png?alt=media&token=7c9f3f73-2a5a-4d34-95c6-16fee528c227"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F065.png?alt=media&token=8e6bf9d1-d5f0-4e9b-b5dc-dd86e5f5c323"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F066.png?alt=media&token=5c29a180-9acd-47a4-b858-d3015c30c3d9"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F067.png?alt=media&token=a821052f-f9b8-4238-8638-531dc6590b81"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F068.png?alt=media&token=cbe0d051-1ac5-468a-a3d2-59b4d6f24596"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F069.png?alt=media&token=ff9686ca-0002-46ed-b7c4-ffc530453d03"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F070.png?alt=media&token=94776914-c3e4-45b6-bb87-93aad5a810eb"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F071.png?alt=media&token=e14d27d1-2768-48fc-9af2-8a9ebf2d64a4"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F072.png?alt=media&token=fbe917c4-9b69-49d1-b59b-f4c48c86c935"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F073.png?alt=media&token=3c2786dd-f0af-44ba-be7b-909f9702bcbc"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F074.png?alt=media&token=6aa46efd-4974-4a3f-9d98-ea3d7ffcb294"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F075.png?alt=media&token=f97a45c1-cda0-49fe-95f9-12d4704a71ea"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F076.png?alt=media&token=c4f3f1ad-5b6c-4a8b-b03c-7092e907d632"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F077.png?alt=media&token=0fa3bf2e-cb4a-4a0b-91ba-a203ab904d5d"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F078.png?alt=media&token=3491bd0f-a4dd-43ad-9614-80e6724bfd80"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F079.png?alt=media&token=c165c1dd-724d-4b21-81db-4267789434f9"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F080.png?alt=media&token=3ce24672-d83f-43f1-92b6-960adfc8fe8f"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F081.png?alt=media&token=e902089e-d730-4fc6-a120-23219018c0b9"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F082.png?alt=media&token=3302cf21-58b6-4725-91fd-0e90b3dc3165"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F083.png?alt=media&token=aae38824-4bd2-43f5-9e86-9ae9dd6aa4d7"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F084.png?alt=media&token=7f863fa7-5548-4520-a8d0-863db6bcf45c"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F085.png?alt=media&token=a7a251ef-4e23-409a-99e6-9fefc9ddf567"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F086.png?alt=media&token=209b3be8-58f1-4609-9646-786ae90467d1"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F087.png?alt=media&token=70f4ae07-d672-4be2-a65e-54b8119c7623"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F088.png?alt=media&token=71d82926-ca5d-4b05-95e2-8c07844e9de4"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F089.png?alt=media&token=5c751f93-6d3a-43a0-8226-72efef363b5e"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F090.png?alt=media&token=a84328df-da9b-431d-bd6e-8b1d8c29139d"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F091.png?alt=media&token=4be8720b-a2ce-4147-8d7c-7532ae36f5b6"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F092.png?alt=media&token=240d76b4-a130-4291-8436-f6ba835d207f"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F093.png?alt=media&token=3d9b6067-a1e3-45ce-9c90-511925edad3f"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F094.png?alt=media&token=7424f4ef-fa25-40b8-9101-acb3f8be080c"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F095.png?alt=media&token=edc590f1-1208-4f08-88e9-f6c1526e663c"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F096.png?alt=media&token=9226515e-ae07-4592-ba4d-b0ac79aee8f1"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F097.png?alt=media&token=6463f735-f6f3-4a73-9c20-c0b6d28acf77"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F098.png?alt=media&token=2be75295-6715-4cbc-8d01-7c3fb5f9e4fd"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F099.png?alt=media&token=b3430ebd-ab37-4396-9ff3-b49e56086bd4"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F100.png?alt=media&token=a592127a-70f5-4584-b0f8-b4cd931c1bb3"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F101.png?alt=media&token=42e7e0ee-53eb-409a-94fd-5b0a029b46c4"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F102.png?alt=media&token=e1014b55-b74e-40cf-a4c6-0eea5647f9d2"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F103.png?alt=media&token=677004dd-7763-400a-9cff-0c92d05efc39"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F104.png?alt=media&token=b35cefb5-d1ab-4bf3-aa27-d8ccca3b44e2"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F105.png?alt=media&token=9d520cfc-8666-46e8-86ca-b4510ff60588"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F106.png?alt=media&token=f109e388-2310-4e69-b1b9-bd9839fc9a3a"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F107.png?alt=media&token=3525e1f4-5e5e-4ba2-a5b2-01723edae0c3"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F108.png?alt=media&token=b7641326-7d20-4fcb-ba74-3042f1d0c2a8"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F109.png?alt=media&token=141e7de0-dd0e-49cc-9570-fae4d1ddbb6a"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F110.png?alt=media&token=af41b9de-c2a5-4c0e-a8bb-21834c3c3b96"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F111.png?alt=media&token=c7799e87-0582-4b1e-894d-c70fa3346b88"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F112.png?alt=media&token=633a2cb3-984c-4b69-a4a1-7ba913c623e6"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F113.png?alt=media&token=5b37c983-630b-40ba-9b4b-8cb6623069be"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F114.png?alt=media&token=31a66be4-c041-48ba-a7e8-46da522b2db2"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F115.png?alt=media&token=5586954d-ca01-4c40-a0ff-bfff7fad19ce"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F116.png?alt=media&token=c23c6b63-3ef9-4765-b072-4d7e8ab26087"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F117.png?alt=media&token=e90965ff-7ec3-4882-a8bc-5bc611527a59"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F118.png?alt=media&token=85f83bf1-ca50-4655-bb89-fb6e8dd0c81d"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F119.png?alt=media&token=3288b123-b449-47e6-b043-6fb492b2e1c0"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F120.png?alt=media&token=b34a4ae6-86af-4e83-84de-d4709c9fd18d"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F121.png?alt=media&token=2f2133af-8bee-4fc6-b6e0-765c3e16fd50"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F122.png?alt=media&token=bdd42f18-a2a7-4d2e-b59d-d18c193b1d69"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F123.png?alt=media&token=25a6ba87-d348-4df6-b395-8b7e3b227452"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F124.png?alt=media&token=b1878177-a27c-416b-aad7-4bf517822096"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F125.png?alt=media&token=31199cf9-da2e-4851-a7ec-a11bc9ec4c34"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F126.png?alt=media&token=9da9c9f2-5c43-4414-afbc-4ea1a5d47dca"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F127.png?alt=media&token=0b254420-759e-431f-a8c1-50a911824eee"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F128.png?alt=media&token=ddcb0e98-53c9-4adc-af21-0587369ac724"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F129.png?alt=media&token=76cf908c-51ab-4e0c-9e75-bb78ed2a9b44"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F130.png?alt=media&token=e398a7bb-7e41-44c9-ac5a-cc477261dffa"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F131.png?alt=media&token=3ee0a211-5b1d-44c8-a420-0e42c157aa59"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F132.png?alt=media&token=cb188d70-fa1b-4497-b6a8-4385f99acf01"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F133.png?alt=media&token=1f4bb7c4-913e-438c-a8ff-8f83fe63a9d1"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F134.png?alt=media&token=fe491d64-6fb0-4cf9-882f-728a09ebf823"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F135.png?alt=media&token=bcd330e6-533f-4b13-ba6d-6bda839db0d2"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F136.png?alt=media&token=9992119e-53c2-46b7-989e-97eb22deb5e2"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F137.png?alt=media&token=0bec222c-3e07-42a6-b030-069b72258d82"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F138.png?alt=media&token=71b86b9f-9506-45a3-9464-759966bddd60"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F139.png?alt=media&token=659f4f1e-4456-449a-a2ba-9ec1b24ab4aa"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F140.png?alt=media&token=a41a5b0d-c8df-416c-a899-a512cacc883e"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F141.png?alt=media&token=772e22a0-2737-43c0-9133-817c33fdf1ea"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F142.png?alt=media&token=76c8f6cc-9276-4908-9a0e-1ca7bc8c9cde"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F143.png?alt=media&token=1198ea76-845e-43c4-af90-e79ecc6c4a5f"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F144.png?alt=media&token=b0a12dc3-5b44-4908-b398-5068db28f8a5"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F145.png?alt=media&token=65a8d880-7c19-4ffa-97f0-6a7758d16975"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F146.png?alt=media&token=5868c9e0-703e-4d13-b25d-39f50f7baeb4"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F147.png?alt=media&token=52dfb6b0-1005-4ba4-9e4b-1479c57325f4"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F148.png?alt=media&token=436ba072-137c-4810-bb7a-2e7fbf07c969"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F149.png?alt=media&token=9d135310-64bb-4c4c-8e55-5db76343c189"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F150.png?alt=media&token=08999acc-2b7b-4a68-8afa-78593429f43d"
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
      },
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/pokemon-books-2f21d.appspot.com/o/thumbnails%2F151.png?alt=media&token=6b275c53-dde7-482d-b21c-8f24bcdf8384"
    }
  ],
  "johto": [
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
    }
  ],
  "hoeen": [
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
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
      },
      "thumbnail": "a"
    },
  ],
  "sinnoh": [
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
        "Sp_Attack": 45,
        "Sp_Defense": 55,
        "Speed": 31
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 65,
        "Speed": 36
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 85,
        "Speed": 56
      },
      "thumbnail": "a"
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
        "Sp_Attack": 58,
        "Sp_Defense": 44,
        "Speed": 61
      },
      "thumbnail": "a"
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
        "Sp_Attack": 78,
        "Sp_Defense": 52,
        "Speed": 81
      },
      "thumbnail": "a"
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
        "Sp_Attack": 104,
        "Sp_Defense": 71,
        "Speed": 108
      },
      "thumbnail": "a"
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
        "Sp_Attack": 61,
        "Sp_Defense": 56,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 81,
        "Sp_Defense": 76,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 111,
        "Sp_Defense": 101,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 30,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 60,
        "Speed": 100
      },
      "thumbnail": "a"
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
        "Sp_Attack": 35,
        "Sp_Defense": 40,
        "Speed": 31
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 60,
        "Speed": 71
      },
      "thumbnail": "a"
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
        "Sp_Attack": 25,
        "Sp_Defense": 41,
        "Speed": 25
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 51,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 34,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 49,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 79,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 70,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 125,
        "Sp_Defense": 105,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 30,
        "Speed": 58
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 50,
        "Speed": 58
      },
      "thumbnail": "a"
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
        "Sp_Attack": 42,
        "Sp_Defense": 88,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 47,
        "Sp_Defense": 138,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 29,
        "Sp_Defense": 45,
        "Speed": 36
      },
      "thumbnail": "a"
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
        "Sp_Attack": 79,
        "Sp_Defense": 105,
        "Speed": 36
      },
      "thumbnail": "a"
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
        "Sp_Attack": 94,
        "Sp_Defense": 50,
        "Speed": 66
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 42,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 102,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 90,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 30,
        "Speed": 85
      },
      "thumbnail": "a"
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
        "Sp_Attack": 85,
        "Sp_Defense": 50,
        "Speed": 115
      },
      "thumbnail": "a"
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
        "Sp_Attack": 62,
        "Sp_Defense": 53,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 87,
        "Sp_Defense": 78,
        "Speed": 85
      },
      "thumbnail": "a"
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
        "Sp_Attack": 57,
        "Sp_Defense": 62,
        "Speed": 34
      },
      "thumbnail": "a"
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
        "Sp_Attack": 92,
        "Sp_Defense": 82,
        "Speed": 39
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 66,
        "Speed": 115
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 44,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 90,
        "Sp_Defense": 54,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 44,
        "Sp_Defense": 56,
        "Speed": 85
      },
      "thumbnail": "a"
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
        "Sp_Attack": 54,
        "Sp_Defense": 96,
        "Speed": 105
      },
      "thumbnail": "a"
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
        "Sp_Attack": 105,
        "Sp_Defense": 105,
        "Speed": 105
      },
      "thumbnail": "a"
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
        "Sp_Attack": 105,
        "Sp_Defense": 52,
        "Speed": 71
      },
      "thumbnail": "a"
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
        "Sp_Attack": 42,
        "Sp_Defense": 37,
        "Speed": 85
      },
      "thumbnail": "a"
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
        "Sp_Attack": 64,
        "Sp_Defense": 59,
        "Speed": 112
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 50,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 41,
        "Sp_Defense": 41,
        "Speed": 74
      },
      "thumbnail": "a"
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
        "Sp_Attack": 71,
        "Sp_Defense": 61,
        "Speed": 84
      },
      "thumbnail": "a"
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
        "Sp_Attack": 24,
        "Sp_Defense": 86,
        "Speed": 23
      },
      "thumbnail": "a"
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
        "Sp_Attack": 79,
        "Sp_Defense": 116,
        "Speed": 33
      },
      "thumbnail": "a"
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
        "Sp_Attack": 10,
        "Sp_Defense": 45,
        "Speed": 10
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 90,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 15,
        "Sp_Defense": 65,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 92,
        "Sp_Defense": 42,
        "Speed": 91
      },
      "thumbnail": "a"
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
        "Sp_Attack": 92,
        "Sp_Defense": 108,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 45,
        "Speed": 42
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 55,
        "Speed": 82
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 85,
        "Speed": 102
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 85,
        "Speed": 5
      },
      "thumbnail": "a"
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
        "Sp_Attack": 35,
        "Sp_Defense": 40,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 115,
        "Sp_Defense": 70,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 38,
        "Sp_Defense": 42,
        "Speed": 32
      },
      "thumbnail": "a"
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
        "Sp_Attack": 68,
        "Sp_Defense": 72,
        "Speed": 47
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 55,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 75,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 61,
        "Sp_Defense": 40,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 86,
        "Sp_Defense": 65,
        "Speed": 85
      },
      "thumbnail": "a"
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
        "Sp_Attack": 90,
        "Sp_Defense": 72,
        "Speed": 46
      },
      "thumbnail": "a"
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
        "Sp_Attack": 49,
        "Sp_Defense": 61,
        "Speed": 66
      },
      "thumbnail": "a"
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
        "Sp_Attack": 69,
        "Sp_Defense": 86,
        "Speed": 91
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 120,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 62,
        "Sp_Defense": 60,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 92,
        "Sp_Defense": 85,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 85,
        "Speed": 125
      },
      "thumbnail": "a"
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
        "Sp_Attack": 130,
        "Sp_Defense": 90,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 95,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 55,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 110,
        "Sp_Defense": 50,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 85,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 125,
        "Sp_Defense": 95,
        "Speed": 83
      },
      "thumbnail": "a"
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
        "Sp_Attack": 120,
        "Sp_Defense": 115,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 116,
        "Sp_Defense": 56,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 65,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 130,
        "Sp_Defense": 95,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 75,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 60,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 135,
        "Sp_Defense": 75,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 115,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 150,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 135,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 70,
        "Speed": 110
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 77,
        "Speed": 91
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 130,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 105,
        "Sp_Defense": 105,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 125,
        "Sp_Defense": 70,
        "Speed": 115
      },
      "thumbnail": "a"
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
        "Sp_Attack": 150,
        "Sp_Defense": 100,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 150,
        "Sp_Defense": 120,
        "Speed": 100
      },
      "thumbnail": "a"
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
        "Sp_Attack": 130,
        "Sp_Defense": 106,
        "Speed": 77
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 110,
        "Speed": 100
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 120,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 130,
        "Speed": 85
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 80,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 100,
        "Speed": 100
      },
      "thumbnail": "a"
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
        "Sp_Attack": 135,
        "Sp_Defense": 90,
        "Speed": 125
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 100,
        "Speed": 100
      },
      "thumbnail": "a"
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
        "Sp_Attack": 120,
        "Sp_Defense": 120,
        "Speed": 120
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 100,
        "Speed": 100
      },
      "thumbnail": "a"
    },
  ],
  "unova": [
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
        "Sp_Attack": 45,
        "Sp_Defense": 55,
        "Speed": 63
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 75,
        "Speed": 83
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 95,
        "Speed": 113
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 45,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 55,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 65,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 63,
        "Sp_Defense": 45,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 83,
        "Sp_Defense": 60,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 108,
        "Sp_Defense": 70,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 35,
        "Sp_Defense": 39,
        "Speed": 42
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 69,
        "Speed": 77
      },
      "thumbnail": "a"
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
        "Sp_Attack": 25,
        "Sp_Defense": 45,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 35,
        "Sp_Defense": 65,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 90,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 37,
        "Speed": 66
      },
      "thumbnail": "a"
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
        "Sp_Attack": 88,
        "Sp_Defense": 50,
        "Speed": 106
      },
      "thumbnail": "a"
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
        "Sp_Attack": 53,
        "Sp_Defense": 48,
        "Speed": 64
      },
      "thumbnail": "a"
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
        "Sp_Attack": 98,
        "Sp_Defense": 63,
        "Speed": 101
      },
      "thumbnail": "a"
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
        "Sp_Attack": 53,
        "Sp_Defense": 48,
        "Speed": 64
      },
      "thumbnail": "a"
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
        "Sp_Attack": 98,
        "Sp_Defense": 63,
        "Speed": 101
      },
      "thumbnail": "a"
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
        "Sp_Attack": 53,
        "Sp_Defense": 48,
        "Speed": 64
      },
      "thumbnail": "a"
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
        "Sp_Attack": 98,
        "Sp_Defense": 63,
        "Speed": 101
      },
      "thumbnail": "a"
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
        "Sp_Attack": 67,
        "Sp_Defense": 55,
        "Speed": 24
      },
      "thumbnail": "a"
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
        "Sp_Attack": 107,
        "Sp_Defense": 95,
        "Speed": 29
      },
      "thumbnail": "a"
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
        "Sp_Attack": 36,
        "Sp_Defense": 30,
        "Speed": 43
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 42,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 55,
        "Speed": 93
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 32,
        "Speed": 76
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 63,
        "Speed": 116
      },
      "thumbnail": "a"
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
        "Sp_Attack": 25,
        "Sp_Defense": 25,
        "Speed": 15
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 40,
        "Speed": 20
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 80,
        "Speed": 25
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 43,
        "Speed": 72
      },
      "thumbnail": "a"
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
        "Sp_Attack": 77,
        "Sp_Defense": 55,
        "Speed": 114
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 45,
        "Speed": 68
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 65,
        "Speed": 88
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 86,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 25,
        "Sp_Defense": 35,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 50,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 65,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 40,
        "Speed": 64
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 55,
        "Speed": 69
      },
      "thumbnail": "a"
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
        "Sp_Attack": 85,
        "Sp_Defense": 75,
        "Speed": 74
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 85,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 75,
        "Speed": 85
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 60,
        "Speed": 42
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 80,
        "Speed": 42
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 80,
        "Speed": 92
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 39,
        "Speed": 57
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 79,
        "Speed": 47
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 69,
        "Speed": 112
      },
      "thumbnail": "a"
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
        "Sp_Attack": 37,
        "Sp_Defense": 50,
        "Speed": 66
      },
      "thumbnail": "a"
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
        "Sp_Attack": 77,
        "Sp_Defense": 75,
        "Speed": 116
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 50,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 110,
        "Sp_Defense": 75,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 55,
        "Speed": 98
      },
      "thumbnail": "a"
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
        "Sp_Attack": 35,
        "Sp_Defense": 35,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 45,
        "Speed": 74
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 70,
        "Speed": 92
      },
      "thumbnail": "a"
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
        "Sp_Attack": 15,
        "Sp_Defense": 45,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 55,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 106,
        "Sp_Defense": 67,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 35,
        "Sp_Defense": 35,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 75,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 35,
        "Sp_Defense": 70,
        "Speed": 48
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 115,
        "Speed": 58
      },
      "thumbnail": "a"
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
        "Sp_Attack": 103,
        "Sp_Defense": 80,
        "Speed": 97
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 65,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 105,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 53,
        "Sp_Defense": 45,
        "Speed": 22
      },
      "thumbnail": "a"
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
        "Sp_Attack": 83,
        "Sp_Defense": 65,
        "Speed": 32
      },
      "thumbnail": "a"
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
        "Sp_Attack": 74,
        "Sp_Defense": 45,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 112,
        "Sp_Defense": 65,
        "Speed": 110
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 62,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 82,
        "Speed": 75
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 40,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 120,
        "Sp_Defense": 60,
        "Speed": 105
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 75
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 60,
        "Speed": 115
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 65,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 85,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 110,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 105,
        "Sp_Defense": 50,
        "Speed": 20
      },
      "thumbnail": "a"
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
        "Sp_Attack": 125,
        "Sp_Defense": 60,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 125,
        "Sp_Defense": 85,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 44,
        "Sp_Defense": 50,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 87,
        "Sp_Defense": 63,
        "Speed": 98
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 60,
        "Speed": 44
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 75,
        "Speed": 59
      },
      "thumbnail": "a"
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
        "Sp_Attack": 110,
        "Sp_Defense": 95,
        "Speed": 79
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 50,
        "Speed": 75
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 70,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 60,
        "Speed": 103
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 45,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 105,
        "Speed": 20
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 55,
        "Speed": 15
      },
      "thumbnail": "a"
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
        "Sp_Attack": 85,
        "Sp_Defense": 80,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 85,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 85,
        "Sp_Defense": 105,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 45,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 57,
        "Sp_Defense": 50,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 97,
        "Sp_Defense": 60,
        "Speed": 108
      },
      "thumbnail": "a"
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
        "Sp_Attack": 24,
        "Sp_Defense": 86,
        "Speed": 10
      },
      "thumbnail": "a"
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
        "Sp_Attack": 54,
        "Sp_Defense": 116,
        "Speed": 20
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 60,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 85,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 85,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 40,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 70,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 105,
        "Sp_Defense": 80,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 85,
        "Sp_Defense": 55,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 125,
        "Sp_Defense": 95,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 55,
        "Speed": 20
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 60,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 145,
        "Sp_Defense": 90,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 40,
        "Speed": 57
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 50,
        "Speed": 67
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 70,
        "Speed": 97
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 40,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 80,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 135,
        "Speed": 105
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 65,
        "Speed": 25
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 60,
        "Speed": 145
      },
      "thumbnail": "a"
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
        "Sp_Attack": 81,
        "Sp_Defense": 99,
        "Speed": 32
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 50,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 60,
        "Speed": 105
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 90,
        "Speed": 48
      },
      "thumbnail": "a"
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
        "Sp_Attack": 35,
        "Sp_Defense": 50,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 80,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 40,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 70,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 95,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 37,
        "Sp_Defense": 50,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 57,
        "Sp_Defense": 75,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 65,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 95,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 105,
        "Sp_Defense": 66,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 48,
        "Sp_Defense": 48,
        "Speed": 109
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 50,
        "Speed": 38
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 70,
        "Speed": 58
      },
      "thumbnail": "a"
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
        "Sp_Attack": 125,
        "Sp_Defense": 90,
        "Speed": 98
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 55,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 135,
        "Sp_Defense": 105,
        "Speed": 100
      },
      "thumbnail": "a"
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
        "Sp_Attack": 90,
        "Sp_Defense": 72,
        "Speed": 108
      },
      "thumbnail": "a"
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
        "Sp_Attack": 72,
        "Sp_Defense": 90,
        "Speed": 108
      },
      "thumbnail": "a"
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
        "Sp_Attack": 90,
        "Sp_Defense": 129,
        "Speed": 108
      },
      "thumbnail": "a"
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
        "Sp_Attack": 125,
        "Sp_Defense": 80,
        "Speed": 111
      },
      "thumbnail": "a"
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
        "Sp_Attack": 125,
        "Sp_Defense": 80,
        "Speed": 111
      },
      "thumbnail": "a"
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
        "Sp_Attack": 150,
        "Sp_Defense": 120,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 120,
        "Sp_Defense": 100,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 115,
        "Sp_Defense": 80,
        "Speed": 101
      },
      "thumbnail": "a"
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
        "Sp_Attack": 130,
        "Sp_Defense": 90,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 129,
        "Sp_Defense": 90,
        "Speed": 108
      },
      "thumbnail": "a"
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
        "Sp_Attack": 128,
        "Sp_Defense": 128,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 120,
        "Sp_Defense": 95,
        "Speed": 99
      },
      "thumbnail": "a"
    },
  ],
  "kalos": [
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
        "Sp_Attack": 48,
        "Sp_Defense": 45,
        "Speed": 38
      },
      "thumbnail": "a"
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
        "Sp_Attack": 56,
        "Sp_Defense": 58,
        "Speed": 57
      },
      "thumbnail": "a"
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
        "Sp_Attack": 74,
        "Sp_Defense": 75,
        "Speed": 64
      },
      "thumbnail": "a"
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
        "Sp_Attack": 62,
        "Sp_Defense": 60,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 90,
        "Sp_Defense": 70,
        "Speed": 73
      },
      "thumbnail": "a"
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
        "Sp_Attack": 114,
        "Sp_Defense": 100,
        "Speed": 104
      },
      "thumbnail": "a"
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
        "Sp_Attack": 62,
        "Sp_Defense": 44,
        "Speed": 71
      },
      "thumbnail": "a"
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
        "Sp_Attack": 83,
        "Sp_Defense": 56,
        "Speed": 97
      },
      "thumbnail": "a"
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
        "Sp_Attack": 103,
        "Sp_Defense": 71,
        "Speed": 122
      },
      "thumbnail": "a"
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
        "Sp_Attack": 32,
        "Sp_Defense": 36,
        "Speed": 57
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 77,
        "Speed": 78
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 38,
        "Speed": 62
      },
      "thumbnail": "a"
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
        "Sp_Attack": 56,
        "Sp_Defense": 52,
        "Speed": 84
      },
      "thumbnail": "a"
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
        "Sp_Attack": 74,
        "Sp_Defense": 69,
        "Speed": 126
      },
      "thumbnail": "a"
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
        "Sp_Attack": 27,
        "Sp_Defense": 25,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 27,
        "Sp_Defense": 30,
        "Speed": 29
      },
      "thumbnail": "a"
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
        "Sp_Attack": 90,
        "Sp_Defense": 50,
        "Speed": 89
      },
      "thumbnail": "a"
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
        "Sp_Attack": 73,
        "Sp_Defense": 54,
        "Speed": 72
      },
      "thumbnail": "a"
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
        "Sp_Attack": 109,
        "Sp_Defense": 66,
        "Speed": 106
      },
      "thumbnail": "a"
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
        "Sp_Attack": 61,
        "Sp_Defense": 79,
        "Speed": 42
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 98,
        "Speed": 52
      },
      "thumbnail": "a"
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
        "Sp_Attack": 112,
        "Sp_Defense": 154,
        "Speed": 75
      },
      "thumbnail": "a"
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
        "Sp_Attack": 62,
        "Sp_Defense": 57,
        "Speed": 52
      },
      "thumbnail": "a"
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
        "Sp_Attack": 97,
        "Sp_Defense": 81,
        "Speed": 68
      },
      "thumbnail": "a"
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
        "Sp_Attack": 46,
        "Sp_Defense": 48,
        "Speed": 43
      },
      "thumbnail": "a"
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
        "Sp_Attack": 69,
        "Sp_Defense": 71,
        "Speed": 58
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 90,
        "Speed": 102
      },
      "thumbnail": "a"
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
        "Sp_Attack": 63,
        "Sp_Defense": 60,
        "Speed": 68
      },
      "thumbnail": "a"
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
        "Sp_Attack": 83,
        "Sp_Defense": 81,
        "Speed": 104
      },
      "thumbnail": "a"
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
        "Sp_Attack": 35,
        "Sp_Defense": 37,
        "Speed": 28
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 49,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 150,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 63,
        "Sp_Defense": 65,
        "Speed": 23
      },
      "thumbnail": "a"
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
        "Sp_Attack": 99,
        "Sp_Defense": 89,
        "Speed": 29
      },
      "thumbnail": "a"
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
        "Sp_Attack": 59,
        "Sp_Defense": 57,
        "Speed": 49
      },
      "thumbnail": "a"
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
        "Sp_Attack": 85,
        "Sp_Defense": 75,
        "Speed": 72
      },
      "thumbnail": "a"
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
        "Sp_Attack": 37,
        "Sp_Defense": 46,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 68,
        "Sp_Defense": 75,
        "Speed": 73
      },
      "thumbnail": "a"
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
        "Sp_Attack": 39,
        "Sp_Defense": 56,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 54,
        "Sp_Defense": 86,
        "Speed": 68
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 60,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 97,
        "Sp_Defense": 123,
        "Speed": 44
      },
      "thumbnail": "a"
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
        "Sp_Attack": 58,
        "Sp_Defense": 63,
        "Speed": 44
      },
      "thumbnail": "a"
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
        "Sp_Attack": 120,
        "Sp_Defense": 89,
        "Speed": 59
      },
      "thumbnail": "a"
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
        "Sp_Attack": 61,
        "Sp_Defense": 43,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 109,
        "Sp_Defense": 94,
        "Speed": 109
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 45,
        "Speed": 48
      },
      "thumbnail": "a"
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
        "Sp_Attack": 69,
        "Sp_Defense": 59,
        "Speed": 71
      },
      "thumbnail": "a"
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
        "Sp_Attack": 67,
        "Sp_Defense": 63,
        "Speed": 46
      },
      "thumbnail": "a"
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
        "Sp_Attack": 99,
        "Sp_Defense": 92,
        "Speed": 58
      },
      "thumbnail": "a"
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
        "Sp_Attack": 110,
        "Sp_Defense": 130,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 74,
        "Sp_Defense": 63,
        "Speed": 118
      },
      "thumbnail": "a"
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
        "Sp_Attack": 81,
        "Sp_Defense": 67,
        "Speed": 101
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 150,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 75,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 83,
        "Sp_Defense": 113,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 110,
        "Sp_Defense": 150,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 87,
        "Speed": 75
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 60,
        "Speed": 38
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 82,
        "Speed": 56
      },
      "thumbnail": "a"
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
        "Sp_Attack": 44,
        "Sp_Defense": 55,
        "Speed": 41
      },
      "thumbnail": "a"
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
        "Sp_Attack": 58,
        "Sp_Defense": 75,
        "Speed": 54
      },
      "thumbnail": "a"
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
        "Sp_Attack": 32,
        "Sp_Defense": 35,
        "Speed": 28
      },
      "thumbnail": "a"
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
        "Sp_Attack": 44,
        "Sp_Defense": 46,
        "Speed": 28
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 40,
        "Speed": 55
      },
      "thumbnail": "a"
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
        "Sp_Attack": 97,
        "Sp_Defense": 80,
        "Speed": 123
      },
      "thumbnail": "a"
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
        "Sp_Attack": 131,
        "Sp_Defense": 98,
        "Speed": 99
      },
      "thumbnail": "a"
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
        "Sp_Attack": 131,
        "Sp_Defense": 98,
        "Speed": 99
      },
      "thumbnail": "a"
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
        "Sp_Attack": 81,
        "Sp_Defense": 95,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 150,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 150,
        "Sp_Defense": 130,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 130,
        "Sp_Defense": 90,
        "Speed": 70
      },
      "thumbnail": "a"
    },
  ],
  "alola": [
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
        "Sp_Attack": 50,
        "Sp_Defense": 50,
        "Speed": 42
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 70,
        "Speed": 52
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 100,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 40,
        "Speed": 70
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 50,
        "Speed": 90
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 90,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 66,
        "Sp_Defense": 56,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 91,
        "Sp_Defense": 81,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 126,
        "Sp_Defense": 116,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 30,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 50,
        "Speed": 75
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 75,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 30,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 60,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 45,
        "Speed": 46
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 75,
        "Speed": 36
      },
      "thumbnail": "a"
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
        "Sp_Attack": 145,
        "Sp_Defense": 75,
        "Speed": 43
      },
      "thumbnail": "a"
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
        "Sp_Attack": 42,
        "Sp_Defense": 47,
        "Speed": 63
      },
      "thumbnail": "a"
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
        "Sp_Attack": 62,
        "Sp_Defense": 67,
        "Speed": 43
      },
      "thumbnail": "a"
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
        "Sp_Attack": 98,
        "Sp_Defense": 70,
        "Speed": 93
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 40,
        "Speed": 84
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 70,
        "Speed": 124
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 40,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 65,
        "Speed": 112
      },
      "thumbnail": "a"
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
        "Sp_Attack": 25,
        "Sp_Defense": 25,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 43,
        "Sp_Defense": 52,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 53,
        "Sp_Defense": 142,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 55,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 85,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 72,
        "Speed": 27
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 132,
        "Speed": 42
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 35,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 90,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 75,
        "Speed": 15
      },
      "thumbnail": "a"
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
        "Sp_Attack": 90,
        "Sp_Defense": 100,
        "Speed": 30
      },
      "thumbnail": "a"
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
        "Sp_Attack": 71,
        "Sp_Defense": 40,
        "Speed": 77
      },
      "thumbnail": "a"
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
        "Sp_Attack": 111,
        "Sp_Defense": 60,
        "Speed": 117
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 50,
        "Speed": 50
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 60,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 38,
        "Speed": 32
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 48,
        "Speed": 62
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 98,
        "Speed": 72
      },
      "thumbnail": "a"
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
        "Sp_Attack": 82,
        "Sp_Defense": 110,
        "Speed": 100
      },
      "thumbnail": "a"
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
        "Sp_Attack": 90,
        "Sp_Defense": 110,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 60,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 20,
        "Sp_Defense": 30,
        "Speed": 80
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 90,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 45,
        "Speed": 15
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 75,
        "Speed": 35
      },
      "thumbnail": "a"
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
        "Sp_Attack": 30,
        "Sp_Defense": 130,
        "Speed": 5
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 95,
        "Speed": 59
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 95,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 60,
        "Sp_Defense": 100,
        "Speed": 60
      },
      "thumbnail": "a"
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
        "Sp_Attack": 75,
        "Sp_Defense": 95,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 91,
        "Sp_Defense": 85,
        "Speed": 36
      },
      "thumbnail": "a"
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
        "Sp_Attack": 40,
        "Sp_Defense": 73,
        "Speed": 96
      },
      "thumbnail": "a"
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
        "Sp_Attack": 50,
        "Sp_Defense": 105,
        "Speed": 96
      },
      "thumbnail": "a"
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
        "Sp_Attack": 70,
        "Sp_Defense": 70,
        "Speed": 92
      },
      "thumbnail": "a"
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
        "Sp_Attack": 135,
        "Sp_Defense": 91,
        "Speed": 36
      },
      "thumbnail": "a"
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
        "Sp_Attack": 86,
        "Sp_Defense": 90,
        "Speed": 40
      },
      "thumbnail": "a"
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
        "Sp_Attack": 45,
        "Sp_Defense": 45,
        "Speed": 45
      },
      "thumbnail": "a"
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
        "Sp_Attack": 65,
        "Sp_Defense": 70,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 100,
        "Sp_Defense": 105,
        "Speed": 85
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 75,
        "Speed": 130
      },
      "thumbnail": "a"
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
        "Sp_Attack": 130,
        "Sp_Defense": 115,
        "Speed": 95
      },
      "thumbnail": "a"
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
        "Sp_Attack": 85,
        "Sp_Defense": 95,
        "Speed": 75
      },
      "thumbnail": "a"
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
        "Sp_Attack": 95,
        "Sp_Defense": 130,
        "Speed": 85
      },
      "thumbnail": "a"
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
        "Sp_Attack": 29,
        "Sp_Defense": 31,
        "Speed": 37
      },
      "thumbnail": "a"
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
        "Sp_Attack": 29,
        "Sp_Defense": 131,
        "Speed": 37
      },
      "thumbnail": "a"
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
        "Sp_Attack": 113,
        "Sp_Defense": 89,
        "Speed": 97
      },
      "thumbnail": "a"
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
        "Sp_Attack": 137,
        "Sp_Defense": 107,
        "Speed": 97
      },
      "thumbnail": "a"
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
        "Sp_Attack": 127,
        "Sp_Defense": 131,
        "Speed": 103
      },
      "thumbnail": "a"
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
        "Sp_Attack": 53,
        "Sp_Defense": 53,
        "Speed": 79
      },
      "thumbnail": "a"
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
        "Sp_Attack": 137,
        "Sp_Defense": 37,
        "Speed": 151
      },
      "thumbnail": "a"
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
        "Sp_Attack": 173,
        "Sp_Defense": 71,
        "Speed": 83
      },
      "thumbnail": "a"
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
        "Sp_Attack": 107,
        "Sp_Defense": 101,
        "Speed": 61
      },
      "thumbnail": "a"
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
        "Sp_Attack": 59,
        "Sp_Defense": 31,
        "Speed": 109
      },
      "thumbnail": "a"
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
        "Sp_Attack": 97,
        "Sp_Defense": 53,
        "Speed": 43
      },
      "thumbnail": "a"
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
        "Sp_Attack": 127,
        "Sp_Defense": 89,
        "Speed": 79
      },
      "thumbnail": "a"
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
        "Sp_Attack": 130,
        "Sp_Defense": 115,
        "Speed": 65
      },
      "thumbnail": "a"
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
        "Sp_Attack": 90,
        "Sp_Defense": 90,
        "Speed": 125
      },
      "thumbnail": "a"
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
        "Sp_Attack": 73,
        "Sp_Defense": 67,
        "Speed": 73
      },
      "thumbnail": "a"
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
        "Sp_Attack": 127,
        "Sp_Defense": 73,
        "Speed": 121
      },
      "thumbnail": "a"
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
        "Sp_Attack": 53,
        "Sp_Defense": 101,
        "Speed": 13
      },
      "thumbnail": "a"
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
        "Sp_Attack": 151,
        "Sp_Defense": 79,
        "Speed": 107
      },
      "thumbnail": "a"
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
        "Sp_Attack": 102,
        "Sp_Defense": 80,
        "Speed": 143
      },
      "thumbnail": "a"
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
        "Sp_Attack": 55,
        "Sp_Defense": 35,
        "Speed": 34
      },
      "thumbnail": "a"
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
        "Sp_Attack": 80,
        "Sp_Defense": 65,
        "Speed": 34
      },
      "thumbnail": "a"
    }
  ]
}