import "./Main.scss"
import React, { FunctionComponent } from "react";
import PostList from "../../components/Posts/PostList";
import { Route, Routes } from "react-router-dom";
import SearchUsers from "../../components/SearchUsers/SearchUsers";
import SearchPhotos from "../../components/SearchPhotos/SearchPhotos";
interface MainProps {

}

const Main: FunctionComponent<MainProps> = () => {
    return (
        <main className="Main">
            <Routes>
                <Route path="/"></Route>
                <Route path="/posts" element={<PostList />}></Route>
                <Route path="/login" element={"LOGIN (string)"}></Route>
                <Route path="/searchUsers" element={<SearchUsers />}></Route>
                <Route path="/searchPhotos" element={<SearchPhotos />}></Route>
            </Routes>

        </main>);
}

export default Main;