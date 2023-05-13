import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MenuItem from '../../Component/MenuItem';
import Footer from '../Home/Footer';

const Menu = () => {
    const coffees = useLoaderData();
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <div className='grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-2 pt-6 pb-12'>
                    {
                        coffees?.map((item, index) => <MenuItem key={index} item={item}></MenuItem>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Menu;