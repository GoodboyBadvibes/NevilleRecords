import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-black text-white md:px-40 pb-20'>
      <h2 className='text-center md:font-extrabold font-bold md:text-4xl text-xl p-10'>Neville Records</h2>
      <p className='text-white text-center px-5 text-sm md:text-lg'>Neville Records is an African Leading Entertainment Record Label</p>

      <div className='md:grid md:grid-cols-2 px-20 pt-20 lg:p-40 xl:px-96 gap-40 lg:gap-12  mt-20'>
        <div className='relative  lg:w-1/2 '>
          <Image className='z-10 w-full animate-bigFloat' src={'/khaid4.webp'} width={300} height={500} alt='photo'/>
          <Image className='absolute -top-16 -right-12  animate-smallFloat ' src={'/khaid2.jpg'} width={100} height={500} alt='photo'/>
          <Image className='absolute -bottom-16 -left-12 animate-smallFloat ' src={'/khaid4.webp'} width={100} height={500} alt='photo'/>
        </div>
        <div className=' m-auto  md:h-1/2 mt-40 lg:mt-20 pb-10 '>
          <h3 className=' pb-2 text-blue-900'>City People Entertainment Awards, 2014</h3>
          <h1 className=' md:font-extrabold font-bold md:text-4xl text-xl text-wrap py-10'>Best Record Label of the Year</h1>
          <h2 className=' font-bold md:text-xl text-lg  text-wrap '>The label won the aforementioned category at the 2014 City People Entertainment Awards</h2>
          <div className='grid grid-cols-2 gap-12 text-blue-950 pt-10'>
            <div>
             <h1 className=' md:font-extrabold font-bold md:text-4xl text-xl text-wrap py-10'>+2</h1>
             <p>Artistes</p>
            </div>
            <div>
             <h1 className=' md:font-extrabold font-bold md:text-4xl text-xl text-wrap py-10'>+5</h1>
             <p>Albums</p>
            </div>
            

          </div>
        </div>

      </div>

      <div className='md:grid md:grid-cols-2 px-20 pb-20 lg:p-40 xl:px-96 gap-40   md:mt-20'>
         <div className=' m-auto  md:h-1/2 mt-40 lg:mt-20 pb-10 '>
          {/* <h3 className=' pb-2'>City People Entertainment Awards, 2014</h3> */}
          <h1 className=' md:font-extrabold font-bold md:text-4xl text-xl text-wrap py-10'>Good Music To The World</h1>
          <h2 className=' font-bold md:text-xl text-lg  text-wrap '>Neville&apos;s taste for delivering the utmost value, has inspired the company&apos;s expansion into innovative services such as patnerships, content production, publishing and marketing</h2>
          <h1 className=' md:font-extrabold font-bold md:text-4xl text-xl text-wrap py-20 text-blue-900'>Exporting Afrobeats</h1>
        </div>
        <div className='relative  lg:w-1/2 mt-40 '>
          <Image className='z-10 w-full animate-bigFloat' src={'/khaid4.webp'} width={300} height={500} alt='photo'/>
          <Image className='absolute -top-16 -right-12  animate-smallFloat ' src={'/khaid2.jpg'} width={100} height={500} alt='photo'/>
          <Image className='absolute -bottom-16 -left-12 animate-smallFloat ' src={'/khaid4.webp'} width={100} height={500} alt='photo'/>
        </div>
       

      </div>
    </div>
  )
}

export default page