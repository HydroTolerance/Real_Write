import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { Space, Table, Tag } from "antd";

export default function DiaryTable({ diary }) {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const columns = [
    {
      name: "#",
      render: (text, item, index) => index + 1,
      sorter: (a, b) => a.index.localeCompare(b.index),
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Mood",
      dataIndex: "author",
      filters: [
        {
          text: "asdfasdfdsf",
          value: "asdfasdfdsf",
        },
      ],
      onFilter: (value, record) => record.author.startsWith(value),
      filterSearch: true,
    },
    {
      title: "Date Created",
      dataIndex: "dateCreated",
      render: (_, item) =>
        new Date(item.dateCreated).toLocaleString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
    {
      title: "Action",
      render: (diary) => (
        <div className="flex gap-x-4">
          <Link to={`/diary/display/${diary._id}`}>
            <BsInfoCircle className="text-2xl text-green-800" />
          </Link>
          <Link to={`/diary/update/${diary._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-800" />
          </Link>
          <Link to={`/diary/delete/${diary._id}`}>
            <MdOutlineDelete className="text-2xl text-red-800" />
          </Link>
        </div>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={diary.map((item, index) => ({ ...item, index }))}
      pagination
      paginationPerPage={10}
      onChange={onChange}
    />
    /*<table className="w-full">
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
              <FroalaEditorView model={diaries.title} />
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {diaries.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {new Date(diaries.dateCreated).toLocaleString({
                month: "long",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
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
    */
  );
}
