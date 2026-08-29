// // 1. Quản lý thông tin sinh viên
// let hoTen = "Phạm Minh Hoàng"; 
// let maSinhVien = 3123410114;
// let daTotNghiep = false;

// // 2. Danh sách thiết bị phần cứng
// let cauHinhPC = ["Core i5", "RTX 3060", "PTM7950"];

// // 3. Khúc này đang bị lỗi gán bậy bạ, sếp hãy "chấn chỉnh" lại giúp tui:
// hoTen = 2026; // Tên sao lại là số? Sửa lại cho đúng kiểu!
// daTotNghiep = "Đã ra trường"; // Cập nhật trạng thái nhưng sai kiểu dữ liệu!
// cauHinhPC.push(32); // RAM 32GB nhưng push kiểu số vào mảng string là dở rồi!


// 1. Khai báo kiểu chặt chẽ 100%
let hoTen: string = "Phạm Minh Hoàng"; 
let maSinhVien: number = 3123410114;
let daTotNghiep: boolean = false;

// 2. Mảng này chỉ được phép chứa chuỗi
let cauHinhPC: string[] = ["Core i5", "RTX 3060", "PTM7950"];

// 3. Chấn chỉnh bằng cách sửa GIÁ TRỊ truyền vào:
hoTen = "Hoàng 2026"; // Ép nó thành chuỗi (string)
daTotNghiep = true; // Sếp làm đúng rồi!
cauHinhPC.push("32GB"); // Đổi số 32 thành chuỗi "32GB" để mảng string chịu nhận!