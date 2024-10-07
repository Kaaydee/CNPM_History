
import React from 'react'
import Link from "next/link";
import ButtonLink from '@/components/ui/buttonLink'
import { Avatar } from '@/components/ui/avatar';
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image"
import { AvatarImage,AvatarFallback  } from '@radix-ui/react-avatar';
export default function Navbar() {
  return (
    <div className='w-full pt-16 pb-16 h-20 border-b-[0px] border-gray-500 text-white item-center'>
    <div className='gap-10 max-w-screen-2xl h-full mx-auto px-20 flex items-center justify-between'>
        <Link href='./' className='flex items-center'>
           <Image src='/Image/Logo1.png' alt='suffer' width={100} height={100} />
            <h1 className='text-2xl font-extrabold text-blue-900 text-shadow'>SmartInk</h1>
        </Link>
        <div>
            <ul className='hidden lg:inline-flex items-center gap-10 text-sm font-semibold'>
                {/* <Link href='/' className='navbarLi'>Trang chủ</Link> */}
                <ButtonLink href='/'>Trang chủ</ButtonLink>
                <li className='navbarLi'>In tài liệu</li>
                <li className='navbarLi'>Mua trang in</li>
                <ButtonLink href='/Lichsu'>Lịch sử in</ButtonLink>
            </ul>
        </div>
        <div className='hidden lg:inline-flex items-center gap-2 text-xs'>
            <Avatar>
                <AvatarImage src="https://www.phanmemninja.com/wp-content/uploads/2023/06/avatar-facebook-nam-vo-danh.jpeg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
            <div className='Student font-bold flex flex-col'>
                <div className="flex items-center">
                    <span className='text-black font-bold'>Kaaydee</span>
                    <FaChevronDown className="ml-2 text-black font-bold" /> 
                </div>

                <ul className='text-xs font-thin text-black'>
                    <li>Student</li>
                </ul>
            </div>
        </div>
        <div className='inline-flex lg:hidden'> 
        < MdOutlineMenu className='text-3xl'></MdOutlineMenu>
        </div>
    </div>
</div>

    
  )
}
