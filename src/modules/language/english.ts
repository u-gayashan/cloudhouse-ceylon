export type TextDictionary = {
  brand: string;
  tagline: string;
  nav: {
    home: string;
    journal: string;
    house: string;
    shop: string;
    admin: string;
    cart: string;
  };
  cta: {
    readJournal: string;
    previewShop: string;
    browseShop: string;
    joinJournal: string;
  };
  shop: {
    locked: string;
    unlocked: string;
  };
  footer: {
    read: string;
    shop: string;
    contact: string;
  };
};

export const ENGLISH: TextDictionary = {
  brand: "Cloudhouse Ceylon",
  tagline: "Tea grown above the clouds.",
  nav: {
    home: "Home",
    journal: "Journal",
    house: "The House",
    shop: "Shop",
    admin: "Admin",
    cart: "Cart",
  },
  cta: {
    readJournal: "Read the journal",
    previewShop: "Preview the shop",
    browseShop: "Browse the shop",
    joinJournal: "Join the journal",
  },
  shop: {
    locked: "The shop opens when the journal does.",
    unlocked: "Pure Ceylon, shipped warm.",
  },
  footer: {
    read: "Read",
    shop: "Shop",
    contact: "Contact",
  },
};
