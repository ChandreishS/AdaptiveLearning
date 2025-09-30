import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Placeholder pages
function Teachers() { return <h2>Teachers Page</h2>; }
function Grades() { return <h2>Grades Page</h2>; }
function Messages() { return <h2>Messages Page</h2>; }
function Settings() { return <h2>Settings Page</h2>; }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/grades' element={<Grades />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
