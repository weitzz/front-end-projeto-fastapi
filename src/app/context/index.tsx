// "use client";

// import { useSession } from "next-auth/react";
// import { usePathname, useRouter } from "next/navigation";
// import { createContext, useEffect, useState } from "react";
// import { BarLoader } from "react-spinners";

// export const GlobalContext = createContext(null);

// export default function GlobalState({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [sideBarOpen, setSideBarOpen] = useState(false);
//   const [loader, setLoader] = useState(true);
//   const { status } = useSession();
//   const pathName = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     if (status === "loading") setLoader(true);
//     if (
//       status === "unauthenticated" &&
//       pathName.includes("/register" || "/login")
//     ) {
//       router.push("/unauth-page");
//       setLoader(false);
//     }

//     if (status === "authenticated") setLoader(false);
//   }, [status]);

//   if (loader) {
//     return (
//       <div className="w-full min-h-screen flex justify-center items-center">
//         <BarLoader loading={loader} color="#16a34a" width={100} height={5} />
//       </div>
//     );
//   }

//   return (
//     <GlobalContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// }
