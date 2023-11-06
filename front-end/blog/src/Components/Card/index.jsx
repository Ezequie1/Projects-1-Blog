import React from "react"
import "./style.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function CardText(){
    return(
        <div className="card">
            <div className="iconAndDate">
                <p>02 de jul, 2021</p>
                <FavoriteBorderIcon className="iconFavorite"/>
            </div>
            <div className="contentCard">
                <p className="title">Agora é oficial: o Windows 11 está vindo</p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.
                </p>
            </div>
        </div>
    )
}