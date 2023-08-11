import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import PopularProducts from '../PopularProducts/PopularProducts';

import image1 from "../images/blogs/1.jpg"
import image2 from "../images/blogs/2.jpg"
import image3 from "../images/blogs/3.jpg"
import image4 from "../images/blogs/4.jpg"
import image5 from "../images/blogs/5.jpg"
import image6 from "../images/blogs/6.jpg"

const blogs = [
    {
        id: 1,
        title: "Red Siskin",
        image: image1,
    },
    {
        id: 2,
        title: "Which macaw species are available in Australia?",
        image: image2,
    },
    {
        id: 3,
        title: "Keeping your birds cool during extremely hot weather",
        image: image3,
    },
    {
        id: 4,
        title: "Peach-fronted Conure",
        image: image4,
    },
    {
        id: 5,
        title: "Planting an aviary for Weavers and Whydahs",
        image: image5,
    },
    {
        id: 6,
        title: "Join our new finch discussion group on Facebook",
        image: image6,
    }
]

const secondBlogs = [
    {
        id: 7,
        title: "Mulga Parrot",
        image: image1,
    },
    {
        id: 8,
        title: "New to softbills? Superb Fairy-wrens are a great introductory species",
        image: image2,
    },
    {
        id: 9,
        title: "Regent Parrot",
        image: image3,
    },
]

const BlogsCards = () => {
    return (
        <>
            <section className='container mx-auto mt-12 mb-14'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                    {
                        blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                    }
                </div>
            </section>

            <PopularProducts></PopularProducts>
            
            <section className='container mx-auto mt-12 mb-14'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                    {
                        secondBlogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                    }
                </div>
            </section>
        </>
    );
};

export default BlogsCards;