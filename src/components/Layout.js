import './Layout.css'
import Navbar from './Navbar/Navbar';
import Home from './Homes/Home';
import Project from './Projects/Project';
import ContactMe from './ContactMe/ContactMe';
import AboutMe from './AboutMe/AboutMe'
import { Route, Routes } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/contact-me' element={<ContactMe />} />
            </Routes>
        </>
    )
}

export default Layout;