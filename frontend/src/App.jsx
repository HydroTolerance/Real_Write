import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import DeleteDiary from "./page/DeleteDiary";
import UpdateDiary from "./page/UpdateDiary";
import ShowDiary from "./page/ShowDiary";
import CreateDiary from "./page/CreateDiary";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/diary/create" element={<CreateDiary/>}></Route>
        <Route path="/diary/display/:id" element={<ShowDiary/>}></Route>
        <Route path="/diary/update/:id" element={<UpdateDiary/>}></Route>
        <Route path="/diary/delete/:id" element={<DeleteDiary/>}></Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
