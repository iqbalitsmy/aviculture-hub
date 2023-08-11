import React from 'react';

const Footer = () => {
    return (
        <footer className=''>
            <div className='bg-[#313131]'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-between pt-7 pb-9'>
                    <aside className='text-[#d1d1d1]'>
                        <h2 className='text-2xl'>Who are we?</h2>
                        <div>
                            <ul className=''>
                                <li className='pt-3 hover:text-[#32b374]'><a href="">About Aviculture Hub</a></li>
                                <li className='pt-2 hover:text-[#32b374]'><a href="">Contact Us</a></li>
                                <li className='pt-2 hover:text-[#32b374]'><a href="">Privacy Policy</a></li>
                                <li className='pt-2 hover:text-[#32b374]'><a href="">Company News</a></li>
                            </ul>
                        </div>
                    </aside>
                    <aside className='text-[#d1d1d1]'>
                        <h2 className='text-2xl'>Resources for breeders</h2>
                        <div>
                            <ul className=''>
                                <li className='pt-3 hover:text-[#32b374]'><a href="">Glossary of Terms</a></li>
                                <li className='pt-2 hover:text-[#32b374]'><a href="">Bird Sale Calendar</a></li>
                                <li className='pt-2 hover:text-[#32b374]'><a href="">AviManage</a></li>
                            </ul>
                        </div>
                    </aside>
                    <aside className='text-[#d1d1d1]'>
                        <h2 className='text-2xl'>Shopping with us</h2>
                        <div>
                            <ul className=''>
                                <li className='pt-3 hover:text-[#32b374]'><a href="">Glossary of Terms</a></li>
                                <li className='pt-2 hover:text-[#32b374]'><a href="">Shipping & Returns</a></li>
                                <li className='pt-3'>
                                    <div className='flex items-center'>
                                        <input className='p-3 ' type="text" value=""  placeholder='Search products...' style={{outline:'none'}}/>
                                        <button className='ml-1 p-3 bg-[#666666] hover:bg-[#3f3f3f]' type="button">Search</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
            <div className='bg-black'>

            </div>
        </footer>
    );
};

export default Footer;