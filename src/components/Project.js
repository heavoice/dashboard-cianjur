import React from "react";

export const Project = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A web-based platform with personalized recommendations.",
      link: "#",
    },
    {
      title: "Social Media App",
      description:
        "A responsive social media app with real-time chat features.",
      link: "#",
    },
    {
      title: "Biometric System",
      description: "An advanced biometric authentication system.",
      link: "#",
    },
  ];

  return (
    <div className="w-full h-auto min-h-screen bg-slate-50 font-nunito py-10 px-4 flex items-center justify-center">
      {/* Container untuk heading dan cards */}
      <div className="text-center w-full max-w-screen-xl">
        {/* Heading Section */}
        <h2 className="text-4xl font-extrabold text-blue-600 uppercase mb-4 tracking-wider">
          Represent our project
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Explore some of our featured projects and initiatives.
        </p>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 w-full sm:w-72 md:w-80 lg:w-96 transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-blue-500 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block bg-blue-500 text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
