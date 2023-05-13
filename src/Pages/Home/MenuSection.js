import React from 'react';
import MenuItem from '../../Component/MenuItem';

const MenuSection = () => {
    const coffees = [
        {
            id: 1,
            image: 'https://ibb.co/gZQWfrF',
            name: 'Caramel Cappuccino',
            price: '8.00',
            description: '1-2 shots of espresso 1/2 cup of whole milk 2 tablespoons of caramel sauce'
        },
        {
            id: 2,
            image: 'https://ibb.co/S0Mbj1H',
            name: 'Caramel Latte',
            price: '6.00',
            description: 'Our signature espresso, steamed milk and rich caramel brulée sauce finished with whipped cream and a supreme topping of even more caramel brulée bits.'
        },
        {
            id: 3,
            image: 'https://ibb.co/KGGycs1',
            name: 'French Vanilla',
            price: '8.00',
            description: 'French Vanilla Coffee is a more complex version of your classic vanilla coffee. Instead of plain vanilla syrup, this concoction is usually made with the extract from vanilla bean pods or flavored hazelnut and vanilla syrups.'
        },
        {
            id: 4,
            image: 'https://ibb.co/28YnjK2',
            name: 'Hot Chocolate',
            price: '12.00',
            description: 'Hot chocolate starts in powder form (usually a blend of cocoa powder, sugar, and often includes dairy powder and flavorings or spices) and is typically made with water.'
        },
        {
            id: 5,
            image: 'https://ibb.co/HXMCdgV',
            name: 'American',
            price: '5.00',
            description: 'An Americano contains espresso and hot water. Espresso being the operative word, which uses a quick extraction method.'
        },
        {
            id: 6,
            image: 'https://ibb.co/4mkWBKw',
            name: 'French Roast',
            price: '8.00',
            description: 'French roast coffee beans are roast level roasted for longer than typical dark roasts. This roasting process produces a darker color and richer flavor for a coffee bean.'
        }
    ]
    return (
        <div className='py-8 px-2 max-w-7xl mx-auto'>
            <div className='py-4'>
                <h2 className='text-center text-4xl'>Coffee Menu</h2>
                <p className='text-center text-2xl font-light'>Caffeine- It maintains your sunny personality.</p>
            </div>
            <div className='grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                {
                    coffees.map(item => <MenuItem item={item}></MenuItem>)
                }
            </div>
            <div className='text-center py-4'>
                <button className='btn'>View All</button>
            </div>
        </div>
    );
};

export default MenuSection;