import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headbar from "../Headbar/Headbar";
import { CiMenuBurger } from "react-icons/ci";

export default function Sidebar() {
  const [closeSide, setCloseSide] = useState(false);
  return (
    <>
      <Headbar closeSide={closeSide} />
      <aside
        className={`fixed z-40 bottom-0 left-0 w-64 h-screen ${
          closeSide ? "hidden" : "max-md:hidden"
        }`}
      >
        <div className="h-full bg-pink-400 border relative">
          <button
            className="p-2 rounded text-white absolute right-0"
            onClick={() => setCloseSide(!closeSide)}
          >
            <CiMenuBurger className="text-xl" />
          </button>
          <ul className="absolute top-10 right-0 left-0 text-center">
            <li>
              <li>
                <div className="border-2 rounded-full w-28 h-28 mx-auto mb-5"></div>
              </li>
              <Link to="/home">
                <div className="p-2 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-pink-400 hover:text-white hover:transition duration-300">
                  Your Diary
                </div>
              </Link>
              <Link to="/home">
                <div className="p-2 bg-slate-100 shadow-md  mx-3 rounded-lg mb-3 hover:bg-pink-400 hover:text-white hover:transition duration-300">
                  Logout
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
