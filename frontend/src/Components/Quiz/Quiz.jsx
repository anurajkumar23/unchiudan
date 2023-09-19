import  { useState, useEffect } from "react";
import "./quiz.css";
import {
  FaDownload,
  FaFileAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

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
    <div className="mx-auto py-[8rem] ">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="mx-0 col-span-2 xl:mx-0 p-4 md:mx-0 overflow-y-auto hid lg:my-0">
        <h1 className="text-center font-bold text-2xl md:text-3xl mb-6">
          Daily Quiz / डेली प्रश्न of Junly 2023 Set no- 205
        </h1>
        <img
          alt="meow"
          src="/Images/upsc.jpeg"
          className="w-full mx-auto rounded-lg"
        />
        <div className="w-full md:w-3/4 mx-auto mt-8 border-2 border-gray-300 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <FaFileAlt className="w-12 h-12" />
            <h1 className="text-center text-lg">
              Daily Quiz / डेली प्रश्न of Junly 2023 Download Set no- 205
            </h1>
          </div>
          <div className="flex justify-between mt-4">
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
        <div className="flex justify-between mt-6">
          <span className="text-center text-md">Share with Friends:</span>
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
        <h1 className="mt-10 text-lg font-bold text-center">
          Daily Quiz / डेली प्रश्न of Junly 2023 Download Set no- 205
        </h1>
        <div className="faq-container rounded-lg mt-4">
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
      </div>
        <Sidebar/>
    </div>
    </div>
  );
};

export default Quiz;
