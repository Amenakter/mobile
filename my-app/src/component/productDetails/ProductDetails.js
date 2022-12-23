import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../common/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleProductDetails from '../singleProductDetails/SingleProductDetails';

const ProductDetails = () => {
    const [img, setImg] = useState();
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        const url = `http://localhost:5000/phone/${id}`
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))

    }, [id])



    const imgClick = (index) => {
        // alert(index)

        setImg(index);
    }

    return (
        <div className='px-6 ml-20'>
            <h1>Product id is :{products?.name}</h1>


            <div className='w-full p-8 bg-gray-100 shadow-sm hover:shadow-lg flex  items-center  gap-8'>
                <img src={products?.image} className=" w-80 object-cover rounded" alt="img" />

                <div className='mt-3 p-4'>
                    <p className='text-3xl font-semibold'> {products?.title}</p>
                    <Button />
                </div>
            </div>
            <div className='mt-16 h-screen  bg-white'>
                <Tabs >
                    <TabList >
                        <p className='-mb-5 text-xl font-semibold'>Color</p>
                        <div className='flex justify-end'>
                            <Tab>Black</Tab>
                            <Tab>White</Tab>
                        </div>

                    </TabList>
                    <p className='text-xl font-semibold p-2'>Gallery</p>
                    <TabPanel>
                        <div>
                            <div className='w-full p-8  flex flex-wrap items-center justify-center gap-8'>
                                {
                                    products?.black?.map((pic, index) => (
                                        <div key={index} className='p-4 border border-gray-300 shadow-sm hover:shadow-lg'>
                                            <img src={pic} className='w-48 h-52  rounded' alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>

                            <div className='w-full p-8  flex flex-wrap items-center justify-center gap-8'>
                                {
                                    products?.white?.map((pic, index) => (
                                        <div key={index} className='p-2  border border-gray-300 shadow-sm hover:shadow-lg'>
                                            <img src={pic} className='w-48 h-52   rounded' alt="" />
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </TabPanel>
                </Tabs>
                <hr className="border-1" />
                <div className=' mt-16'>
                    <SingleProductDetails item={products} key={products._id} />
                </div>
            </div>
        </div>


    )

}

export default ProductDetails;