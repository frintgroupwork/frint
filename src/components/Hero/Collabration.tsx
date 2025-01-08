import React from 'react'
import Section from '../Section'
import Image from 'next/image'

const Collabration = () => {
  return (
   <>
    <Section className='flex flex-col items-center gap-4 w-screen z-50 shadow-md bg-white py-5'>
        <p className=' text-xl font-medium'>COLLABORATION <span className='text-[#1d4ed8]'>TEAM</span></p>
        <div className='w-3/4  max-sm:pt-2'>
            <div className='flex flex-row justify-between items-center max-sm:flex-col'>
                <Image height={100} width={120} src={"collabration/frint.svg"} alt='frint'></Image>
                <Image height={100} width={150} src={"collabration/empoweru.svg"} alt='frint'></Image>
                <Image height={100} width={100} src={"collabration/oppteens.svg"} alt='frint'></Image>
            </div>
        </div>
    </Section>
   </>
  )
}

export default Collabration