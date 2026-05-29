import { ENGLISH } from "./english";
import { SINHALA } from "./sinhala";
import { TAMIL } from "./tamil";

export const TEXT = {
  EN: ENGLISH,
  SN: SINHALA,
  TM: TAMIL,
} as const;

export const LANGUAGES = {
  SN: "සිංහල",
  TM: "தமிழ்",
  EN: "English",
} as const;
