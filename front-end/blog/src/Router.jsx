import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { WelcomePage } from "./Pages/Welcome";

export function PathRouter(){
    return(
        <Routes>
            <Route path="/" element={<WelcomePage/>} />
            <Route path="/home" element={<HomePage/>} />
        </Routes>
    )
}