import React, { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { teamMembers } from "../constant/TeamData";

export const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("UI/UX");

  // Filter anggota berdasarkan kategori
  const filteredMembers = teamMembers.filter(
    (member) => member.category === selectedCategory
  );

  return (
    <div className="w-full h-auto bg-slate-50 font-nunito p-4">
      <div className="text-center w-full px-4">
        {/* Heading Section */}
        <h2 className="text-4xl font-extrabold text-blue-600 uppercase mb-8 tracking-wider">
          Represent our Team
        </h2>

        {/* Team Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            className={`${
              selectedCategory === "UI/UX" ? "bg-blue-600" : "bg-blue-500"
            } rounded-full text-white px-6 py-3 text-sm sm:text-base`}
            onClick={() => setSelectedCategory("UI/UX")}
          >
            UI/UX Design
          </button>
          <button
            className={`${
              selectedCategory === "Web" ? "bg-blue-600" : "bg-blue-500"
            } rounded-full text-white px-6 py-3 text-sm sm:text-base`}
            onClick={() => setSelectedCategory("Web")}
          >
            Web Developer
          </button>
          <button
            className={`${
              selectedCategory === "Mobile" ? "bg-blue-600" : "bg-blue-500"
            } rounded-full text-white px-6 py-3 text-sm sm:text-base`}
            onClick={() => setSelectedCategory("Mobile")}
          >
            Mobile Developer
          </button>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              {/* Profile Picture */}
              <img
                src={member.profilePicture}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />

              {/* Name and Role */}
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-blue-500 text-sm">{member.role}</p>

              {/* Description */}
              <p className="text-center text-gray-600 text-sm mt-3">
                {member.description}
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-xl"
                >
                  <FaGithub />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
