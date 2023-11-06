import React from "react";
import { Header } from "../../Components/Header";
import "./style.css"
import { CardText } from "../../Components/Card";

export function HomePage(){
    return(
        <>
            <Header/>
            <div className="column">
                <CardText/>
                <CardText/>
                <CardText/>
                <CardText/>
                <CardText/>
            </div>
        </>
    )
}