'use client'
import React, { useState } from 'react';
import Link from "next/link";
import ButtonLink from '@/components/ui/buttonLink';
import { Avatar } from '@/components/ui/avatar';
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";
import { AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
  <nav className='sticky-nav'>
      <div className='w-full pt-4 pb-4 h-20 border-b-[0px] border-gray-500 text-white'>
        <div className='gap-10 max-w-screen-2xl h-full mx-auto px-4 md:px-20 flex items-center justify-between'>
          <Link href='./' className='flex items-center'>
            <Image src='/Image/Logo1.png' alt='suffer' width={50} height={50} className='md:w-20 md:h-20' />
            <h1 className='text-xl md:text-2xl font-extrabold text-blue-900 text-shadow'>SmartInk</h1>
          </Link>
          <div className='hidden lg:flex'>
            <ul className='flex items-center gap-4 md:gap-10 text-sm font-semibold'>
              <ButtonLink href='/'>Trang chủ</ButtonLink>
              <li className='navbarLi'>In tài liệu</li>
              <li className='navbarLi'>Mua trang in</li>
              <ButtonLink href='/Lichsu'>Lịch sử in</ButtonLink>
            </ul>
          </div>
          <div className='hidden lg:flex items-center gap-2 text-xs'>
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
          <div className='flex lg:hidden'>
            <MdOutlineMenu className='text-3xl' onClick={toggleMenu} />
          </div>
        </div>
        {menuOpen && (
    <>
      {/* Backdrop to cover content and close the menu when clicked */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-30 z-40"
        onClick={() => setMenuOpen(false)}  // Clicking the backdrop will close the menu
      ></div>
  
      {/* Menu */}
      <div 
        className="fixed right-0 top-0 h-50 w-80 bg-white text-black p-4 z-50 lg:hidden" // Position the menu on the right
      >
        {/* Close Button */}
        <div className="flex items-center gap-2 text-xs mt-4">
          <Avatar>
            <AvatarImage src="https://www.phanmemninja.com/wp-content/uploads/2023/06/avatar-facebook-nam-vo-danh.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="Student font-bold flex flex-col">
            <div className="flex items-center">
              <span className="text-black font-bold">Kaaydee</span>
              <FaChevronDown className="ml-2 text-black font-bold" />
            </div>
            <ul className="text-xs font-thin text-black">
              <li>Student</li>
            </ul>
          </div>
        </div>
        <button 
          className="absolute top-4 right-4 text-black" 
          onClick={() => setMenuOpen(false)}  // Close button to hide the menu
        >
          X
        </button>
  
        <ul className="flex flex-col gap-4 text-sm font-semibold mt-8">
          <div onClick={()=>setMenuOpen(false)}><ButtonLink href="/">Trang chủ</ButtonLink></div>
          <li className="navbarLi" >In tài liệu</li>
          <li className="navbarLi">Mua trang in</li>
          <div onClick={() => setMenuOpen(false)}>
          <ButtonLink href="/Lichsu">
               Lịch sử in
          </ButtonLink>
  </div>
        </ul>
  
      </div>
    </>
  )}
  
  
      </div>
    </nav>
    );
}
