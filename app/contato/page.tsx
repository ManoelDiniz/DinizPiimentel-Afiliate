import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato conosco para dúvidas, sugestões ou parcerias.',
};

export default function ContatoPage() {
  return (
    <div className="static-page">
      <h1>Contato</h1>
      
      <section>
        <h2>Fale Conosco</h2>
        <p>
          Estamos aqui para ajudar! Entre em contato através dos canais abaixo:
        </p>
      </section>

      <section>
        <h2>📧 Email</h2>
        <p>
          <strong>contato@seudominio.com.br</strong>
        </p>
        <p>
          Respondemos em até 48 horas úteis.
        </p>
      </section>

      <section>
        <h2>💬 Redes Sociais</h2>
        <ul>
          <li>Instagram: @seudominio</li>
          <li>Twitter: @seudominio</li>
          <li>Facebook: /seudominio</li>
        </ul>
      </section>

      <section>
        <h2>❓ Dúvidas Frequentes</h2>
        
        <div className="faq">
          <h3>Como vocês escolhem os produtos?</h3>
          <p>
            Analisamos diariamente ofertas de diversos marketplaces, verificando histórico 
            de preços, avaliações e qualidade dos produtos.
          </p>
        </div>

        <div className="faq">
          <h3>Os preços estão sempre atualizados?</h3>
          <p>
            Sim! Verificamos e atualizamos os preços diariamente. No entanto, os preços 
            podem variar rapidamente nos marketplaces.
          </p>
        </div>

        <div className="faq">
          <h3>Vocês vendem os produtos?</h3>
          <p>
            Não. Somos um site de divulgação de ofertas. Os produtos são vendidos e 
            entregues pelos marketplaces parceiros.
          </p>
        </div>

        <div className="faq">
          <h3>Posso sugerir produtos?</h3>
          <p>
            Sim! Envie sua sugestão para nosso email. Adoramos receber dicas de ofertas!
          </p>
        </div>
      </section>

      <section>
        <h2>🤝 Parcerias</h2>
        <p>
          Para propostas de parceria ou colaboração, entre em contato através do email:
        </p>
        <p>
          <strong>parcerias@seudominio.com.br</strong>
        </p>
      </section>
    </div>
  );
}
