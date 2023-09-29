import ViewContainer from "@components/layouts/view-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

const FAQData: Array<{
  title: string;
  description: string;
}> = [
    {
      title: "What types of locks and home fittings do you offer?",
      description: "What types of locks and home fittings do you offer?"
    },
    {
      title: "Are your products suitable for both residential and commercial use?",
      description: "Yes, our products are designed to meet the security and design needs of both residential and commercial properties."
    },
    {
      title: "Do you provide installation services?",
      description: "While we don't offer installation services directly, we can recommend trusted professionals in your area who can assist with the installation of our products.",
    },
    {
      title: "Can I get assistance in choosing the right products for my home?",
      description: "Absolutely! Our team of experts is available to provide personalized recommendations based on your specific needs, style preferences, and budget."
    },
    {
      title: "Are your locks and home fittings compatible with smart home systems?",
      description: "Yes, many of our products are compatible with smart home systems, offering advanced features like remote access and integration with voice assistants."
    },
    {
      title: "What is your warranty policy?",
      description: "We stand behind the quality of our products. Our warranty policy varies by product, so please refer to the specific product's documentation or contact our customer support for detailed warranty information."
    }
  ];

const FAQSection: React.FunctionComponent = () => {
  return (
    <section className="faq-section" id="faq">
      <ViewContainer className="my-36">
        <div className="faq-cta-content-container rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-700 to-neutral-900 flex flex-row items-stretch justify-between border relative">
          <div className="faq-content-section px-10 pt-10 pb-16">
            <h1 className="faq-headline text-6xl font-semibold text-white leading-[68px] left-12 bottom-12 absolute">
              Elara Locks & <br />Home Fittings FAQs
            </h1>
          </div>
          <div className="faq-container bg-white min-h-[100%] max-h-[840px] w-[540px] p-24">
            <Accordion type={"single"} collapsible>
              {FAQData.map((faq, faqIndex) => (
                <AccordionItem value={faqIndex.toString()} key={faqIndex}>
                  <AccordionTrigger className="text-left">{faq.title}</AccordionTrigger>
                  <AccordionContent>
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </ViewContainer>
    </section>
  )
};

export default FAQSection;