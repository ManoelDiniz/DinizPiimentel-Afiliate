import type { Metadata } from 'next';
import './globals.css';
import Analytics from '@/components/Analytics';
import SeoMetrics from '@/components/SeoMetrics';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  metadataBase: new URL('https://dinizpiimentel.com.br'),
  title: {
    default: 'Melhores Ofertas e Promoções 2026 | Diniz Promoções',
    template: '%s | Diniz Promoções',
  },
  description: '🔥 Ofertas imperdíveis atualizadas diariamente! Produtos testados com até 70% OFF. Compare preços, veja avaliações reais e economize. ✓ Frete grátis ✓ Cashback',
  keywords: ['ofertas', 'promoções', 'descontos', 'produtos baratos', 'compras online', 'cupom desconto', 'cashback', 'frete grátis'],
  authors: [{ name: 'Diniz Pimentel' }],
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
  verification: {
    google: 'seu-codigo-google-search-console',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <nav className="nav">
          <a href="/" className="logo">
            <span className="logo-icon">💎</span>
            <span className="logo-text">Diniz Promoções</span>
          </a>
          <div className="nav-links">
            <a href="/sobre">Sobre</a>
            <a href="/como-ganhamos">Como Ganhamos</a>
            <a href="/privacidade">Privacidade</a>
            <a href="/contato">Contato</a>
          </div>
        </nav>
        
        <Breadcrumbs />
        
        {children}
        
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>💎 Diniz Promoções</h3>
              <p>As melhores ofertas da internet</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Site</h4>
                <a href="/sobre">Sobre</a>
                <a href="/contato">Contato</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="/como-ganhamos">Como Ganhamos</a>
                <a href="/privacidade">Privacidade</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Diniz Pimentel. Todos os direitos reservados.</p>
          <p className="disclaimer">
            Este site participa de programas de afiliados. Ganhamos comissões 
            por compras qualificadas através dos nossos links.
          </p>
          </div>
        </footer>

        <Analytics />
        <SeoMetrics />
      </body>
    </html>
  );
}
