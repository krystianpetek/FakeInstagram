import "./App.scss"
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import { LoginContextProvider } from "../../contexts/LoginContext/LoginContextProvider";
import { UserContextProvider } from "../../contexts/UserContext/UserContextProvider";
import { PostContextProvider } from "../../contexts/PostContext/PostContextProvider";

const App: React.FC = () => {
  return (
    <LoginContextProvider>
      <UserContextProvider>
        <PostContextProvider>
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
