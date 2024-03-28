"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar = () => {

    const [time, setTime] = useState(new Date());
    const [scrolledDown, setScrolledDown] = useState(false);
   

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 200; // Adjust this value as needed
            if (window.scrollY > scrollThreshold) {
                setScrolledDown(true);
            } else {
                setScrolledDown(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to format time in 12-hour format
    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0 hours)
        const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
        return formattedTime;
    };
    return (


        <header className={`${scrolledDown ? " " : "fixed top-0 left-0 right-0 "} transition-all duration-300  z-20 bg-gradient-to-l from-slate-100 to-amber-100`}>
            <nav className=" border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className='rounded-full w-14' src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/397352471_308045648848659_5730269260959944174_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeERZGu5BFg0O3brKc3qIYICCufPqizhGLoK58-qLOEYutb1YdDAzvdNDwl-gvSqd1Tf4IXDlS2SRTsNG1sx-BNV&_nc_ohc=0mFShSMvb2AAX-wQW33&_nc_ht=scontent.fdac24-2.fna&oh=00_AfA9B3Hu71f_FXSrhPdv3VqhrbxI3j1LeoVLJxJT3GY_ig&oe=660AEF2C" alt="Flowbite Logo" />
                        <span className="self-center text-2xl  whitespace-nowrap dark:text-white">Porag Islam Gallery</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <p className="text-md font-semibold  text-black dark:text-white ">{formatTime(time)}</p>
                        <Link href="/login" className="text-sm px-4 py-2 font-semibold bg-black text-white rounded-full  dark:text-blue-500 hover:underline">Login</Link>
                    </div>
                </div>
            </nav>
            <nav className={`${!scrolledDown ? "" : "fixed top-0 left-0 right-0 mt-2  transition-all duration-400"} 
            z-20 bg-white mx-4 py-1  rounded-full dark:bg-gray-700`}>
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-bold  mt-0 space-x-8 rtl:space-x-reverse text-md">
                            <li>
                                <Link href="/" className="text-gray-900 dark:text-white hover:underline" ariaCurrent="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-900 dark:text-white hover:underline">Gallery</Link>
                            </li>
                            {/* <li>
                                <Link href="#" className="text-gray-900 dark:text-white hover:underline">Team</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-900 dark:text-white hover:underline">Features</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default NavBar