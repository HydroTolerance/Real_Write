import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import DiaryModal from "./DiaryModal";

export default function DiarySingleCard({ diaries }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={diaries._id}
      className="border-2 border-dashed border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl bg-white"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {diaries.dateCreated}
      </h2>
      <h4 className="my-2 text-gray-500">{diaries.id}</h4>
      <div className="flex justify-start diariess-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{diaries.title}</h2>
      </div>
      <div className="flex justify-start diariess-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-2">{diaries.author}</h2>
      </div>
      <div className="flex justify-between diariess-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/diary/display/${diaries._id}`}>
          <BsInfoCircle className="text-2xl text-green-500 hover:text-black" />
        </Link>
        <Link to={`/diary/update/${diaries._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-black" />
        </Link>
        <Link to={`/diary/delete/${diaries._id}`}>
          <MdOutlineDelete className="text-2xl text-red-500 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <DiaryModal diaries={diaries} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
