import Hero from "./HomeUI/Hero";
import ServicesOverview from "./HomeUI/ServicesOverview";
import HomeBlogs from "../Blogs/HomeBlogs";
import HomePdf from "../Downloads/HomePdf";

function Home() {
  return (
    <div className="mx-auto py-10 space-y-[8rem]">
      <Hero />
      <ServicesOverview />
      <HomeBlogs />
      <HomePdf />
    </div>
  );
}

export default Home;
