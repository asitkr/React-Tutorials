import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Page404 from './Page404';
import User from './User';

function Connect(props) {
    return (
        <div>
            <BrowserRouter>
                <Link to='/'>Home</Link> &nbsp; &nbsp;
                <Link to='/about'>About</Link> &nbsp; &nbsp;
                <Link to='/contact'>Contact</Link> &nbsp; &nbsp;
                <Link to='/user/ashit'>Ashit</Link> &nbsp; &nbsp;
                <Link to='/user/rajesh'>Rajesh</Link> &nbsp; &nbsp;
                <Link to='/user/sandesh'>Sandesh</Link> &nbsp; &nbsp;
                <Link to='/user/ayush'>Ayush</Link> &nbsp; &nbsp;
                <Link to='/user/prasad'>Prasad</Link> &nbsp; &nbsp;
                <Link to='/user/yuvraj'>Yuvraj</Link> &nbsp; &nbsp;
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/user/:name' element={<User />} />
                    {/* <Route path='/*' element={<Page404 />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Connect;