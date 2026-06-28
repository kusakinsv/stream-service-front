import React from "react";
import { Outlet } from "react-router";

import { NavBar } from "@/app/components/navigateBar/NavBar.tsx";


export const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};