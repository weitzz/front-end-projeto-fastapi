import Header from "@/src/components/Header/Header";
import Sidebar from "@/src/components/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className=" bg-gray-100 relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="mt-44 bg-white mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
}
