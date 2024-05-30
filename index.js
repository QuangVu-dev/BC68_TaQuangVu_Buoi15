// BÀI 1 - QUẢN LÝ SINH VIÊN
// Sơ đồ 3 khối
/**
 * Đầu vào: điểm chuẩn, điểm khu vực, điểm đối tượng, điểm từng môn
 *
 * Các bước xử lí:
 * => thí sinh trúng tuyển: diemTongKet >= diemChuan && diemMonThu1, diemMonThu2, diemMonThu3 != 0
 * diemTong = (diemMonThu1 + diemMonThu2 + diemMonThu3) + diemUuTien;
 * diemUuTien = diemKhuVuc + diemDoiTuong
 *
 * Đầu ra: thí sinh đậu hay rớt và tổng số điểm đạt được
 *
 */
function diemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
  }
}
function diemDoiTuong(doiTuong) {
  switch (doiTuong) {
    case 1:
      return 2.5;
    case 2:
      return 1.5;
    case 3:
      return 1;
  }
}
document.getElementById("btnKetQua").onclick = function () {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let khuVuc = document.getElementById("diemKhuVuc").value * 1;
  let doiTuong = document.getElementById("diemDoiTuong").value * 1;
  let diemMonThu1 = document.getElementById("diemMonThu1").value * 1;
  let diemMonThu2 = document.getElementById("diemMonThu2").value * 1;
  let diemMonThu3 = document.getElementById("diemMonThu3").value * 1;
  let diemUuTien = khuVuc + doiTuong;
  let tongDiem = diemMonThu1 + diemMonThu2 + diemMonThu3 + diemUuTien;

  if (
    tongDiem >= diemChuan &&
    diemMonThu1 > 0 &&
    diemMonThu2 > 0 &&
    diemMonThu3 > 0
  ) {
    document.querySelector(".ketQua").innerHTML =
      "👉 Thí sinh đã đậu. Tổng điểm: " + tongDiem;
  } else if (
    (tongDiem >= diemChuan && diemMonThu1 <= 0) ||
    diemMonThu2 <= 0 ||
    diemMonThu3 <= 0
  ) {
    document.querySelector(".ketQua").innerHTML =
      "👉 Thí sinh đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else {
    document.querySelector(".ketQua").innerHTML =
      "👉 Thí sinh đã rớt. Tổng điểm: " + tongDiem;
  }
};

// Bài tập 2: Tính tiền điện
// Sơ đồ 3 khối
/**
 * Đầu vào: họ tên người dùng, số kw
 *
 * Các bước xử lí:
 * => 50kw đầu = soKw * 500d/kw
 * => 50kw kế = 50 * 500d/kw + (soKw-50)*650
 * => 100kw kế = 50 * 500 d/kw + 50 * 650d/kw + (soKw-100)*850
 * => 150kw kế = 50 * 500 d/kw + 50 * 650d/kw + 100 * 850 + (soKw-200)*1100
 * => còn lại = 50 * 500 d/kw + 50 * 650d/kw + 100 * 850 + 150 * 1100 + (soKw-350)*1300
 *
 * Đầu ra: tiền phải trả
 *
 */

const tu50KwDau = 500;
const tu50kwKe = 650;
const tu100KwKe = 850;
const tu150KwKe = 1100;
const tukwConLai = 1300;

document.querySelector("#btnTinhTienDien").onclick = function () {
  let nhapHoTen = document.getElementById("nhapHoTen").value;
  let soKw = Number(document.getElementById("soKw").value);
  let tongTien = "";
  if (soKw == "") {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  }
  if (soKw <= 50) {
    tongTien = tu50KwDau * soKw;
  } else if (50 < soKw && soKw <= 100) {
    tongTien = 50 * tu50KwDau + (soKw - 50) * tu50kwKe;
  } else if (100 < soKw && soKw <= 200) {
    tongTien = 50 * tu50KwDau + 50 * tu50kwKe + (soKw - 100) * tu100KwKe;
  } else if (200 < soKw && soKw <= 350) {
    tongTien =
      50 * tu50KwDau +
      50 * tu50kwKe +
      100 * tu100KwKe +
      (soKw - 200) * tu150KwKe;
  } else {
    tongTien =
      50 * tu50KwDau +
      50 * tu50kwKe +
      100 * tu100KwKe +
      150 * tu150KwKe +
      (soKw - 350) * tukwConLai;
  }
  document.getElementById("ketQuaTinhTienDien").innerHTML =
    "👉 Họ tên: " +
    nhapHoTen +
    "; Tiền điện: " +
    tongTien.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

// Bài tập 3: Tính thuế thu nhập cá nhân
// Sơ đồ 3 khối
/**
 * Đầu vào: họ tên, tổng thu nhập năm, số người phụ thuộc
 *
 * Các bước xử lí:
 * => thu nhập chịu thuế = tổng thu nhập năm - 4tr -số người phụ thuộc * 1.6tr
 * => thuế thu nhập cá nhân = thu nhập chịu thuế * thuế xuất tương ứng
 *
 *
 * Đầu ra: thuế thu nhập cá nhân
 *
 */

const thueXuatDen60 = 0.05;
const thueXuatTren60Den120 = 0.1;
const thueXuatTren120Den210 = 0.15;
const thueXuatTren210Den384 = 0.2;
const thueXuatTren384Den624 = 0.25;
const thueXuatTren624Den960 = 0.3;
const thueXuatTren960 = 0.35;

document.getElementById("btnTinhTienThueCaNhan").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let tongThuNhapNam = document.getElementById("tongThuNhapNam").value;
  let soNguoiPhuThuoc = Number(
    document.getElementById("soNguoiPhuThuoc").value
  );
  let thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  let tienThueThuNhapCaNhan = "";
  if (tongThuNhapNam == "") {
    alert("Số tiền thu nhập không hợp lệ! Vui lòng nhập lại");
  }
  if (tongThuNhapNam == "") {
    tienThueThuNhapCaNhan = 0;
  } else if (thuNhapChiuThue <= 60000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * thueXuatDen60;
  } else if (60000000 < thuNhapChiuThue && thuNhapChiuThue <= 120000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * thueXuatTren60Den120;
  } else if (120000000 < thuNhapChiuThue && thuNhapChiuThue <= 210000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * thueXuatTren120Den210;
  } else if (210000000 < thuNhapChiuThue && thuNhapChiuThue <= 384000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * thueXuatTren210Den384;
  } else if (384000000 < thuNhapChiuThue && thuNhapChiuThue <= 624000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * thueXuatTren384Den624;
  } else if (624000000 < thuNhapChiuThue && thuNhapChiuThue <= 960000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * thueXuatTren624Den960;
  } else {
    tienThueThuNhapCaNhan = thuNhapChiuThue * thueXuatTren960;
  }
  document.getElementById("ketQuaTienThue").innerHTML =
    "👉 Họ tên: " +
    hoTen +
    "; Tiền thuế thu nhập cá nhân: " +
    tienThueThuNhapCaNhan.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

// Bài tập 4: Tính tiền cáp
// Sơ đồ 3 khối
/**
 * Đầu vào: loại khách hàng, mã khách hàng, số kênh cao cấp, số kết nối (đối với doanh nghiệp)
 *
 * Các bước xử lí:
 * => Hoá đơn tiền cáp đối với nhà dân = phí xử lý hoá đơn + phí dịch cở bản + số kênh * tiền kênh cao cấp
 * => Hoá đơn tiền cáp đối với doanh nghiệp = phí xử lý hoá đơn + phí dịch cở bản + số kênh * tiền kênh cao cấp + số kết nối * phí dịch vụ cơ bản
 *
 *
 * Đầu ra: hoá đơn khách hàng
 *
 */

const phiXuLyHoaDonNhaDan = 4.5;
const phiDichVuCoBanNhaDan = 20.5;
const phi1KenhCaoCapNhaDan = 7.5;
const phiXuLyHoaDonDoanhNghiep = 15;
const phi1KenhCaoCapDoanhNghiep = 50;
const phiDichVuCoBan10KetNoiDauDoanhNghiep = 75;

document.getElementById("loaiKhachHang").onchange = function () {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKetNoi = document.getElementById("soKetNoi");

  if (loaiKhachHang === "Doanh Nghiệp") {
    soKetNoi.disabled = false;
    soKetNoi.style.display = "block";
  } else {
    soKetNoi.disabled = true;
    soKetNoi.style.display = "none";
    soKetNoi.value = "";
  }
};
function btnTinhTienCap() {
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  let phiThueKenhCaoCapDoanhNghiep = phi1KenhCaoCapDoanhNghiep * soKenhCaoCap;
  let phiThueKenhCaoCapNhaDan = phi1KenhCaoCapNhaDan * soKenhCaoCap;
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let maKhachHang = document.getElementById("maKhachHang").value;
  let tinhHoaDon = "";
  if (loaiKhachHang == "") {
    alert("Vui lòng chọn loại khách hàng");
  }
  if (loaiKhachHang === "Doanh Nghiệp" && soKetNoi > 10) {
    tinhHoaDon =
      phiXuLyHoaDonDoanhNghiep +
      phiDichVuCoBan10KetNoiDauDoanhNghiep +
      (soKetNoi - 10) * 5 +
      phiThueKenhCaoCapDoanhNghiep;
  } else if (loaiKhachHang === "Doanh Nghiệp" && soKetNoi < 10) {
    tinhHoaDon =
      phiXuLyHoaDonDoanhNghiep +
      phiDichVuCoBan10KetNoiDauDoanhNghiep +
      phiThueKenhCaoCapDoanhNghiep;
  } else if (loaiKhachHang === "Nhà Dân") {
    tinhHoaDon =
      phiXuLyHoaDonNhaDan + phiDichVuCoBanNhaDan + phiThueKenhCaoCapNhaDan;
  } else {
    tinhHoaDon = 0;
  }
  console.log(tinhHoaDon);
  document.getElementById("ketQuaTinhTienCap").innerHTML =
    "👉 Mã khách hàng: " +
    maKhachHang +
    "; Tiền cáp: " +
    tinhHoaDon.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
}
