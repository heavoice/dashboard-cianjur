import {
  FaTachometerAlt,
  FaClipboardList,
  FaHardHat,
  FaHandsHelping,
  FaSignOutAlt,
} from "react-icons/fa";

export const sidebarItems = [
  {
    label: "Dashboard Utama",
    icon: <FaTachometerAlt className="w-5 h-5" />,
  },
  {
    label: "Manajemen Program & Kegiatan",
    icon: <FaClipboardList className="w-5 h-5" />,
  },
  {
    label: "Monitoring Infrastruktur & Proyek Fisik",
    icon: <FaHardHat className="w-5 h-5" />,
  },
  {
    label: "Layanan Publik & Kesejahteraan",
    icon: <FaHandsHelping className="w-5 h-5" />,
  },
  {
    label: "Logout",
    icon: <FaSignOutAlt className="w-5 h-5" />,
  },
];
