import type { ReactNode } from "react";
import Navbar from "../organisms/Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-black-900 min-h-screen text-white w-full overflow-x-hidden">
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
