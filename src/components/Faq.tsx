import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Props {
  content: Array<any>;
}

function Faq(props: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-4 w-full"
    >
      {props.content.map((content, index) => (
        <AccordionItem
          value={`item-${index}`}
          key={index}
        >
          <AccordionTrigger className="flex justify-between items-center font-bold sm:text-xl w-full px-2">
            <span>{content.question}</span>
          </AccordionTrigger>
          <AccordionContent className="flex justify-between items-center text-sm sm:text-lg w-full px-2 py-1">
            {content.answer}
          </AccordionContent>
          <hr className="border-b-1 border-gray-400" />
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Faq;
