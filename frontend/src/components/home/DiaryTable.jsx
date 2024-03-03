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
        <div className="flex gap-x-2">
          <Link to={`/diary/display/${diary._id}`}>
            <div className="bg-blue-500 px-2 rounded text-white">View</div>
          </Link>
          <Link to={`/diary/update/${diary._id}`}>
            <div className="bg-yellow-500 px-2 rounded text-white">Edit</div>
          </Link>
          <Link to={`/diary/delete/${diary._id}`}>
            <div className="bg-red-500 px-2 rounded text-white">Delete</div>
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="shadow mx-auto">
      <Table
        columns={columns}
        dataSource={diary.map((item, index) => ({ ...item, index }))}
        pagination
        paginationPerPage={10}
        onChange={onChange}
      />
    </div>
  );
}
