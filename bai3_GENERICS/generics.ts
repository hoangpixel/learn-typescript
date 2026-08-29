// 1. Ví dụ về Hàm dùng Generics:
// Chữ <T> đứng sau tên hàm báo cho TS biết: "Chuẩn bị nhận 1 kiểu dữ liệu tự do nha"
const layPhanTuDauTien = <T>(mang: T[]): T => {
    return mang[0];
}

// Lúc xài, sếp truyền kiểu vào trong cặp ngoặc <>
let chuCai = layPhanTuDauTien<string>(["A", "B", "C"]);
let chuSo = layPhanTuDauTien<number>([1, 2, 3]);

// 2. Ví dụ về Interface dùng Generics (Dùng cực nhiều khi hứng API):
interface LopHoc<T> {
    maLop: string;
    danhSachThanhVien: T[]; // T[] nghĩa là một mảng chứa các phần tử mang kiểu T
}

// Giả sử sếp có interface SinhVien và interface GiaoVien
// Sếp có thể tái sử dụng khuôn LopHoc cho cả 2:
// let lopIT: LopHoc<SinhVien> = ...
// let danhSachGV: LopHoc<GiaoVien> = ...