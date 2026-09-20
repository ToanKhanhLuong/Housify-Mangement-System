# Housify Management System

Housify Management System là hệ thống quản lý nhà trọ dành cho chủ trọ, quản lý và người thuê.  
Hệ thống hỗ trợ quản lý nhiều tòa nhà, phòng trọ, người thuê, hợp đồng, tài sản, điện nước, hóa đơn và các yêu cầu sửa chữa.

Mục tiêu của dự án là số hóa quy trình quản lý nhà trọ, giảm thao tác thủ công và giúp thông tin được quản lý tập trung, chính xác và dễ tra cứu.

---

## Project Objectives

- Quản lý nhiều tòa nhà và phòng trọ trên cùng một hệ thống.
- Quản lý thông tin người thuê.
- Theo dõi tình trạng và số lượng người ở trong từng phòng.
- Quản lý hợp đồng thuê phòng.
- Quản lý tài sản và thiết bị trong phòng.
- Theo dõi chỉ số điện, nước hàng tháng.
- Tự động tính toán hóa đơn.
- Theo dõi trạng thái thanh toán.
- Quản lý yêu cầu sửa chữa và bảo trì.
- Cung cấp dashboard thống kê cho chủ trọ và quản lý.

---

## System Roles

Hệ thống gồm 3 vai trò chính:

### Admin

Admin là người có quyền cao nhất trong hệ thống.

- Quản lý toàn bộ tòa nhà.
- Quản lý tài khoản Manager.
- Phân công Manager quản lý từng tòa nhà.
- Quản lý phòng.
- Quản lý người thuê.
- Quản lý hợp đồng.
- Quản lý tài sản.
- Quản lý hóa đơn.
- Theo dõi doanh thu và báo cáo.

### Manager

Manager chịu trách nhiệm quản lý một hoặc nhiều tòa nhà được Admin phân công.

- Quản lý phòng thuộc tòa nhà phụ trách.
- Quản lý người thuê.
- Check-in / Check-out người thuê.
- Quản lý hợp đồng.
- Ghi nhận chỉ số điện và nước.
- Quản lý tài sản trong phòng.
- Quản lý hóa đơn.
- Xử lý yêu cầu sửa chữa.

### Tenant

Tenant là người đang thuê phòng.

- Xem thông tin phòng.
- Xem hợp đồng thuê.
- Xem hóa đơn.
- Theo dõi điện nước.
- Cập nhật thông tin cá nhân.
- Gửi yêu cầu sửa chữa.
- Xem thông báo từ ban quản lý.

---

##  Main Features

### Authentication & Authorization
- Login / Logout
- JWT Authentication
- Role-based Authorization
- Admin / Manager / Tenant permissions

### Building Management
- Quản lý tòa nhà
- Quản lý tầng
- Phân công Manager theo tòa nhà

### Room Management
- Quản lý phòng
- Trạng thái phòng
- Giá thuê phòng
- Quy định số người tối đa
- Theo dõi số người hiện tại

### Tenant Management
- Quản lý thông tin người thuê
- Đăng ký người thuê
- Check-in
- Check-out
- Chuyển phòng

### Contract Management
- Tạo hợp đồng
- Gia hạn hợp đồng
- Chấm dứt hợp đồng
- Theo dõi trạng thái hợp đồng

### Asset Management
- Quản lý tài sản trong từng phòng
- Theo dõi số lượng
- Theo dõi tình trạng thiết bị
- Ghi nhận tài sản hư hỏng

### Electricity & Water Management
- Ghi nhận chỉ số điện
- Ghi nhận chỉ số nước
- Tính lượng tiêu thụ
- Tính chi phí điện nước

### Invoice Management
- Tạo hóa đơn hàng tháng
- Tiền phòng
- Tiền điện
- Tiền nước
- Phí dịch vụ
- Theo dõi trạng thái thanh toán

### Maintenance Management
- Tenant gửi yêu cầu sửa chữa
- Manager tiếp nhận yêu cầu
- Theo dõi trạng thái xử lý

### Dashboard & Reports
- Tổng số phòng
- Phòng đang sử dụng
- Phòng còn trống
- Tổng số người thuê
- Doanh thu theo tháng
- Hóa đơn chưa thanh toán

---

## Technologies

### Frontend

- ReactJS
- JavaScript
- React Router
- Axios
- Ant Design / Bootstrap

### Backend

- Node.js
- Express.js
- RESTful API
- JWT Authentication

### Database

- MongoDB
- Mongoose

### Development Tools

- Git
- GitHub
- Postman
- VS Code
- npm

---

## 📁 Project Structure

```text
Housify-Management-System/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── providers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── sockets/
│   │   ├── utils/
│   │   ├── validations/
│   │   └── server.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.html
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md
