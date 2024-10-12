import { DatePickerDemo } from '@/app/(forStudent)/Lichsu/H_component/setDate';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
interface IBlog {
  id: number;
  title: string;
  date: string;
  time: string;
}

interface SelectProps {
  data: IBlog[]; // Nhận dữ liệu từ component cha
  onFilter: (filteredData: IBlog[]) => void; // Callback để trả kết quả lọc về cha
}

export default function Select({ data, onFilter }: SelectProps) {
  const [isActive, setIsActive] = useState(false); // Điều khiển dropdown
  const [selectedOption, setSelectedOption] = useState('Tất cả'); // Lưu lựa chọn
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Lưu trữ ngày đã chọn

  // Xử lý khi click vào menu dropdown
  const handleClick = () => {
    setIsActive(!isActive);
  };
  
  // Xử lý khi người dùng chọn một mục
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsActive(false);
    if (option === 'Tất cả') {
      setSelectedDate(null);
      onFilter(data); 
    } else if(option==="Chọn ngày"){
      setSelectedDate(new Date());
      const filteredData = data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.toDateString() === (new Date()).toDateString(); // Lọc dữ liệu theo ngày hiện tại
      });
      onFilter(filteredData);
    }
  };

  // Callback để nhận ngày từ DatePickerDemo
  const handleDateChange = (date: Date) => {
    setSelectedDate(date); // Cập nhật trạng thái với ngày đã chọn

    // Lọc dữ liệu theo ngày đã chọn và trả về cha
    const filteredData = data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate.toDateString() === date.toDateString();
    });
    onFilter(filteredData); // Gọi callback với dữ liệu đã lọc
  };

  return (
    <div className="flex items-center -space-x-4"> 
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
              className="p-2 navbarLi cursor-pointer"
              onClick={() => handleSelect('Tất cả')}>
              Tất cả
            </li>

            {/* Lựa chọn Chọn ngày */}
            <li className="p-2 navbarLi cursor-pointer" onClick={() => handleSelect('Chọn ngày')}>
              Chọn ngày
            </li>
          </ul>
        </div>
      )}

      {/* Hiển thị component DatePickerDemo nếu chọn "Chọn ngày" */}
      {selectedOption === 'Chọn ngày' && (
        <div className="ml-4"> {/* Căn component cách dropdown một khoảng */}
          <DatePickerDemo  onDateChange={handleDateChange}/> {/* Hiển thị component DatePickerDemo */}
        </div>
      )}
    </div>
  );
}
