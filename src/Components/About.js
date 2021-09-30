import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div
        className="flex flex-col 
            items-center justify-center mt-32"
      >
        <span className="text-white text-5xl font1">
          Tried of endless passages?
        </span>
        <span className="text-white text-4xl font2 mt-10">
          Don't worry! <span className="text-red-500"> Ask.ai </span> is here
        </span>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-2xl mx-auto">
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 opacity-0 sm:h-full" />
              <div>
                <div className="flex items-center text-white justify-center w-8 h-8 text-xs font-medium border rounded-full">
                  1
                </div>
              </div>
              <div className="w-px h-48 bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <img
                    className="h-10"
                    src="https://img.icons8.com/windows/32/000000/multiline-text.png"
                  />
                </div>
              </div>
              <div>
                <p className="text-2xl font1 text-red-500 mb-2 font-semibold sm:text-base">
                  Enter The Paragraph
                </p>
                <p className="text-sm font2 text-white">
                  Got an assignment? Need to do research on a topic but don't
                  have time to read through the document completely? No worries
                  just Enter the Paragraph you want to ask questions related to
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 sm:h-full" />
              <div>
                <div className="flex text-white items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                  2
                </div>
              </div>
              <div className="w-px h-48 bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <img
                    className="h-10"
                    src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-question-frequently-asked-questions-faq-bearicons-detailed-outline-bearicons-5.png"
                  />
                </div>
              </div>
              <div>
                <p className="text-2xl font1 text-red-500 mb-2 font-semibold sm:text-base">
                  Enter The Question
                </p>
                <p className="text-sm font2 text-white">
                  Enter any question you have in your mind realted to the para,
                  and let Ask.ai do it's magic!
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 sm:h-full" />
              <div>
                <div className="flex text-white items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                  3
                </div>
              </div>
              <div className="w-px h-48 opacity-0" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <img
                    className="h-9"
                    src="https://img.icons8.com/ios/50/000000/checked-checkbox--v2.png"
                  />
                </div>
              </div>
              <div>
                <p className="text-2xl font1 text-red-500 mb-2 font-semibold sm:text-base">
                  Result
                </p>
                <p className="text-sm font2 text-white">
                  And voila! We have the answer to your question and a
                  prediction score because hey there isn't one right answer to
                  all your questions ;)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
