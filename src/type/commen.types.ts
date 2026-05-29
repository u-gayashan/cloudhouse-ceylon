import { ReactNode } from "react";

export type TestType = {
  name: string;
  post: string;
  description: string;
};

export type BlogTypes = {
  id: number;
  image: string;
  title: string;
  name: string;
  description: string;
  year: string;
  avatar: string;
  job: string;
  paragraph?: string;
};

export type ProfileLink = {
  id: string;
  label: string;
  icon: ReactNode;
  href: string;
};

export type Title = {
  SN: string;
  EN: string;
  TM: string;
};

export type DropdownType = {
  id: number;
  title: Title;
  mainId?: number;
  districtsId?: number;
  mainCityId?: number;
};

export type BreadcrumbsProps = {
  items: {
    name: string;
    href: string;
  }[];
};

export type DesktopNavbarProps = {
  openNav: () => void;
};

export type MobileNavbarProps = {
  showNav: boolean;
  closeNav: () => void;
};

export type SectionTileProps = {
  title: string;
  paragraph: string;
};

export type StarRatingProps = {
  rating: number;
};

export type UserStoreUserType = {
  email: string;
  firstName: string;
  id: number;
  isVerify: boolean;
  lastName: string;
  title: string;
  type: string;
  avaterPath?: string;
  updateAvaterPath?: string;
};

export type NavBarItemType = {
  id: string;
  name: string;
  href: string;
  icon?: ReactNode;
};

export type TweakValues = {
  palette: string;
  typography: string;
  hero: string;
  shopUnlocked: boolean;
  audienceCurrent: number;
  audienceTarget: number;
  dark: boolean;
  density: string;
};
