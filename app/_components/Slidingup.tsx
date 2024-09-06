'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import chevron_right from '@/app/images/chevron-right.png'
import CTAButton from '@/app/images/CTA Button (1).png'
import CTAButtonX from '@/app/images/CTA Button.png'
import camera from '@/app/images/camera-01.png'
import image_icon from '@/app/images/image-03.png'
import profilePic from '@/app/images/Avatar.png'
import Iconbage from '@/app/images/Icon Badge (1).png'
import cameraprofile from '@/app/images/Icon Badge.png'


export default function Slidingup() {

    const pictureprofile:string[] = [profilePic.src,profilePic.src,profilePic.src,profilePic.src,profilePic.src,profilePic.src,profilePic.src,profilePic.src,]
    let [close,setClose] = useState(false)
  return (
    <>  
        <div className='' onClick={()=>setClose(true)}>
            <Image alt='profile picture' className='w-[35%] absolute right-0 bottom-7' src={cameraprofile} width={84} height={84}/>
        </div>
        <div onClick={()=>setClose(!close)} className={`${close?'opacity-100 visible':'invisible opacity-0 delay-300'} transition-all ease-in duration-150 fixed z-20 bg-[#2A2A2A66] top-0 left-0 w-screen h-screen`}>
            <div className='w-full h-full flex align-bottom justify-center items-end'>
                <div onClick={(e:React.MouseEvent<HTMLElement>)=>e.stopPropagation()} className={` h-fit max-w-[500px] flex flex-col gap-3 bottom-0 bg-slate-50 w-screen transform transition-transform ease-in duration-300 ${!close?'translate-y-full':'translate-y-0'} p-4 rounded-t-3xl`}>
                    <div className='flex justify-between items-center' >
                        <div onClick={()=>setClose(!close)}><Image src={CTAButtonX} width={56} height={56} alt=''/></div>
                        <div><p className='text-xl'>รูปโปรไฟล์</p></div>
                        <div><Image src={CTAButton} width={56} height={56} alt=''/></div>
                    </div>
                    <div>
                        <div className='flex justify-between p-4 items-center'>
                            <div className='flex items-center'>
                                <div><Image src={camera} width={30} height={30} alt=''/></div>
                                <div className='px-4  text-lg'><p>ภาพถ่าย</p></div>
                            </div>
                            <div><Image src={chevron_right} width={32} height={32} alt=''/></div>
                        </div>
                        <div className='flex justify-between p-4 items-center relative'>
                            <div className='flex items-center'>
                                <div><Image src={image_icon} width={30} height={30} alt=''/></div>
                                <div className='px-4 text-lg'><input className='absolute opacity-0 w-full' type="file" name="" id="" /><p>เลือกรูปจากอัลบั้ม</p></div>
                                
                            </div>
                            <div><Image src={chevron_right} width={32} height={32} alt=''/></div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='w-full'><div className='border-t-2 border-gray-400 '></div></div>
                        <div className='px-4 text-gray-700'>หรือ</div>
                        <div className='w-full'><div className='border-t-2 border-gray-400 '></div></div>
                    </div>
                    <form action="">
                    <div className='grid grid-cols-4 gap-4 pb-12'>
                        {pictureprofile.map((imgprofile,i)=>(
                            <div key={i} className='relative' >
                                <input type="radio" className='absolute w-full opacity-0 h-full peer/profilepic' name="profilepic" id="" />
                                <Image className='w-full' src={imgprofile} width={56} height={56} alt=''/>
                                <Image className='w-7 bottom-0 right-0 opacity-0 peer-checked/profilepic:opacity-100 absolute' src={Iconbage.src} width={56} height={56} alt=''/>
                            </div>
                        ))}
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
