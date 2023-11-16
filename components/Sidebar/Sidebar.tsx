import Image from "next/image";
import Link from "next/link";
import { useContext, createContext, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { LuChevronFirst, LuChevronLast, LuMoreVertical } from "react-icons/lu";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded((curr) => !curr);
  };

  return (
    <aside className="flex-none  bg-gray-200 h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src="https://i.imgur.com/j7Q90nG.png"
            width={30}
            height={30}
            alt="logo"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>
        <div className="border-t flex p-3">
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <Link
                href="/"
                className="flex w-full text-gray-600 font-semibold  cursor-pointer pt-2.5 px-2.5"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
        <div className="flex p-3">
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <Link
                href="/cadastrar"
                className="flex w-full text-gray-600 font-semibold   cursor-pointer pt-2.5 px-2.5"
              >
                Adicionar
                <FiPlusCircle />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
