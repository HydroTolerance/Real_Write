import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

export default function DiaryCard({ diary }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {diary.map((item) => (
        <div
          key={item._id}
          className="border border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
        >
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
            {item.dateCreated}
          </h2>
          <h4 className="my-2 text-gray-500">{item.id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="my-1">{item.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="my-2">{item.author}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
            <Link to={`/diary/display/${item._id}`}>
              <BsInfoCircle className="text-2xl text-green-500 hover:text-black" />
            </Link>
            <Link to={`/diary/update/${item._id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-black" />
            </Link>
            <Link to={`/diary/delete/${item._id}`}>
              <MdOutlineDelete className="text-2xl text-red-500 hover:text-black" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
