import React, { FunctionComponent, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { baseURL } from "../../API/baseURL";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import { ILoginContext, LoginContext } from "../../contexts/LoginContext/LoginContext";

interface TitleProps { }
const Title: FunctionComponent<TitleProps> = () => {
    const { email } = useContext<ILoginContext>(LoginContext);
    const myProfile = (email) ? email : "My Profile";
    return (
        <div className="Title">
            <Routes>
                <Route index path={`${baseURL}/`} element={<TitleHeader title="Home" />}></Route>
                <Route path={`${baseURL}/posts`} element={<TitleHeader title="Posts" />}></Route>
                <Route path={`${baseURL}/search`} element={<TitleHeader title="Search" />}></Route>
                <Route path={`${baseURL}/myProfile`} element={<TitleHeader title={`${myProfile}`} />}></Route>
                <Route path={`${baseURL}/login`} element={<TitleHeader title="Login" />}></Route>
            </Routes>
        </div>
    );
}

export default Title;