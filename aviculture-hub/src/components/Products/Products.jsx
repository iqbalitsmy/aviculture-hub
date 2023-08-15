import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import products from './ProductsData';
import ProductCard from '../ProductCard/ProductCard';


const Products = () => {
    const [productsList, setproductsList] = useState(products);
    return (
        <section className='container mx-auto mb-20'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div>
                    <Filter></Filter>
                </div>
                <div className='grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11'>
                    {
                        productsList.map(productList => <ProductCard
                            key={productList.id}
                            productList={productList}
                        ></ProductCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;