import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Para.css";

import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Fragment } from "react";
import ModelContext from "../store/model-context";

const Para = () => {
  const history = useHistory();
  const passageRef = useRef(null);
  const ctx = useContext(ModelContext);

  const setPassageHandler = (e) => {
    ctx.setPassage((prevState) => {
      return passageRef.current.value;
    });
    // ctx.setPassage(passageRef.current.value);
    console.log(ctx.passage);
  };

  const onClick = (e) => {
    setPassageHandler();
  };

  return (
    <>
      <section className="container px-6 py-16 mx-auto text-center mt-20">
        <div className="main clearfix text-white">
          <form id="nl-form" className="nl-form">
            Enter The Paragraph
            <br />
            <input type="text" ref={passageRef} placeholder="Your Text" />
            <div className="mt-10">
              <Link
                to="/question"
                onClick={onClick}
                className="pr-8 text-4xl pl-8 rounded-sm px-4 py-2 ask tracking-wide text-black capitalize transition-colors duration-200 transform bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
              >
                Next
              </Link>
            </div>
            <div className="nl-overlay"></div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Para;
