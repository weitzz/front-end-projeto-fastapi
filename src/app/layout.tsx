import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "./provider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="pt-br">
        <body className={inter.className}>
          <main>{children}</main>
          <ToastContainer />
        </body>
      </html>
    </Provider>
  );
}
