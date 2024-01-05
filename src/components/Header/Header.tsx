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
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
