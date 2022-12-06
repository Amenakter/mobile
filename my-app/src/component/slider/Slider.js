import React, { useState } from 'react'
import { sliders } from '../../ults';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'


let count = 0;
const Slider = () => {
    const sliderData = sliders;
    const [activeSlide, setActiveSlide] = useState(0);

    const prevSliderHandler = (id) => {
        count = (count + 1) % sliderData.length;
        setActiveSlide(count)
    };

    const nextSliderHandler = (id) => {
        count = (activeSlide + sliderData.length - 1) % sliderData.length
        setActiveSlide(count)
    };

    return (
        <div className='m-6'>
            {
                sliderData.map(slider => (
                    <div key={slider.id} className={activeSlide === slider.id ? "flex justify-center items-center" : "hidden"} >
                        <div className='flex items-center justify-center w-full '>
                            <button onClick={() => prevSliderHandler(slider.id)}><IoIosArrowBack /></button>
                            <img className='w-4/5 h-96 ' src={slider.image} alt="" />
                            <button onClick={() => nextSliderHandler(slider.id)}><IoIosArrowForward /></button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Slider;