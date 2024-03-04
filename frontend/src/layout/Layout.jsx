import React, { useState } from "react";
import Headbar from "../components/Headbar/Headbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="p-4 md:ml-64">{children}</div>
    </>
  );
}
