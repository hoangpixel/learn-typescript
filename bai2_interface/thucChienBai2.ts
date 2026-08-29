// Yêu cầu 1: 
// Sếp hãy thiết kế một 'interface' tên là 'SanPham' (Ví dụ: Trà sữa, Cafe, Card đồ họa...)
// Bao gồm các thuộc tính sau:
// - id (số)
// - tenSanPham (chuỗi)
// - giaTien (số)
// - moTa (chuỗi - NHƯNG KHÔNG BẮT BUỘC CÓ)
// - conHang (đúng/sai)

// Code interface của sếp ở đây:
interface SanPham {
    id: number;
    tenSanPham: string;
    giaTien: number;
    moTa?: string;
    conHang: boolean;
}


// Yêu cầu 2:
// Hãy tạo một biến tên là 'sanPham1' và ốp cái khuôn 'SanPham' vào nó. 
// Gán giá trị hợp lệ (có đầy đủ mô tả) cho nó.

// Code tạo biến của sếp ở đây:
let sanPham1: SanPham = {
    id: 1,
    tenSanPham: "Cà phê đen",
    giaTien: 15000,
    moTa: "Cực kì đắng",
    conHang: true
};

// Yêu cầu 3:
// Hãy tạo một biến tên là 'sanPham2' và ốp cái khuôn 'SanPham' vào nó.
// Lần này, cố tình KHÔNG truyền thuộc tính 'moTa' vào xem nó có chạy hợp lệ không nhé.

// Code tạo biến của sếp ở đây:
let sanPham2: SanPham = {
    id: 2,
    tenSanPham: "Cà phê sữa",
    giaTien: 20000,
    conHang: true
};