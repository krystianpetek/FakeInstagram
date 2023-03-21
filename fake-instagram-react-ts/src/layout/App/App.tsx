import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.scss"
import Layout from '../Layout/Layout';
import { LoginContextProvider } from "../../contexts/LoginContext/LoginContextProvider";
import { UserContextProvider } from "../../contexts/UserContext/UserContextProvider";
import { PostContextProvider } from "../../contexts/PostContext/PostContextProvider";
import { PostService } from "../../API/services/PostService";
import { CommentService } from "../../API/services/CommentService";
import { UserService } from "../../API/services/UserService";

const App: React.FC = () => {
  return (
    <LoginContextProvider>
      <UserContextProvider userService={UserService}>
        <PostContextProvider commentService={CommentService} postService={PostService}>
          <div className="App">
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </div>
        </PostContextProvider>
      </UserContextProvider>
    </LoginContextProvider>
  );
}


export default App;
