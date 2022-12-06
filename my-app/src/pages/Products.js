import React from 'react'
import Button from '../component/common/Button';

const Products = ({ product }) => {
    const { id, image, name, title, price, } = product;



    return (
        <div className='flex w-full p-6 shadow-sm hover:shadow-lg bg-white border'>
            <img src={image} className=" w-60 object-cover rounded border" alt="img" />
            <div>
                <div className='gap-1 mt-3  p-4'>
                    <p className='text-xl font-bold' > {name}</p>
                    <p className='text-4xl font-bold' > {title}</p>
                    <p className='font-semibold mt-1' >BDT {price}</p>

                    <Button id={id} />

                </div>
            </div>
        </div>
    )
}

export default Products;