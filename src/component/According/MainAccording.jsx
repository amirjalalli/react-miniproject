import React from "react";
import { useState } from "react";
import "./MainAccording.css";
import data from "./data";
import SingleQuestion from "./Question";

export const MainAccording = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default MainAccording;
