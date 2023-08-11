import React from 'react';

const PopularProductCard = ({ product }) => {
    const { title, price, image } = product;
    return (
        <div className='flex flex-col justify-center items-center'>
            <figure className='pt-7 pb-3 bg-white shadow-xl rounded-md border'>
                <img className='max-w-full h-auto' src={image} alt="Bird Image" />
            </figure>
            <div className='text-center'>
                <h3 className='mt-3 text-xl font-light hover:text-[#32b374]'>{title}</h3>
                <span className='mt-3 font-bold'>From ${price}</span>
            </div>
        </div>
    );
};

export default PopularProductCard;