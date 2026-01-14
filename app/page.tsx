import { getAllProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Melhores Ofertas e Promoções 2026 | Produtos com Desconto',
  description: '🔥 Ofertas imperdíveis atualizadas diariamente! Produtos com até 70% OFF. Compare preços, veja avaliações reais e economize. ✓ Frete grátis ✓ Cashback ✓ Produtos testados.',
  keywords: [
    'ofertas',
    'promoções',
    'produtos com desconto',
    'onde comprar barato',
    'melhores preços',
    'cupom de desconto',
    'ofertas do dia',
    'produtos em promoção',
    'comprar online',
    'ofertas imperdíveis',
  ].join(', '),
  openGraph: {
    title: 'Melhores Ofertas e Promoções 2026 | Economize Agora',
    description: '🔥 Produtos selecionados com até 70% OFF! Atualizamos todos os dias. Confira!',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="container">
      
      <header className="header">
        <div className="header-badge">🔥 Novidades</div>
        <h1 className="header-title">Ofertas Exclusivas</h1>
        <p className="header-subtitle">Produtos selecionados com os melhores descontos da internet</p>
      </header>

      <main className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.frontmatter.slug} product={product} />
        ))}
      </main>
    </div>
  );
}
