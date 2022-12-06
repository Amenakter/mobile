import React from 'react'
import BestProducts from '../component/bestProducts/BestProducts';
import Slider from '../component/slider/Slider';

const Home = () => {
    return (
        <div className=''>
            <Slider />
            <BestProducts />
        </div>
    )
}

export default Home;