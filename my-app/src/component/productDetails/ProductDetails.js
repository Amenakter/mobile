import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../common/Button';

const ProductDetails = () => {
    const { id } = useParams();

    const singleProduct = [
        {
            id: 0,
            name: "samsungGalaxy",
            image: "https://images.samsung.com/is/image/samsung/p6pim/bd/sm-a235flbhbkd/gallery/bd-galaxy-a23-sm-a235-sm-a235flbhbkd-thumb-532156976?$320_320_PNG$",
            title: "Samsung Galaxy F23",
            price: "3000000",
            ram: "8GB",
            model: "521+5G",
            quantity: 5,
            storage: "32GB",
            battery: "24 hours",
            desc: "Samsung Best model phone",
            similarPic: [

                "https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg",
                "https://www.mobiledokan.com/wp-content/uploads/2022/04/Walton-Primo-GH11.jpg",
                "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-4g-oversea/listpage/Phone-List-Page-product-list-Aurora-427-x-600.png.thumb.webp",
                "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg"
            ]



        }
    ]
    // const [products, setProducts] = useState({});
    // console.log(products);

    // useEffect(() => {
    //     fetch(`http://localhost:3000/productDetails${id}`)
    //         .then(response => response.json())
    //         .then(data => setProducts(data))

    // }, [id])



    return (
        <div className='px-6 ml-20'>
            <h1>Product id is{id}</h1>

            {
                singleProduct.map(product => (
                    <div key={product.id} className='w-full p-8 bg-gray-100 shadow-sm hover:shadow-lg flex  items-center  gap-8'>
                        <img src={product?.image} className=" w-80 object-cover rounded bg-slate-300" alt="img" />
                        <div className='mt-3 p-4'>
                            <p className='text-3xl font-semibold'> {product.title}</p>
                            <Button />
                        </div>
                    </div>
                ))

            }

            <div className='mt-8 h-screen '>
                <div className='border border-gray-400 p-2 flex justify-between'>
                    <div className=''>
                        <p className=' text-xl font-bold'>Color</p>
                    </div>
                    <div className=''>
                        <div className=' flex gap-x-2'>
                            <button className='border border-blue-200 p-1'>Black</button>
                            <button className='border border-blue-200 p-1'>Gray</button>
                            <button className='border border-blue-200 p-1'>Pink</button>
                        </div>
                    </div>
                </div>
                {
                    singleProduct.map((product) => (
                        <div className=''>
                            <p className='text-xl font-semibold p-2'>Gallery</p>
                            <div key={product.id} className='w-full p-8  flex flex-wrap items-center justify-center gap-8'>
                                {
                                    product.similarPic.map((pic, index) => (
                                        <div key={index} className='p-4 border border-gray-300 shadow-sm hover:shadow-lg'>
                                            <img src={pic} className='w-40 h-52  rounded' alt="" />
                                        </div>
                                    ))
                                }
                            </div>

                            <hr className="border-1" />
                            <div className=' mt-8'>
                                <table className='flex flex-col justify-start bg-gray-100 p-4'
                                >
                                    <p className='text-2xl mb-4 font-semibold'>Specifications</p>
                                    <tr className=' w-full bg-blue-500 text-white p-2'>
                                        <th>display</th>

                                    </tr>
                                    <tbody className='flex gap-8'>
                                        <tr className='flex flex-col  border-r border-purple-300'>
                                            <td>Dimension</td>
                                            <td>Weight</td>
                                            <td>Sim</td>
                                        </tr>
                                        <tr className='flex flex-col' >
                                            <td>159.9 x 74.8 x 8.1 mm</td>
                                            <td>189g</td>
                                            <td>Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className='flex flex-col justify-start bg-gray-100 p-4'
                                >
                                    <tr className=' w-full bg-blue-500 text-white p-2'>
                                        <th>Body</th>

                                    </tr>
                                    <tbody className='flex gap-8'>
                                        <tr className='flex flex-col  border-r border-purple-300'>
                                            <td>Dimension</td>
                                            <td>Weight</td>
                                            <td>Sim</td>
                                        </tr>
                                        <tr className='flex flex-col' >
                                            <td>159.9 x 74.8 x 8.1 mm</td>
                                            <td>189g</td>
                                            <td>Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)</td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    ))
                }
            </div>
        </div >

    )
    {/* <div className='flex flex-col gap-2 mt-3 p-4'>
    <p> {product.title}</p>
    <p>{product.desc}</p>
    <p>Price :{product.price}</p>
    <p>Ram :{product.ram}</p>
    <p>Storage : {product.storage}</p>
    <p> model : {product.model}</p>
    <p>Bettery :{product.battery}</p>
    </div> */}
}

export default ProductDetails;