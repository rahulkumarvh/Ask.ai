import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import ModelContext from "../store/model-context";
import "./Result.css";

const Result = () => {
  const history = useHistory();

  const ctx = useContext(ModelContext);
  const resultHandler = (e) => {
    e.preventDefault();
    history.push("/");
    console.log(ctx.passage);
    console.log(ctx.question);
  };

  return (
    <>
      <section className="container px-6 py-10 mx-auto text-center mt-1 font">
        <div className="main clearfix text-white">
          <form id="nl-form" className="nl-form">
            Result
            <br />
          </form>
          <section class="py-1 bg-blueGray-50">
            <div class="w-full xl:w-4/12 px-4 mx-auto mt-5">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-red-500 text-black">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                  <div class="flex flex-wrap items-center">
                    <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 class="font-semibold text-base text-blueGray-700">
                        Here are the ans to your questions
                      </h3>
                    </div>
                    <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button
                        class="bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        to="/para"
                        onClick={resultHandler}
                      >
                        Try another
                      </button>
                    </div>
                  </div>
                </div>

                <div class="block w-full overflow-x-auto">
                  <table class="items-center w-full border-collapse">
                    <thead class="thead-light ">
                      <tr>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Answer
                        </th>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ctx.answer ? (
                        ctx.answer.map((ans, idx) => (
                          <tr>
                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {ans.text}
                            </th>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                              {Math.floor(ans.score * 100) / 100}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            Sorry no results found
                          </th>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Result;
