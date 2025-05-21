import CompletionCell from "../../hooks/statusColor";
import { FaCheck, FaArrowUp } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { projectData } from "./ProjectData";
import { notifier, analytics, orderoverview } from "./Constant";

export const MainDashboard = () => {
  return (
    <div className="text-2xl font-bold flex flex-col gap-2">
      <p className="font-nunito font-bold">Dashboard Utama</p>
      <p className="font-nunito font-normal text-sm">
        Dashboard Utama adalah tampilan utama atau halaman pertama dari sebuah
        aplikasi atau sistem yang memberikan gambaran umum tentang status atau
        informasi penting secara ringkas.
      </p>
      <div className="w-full flex flex-row gap-6 rounded-lg mt-6">
        {notifier.map((item) => (
          <div
            key={item.id}
            className="w-full h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white"
          >
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-col">
                <p className="font-normal text-sm text-gray-400">
                  {item.title}
                </p>
                <p className="text-xl font-bold">{item.value}</p>
              </div>

              <div className="bg-black p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                {item.icon}
              </div>
            </div>
            <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

            <div className="w-full flex flex-row items-center gap-1">
              <span className="font-bold text-base text-green-500">
                {item.growth.percentage}
              </span>
              <p className="text-gray-400 text-sm font-normal">
                {item.growth.note}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Visualisasi */}
      <div className="w-full flex flex-row gap-6 rounded-lg mt-6 overflow-hidden">
        {analytics.map((item) => (
          <div
            key={item.id}
            className="w-full min-w-0 h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white"
          >
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-col">
                <p className="font-semibold text-black text-base">
                  {item.topic}
                </p>

                {typeof item.subtopic === "string" ? (
                  <p className="font-normal text-gray-400 text-base">
                    {item.subtopic}
                  </p>
                ) : (
                  <p className="font-normal text-gray-400 text-base">
                    <span className="font-semibold">{`(${item.subtopic.firstpart})`}</span>{" "}
                    {item.subtopic.secondpart}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full h-auto">{item.chart}</div>
          </div>
        ))}
      </div>
      {/* Project & Orders */}
      <div className="w-full flex flex-row gap-6 mt-6 overflow-hidden">
        <div className="w-2/3 h-auto rounded-lg border bg-white font-nunito">
          {/* Head */}
          <div className="flex flex-row justify-between items-center p-4">
            <div>
              <p className="font-bold text-base">Projects</p>
              <div className="flex flex-row mt-3">
                <FaCheck className="text-sm mt-0.5 text-blue-600" />
                <p className="ml-2 text-sm text-gray-500">
                  30 done
                  <span className="font-normal ml-1">this month</span>
                </p>
              </div>
            </div>
            <div>
              <button>
                <SlOptionsVertical className="text-sm mt-0.5 text-gray-500" />
              </button>
            </div>
          </div>
          {/* Table */}
          <div className="relative overflow-x-auto py-2 ">
            <table className="w-full text-sm text-left text-gray-500 font-nunito">
              <thead className="text-xs text-gray-700 uppercase border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Companies
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Member
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Budget
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Completion
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectData.map((project, index) => (
                  <tr key={index} className="bg-white border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap flex flex-row"
                    >
                      {project.icon}
                      <span className="ml-5 text-sm">{project.title}</span>
                    </th>
                    <td className="px-6 py-4">
                      <div className="flex flex-row">
                        {project.members.map((member, i) => (
                          <img
                            key={i}
                            src={member}
                            className="w-6 h-6 rounded-full aspect-square object-cover"
                            alt={`member-${i}`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">{project.budget}</td>
                    <td>
                      <CompletionCell percentage={project.percentage} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/3 h-auto rounded-lg border bg-white">
          <div className="flex flex-col p-4">
            <p className="font-semibold text-base">Orders overview</p>
            <p className="flex flex-row text-sm text-gray-500 mt-3">
              <FaArrowUp className="mt-1 text-green-500" />
              <span className="ml-2">
                24% <span className="font-normal">this month</span>
              </span>
            </p>
            {/* Content */}
            <div className="mt-6 px-2">
              {orderoverview.map((item) => (
                <div key={item.id} className="flex flex-row items-start">
                  <div className="flex flex-col items-center">
                    {item.icon}
                    <div className="w-px h-8 bg-gray-300 mt-1" />
                  </div>

                  <div className="flex flex-col ml-2">
                    <p className="text-sm font-semibold">{item.main}</p>
                    <p className="text-xs text-gray-500 font-semibold">
                      {item.secondary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
