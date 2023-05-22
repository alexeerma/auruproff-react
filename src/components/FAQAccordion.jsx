import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
function FAQAccordion() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion className="" open={open === 1} icon={<Icon id={1} open={open} />}>
        <div></div>
        <AccordionHeader className="text-center text-primary uppercase justify-between" onClick={() => handleOpen(1)}>
          Mis on ruutmeetri(M2) hind?
        </AccordionHeader>
        <AccordionBody className="text-center text-primary ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="justify-between text-primary uppercase "onClick={() => handleOpen(2)}>
          Kas teenust saab tellida Tallinnast väljapoole?
        </AccordionHeader>
        <AccordionBody className="text-center text-primary ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="justify-between text-primary uppercase" onClick={() => handleOpen(3)}>
          Millieid seadmeid kasutate?
        </AccordionHeader>
        <AccordionBody className="text-center text-primary ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="" open={open === 4} icon={<Icon id={4} open={open} />}>
        <div></div>
        <AccordionHeader className="text-center text-primary uppercase justify-between" onClick={() => handleOpen(4)}>
          Milline on päevane puhastusvõimekus?
        </AccordionHeader>
        <AccordionBody className="text-center text-primary ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="" open={open === 5} icon={<Icon id={5} open={open} />}>
        <div></div>
        <AccordionHeader className="text-center text-primary uppercase justify-between" onClick={() => handleOpen(5)}>
          Kas pakute pindade kaitsetöötlust?
        </AccordionHeader>
        <AccordionBody className="text-center text-primary ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="" open={open === 6} icon={<Icon id={6} open={open} />}>
        <div></div>
        <AccordionHeader className="text-center text-primary uppercase justify-between" onClick={() => handleOpen(6)}>
          Mis on konsultatsiooni hind?
        </AccordionHeader>
        <AccordionBody className="text-center text-primary ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="" open={open === 7} icon={<Icon id={7} open={open} />}>
        <div></div>
        <AccordionHeader className="text-center text-primary uppercase justify-between" onClick={() => handleOpen(7)}>
          Kas puhastate tekstiilpindasid?
        </AccordionHeader>
        <AccordionBody className="text-center text-primary ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default FAQAccordion;
