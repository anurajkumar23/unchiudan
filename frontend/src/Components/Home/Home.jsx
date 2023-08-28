import React from "react";
import Hero from "./HomeUI/Hero";
import ServicesOverview from "./HomeUI/ServicesOverview";
import BlogComp from "../Blogs/BlogComp";
function Home() {
  return (
    <div className="mx-auto py-10 space-y-10">
      <Hero />
      <ServicesOverview />
      <BlogComp />
    </div>
  );
}

export default Home;
