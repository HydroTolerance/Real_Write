import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

export default function DiaryTable({ diary }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="border border-slate-700 rounded-md text-center">#</th>
          <th className="border border-slate-700 rounded-md text-center">
            Title
          </th>
          <th className="border border-slate-700 rounded-md text-center">
            Author
          </th>
          <th className="border border-slate-700 rounded-md text-center">
            Publisher
          </th>
          <th className="border border-slate-700 rounded-md text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {diary.map((diaries, index) => (
          <tr key={diaries._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {diaries.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {diaries.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {diaries.dateCreated}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/diary/display/${diaries._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/diary/update/${diaries._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-800" />
                </Link>
                <Link to={`/diary/delete/${diaries._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-800" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
