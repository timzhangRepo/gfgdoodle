import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './components/home/home'
import {Menu} from './components/menu/menu'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Dogs} from "./components/dogs/dogs";


function App() {
  return (
    <div className="App">
        <Menu></Menu>
        <BrowserRouter>
            <Routes>
                <Route path={"/" } element={<Home/>}></Route>
                <Route path={"/adopt"}  element={<Dogs/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
