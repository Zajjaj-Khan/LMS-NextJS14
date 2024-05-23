import React from "react";
import SideBar from "./_components/SideBar";
import Navbar from "./_components/Navbar";
import { auth } from "@clerk/nextjs";
const layout = ({ children }: { children: React.ReactNode }) => {
  const {userId} = auth();
  if(!userId) return;
  return <div className="h-full">
    <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
    <Navbar/>
    </div>
    <div className="hidden md:flex h-full w-56 flex-col insert-y-0 z-50 fixed">
    <SideBar/>
    </div>
    <main className="md:pl-56 pt-[80px] h-full">
    {children}
    </main>
    </div>
};

export default layout;
