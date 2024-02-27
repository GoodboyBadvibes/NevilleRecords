'use client'

import React from 'react'
import Image from 'next/image'
import ArtistFlip from '../Components/ArtistFlip'
import AlbumFlip from '../Components/AlbumFlip'

const Home = () => {
  return (
    <>
      <main className='overflow-x-hidden bg-black'>
        <div className='md:grid md:grid-cols-2 gap-0  '>
          <div>
           <ArtistFlip className='object-cover w-full h-full -z-0' />
          </div>
          <div>
          <AlbumFlip className='object-cover w-full h-full -z-0' />
          </div>
          {/* <div className=''>
          <Image src={'/khaid4.webp'} alt='artist' className='object-cover w-full h-full' width={500} height={100}/>
        </div> */}
        </div>
      </main>
    </>
  )
}

export default Home