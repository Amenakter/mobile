import React from 'react';
import { useNavigate } from 'react-router-dom';


const Servises = ({ headPhones }) => {
    const { id, img, title, featureKey } = headPhones;

    const navigate = useNavigate();
    const productHandle = (id) => {
        navigate(`/serviceDetails/${id}`);
    }

    return (
        <div className='bg-white border '>
            <div className='flex flex-col items-center p-3  justify-center'>
                <img src={img} className="" alt="" />
                <div className=''>
                    <hr />
                    <p className='mb-3 cursor-pointer hover:underline hover:text-red-600 font-semibold' onClick={() => productHandle(id)}>{title}</p>
                    <p className=''>{featureKey.map((key, index) => (
                        <li key={index}>{key}</li>
                    ))}</p>
                </div>
            </div>
        </div>
    )
}

export default Servises;