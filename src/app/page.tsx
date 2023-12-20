import { getServerSession } from "next-auth";
import Login from "./login/page";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect("/medicamentos");
  }

  return <Login />;
}
