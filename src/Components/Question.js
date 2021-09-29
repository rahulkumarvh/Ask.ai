import React, { useRef, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Question.css";

import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Fragment } from "react";
import ModelContext from "../store/model-context";

const Question = () => {
  const questionRef = useRef(null);

  const ctx = useContext(ModelContext);

  const setQuestionHandler = (e) => {
    ctx.setQuestion(questionRef.current.value);
    console.log(ctx.question);
  };

  const onClick = (e) => {
    setQuestionHandler();
    ctx.answerQuestion();
  };

  return (
    <>
      <section className="container px-6 py-16 mx-auto text-center mt-20">
        <div className="main clearfix text-white">
          <form id="nl-form" className="nl-form">
            Enter Your Question
            <br />
            <input
              ref={questionRef}
              id="autoresizing"
              type="text"
              placeholder="Your Text"
            />
            <div className="mt-10">
              <Link
                to="/result"
                onClick={onClick}
                className="pr-8 text-4xl pl-8 rounded-sm px-4 py-2 ask tracking-wide text-black capitalize transition-colors duration-200 transform bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
              >
                Get Result
              </Link>
            </div>
            <div className="nl-overlay"></div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Question;
