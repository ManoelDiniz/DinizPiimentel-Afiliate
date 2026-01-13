import { Product } from '@/types/product';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { frontmatter } = product;
  
  const discount = Math.round(
    ((frontmatter.oldPrice - frontmatter.currentPrice) / frontmatter.oldPrice) * 100
  );

  return (
    <Link href={`/produto/${frontmatter.slug}`} className="product-card">
      <div className="card-badge">{discount}% OFF</div>
      
      {frontmatter.image && (
        <div className="card-image">
          <Image 
            src={frontmatter.image} 
            alt={frontmatter.title} 
            width={300} 
            height={300} 
            priority={false} 
          />
          
        </div>
      )}
      
      <div className="card-content">
        <h2>{frontmatter.title}</h2>
        
        {frontmatter.rating && (
          <div className="card-rating">
            ⭐ {frontmatter.rating}/5
          </div>
        )}
        
        <div className="card-price">
          <span className="price-old">R$ {frontmatter.oldPrice.toFixed(2)}</span>
          <span className="price-current">R$ {frontmatter.currentPrice.toFixed(2)}</span>
        </div>
        
        <div className="card-marketplace">
          📦 {frontmatter.marketplace}
        </div>
      </div>
    </Link>
  );
}
