import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { IButtonProps } from "./typeButton";

const ColorVariant: Record<string, string> = {
  primary:
    "border-2  cursor-pointer border-white bg-green-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600 hover:border-2 hover:border-green-600 ",
  secondary:
    "border-2  border-white bg-gray-600 text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white hover:text-gray-600 hover:border-2 hover:border-gray-600 transition duration-150 ease-in-out",
  default:
    "border-2  border-white text-neutral-100 rounded-lg px-12 py-2 flex flex-row items-center justify-center font-semibold hover:bg-white  hover:text-green-600 transition duration-150 ease-in-out",
};

const Button = ({
  children,
  className,
  href,
  variant = "default",
  ...props
}: IButtonProps) => {
  const buttonClass = twMerge(ColorVariant[variant], className);

  if (href) {
    <Link href={href} className={buttonClass}>
      {children}
    </Link>;
  }
  return (
    <button {...props} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
