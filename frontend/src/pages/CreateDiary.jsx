import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import ReactDOM from "react-dom";

export default function CreateDiary() {
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveDiary = () => {
    const data = {
      title,
      description,
      mood,
      dateCreated: Date.now(),
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/diary", data)
      .then(() => {
        setLoading(false);
        toast("Diary Created");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check your inputs and try again.");
        console.log(error);
      });
  };

  return (
    <div className="my-4">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-4 border-pink-500 border-dashed rounded-xl w-[800px] max-lg:w-[600px] max-md:w-[400px] p-4 mx-auto bg-white">
          <BackButton />
          <h1 className="text-center font-bold text-2xl mb-4 text-pink-500 ">
            CREATE DIARY
          </h1>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500 mb-3">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500 mb-3">
              Select Mood
            </label>
            <select
              onChange={(e) => setMood(e.target.value)}
              value={mood}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Happy">Happy</option>
              <option value="Angry">Angry</option>
              <option value="Sad">Sad</option>
            </select>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500 mb-3">
              Description
            </label>
            <FroalaEditor
              config={{
                placeholderText: "Here you can use editor option and events",
                height: "200px",
              }}
              model={description}
              onModelChange={(model) => setDescription(model)}
            />
          </div>
          <div className="my-4"></div>
          <button
            className="p-2 m-8 bg-pink-500 font-bold text-white rounded"
            onClick={handleSaveDiary}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
