import React from 'react'
import Image from 'next/image'
import profilePic from '@/app/images/Avatar.png'
import camera from '@/app/images/Icon Badge.png'
import Slidingup from './Slidingup'

export default function InfoUser() {
  return (
    <div className='flex flex-col gap-4'>
      <h5 className='text-xl md:text-header font-semibold'>ชื่อผู้ใช้</h5>
      <div className='rounded-lg w-full flex flex-row shadow-md shadow-[#C4DAFF80] p-4 '>
        <div className='min-w-20 relative'>
          <Image alt='profile picture' className='w-full' src={profilePic} width={84} height={84}/>
          {/* <div className=''>
            <Image alt='profile picture' className='w-[35%] absolute right-0 bottom-7' src={camera} width={84} height={84}/>
          </div> */}
          <Slidingup/>
        </div>
        <div className='grid grid-rows-2 w-full px-4'>
          <div className='grid grid-cols-[60%_30%]'>
            <div className=''>
              <p className='text-lg md:text-sub'>ชื่อ-นามสกุล</p>
              {/* api name */}
              <p className='text-lg md:text-nm font-semibold'>สมรัก นักชก</p>
            </div>

            <div>
              <p className='text-lg md:text-sub'>เพศ</p>
              {/* api gender */}
              <p className='text-lg md:text-nm font-semibold'>ชาย</p>
            </div>
          </div>
          
          <div className='grid grid-cols-[60%_30%]'>
            <div className=''>
              <p className='text-sub'>วันเกิด</p>
              {/* api birthday */}
              <p className='text-lg md:text-nm font-semibold'>01/12/2515</p>
            </div>

            <div>
              <p className='text-lg md:text-sub'>อายุ</p>
              {/* api age */}
              <p className='text-lg md:text-nm font-semibold'>52 ปี</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
