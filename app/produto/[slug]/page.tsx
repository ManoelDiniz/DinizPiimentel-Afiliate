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

  return {
    title: `${frontmatter.title} - ${discount}% OFF`,
    description: `${frontmatter.title} por apenas R$ ${frontmatter.currentPrice.toFixed(2)}. De R$ ${frontmatter.oldPrice.toFixed(2)} por R$ ${frontmatter.currentPrice.toFixed(2)}. Aproveite essa oferta incrível!`,
    openGraph: {
      title: `${frontmatter.title} - ${discount}% OFF`,
      description: `Oferta imperdível! ${discount}% de desconto. Compre agora!`,
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
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
