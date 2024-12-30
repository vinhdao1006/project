import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import FloatButtonGroup from '../components/FloatButtonGroup'
import Footer from '../components/BimecFooter'
import TestimonalSection from '../components/AboutUs/Testimonial'
import ServiceGrid from '../components/Services/ServiceGrid'
import Contact from '../components/Contact'
import img_SubHead_services from '../assets/image/img_SubHead_services.png'
const AboutUs = () => {
    return (
        <div class="overflow-x-hidden overflow-y-auto">
        <div>
            <div className='max-w-xl mx-auto pt-4 pb-4 ml-48'>
                <div className="flex-shrink-0">
                    <a href="/home" className="text-[#181C32] font-bold text-2xl">
                        BIMEC
                    </a>
                </div>
            </div>

            <Navbar />
            
            <FloatButtonGroup></FloatButtonGroup>
            
            <div className="w-full mx-auto">
                <img
                    src={img_SubHead_services}
                    className="w-full"
                >
                </img>
            </div>

            <div className="mt-[4rem]">
            <ServiceGrid></ServiceGrid>
                
            </div>

            <div className="mt-[4rem] mx-auto w-full">
                <TestimonalSection></TestimonalSection>
            </div>

            <div className="mt-[4rem] mx-auto w-full">
                <Contact></Contact>
            </div>

            <div className="mt-[6rem] mx-auto w-full">
                <Footer></Footer>
            </div>
        </div>
        </div>
    )
}

export default AboutUs