import  { useState, useEffect } from "react";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import "./quiz.css"

import { Link } from "react-router-dom";
function BlogsPage() {

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
    {
      id: 2,
      question: "What is Meow Coderrrs?",
      answers: [
        { text: "Sharkk", correct: false },
        { text: "Blue whaleee", correct: true },
        { text: "Mewooooo", correct: false },
        { text: "Girafffe", correct: false },
      ],
      answer:
        "Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo ",
      isOpen: false,
    },
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 5,
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
    {
      id: 6,
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
    {
      id: 7,
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
    {
      id: 8,
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
    {
      id: 9,
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
    {
      id: 10,
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

  // State to store selected answers for each question
  const [selectedAnswers, setSelectedAnswers] = useState(
    questions.reduce((acc, q) => {
      acc[q.id] = null;
      return acc;
    }, {})
  );

  useEffect(() => {
    // Load previously saved selected answers from local storage (if available)
    const savedAnswers = JSON.parse(localStorage.getItem("selectedAnswers"));
    if (savedAnswers) {
      setSelectedAnswers(savedAnswers);
    }
  }, []);

  // Function to save selected answers to local storage
  const saveSelectedAnswersToLocalStorage = () => {
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
  };

  const toggleQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === id
          ? { ...q, isOpen: !q.isOpen }
          : { ...q, isOpen: false }
      )
    );
  };

  const handleAnswerClick = (questionId, answerIndex, isCorrect) => {
    // Set the selected answer for the current question
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: answerIndex,
    }));

    // You can handle the correct/incorrect logic here
    if (isCorrect) {
      // Handle correct answer
    } else {
      // Handle incorrect answer
    }

    saveSelectedAnswersToLocalStorage();
  };

  return (
    <div className=" py-[8rem] ">
      <div className=" mx-6 ">
        <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6 ">
          Current Affairs UPSC title 5
        </h1>
        <div className="md:mx-12 my-12">
          <img
            alt="meow"
            src="/Images/upsc.jpeg"
            class="w-full mx-auto rounded-lg"
          />
        </div>

        <div className="flex justify-between mt-6 ">
          <span className="text-center text-md  ">Share with Friends :</span>
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
          Monthly Current Affairs of Jun 2020 PDF Download Set no- 5
        </h1>
        <p className="mt-4 text-justify text-lg">
          Monthly Current Affairs of Jun 2020 PDF Download is now out by
          UnchiUdaan.in You can Download it here and Get Daily 10 Questions of
          Latest Current Affairs of Jun 2020 on UnchiUdaan Facebook Page. You
          can also Download other Previous Monthly Current Affairs of Jun 2020
          along with Current affairs of Jun available in Free Download page of
          this Website. <br /> <br /> This PDF is the Successive Series of
          Unchiudaan Monthly Current affairs PDF of Jun that is Being Issued by
          Unchi Udaan. You can also Download the Previous Month PDF for Free
          Monthly PDF. You can also download other PDFs{" "}
        </p>
        <h1 className="mt-10 text-lg font-bold text-center">
          Daily Quiz / डेली प्रश्न of Junly 2023 
        </h1>
        <div className="faq-container rounded-lg mt-4 w-[100%]">
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
                        selectedAnswers[q.id] === answerIndex
                          ? answer.correct
                            ? "correct"
                            : "incorrect"
                          : ""
                      }`}
                      key={answerIndex}
                      onClick={() =>
                        handleAnswerClick(q.id, answerIndex, answer.correct)
                      }
                    >
                      {answer.text}
                      {selectedAnswers[q.id] === answerIndex && (
                        answer.correct ? (
                          <span className="tick-mark">&#10003;</span>
                        ) : (
                          <span className="cross-mark">&#10007;</span>
                        )
                      )}
                    </button>
                  ))}
                </div>
                {selectedAnswers[q.id] !== null && (
                  <p className="mt-4">
                    Explanation: {q.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
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
      </div>

      <div className="w-full  flex justify-between mt-8">
        <Link to="/">
          <div className="flex flex-col mx-1 justify-center space-y-2 rounded-lg md:mx-10 border-2 p-2">
            <span className="flex space-x-3 justify-center">
              <span>
                <FaArrowAltCircleLeft className="w-7 h-7" />
              </span>
              <span className="text-lg">Previous Post</span>
            </span>
            <span>UPSC Notes Note Set- 4</span>
          </div>
        </Link>
        <Link to="/">
          <div className="flex flex-col  justify-center mx-1 rounded-lg space-y-2  md:mx-10 border-2 p-2">
            <span className="flex space-x-3 justify-center">
              <span className="text-lg">Next Post</span>
              <span>
                <FaArrowAltCircleRight className="w-7 h-7" />
              </span>
            </span>
            <span>UPSC Notes Note Set- 6</span>
          </div>
        </Link>
        
      </div>
    </div>
    
  );
}

export default BlogsPage;
