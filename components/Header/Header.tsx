"use client";
import Link from "next/link";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import Image from "next/image";
import Search from "../InputSearch";

const Header = () => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  return (
    <>
      <header className="bg-sky-600 absolute w-full flex ">
        <div className=" mx-auto flex items-center justify-between p-2">
          <Search />
          <div
            onClick={onClick}
            className="md:hidden uppercase cursor-pointer font-bold text-neutral-100"
          >
            Menu
          </div>
          <nav
            className={`${
              !active && "hidden"
            } absolute flex flex-col bg-sky-600  top-full w-full left-0 z-20 p-2
                    md:static md:w-auto md:flex`}
          >
            <ul className="md:flex-row md:flex">
              <li className="list-none md:mr-2">
                <Link
                  href="/"
                  className="flex w-full text-neutral-100 font-bold  hover:text-[#fff]  cursor-pointerpt-2.5 px-2.5"
                >
                  Home
                </Link>
              </li>

              <li className="list-none md:mr-2 ">
                <Link
                  href="/cadastrar"
                  className="flex w-full text-neutral-100 font-bold  hover:text-[#fff]  cursor-pointerpt-2.5 px-2.5"
                >
                  Adicionar
                  <FiPlusCircle />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
