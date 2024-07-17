const studentName = document.getElementById("fullname"),
  admissionNum = document.getElementById("adnum"),
  studentGrade = document.getElementById("grade"),
  classfield = document.getElementById("class"),
  studentDOB = document.getElementById("dob"),
  studentGen = document.getElementById("gender"),
  religionfield = document.getElementById("religion"),
  admissiondate = document.getElementById("datefield"),
  fathername = document.getElementById("fathername"),
  fatheroccu = document.getElementById("fatheroccu"),
  mothername = document.getElementById("mothername"),
  form = document.getElementById("studentDetails");

let studentLogin = [];
let staffLogin = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  studentLogin.push(
    studentName.value,
    admissionNum.value,
    studentGrade.value,
    classfield.value,
    studentDOB.value,
    studentGen.value,
    religionfield.value,
    admissiondate.value,
    fathername.value,
    fatheroccu.value,
    mothername.value
  );
  localStorage.setItem("firstname", studentLogin[0]);
  localStorage.setItem("adnumber", studentLogin[1]);
  localStorage.setItem("gradefield", studentLogin[2]);
  localStorage.setItem("classfield", studentLogin[3]);
  localStorage.setItem("dobField", studentLogin[4]);
  localStorage.setItem("sex", studentLogin[5]);
  localStorage.setItem("religiondeet", studentLogin[6]);
  localStorage.setItem("asdate", studentLogin[7]);
  localStorage.setItem("father", studentLogin[8]);
  localStorage.setItem("occupation", studentLogin[9]);
  localStorage.setItem("mother", studentLogin[10]);
  alert("Student Info successfully updated!");
  window.location.href = "studentpro.html";
  console.log(localStorage.setItem);
});

//Staff Profile Details

const staffDeets = document.querySelector(".staffdeets"),
  staffname = document.getElementById("firstname"),
  id = document.getElementById("idnum"),
  dateofbirth = document.getElementById("dateofbirth"),
  staffgender = document.getElementById("staffgender"),
  staffreligion = document.getElementById("staffreligion"),
  admindob = document.getElementById("admindob");

staffDeets.addEventListener("submit", (e) => {
  e.preventDefault();

  staffLogin.push(
    staffname.value,
    id.value,
    dateofbirth.value,
    staffgender.value,
    staffreligion.value,
    admindob.value
  );

  localStorage.setItem("firname", staffLogin[0]);
  localStorage.setItem("identity", staffLogin[1]);
  localStorage.setItem("dob", staffLogin[2]);
  localStorage.setItem("gender", staffLogin[3]);
  localStorage.setItem("staffrel", staffLogin[4]);
  localStorage.setItem("adminData", staffLogin[5]);

  alert("Your Info has been successfully updated!");
  window.location.href = "teacherspro.html";
});

// Non Academic Staff Details


// Parent Details



