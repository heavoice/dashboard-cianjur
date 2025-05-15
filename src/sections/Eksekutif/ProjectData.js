import {
  SiAdobepremierepro,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import winter from "../../assets/img/winter.jpeg";
import karina from "../../assets/img/Karina.jpeg";

export const projectData = [
  {
    icon: <SiAdobexd className="text-2xl" />,
    title: "Material XD Version",
    members: [winter, karina, winter],
    budget: "$14,000",
    percentage: 72,
  },
  {
    icon: <SiAdobephotoshop className="text-2xl" />,
    title: "Add Progress Track",
    members: [winter, karina, karina],
    budget: "$3,000",
    percentage: 26,
  },
  {
    icon: <SiAdobepremierepro className="text-2xl" />,
    title: "Fix Platform Errors",
    members: [winter, karina],
    budget: "Not set",
    percentage: 52,
  },
  {
    icon: <SiAdobexd className="text-2xl" />,
    title: "Launch our Mobile App",
    members: [winter],
    budget: "$20,500",
    percentage: 100,
  },
  {
    icon: <SiAdobephotoshop className="text-2xl" />,
    title: "Add the New Pricing Page",
    members: [winter, winter],
    budget: "$500",
    percentage: 82,
  },
  {
    icon: <SiAdobepremierepro className="text-2xl" />,
    title: "Redesign New Online Shop",
    members: [karina, winter, winter],
    budget: "$2000",
    percentage: 82,
  },
];
