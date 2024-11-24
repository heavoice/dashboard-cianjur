import React, { useEffect } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript, allowing HTML to be written within JavaScript.",
    },
    {
      question: "What are props?",
      answer:
        "Props are short for properties. They allow data to be passed from a parent component to a child component.",
    },
    {
      question: "What are states?",
      answer:
        "State is a JavaScript object that holds data that may change over time.",
    },
  ];

  useEffect(() => {
    const $ = window.$;

    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      responsive: {},
    });
  }, []);

  return (
    <div className="flex justify-center w-full bg-slate-50 font-nunito py-10">
      <div className="text-center w-full max-w-screen-xl px-4">
        {/* Heading Section */}
        <h2 className="text-4xl font-extrabold text-blue-600 uppercase mb-8 tracking-wider">
          Frequently Asked Questions
        </h2>

        {/* Owl Carousel Wrapper */}
        <div className="flex justify-center">
          <div className="owl-carousel flex items-center">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-72 sm:w-full bg-white rounded-lg border-blue-500 border-2 p-6 flex flex-col items-center justify-between transition-transform duration-200"
              >
                <h3 className="text-xl font-bold text-blue-500 mb-4 text-center">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-center">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
