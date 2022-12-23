import React from 'react'

const SingleProductDetails = ({ item }) => {
    console.log(item)
    return (
        <table className='flex flex-col bg-gray-100 p-4'>
            <thead className='w-full bg-blue-500  text-white p-2'>
                <tr className='text-xl'>
                    <th>Spacification</th>
                </tr>
            </thead>
            <tbody className='flex gap-8 '>
                <tr className='flex flex-col w-24 font-semibold'>
                    <td className=''>Folded : </td>
                    <td className=''>Unfolded : </td>
                    <td className=''>Weight :</td>
                    <td className=''>Type : </td>
                    <td className=''>Size : </td>
                    <td className=''>Storage : </td>
                    <td className=''>Battery : </td>
                    <td className=''>Camera : </td>
                    <td className=''>Colors : </td>
                    <td className=''>Prices : </td>
                </tr>
                <tr className='flex flex-col  w-full' >
                    <td className='border-b border-gray-300'>{item.Folded}</td>
                    <td className='border-b border-gray-300'>{item.unfolded}</td>
                    <td className='border-b border-gray-300'>{item.weight}</td>
                    <td className='border-b border-gray-300'>{item.Type}</td>
                    <td className='border-b border-gray-300'>{item.Size}</td>
                    <td className='border-b border-gray-300'>{item.storage}</td>
                    <td className='border-b border-gray-300'>{item.battery}</td>
                    <td className='border-b border-gray-300'>{item.Camera}</td>
                    <td className='border-b border-gray-300'>{item.Colors}</td>
                    <td className='border-b font-bold border-gray-300'>{item.price}</td>
                </tr>
            </tbody>



        </table>
    )
}

export default SingleProductDetails;