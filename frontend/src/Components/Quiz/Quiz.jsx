import React, { useState } from "react";
import "./quiz.css";

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
    <div className="pb-[18rem]">
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
                    onClick={() => handleAnswerClick(answerIndex, answer.correct)}
                    onMouseEnter={() => {
                      if (!answer.correct) {
                        // Hide the tick and cross marks for incorrect answers on hover
                        document.querySelector(".tick-mark").style.display = "none";
                        document.querySelector(".cross-mark").style.display = "none";
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
              {selectedAnswer !== null && (
                <p>Explanation: {q.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
