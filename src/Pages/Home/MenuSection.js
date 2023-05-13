import React, { useEffect, useState } from 'react';
import MenuItem from '../../Component/MenuItem';
import { Link } from 'react-router-dom';

const MenuSection = () => {
    const [coffees, setCoffees] = useState();
    useEffect(()=>{
        fetch('https://sj-innovation-server.vercel.app/coffees')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCoffees(data);
        })
    },[])
    return (
        <div className='py-8 px-2 max-w-7xl mx-auto'>
            <div className='py-4'>
                <h2 className='text-center text-4xl'>Coffee Menu</h2>
                <p className='text-center text-2xl font-light'>Caffeine- It maintains your sunny personality.</p>
            </div>
            <div className='grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
                {
                    coffees?.slice(0,3).map((item, index) => <MenuItem key={index} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center py-7'>
                <Link className='btn' to='/menu'>See More</Link>
            </div>
        </div>
    );
};

export default MenuSection;