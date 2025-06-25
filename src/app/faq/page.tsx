
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is this API completely free to use?",
    answer: "Yes, the Arabia API Hub is completely free for all types of projects, including commercial ones. There are no hidden fees or rate limits.",
  },
  {
    question: "Do I need an API key to access the data?",
    answer: "No, you do not need an API key. All endpoints are public and can be accessed without any authentication.",
  },
  {
    question: "What languages are supported for the data response?",
    answer: "The API supports both English ('en') and Arabic ('ar'). You can specify your preferred language using the `?lang=ar` query parameter on any endpoint. English is the default.",
  },
  {
    question: "How accurate is the data?",
    answer: "The data is sourced from reliable public databases and is regularly maintained. However, if you find any discrepancies, please feel free to open an issue on our GitHub repository.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Find answers to common questions about using the Arabia API Hub.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
