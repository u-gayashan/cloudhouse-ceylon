import { DropdownType, Title } from "@/type/commen.types";
import { LangKey } from "@/type/user.type";

export const getDropdownLabel = (
  item: DropdownType | undefined,
  lang: LangKey = "EN",
): string => {
  if (!item) return "";
  return item.title[lang] ?? item.title.EN ?? "";
};

export const filterDropdownByParent = (
  options: DropdownType[],
  parentId: number | undefined,
  key: keyof DropdownType = "mainId",
): DropdownType[] => {
  if (parentId == null) return options;
  return options.filter((o) => o[key] === parentId);
};

export const titleFromString = (s: string): Title => ({
  EN: s,
  SN: s,
  TM: s,
});
