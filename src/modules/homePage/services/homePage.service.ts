import type { RegionPin } from "../homePage.types";

export const CEYLON_REGIONS: RegionPin[] = [
  { id: "nuwara", name: "Nuwara Eliya", x: "52%", y: "44%" },
  { id: "uva", name: "Uva", x: "68%", y: "60%" },
  { id: "dimbula", name: "Dimbula", x: "42%", y: "54%" },
  { id: "kandy", name: "Kandy", x: "56%", y: "32%" },
  { id: "ruhuna", name: "Ruhuna", x: "50%", y: "78%" },
];

export const REGION_DESCRIPTIONS = [
  {
    id: "nuwara",
    name: "Nuwara Eliya",
    elev: "1,800+ m",
    note: "Bright, floral, the 'champagne' of Ceylon",
  },
  {
    id: "uva",
    name: "Uva",
    elev: "1,400–1,800 m",
    note: "Wintergreen, honey, single-flush prized",
  },
  {
    id: "dimbula",
    name: "Dimbula",
    elev: "1,100–1,650 m",
    note: "Brisk citrus, the classic morning cup",
  },
  {
    id: "kandy",
    name: "Kandy",
    elev: "600–1,200 m",
    note: "Malt-forward, mid-grown rounded body",
  },
  {
    id: "ruhuna",
    name: "Ruhuna",
    elev: "sea — 600 m",
    note: "Low-grown, caramel and cocoa weight",
  },
];
