import React, { useState } from "react";
import Spinner from "../components/Spinner";
import { BackButton } from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function DeleteDiary() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteDiary = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/diary/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("Error deleting diary!");
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-center">Delete Diary</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-500 rounded-xl w-[600] p-8 mx-auto">
        <h3 className="text-2xl">
          Are you sure you want to delete this diary?
        </h3>
        <button
          onClick={handleDeleteDiary}
          className="bg-red-600 text-white m-8 w-full"
        >
          Yes delete it!
        </button>
      </div>
    </div>
  );
}
