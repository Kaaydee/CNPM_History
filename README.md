# expressjs-mvc

## Cách chạy chương trình

-   Phải cài đặt trước và kết nối được mysql, nodejs, npm
-   tạo 1 database trong mysql, bỏ các username, password,.. trong file .env
-   `npm i`
-   `node ./bin/www`

## Cấu trúc folder

Tuân theo cấu trúc Model - View - Controller, trong đó View thuộc về phía frontend, backend chỉ quan tâm model và controller

### ./bin/www và app.js

app.js là điểm bắt đầu của chương trình, dùng để config các middlewares và định nghĩa routes. ./bin/www được dùng để setup một HTTP server. File này được tạo ra bởi `express-generator`

### Routes

Định nghĩa các endpoints cho chương trình và map các endpoints với các controllers.

### Controllers

Xử lý Request được gửi tới, bao gồm nhưng không giới hạn việc validate Request và gọi các service liên quan. Đây là một chương trình monolith nên gọi service nào cũng được.

### Services

Xử lý các bussiness logic, lớp này là không bắt buộc trong mô hình MVC, tuy nhiên khi chương trình ngày càng mở rộng thì việc tách lớp là cần thiết để kiểm soát code.

### Models

Định nghĩa kiểu dữ liệu, và được dùng để tương tác với databases.

### Middlewares

Là các hàm được thực thi trong 1 vòng lặp request - response, sử dụng phổ biến ở lớp application (app.js), lớp routes(authenticate and authorize,...), lớp controllers (validate,.. tuy nhiên trong trường hợp này ta dùng models để validate).

## API

### GET
- **URL**: `http://localhost:3000/logs/1`

### POST
- **URL**: `http://localhost:3000/logs`
- **Body**:
  ```json
  {
    "studentID": 7,
    "printerID": 107,
    "filename": "report_2024.pdf",
    "numberOfPages": 10
  }
### Chạy code này trong Mysql Workbench để tạo bảng
```code
CREATE TABLE print_log (
    studentID INT NOT NULL,
    printerID INT NOT NULL,
    filename VARCHAR(255),
    startPrintTime TIMESTAMP,
    endPrintTime TIMESTAMP,
    numberOfPages INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Added for record creation timestamp
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  -- Added for record update timestamp
    PRIMARY KEY (studentID, printerID)  -- Composite primary key
);

INSERT INTO print_log (studentID, printerID, filename, startPrintTime, endPrintTime, numberOfPages) VALUES
(1, 101, 'report_2024.pdf', '2024-10-01 10:30:00', '2024-10-01 10:40:00', 10),
(2, 102, 'thesis_final.docx', '2024-10-02 11:15:00', '2024-10-02 11:25:00', 15),
(3, 103, 'project_summary.pptx', '2024-10-03 14:00:00', '2024-10-03 14:10:00', 12),
(4, 104, 'lab_report.pdf', '2024-10-04 09:45:00', '2024-10-04 09:50:00', 5),
(5, 105, 'assignment.doc', '2024-10-05 16:20:00', '2024-10-05 16:30:00', 8);

SELECT * FROM print_log;