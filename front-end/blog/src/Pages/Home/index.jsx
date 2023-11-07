import "./style.css"
import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { CardText } from "../../Components/Card";
import { createPosts, getPosts } from "../../Service/postService";
import { CardSkeletoon } from "../../Components/CardSkeleton";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

export function HomePage(){

    const [data, setData] = useState(null);
    const [seeModal, setModal] = useState(false)
    const [content, setContent] = useState(<>
        <CardSkeletoon/>
        <CardSkeletoon/>
        <CardSkeletoon/>
    </>);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {

        async function getData(){
            await getPosts().then((res) => setData(res.data))
        }

        const time = setInterval(() =>{
            getData()
            clearInterval(time)
        }, 1000)
        
    }, []);

    async function savePost(){
        if(title !== '' && text !== ''){
            createPosts(title, text).then(() => {
                window.location.reload()
            })
        }
    }

    return(
        <>
            <Header function={setData} functionContent={setContent}/>
            <div className="column">
                {data !== null ?         
                    data.map((post, index) => {
                        return <CardText post={post} key={index}/>
                    })
                :
                    content
                }
            </div>
            <div className="iconAdd" onClick={() => setModal(true)}>
              <Fab color="primary" aria-label="add" variant='extended' style={{gap: 10}}>
                <AddIcon />
                <p>Adicionar post</p>
              </Fab>  
            </div>
            <Modal
              open={seeModal}
              onClose={() => setModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <div className="modalEdit">
                    <div>
                        <p className="titleEdit"><strong>Crie seu post</strong></p>
                        <p className="subtitleEdit">Insira seu título e texto, em seguida clique em salvar para adicionar seu post!</p>
                    </div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Título"
                      multiline
                      rows={2}
                      className="textField"
                      onChange={(event) => setTitle(event.target.value)}
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Texto"
                      multiline
                      rows={4}
                      className="textField"
                      onChange={(event) =>  setText(event.target.value)}
                    />
                    <div className="divButtonsEdit">
                        <button className="buttonDelete yes editButton" onClick={() => setModal(false)}>
                            Cancelar
                        </button>
                        <button className="buttonDelete no editButton" onClick={() => {
                                savePost();
                                setModal(false)
                            }}>
                            Salvar
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}