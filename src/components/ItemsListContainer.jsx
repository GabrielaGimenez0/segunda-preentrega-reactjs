import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../firebase/firebase.js";


import React from 'react';

const ItemsListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()


    useEffect(() => {
        getProducts()
            .then(prods => {
                const productos = prods.filter(prod => prod.stok > 0)
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(productos)

                }

            })
            .catch((error) => console.log(error))
    }, [cid])


    return (
        <div className="flex flex-wrap space-y-6">
            <ItemList products={products} plantilla="Item" />
        </div>
    );
}

export default ItemsListContainer;


