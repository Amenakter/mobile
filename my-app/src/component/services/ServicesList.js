import React from 'react'

const ServicesList = () => {

    const serviceList = [
        { id: "1", title: "Poly" },
        { id: "2", title: "Sony" },
        { id: "3", title: "Fatech" },
        { id: "4", title: "Gamdias" },
        { id: "5", title: "Rapoo" },
        { id: "6", title: "HP" },
        { id: "7", title: "Maono" }
    ]
    return (
        <div className='flex gap-4'>
            {
                serviceList.map(service => (

                    <button key={service.id} className='border p-3 mb-4 rounded hover:bg-indigo-500 hover:text-white transition duration-100 ease-in-out font-semibold uppercase'>
                        {service.title}
                    </button>

                ))
            }

        </div>
    )
}

export default ServicesList;