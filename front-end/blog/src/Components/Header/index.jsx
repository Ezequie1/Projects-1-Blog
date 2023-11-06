import React from "react"
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';

export function Header(){
    return(
        <div className="header">
            <div className="divInfosBlog">
                <p>Codelândia</p>
                <p>blog</p>
            </div>
            <div className="divInput">
                <SearchIcon fontSize="large" className="iconSearch"/>
                <input type="text" placeholder="Pesquisar no blog" className="input"/>
            </div>
        </div>
    )
}