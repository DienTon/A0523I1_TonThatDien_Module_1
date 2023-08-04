function bam() {
    let amount = document.getElementById("value").value;
    let fr = document.getElementById("from").value;
    let t = document.getElementById("to").value;

    if (fr == "vn" && t == "usd") {
        ketqua = amount / 23000;
    }
    if (fr == "usd" && t == "vn") {
        ketqua = amount * 23000;
    }

    document.getElementById("ketqua").innerHTML = "ket qua: " + ketqua ;
}