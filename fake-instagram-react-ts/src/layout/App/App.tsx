import "./App.scss"
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import { LoginContextProvider } from "../../contexts/LoginContext/LoginContextProvider";
import { UserContextProvider } from "../../contexts/UserContext/UserContextProvider";

const App: React.FC = () => {
  return (
    <LoginContextProvider>
      <UserContextProvider>
        <div className="App">
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </div>
      </UserContextProvider>
    </LoginContextProvider>
  );
}


export default App;
