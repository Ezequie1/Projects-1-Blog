import React, { useState } from "react";
import "./style.css"
import logo from "../../Assets/logoWithName.png"
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

export function WelcomePage(){

    const[loading, setLoading]= useState(<>Confira</>)

    function LoadPage(){
        setLoading(<CircularProgress style={{color: "#fff", height: "25px", width: "25px"}} size="small"/>)

        setInterval(() => setLoading(<Navigate to="/home"/>), 1000)
    }

    return(
        <div className="back">
            <div className="modal">
                <img src={logo} alt="" className="logo"/>
                <p className="titleWelcome">
                    Olá, seja bem vindo ao BirdBlog! 
                </p>
                <p>
                    Um blog contendo as principais notícias do dia. De onde vieram as notícias? Bom... Um passarinho me contou!
                </p>
                <button className="button" onClick={ LoadPage }>
                    { loading }
                </button>
            </div>
        </div>
    )
}