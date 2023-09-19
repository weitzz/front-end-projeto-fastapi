'use client'
import Link from "next/link";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    };
    return (
        <>
            <header className="bg-sky-600 relative">
                <div className="max-w-7xl mx-auto flex items-center justify-around p-2">
                    <Image src='https://i.imgur.com/j7Q90nG.png' width={55} height={50} alt='logo' />
                    <div className="flex-1 w-full ml-5 content-center">
                        <div className="relative md:w-1/2">
                            <input type="search"
                                className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                placeholder="Pesquisar..." />
                            <div className="absolute top-0 left-0 inline-flex items-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={onClick}
                        className="md:hidden uppercase cursor-pointer font-bold text-neutral-100">
                        Menu
                    </div>
                    <nav className={`${!active && "hidden"} absolute flex flex-col bg-sky-600  top-full w-full left-0 z-20 p-2
                    md:static md:w-auto md:flex`}>
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
            </header >
        </>
    );
};

export default Header;
