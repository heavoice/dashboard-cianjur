import React from "react";

export const VisionMission = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="flex flex-col gap-10 w-full max-w-5xl items-center justify-center mb-28">
        {/* Centered "Vision & Mission" heading */}
        <h1 className="text-5xl font-bold text-gray-800 text-center pb-8">
          Vision & Mission
        </h1>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 w-full items-center justify-center">
          <div className="flex flex-col h-auto sm:h-[70%] w-full sm:w-[50%] bg-black text-white p-8 font-nunito rounded-3xl text-center">
            <h1 className="text-4xl pb-4">Vision</h1>
            <p>
              Irure est aliquip aliqua ex proident ex consectetur ad. Laborum
              veniam irure nisi ea. Minim laborum non ad irure. Reprehenderit
              ipsum ut dolor id ut sunt aliquip nostrud mollit irure. Sit
              proident fugiat tempor ipsum aliquip mollit aliqua dolor aute qui
              id. Et deserunt anim anim id laborum nostrud nostrud id laboris
              incididunt anim excepteur. Et Lorem amet labore mollit fugiat
              dolor. Excepteur occaecat duis quis amet et incididunt dolor in.
              Consectetur officia quis eiusmod qui qui laboris do. Duis amet
              occaecat quis consequat eu laborum sit nostrud aliquip.
            </p>
          </div>
          <div className="flex flex-col h-auto sm:h-[70%] w-full sm:w-[50%] bg-black text-white p-8 font-nunito rounded-3xl text-center">
            <h1 className="text-4xl pb-4">Mission</h1>
            <p>
              Irure est aliquip aliqua ex proident ex consectetur ad. Laborum
              veniam irure nisi ea. Minim laborum non ad irure. Reprehenderit
              ipsum ut dolor id ut sunt aliquip nostrud mollit irure. Sit
              proident fugiat tempor ipsum aliquip mollit aliqua dolor aute qui
              id. Et deserunt anim anim id laborum nostrud nostrud id laboris
              incididunt anim excepteur. Et Lorem amet labore mollit fugiat
              dolor. Excepteur occaecat duis quis amet et incididunt dolor in.
              Consectetur officia quis eiusmod qui qui laboris do. Duis amet
              occaecat quis consequat eu laborum sit nostrud aliquip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
