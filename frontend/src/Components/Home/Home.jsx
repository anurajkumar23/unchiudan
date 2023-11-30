import Hero from "./HomeUI/Hero";
import ServicesOverview from "./HomeUI/ServicesOverview";
import HomeBlogs from "../Blogs/HomeBlogs";
import HomePdf from "../Downloads/HomePdf";
import CTAButton from "../Home/core/Homepage/Button";
import Contact from "../contact/contact"

import HighlightText from "../Home/core/Homepage/HighlightText";
import TimelineSection from "../Home/core/Homepage/TimelineSection";
import LearningLanguageSection from "../Home/core/Homepage/LearningLanguageSection";



function Home() {

  return (
    <div className=" bg-pure-greys-5 mx-auto py-10 space-y-[8rem]">
      <Hero />
      <ServicesOverview />
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] h-[130px] ">
              Get the latest <HighlightText text={"Update with ऊँची उड़ान"} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                Enhance your learning experience with our expert educator and
                gain exclusive access to our comprehensive study resources.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>
      <HomeBlogs />
      <HomePdf />
      <Contact/>

    
    </div>
  );
}

export default Home;
