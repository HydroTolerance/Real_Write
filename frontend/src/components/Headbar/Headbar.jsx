import React from "react";
import { IoMdFlower } from "react-icons/io";

function Headbar() {
  return (
    <div className="bg-slat-500 text-center text-2xl bg-pink-500 py-4">
      <div className="flex flex-row justify-center">
        <IoMdFlower className="text-white flex items-center justify-center my-2 me-2" />
        <h2 className="text-center font-bold text-3xl text-white ">
          Daisy Diary
        </h2>
        <IoMdFlower className="text-white flex items-center justify-center my-2 ms-2" />
      </div>
    </div>
  );
}

export default Headbar;
