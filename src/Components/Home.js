import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container relative mx-auto mt-56 justify-center items-center">
        <div className="items-center justify-center flex-row flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-10">
              <h1 className="text-white font-semibold text-8xl items-center justify-center flex flex-wrap">
                <span className="ask">Ask</span>
                <span className="ai">.ai</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-16 ml-96 pl-64">
          <Link to="para">
            <button class="flex items-center pr-5 pl-3 px-2 py-2 ask tracking-wide text-black capitalize transition-colors duration-200 transform bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
              <img src="https://img.icons8.com/windows/32/000000/long-arrow-right.png" />
              <span class="mx-1">Let's Get Started</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
