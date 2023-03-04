"use client";
import { FaGreaterThan, FaLessThan } from "react-icons/fa"
import Image from "next/image";
import tempImage from "@/assets/images/temp-carousel.jpg";
import { useState } from "react";
type CarouselProps = {
  media: string;
};

export default function Carousel({ media }: CarouselProps) {
  const [imageArr, setImageArr] = useState();

  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-6 md:w-[800px] text-white mt-40 overflow-hidden">
        <div className="col-span-1 flex justify-center items-center"><button><FaLessThan /></button></div>
        <div className="col-span-4">
          <Image
            alt="person spreading their arms with sunrise in the background"
            src={tempImage}
            height={600}
            width={800}
          />
        </div>
        <div className="col-span-1 flex justify-center items-center"><button><FaGreaterThan /></button></div>
      </div>
    </div>
  );
}
