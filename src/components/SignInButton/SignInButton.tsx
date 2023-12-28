"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import Button from "../Button/Button";

import { LuArrowRightSquare } from "react-icons/lu";

const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="hidden sm:flex justify-center items-center gap-2">
          <span className="list-none md:mr-2 text-gray-600 font-semibold">
            Olá, {session?.user?.name || session?.user?.email}
          </span>
          {session.user?.image ? (
            <Image
              src={session?.user?.image}
              width={40}
              height={40}
              quality={100}
              className="rounded-full"
              alt="foto de perfil ou logotipo"
            />
          ) : (
            <FiUser size={25} />
          )}
          <Button
            variant="primary"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LuArrowRightSquare className="m-1" />
            Sair
          </Button>
        </div>
      ) : (
        <div className="hidden sm:flex justify-center items-center gap-2">
          <Button
            variant="primary"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Entrar
          </Button>
        </div>
      )}
    </>
  );
};

export default SignInButton;
