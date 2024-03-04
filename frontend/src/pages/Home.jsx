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
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl my-8"></h1>
          <div className="">
            <Link
              className="font-medium border text-pink-500  border-pink-500 bg-white rounded px-5 hover:text-white  hover:bg-pink-500 py-1 mx-1"
              onClick={() => setShowTable("table")}
            >
              Table
            </Link>
            <Link
              className="font-medium  px-5 border text-pink-500 border-pink-500 rounded bg-white hover:text-white  hover:bg-pink-500 py-1 mx-1"
              onClick={() => setShowTable("card")}
            >
              Card
            </Link>
          </div>

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
