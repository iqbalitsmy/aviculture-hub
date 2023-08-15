import React from 'react';

const ProductCard = ({ productList }) => {
    const { title, price, image } = productList;
    return (
        <div className='flex flex-col justify-center items-center relative shadow-md'>
            <figure className='pt-7 pb-3 bg-white shadow-xl rounded-md border'>
                <img className='max-w-full h-auto' src={image} alt="Bird Image" />
            </figure>
            <div className='text-center'>
                <h3 className='mt-3 text-xl font-light hover:text-[#32b374]'>{title}</h3>
                <span className='mt-3 font-bold'>From ${price}</span>
            </div>
            <button className='w-full bg-[#666666] hover:bg-black hover:text-[#32b374] bottom-0 text-white py-3 rounded mt-5 text-xl font-medium' type="button">Add to Cart</button>
        </div>
    );
};

export default ProductCard;