function cong() {
    let first_number = document.getElementById('n1').value;
    let second_number = document.getElementById('n2').value;

        result = Number(first_number) + Number(second_number);


    document.getElementById("result").innerHTML = "Result Division= " + result ;
}

function tru() {
    let first_number = document.getElementById('n1').value;
    let second_number = document.getElementById('n2').value;

    result = first_number - second_number;


    document.getElementById("result").innerHTML = "Result Division = " + result ;
}
function nhan() {
    let first_number = document.getElementById('n1').value;
    let second_number = document.getElementById('n2').value;

    result = first_number * second_number;


    document.getElementById("result").innerHTML = "Result Division = " + result ;
}

function chia() {
    let first_number = document.getElementById('n1').value;
    let second_number = document.getElementById('n2').value;

    result = first_number / second_number;


    document.getElementById("result").innerHTML = "Result Division = " + result ;
}