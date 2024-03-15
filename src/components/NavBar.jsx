
import { CartWidget } from './CartWidget';
import Categories from './Categories';
import React from 'react';


const NavBar = () => {
    return (
        <nav className="bg-green-900 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div >
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/logo.jpg?alt=media&token=83aae8f4-dfd1-4ca0-8fb7-3e4648d6d659" alt="logo" className='w-20 h-20 rounded-full' />
                    </div>
                    <ul className="flex space-x-4">
                        <Categories />
                        <CartWidget />
                    </ul>


                </div>


            </div>

        </nav>
    );
}

export default NavBar;
