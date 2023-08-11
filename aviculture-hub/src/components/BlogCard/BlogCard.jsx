import React from 'react';


const BlogCard = ({ blog }) => {
    const { title, image } = blog;

    // const pic =image
    console.log(image);
    return (
        <div className='flex flex-col text-center justify-center items-center'>
            <h1 className='text-[34px] font-medium font-["Cabin"] pb-6'>{title}</h1>
            <figure>
                <img className='max-w-full h-auto' src={image} alt="Bird Image" />
            </figure>
            <div className='text-white mt-4'>
                <button type="button" className='bg-[#32b374] py-3 px-4 rounded-3xl hover:bg-black'>Read More</button>
            </div>
        </div>
    );
};

export default BlogCard;