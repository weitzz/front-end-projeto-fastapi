import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Login from "./account/login/page";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect("/medicamentos");
  }

  return <Login />;
}
