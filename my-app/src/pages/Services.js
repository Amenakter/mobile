import React from 'react'
import { headPhone } from '../ults';
import Servises from '../component/services/Servises';
import ServicesList from '../component/services/ServicesList';

const Services = () => {
    return (
        <>
            <ServicesList />

            <div className='p-2 border  mb-6'>
                <input type="text" className='w-full text-xl outline-none' placeholder='Type here' />
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-3'>
                {
                    headPhone.map((headPhones) => (
                        <Servises key={headPhones.id} headPhones={headPhones}></Servises>
                    ))
                }
            </div>
        </>
    )
}

export default Services;