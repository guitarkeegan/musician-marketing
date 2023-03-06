import { db } from "@/lib/db";
import Button from "./Button";

const MY_GITHUB = "https://github.com/guitarkeegan";

const linkStyle =
  "px-4 text-md transition border-white border-solid border hover:bg-white hover:text-black ease-in-out duration-500 w-[122px] flex justify-center items-center";

const getData = async () => {
  const tourDates = await db.tour.findMany({
    orderBy: {
      performanceDate: "asc",
    },
    where: {
      performanceDate: {
        gte: new Date().toISOString(),
      },
    },
    take: 10,
  });
  return { tourDates };
};

export default async function TourDates() {
  const { tourDates } = await getData();

  return (
    <div className="flex sm:ml-12 flex-col gap-6 mt-12 lg:mt-24 z-10">
      {tourDates.map((date, i) => (
        <div className="flex text-white md:max-width-1/2 font-thin" key={i}>
          <div className="w-[150px]">
            {new Date(date.performanceDate).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).toUpperCase()}
          </div>
          <div className="sm:w-[400px]">
            <h3>{date.venue.toUpperCase()}</h3>
            <h3>{`${date.city.toUpperCase()}, ${date.country.toUpperCase()}`}</h3>
          </div>
          <a href={MY_GITHUB} className={linkStyle}>TICKETS</a>
        </div>
      ))}
    </div>
  );
}
