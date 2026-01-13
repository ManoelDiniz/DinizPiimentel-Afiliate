import type { Metadata } from 'next';
import '../css/sobre.css';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça nossa missão de encontrar as melhores ofertas para você economizar.',
};

export default function SobrePage() {
  return (
    <div className="static-page">
      <h1>Sobre Nós</h1>
      
      <section>
        <h2>Nossa Missão</h2>
        <p>
          Somos apaixonados por encontrar as melhores ofertas e promoções da internet. 
          Nosso objetivo é simples: ajudar você a economizar dinheiro em produtos de qualidade.
        </p>
      </section>

      <section>
        <h2>Como Funciona</h2>
        <p>
          Diariamente, nossa equipe pesquisa e seleciona produtos com os melhores descontos 
          em marketplaces confiáveis. Analisamos preços, avaliações e histórico para garantir 
          que você encontre apenas ofertas reais e vantajosas.
        </p>
      </section>

      <section>
        <h2>Nosso Compromisso</h2>
        <ul>
          <li>✅ Ofertas verificadas diariamente</li>
          <li>✅ Produtos de marketplaces confiáveis</li>
          <li>✅ Informações transparentes sobre preços</li>
          <li>✅ Avaliações reais de consumidores</li>
          <li>✅ Sem spam ou propagandas enganosas</li>
        </ul>
      </section>

      <section>
        <h2>Transparência</h2>
        <p>
          Acreditamos na transparência total. Por isso, deixamos claro que este site 
          participa de programas de afiliados. Saiba mais em nossa página 
          <a href="/como-ganhamos"> Como Ganhamos Dinheiro</a>.
        </p>
      </section>
    </div>
  );
}
