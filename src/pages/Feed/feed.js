import React, {useState, useEffect} from "react";
import axios from "axios"
import { HeaderMain } from "../../components/HeaderMain/HeaderMain";
import More from "../../images/more.svg"
import './style.css'
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Feed = () =>{

    const [ posts, setPosts ] = useState([])

    useEffect(()=>{
        axios
        .get("https://mbn-9.herokuapp.com/list_posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
        .catch(()=>{
            console.log("Deu errado")
        })
    },[])

    const deletePost = (id) => {
        axios.delete(`https://mbn-9.herokuapp.com/delete_post/${id}`)
        setPosts(posts.filter(post => post._id !== id))
        alert("Post deletado com sucesso")
    } 


    return(
        <div>
            <HeaderMain></HeaderMain>
            <main>
                <div className="cards">
                    {posts.map((post, key)=>{
                        return(
                            <div className="card" key={key}>
                            <header>
                                <h2>{post.title}</h2>
                                <img src={More} alt={""}></img>
                            </header>
                            <div className="line"></div>
                            <p>{post.description}</p>
                            <div className="btns">
                                <div className="btn-edit">
                                    <Link to={{pathname: `/edit/${post._id}` }} >
                                        <Button>Edit</Button>
                                    </Link>
                                </div>
                                <div className="btn-readmore">
                                    <Link to={{pathname:`/lermais/${post._id}`}}>
                                        <Button>Ler mais</Button>
                                    </Link>
                                </div>
                                <div className="btn-delete">
                                    <Button onClick={() => deletePost(post._id) } >Delete</Button>
                                </div>
    
                            </div>
                        </div>
                        )
                    })}
                          
                </div>
            </main>
        </div>
        
    )
}