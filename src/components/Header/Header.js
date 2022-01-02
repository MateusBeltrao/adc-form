import React from "react";
import { Link } from "react-router-dom";
import back from "../../images/back-button.svg"
export const Header=()=>{
    return(
        <header>
            <div className="container"> 
                    <Link to="/">
                       <img src={back} alt={""} style={{width: '50px'}}></img>
                    </Link>
                
            </div>
        </header>
    )
}