import React from 'react'

const ServiceSpacification = ({ product }) => {
    const { spacification, color, daimention, weight, frequency, connectivity, sensitivity, driverMagnet, manufacturingWarranty } = product

    return (
        <>
            <div>
                <div className='bg-indigo-50 mb-3 text-xl p-2 text-indigo-600 '>{spacification[0]}</div>
                <table className='flex gap-x-16 '>
                    <tr className='flex flex-col '>
                        <td class='mb-2'>Driver Magnet</td>
                        <td class='mb-2'>Frequency Range</td>
                        <td class='mb-2'>sensitivity</td>
                        <td class='mb-2'>Connectivity</td>
                    </tr>
                    <tr className='flex flex-col '>
                        <td class='mb-2'>{driverMagnet}</td>
                        <td class='mb-2'>{frequency}</td>
                        <td class='mb-2'>{sensitivity}</td>
                        <td class='mb-2'>{connectivity}</td>
                    </tr>

                </table>
            </div>
            <div>
                <div className='bg-indigo-50 mb-3 text-xl p-2 text-indigo-600 '>{spacification[1]}</div>

                <table className='flex gap-x-16'>
                    <tr className='flex flex-col '>
                        <td class='mb-2'>Dimensions</td>
                        <td class='mb-2'>weight</td>
                        <td class='mb-2'>color</td>
                    </tr>
                    <tr className='flex flex-col '>
                        <td class='mb-2'>{daimention}</td>
                        <td class='mb-2'>{weight}</td>
                        <td class='mb-2'>{color}</td>
                    </tr>

                </table>
            </div>
            <div>
                <div className='bg-indigo-50 mb-3 text-xl p-2 text-indigo-600 '>{spacification[2]}</div>
                <table className='flex gap-x-16'>
                    <tr className='flex flex-col '>
                        <td class='mb-2'>Frequency</td>

                    </tr>
                    <tr className='flex flex-col '>
                        <td class='mb-2'>{frequency}</td>
                    </tr>

                </table>
            </div>
            <div>
                <div className='bg-indigo-50 mb-3 text-xl p-2 text-indigo-600 '>{spacification[3]}</div>
                <table className='flex gap-x-16'>
                    <tr className='flex flex-col '>
                        <td class='mb-2'>Manufacturing Warranty</td>


                    </tr>
                    <tr className='flex flex-col '>
                        <td class='mb-2'>{manufacturingWarranty}</td>

                    </tr>

                </table>
            </div>
        </>
    )
}

export default ServiceSpacification;