import React, { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { baseURL } from "./../../API/baseURL";
import "./Main.scss"
import Posts from "../../pages/Posts/Posts";
import Search from "../../pages/Search/Search";
import Home from "../../pages/Home/Home";
import MyProfile from "../../pages/MyProfile/MyProfile";
import Login from "../../pages/Login/Login";
import Logout from "../../pages/Logout/Logout";

interface MainProps { }
const Main: FunctionComponent<MainProps> = () => {
    return (
        <main className="Main">
            <Routes>
                <Route path={`${baseURL}/`} element={<Home />}></Route>
                <Route path={`${baseURL}/posts`} element={<Posts />}></Route>
                <Route path={`${baseURL}/search`} element={<Search />}></Route>
                <Route path={`${baseURL}/myProfile`} element={<MyProfile />}></Route>
                <Route path={`${baseURL}/login`} element={<Login />}></Route>
                <Route path={`${baseURL}/logout`} element={<Logout />}></Route>
            </Routes>
        </main>
    );
}

export default Main;