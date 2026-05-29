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

export type ProductCardProps = {
  product: Product;
  onOpen?: (product: Product) => void;
  locked?: boolean;
};

export type ShopFilter = {
  region?: string;
  minPrice?: number;
  maxPrice?: number;
};
