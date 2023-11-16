"use client";
import Medicamento from "@/components/Medicamento/Medicamento";
import { TMedicamento } from "@/types";
import { getDataAll } from "./api/routes";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Table from "@/components/Table/Table";
import Login from "./login/page";

export default async function Home() {
  return (
    <main className="bg-gray-200">
      <Sidebar />
      <div className="flex-1 md:flex h-screen relative">
        {/* <Header />
        <Table /> */}
      </div>
    </main>
  );
}
