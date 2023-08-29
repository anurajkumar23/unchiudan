import React from "react";
import Hero from "./HomeUI/Hero";
import ServicesOverview from "./HomeUI/ServicesOverview";
import Blogs from "../Blogs/Blogs";
import PdfList from "../Downloads/PdfList";
import HeroContent from "./HomeUI/HeroContent";
function Home() {
  return (
    <div className="mx-auto py-10 space-y-[8rem]">
      <Hero />
      <HeroContent/>
      <ServicesOverview />
      <Blogs />
      <PdfList />
    </div>
  );
}

export default Home;
