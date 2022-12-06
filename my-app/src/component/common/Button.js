import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = ({ id }) => {

    const navigate = useNavigate()
    const productHandle = (id) => {
        navigate(`/productDetails:${id}`);
    }
    return (
        <div className='flex gap-2 mt-16'>
            <button
                onClick={() => productHandle(id)}
                className=' text-black font-semibold p-2 w-48 rounded
                hover:bg-blue-300 transition ease-in-out
                duration-100 mt-4 border border-gray-300'>
                <div className='flex items-center justify-center gap-1 h-8'>
                    <span className=''>buy</span>
                    <img className='w-16 h-12 mt-2 object-cover ' src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" alt="" />
                </div>
            </button>
            <button
                onClick={() => productHandle(id)}
                className=' text-black font-semibold p-2 w-48 rounded
                        hover:bg-blue-300 transition ease-in-out
                        duration-100 mt-4 border border-gray-300'>
                <div className='flex items-center justify-center gap-1 h-8'>
                    <span className=''>buy</span>
                    <img className='w-16 h-12  ' src="https://logos-world.net/wp-content/uploads/2022/05/Alibaba-Logo.png" alt="" />
                </div>
            </button>
            <button
                onClick={() => productHandle(id)}
                className=' text-black font-semibold p-2 w-48 rounded
                    hover:bg-blue-300 transition ease-in-out
                    duration-100 mt-4 border border-gray-300'>
                <div className='flex items-center justify-center gap-1 h-8'>
                    <span className=''>buy</span>
                    <img className='w-16 h-10 ' src="https://1000logos.net/wp-content/uploads/2021/07/Daraz-Logo.png" alt="" />
                </div>
            </button>

        </div>
    )
}

export default Button