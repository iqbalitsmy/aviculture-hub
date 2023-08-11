import React, { useState } from 'react';
import avicultureHub from "../images/AvicultureHub.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='container mx-auto mt-1 py-3'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
                <div className='flex items-center gap-2'>
                    <figure className=''>
                        <img className='h-16 w-auto' src={avicultureHub} alt="" />
                    </figure>
                    <p className='text-[28px] font-light'>
                        <a href="#" className=''>Aviculture Hub</a>
                    </p>
                </div>
                <div className=''>
                    <ul className='flex gap-10 text'>
                        <li className='hover:text-[#32b374]'><a href="#">Home</a></li>
                        <li className='hover:text-[#32b374]'><a href="#">Finches</a></li>
                        <li className='hover:text-[#32b374]'><a href="#">Parrots</a></li>
                        <li>
                            <div className='relative'
                                onMouseLeave={() => setOpen(false)}
                            >
                                <a href="#">
                                    <button type="button"
                                        onMouseOver={() => setOpen(true)}
                                        className="flex items-center"
                                    >
                                        <span className='hover:text-[#32b374]'>
                                            Articles
                                        </span>
                                        <span
                                            className='pl-2 text-xs'>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </button>
                                </a>
                                <ul
                                    className={`absolute bg-white shadow-xl pl-5 pt-3 pr-14 ${open ? "block" : "hidden"
                                        }`}
                                >
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="">
                                            Bird Keeping
                                        </a>
                                    </li>
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="#">
                                            Conservation
                                        </a>
                                    </li>
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="#">
                                            Site News
                                        </a>
                                    </li>
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="#">
                                            Community
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='relative'
                                onMouseLeave={() => setOpen(false)}
                            >
                                <a href="#">
                                    <button type="button"
                                        onMouseOver={() => setOpen(true)}
                                        className="flex items-center"
                                    >
                                        <span className='hover:text-[#32b374]'>
                                            Shop Online
                                        </span>
                                        <span
                                            className='pl-2 text-xs'>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </button>
                                </a>
                                <ul
                                    className={`absolute bg-white shadow-xl pl-5 pt-3 pr-14 ${open ? "block" : "hidden"
                                        }`}
                                >
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="">
                                            Bird Food & Treats
                                        </a>
                                    </li>
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="#">
                                            Breeding & Rearing
                                        </a>
                                    </li>
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="#">
                                            First Aid & Medication
                                        </a>
                                    </li>
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="#">
                                            Vitamin Supplements
                                        </a>
                                    </li>
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="#">
                                            AviManage
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='relative'
                                onMouseLeave={() => setOpen(false)}
                            >
                                <a href="#">
                                    <button type="button"
                                        onMouseOver={() => setOpen(true)}
                                        className="flex items-center"
                                    >
                                        <span className='hover:text-[#32b374]'>
                                            Buy/Sell Birds
                                        </span>
                                        <span
                                            className='pl-2 text-xs'>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </button>
                                </a>
                                <ul
                                    className={`absolute bg-white shadow-xl pl-5 pt-3 pr-14 ${open ? "block" : "hidden"
                                        }`}
                                >
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="">
                                            Bird Sale Calendar
                                        </a>
                                    </li>
                                    <li className="hover:text-[#32b374] px-5 py-4">
                                        <a href="#">
                                            Bird Classifieds
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='hover:text-[#32b374]'>
                            <a href="#">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </a>
                        </li>
                        <li className='hover:text-[#32b374]'>
                            <a href="#">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;