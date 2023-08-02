import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/firstPage/FirstPage';
import SecondPage from './components/secondPage/SecondPage';
import styled from 'styled-components';

const AppContainer = styled.div`
  align-items: center;
  font-family: Roboto, sans-serif;
  background-image: linear-gradient(to bottom, #ffffff, #f8fdff, #f8fdff, #f4faff); /* Four-color gradient */
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Set min-height to fill the entire viewport */
`;
const FooterContainer = styled.footer`
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0;
  background-color: #333;
  color: #fff;
  margin: 0px;
  padding:5px;
  padding-left: 50px;
  text-align: center;
  gap: 50vw;

  @media (max-width: 768px) {
    flex-direction: column;
    gap:20px;
    padding:5px;
  }
`;
const FooterText = styled.p`

  font-size: 14px;
`;
const FooterLink = styled.a`
  color: #E939E9;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #800080;
  }
`;

const App = () => {
  return (
    <HashRouter>
      <AppContainer>
        <Routes>
          <Route index element={<FirstPage />} />
          <Route path='/summary' element={<SecondPage />} />
        </Routes>
      </AppContainer>
      <FooterContainer>
        <FooterText>
          © {new Date().getFullYear()} Fasyl Technology Ghana. All rights reserved.
        </FooterText>
        <FooterText>
          Made with <span role="img" aria-label="React">React</span> by {'Adeyoju Joel '}
          <FooterLink href="https://github.com/joeteck" target="_blank" rel="noopener noreferrer">
              Joeteck GitHub
          </FooterLink>
        </FooterText>
      </FooterContainer>
    </HashRouter>
  );
};

export default App;