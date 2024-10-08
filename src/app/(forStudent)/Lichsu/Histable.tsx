import React, { useState } from 'react';
import Date from "@/app/(forStudent)/Lichsu/setDate";

function PrintHistory() {
  const printHistory = [
    { id: 1, time: '12:00PM', fileName: 'CNPM.pdf', location: 'Tòa H1-M1', date: '2024-10-03' },
    { id: 2, time: '07:00AM', fileName: 'Xác xuất thống kê.pdf', location: 'Tòa H6-M1', date: '2024-10-03' },
    { id: 3, time: '14:00PM', fileName: 'Baocaodoan.txt', location: 'Tòa H2-M2', date: '2024-10-03' },
    { id: 4, time: '20:40PM', fileName: 'Cấu trúc dữ liệu và giải thuật.pdf', location: 'Tòa H3-M1', date: '2024-10-03' },
    { id: 5, time: '09:15AM', fileName: 'Đồ án tốt nghiệp.pdf', location: 'Tòa H4-M1', date: '2024-10-03' },
    { id: 6, time: '11:30AM', fileName: 'Hướng dẫn sử dụng.pdf', location: 'Tòa H5-M1', date: '2024-10-03' },
    { id: 7, time: '13:45PM', fileName: 'Báo cáo tháng 10.pdf', location: 'Tòa H2-M1', date: '2024-10-03' },
    { id: 8, time: '16:00PM', fileName: 'Sách giáo khoa.pdf', location: 'Tòa H6-M1', date: '2024-10-03' },
    { id: 9, time: '17:30PM', fileName: 'Tài liệu học tập.pdf', location: 'Tòa H3-M2', date: '2024-10-03' },
    { id: 10, time: '19:00PM', fileName: 'Luận văn.pdf', location: 'Tòa H1-M2', date: '2024-10-03' },
    { id: 11, time: '21:00PM', fileName: 'Giáo trình Vật lý.pdf', location: 'Tòa H4-M2', date: '2024-10-03' },
  ];

  const [visibleCount, setVisibleCount] = useState(10);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(10); // Thu gọn về 10 hàng
    } else {
      setVisibleCount((prevCount) => Math.min(prevCount + 10, printHistory.length)); // Mở rộng thêm 10 hàng
    }
    setIsExpanded(!isExpanded); // Thay đổi trạng thái mở/thu gọn
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h2 className="font-semibold italic text-lg mb-2">Lịch sử in</h2>
      <div className="w-full border border-black border-separate border-spacing-y-2 shadow-md"> 
        <div className="h-14 w-full bg-gray-300 border border-black p-2 shadow-md">
          <ul className="w-full"><Date /></ul>
        </div>
        <div className="overflow-x-auto"> 
          <table className="table-auto w-full bg-white border border-black border-separate border-spacing-y-4 shadow-md" style={{ paddingLeft: '3rem', paddingRight: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <thead className="bg-gray-300 hidden md:table-header-group">
              <tr>
                <th className="border-black p-2 md:p-4 text-left">Thời gian</th>
                <th className="border-black p-2 md:p-4 text-left">Tên tệp</th>
                <th className="border-black  md:pl-16 text-left">Vị trí</th>
              </tr>
            </thead>
            <tbody>
              {printHistory.slice(0, visibleCount).map((item) => (
                <tr key={item.id} className="flex flex-col md:table-row mb-2 md:mb-0 shadow-lg rounded-lg ItemHover" style={{ paddingLeft: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                  <td className=" w-40 rounded-l-lg border-black md:p-4 text-left">{item.time}</td>
                  <td className="w-auto border-black md:p-4 text-left">{item.fileName}</td>
                  <td className="w-40 pr-8 rounded-r-lg border-black md:p-4 text-right">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button 
          onClick={handleToggleShowMore} 
          className="bg-blue-500 text-white px-4 py-2 rounded shadow-md"
        >
          {isExpanded ? 'Thu gọn' : 'Hiển thị thêm'}
        </button>
      </div>
    </div>
  );
}

export default PrintHistory;
