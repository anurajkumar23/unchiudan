import React from "react";
import Hero from "./HomeUI/Hero";
import ServicesOverview from "./HomeUI/ServicesOverview";
import HomeBlogs from "../Blogs/HomeBlogs";
import PdfList from "../Downloads/PdfList";

function Home() {
  return (
    <div className="mx-auto py-10 space-y-[8rem]">
      <Hero />
      <ServicesOverview />
      <HomeBlogs />
      <PdfList />
    </div>
  );
}

export default Home;
