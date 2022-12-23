import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Products from '../../pages/Products';

const BestProducts = () => {
    const [search, setSearch] = useState([])
    const [record, setRecord] = useState([])
    const [allPhone, setAllPhone] = useState();



    useEffect(() => {
        fetch('http://localhost:5000/allphone')
            .then(res => res.json())
            .then(data => setAllPhone(data))


    }, [])

    const handlechange = (searchItem) => {
        setRecord(searchItem);
        console.log(searchItem);

    }
    return (
        <div className='mt-10 gap-10 flex flex-col '>
            <div className='flex items-center ml-28  border border-blue-300  h-8 py-2  w-1/3'>
                <AiOutlineSearch className='text-xl text-blue-800 ml-1' />
                <input className='ml-2 outline-none w-full' type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
                <button className='bg-blue-300 px-2 py-1' onClick={() => handlechange(search)}>search</button>
            </div>
            <p className='text-5xl  text-slate-500 flex items-center justify-center'>Find Your Best One</p>
            <div className='h-auto  '>
                <div className='flex flex-col gap-6 p-8'>
                    {
                        allPhone?.filter((product) => product?.name?.toLowerCase().includes(record)).map((product) => <Products key={product._id} product={product} />)
                    }
                </div>

            </div>

        </div>
    )
}

export default BestProducts;