// 1. Cách khai báo Interface:
// (Thường viết hoa chữ cái đầu tiên cho giống class bên Java)

interface SinhVien {
    maSV: number;
    tenSV: string;
    diemTB: number;
}

// 2. Ốp cái khuôn vào biến:

let hoang: SinhVien = {
    maSV: 3123410114,
    tenSV: "Phạm Minh Hoàng",
    diemTB: 8.5
};
// Nếu sếp code vầy là báo lỗi ngay:
// let loi: SinhVien = { maSV: 123, tenSV: "Nguyễn A" }; // LỖI: Thiếu diemTB!

// 3. Thuộc tính không bắt buộc (Optional Properties):
// Có những thông tin có cũng được, không có cũng không sao. 
// Sếp chỉ cần thêm dấu ? đằng trước dấu hai chấm :

interface NhanVien {
    id: number;
    ten: string;
    soDienThoai?: string;   // Có "?", tức là nhập cũng được, bỏ trống cũng chả sao
}