import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Product, ProductFrontmatter } from '@/types/product';

const productsDirectory = path.join(process.cwd(), 'content/produtos');

export function getAllProductSlugs(): string[] {
  const fileNames = fs.readdirSync(productsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const fullPath = path.join(productsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Processar markdown para HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      frontmatter: data as ProductFrontmatter,
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}

export async function getAllProducts(): Promise<Product[]> {
  const slugs = getAllProductSlugs();
  const products = await Promise.all(
    slugs.map((slug) => getProductBySlug(slug))
  );
  
  const filteredProducts = products
    .filter((product): product is Product => product !== null)
    .sort((a, b) => {
     
      return new Date(b.frontmatter.lastUpdated).getTime() - 
             new Date(a.frontmatter.lastUpdated).getTime();
    });

  return filteredProducts;
}
