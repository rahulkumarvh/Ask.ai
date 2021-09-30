import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import ModelContext from "../store/model-context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Channel = () => {
  const history = useHistory();
  const ctx = useContext(ModelContext);

  useEffect(() => {
    history.push("/result");
    console.log(ctx.passage);
    console.log(ctx.question);
    ctx.answerQuestion();
  }, []);

  return (
    <>
      <div
        className="h-screen flex flex-col 
  items-center justify-center"
      >
        <div>Model Loading</div>
        <Loader
          type="Puff"
          color="#EF4444
    "
          height={60}
          width={60}
        />
      </div>
    </>
  );
};

export default Channel;
