import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Model from "./Components/Model";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Para from "./Components/Para";
import Question from "./Components/Question";
import Channel from "./Components/Channel";
import Result from "./Components/Result";
import ModelContext from "./store/model-context";

import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Fragment } from "react";

function App() {
  const [model, setModel] = useState(null);
  const [passage, setPassage] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState();
  const [q, setQ] = useState(question);
  const [p, setP] = useState(passage);

  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log("Model loaded.");
  };

  const answerQuestion = async (e) => {
    if (model !== null) {
      console.log("Question submitted.");

      const answers = await model.findAnswers(question, passage);
      setAnswer(answers);
      console.log(answers);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  return (
    <>
      <ModelContext.Provider
        value={{
          model: model,
          setModel: setModel,
          passage: passage,
          setPassage: setPassage,
          question: question,
          setQuestion: setQuestion,
          answerQuestion: answerQuestion,
          answer: answer,
          setAnswer: setAnswer,
          answerQuestion: answerQuestion,
          p: p,
          setP: setP,
          q: q,
          setQ: setQ,
        }}
      >
        <BrowserRouter>
          {model == null ? (
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
          ) : (
            <>
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/para" exact component={Para} />
                <Route path="/question" exact component={Question} />
                <Route path="/channel" exact component={Channel} />
                <Route path="/result" exact component={Result} />
                <Route path="/model" exact component={Model} />
              </Switch>
            </>
          )}
        </BrowserRouter>
      </ModelContext.Provider>
    </>
  );
}

export default App;
