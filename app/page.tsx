import Image from "next/image";
import { Inter } from "next/font/google";
import aikoProfile from "@/assets/images/aiko-headshot-wall-full-fade-black-fs8.png";
import HomeTitle from "@/components/HomeTitle";
import SocialLinks from "@/components/SocialLinks";
import TourDates from "@/components/TourDates";
import Carousel from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main>
      <div className="flex justify-end">
      <Image src={aikoProfile} alt="Headshot of Aiko Sakazaki" priority
      className="fixed bg-cover w-2/5 filter grayscale hover:filter-none transition ease-in-out duration-1000 top-0"/>
      </div>
      <HomeTitle />
      <SocialLinks />
      {/* @ts-expect-error Server Component */}
      <TourDates />
      <Carousel media={"video"} />
    </main>
  );
}
