import React from 'react';
import birds from '../images/birds.png'

const Banner = () => {
    return (
        <section className='bg-gradient-to-b from-[#f1f1f1]'>
            <div className='container mx-auto pt-16'>
                <div className='flex justify-between items-center flex-col-reverse md:flex-row'>
                    <div className='text-center md:text-left'>
                        <h1 className='text-5xl font-bold pb-4'>Looking for birds?</h1>
                        <h2 className='text-3xl font-extralight pb-5 text-gray-500'>Our classifieds section connects breeders to buyers, all over Australia.</h2>
                        <button type="button" className='py-3 px-5 bg-[#32b374] text-white border border-[#555d66] rounded'>Browse Classifieds</button>
                    </div>
                    <div>
                        <figure>
                            <img className='h-auto w-full' src={birds} alt="Birds" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;