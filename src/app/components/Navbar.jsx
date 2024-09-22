"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const router = useRouter()
    const pathName = usePathname()

    const links = [
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact Us',
            path: '/contactus'
        },
        {
            title: 'Service',
            path: '/service'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
    ]

    const handleLogin = () => {
        router.push('/login')
    }

    if(pathName.includes('/dashboard')){
        return (
            <div>navbar</div>
        )
    }

    return (
        <div>
            <nav className="flex justify-evenly py-3">
          <h1 className='text-3xl'>Next <span className='text-pink-600'>Hero</span></h1>
          <ul className="flex items-center gap-5">
            {
                links?.map(link => <Link className={`${pathName === link.path ? "text-pink-600 font-bold" : ""}`} key={link.path} href={link.path}>
                    {link.title}
                </Link>)
            }
          </ul>
          <button onClick={handleLogin} className='btn btn-sm bg-pink-500 px-5 rounded-lg py-2 text-white'>Login</button>
        </nav>
        </div>
    );
};

export default Navbar;