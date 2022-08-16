import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "../pages/Home/home";
import Login from "../pages/Login/login";
import ForgotPassword from"../pages/Esqueci a Senha/forgotpassword.jsx"

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/'   element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;