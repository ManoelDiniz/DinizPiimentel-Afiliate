import type { Metadata } from 'next';
import './globals.css';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://dinizpiimentel.com.br'),
  title: {
    default: 'Ofertas e Promoções | Diniz Promoções',
    template: '%s | Diniz Promoções',
  },
  description: 'Encontre as melhores ofertas e promoções da internet. Produtos selecionados e atualizados diariamente.',
  keywords: ['ofertas', 'promoções', 'descontos', 'produtos', 'compras'],
  authors: [{ name: 'Diniz Pimentel' }],
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
