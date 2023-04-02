import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div>
           <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
                <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl my-6 font-bold text-center'>{price.name}</h5>
            <p className='font-bold text-white underline'>Features:</p>
        </div>
    );
};

export default PriceCard;