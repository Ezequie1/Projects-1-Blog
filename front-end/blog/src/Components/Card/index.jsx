import React, { useState } from "react"
import "./style.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { editPost, favoritePost, removePost } from "../../Service/postService";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

export function CardText(props){
    const [seeOption, setOptions] = useState('none');
    const [favorite, setFavorite] = useState(props.post.favorite);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState(props.post.title)
    const [text, setText] = useState(props.post.text)

    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    function excludePost(id){
        removePost(id).then(() => window.location.reload())
    }

    function changeFavorite(id){
        favoritePost(id).then((res) => {
            setFavorite(res.data.favorite)
        })
    }
    
    function saveChanges(){
        if(title !== '' || text !== ''){
            editPost(title, text, props.post.id).then(() => window.location.reload())
        }
    }

    return(
        <div className="card">
            <div className="iconAndDate">
                <p>{ props.post.data_post }</p>
                <div className="iconsOption">
                    { 
                        favorite ? 
                        <FavoriteIcon className="iconFavorite" onClick={() => changeFavorite(props.post.id)}/>  
                        :
                        <FavoriteBorderIcon className="iconNoneFavorite" onClick={() => changeFavorite(props.post.id)}/> 
                    }
                    <MoreVertIcon onClick={() => setOptions(seeOption === 'none' ? 'block' : 'none')} className="iconMoreOptions"/>
                    <div className="tooltip" style={{display: seeOption}} onMouseLeave={()=> setOptions('none')}>
                        <div className="flex iconsSelects edit" onClick={handleOpenEdit}>
                            <ModeEditIcon/>
                            <p>Editar</p>
                        </div>
                        <div className="flex iconsSelects delete" onClick={handleOpen}>
                            <DeleteIcon/>
                            <p>Excluir</p>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="contentCard">
                <p className="title">{ props.post.title }</p>
                <p>
                    { props.post.text }
                </p>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <div className="modal">
                    <p>
                        Tem certeza que deseja excluir o post?
                    </p>
                    <div className="flex divButtons">
                        <button className="buttonDelete no" onClick={handleClose}>
                            Não
                        </button>
                        <button className="buttonDelete yes" onClick={() => excludePost(props.post.id)}>
                            Sim
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
              open={openEdit}
              onClose={handleCloseEdit}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <div className="modalEdit">
                    <div>
                        <p className="titleEdit"><strong>Editar post</strong></p>
                        <p className="subtitleEdit">Mude as informações que deseja alterar, em seguida clique em salvar.</p>
                    </div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Título"
                      multiline
                      rows={2}
                      defaultValue={props.post.title}
                      className="textField"
                      onChange={(event) => setTitle(event.target.value)}
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Texto"
                      multiline
                      rows={4}
                      defaultValue={props.post.text}
                      className="textField"
                      onChange={(event) =>  setText(event.target.value)}
                    />
                    <div className="divButtonsEdit">
                        <button className="buttonDelete yes editButton" onClick={handleCloseEdit}>
                            Cancelar
                        </button>
                        <button className="buttonDelete no editButton" onClick={() => {
                             saveChanges() 
                             handleCloseEdit()
                             }}>
                            Salvar
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}