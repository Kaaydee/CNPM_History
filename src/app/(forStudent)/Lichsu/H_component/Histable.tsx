// import React, { useState } from 'react';
// import Select from "@/app/(forStudent)/Lichsu/H_component/select";

// interface PrintHis {
//   blog: IBlog[]; // IBlog định nghĩa cấu trúc của blog
// }

// const PrintHistory = (props: PrintHis) => {
//   const { blog } = props;
//   const [visibleCount, setVisibleCount] = useState(10);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [filteredBlog, setFilteredBlog] = useState(blog); // Lưu danh sách được lọc

//   // Hàm xử lý khi chọn "Tất cả" hoặc "Chọn ngày"
//   const handleFilter = (filteredData: IBlog[]) => {
//     setFilteredBlog(filteredData); // Cập nhật danh sách sau khi lọc
//   };

//   const handleToggleShowMore = () => {
//     if (isExpanded) {
//       setVisibleCount(10); // Thu gọn về 10 hàng
//     } else {
//       setVisibleCount((prevCount) => Math.min(prevCount + 10, filteredBlog.length)); // Mở rộng thêm 10 hàng
//     }
//     setIsExpanded(!isExpanded); // Thay đổi trạng thái mở/thu gọn
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4">
//       <h2 className="font-semibold italic text-lg mb-2">Lịch sử in</h2>
//       <div className="w-full border border-black border-separate border-spacing-y-2 shadow-md"> 
//         <div className="h-14 w-full bg-gray-300 border border-black p-2 shadow-md">
//           <ul className="w-full">
//             {/* Truyền blog xuống Select và nhận kết quả lọc qua handleFilter */}
//             <Select data={blog} onFilter={handleFilter} />
//           </ul>
//         </div>
//         <div className="overflow-x-auto"> 
//           {filteredBlog.length === 0 ? ( // Kiểm tra nếu không có dữ liệu sau khi lọc
//             <div className="p-4 text-center text-red-600">
//               Không có tài liệu
//             </div>
//           ) : (
//             <table className="table-auto w-full bg-white border border-black border-separate border-spacing-y-4 shadow-md" style={{ paddingLeft: '3rem', paddingRight: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
//               <thead className="bg-gray-300 hidden md:table-header-group">
//                 <tr>
//                   <th className="border-black p-2 md:p-4 text-left">Thời gian</th>
//                   <th className="border-black p-2 md:p-4 text-left">Tên tệp</th>
//                   <th className="border-black  md:pl-16 text-left">Vị trí</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredBlog.slice(0, visibleCount).map((item) => (
//                   <tr key={item.id} className="flex flex-col md:table-row mb-2 md:mb-0 shadow-lg rounded-lg ItemHover" style={{ paddingLeft: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//                     <td className="w-40 rounded-l-lg border-black md:p-4 text-left">{item.time}</td>
//                     <td className="truncate w-auto border-black md:p-4 text-left max-w-xs" title={item.title}>{item.title}</td>
//                     <td className="w-40 pr-8 rounded-r-lg border-black md:p-4 text-right">{item.date}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//       {filteredBlog.length > 0 && ( // Chỉ hiển thị nút nếu có dữ liệu
//         <div className="flex justify-end mt-4">
//           <button 
//             onClick={handleToggleShowMore} 
//             className="bg-blue-500 text-white px-4 py-2 rounded shadow-md"
//           >
//             {isExpanded ? 'Thu gọn' : 'Hiển thị thêm'}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
// export default PrintHistory;
import React, { useState } from 'react';
import Select from "@/app/(forStudent)/Lichsu/H_component/select";
import { IoIosSearch } from "react-icons/io";
import DetailCard from './Card'; // Import component DetailCard

interface PrintHis {
  blog: IBlog[]; // IBlog định nghĩa cấu trúc của blog
}


const PrintHistory = (props: PrintHis) => {
  const { blog } = props;
  const [visibleCount, setVisibleCount] = useState(9);
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredBlog, setFilteredBlog] = useState(blog); // Lưu danh sách được lọc
  const [selectedItem, setSelectedItem] = useState<IBlog | null>(null); // Lưu item được chọn để hiển thị chi tiết
  
  //set format day
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2); // Lấy 2 chữ số cuối của năm
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0, thêm 1 và đảm bảo có 2 chữ số
    const day = date.getDate().toString().padStart(2, '0'); // Đảm bảo có 2 chữ số
  
    return `${year}-${month}-${day}`; // Trả về định dạng YY/mm/dd
  };
  // Hàm xử lý khi chọn "Tất cả" hoặc "Chọn ngày"
  const handleFilter = (filteredData: IBlog[]) => {
    setFilteredBlog(filteredData); // Cập nhật danh sách sau khi lọc
  };

  const handleToggleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(9); // Thu gọn về 9 hàng
      setIsExpanded(false); // Đặt trạng thái về không mở rộng
    } else {
      const newVisibleCount = Math.min(visibleCount + 9, filteredBlog.length);
      setVisibleCount(newVisibleCount); // Mở rộng thêm 9 hàng

      // Kiểm tra nếu đã hiển thị hết tất cả các mục
      if (newVisibleCount >= filteredBlog.length) {
        setIsExpanded(true); // Đặt trạng thái là mở rộng
      }
    }
  };

  const handleItemClick = (item: IBlog) => {
    setSelectedItem(item); // Cập nhật item được chọn
  };

  const handleCloseDetail = () => {
    setSelectedItem(null); // Đóng card chi tiết
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h2 className="font-semibold italic text-lg mb-2">Lịch sử in</h2>
      <div className="w-full border border-black border-separate border-spacing-y-2 shadow-md"> 
        <div className="h-14 w-full bg-gray-300 border border-black p-2 shadow-md">
          <ul className="w-full flex -space-x-6">
            <IoIosSearch className='pl-2 w-10 h-10'/>
            {/* Truyền blog xuống Select và nhận kết quả lọc qua handleFilter */}
            <Select data={blog} onFilter={handleFilter} />
          </ul>
        </div>
        <div className="overflow-x-auto overflow-y-auto"> 
          {filteredBlog.length === 0 ? ( // Kiểm tra nếu không có dữ liệu sau khi lọc
            <div className="p-4 text-center text-red-600">
              Không có tài liệu
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
              {filteredBlog.slice(0, visibleCount).map((item)=> (
                <div 
                  key={item.studentID} 
                  className=" border-gray-300 rounded-lg p-4 shadow-md cursor-pointer bg-white navbarLi w-auto h-full"
                  onClick={() => handleItemClick(item)}
                >
                  <h3 className="font-semibold text-lg mb-2 text-blue-600">{item.startPrintDate}</h3>
                  <p className="text-black font-bold truncate w-auto max-w-xs" title={item.filename}>{item.filename}</p>
                  <p className="text-gray-600">Thời gian: {item.startPrintTime}</p>
                  <p className="text-gray-600">Vị trí: H6-M{item.printerID}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {filteredBlog.length > 0 && ( // Chỉ hiển thị nút nếu có dữ liệu
        <div className="flex justify-end mt-4">
          <button 
            onClick={handleToggleShowMore} 
            className="bg-blue-500 text-white px-4 py-2 rounded shadow-md"
          >
            {isExpanded ? 'Thu gọn' : 'Hiển thị thêm'}
          </button>
        </div>
      )}
      {selectedItem && (
        <DetailCard item={selectedItem} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default PrintHistory;
