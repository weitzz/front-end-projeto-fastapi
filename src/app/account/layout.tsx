import Button from "@/src/components/Button/Button";
import { FiLogIn } from "react-icons/fi";

interface AccountLayoutProps {
  children: React.ReactNode;
}
const AccountLayout = ({ children }: AccountLayoutProps) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AccountLayout;
