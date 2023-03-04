"use client";
import { FaGreaterThan, FaLessThan } from "react-icons/fa"
import Image from "next/image";
import tempImage from "@/assets/images/temp-carousel.jpg";
import { useState } from "react";

const moveRightStyle = {
    transform: "translateX(0%)"
}

const moveLeftStyle = {
    transform: "translateX(-200%)",
    
}

const initialStyle = {
    transform: "translateX(0%)"
}

type CarouselProps = {
  media: string;
};

export default function Carousel({ media }: CarouselProps) {

  const [imageArr, setImageArr] = useState(initialStyle);

  const handleRight = () => {
    setImageArr(moveRightStyle)
  }

  const handleLeft = () => {
    setImageArr(moveLeftStyle)
  }

  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-6 md:w-[800px] text-white mt-40 overflow-hidden">
        <div className="col-span-1 flex justify-center items-center"><button onClick={handleLeft}><FaLessThan /></button></div>
        <div className="col-span-4 overflow-hidden">
          <Image
            alt="person spreading their arms with sunrise in the background"
            src={tempImage}
            height={600}
            width={800}
            style={imageArr}
          />
        </div>
        <div className="col-span-1 flex justify-center items-center"><button onClick={handleRight}><FaGreaterThan /></button></div>
      </div>
    </div>
  );
}
