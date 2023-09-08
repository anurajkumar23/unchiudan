import React, { useState } from "react";
import "./quiz.css";
import {
  FaDownload,
  FaFileAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaSearch,
} from "react-icons/fa";
const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is Meow Coders?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue whale", correct: false },
        { text: "Mewooo", correct: true },
        { text: "Giraffe", correct: false },
      ],
      answer:
        "Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo ",
      isOpen: false,
    },
  ]);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const toggleQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, isOpen: !q.isOpen } : q))
    );
    // Reset selected answer when toggling questions
    setSelectedAnswer(null);
  };

  const handleAnswerClick = (answerIndex, isCorrect) => {
    // Set the selected answer index
    setSelectedAnswer(answerIndex);

    // You can handle the correct/incorrect logic here
    if (isCorrect) {
      // Handle correct answer
    } else {
      // Handle incorrect answer
    }
  };

  return (
    <div className="mx-auto py-[8rem] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="mx-0 col-span-2 xl:mx-0 p-4 md:mx-0 overflow-y-auto lg:my-0">
          <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6 ">
            Daily Quiz / डेली प्रश्न of Junly 2023 Set no- 205
          </h1>
          <div className="mx-6 my-12">
            <img
              alt="meow"
              src="/Images/upsc.jpeg"
              class="w-full mx-auto rounded-lg"
            />
          </div>
          <div className="w-18 md:mx-12 flex-col p-4 border border-2 mx-4 rounded-lg mt-16">
            <div className="flex justify-between space-x-3 ">
              <FaFileAlt className="w-12 h-12" />

              <h1 className="text-center text-lg ">
                Daily Quiz / डेली प्रश्न of Junly 2023 Download Set no- 205
              </h1>
            </div>
            <div className="flex justify-between md:mx-12  mt-4">
              <span>Size: 5MB</span> <span>Downloads: 125</span>
              <span>Last Updated: 30 August</span>
            </div>
            <a href="#">
              <div className="mt-6 flex w-fit hover:bg-teal-500 px-3 py-1 justify-between space-x-3 text-lg mx-auto rounded-full bg-teal-300 text-white">
                <FaDownload className="w-6 h-6" />
                <span>Download</span>
              </div>
            </a>
          </div>
          <div className="flex justify-between mt-6  ">
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
          <h1 className="mt-10 text-[1.3rem] font-[550] text-center">
            Daily Quiz / डेली प्रश्न of Junly 2023 Download Set no- 205
          </h1>
          <div className="faq-container rounded-[20px]">
            {questions.map((q, index) => (
              <div
                key={q.id}
                className={`faq-question ${q.isOpen ? "active" : ""}`}
              >
                <h3 onClick={() => toggleQuestion(q.id)}>
                  सवाल {index + 1}: {q.question}{" "}
                  <span className={`faq-arrow ${q.isOpen ? "open" : ""}`}>
                    &#9660;
                  </span>
                </h3>
                <div
                  className="faq-answer"
                  style={{ display: q.isOpen ? "block" : "none" }}
                >
                  <div id="answer-buttons">
                    {q.answers.map((answer, answerIndex) => (
                      <button
                        className={`btn ${
                          selectedAnswer === answerIndex
                            ? answer.correct
                              ? "correct"
                              : "incorrect"
                            : ""
                        }`}
                        key={answerIndex}
                        onClick={() =>
                          handleAnswerClick(answerIndex, answer.correct)
                        }
                        onMouseEnter={() => {
                          if (!answer.correct) {
                            // Hide the tick and cross marks for incorrect answers on hover
                            document.querySelector(".tick-mark").style.display =
                              "none";
                            document.querySelector(
                              ".cross-mark"
                            ).style.display = "none";
                          }
                        }}
                      >
                        {answer.text}
                        {selectedAnswer === answerIndex && answer.correct && (
                          <span className="tick-mark">&#10003;</span>
                        )}
                        {selectedAnswer === answerIndex && !answer.correct && (
                          <span className="cross-mark">&#10007;</span>
                        )}
                      </button>
                    ))}
                  </div>
                  {selectedAnswer !== null && <p>Explanation: {q.answer}</p>}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Quiz;
