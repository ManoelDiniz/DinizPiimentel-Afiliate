import type { Metadata } from 'next';
import { getProductBySlug, getAllProductSlugs } from '@/lib/products';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/ProductPage';

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Produto não encontrado',
    };
  }

  const { frontmatter } = product;
  const discount = Math.round(
    ((frontmatter.oldPrice - frontmatter.currentPrice) / frontmatter.oldPrice) * 100
  );

  // Palavras-chave de intenção de compra
  const keywords = [
    `${frontmatter.title}`,
    `${frontmatter.title} preço`,
    `${frontmatter.title} barato`,
    `onde comprar ${frontmatter.title}`,
    `${frontmatter.title} promoção`,
    `${frontmatter.title} desconto`,
    `${frontmatter.title} vale a pena`,
    `melhor preço ${frontmatter.title}`,
    frontmatter.category,
  ].join(', ');

  return {
    title: `${frontmatter.title} - ${discount}% OFF | Melhor Preço ${new Date().getFullYear()}`,
    description: `✓ ${frontmatter.title} com ${discount}% de desconto! De R$ ${frontmatter.oldPrice.toFixed(2)} por apenas R$ ${frontmatter.currentPrice.toFixed(2)}. ⭐ ${frontmatter.rating}/5 (${frontmatter.reviewCount} avaliações). Frete rápido. Compre agora!`,
    keywords,
    openGraph: {
      title: `${frontmatter.title} - ${discount}% OFF | R$ ${frontmatter.currentPrice.toFixed(2)}`,
      description: `🔥 OFERTA: ${discount}% OFF! De R$ ${frontmatter.oldPrice.toFixed(2)} por R$ ${frontmatter.currentPrice.toFixed(2)}. ⭐ ${frontmatter.rating}/5 estrelas. Entrega rápida!`,
      images: [
        {
          url: frontmatter.image || '/images/default-product.jpg',
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${frontmatter.title} - ${discount}% OFF`,
      description: `Oferta imperdível! ${discount}% de desconto.`,
      images: [frontmatter.image || '/images/default-product.jpg'],
    },
    alternates: {
      canonical: `/produto/${params.slug}`,
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
    other: {
      'price:amount': frontmatter.currentPrice.toString(),
      'price:currency': 'BRL',
      'product:availability': frontmatter.inStock ? 'in stock' : 'out of stock',
      'product:condition': 'new',
      'product:price:amount': frontmatter.currentPrice.toString(),
      'product:price:currency': 'BRL',
      'product:retailer_item_id': params.slug,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
