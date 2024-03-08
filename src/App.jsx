import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components
import Home from './components/home.component.jsx';
import Login from './components/login.component.jsx';
import SignUp from './components/signup.component.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <> 
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/SignUp' element={<SignUp />}/>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  </>
)