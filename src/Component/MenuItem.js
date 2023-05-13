import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, price, description} = item;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Coffee" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h4>${price}</h4>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-warning">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;