import "./App.scss"
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import { LoginContextProvider } from "../../contexts/LoginContext/LoginContextProvider";

const App: React.FC = () => {
  return (
    <LoginContextProvider>
      <div className="App">
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    </LoginContextProvider>
  );
}


export default App;
