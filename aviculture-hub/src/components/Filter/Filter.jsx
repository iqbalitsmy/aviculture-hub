import React, { useState } from 'react';
import RangeSlider from '../RangeSlider/RangeSlider';
import products from '../Products/ProductsData';

const Filter = () => {
    const [sliderValue, setSliderValue] = useState([20, 80]);

    // Create a Set to store unique category values
    const uniqueCategoriesSet = new Set(products.map(product => product.category));
    const uniqueBrandSet = new Set(products.map(product => product.brand));

    // Convert Set to an array to get unique category values
    const uniqueCategories = Array.from(uniqueCategoriesSet);
    const uniqueBrands = Array.from(uniqueBrandSet);

    // Slider range value;
    const handleSliderChange = (newValue) => {
        setSliderValue(newValue);
    };

    return (
        <aside className='max-w-[300px] w-80 mt-5 shadow-md p-4'>
            {/* Search Button */}
            <div className=''>
                <input className='p-2 border h-full mb-2 rounded' style={{outline:'none'}} type="text" placeholder='Search'/>
                <button className='p-2 bg-[#32b374] hover:bg-green-700 rounded ml-2 text-white' type="button">Search</button>
            </div>
            {/* Search Button End */}

            <div className='mb-3'>
                <h4 className='text-xl font-medium'>Filter by Price</h4>
                {/* --- Price Slider --- */}
                <RangeSlider
                    min={0}
                    max={100}
                    value={sliderValue}
                    onChange={handleSliderChange}
                />
                <div className="text-xl">
                    Range: ${sliderValue[0]} - ${sliderValue[1]}
                </div>
                {/* --- Price Slider End --- */}
            </div>
            
            {/* ---Filter By Category--- */}
            <div className='mb-3'>
                <h4 className='text-xl font-medium '>Filter By Category</h4>
                {
                    // Unique category
                    uniqueCategories.map(category => (<p><a className='text-[#32b374] hover:text-black' href="">{category}</a></p>))
                }
            </div>

            {/* ---Filter By Brand--- */}
            <div className='mb-3'>
                <h4 className='text-xl font-medium'>Filter By Brand</h4>
                {
                    // Unique Brand
                    uniqueBrands.map(bird => (<p><a className='text-[#32b374] hover:text-black' href="">{bird}</a></p>))
                }
            </div>
        </aside>
    );
};

export default Filter;