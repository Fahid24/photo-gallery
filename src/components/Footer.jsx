import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (


        <footer className=" rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className='rounded-full w-14' src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/397352471_308045648848659_5730269260959944174_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeERZGu5BFg0O3brKc3qIYICCufPqizhGLoK58-qLOEYutb1YdDAzvdNDwl-gvSqd1Tf4IXDlS2SRTsNG1sx-BNV&_nc_ohc=0mFShSMvb2AAX-wQW33&_nc_ht=scontent.fdac24-2.fna&oh=00_AfA9B3Hu71f_FXSrhPdv3VqhrbxI3j1LeoVLJxJT3GY_ig&oe=660AEF2C"  alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Porag Islam Gallery</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:underline me-4 md:me-6">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:underline me-4 md:me-6">Login</Link>
                        </li>
                        {/* <li>
                            <Link href="#" className="hover:underline">Contact</Link>
                        </li> */}
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 text-black sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-black sm:text-center dark:text-gray-400">© 2023 <Link href="https://flowbite.com/" className="hover:underline">Porag islam</Link>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer