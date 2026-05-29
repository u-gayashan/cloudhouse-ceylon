import { LOCAL_STORE } from "@/constants/key";
import { LangKey } from "@/type/user.type";

const VALID_LANGS: LangKey[] = ["EN", "SN", "TM"];

export const getSelectedLanguage = (): LangKey => {
  if (typeof window === "undefined") return "EN";
  const stored = window.localStorage.getItem(LOCAL_STORE.SELECTED_LANG);
  if (stored && (VALID_LANGS as string[]).includes(stored)) {
    return stored as LangKey;
  }
  return "EN";
};

export const setSelectedLang = (lang: LangKey): void => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LOCAL_STORE.SELECTED_LANG, lang);
};
