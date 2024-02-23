import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

import React from 'react';



const ItemDetaislContainer = () => {
    
    useEffect(()=>{
        fetch('../data/productos.jason')
            .then(response => response.json())
            .then(productos =>{
                const prod = productos.find(producto => producto.id==pid)
                if (prod)
                    setItem(prod)
            })
    })
    return (
        <div className="fixed w-full  h-full flex justify-center items-center bg-black bg-opacity-50">
            
            <ItemDetail item= {item} />

        </div>
    );
}

export default ItemDetaislContainer;
