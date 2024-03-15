import { FaBoxOpen, FaHome } from "react-icons/fa";
import { FaJar } from "react-icons/fa6";
import { Link } from "react-router-dom";

import React from 'react';

const Categories = () => {
    return (
        <>
            <Link to={'/'}>
                <button className="text-white w-20 h-20"> <FaHome /> </button>
            </Link>
            <Link to={'/category/category1'} >
                <button className="text-white w-20 h-20"> <FaBoxOpen /> </button>
            </Link>
            <Link to={'/category/category2'} >
                <button className="text-white w-20 h-20 "> <FaJar /> </button>
            </Link>

        </>
    );
}

export default Categories;
