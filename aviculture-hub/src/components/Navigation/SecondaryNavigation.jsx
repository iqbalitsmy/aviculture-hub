import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'


const SecondaryNavigation = () => {
    return (
        <nav className='bg-[#32b374]'>
            <div className='flex justify-between container mx-auto items-center'>
                <div className='text-white text-sm flex'>
                    <a href="http://" className='hover:bg-black py-2 px-[13px]'> <FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="http://" className='hover:bg-black py-2 px-[13px]'> <FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="http://" className='hover:bg-black py-2 px-[13px]'> <FontAwesomeIcon icon={faPinterestP} /></a>
                    <a href="http://" className='hover:bg-black py-2 px-[13px]'> <FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className='text-white text-sm'>
                    <button type="button" className='hover:bg-black py-2 px-[13px]'>Track Your Order</button>
                    <button type="button" className='hover:bg-black py-2 px-[13px]'>Account Login</button>
                </div>
            </div>
        </nav>
    );
};

export default SecondaryNavigation;