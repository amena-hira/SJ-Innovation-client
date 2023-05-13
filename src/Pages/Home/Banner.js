import React from 'react';
import banner from '../../images/banner/3.avif';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div>
            <div className="hero min-height" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">First Coffee Life Later</h1>
                        <p className="mb-5">Friends bring happiness into your life. Best friends bring coffee. <Typed
                            className='typed-text'
                            strings={['Stressed, blessed and coffee obsessed.', 'Coffee is the best medicine. Be Amazing Today.', 'Science may never come up with a better office communication system than the coffee break.']}
                            typeSpeed={50}
                            backSpeed={20}
                            loop
                        ></Typed></p>
                        <button className="btn btn-warning">Coffee Boost</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;