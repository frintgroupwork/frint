import React from 'react'
import Section from '../Section'
import Image from 'next/image'

const Collabration = () => {
  return (
   <>
    <Section className='flex flex-col items-center h-[230px] z-50 shadow-md bg-white'>
        <p className='pt-4 text-xl font-medium'>COLLABORATION <span className='text-[#1d4ed8]'>TEAM</span></p>
        <div>
            <div>
                <Image></Image>
                <p></p>
            </div>
            <div></div>
            <div></div>
        </div>
    </Section>
   </>
  )
}

export default Collabration