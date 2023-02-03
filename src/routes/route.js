import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Use from '../pages/Use/Use'
import Mine from '../pages/Mine/Mine'
import Author from '../pages/Author/Author';

const route = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/use"} element={<Use/>}></Route>
            <Route path={"/mine"} element={<Mine/>}></Route>
            <Route path={"/author"} element={<Author/>}></Route>
        </Routes>
    );
};

export default route;