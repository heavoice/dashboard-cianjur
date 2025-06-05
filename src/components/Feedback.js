import { useState } from "react";
import { MdOutlineFeedback } from "react-icons/md";
import { Modal } from "./Modal";

export const Feedback = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="group fixed -right-10 -translate-y-1/2 h-12 hover:h-24 transition-all duration-300 ease-in-out w-32 z-20 top-1/2 bg-[#22a9e1] text-white -rotate-90 rounded-t-lg flex justify-center items-start overflow-hidden"
      >
        <MdOutlineFeedback className="text-lg mr-1 mt-4 transition-transform duration-300 ease-in-out" />
        <span className="font-semibold ml-1 transition-all duration-300 ease-in-out mt-3">
          Feedback
        </span>
      </button>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
};
