import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight, MdMenu } from 'react-icons/md';
import { prices, rams } from '../../ults';

const FilterElement = () => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState();




    useEffect(() => {
        fetch('http://localhost:5000/allphone')
            .then(res => res.json())
            .then(data => setProducts(data))



    }, [])


    return (
        <div>
            <div className='fixed'>
                <div className={`${open ? "w-56" : "w-20"
                    } bg-indigo-900 h-screen p-5 pt-12 relative duration-300`}
                >
                    <MdKeyboardArrowRight className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 text-gray-100 bg-indigo-900
                         border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />

                    <div className="flex flex-col gap-x-4 items-center">
                        <MdMenu className={`cursor-pointer text-gray-200 text-2xl duration-500 ${open && "rotate-[360deg]"
                            }`} />

                        <h1 className={`text-gray-200 origin-left font-medium text-2xl ml-4 duration-200 ${!open && "scale-0"
                            }`} > Your choice</h1>
                    </div>
                    <div className="pt-8 flex justify-center items-center gap-2">
                        <h6 className='text-lg text-gray-200'>Price</h6>
                        <select name="price" id="" className={`bg-transparent border text-gray-300 outline-none ${!open && "hidden"} origin-left duration-200`}>
                            <option className='text-black ' value="">select Price</option>
                            {
                                prices.map(price => <option className='text-black ' key={price.id}>{price.price}</option>)
                            }
                        </select>

                    </div>
                    <div className="pt-8 flex justify-center items-center gap-2">
                        <h6 className='text-lg text-gray-200'>Ram</h6>
                        <select name="ram" id="" className={`bg-transparent border text-gray-300 outline-none ${!open && "hidden"} origin-left duration-200`}>
                            <option className='text-black ' value="">select Ram</option>
                            {
                                rams.map(ram => (<option className='text-black' key={ram.id}>{ram.ram}</option>))
                            }
                        </select>

                    </div>

                    <div className="pt-8 flex justify-center items-center gap-2 ">
                        <h6 className='text-lg text-gray-200'>Catagory</h6>
                        <select name="catagory-list" id="" className={`bg-transparent border text-gray-300 w-32 outline-none ${!open && "hidden"} origin-left duration-200`}>
                            <option className='text-black ' >select catagory</option>
                            {
                                products?.map(catagories => (<option className='text-black' key={catagories._id} >{catagories.name}</option>))
                            }
                        </select>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterElement