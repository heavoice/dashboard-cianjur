import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const PrevButton = ({ disabled, onClick }) => (
  <button
    className="embla__button embla__button--prev text-sm text-white bg-[#22a9e1] hover:bg-blue-600 p-2 rounded-full disabled:opacity-50"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    <FaArrowLeft />
  </button>
);

export const NextButton = ({ disabled, onClick }) => (
  <button
    className="embla__button embla__button--next text-sm text-white bg-[#22a9e1] hover:bg-blue-600 p-2 rounded-full disabled:opacity-50"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    <FaArrowRight />
  </button>
);
