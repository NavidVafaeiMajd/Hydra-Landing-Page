// import { useState } from 'react'
import Call from '../assets/icon/Call';
import Location from '../assets/icon/Location';
import Mail from '../assets/icon/Mail';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// import '../assets'

function ContactUs() {
//   const [count, setCount] = useState(0)

    return (

        <div id='ContactUs' className=' bg-gradient-to-r from-darker via-[#3A3456F2] to-darker md:p-10 max-md:py-5 rounded-full relative z-10! flex items-center' >
            <Swiper className='overflow-hidden!'
                modules={[Navigation]}
                navigation
                effect="slide"
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                }}
            >
                <SwiperSlide>
                    <div className='flex md:gap-5 items-center justify-center '>
                        <div><Location/></div>
                        <div className='max-md:text-center'>
                            <h2>Pay Us a Visit</h2>
                            <p className='my-2'>Union St, Seattle, WA 98101, United States</p>
                        </div>
                    </div>  
                </SwiperSlide>
                <SwiperSlide className='flex items-center justify-centerh-full!'>
                    <div className='flex gap-5 items-center justify-center h-full!  '>
                        <div><Call/></div>
                        <div className='max-md:text-center'>
                            <h2>Give Us a Call</h2>
                            <p className='my-2'>(110) 1111-1010</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex gap-5 items-center justify-center  '>
                        <div><Mail/></div>
                        <div className='max-md:text-center'>
                            <h2>Send Us a Message</h2>
                            <p className='my-2'>Contact@HydraVTech.com</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            


        </div>
  )
}

export default ContactUs;
