import React from 'react'
import Image from 'next/image';
import drug from '@/app/images/drug.png'
import disease from '@/app/images/disease1.png'
import drug1 from '@/app/images/drug1.png'
import chevron_right from '@/app/images/chevron-right.png'


export default function InfoFromOfficer() {
  return (
    <div className='flex flex-col gap-4'>
        <h5 className='text-xl md:text-header font-semibold'>ข้อมูลจากบุคลากร</h5>
        {[
            [disease.src,'โรคประจำตัว','โรคประจำตัวบันทึกโดยบุคลากร'],
            [drug.src,'ประวัติแพ้ยา','ประวัติแพ้ยาบันทึกโดยบุคลากร'],
            [drug1.src,'ยาที่ใช้ประจำ','ยาที่ใช้ประจำบันทึกโดยบุคลากร'],
        ].map(([pic,header,describ],i)=>(
            <CardInfo key={i} pic={pic} Header={header} describ={describ}/>
        ))}
    </div>
  )
}

function CardInfo({pic,Header,describ}:{pic:string,Header:string,describ:string}){
    return(
        <div className='flex items-center rounded-lg w-full shadow-md shadow-[#C4DAFF80] p-4 justify-between'>
            <div className='flex items-center'>
                <div>
                    <Image src={pic} width={100} height={100} alt='iconofficer' className='w-14 h-14'/>
                </div>
                <div className='flex flex-col px-4'>
                    <span className='text-xl md:text-header font-semibold'>{Header}</span>
                    <span className='text-base md:text-unit font-thin text-gray-500'>{describ}</span>
                </div>
            </div>
            <div>
                <Image src={chevron_right.src} width={40} height={40} alt=''/>
            </div>
        </div>
    );
}