import { IoPrint } from "react-icons/io5";
import WeeklyViewsChart from "./WeeklyChart";
import { IoMdNotificationsOutline } from "react-icons/io";

export const notifier = [
  {
    id: 1,
    title: "Today's Money",
    value: "5.300K",
    icon: <IoPrint className="filter invert" />,
    growth: { percentage: "+55%", note: "than last week" },
  },
  {
    id: 2,
    title: "Today's Money",
    value: "5.300K",
    icon: <IoPrint className="filter invert" />,
    growth: { percentage: "+55%", note: "than last week" },
  },
  {
    id: 3,
    title: "Today's Money",
    value: "5.300K",
    icon: <IoPrint className="filter invert" />,
    growth: { percentage: "+20%", note: "than last week" },
  },
  {
    id: 4,
    title: "Today's Money",
    value: "5.300K",
    icon: <IoPrint className="filter invert" />,
    growth: { percentage: "+55%", note: "than last week" },
  },
];

export const analytics = [
  {
    id: 1,
    topic: "Website Views",
    subtopic: "Last Campaign Performance",
    chart: <WeeklyViewsChart />,
  },
  {
    id: 2,
    topic: "Daily Sales",
    subtopic: { firstpart: "+15%", secondpart: "increase in today sales." },
    chart: <WeeklyViewsChart />,
  },
  {
    id: 1,
    topic: "Completed Tasks",
    subtopic: "Last Campaign Performance",
    chart: <WeeklyViewsChart />,
  },
];

export const orderoverview = [
  {
    id: 1,
    icon: <IoMdNotificationsOutline className="text-2xl" />,
    main: "$2400, Design changes",
    secondary: "22 DEC 7:20 PM",
  },
  {
    id: 2,
    icon: <IoMdNotificationsOutline className="text-2xl" />,
    main: "$2400, Design changes",
    secondary: "22 DEC 7:20 PM",
  },
  {
    id: 3,
    icon: <IoMdNotificationsOutline className="text-2xl" />,
    main: "$2400, Design changes",
    secondary: "22 DEC 7:20 PM",
  },
  {
    id: 4,
    icon: <IoMdNotificationsOutline className="text-2xl" />,
    main: "$2400, Design changes",
    secondary: "22 DEC 7:20 PM",
  },
  {
    id: 5,
    icon: <IoMdNotificationsOutline className="text-2xl" />,
    main: "$2400, Design changes",
    secondary: "22 DEC 7:20 PM",
  },
  {
    id: 6,
    icon: <IoMdNotificationsOutline className="text-2xl" />,
    main: "$2400, Design changes",
    secondary: "22 DEC 7:20 PM",
  },
];
