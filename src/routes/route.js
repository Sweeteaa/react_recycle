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
import NoGo from '../pages/Use/Order/NoGo/NoGo';
import Going from '../pages/Use/Order/Going/Going';
import UCommit from '../pages/Use/Order/UCommit/UCommit';
import UAll from '../pages/Use/Order/UAll/UAll';
import Main from '../pages/Use/Order/Main';
import SResult from '../pages/Success/SResult';
import Result from '../pages/Use/Result/Result';
import ActivityDetail from '../pages/Home/ActivityDetail/ActivityDetail';
import ActivityOrder from '../pages/Home/ActivityDetail/ActivityOrder/ActivityOrder';
import ActivityRes from '../components/Result/ActivityRes/ActivityRes';
import ActivityOrderMsg from '../pages/Mine/ActivityOrderMsg/ActivityOrderMsg';
import RecycleStep from '../pages/Home/Knowledege/RecycleStep/RecycleStep';
import RecycleGo from '../pages/Home/Knowledege/RecycleGo/RecycleGo';
import Handle from '../pages/Home/Knowledege/Handle/Handle';

const route = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/home"} element={<Home/>}></Route>
                <Route path={"/home/clothes"} element={<Clothes/>}></Route>
                <Route path={"/home/book"} element={<Book/>}></Route>
                <Route path={"/home/item"} element={<Item/>}></Route>
                <Route path={"/home/furniture"} element={<Furniture/>}></Route>
                <Route path={"/home/choice"} element={<ChoiceAddress/>}></Route>
                <Route path={"/home/address"} element={<Address/>}></Route>
                <Route path={"/home/activity/:id"} element={<ActivityDetail/>}></Route>
                <Route path={"/home/activity/:id/order"} element={<ActivityOrder/>}></Route>
                <Route path={"/home/step"} element={<RecycleStep/>}></Route>
                <Route path={"/home/go"} element={<RecycleGo/>}></Route>
                <Route path={"/home/handle"} element={<Handle/>}></Route>
            <Route path={"/use"} element={<Use/>}></Route>
                <Route path={`/use/detail/:id`} element={<UseDetail/>}></Route>
                <Route path={`/use/detail/:id/:has/order`} element={<UseOrder/>}></Route>
                <Route path={"/mine/main"} element={<Main/>}></Route>
                    <Route path={"/use/main/nogo"} element={<NoGo/>}></Route>
                    <Route path={"/use/main/going"} element={<Going/>}></Route>
                    <Route path={"/use/main/commit"} element={<UCommit/>}></Route>
                    <Route path={"/use/main/all"} element={<UAll/>}></Route>
            <Route path={"/mine"} element={<Mine/>}></Route>
                <Route path={"/mine/logistics"} element={<LogisticsMsg/>}></Route>
                    <Route path={"/mine/logistics/no-recycle"} element={<NoRecycle/>}></Route>
                    <Route path={"/mine/logistics/recycling"} element={<Recycling/>}></Route>
                    <Route path={"/mine/logistics/commit"} element={<Commit/>}></Route>
                    <Route path={"/mine/logistics/all"} element={<All/>}></Route>
                <Route path={"/mine/activitymsg"} element={<ActivityOrderMsg/>}></Route>
            <Route path={"/author"} element={<Author/>}></Route>
            <Route path={"/success"} element={<SResult/>}></Route>
            <Route path={"/result"} element={<Result/>}></Route>
            <Route path={"/activityres"} element={<ActivityRes/>}></Route>
        </Routes>
    );
};

export default route;