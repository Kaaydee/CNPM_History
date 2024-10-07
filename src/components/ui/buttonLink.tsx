'use client'; // Đánh dấu đây là Client Component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname từ next/navigation

interface ButtonLinkProps {
  href: string; // Định nghĩa kiểu cho href
  children: React.ReactNode; // Định nghĩa kiểu cho children
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  const pathname = usePathname(); // Lấy pathname hiện tại
  const isActive = pathname === href || pathname.startsWith(`${href}/`); // Kiểm tra xem đường dẫn hiện tại có khớp hoàn toàn không hoặc là đường dẫn con

  return (
    <Link href={href} className={isActive ? 'navbarLiactive' : 'navbarLi'}>
      {children} 
    </Link>
  );
};

export default ButtonLink;
