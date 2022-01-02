import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Post } from "./pages/Post/post";
import { Edit } from "./pages/Edit/edit";
import { Feed } from "./pages/Feed/feed";
import {LerMais} from "./pages/Lermais/lermais";
export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/post" element={<Post></Post>}></Route>
                <Route path="/edit/:id" element={<Edit></Edit>}></Route>
                <Route path="/" element={<Feed></Feed>}></Route>
                <Route path="/lermais/:id" element={<LerMais></LerMais>}></Route>
            </Routes>
        </BrowserRouter>
    )
}