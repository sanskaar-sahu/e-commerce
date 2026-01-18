import React from 'react'

const HomeButton = ({text1 , text2}) => {
  return (
    <div className='absolute bottom-40 gap-10 right-20'>
      <a 
      className='hover:bg-slate-900 hover:text-white rounded-2xl bg-white text-black font-semibold px-6 py-2 m-5'
      href='/' >
         {text1}
      </a>
      <a  className='hover:bg-slate-900 hover:text-white rounded-2xl bg-white text-black font-semibold px-4 py-2'
      href="/">{text2}</a>
    </div>
  )
}

export default HomeButton
