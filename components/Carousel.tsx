import Image from "next/image"
import tempImage from "@/assets/images/temp-carousel.jpg";
type CarouselProps = {
    media: string
}

export default function Carousel({media}: CarouselProps){
   return (
    <div className="grid grid-rows-1 grid-cols-3 md:w-[800px] text-white mt-40">
        <div className="">go left</div>
        <div><Image
         alt="person spreading their arms with sunrise in the background"
         src={tempImage}
         height={600}
         width={800} /></div>
        <div>go right</div>
    </div>
   )
}