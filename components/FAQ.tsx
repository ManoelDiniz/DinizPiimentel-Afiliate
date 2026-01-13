'use client';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  productName?: string;
}

export default function FAQ({ items, productName }: FAQProps) {
  // Schema.org JSON-LD para FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="faq-section">
        <h2>Perguntas Frequentes {productName ? `sobre ${productName}` : ''}</h2>
        <div className="faq-list">
          {items.map((item, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">{item.question}</summary>
              <div 
                className="faq-answer" 
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
