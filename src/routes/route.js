//路由配置

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Use from '../pages/Use/Use'
import Mine from '../pages/Mine/Mine'
import Author from '../pages/Author/Author';
import LogisticsMsg from '../pages/LogisticsMsg/LogisticsMsg';
import NoRecycle from '../pages/LogisticsMsg/NoRecycle/NoRecycle';
import Recycling from '../pages/LogisticsMsg/Recycling/Recycling';
import Commit from '../pages/LogisticsMsg/Commit/Commit';
import All from '../pages/LogisticsMsg/All/All';
import Clothes from '../pages/Home/List/Clothes/Clothes';
import Book from '../pages/Home/List/Book/Book';
import Item from '../pages/Home/List/Item/Item';
import Furniture from '../pages/Home/List/Furniture/Furniture';
import Address from '../pages/Address/Address';
import ChoiceAddress from '../pages/ChoiceAddress/ChoiceAddress';
import UseDetail from '../pages/Use/UseDetail/UseDetail';
import UseOrder from '../pages/Use/UseOrder/UseOrder';

const route = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/home/clothes"} element={<Clothes/>}></Route>
                <Route path={"/home/book"} element={<Book/>}></Route>
                <Route path={"/home/item"} element={<Item/>}></Route>
                <Route path={"/home/furniture"} element={<Furniture/>}></Route>
                <Route path={"/home/choice"} element={<ChoiceAddress/>}></Route>
                <Route path={"/home/address"} element={<Address/>}></Route>
            <Route path={"/use"} element={<Use/>}></Route>
            <Route path={`/use/detail/:id`} element={<UseDetail/>}></Route>
            <Route path={`/use/detail/:id/order`} element={<UseOrder/>}></Route>
            <Route path={"/mine"} element={<Mine/>}></Route>
                <Route path={"/mine/logistics"} element={<LogisticsMsg/>}></Route>
                    <Route path={"/mine/logistics/no-recycle"} element={<NoRecycle/>}></Route>
                    <Route path={"/mine/logistics/recycling"} element={<Recycling/>}></Route>
                    <Route path={"/mine/logistics/commit"} element={<Commit/>}></Route>
                    <Route path={"/mine/logistics/all"} element={<All/>}></Route>
            <Route path={"/author"} element={<Author/>}></Route>
        </Routes>
    );
};

export default route;