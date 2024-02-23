
import { Link } from "react-router-dom";

import React from 'react';

const Categories = () => {
    return (
        <>
            <Link to={'/'}>
                <li className="text-white">Home</li>
            </Link>
            <Link to={'/category/category1'} >
                <li className="text-white">Productos A</li>
            </Link>
            <Link to={'/category/category2'} >
                <li className="text-white">Productos B</li>
            </Link>

        </>
    );
}

export default Categories;
