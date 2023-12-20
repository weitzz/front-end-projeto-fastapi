"use client";

import Link from "next/link";
import { useState } from "react";
import { FiHome, FiPlusCircle } from "react-icons/fi";
import {
  LuChevronFirst,
  LuChevronLast,
  LuLayoutDashboard,
  LuMoreVertical,
} from "react-icons/lu";
import { TbBrandProducthunt, TbHealthRecognition } from "react-icons/tb";
const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded((curr) => !curr);
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Medicamentos",
      path: "/",
      icon: <LuLayoutDashboard size={25} />,
    },
    {
      id: "products",
      label: "Products",
      path: "/products",
      icon: <TbBrandProducthunt size={25} />,
    },
  ];

  return (
    <aside className="flex-none bg-gray-200 h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <TbHealthRecognition
            size={50}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-green-200"
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
            <div className="leading-4 flex w-full   items-center cursor-pointer p-2 text-gray-600 font-semibold hover:bg-green-200">
              <FiHome className="m-1" />
              <Link href="/medicamentos">Medicamentos</Link>
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
            <div className="leading-4 flex items-center w-full cursor-pointer p-2 text-gray-600 font-semibold hover:bg-green-200">
              <FiPlusCircle className="m-1" />
              <Link href="/cadastrar">Adicionar</Link>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
