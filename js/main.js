function chonLoaiXe() {
  var uberX = document.getElementById("uberX").checked;
  var uberSUV = document.getElementById("uberSUV").checked;
  var uberBlack = document.getElementById("uberBlack").checked;

  if (uberX) {
    return "uberX";
  } else if (uberSUV) {
    return "uberSUV";
  } else {
    return "uberBlack";
  }
}

var chiTiet = new ChiTietHoaDon();

function tinhTien() {
  var soKM = document.getElementById("soKM").value;
  var thoiGianCho = document.getElementById("thoiGianCho").value;
  var loaiXe = chonLoaiXe();
  chiTiet.khoangCach = soKM;
  chiTiet.thoiGianCho = thoiGianCho;
  chiTiet.loaiXe = loaiXe;

  var thanhTien = 0;

  switch (loaiXe) {
    case "uberX":
      if (soKM <= 1) {
        thanhTien = 8000 * soKM + 2000 * thoiGianCho;
      } else if (soKM > 1 && soKM < 21) {
        thanhTien = 1 * 8000 + 12000 * (soKM - 1) + 2000 * thoiGianCho;
      } else {
        thanhTien =
          1 * 8000 + 20 * 12000 + 10000 * (soKM - 21) + 2000 * thoiGianCho;
      }
      break;
    case "uberSUV":
      if (soKM <= 1) {
        thanhTien = 9000 * soKM + 3000 * thoiGianCho;
      } else if (soKM > 1 && soKM < 21) {
        thanhTien = 1 * 9000 + 14000 * (soKM - 1) + 3000 * thoiGianCho;
      } else {
        thanhTien =
          1 * 9000 + 20 * +14000 + 12000 * (soKM - 21) + 3000 * thoiGianCho;
      }
      break;
    case "uberBlack":
      if (soKM == 1) {
        thanhTien = 10000 * soKM + 4000 * thoiGianCho;
      } else if (soKM > 1 && soKM < 21) {
        thanhTien = 1 * 10000 + 16000 * (soKM - 1) + 4000 * thoiGianCho;
      } else {
        thanhTien =
          1 * 10000 + 20 * 16000 + 14000 * (soKM - 21) + 4000 * thoiGianCho;
      }
      break;
  }

  chiTiet.thanhTien = thanhTien;
  return thanhTien;
}

var tinhTienBtn = document.getElementById("tinhTien");

tinhTienBtn.onclick = function () {
  var divThanhTien = document.getElementById("divThanhTien");
  var spanTien = document.getElementById("xuatTien");
  var thanhTien = tinhTien();

  divThanhTien.style.display = "block";
  spanTien.innerHTML = thanhTien;

  renderTableChiTietHoaDon();
};

function renderTableChiTietHoaDon() {
  var noiDung = "";
  noiDung += `
      <tr>
        <td>${new Date().toLocaleDateString()}</td>
        <td>${new Date().toLocaleTimeString()}</td>
      </tr>
      <tr>
        <td>Loại xe</td>
        <td>${chiTiet.loaiXe}</td>
      </tr>
      <tr>
        <td>Khoảng cách</td>
        <td>${chiTiet.khoangCach}</td>
      </tr>
      <tr>
        <td>Thòi gian chờ</td>
        <td>${chiTiet.thoiGianCho}</td>
      </tr>
      <tr class="font-weight-bold">
        <td>Thành tiền</td>
        <td>${chiTiet.thanhTien} VND</td>
      </tr>`;

  document.getElementById("tblChiTietHoaDon").innerHTML = noiDung;
}
