import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Finto integrate with existing ERP systems?",
      answer: "Finto seamlessly integrates with major ERP systems including SAP, Oracle, Microsoft Dynamics, and others through our robust API connections and data connectors. Our integration process typically takes 2-4 weeks and includes full data migration support."
    },
    {
      question: "What level of accuracy can we expect from AI invoice processing?",
      answer: "Finto achieves over 99% accuracy in invoice data extraction at both document and line-item levels. Our AI continuously learns from your specific invoice patterns and improves accuracy over time through machine learning algorithms."
    },
    {
      question: "How secure is our financial data with Finto?",
      answer: "Security is our top priority. Finto is SOC 2 Type II certified, GDPR compliant, and uses enterprise-grade encryption for data in transit and at rest. All data is processed in secure, European data centers with strict access controls."
    },
    {
      question: "What is the typical implementation timeline?",
      answer: "Most implementations are completed within 4-8 weeks, depending on the complexity of your existing systems and the number of integrations required. We provide dedicated implementation support and training throughout the process."
    },
    {
      question: "Can Finto handle multiple currencies and tax regulations?",
      answer: "Yes, Finto supports multi-currency processing and automatically handles various tax regulations including VAT, GST, and regional tax requirements across different countries and jurisdictions."
    },
    {
      question: "What kind of support do you provide post-implementation?",
      answer: "We provide 24/7 technical support, regular system updates, ongoing training, and a dedicated customer success manager to ensure you get maximum value from the platform."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-finto-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-finto-gray-dark">
            Get answers to common questions about Finto's AI accounting platform
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-finto-gray-light rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-finto-black font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-finto-gray-dark pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;