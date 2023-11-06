import React, { useState } from "react"
import "./style.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function CardText(){
    const [seeOption, setOptions] = useState('none');
    const [favorite, setFavorite] = useState(false);

    return(
        <div className="card">
            <div className="iconAndDate">
                <p>02 de jul, 2021</p>
                <div className="iconsOption">
                    { 
                        favorite ? 
                        <FavoriteIcon className="iconFavorite" onClick={() => setFavorite(false)}/>  
                        :
                        <FavoriteBorderIcon className="iconNoneFavorite" onClick={() => setFavorite(true)}/> 
                    }
                    <MoreVertIcon onClick={() => setOptions(seeOption === 'none' ? 'block' : 'none')} className="iconMoreOptions"/>
                    <div className="tooltip" style={{display: seeOption}} onMouseLeave={()=> setOptions('none')}>
                        <div className="flex iconsSelects edit">
                            <ModeEditIcon/>
                            <p>Editar</p>
                        </div>
                        <div className="flex iconsSelects delete">
                            <DeleteIcon/>
                            <p>Excluir</p>
                        </div>
                    </div>
                </div>  
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