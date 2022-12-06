import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import Avatar from '../../image/avatar.png';
import { MdOutlineShoppingCart } from 'react-icons/md'

const Navber = () => {
    return (
        <nav className='px-8' style={{ borderBottom: '1px solid lightgray' }}>
            <div className='flex justify-between py-4'>
                <div className='flex justify-center items-center flex-col bg-slate-100 rounded-full object-cover'>
                    <img src={logo} className='w-10 h-10 object-cover cursor-pointer' alt="logo" />
                </div>
                <div className='flex items-center justify-center gap-8'>
                    <ul className='flex items-center justify-center gap-4'>
                        <Link to='/' className='text-lg font-normal text-gray-200 cursor-pointer hover:text-blue-600 transition-all duration-100 ease-in-out hover:bg-slate-300 rounded-md p-2'>Home</Link>
                        <Link to="/about" className='text-lg font-normal text-gray-200 cursor-pointer hover:text-blue-600 transition-all duration-100 ease-in-out hover:bg-slate-300 rounded-md p-2'>About</Link>
                        <Link to='/contact' className='text-lg font-normal text-gray-200 cursor-pointer hover:text-blue-600 transition-all duration-100 ease-in-out hover:bg-slate-300 rounded-md p-2'>Contact</Link>
                        <Link to='/services' className='text-lg font-normal text-gray-200 cursor-pointer hover:text-blue-600 transition-all duration-100 ease-in-out hover:bg-slate-300 rounded-md p-2'>Services</Link>
                        <Link to='/blog' className='text-lg font-normal text-gray-200 cursor-pointer hover:text-blue-600 transition-all duration-100 ease-in-out hover:bg-slate-300 rounded-md p-2'>Blog</Link>
                    </ul>
                </div>
                <div className=' flex justify-center items-center gap-4'>
                    <div className='relative'>
                        <MdOutlineShoppingCart className='w-8 h-8 text-gray-100' />
                        <div className='absolute w-5 h-5 rounded-full -top-2 -right-2 bg-red-500 flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>0</p>
                        </div>
                    </div>
                    <p className='ml-12 text-lg text-blue-200 underline'>Login</p>
                    <img src={Avatar} className='w-10 h-10 rounded-full cursor-pointer' alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navber