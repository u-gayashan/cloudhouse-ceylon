import { TEXT } from "@/modules/language/text";

export type LangKey = "EN" | "SN" | "TM";

export type LanguageStateType = {
  selectedLang: LangKey;
  selectedText: (typeof TEXT)[LangKey];
  initiateSelectedLang: () => void;
  languageChange: (language: LangKey) => void;
};

export type ApiCallOptions = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: unknown;
  params?: Record<string, unknown>;
  isAuth?: boolean;
};
