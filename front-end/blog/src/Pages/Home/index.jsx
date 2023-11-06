import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import "./style.css"
import { CardText } from "../../Components/Card";
import { getPosts, searchPosts } from "../../Service/postService";
import { CardSkeletoon } from "../../Components/CardSkeleton";

export function HomePage(){

    const [data, setData] = useState(null);

    useEffect(() => {

        async function getData(){
            await getPosts().then((res) => {
                setInterval(() => {
                    setData(res.data)
                }, 1000)
            })
        }

        getData()
    }, [])

    function reloadData(value){
        if(value !== "") searchPosts(value).then((res) => setData(res.data))
    }

    return(
        <>
            <Header function={reloadData}/>
            <div className="column">
                {data !== null ?         
                    data.map((post, index) => {
                        return <CardText post={post} key={index}/>
                    })
                :
                <>
                    <CardSkeletoon/>
                    <CardSkeletoon/>
                    <CardSkeletoon/>
                    <CardSkeletoon/>
                </>
                }
            </div>
        </>
    )
}