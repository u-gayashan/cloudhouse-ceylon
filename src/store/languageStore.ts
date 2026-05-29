import { create } from "zustand";

import {
  getSelectedLanguage,
  setSelectedLang,
} from "@/modules/language/services/language.services";
import { TEXT } from "@/modules/language/text";
import { LangKey, LanguageStateType } from "@/type/user.type";

const languageStore = create<LanguageStateType>((set) => ({
  selectedLang: "EN" as LangKey,
  selectedText: TEXT["EN"],

  initiateSelectedLang: () =>
    set({
      selectedLang: getSelectedLanguage(),
      selectedText: TEXT[getSelectedLanguage()],
    }),

  languageChange: (language: LangKey) => {
    setSelectedLang(language);
    return set({
      selectedLang: language,
      selectedText: TEXT[language],
    });
  },
}));

export default languageStore;
