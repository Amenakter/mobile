import React from 'react'
import { useParams } from 'react-router-dom';
import ServiceSpacification from './ServiceSpacification';

const ServiceDetails = () => {
    const { id } = useParams();

    const singleProduct = [
        {
            "id": "7",
            "title": "Lenovo HD200 Bluetooth Wireless Headphone",
            "featureKey": [
                " 40mm powerful driver",
                "Bluetooth v5.0",
                "20Hrs of long paying time",
                "Ergonomic comfort ear-cap"
            ],
            "model": "HD200",
            "img": "https://www.startech.com.bd/image/cache/catalog/headphone/lenovo/hd200/lenovo-hd200-wireless-headphone-01-228x228.webp",
            "price": "1,500/-",
            "regularPrice": "2,000/-",
            "brand": "Lenovo",
            "spacification": [
                "Technical Specification",
                "Physical Specification",
                "Microphone",
                "Warranty Information"
            ],
            "color": "Black",
            "daimention": "20*10*5cm",
            "weight": "300g",
            "frequency": "20-20kHz",
            "connectivity": "Wearless",
            "sensitivity": "101±3dB",
            "driverMagnet": "40mm",
            "manufacturingWarranty": "No Warranty"
        }
    ]
    return (
        <div>
            <p>ServiceDetails:{id}</p>
            {
                singleProduct.map(product => (
                    <div className='grid lg:grid-cols-2 md:grid-rows-2' key={product.id}>
                        <div className='flex justify-center h-96'>
                            <img src={product.img} className='object-cover' alt="" />
                        </div>
                        <div className='flex flex-col gap-y-3'>

                            <p className='text-2xl text-blue-500'>{product.title}</p>

                            <div className='flex  gap-3'>
                                <button className='bg-purple-50  p-2 lg:text-sm text-xs rounded-full  font-semibold'>
                                    <span className='text-gray-500 lg:text-sm text-xs'>Price : </span>
                                    {product.price}
                                </button>
                                <button className='bg-purple-50  p-2 lg:text-sm text-xs rounded-full font-semibold'>
                                    <span className='text-gray-500 lg:text-sm text-xs'>Regular Price : </span>
                                    {product.regularPrice}</button>
                                <button className='bg-purple-50 p-2 lg:text-sm text-xs rounded-full font-semibold'>
                                    <span className='text-gray-500 lg:text-sm text-xs'>Brand : </span>
                                    {product.brand}</button>
                            </div>
                            <div>
                                <p className='mb-4 text-xl font-semibold '>Feature Key</p>
                                {
                                    product.featureKey.map((featureKey, index) => (
                                        <p className='mb-2 font-normal' key={index}>{featureKey}</p>
                                    ))
                                }
                            </div>

                            <div className='flex gap-4 mt-12'>
                                <div className=' '>
                                    <button className='border px-4 font-semibold lg:text-1xl text-xl py-2'>+</button>
                                    <button className='border px-4 font-semibold lg:text-1xl text-xl py-2'>1</button>
                                    <button className='border px-4 font-semibold lg:text-1xl text-xl py-2'>-</button>
                                </div>
                                <div className='bg-blue-800 text-white rounded flex justify-center items-center'>
                                    <button className='px-4 py-2 text-center lg:w-48 w-40'>Buy Now</button>
                                </div>
                            </div>
                            <div className='mt-12'>
                                <a href="#spacification" className='underline text-red-600'>View More Details</a>
                            </div>
                        </div>
                        <div className='border p-3' id='spacification'>
                            <p className='text-2xl font-semibold mb-6'>Specification</p>
                            <div>
                                <ServiceSpacification product={product} />
                            </div>
                        </div>

                    </div>
                ))
            }


        </div>
    )
}

export default ServiceDetails;