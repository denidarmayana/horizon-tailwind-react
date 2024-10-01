/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import SidebarCard from './components/SidebarCard';
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`flex flex-col justify-center mt-7 items-center`}>
        <div className="font-poppins text-[18px] font-bold text-navy-700 dark:text-white">
          Sebara Infinity
        </div>
        <div className="font-poppins text-[16px] text-navy-700 dark:text-white">
          Internasional
        </div>
      </div>
      <div class="mt-[18px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      
    </div>
  );
};

export default Sidebar;
