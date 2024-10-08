import React, { useState } from 'react';
import Date from "@/app/(forStudent)/Lichsu/setDate";
import Select from "@/app/(forStudent)/Lichsu/select";

interface PrintHis {
  blog: IBlog[];
}

const PrintHistory = (props: PrintHis) => {
  const { blog } = props;
  console.log('check res:', blog);
  
  const [visibleCount, setVisibleCount] = useState(10);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(10); // Thu gọn về 10 hàng
    } else {
      setVisibleCount((prevCount) => Math.min(prevCount + 10, blog.length)); // Mở rộng thêm 10 hàng
    }
    setIsExpanded(!isExpanded); // Thay đổi trạng thái mở/thu gọn
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h2 className="font-semibold italic text-lg mb-2">Lịch sử in</h2>
      <div className="w-full border border-black border-separate border-spacing-y-2 shadow-md"> 
        <div className="h-14 w-full bg-gray-300 border border-black p-2 shadow-md">
          <ul className="w-full"><Select /></ul>
        </div>
        <div className="overflow-x-auto"> 
          {blog.length === 0 ? ( // Kiểm tra nếu blog rỗng
            <div className="p-4 text-center text-red-600">
              Không có tài liệu
            </div>
          ) : (
            <table className="table-auto w-full bg-white border border-black border-separate border-spacing-y-4 shadow-md" style={{ paddingLeft: '3rem', paddingRight: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
              <thead className="bg-gray-300 hidden md:table-header-group">
                <tr>
                  <th className="border-black p-2 md:p-4 text-left">Thời gian</th>
                  <th className="border-black p-2 md:p-4 text-left">Tên tệp</th>
                  <th className="border-black  md:pl-16 text-left">Vị trí</th>
                </tr>
              </thead>
              <tbody>
                {blog.slice(0, visibleCount).map((item) => (
                  <tr key={item.id} className="flex flex-col md:table-row mb-2 md:mb-0 shadow-lg rounded-lg ItemHover" style={{ paddingLeft: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <td className="w-40 rounded-l-lg border-black md:p-4 text-left">{item.time}</td>
                    <td className="truncate w-auto border-black md:p-4 text-left max-w-xs" title={item.title}>{item.title}</td>
                    <td className="w-40 pr-8 rounded-r-lg border-black md:p-4 text-right">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {blog.length > 0 && ( // Chỉ hiển thị nút nếu có dữ liệu
        <div className="flex justify-end mt-4">
          <button 
            onClick={handleToggleShowMore} 
            className="bg-blue-500 text-white px-4 py-2 rounded shadow-md"
          >
            {isExpanded ? 'Thu gọn' : 'Hiển thị thêm'}
          </button>
        </div>
      )}
    </div>
  );
}

export default PrintHistory;
