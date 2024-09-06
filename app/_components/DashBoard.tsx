import React from 'react'
import Image from 'next/image'
import weigth from '@/app/images/bmi.png'
import blood_group from '@/app/images/blood_group.png'
import blood_pressure from '@/app/images/blood_pressure.png'
import blood_sugar from '@/app/images/blood_sugar.png'
import heart_rate from '@/app/images/heart_rate.png'
import lung_capa from '@/app/images/lungh_capacity.png'
import oxigen_in_blood from '@/app/images/oxigen_in_blood.png'
import temperature from '@/app/images/temperature.png'
import chevron_right from '@/app/images/chevron-right.png'
import edit from '@/app/images/edit-03.png'

export default function DashBoard() {
    let date: string = new Date().toLocaleDateString();  

  return (
    <>
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
            <h5 className='text-xl md:text-header font-semibold'>ข้อมูลสุขภาพ</h5>
                <Image src={edit.src} width={48} height={48} alt='' className='w-8 h-8' />
            </div>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                <div className='col-span-2 '>
                    <WrapCard IconName={weigth.src} HeaderName={'ดัชนีมวลกาย BMI'} date={date}>
                        <div className='flex gap-3 py-2'>
                            <div className="relative size-20 md:size-32">
                                <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="3" strokeDasharray="75 100" strokeLinecap="round"></circle>

                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth="3" strokeDasharray="37.5 100" strokeLinecap="round"></circle>
                                </svg>

                                <div className="absolute top-2/3 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                    <span className="text-2xl md:text-4xl font-bold text-blue-600">50</span>
                                    <span className="block pt-1 md:pt-2 text-gray-500">ปกติ</span>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 items-end md:items-center'>
                                <div className='flex flex-col'>
                                    <span className='text-xl md:text-sub'>น้ำหนัก</span>
                                    <span className='text-xl md:text-header font-semibold'>70.00 <span className='text-base md:text-unit font-thin text-gray-500'>กก.</span></span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xl md:text-sub'>ส่วนสูง</span>
                                    <span className='text-xl md:text-header font-semibold'>170.00 <span className='text-base md:text-unit font-thin text-gray-500'>กก.</span></span>
                                </div>
                            </div>
                        </div>
                    </WrapCard>
                </div>


                <WrapSub IconName={blood_pressure.src} HeaderName={'ความดันโลหิต'} date={date}>
                    <div className={'flex flex-row'}>
                        <span><h5 className={'text-xl md:text-header font-semibold'}>00 <span className={'text-base md:text-unit font-light text-gray-500'}>mm/Hg</span></h5></span>
                    </div>
                </WrapSub>
                <WrapSub IconName={oxigen_in_blood.src} HeaderName={'ระดับออกซิเจนในเลือด'} date={date}>
                    <div className={'flex flex-row'}>
                        <span><h5 className={'text-xl md:text-header font-semibold'}>00 <span className={'text-base md:text-unit font-light text-gray-500'}>%</span></h5></span>
                    </div>  
                </WrapSub>
                <WrapSub IconName={heart_rate.src} HeaderName={'อัตราการเต้นหัวใจ'} date={date}>
                    <div className={'flex flex-row'}>
                        <span><h5 className={'text-xl md:text-header font-semibold'}>-- <span className={'text-base md:text-unit font-light text-gray-500'}>bpm</span></h5></span>
                    </div>
                </WrapSub>
                <WrapSub IconName={temperature.src} HeaderName={'อุณหภูมิร่างกาย'} date={date}>
                    <div className={'flex flex-row'}>
                        <span><h5 className={'text-xl md:text-header font-semibold'}>00 <span className={'text-base md:text-unit font-light text-gray-500'}>ºC</span></h5></span>
                    </div>
                </WrapSub>
                <WrapSub IconName={blood_group.src} HeaderName={'หมู่เลือด'} date={date}>
                    <div className={'flex flex-row'}>
                        <span><h5 className={'text-xl md:text-header font-semibold'}>AB<span className={'text-base md:text-unit font-light text-gray-500'}></span></h5></span>
                    </div >       
                </WrapSub>
                <WrapSub IconName={blood_sugar.src} HeaderName={'ระดับน้ำตาลในเลือด'} date={date}>
                    <div className={'flex flex-row'}>
                        <span><h5 className={'text-xl md:text-header font-semibold'}>00 <span className={'text-base md:text-unit font-light text-gray-500'}>มม./ดล.</span></h5></span>
                    </div>
                </WrapSub>


                <div className='col-span-2 md:col-span-3'>
                    <WrapCard IconName={lung_capa.src} HeaderName={'สมรรถภาพปอด'} date={date}>
                        <div className='grid grid-cols-4 py-2'>
                            {[
                                ['FVC','3.01','ลิตร'],
                                ['FEV1','2.59','ลิตร'],
                                ['FEF','3.12','ลิตร/วินาที'],
                                ['FEV1/FVC','75','เปอร์เซ็นต์'],
                            ].map(([name,num,unit],i)=>(
                                <div key={i} className='flex flex-col'>
                                    <div className='text-center text-base md:text-unit font-thin text-gray-500'>{name}</div>
                                    <div className='text-center text-xl md:text-header font-semibold'>{num}</div>
                                    <div className='text-center text-base md:text-unit font-thin text-gray-500'>{unit}</div>
                                </div>
                            ))}
                        </div>
                    </WrapCard>
                </div>
            </div>
        </div>
    </>
  )
}

function WrapCard({children,IconName,HeaderName,date}:{children:React.ReactNode,IconName:string,HeaderName:string,date:string}){
    return(
        <div className='rounded-lg w-full shadow-md shadow-[#C4DAFF80] p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-1 items-center'>
                    <span><Image alt='Iconimage' className='w-8 h-8' src={IconName} width={48} height={48}/></span>
                    <span className='text-lg md:text-nm font-semibold'>{HeaderName}</span>
                    <span className='text-base md:text-unit font-thin text-gray-500'>{date}</span>
                </div>
                <div>
                    <Image alt='Iconimage' className='w-8 h-8' src={chevron_right.src} width={48} height={48}/>
                </div>
            </div>
           <div>
            {children}
           </div>
        </div>
    )
}

function WrapSub({children,IconName,HeaderName,date}:{children:React.ReactNode,IconName:string,HeaderName:string,date:string}){
    return(
        <div className='rounded-lg w-full shadow-md shadow-[#C4DAFF80] p-4'>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex flex-col gap-2 '>
                    <span className='flex justify-between items-start'>
                        <div className='flex flex-col gap-1'>
                            <Image alt='Iconimage' className='w-8 h-8' src={IconName} width={48} height={48}/>
                            <span className='text-base md:text-nm font-semibold'>{HeaderName}</span>
                        </div>
                        <Image alt='Iconimage' className='w-8 h-8' src={chevron_right.src} width={48} height={48}/>   
                    </span>
                    <div>
                    {children}
                    </div>
                </div>
                <div>
                    <p className='pt-2 text-sm md:text-unit font-thin text-gray-500'>{date}</p>
                </div>
            </div>
        </div>
    );
}