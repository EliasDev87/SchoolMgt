const form3 = document.querySelector(".nonacademicdeets"),
 firstname2 = document.getElementById("firstname2"),
 idnum2 = document.getElementById('idnum2'),
 dateofbirth2 = document.getElementById('dateofbirth2'),
 nonstaffgender = document.getElementById('nonstaffgender'),
 nonstaffreligion = document.getElementById('nonstaffreligion'),
 nonadmindob = document.getElementById('nonadmindob');

 let nonStaffLogin = [];


form3.addEventListener("submit", (e) => {
  e.preventDefault();

  nonStaffLogin.push(firstname2.value, idnum2.value, dateofbirth2.value, nonstaffgender.value, nonstaffreligion.value, nonadmindob.value);

  localStorage.setItem("nonacaname", nonStaffLogin[0]);
  localStorage.setItem('nonadnum', nonStaffLogin[1]);
  localStorage.setItem('nonStaffdob', nonStaffLogin[2]);
  localStorage.setItem('nonSG', nonStaffLogin[3]);
  localStorage.setItem('nonSreligion', nonStaffLogin[4]);
  localStorage.setItem('nonADdob', nonStaffLogin[5]);
  alert("Your Details have been successfully updated!");
  window.location.href = "nonacademicpro.html";
});


