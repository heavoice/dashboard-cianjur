import React, { useState, useEffect } from "react";

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

  const [activeIndex, setActiveIndex] = useState(0); // State to track the active FAQ

  useEffect(() => {
    const $ = window.$;

    const owl = $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 1024: { items: 3 } },
    });

    // Sync the active index with carousel changes
    owl.on("changed.owl.carousel", (event) => {
      const currentIndex = event.item.index % faqs.length; // Get the current index
      setActiveIndex(currentIndex); // Update the active index
    });

    return () => {
      owl.off("changed.owl.carousel"); // Clean up event listener on unmount
    };
  }, [faqs.length]);

  // Function to navigate carousel based on button click
  const handleNavigate = (index) => {
    setActiveIndex(index); // Update active index
    const $ = window.$;
    $(".owl-carousel").trigger("to.owl.carousel", [index, 300]); // Navigate carousel to the selected index
  };

  return (
    <div className="flex justify-center w-full bg-slate-50 font-nunito py-10">
      <div className="text-center w-full max-w-screen-xl px-4">
        {/* Heading Section */}
        <h2 className="text-4xl font-extrabold text-blue-600 uppercase mb-8 tracking-wider">
          Frequently Asked Questions
        </h2>

        {/* Owl Carousel Wrapper */}
        <div className="flex justify-center">
          <div className="owl-carousel">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-72 mx-auto sm:w-full bg-white rounded-lg border-blue-500 border-2 p-6 flex flex-col items-center justify-between transition-transform duration-200"
              >
                <h3 className="text-xl font-bold text-blue-500 mb-4 text-center">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-start">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="pt-4 flex justify-center space-x-2">
          {faqs.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => handleNavigate(index + 1)} // Handle button click
                className={`rounded-full p-2 border-2 ${
                  activeIndex === index
                    ? "bg-transparent border-blue-500 text-blue-500"
                    : "bg-blue-500 text-white"
                } hover:bg-blue-500 hover:text-white transition duration-200`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
