import React, { useState } from "react";
import { IoMdFlower } from "react-icons/io";

function Headbar({ closeSide }) {
  return (
    <div
      className={`bg-slat-500 text-2xl bg-white py-4 ${
        closeSide ? "" : "md:ml-64"
      }`}
    >
      <h2 className="font-bold text-3xl text-pink-500 ms-8">Diary</h2>
    </div>
  );
}

export default Headbar;
