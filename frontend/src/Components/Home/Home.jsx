import React from "react";
import Hero from "./HomeUI/Hero";
import ServicesOverview from "./HomeUI/ServicesOverview";
import Blogs from "../Blogs/Blogs";
function Home() {
  return (
    <div className="mx-auto py-10 space-y-[8rem]">
      <Hero />
      <ServicesOverview />
      <Blogs />
    </div>
  );
}

export default Home;
