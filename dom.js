document.addEventListener('DOMContentLoaded', function() {
    var student_details = [
      { 
        name: "Jyothi", rollNo: 1208, branch: "IT",cgpa:8.5
      },
      { 
        name: "Khyati", rollNo: 1235, branch: "IT", cgpa:8.8
      },
      { 
        name: "Amrutha", rollNo: 1214, branch: "IT", cgpa:8.9
      },
      { 
        name: "Srujana", rollNo: 1219, branch: "IT", cgpa:9.2
      },
    ];
    var addTable = document.getElementById("addTable");
    var studentTable = document.getElementById("studentTable");
    var tableBody = studentTable.querySelector("tbody");
    var addButton = document.getElementById("addButton");
    addTable.onclick = function() {
      tableBody.innerHTML = '';
      student_details.forEach(function(student) {
        createStudentRow(student);
      });
      studentTable.style.display = "block";
    };
    addButton.onclick = function() {
      var name = prompt("Enter the new student's name:");
      var rollNo = parseInt(prompt("Enter the new student's roll number:"));
      var branch = prompt("Enter the new student's branch:");
      var cgpa = parseFloat(prompt("Enter the new student's cgpa "));
      if (!name || isNaN(rollNo) || !branch || isNaN(cgpa)) {
        alert("Invalid input. Please enter valid details.");
        return;
      }
      var newStudent = {
        name: name,
        rollNo: rollNo,
        branch: branch,
        cgpa:cgpa
      };
      student_details.push(newStudent);
      createStudentRow(newStudent);
    };
    function createStudentRow(student) {
      var tr = document.createElement("tr");    
      var nameCell = document.createElement("td");
      nameCell.textContent = student.name;    
      var rollNoCell = document.createElement("td");
      rollNoCell.textContent = student.rollNo; 
      var branchCell = document.createElement("td");
      branchCell.textContent = student.branch;
      var cgpaCell = document.createElement("td");
      cgpaCell.textContent = student.cgpa;     
      var updateCell = document.createElement("td");
      var updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.onclick = function() {
        updateStudent(student, tr);
      };
      updateCell.appendChild(updateButton);     
      var deleteCell = document.createElement("td");
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        deleteStudent(student, tr);
      };
      deleteCell.appendChild(deleteButton);     
      tr.appendChild(nameCell);
      tr.appendChild(rollNoCell);
      tr.appendChild(branchCell);
      tr.appendChild(cgpaCell);
      tr.appendChild(updateCell);
      tr.appendChild(deleteCell);
      tableBody.appendChild(tr);
    }
    function updateStudent(student, tr) {
      var newName = prompt("Enter new name:", student.name);
      var newRollNo = parseInt(prompt("Enter new roll number:", student.rollNo));
      var newBranch = prompt("Enter new branch:", student.branch);
      var newCgpa = parseFloat(prompt("Enter new cgpa:", student.cgpa));
      if (!newName || isNaN(newRollNo) || !newBranch || isNaN(newCgpa)) {
        alert("Invalid input. Update canceled.");
        return;
      }
      student.name = newName;
      student.rollNo = newRollNo;
      student.branch = newBranch;
      student.cgpa = newCgpa;
      tr.cells[0].textContent = newName;
      tr.cells[1].textContent = newRollNo;
      tr.cells[2].textContent = newBranch;
      tr.cells[3].textContent = newCgpa;
    }
    function deleteStudent(student, tr) {
      var index = student_details.indexOf(student);
      if (index !== -1) {
        student_details.splice(index, 1);
        tr.remove();
      }
    }
  });