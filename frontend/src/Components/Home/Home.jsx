import React from "react";
import Hero from "./HomeUI/Hero";
import ServicesOverview from "./HomeUI/ServicesOverview";
import BlogList from "../Blogs/BlogComp";
function Home() {
  return (
    <div className="mx-auto py-10 space-y-10">
      <Hero />
      <ServicesOverview />
      <BlogList />
    </div>
  );
}

export default Home;
