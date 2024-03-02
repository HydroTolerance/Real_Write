import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import DiaryTable from "../components/home/DiaryTable";
import DiaryCard from "../components/home/DiaryCard";
import Layout from "../layout/Layout";

export default function Home() {
  const [diary, setDiary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState("table");

  useEffect(() => {
    axios
      .get("http://localhost:5555/diary")
      .then((response) => {
        setDiary(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>

    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"></h1>
        <Link
          className="text-xl font-medium bg-pink-400 rounded px-5 text-white hover:bg-pink-500"
          onClick={() => setShowTable("table")}
        >
          Table
        </Link>
        <Link
          className="text-xl font-medium  px-5 bg-pink-400 rounded text-white hover:bg-pink-500"
          onClick={() => setShowTable("card")}
        >
          Card
        </Link>
        <Link to="/diary/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showTable === "table" ? (
        <DiaryTable diary={diary} />
      ) : (
        <DiaryCard diary={diary} />
      )}
    </div>
    </Layout>
  );
}
