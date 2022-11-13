import "./App.scss"
import React from "react";
import { defaultState, LoginContext } from "./../../contexts/LoginContext/LoginContext";
import { BrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';

const App: React.FC = () => {

  return (
    <div className="App">
      <LoginContext.Provider value={defaultState}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}


export default App;
