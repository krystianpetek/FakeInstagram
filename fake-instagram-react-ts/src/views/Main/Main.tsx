import React, { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
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
                <Route path="/" element={<Home />}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/myProfile" element={<MyProfile />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
            </Routes>

        </main>);
}

export default Main;