import React from 'react';

import image1 from "../images/popular-product/1.jpg"
import image2 from "../images/popular-product/2.jpg"
import image3 from "../images/popular-product/3.jpg"
import image4 from "../images/popular-product/4.jpg"
import PopularProductCard from '../../PopularProductCard/PopularProductCard';


const products = [
    {
        id: 1,
        title: "Passwell Crumbles",
        price: 9.86,
        image: image1,
    },
    {
        id: 2,
        title: "Passwell Complete Lorikeet",
        price: 15.49,
        image: image2,
    },
    {
        id: 3,
        title: "Passwell Parrot Soft Food",
        price: 15.39,
        image: image3,
    },
    {
        id: 4,
        title: "Passwell Egg & Biscuit",
        price: 10.51,
        image: image4,
    },
]

const PopularProducts = () => {
    return (
        <section className='bg-[#f8f8f8] mx-6 pb-16'>
            <div className='container mx-auto'>
                <h1 className='pt-6 mb-6 text-center text-3xl font-light'>Popular Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11'>
                    {
                        products.map(product => (<PopularProductCard 
                            key={product.id}
                            product={product}
                        ></PopularProductCard>))
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;