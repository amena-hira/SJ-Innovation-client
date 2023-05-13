import React from 'react';
import banner from '../../images/banner/3.avif'

const Banner = () => {
    return (
        <div>
            <div className="hero min-height" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">First Coffee Life Later</h1>
                        <p className="mb-5">Friends bring happiness into your life. Best friends bring coffee.Stressed, blessed, and coffee obsessed.Coffee is the best medicine. Be Amazing Today.</p>
                        <button className="btn btn-warning">Coffee Boost</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;