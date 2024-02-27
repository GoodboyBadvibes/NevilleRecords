'use client'

import loadin from 'react-useanimations/lib/loading2'
import UseAnimations from "react-useanimations";

const loading = () => {
  return (
    <div className='text-center bg-black w-full  h-full fixed flex justify-center'>
      
       <UseAnimations animation={loadin} strokeColor={'blue'} size={50}
        onClick={() => {
          // eslint-disable-next-line
          console.log('additional onClick cb is working');
          setClick(!click)
        }}
        render={(eventProps, animationProps) => (
          <button type="button" {...eventProps}>
            <div {...animationProps} />
          </button>
        )}
        />
    </div>
  )
}

export default loading