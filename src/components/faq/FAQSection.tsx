import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQSection = () => {
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold">
        <span className="text-[#21c4a8]">Frequently Asked Questions</span>
      </h1>
      <div className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold mb-2">
              What types of camping products do you offer?
            </AccordionTrigger>
            <AccordionContent>
              We offer a wide range of camping products including tents,
              sleeping bags, cooking equipment, backpacks, and outdoor apparel.
              Our products are designed to enhance your outdoor experience and
              ensure your comfort and safety.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold mb-2">
              How can I track my order?
            </AccordionTrigger>
            <AccordionContent>
              Once your order has been shipped, you will receive a tracking
              number via email. You can use this number on our website or the
              carrier's website to track the status of your shipment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold mb-2">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent>
              We offer a 7-day return policy for unused and unopened items. If
              you are not satisfied with your purchase, you can return it within
              30 days of receipt for a full refund or exchange. Please visit our
              Return Policy page for more details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
