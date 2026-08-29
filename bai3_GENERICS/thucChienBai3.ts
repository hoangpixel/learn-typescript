// Sếp cứ giữ lại cái interface SanPham này để xài nha
interface SanPham {
    id: number;
    tenSanPham: string;
    giaTien: number;
    moTa?: string;
    conHang: boolean;
}

// Yêu cầu 1: 
// Sếp hãy tạo một interface tên là 'ApiResponse<T>'.
// Bên trong nó có 3 thuộc tính:
// - statusCode (số)
// - message (chuỗi)
// - data (chính là cái kiểu T)

// Code interface của sếp ở đây:
interface ApiResponse<T> {
    statusCode: number;
    message: string;
    data: T
}


// Yêu cầu 2:
// Hãy tạo một biến tên là 'ketQuaAPI'.
// Ốp kiểu 'ApiResponse<SanPham>' cho biến này.
// Sau đó gán cho nó một object hợp lệ (statusCode là 200, message là "Lấy data thành công", 
// và phần data chính là một object Cà phê hay Trà sữa giống Bài 2).

// Code tạo biến của sếp ở đây:
let ketQuaAPI: ApiResponse<SanPham> = {
    statusCode: 200,
    message: "Lấy data thành công",
    data: {id: 1, tenSanPham: "Trà Sữa", giaTien: 25000, moTa: "Đang giảm giá", conHang: true}
};


// Mai mốt sếp gọi API bằng Axios, code của sếp nó sẽ mượt mà như thế này nè:
const response = await axios.get<ApiResponse<SanPham>>('http://localhost:8080/api/san-pham/1');
console.log(response.data.data.tenSanPham); // Bấm dấu chấm một phát là VS Code nó gợi ý ra chữ tenSanPham luôn, bao sướng!