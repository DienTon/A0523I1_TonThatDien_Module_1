function bai1() {
    let a = [1, 2, 3];
    let b = [];
    let temp = 0;
    for (let i = 0; i < a.length; i++) {
        temp += a[i];
        b.push(temp);
    }
    let show = document.getElementById("show");
    show.innerHTML = "Bài 1:  b[" + b + "]";
}

function bai2() {
    let a = [7, 2, 5, 3, 5, 3];
    let b = [7, 2, 5, 4, 6,11,10, 3, 5, 3];
    let c = [];
 

    for (let i = 0; i < b.length; i++) {
        let find = false;
        for (let j = 0; j < a.length; j++) {
            if (b[i] == a[j]) {
                find = true;
            }
        }
        if (find == false) {
            c.push(b[i]);
        }
    }
    
    let show = document.getElementById("show");
    show.innerHTML = "Mang A:[" + a + "] <br>" + "Mang B:[" + b + "] <br>" + "missingValue(A,B):[" + c + "]";
}

function bai3() {
    numerators = [5,2,5];
    denomirator = [6,3,4];
    var x = 0;
    var max = numerators[0] / denomirator [0];
    for(let i =0 ; i<numerators.length; i++){
        if(numerators[i] / denomirator[i] > max){
            max  = numerators[i]/denomirator[i];
            x = i;
        }
    }
    let show = document.getElementById("show");
    show.innerHTML = x
}

function bai4() {
    let choice;
    let soLuong;
    let arr = [15000, 22000, 20000, 20000, 8000, 20000]
    let tongTien = 1;

    do {
        choice = +prompt("chọn món ứng theo từng số 1 -> 6 trên menu hoặc nhấn 7 để kết thúc")
        if (choice >= 1 && choice <= 6) {
            soLuong = +prompt("giá của món vừa chọn là: " + arr[choice - 1] + ", nhập số lượng muốn mua");
            tongTien = soLuong * arr[choice - 1];
            alert("Tổng tiền cần thanh toán là: " + tongTien)

        } else if (choice != 7) {
            alert("lựa chọn không hợp lệ")
        }
    } while (choice != 7)
}
function showBai4() {
    let show = document.getElementById("show");
    show.innerHTML =
        '<p> 1. Cafe </p>' +
        '<p> 2. Cam vắt </p>' +
        '<p> 3. Nước ép cà rốt </p>' +
        '<p> 4. Nước ép cà chua </p>' +
        '<p> 5. Nước lọc </p>' +
        '<p> 6. Nước dừa </p>' +
        '<button type="button" class="bai4" onclick="bai4()">Đặt món</button>';
}