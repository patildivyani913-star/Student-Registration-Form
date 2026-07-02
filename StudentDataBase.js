let students = [];

function addStudent() {
    let name = prompt("Enter Student Name:");

    if (name && name.trim() !== "") {
        students.push(name);
        document.getElementById("output").innerHTML =
            name + " added successfully.";
    }
}

function removeStudent() {
    if (students.length === 0) {
        document.getElementById("output").innerHTML =
            "No students to remove.";
    } else {
        let removed = students.pop();
        document.getElementById("output").innerHTML =
            removed + " removed successfully.";
    }
}

function showStudents() {

    if (students.length === 0) {
        document.getElementById("output").innerHTML =
            "No students found.";
        return;
    }

    let data = "<h3>Student List</h3><ul>";

    students.forEach(function(student) {
        data += "<li>" + student + "</li>";
    });

    data += "</ul>";

    document.getElementById("output").innerHTML = data;
}

function checkStudent() {

    let name = prompt("Enter Student Name:");

    if (students.includes(name)) {
        document.getElementById("output").innerHTML =
            name + " is available.";
    } else {
        document.getElementById("output").innerHTML =
            name + " is not available.";
    }
}

function totalStudents() {
    document.getElementById("output").innerHTML =
        "Total Students: " + students.length;
}