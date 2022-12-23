import React from 'react'
import Button from '../component/common/Button';
import { useNavigate } from 'react-router-dom';

const Products = ({ product }) => {
    const { _id, image, name, title, price, } = product;

    const navigate = useNavigate()
    const productHandle = (id) => {
        navigate(`/productDetails/${id}`);
    }


    return (
        <div className='flex w-full p-6 shadow-sm hover:shadow-lg bg-white border'>
            <img src={image} onClick={() => productHandle(_id)} className=" w-60 object-cover rounded border cursor-pointer" alt="img" />
            <div>
                <div className='gap-1 mt-3  p-4 cursor-pointer' onClick={() => productHandle(_id)}>
                    <p className='text-xl font-bold' > {name}</p>
                    <p className='text-4xl font-bold' > {title}</p>
                    <p className='font-semibold mt-1' >{price}</p>

                    <Button />

                </div>
            </div>
        </div>
    )
}

export default Products;