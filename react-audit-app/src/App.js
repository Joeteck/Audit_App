import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FirstPage from './components/firstPage/FirstPage';
import SecondPage from './components/secondPage/SecondPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FirstPage />} />
        <Route path='/summary'  element={<SecondPage />}/>
      </Routes>
    </BrowserRouter>
);
  }
export default App