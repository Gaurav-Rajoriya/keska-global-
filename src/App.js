
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Testimonial from './Component/Testimonial/Testimonial';
import About from './Component/About/About';
import Product from './Component/ProductPage/Product';
import Singleproduct from './Component/SinglePage/Singleproduct ';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/single-product/:id' element={<Singleproduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
