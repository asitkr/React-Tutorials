import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Page404 from './Page404';

function Connect(props) {
    return (
        <div>
            <BrowserRouter>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/*' element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Connect;