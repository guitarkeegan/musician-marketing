import { db } from "@/lib/db";

async function main() {
  const user = await db.user.upsert({
    where: { email: "k@k.com" },
    update: {},
    create: {
      email: "k@k.com",
    },
  });

    const tour1 = await db.tour.create({
        data: {
        performanceDate: new Date(2023, 4, 25),
        venue: "The Theater",
        city: "Los Angeles",
        country: "United States",
        ticketsUrl: "https://github.com/guitarkeegan",
      }
    })
    const tour2 = await db.tour.create({
        data:{
            performanceDate: new Date(2023, 5, 25),
            venue: "The Peer",
            city: "San Diego",
            country: "United States",
            ticketsUrl: "https://github.com/guitarkeegan"
        }
    })
        
    const tour3 = await db.tour.create({
      data: {
        performanceDate: new Date(2023, 6, 25),
        venue: "The Office",
        city: "Kansas City",
        country: "United States",
        ticketsUrl: "https://github.com/guitarkeegan",
      }})
      

  console.log({ user, tour1, tour2, tour3 });
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
