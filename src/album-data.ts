export type Photograph = {id:string;src:string;alt:string;caption:string;date:string;place:string;memory:string;rotation:number;position?:string;detail?:'leaf'|'tape'|'none'};
export type ChapterKind='beginning'|'warmth'|'little'|'letter'|'kept'|'day'|'autumn'|'collection'|'receipt';
export type Chapter={id:string;kind:ChapterKind;title:string;eyebrow:string;prose:string;note:string;photos:string[]};
export type AutumnAlbum={id:string;title:string;subtitle:string;people:string;season:string;specialPhoto:string;photographs:Photograph[];chapters:Chapter[];letter:{greeting:string;body:string;signature:string}};
export const autumnAlbum:AutumnAlbum={
  "id": "autumn-2026",
  "title": "Beautiful Album",
  "subtitle": "A little collection of us.",
  "people": "Ella & Oliver",
  "season": "AUTUMN 2026",
  "specialPhoto": "photo-09",
  "photographs": [
    {
      "id": "photo-01",
      "src": "images/photo-01.jpg",
      "alt": "A couple sitting together on a bench under autumn trees",
      "caption": "Where this season began",
      "date": "20 SEP 2026",
      "place": "The park",
      "memory": "We sat down for five minutes. The afternoon quietly became ours. This is where I like to begin.",
      "rotation": -3,
      "detail": "leaf"
    },
    {
      "id": "photo-02", "position":"50% 85%",
      "src": "images/photo-02.jpg",
      "alt": "Two people walking down a path beneath autumn trees",
      "caption": "The longer way home",
      "date": "27 SEP 2026",
      "place": "Our usual path",
      "memory": "We missed the turning on purpose. There was still so much to tell you.",
      "rotation": -5,
      "detail": "none"
    },
    {
      "id": "photo-03",
      "src": "images/photo-03.jpg",
      "alt": "Coffee and a book on a picnic blanket outdoors",
      "caption": "An afternoon, unfolded",
      "date": "27 SEP 2026",
      "place": "The little clearing",
      "memory": "You packed a book. I packed too much coffee. Neither of us packed a plan.",
      "rotation": 4,
      "detail": "leaf"
    },
    {
      "id": "photo-04",
      "src": "images/photo-04.jpg",
      "alt": "Two takeaway coffees and books resting on fallen leaves",
      "caption": "Mine, yours, and another hour",
      "date": "04 OCT 2026",
      "place": "Under the trees",
      "memory": "Your coffee was always the sweeter one. Somehow I still picked up your cup.",
      "rotation": -4,
      "detail": "none"
    },
    {
      "id": "photo-05", "position":"50% 68%",
      "src": "images/photo-05.jpg",
      "alt": "A cup of coffee beside a book and a soft sweater",
      "caption": "The page you saved for me",
      "date": "11 OCT 2026",
      "place": "At home",
      "memory": "You left the book open at the good part. A small thing that said: I thought of you.",
      "rotation": 3,
      "detail": "tape"
    },
    {
      "id": "photo-06",
      "src": "images/photo-06.jpg",
      "alt": "Hands opening a paper envelope on a wooden desk",
      "caption": "Made slowly, for you",
      "date": "18 OCT 2026",
      "place": "The kitchen table",
      "memory": "A few words, folded carefully. I wanted you to have something you could come back to.",
      "rotation": 5,
      "detail": "none"
    },
    {
      "id": "photo-07",
      "src": "images/photo-07.jpg",
      "alt": "A small bread stall in the shade of autumn trees",
      "caption": "Still warm in the bag",
      "date": "24 OCT 2026",
      "place": "The Saturday market",
      "memory": "We only went out for bread. We came home with enough for everyone and no explanation.",
      "rotation": -3,
      "detail": "leaf"
    },
    {
      "id": "photo-08",
      "src": "images/photo-08.jpg",
      "alt": "An open book on a picnic blanket with a cup and dried flowers",
      "caption": "One pressed afternoon",
      "date": "24 OCT 2026",
      "place": "A patch of sunshine",
      "memory": "A page, a petal, a little time. I wanted to bring the whole afternoon home.",
      "rotation": 4,
      "detail": "none"
    },
    {
      "id": "photo-09", "position":"50% 80%",
      "src": "images/photo-09.jpg",
      "alt": "A bench beside a calm lake surrounded by autumn trees",
      "caption": "Our seat beside the water",
      "date": "02 NOV 2026",
      "place": "The lake",
      "memory": "We sat until the light changed. You asked what I was thinking. I said: I wish we could keep this.",
      "rotation": -2,
      "detail": "leaf"
    },
    {
      "id": "photo-10",
      "src": "images/photo-10.jpg",
      "alt": "Empty benches and fallen leaves beside a quiet lake",
      "caption": "The season, getting quieter",
      "date": "16 NOV 2026",
      "place": "Back by the lake",
      "memory": "Fewer leaves this time. The same quiet ritual. We made room for whatever would come next.",
      "rotation": 2,
      "detail": "none"
    }
  ],
  "chapters": [
    {
      "id": "first-page",
      "kind": "beginning",
      "title": "Us,\nin the beginning.",
      "eyebrow": "THE FIRST PAGE",
      "prose": "Ella & Oliver. A season of taking the long way home, and learning how much a small moment can hold.",
      "note": "You, me, and nowhere else to be.",
      "photos": [
        "photo-01"
      ]
    },
    {
      "id": "autumn-days",
      "kind": "warmth",
      "title": "Autumn\ndays.",
      "eyebrow": "A LITTLE GOLDEN LIGHT",
      "prose": "The air changed. We stayed out a little longer.\nThere was always one more thing to notice.",
      "note": "The afternoon had other plans.",
      "photos": [
        "photo-02",
        "photo-03"
      ]
    },
    {
      "id": "little-things",
      "kind": "little",
      "title": "Little things.\nEverything.",
      "eyebrow": "THE ORDINARY DAYS",
      "prose": "Two cups. A borrowed book.\nLove was quietly being made from things that looked small at the time.",
      "note": "The good part was already here.",
      "photos": [
        "photo-04",
        "photo-05"
      ]
    },
    {
      "id": "letter",
      "kind": "letter",
      "title": "A few words,\njust for you.",
      "eyebrow": "FOLDED, NEVER FORGOTTEN",
      "prose": "Some thoughts needed more than a message.\nSo I found a piece of paper.",
      "note": "Open when you have a little time.",
      "photos": [
        "photo-06"
      ]
    },
    {
      "id": "things-kept",
      "kind": "kept",
      "title": "The things\nwe kept.",
      "eyebrow": "NOTHING MUCH. EVERYTHING.",
      "prose": "We brought home bread, a flower between pages, and the feeling of having nowhere to rush to.",
      "note": "Proof of a very good ordinary day.",
      "photos": [
        "photo-07",
        "photo-08"
      ]
    },
    {
      "id": "remembering",
      "kind": "day",
      "title": "A day worth\nremembering.",
      "eyebrow": "02 NOVEMBER · BY THE LAKE",
      "prose": "No occasion. No reason.\nJust the kind of afternoon that stays.",
      "note": "This is what I meant by happy.",
      "photos": [
        "photo-09"
      ]
    },
    {
      "id": "autumn-fades",
      "kind": "autumn",
      "title": "Autumn,\na little softer.",
      "eyebrow": "THE SEASON SLOWS",
      "prose": "The trees let go a little at a time.\nWe kept our small rituals.",
      "note": "Some things stay with us.",
      "photos": [
        "photo-10"
      ]
    },
    {
      "id": "what-kept",
      "kind": "collection",
      "title": "What\nwe keep.",
      "eyebrow": "BETWEEN THESE TWO COVERS",
      "prose": "A beginning. An ordinary afternoon.\nThe place we went back to.\nA little evidence of us.",
      "note": "All of it belongs here.",
      "photos": [
        "photo-09",
        "photo-01",
        "photo-04"
      ]
    },
    {
      "id": "receipt",
      "kind": "receipt",
      "title": "The receipt\nof us.",
      "eyebrow": "MADE TOGETHER",
      "prose": "Before we close this book,\nback to the place where we wished we could keep the afternoon.",
      "note": "This was always ours.",
      "photos": [
        "photo-09"
      ]
    }
  ],
  "letter": {
    "greeting": "My favourite person,",
    "body": "I thought I would remember the big things. But when I think of this autumn, it is always something small.\n\nYou waiting for me to finish my coffee. A page you wanted me to read. The way you made room on the bench before I even asked.\n\nThank you for bringing your whole self to our ordinary days. For listening. For trying again. For letting me do the same for you.\n\nI tucked a little of this season between these pages. Not because it was perfect, but because we were both here, making something worth keeping.",
    "signature": "Always, Ella"
  }
};
