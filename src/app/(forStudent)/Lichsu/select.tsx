import { DatePickerDemo } from '@/app/(forStudent)/Lichsu/setDate';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export default function Select() {
  // Tạo trạng thái để điều khiển dropdown và lưu lựa chọn hiện tại
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Tất cả'); // Trạng thái lưu lựa chọn

  // Hàm xử lý khi người dùng click vào menu
  const handleClick = () => {
    setIsActive(!isActive);
  };

  // Hàm xử lý khi người dùng chọn một mục
  const handleSelect = (option) => {
    setSelectedOption(option); // Cập nhật lựa chọn
    setIsActive(false); // Đóng dropdown
  };

  return (
    <div className="flex items-center"> {/* Flex container để căn ngang */}
      {/* Nút để bật/tắt dropdown */}
      <div 
        className='navbarLi h-10 pl-8 p-2 text-center ml-10 w-36 bg-gray-50 rounded-lg cursor-pointer flex items-center'
        onClick={handleClick}
      >
        <div className="flex items-center">
          <span className="text-black">{selectedOption === 'Chọn ngày' ? 'Chọn ngày' : 'Tất cả'}</span> {/* Hiển thị lựa chọn hiện tại */}
          <FaChevronDown className="ml-2 text-black font-bold" />
        </div>
      </div>

      {/* Dropdown sẽ hiện khi isActive là true */}
      {isActive && (
        <div className="absolute mt-2 w-80 bg-white shadow-lg rounded-lg">
          <ul className="list-none p-2">
            {/* Lựa chọn Tất cả */}
            <li 
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect('Tất cả')} // Cập nhật lựa chọn khi click
            >
              Tất cả
            </li>

            {/* Lựa chọn Chọn ngày */}
            <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect('Chọn ngày')}>
              Chọn ngày
            </li>
          </ul>
        </div>
      )}

      {/* Hiển thị component DatePickerDemo nếu chọn "Chọn ngày" */}
      {selectedOption === 'Chọn ngày' && (
        <div className="ml-4"> {/* Căn component cách dropdown một khoảng */}
          <DatePickerDemo /> {/* Hiển thị component DatePickerDemo */}
        </div>
      )}
    </div>
  );
}
