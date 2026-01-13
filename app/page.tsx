import { getAllProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ofertas e Promoções Imperdíveis - Produtos Selecionados',
  description: 'Encontre as melhores ofertas e descontos em produtos selecionados. Atualizamos diariamente com as melhores promoções da internet.',
  openGraph: {
    title: 'Ofertas e Promoções Imperdíveis',
    description: 'As melhores ofertas da internet em um só lugar',
    type: 'website',
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
