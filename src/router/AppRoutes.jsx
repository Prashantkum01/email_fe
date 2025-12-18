import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import Features from '../components/home/Features';
import Blogs from '../pages/Blogs';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/feature" element={<Features/>} />
            <Route path="/blogs" element={<Blogs/>} />
        </Routes>
     
    );
}