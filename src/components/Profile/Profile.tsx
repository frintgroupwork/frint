import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PersonalInfor from './PersonalInfor';

export default function Profile() {
  return (
    <div className='w-full h-full'>
      {/* Sidebar */}
      <div className='absolute rounded-r-lg bg-white h-full border-r-2 w-[10%] lg:w-1/5 max-lg:pl-6 left-0 max-md:hidden flex flex-col items-start inset-0 pl-10 pt-32 gap-10'>
        <Link className='flex flex-row gap-4 hover:opacity-60' href={"#"}>
          <Image src={"/profile/per-info.svg"} alt='personal information' height={24} width={24}/>
          <p className='max-lg:hidden'>Personal Info</p>
        </Link>
        <Link className='flex flex-row gap-4 hover:opacity-60' href={"#"}>
          <Image src={"/profile/exp.svg"} alt='experiences' height={24} width={24}/>
          <p className='max-lg:hidden'>Experiences</p>
        </Link>
        <Link className='flex flex-row gap-4 hover:opacity-60' href={"#"}>
          <Image src={"/profile/fav.svg"} alt='favorite' height={24} width={24}/>
          <p className='max-lg:hidden'>Favorite</p>
        </Link>
      </div>

      {/* Main Content */}
      <div className='ml-[10%] lg:ml-[20%] p-4 pt-10'> {/* Adjust margin-left to match sidebar width */}
        <div className='flex justify-center'> {/* Center the PersonalInfor component */}
          <div className='w-full max-w-4xl'> {/* Adjust max-width as needed */}
            <PersonalInfor/>
          </div>
        </div>
      </div>
    </div>
  );
}