import type { Metadata } from 'next';
import '../css/como-ganhamos.css';


export const metadata: Metadata = {
  title: 'Como Ganhamos Dinheiro',
  description: 'Entenda como funciona nosso modelo de negócio baseado em marketing de afiliados.',
};

export default function ComoGanhamosPage() {
  return (
    <div className="static-page">
      <h1>Como Ganhamos Dinheiro</h1>
      
      <section>
        <h2>Marketing de Afiliados</h2>
        <p>
          Este site participa de <strong>programas de afiliados</strong> de diversos marketplaces, 
          incluindo Amazon Associates, Mercado Livre Partners, e outros.
        </p>
        <p>
          Isso significa que quando você clica em um dos nossos links e realiza uma compra, 
          podemos receber uma pequena comissão do vendedor, sem nenhum custo adicional para você.
        </p>
      </section>

      <section>
        <h2>O Preço é o Mesmo</h2>
        <p>
          <strong>Importante:</strong> Você paga exatamente o mesmo preço que pagaria se acessasse 
          diretamente o site do vendedor. A comissão que recebemos é paga pelo marketplace, 
          não por você.
        </p>
      </section>

      <section>
        <h2>Por Que Isso Importa?</h2>
        <p>
          Essa transparência é importante para você entender:
        </p>
        <ul>
          <li>✅ Nosso site é mantido através dessas comissões</li>
          <li>✅ Você não paga nada a mais por usar nossos links</li>
          <li>✅ Continuamos independentes em nossas recomendações</li>
          <li>✅ Só recomendamos produtos que consideramos boas ofertas</li>
        </ul>
      </section>

      <section>
        <h2>Nossa Promessa</h2>
        <p>
          Comprometemo-nos a sempre priorizar a qualidade e veracidade das ofertas. 
          Não promovemos produtos apenas pela comissão - nossa reputação depende de 
          recomendar apenas ofertas reais e vantajosas.
        </p>
      </section>

      <section>
        <h2>Perguntas?</h2>
        <p>
          Se tiver alguma dúvida sobre nosso modelo de negócio, entre em 
          <a href="/contato"> contato conosco</a>.
        </p>
      </section>
    </div>
  );
}
