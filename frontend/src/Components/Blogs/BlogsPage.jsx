/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PatchAffairsForm from "../Home/core/Auth/Admin/AffairsPatchForm";
import axios from "axios";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import "./quiz.css";
import { SocialMedia } from "../../consstant/socialmedia";

function BlogsPage({ userData }) {
  console.log("🚀 ~ file: BlogsPage.jsx:17 ~ BlogsPage ~ userData:", userData);
  let role;
  if (userData) {
    if (userData.user.role === "admin") {
      role = true;
    } else {
      role = false;
    }
  } else {
    role = false;
  }

  const { id } = useParams();

  const [affairDetails, setAffairDetails] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  // const dataLength = affairDetails.data.length;
  // console.log(dataLength); // Output: 2

  // const [showans, setShowAns] = useState(new Array(affairDetails.data.length).fill(0));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/currentaffairs/${id}`
        );
        setAffairDetails(response.data.data.affairs);
        // console.log("🚀 ~ file: BlogsPage.jsx:29 ~ fetchData ~ response.data.affairs:", response.data.data.affairs)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!affairDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  const handleAnswerChange = (
    questionIndex,
    selectedOptionIndex,
    correctOptionIndex
  ) => {
    const isCorrect = selectedOptionIndex.toString() === correctOptionIndex;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOptionIndex,
    }));

    setFeedback((prev) => ({
      ...prev,
      [questionIndex]: isCorrect ? "correct" : "incorrect",
    }));
  };

  return (
    <>
      <div className=" py-[8rem] ">
        <div className=" mx-6 ">
          <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6 ">
            Current Affairs {affairDetails.category}
          </h1>
          <div className="md:mx-12 my-12">
            <img
              alt={`${affairDetails.photo}`}
              src={`${import.meta.env.VITE_BACKEND_URL_IMAGE}/img/affairs/${
                affairDetails.photo
              }`}
              className="w-full mx-auto rounded-lg"
            />
          </div>
          <SocialMedia />
          <h1 className="mt-10 text-[1.3rem] font-[550] text-center">
            {affairDetails.topic}
          </h1>
          <p className="mt-4 text-justify text-lg">
            Monthly Current Affairs PDFs are now available on UnchiUdaan.in.
            Stay updated with the latest happenings in various fields such as
            politics, economy, technology, and more. Download your copy today
            and get access to a curated selection of 10 questions related to the
            current affairs of the day, exclusively on the UnchiUdaan Facebook
            Page. <br /> <br /> Stay ahead in your UPSC, SSC, Railway, BPSC
            preparations with our Monthly Current Affairs PDFs, now available on
            UnchiUdaan.in. Dive into a wealth of knowledge covering the latest
            in politics, economy, technology, and more. Download your copy now
            and gain access to a specially curated set of 10 questions, tailored
            to UPSC, SSC, Railway, and BPSC exams, exclusively on the UnchiUdaan
            Facebook Page. In addition to the freshest updates, explore an
            extensive collection of previous monthly current affairs reports,
            all conveniently accessible in the Free Download section of this
            website. Stay informed about the events that hold significance for
            your competitive exams.
            <br />
            <br />
            These PDFs mark the continuation of the Unchiudaan Monthly Current
            Affairs series, a testament to Unchi Udaan&apos;s commitment to
            providing valuable insights tailored for UPSC, SSC, Railway, and
            BPSC aspirants. To further enhance your understanding, download the
            previous month&apos;s PDF for a more comprehensive view,
            specifically designed to boost your exam preparation.
            <br />
            <br />
            Expand your horizons by exploring a diverse range of PDFs, covering
            a wide spectrum of topics relevant to UPSC, SSC, Railway, and BPSC
            exams. From insightful articles to in-depth analyses, there&apos;s
            something for every dedicated aspirant.{" "}
          </p>
          <h1 className="mt-10 text-lg font-bold text-center">
            Daily Quiz / डेली प्रश्न
          </h1>
          <div className="faq-container rounded-lg mt-4 w-[100%]">
            {affairDetails.data.map((question, index) => (
              <div key={question._id} className="faq-question">
                <h3>
                  सवाल {index + 1}: {question.ques}
                </h3>
                <div>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="radio"
                        id={`question_${index}_option_${optionIndex}`} // Unique id
                        name={`question_${index}`}
                        value={optionIndex + 1}
                        onChange={() =>
                          handleAnswerChange(
                            index,
                            optionIndex + 1,
                            question.ans
                          )
                        }
                      />
                      <label
                        htmlFor={`question_${index}_option_${optionIndex}`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                {selectedAnswers[index] !== undefined && (
                  <>
                    <div
                      className={`font-bold mt-2 ${
                        feedback[index] === "correct"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {feedback[index] === "correct"
                        ? "Correct Answer!"
                        : "Wrong Answer!"}
                      <br />
                    </div>
                    <p>
                      {" "}
                      Correct Answer: {question.options[question.ans - 1]}{" "}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 ">
        <span className="text-center text-md ">Share with Friends :</span>
        <span className="flex text-gray-400 justify-center space-x-4">
          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaFacebook className="text-blue-500 w-7 h-7" />
          </a>

          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaTwitter className="text-blue-400 w-7 h-7" />
          </a>

          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaInstagram className="text-pink-500 w-7 h-7" />
          </a>

          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-600 w-7 h-7" />
          </a>
          <a className=" " href="" target="_blank" rel="noreferrer">
            <FaWhatsapp className="text-green-500 w-7 h-7" />
          </a>
        </span>
      </div>
      {role ? <PatchAffairsForm details={affairDetails} /> : ""}
    </>
  );
}

export default BlogsPage;
