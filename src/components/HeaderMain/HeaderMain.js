import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import './style.css'
export const HeaderMain=()=>{
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <h1>Cruder</h1>
                </div>
                <div className="btn-newPost">
                    <Link to="/post">
                        <Button width={20}>Add new Post</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}