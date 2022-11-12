import "./Title.scss"
import React, { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import TitleHeader from "../../components/TitleHeader/TitleHeader";

interface TitleProps { }

const Title: FunctionComponent<TitleProps> = () => {
    return (
        <div className="Title">
            <Routes>
                <Route path="/" element={<TitleHeader title="Home" />}></Route>
                <Route path="/posts" element={<TitleHeader title="Posts" />}></Route>
                <Route path="/search" element={<TitleHeader title="Search" />}></Route>
                <Route path="/myProfile" element={<TitleHeader title="My profile" />}></Route>
                <Route path="/login" element={<TitleHeader title="Login" />}></Route>
            </Routes>
        </div>);
}

export default Title;