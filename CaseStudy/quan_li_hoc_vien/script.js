


class Student {
    constructor(id, nameStudent, className, email, date, module) {
        this.id = "HV-" + id;
        this.nameStudent = nameStudent;
        this.className = className;
        this.email = email;
        this.date = date;
        this.module = module;
    }


}
let students = [];

let student1 = new Student("0001", "Nguyễn Văn A", "C10", "a@gmail.com", "1/1/2001", "1");
let student2 = new Student("0002", "Nguyễn Văn B", "C11", "b@gmail.com", "2/2/2001", "2");
let student3 = new Student("0003", "Nguyễn Văn C", "C12", "c@gmail.com", "3/3/2001", "3");

students.push(student1);
students.push(student2);
students.push(student3);

renderStudent();
//thêm
function addStudent() {
    //id
    let numberID = prompt("Nhập mã học viên gồm 4 chữ số");
    while (numberID < 1000 || numberID > 9999) {
        alert('Mã học viên không hợp lệ')
        numberID = prompt("Nhập mã học viên gồm 4 chữ số");
    }
    let id = numberID;

    //name
    let nameStudent = prompt("Nhập tên học viên");
    while (nameStudent.length > 50) {
        alert("Tên học viên không được vượt quá 50 kí tự")
        nameStudent = prompt("Nhập tên học viên");
    }

    let className = prompt("Nhập tên lớp");
    let email = prompt("Nhập Email");
    let date = prompt("Nhập ngày sinh (dd/mm/yyyy)");

    //Nhập module
    let module = prompt("Nhập module ( 1 -> 6)");
    while (module < 1 || module > 6) {
        alert("Module không hợp lệ, nhập lại")
        module = prompt("Nhập module ( 1 -> 6)");
    }

    if (id == "" || nameStudent == '' || className == '' || email == '' || date == '' || module == '') {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }



    let student = new Student(id, nameStudent, className, email, date, module);
    students.push(student);
    renderStudent();
}
//hiển thị
function renderStudent() {
    let tableBody = "<table border='1'>" +
        "<th class='tieude'>Mã học viên</th>" +
        "<th class='tieude'>Tên</th>" +
        "<th class='tieude'>Lớp</th>" +
        "<th class='tieude'>Email</th>" +
        "<th class='tieude'>Ngày sinh</th>" +
        "<th class='tieude'>Module</th>";


    for (let i = 0; i < students.length; i++) {
        tableBody += "<tr>" +
            "<td>" + students[i].id + "</td>" +
            "<td>" + students[i].nameStudent + "</td>" +
            "<td>" + students[i].className + "</td>" +
            "<td>" + students[i].email + "</td>" +
            "<td>" + students[i].date + "</td>" +
            "<td>" + students[i].module + "</td>" +
            "</tr>";
    }

    tableBody += "</table>";

    // for (let i = 0; i < students.length; i++) {
    //     let tr = document.createElement("tr");
    //     tr.innerHTML = `
    //         <td>${students[i].id}</td>
    //         <td>${students[i].nameStudent}</td>
    //         <td>${students[i].className}</td>
    //         <td>${students[i].email}</td>
    //         <td>${students[i].date}</td>
    //         <td>${students[i].module}</td>
    //         `;

    //     tableBody.innerHTML = tr;
    // }        
    document.getElementById("tableBody").innerHTML = tableBody;

}
//xoa học viên
function removeStudent() {
    let idrm = prompt("Nhập mã học viên");
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == idrm) {
            let choice = window.confirm("Bạn có muốn xóa học viên " + idrm + " không ?");
            if (choice == true) {
                students.splice(i, 1);
            } else {
                alert("học viên " + idrm + "không tồn tại")
                return;
            }
        }
    }
    renderStudent();
}
//sửa
function fixStudent() {
    let idfix = prompt("Nhập mã học viên cần sửa");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id == idfix) {

            let numberID = prompt("Nhập mã học viên gồm 4 chữ số");
            while (numberID < 1000 || numberID > 9999) {
                alert('Mã học viên không hợp lệ')
                numberID = prompt("Nhập mã học viên gồm 4 chữ số");
            }
            let idf = numberID;
            idf = "HV-" + idf;

            let nameStudentf = prompt("Nhập tên học viên");
            let classNamef = prompt("Nhập tên lớp");
            let emailf = prompt("Nhập Email");
            let datef = prompt("Nhập ngày sinh");

            let modulef = prompt("Nhập module ( 1 -> 6)");
            while (modulef < 1 || modulef > 6) {
                alert("Module không hợp lệ, nhập lại")
                modulef = prompt("Nhập module ( 1 -> 6)");
            }
            

            let array = { idf, nameStudentf, classNamef, emailf, datef, modulef }

            students[i].id = array.idf;
            students[i].nameStudent = array.nameStudentf;
            students[i].className = array.classNamef;
            students[i].email = array.emailf;
            students[i].date = array.datef;
            students[i].module = array.modulef;
        }
    }
    renderStudent();


}