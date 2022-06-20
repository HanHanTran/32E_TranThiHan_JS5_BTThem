// bài tập 1: tính tiền thuế
// input: hoTen: String, thuNhapNam: Number, soNguoi: Number
// output: tính ra thuế thu nhập cá nhân ketQuaB1: Number
        // ketQuaB1 = ((thuNhapNam - 4000000 - (soNguoi *1600000)) * % thuế theo từng muwsc thu nhập);
        // - <=60 triệu % thuế là 0.05
        // - >60 triệu và <= 120 triệu % thuế là 0.1
        // - >120 triệu và <= 210 triệu % thuế là 0.15
        // - >210 triệu và <= 384 triệu % thuế là 0.2
        // - >384 triệu và <= 624 triệu % thuế là 0.25
        // - >624triệu và <= 960 triệu % thuế là 0.23
        // - >960 triệu % thuế là 0.35
        
// xử lý: 
document.getElementById('btnTinhTienThue').onclick = function(){
    var hoTen = document.getElementById('hoTen').value;
    var thuNhapNam = Number(document.getElementById('thuNhapNam').value);
    var soNguoi = Number(document.getElementById('soNguoi').value);
    ketQuaB1 = 0;
    if (thuNhapNam <= 60000000) {
        ketQuaB1 = ((thuNhapNam - 4000000 - (soNguoi *1600000)) * 0.05);
    } else if( thuNhapNam > 60000000 &&thuNhapNam <=120000000){
        ketQuaB1 = (( thuNhapNam - 4000000 - (soNguoi *1600000)) * 0.1);

        
    } else if(thuNhapNam> 1200000000 &&thuNhapNam <= 210000000){
        ketQuaB1 = ((thuNhapNam - 4000000 - (soNguoi *1600000))*0.15);
       
    } else if(thuNhapNam > 210000000 && thuNhapNam <= 384000000){
        ketQuaB1 = (( thuNhapNam - 4000000- (soNguoi *1600000)) * 0.2) ;

    } else if(thuNhapNam > 384000000 && thuNhapNam <= 624000000){
        ketQuaB1 = (( thuNhapNam - 4000000- (soNguoi *1600000)) * 0.25) ;

    } else if (thuNhapNam > 624000000 && thuNhapNam <= 960000000){
    ketQuaB1 = (( thuNhapNam - 4000000- (soNguoi *1600000)) * 0.3) ;
    } else if(thuNhapNam > 960000000){
        ketQuaB1 = (( thuNhapNam - 4000000- (soNguoi *1600000)) * 0.35) ;

    }
    document.getElementById('ketQuab1').innerHTML = 'Khách hàng: ' +hoTen + ' - Tiền thuế thu nhập cá nhân là: ' +ketQuaB1.toLocaleString() + 'VNĐ';
}



// Bài tập 2: BÀI TẬP NỘP: TÍNH TIỀN CÁP
// input: phisulyhd = 4.5; phidicvucoban = 20.5 ; kenhcaocap = 7.5/ kênh
// maKH: String; soKenh: Number; soKetNoi: Number( kênh doanh nghiệp)
// output: tính ra tiền cáp ketQuaB2 = ?
// - nếu mức giá Nhà Dân: ketQuaB2 = (soKenh*7.5) + 20.5 + 4.5;
// - nếu mức giá doanh nghiệp: 
// + soKetNoi <=10 : ketQuaB2 = (soKenh*50) + 15 + 75;
// + soKetNoi > 10 :  ketQuaB2 = (soKenh*50) + 15 + 75 +((soKetNoi-10)*5);
// xử lý:

document.getElementById('btnTinhTienCap').onclick = function(){
    var mucGia = document.getElementById('mucGia').value;
    var maKH = document.getElementById('maKH').value;
    var soKenh = Number(document.getElementById('soKenh').value);
    var soKetNoi = Number(document.getElementById('soKetNoi').value);
    var ketQuaB2 =0;
    if (mucGia == "N") {
        ketQuaB2 = (soKenh*7.5) + 20.5 + 4.5;
    }if(mucGia == "D" && soKetNoi <=10) {
        ketQuaB2 = (soKenh*50) + 15 + 75;
    } else if(mucGia == "D" && soKetNoi > 10) {
        ketQuaB2 = (soKenh*50) + 15 + 75 +((soKetNoi-10)*5);

    } else{
        
    }
    document.getElementById('ketQuab2').innerHTML = 'Mã khách hàng là: ' + maKH + ' có tổng số tiền là: ' + ketQuaB2.toLocaleString() + '$';
}
// hàm ẩn nút số kết nối
function hiden_soketnoi() {
    var loaiKH = document.getElementById("mucGia").value;
    var soKetNoi = document.getElementById("soKetNoi");
    if (loaiKH == "N" || loaiKH == "C") {
      soKetNoi.style.display = "none";
    } else if (loaiKH == "D") {
      soKetNoi.style.display = "inline-block";
    }
  }