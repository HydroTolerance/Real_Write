import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import DataTable from "react-data-table-component";
import React, { useState } from "react";

const columns = [
  {
    name: "Title",
    selector: (diaries) => diaries.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (diaries) => diaries.author,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <div className="flex justify-center items-center gap-x-4">
        <Link to={`/diary/display/${row._id}`}>
          <BsInfoCircle className="text-green-800 hover:text-green-600" />
        </Link>
        <Link to={`/diary/update/${row._id}`}>
          <AiOutlineEdit className="text-yellow-800 hover:text-yellow-600" />
        </Link>
        <Link to={`/diary/delete/${row._id}`}>
          <MdOutlineDelete className="text-red-800 hover:text-red-600" />
        </Link>
      </div>
    ),
  },
];

export default function DiaryTable({ diary }) {
  const [filterText, setFilterText] = useState("");

  const filteredDiary = diary.filter(
    (diaryEntry) =>
      diaryEntry.title.toLowerCase().includes(filterText.toLowerCase()) ||
      diaryEntry.author.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        placeholder="Filter By Title or Year"
        value={filterText}
        onChange={handleFilterChange}
      />
      <DataTable
        columns={columns}
        data={filteredDiary}
        pagination
        subHeader
        persistTableHead
        striped
        highlightOnHover
        responsive
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
      />
    </div>
  );
}
