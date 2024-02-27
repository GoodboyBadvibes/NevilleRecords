import React from 'react'

const page = () => {
  return (
    <div>
      <div className='bg-black text-gray-500 p-10 md:px-40 pb-20'> 
        <h2 className='text-center md:font-extrabold font-bold md:text-4xl text-xl text-blue-900 pt-32 py-10'>Contact Us</h2>
        <p className=' text-center px-5 text-sm md:text-lg'>Our team will be in touch with you shortly</p>

        <div className='md:grid md:grid-cols-3 pt-48 pb-72 text-center'>

          <div className='mb-12'>
            <i className='ri-phone-line bg-blue-800 bg-opacity-15 text-6xl text-blue-800 rounded-full rounded-e-full w-fit h-fit p-14 m-auto block'></i>
            <h1 className='text-xl mt-10'>Call us today</h1>
            <p className='text-2xl mt-10'>+2349133616411</p>
          </div>

          <div className='mb-12'>
            <i className=' ri-message-3-line font-extrabold bg-blue-800 bg-opacity-15 text-5xl text-blue-800 rounded-full rounded-e-full w-fit h-fit p-14 m-auto block'></i>
            <h1 className='text-xl mt-10'>Send an Email</h1>
            <p className='text-2xl mt-10'>info@mavinrecords.com</p>
          </div>

          <div className='mb-12'>
            <h1 className=' ri-map-pin-2-line font-extrabold bg-blue-800 bg-opacity-15 text-5xl text-blue-800 rounded-full rounded-e-full w-fit h-fit p-14 m-auto block'></h1>
            <h1 className='text-xl mt-10'>Visit our HQ</h1>
            <p className='text-2xl mt-10'>Victoria, Lagos</p>
          </div>

        </div>

        <div className='m-auto w-fit pb-40'>
          <h1 className='md:font-extrabold font-bold md:text-4xl text-xl text-blue-900 pb-5'> 285A Ajose Adeogun, Victoria Island, Lagos.</h1>
          <p className='font-bold md:text-2xl text-lg text-gray-500 pb-5'>Postcode: 100232</p>

          <div className='flex gap-5 items-center py-5'>
            <i className=' ri-message-2-line font-extrabold bg-opacity-15 text-3xl text-blue-800 rounded-full  w-fit h-fit block'></i> <h1>info@mavinrecords.com</h1>
          </div>

          <div className='flex gap-5 items-center py-5'>
            <i className=' ri-phone-line font-extrabold bg-opacity-15 text-3xl text-blue-800 rounded-full  w-fit h-fit block'></i> <h1>+2349133616411</h1>
          </div>

          <div className='flex gap-5 items-center py-5'>
            <i className=' ri-time-line font-extrabold bg-opacity-15 text-3xl text-blue-800 rounded-full  w-fit h-fit block'></i> <h1> 9:00 am - 5:00 pm</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page