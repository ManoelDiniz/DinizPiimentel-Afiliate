export interface ProductFrontmatter {
  title: string;
  slug: string;
  currentPrice: number;
  oldPrice: number;
  affiliateLink: string;
  marketplace: string;
  lastUpdated: string;
  rating?: number;
  reviewCount?: number;
  image?: string;
  category?: string;
  inStock?: boolean;
}

export interface Product {
  frontmatter: ProductFrontmatter;
  content: string;
}
