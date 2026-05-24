// Cloudhouse Ceylon — sample data

const POSTS = [
  {
    id: "mist-of-uva",
    title: "Mist over Uva: a season of slow growth",
    category: "Estate Story",
    date: "May 04, 2026",
    read: "8 min read",
    kind: "PHOTO ESSAY",
    excerpt: "Above 1,400m, the monsoon shifts everything. We walked the eastern slopes with the pluckers at sunrise to see what the fog does to a leaf.",
    body: [
      "There is a particular hush to the Uva highlands in early May. The southwest monsoon hasn't yet broken; the air sits, still and dense, between the eucalyptus and the tea. You can hear the secateurs from two terraces over.",
      "Mr Bandara has been a field supervisor here for thirty-one years. He learned to read the leaf from his father, who learned it from his — the long lineage of small, exact decisions that shape a Ceylon cup.",
      "The Uva flush, when it arrives in late June, is the most prized of the year. The leaf, having grown slowly through the cool dry months, holds an unmistakable wintergreen note. Buyers in London and Hamburg book it months in advance."
    ]
  },
  {
    id: "brewing-orange-pekoe",
    title: "How to brew an honest Orange Pekoe",
    category: "Brewing Guide",
    date: "Apr 22, 2026",
    read: "5 min read",
    kind: "GUIDE",
    excerpt: "Forget the kettle whistle and the egg timer. A short letter on water, leaf, and the small mercies of three minutes."
  },
  {
    id: "the-house",
    title: "Notes on a small round-door cottage",
    category: "The House",
    date: "Apr 09, 2026",
    read: "4 min read",
    kind: "JOURNAL",
    excerpt: "We're building a tiny cottage in the hill country — one room, a circular door, a long shared table. A field journal of what's going up, in stone and timber."
  },
  {
    id: "dimbula-flush",
    title: "Dimbula, the western flush",
    category: "Estate Story",
    date: "Mar 28, 2026",
    read: "6 min read",
    kind: "FILM · 04:12",
    excerpt: "A short film from a wet morning on a smallholder estate near Hatton. The pluckers move differently in the rain — and so does the leaf."
  },
  {
    id: "single-origin",
    title: "What 'single-origin' actually means",
    category: "Field Note",
    date: "Mar 14, 2026",
    read: "3 min read",
    kind: "SHORT NOTE",
    excerpt: "The word gets used to sell almost anything. Here's the line we hold to, and how it changes price."
  },
  {
    id: "kandyan-table",
    title: "Tea, sugar, jaggery, ginger: a Kandyan winter",
    category: "Recipe",
    date: "Feb 26, 2026",
    read: "5 min read",
    kind: "RECIPE",
    excerpt: "The household recipe a friend's grandmother taught us in Peradeniya — a wet-evening tea that asks very little and gives back a great deal."
  }
];

const PRODUCTS = [
  { id: "uva-bop", name: "Uva Highland BOP", region: "UVA",
    elevation: "1,610 M", price: 2400, weight: "100 G",
    notes: "Wintergreen · honey · woodsmoke",
    grade: "BOP — Broken Orange Pekoe",
    estate: "Pelmadulla, Eastern Slopes",
    flush: "June Quality (2025)",
    pairs: ["uva-fop", "uva-tin", "gift-mountain"] },
  { id: "nuwara-fop", name: "Nuwara Eliya FOP", region: "NUWARA ELIYA",
    elevation: "1,868 M", price: 2800, weight: "100 G",
    notes: "Jasmine · stone fruit · cool mineral",
    grade: "FOP — Flowery Orange Pekoe", estate: "Pedro Estate", flush: "March 2026" },
  { id: "dimbula-op", name: "Dimbula OP", region: "DIMBULA",
    elevation: "1,250 M", price: 2100, weight: "100 G",
    notes: "Citrus zest · rose · brisk",
    grade: "OP — Orange Pekoe", estate: "Lonach Estate", flush: "Western Quality" },
  { id: "ruhuna-pekoe", name: "Ruhuna Low-grown Pekoe", region: "RUHUNA",
    elevation: "240 M", price: 1900, weight: "100 G",
    notes: "Caramel · date · cocoa",
    grade: "PEKOE", estate: "Berubeula, Galle", flush: "Continuous" },
  { id: "kandy-bops", name: "Kandy BOPSF", region: "KANDY",
    elevation: "660 M", price: 1750, weight: "100 G",
    notes: "Malt · raisin · gentle tannin",
    grade: "BOPSF — Broken Orange Pekoe Sup. Fannings",
    estate: "Hewaheta", flush: "Mid-grown" },
  { id: "gift-mountain", name: "The Mountain Hamper", region: "GIFT SET",
    elevation: "FOUR TINS", price: 9800, weight: "400 G",
    notes: "One tin from each elevation",
    grade: "GIFT SET", estate: "Curated", flush: "Year-round" },
  { id: "infuser-clay", name: "Lansdowne Clay Pot", region: "ACCESSORY",
    elevation: "500 ML", price: 7200, weight: "1 PC",
    notes: "Hand-thrown stoneware, Sri Lankan kiln",
    grade: "ACCESSORY", estate: "Matale potters", flush: "—" },
  { id: "sub-monthly", name: "Monthly Tasting Subscription", region: "SUBSCRIPTION",
    elevation: "3 × 50G", price: 3400, weight: "MONTH",
    notes: "Three new single-origins each month",
    grade: "SUBSCRIPTION", estate: "Rotating", flush: "Year-round" }
];

Object.assign(window, { POSTS, PRODUCTS });
