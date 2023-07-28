import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

const App = () => {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<FirstPage />} />
        <Route path='/summary'  element={<SecondPage />}/>
      </Routes>
    </BrowserRouter>
  </div>
);
  }
export default App