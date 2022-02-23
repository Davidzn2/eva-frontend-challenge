import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Detail from './components/pages/Detail'


function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/crypto/:id" element={<Detail />}/>
            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;