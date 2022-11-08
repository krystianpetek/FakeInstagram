import React from 'react';
import { BrowserRouter } from "react-router-dom";
import styled, { StyledComponent } from 'styled-components';

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <MainContainer>
          <LimitationContainer>
            <Header>
              <p>Header</p>
            </Header>
          </LimitationContainer>
        </MainContainer>
      </BrowserRouter>
    </div>
  );
}

const MainContainer = styled.div`
  font-family: Arial, sans-serif;
  height: 100vh;
  background: linear-gradient(45deg,
      #140939FF 0%,
      #140939FF 30%,
      #281558FF 60%,
      #702c77FF 100%);

// /* // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }
// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }
// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }
// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... } */

`
const LimitationContainer = styled.div`
margin: 0 auto;
width: 1200px;
height: 100vh;
background-color:#FFF2;
color: #fff;
`

const Header = styled.header`
display: flex;
justify-content:center;
`

export default App;
