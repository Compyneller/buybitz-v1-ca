import React from "react";
import bg from "../../assets/v1/Line elements.svg";

import { Container } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

const SubHero = ({ heading }) => {
  return (
    <div className="min-h-[70vh] py-20 pt-32 pb-20 md:pt-0 md:pb-0 w-full flex flex-col justify-center relative z-0 bg-[#090622]">
      <img
        src={bg}
        className="absolute top-0 left-0 right-0 bottom-0 w-full object-cover h-full z-[-1] opacity-30"
        alt=""
      />
      <Container className="text-center flex flex-col items-center">
        <h1 className="mb-4 text-6xl font-semibold text-white">{heading}</h1>
        <p className="flex gap-2 text-center text-white text-xl items-center">
          Home <IoIosArrowForward color="white" size={24} /> {heading}
        </p>
      </Container>
    </div>
  );
};

export default SubHero;
