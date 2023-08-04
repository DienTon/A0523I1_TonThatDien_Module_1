function number(cha) {
    document.getElementById("input").value+=cha;
}
function ketqua() {
    let kq = eval(document.getElementById("input").value);
    document.getElementById("input").value=kq;

}
function reset() {
    document.getElementById("input").value=" ";
}