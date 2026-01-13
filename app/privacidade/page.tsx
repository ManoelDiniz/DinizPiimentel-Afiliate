import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Nossa política de privacidade e como tratamos seus dados.',
};

export default function PrivacidadePage() {
  return (
    <div className="static-page">
      <h1>Política de Privacidade</h1>
      
      <p className="last-updated">Última atualização: 13 de janeiro de 2026</p>

      <section>
        <h2>1. Informações Coletadas</h2>
        <p>
          Este site coleta informações de uso através do Google Analytics, incluindo:
        </p>
        <ul>
          <li>Páginas visitadas</li>
          <li>Tempo de permanência</li>
          <li>Origem do tráfego</li>
          <li>Dispositivo e navegador utilizados</li>
          <li>Interações com links de afiliados</li>
        </ul>
      </section>

      <section>
        <h2>2. Uso das Informações</h2>
        <p>
          Utilizamos essas informações para:
        </p>
        <ul>
          <li>Melhorar a experiência do usuário</li>
          <li>Entender quais ofertas são mais relevantes</li>
          <li>Otimizar o conteúdo e navegação do site</li>
          <li>Medir o desempenho das páginas</li>
        </ul>
      </section>

      <section>
        <h2>3. Cookies</h2>
        <p>
          Este site utiliza cookies para:
        </p>
        <ul>
          <li>Google Analytics (análise de tráfego)</li>
          <li>Links de afiliados (rastreamento de conversões)</li>
        </ul>
        <p>
          Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode 
          afetar algumas funcionalidades do site.
        </p>
      </section>

      <section>
        <h2>4. Compartilhamento de Dados</h2>
        <p>
          <strong>Não vendemos, alugamos ou compartilhamos seus dados pessoais</strong> 
          com terceiros para fins de marketing.
        </p>
        <p>
          Dados anônimos de uso podem ser compartilhados com:
        </p>
        <ul>
          <li>Google Analytics (análise de tráfego)</li>
          <li>Programas de afiliados (apenas cliques e conversões)</li>
        </ul>
      </section>

      <section>
        <h2>5. Links Externos</h2>
        <p>
          Este site contém links para sites externos (marketplaces). Não nos responsabilizamos 
          pelas políticas de privacidade desses sites.
        </p>
      </section>

      <section>
        <h2>6. Seus Direitos</h2>
        <p>
          De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
        </p>
        <ul>
          <li>Solicitar acesso aos seus dados</li>
          <li>Solicitar correção de dados</li>
          <li>Solicitar exclusão de dados</li>
          <li>Revogar consentimento</li>
        </ul>
      </section>

      <section>
        <h2>7. Contato</h2>
        <p>
          Para questões sobre privacidade, entre em <a href="/contato">contato</a>.
        </p>
      </section>
    </div>
  );
}
