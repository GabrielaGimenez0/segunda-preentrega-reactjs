import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemsListContainer from "./components/ItemsListContainer";
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemDetaislContainer from './components/ItemDetaislContainer';
import NotFound from './components/NotFound';
import { CarritoProvider } from './context/CartContext.jsx';
import {ToastContainer} from 'react-toastify';

import React from 'react';

const App = () => {
    return (
        <BrowserRouter>
        <CarritoProvider>
            <Title mensaje={"Emprendimiento"} />
            <NavBar />
            <ToastContainer/>
            <Routes>
                <Route path='/' element={<ItemsListContainer />} />
                <Route path='/category/:cid' element={<ItemsListContainer />} />
                <Route path='/product/:pid' element={<ItemDetaislContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' elemnt={<NotFound />} />
            </Routes>
            <Footer />
        </CarritoProvider>
            
        </BrowserRouter>
    );
}

export default App;
