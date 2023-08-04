function clk() {
    let can_nang = document.getElementById("weight").value;
    let chieu_cao = document.getElementById("height").value;
    bmi = can_nang / ( chieu_cao * chieu_cao);

    if (bmi < 18.5)
        result = document.write("Underweight");
    else if (bmi < 25.0)
        result= document.write("Normal");
    else if (bmi < 30.0)
        result= document.write("Overweight");
    else
        result= document.write("Obese");

    document.getElementById("result").innerHTML = result;
}