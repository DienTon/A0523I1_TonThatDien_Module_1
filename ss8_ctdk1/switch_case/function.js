function while_click() {
    var ngay= document.getElementById("month").value;
    switch (ngay) {
        case "1": {
            tinh_ngay = "Tháng 1 có 31 ngày."
            break;
        }
        case "2": {
            tinh_ngay = "Tháng 2 có 29 ngày."
            break;
        }
        case "3": {
            tinh_ngay = "Tháng 3 có 31 ngày."
            break;
        }
        case "4": {
            tinh_ngay = "Tháng 4 có 30 ngày."
            break;
        }
        case "5": {
            tinh_ngay = "Tháng 5 có 31 ngày."
            break;
        }
        case "6": {
            tinh_ngay = "Tháng 6 có 30 ngày."
            break;
        }
        case "7": {
            tinh_ngay = "Tháng 7 có 31 ngày."
            break;
        }
        case "8": {
            tinh_ngay = "Tháng 8 có 30 ngày."
            break;
        }
        case "9": {
            tinh_ngay = "Tháng 9 có 31 ngày."
            break;
        }
        case "10": {
            tinh_ngay = "Tháng 10 có 30 ngày."
            break;
        }
        case "11": {
            tinh_ngay = "Tháng 11 có 31 ngày."
            break;
        }
        case "12": {
            tinh_ngay = "Tháng 12 có 30 ngày."
            break;
        }
        default: {
            tinh_ngay = "Tháng nhập vào không hợp lệ"
        }
    }
    document.getElementById("tinh_ngay").innerHTML = tinh_ngay;
}