export interface Post {
  id: string;
  title: string;
  category: string;
  date: string;
  read: string;
  kind: string;
  excerpt: string;
  body?: string[];
}

export interface Product {
  id: string;
  name: string;
  region: string;
  elevation: string;
  price: number;
  weight: string;
  notes: string;
  grade: string;
  estate: string;
  flush: string;
  pairs?: string[];
}

export interface CartLine {
  id: string;
  product: Product;
  qty: number;
  size: string;
}

export interface TweakValues {
  palette: string;
  typography: string;
  hero: string;
  shopUnlocked: boolean;
  audienceCurrent: number;
  audienceTarget: number;
  dark: boolean;
  density: string;
}
