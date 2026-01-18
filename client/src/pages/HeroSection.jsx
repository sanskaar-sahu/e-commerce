import React from 'react'
import HomeButton from '../components/HomeButton'
import HomeCard from '../components/HomeCard'

const HeroSection = () => {
    return (
        <div className=''>
            <div className='relative w-full '>
                <img src="varasity.png" className='w-full p-2 h-140 rounded-3xl' alt="" />
                <HomeButton text1={"SHOP MEN"} text2={'SHOP WOMEN'} />
            </div>
            <div className='p-2 flex gap-5 justify-centre'>
                <HomeCard src={'/rows/1.webp'} />
                <HomeCard src={'/rows/2.webp'} />
                <HomeCard src={'/rows/3.webp'} />
                <HomeCard src={'/rows/4.webp'} />
            </div>
        </div>
    )
}

export default HeroSection
