import React, { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is Meow Coders?",
      answer:
        "Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo Meow mewo mewo ",
      isOpen: false,
    },
  ]);

  const toggleQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, isOpen: !q.isOpen } : q))
    );
  };

  return (
    <div className="pb-[18rem]">
      <div className="faq-container rounded-[20px]">
        {questions.map((q, index) => (
          <div
            key={q.id}
            className={`faq-question ${q.isOpen ? "active" : ""}`}
          >
            <h3
              onClick={() => toggleQuestion(q.id)} 
            >
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
                <button className="btn">Answer 1</button>
                <button className="btn">Answer 2</button>
                <button className="btn">Answer 3</button>
                <button className="btn">Answer 4</button>
              </div>
              <p>{q.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
