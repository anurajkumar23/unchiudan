import Hero from "./HomeUI/Hero";
import ServicesOverview from "./HomeUI/ServicesOverview";
import HomeBlogs from "../Blogs/HomeBlogs";
import HomePdf from "../Downloads/HomePdf";
import CTAButton from "../Home/core/Homepage/Button";
import {FaArrowRight} from "react-icons/fa";
import HighlightText from '../Home/core/Homepage/HighlightText';
import TimelineSection from '../Home/core/Homepage/TimelineSection'
import LearningLanguageSection from '../Home/core/Homepage/LearningLanguageSection'
function Home() {
  return (
    <div className="mx-auto py-10 space-y-[8rem]">
      <Hero />
      <ServicesOverview />
              <div className="bg-pure-greys-5 text-richblack-700">
            <div className="homepage_bg h-[320px]">
            {/* Explore Full Catagory Section */}
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                <div className="lg:h-[150px]"></div>
                <div className="flex flex-row gap-7 text-white lg:mt-8">
                <CTAButton active={true} linkto={"/signup"}>
                    <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <FaArrowRight />
                    </div>
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                    Learn More
                </CTAButton>
                </div>
            </div>
            </div>

            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
            {/* Job that is in Demand - Section 1 */}
            <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                <div className="text-4xl font-semibold lg:w-[45%] ">
                Get the latest current Affairs{" "}
                <HighlightText text={"helloooooooo."} />
                </div>
                <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                <div className="text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus mollitia at soluta enim obcaecati prov
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
    </div>
  );
}

export default Home;
