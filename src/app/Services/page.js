import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-black text-white p-10 md:px-20 lg:px-40'>
      <h1 className='text-center md:font-extrabold font-bold md:text-4xl text-xl pt-32 text-blue-900'>Our Services</h1>

      <div className='md:grid md:grid-cols-2 gap-72 mt-40 px-5 md:px-24 pb-40'>
        <div className='m-auto pb-20 md:pb-0'>
         <h1 className='md:font-extrabold font-bold md:text-4xl text-xl text-blue-900 pb-10'>Brand Patnership & Activation</h1>
         <p>Collaborate with Neville to develop tailor made branded solutions for your marketing campaigns and brand activation efforts.</p>
         <p className='mt-10 p-5 w-48 md:w-72 text-center hover:bg-blue-900 hover:text-black transition-all cursor-pointer block' style={{display:'block',outline:'1px solid #1e3a8a'}}>Start Collaborating</p>
        </div>

        <div className=' m-auto'>
          <Image className=' object-center m-auto' src={'/khaid4.webp'} width={250} height={500} alt=''  />
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 gap-72 mt-14 px-5 md:px-24 pb-40'>
        <div className='m-auto pb-20 md:pb-0 order-2'>
         <h1 className=' md:font-extrabold font-bold md:text-4xl text-xl text-blue-900 pb-10'>Music Sync & Licensing</h1>
         <p>You can leverage our new and esisting catalogs for use in Games, TV Shows, Movies or Video games</p>
         <p className='mt-10 p-5 w-48 md:w-72 text-center hover:bg-blue-900 hover:text-black transition-all cursor-pointer block' style={{display:'block',outline:'1px solid #1e3a8a'}}>Use our music</p>
        </div>

        <div className=' m-auto'>
          <Image className=' object-center m-auto' src={'/khalbum0.jpg'} width={250} height={500} alt=''  />
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 gap-72 mt-14 px-5 md:px-24 pb-40'>
        <div className='m-auto pb-20 md:pb-0'>
         <h1 className=' md:font-extrabold font-bold md:text-4xl text-xl text-blue-900 pb-10'>Performances and Appearances</h1>
         <p>We can create and manage bespoke events for you or your brands with some of our key industry patners which span from technical, locations. Speak to our team of event curators today. </p>
         <p className='mt-10 p-5 w-48 md:w-72 text-center hover:bg-blue-900 hover:text-black transition-all cursor-pointer block' style={{display:'block',outline:'1px solid #1e3a8a'}}>Book now</p>
        </div>

        <div className=' m-auto'>
          <Image className=' object-center m-auto' src={'/khaid4.webp'} width={250} height={500} alt=''  />
        </div>
      </div>
    </div>
  )
}

export default page