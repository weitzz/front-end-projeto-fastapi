"use client";
import Link from "next/link";
import { useState } from "react";
import { LuArrowRightSquare } from "react-icons/lu";
import Search from "../InputSearch";
import SignInButton from "../SignInButton/SignInButton";

const Header = () => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  return (
    <>
      <header className="bg-white absolute w-full">
        <div className=" mx-auto flex items-center justify-around p-2">
          <h2 className="text-md font-semibold text-gray-600">Dashboard</h2>
          <Search />
          <div
            onClick={onClick}
            className="md:hidden uppercase cursor-pointer font-semibold text-gray-600"
          >
            Menu
          </div>
          <nav
            className={`${
              !active && "hidden"
            } absolute flex flex-col bg-white  top-full w-full left-0 z-20 p-2
                    md:static md:w-auto md:flex`}
          >
            <ul className="md:flex-row md:flex flex-row items-center justify-center">
              <SignInButton />
              {/* <li className="list-none md:mr-2 text-gray-600 font-semibold">
                Olá,usuario
              </li>
              <li
                className="list-none md:mr-2 flex  cursor-pointer
               border-2 w-auto border-white bg-green-600
                    text-neutral-100 rounded-lg px-12 py-2  flex-row items-center
                    justify-center font-semibold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-150 ease-in-out"
              >
                <Link href="/login">Sair</Link>
                <LuArrowRightSquare className="m-1" />
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
