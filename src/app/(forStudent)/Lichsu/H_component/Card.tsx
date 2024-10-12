import React from 'react';

interface DetailCardProps {
  item: IBlog; // IBlog định nghĩa cấu trúc của blog
  onClose: () => void; // Hàm để đóng card chi tiết
}

const DetailCard: React.FC<DetailCardProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        <p className="text-gray-600">Thời gian: {item.time}</p>
        <p className="text-gray-600">Ngày tạo: {item.date}</p>
        <p className='text-gray-600'>Vị trí: H6-M1</p>
        <button 
          onClick={onClose} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow-md"
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
