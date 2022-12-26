import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Project from './Projects/Project';
import ContactMe from './ContactMe/ContactMe';
import AboutMe from './AboutMe/AboutMe'
import Footer from './Footer/Footer'
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
            <Footer />
        </>
    )
}

export default Layout;