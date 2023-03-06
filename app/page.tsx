import Image from "next/image";
import { Inter } from "next/font/google";
import aikoProfile from "@/assets/images/aiko-headshot-wall-full-fs8.png";
import HomeTitle from "@/components/HomeTitle";
import SocialLinks from "@/components/SocialLinks";
import TourDates from "@/components/TourDates";
import Carousel from "@/components/GitCarousel";
import SignUpForm from "@/components/SignUpForm";
import Footer from "@/components/Footer";

const videoImages = [
  {
    src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    alt: "sun shooting through the clouds",
  },
  {
    src: "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    alt: "wheat with red sky background",
  },
  {
    src: "https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    alt: "clouds with blue sky in background",
  },
];

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main>
      <div className="flex mt-12 lg:mt-0 lg:justify-end justify-center">
        <Image
          src={aikoProfile}
          alt="Headshot of Aiko Sakazaki"
          priority
          className="relative min-w-[250px] lg:fixed bg-cover w-2/5 lg:filter lg:grayscale hover:filter-none transition ease-in-out duration-1000 top-0"
        />
      </div>
      <HomeTitle />
      <SocialLinks />
      {/* @ts-expect-error Server Component */}
      <TourDates />
      <Carousel images={videoImages} />
      <SignUpForm />
      <Footer />
    </main>
  );
}
