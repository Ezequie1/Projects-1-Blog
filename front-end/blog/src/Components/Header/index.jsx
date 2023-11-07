import React from "react"
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';
import { getPosts, searchPosts } from "../../Service/postService";
import SearchOffIcon from '@mui/icons-material/SearchOff';

export function Header(props){

    
    async function reloadData(value){
        props.function(null)

        if(value !== "") {
            await searchPosts(value).then((res) => {
                const time = setInterval(() => {

                    if(res.data.length === 0){
                        props.functionContent(<div className="divNotFound"><SearchOffIcon fontSize="large"/><p>Ops... Não encontramos nada!</p></div>)
                    }else{
                        props.function(res.data)
                    }
                    
                    clearTimeout(time)
                },500)  
            })
        }else{
            await getPosts().then((res) => {
                const time = setInterval(() => {
                    props.function(res.data)
                    clearTimeout(time)
                },500)
            })
        }
    }

    return(
        <div className="header">
            <div className="divInfosBlog">
                <p>Codelândia</p>
                <p>blog</p>
            </div>
            <div className="divInput">
                <SearchIcon fontSize="large" className="iconSearch"/>
                <input type="text" placeholder="Pesquisar no blog" className="input" onChange={(event) => reloadData(event.target.value)}/>
            </div>
        </div>
    )
}