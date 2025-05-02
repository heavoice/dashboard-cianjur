import React from "react";

export const getStatusColor = (percentage) => {
  if (percentage <= 40) return "text-red-500";
  if (percentage <= 65) return "text-yellow-500";
  return "text-green-500";
};

const getBarColor = (percentage) => {
  if (percentage <= 40) return "bg-red-500";
  if (percentage <= 65) return "bg-yellow-500";
  return "bg-green-500";
};

const CompletionCell = ({ percentage }) => {
  return (
    <td className="px-6 py-4">
      <div className={`font-semibold ${getStatusColor(percentage)}`}>
        {percentage}%
      </div>
      <div className="w-20 bg-gray-200 h-1 mt-1">
        <div
          className={`${getBarColor(percentage)} h-1 `}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </td>
  );
};

export default CompletionCell;
