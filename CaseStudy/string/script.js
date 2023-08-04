
//bai 
function bai1() {
    let str = prompt("nhap chuoi")
    let newStr = "";
    str = str.toLowerCase();
    newStr += str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== " ") {
            if (str[i - 1] === " ") newStr += str[i].toUpperCase();
            else newStr += str[i];
        }
        if (str[i] === " " && str[i + 1] !== " ") {
            newStr += str[i];
        }
    }

    let show = document.getElementById("show");
    show.innerHTML = newStr;
}
//bai 2
function bai2() {
    let s = prompt("Nhập xâu ký tự")
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        let k = 0;
        for (let j = 0; j < i; j++) {
            if (s[i] !== s[j]) {
                k++;
            }
        }
        if (i === k) count++;
    }


    let show = document.getElementById("show");
    show.innerHTML = count;
}
function bai3() {
    let s1 = "aabcc";
    let s2 = "adcaa";
    let count = 0;
    let index;
    for (let i = 0; i < s1.length; i++) {
        index = s2.indexOf(s1.charAt(i));
        if (index !== -1) {
            count++;
            s2 = s2.replace(s2.charAt(index), "");
        }
    }
    let show = document.getElementById("show");
    show.innerHTML = count;

}

