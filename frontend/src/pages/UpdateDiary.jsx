import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateDiary() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [dateCreated, setdateCreated] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/diary/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setdateCreated(res.data.dateCreated);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened. Please check you input and try again");
        console.log(err);
      });
  }, []);

  const handleUpdateDiary = () => {
    const data = {
      title,
      author,
      dateCreated,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/diary", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check your inputs and try again.");
        console.log(error);
      });
  };

  return (
    <div className="m-4p-4">
      <BackButton />
      <h1>Edit Diary</h1>
      {loading ? (<Spinner />) : (
        <div className="flex flex-col border-2 border-sky-600 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Date Created</label>
          <input
            type="number"
            value={dateCreated}
            onChange={(e) => setdateCreated(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleUpdateDiary}>
          Save
        </button>
      </div>
      )}
      
    </div>
  );
}
