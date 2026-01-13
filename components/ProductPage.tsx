'use client';

import { Product } from '@/types/product';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const { frontmatter, content } = product;

  // Garantir que os preços são números válidos
  const currentPrice = Number(frontmatter.currentPrice) || 0;
  const oldPrice = Number(frontmatter.oldPrice) || 0;

  const discount = oldPrice > 0 ? Math.round(
    ((oldPrice - currentPrice) / oldPrice) * 100
  ) : 0;
  const savings = oldPrice - currentPrice;

  const handleAffiliateClick = () => {
    // Tracking de clique no link de afiliado
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'affiliate',
        event_label: frontmatter.slug,
        value: currentPrice,
      });
    }
  };

  // Schema.org JSON-LD
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: frontmatter.title,
    image: frontmatter.image,
    description: frontmatter.title,
    brand: {
      '@type': 'Brand',
      name: frontmatter.marketplace,
    },
    offers: {
      '@type': 'Offer',
      url: frontmatter.affiliateLink,
      priceCurrency: 'BRL',
      price: currentPrice,
      priceValidUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: frontmatter.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: frontmatter.marketplace,
      },
    },
    aggregateRating: frontmatter.rating ? {
      '@type': 'AggregateRating',
      ratingValue: frontmatter.rating,
      reviewCount: frontmatter.reviewCount,
    } : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="product-page">
        <div className="product-hero">
          <div className="price-box">
            <div className="discount-badge">{discount}% OFF</div>
          <div className="price-old">De R$ {oldPrice.toFixed(2)}</div>
          <div className="price-current">R$ {currentPrice.toFixed(2)}</div>
            <div className="savings">
              Economize R$ {savings.toFixed(2)}
            </div>
          </div>

          <a
            href={frontmatter.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="cta-button"
            onClick={handleAffiliateClick}
          >
            🛒 Ver Oferta no {frontmatter.marketplace}
          </a>

          {frontmatter.rating && (
            <div className="rating">
              ⭐ {frontmatter.rating}/5 ({frontmatter.reviewCount?.toLocaleString()} avaliações)
            </div>
          )}
        </div>

        <article className="product-content">
          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: content }} />
        </article>

        <div className="product-footer">
          <p className="last-updated">
            ✅ Preço atualizado em {new Date(frontmatter.lastUpdated).toLocaleDateString('pt-BR')}
          </p>
          <p className="affiliate-disclosure">
            ⚠️ <strong>Aviso de Afiliado:</strong> Este site participa do Programa de Associados. 
            Podemos receber comissões por compras realizadas através dos nossos links, 
            sem custo adicional para você.
          </p>
        </div>
      </div>
    </>
  );
}
