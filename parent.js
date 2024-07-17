// Parent Add Details Section 

const form4 = document.querySelector('.parentdeets'),
firstname3 = document.getElementById('firstname3'),
idnum3 = document.getElementById('idnum3'),
dateofbirth3 = document.getElementById('dateofbirth3'),
parentGen = document.getElementById('parentGen'),
parentreligion = document.getElementById('parentreligion'),
parentsOccupation = document.getElementById('parentsOccupation');

let parentLogin = [];

form4.addEventListener("submit", (e) =>{

    e.preventDefault();
    parentLogin.push(firstname3.value, idnum3.value, dateofbirth3.value, parentGen.value, parentreligion.value, parentsOccupation.value);

    localStorage.setItem("parentname", parentLogin[0]);
    localStorage.setItem('parentID', parentLogin[1]);
    localStorage.setItem('parentdob', parentLogin[2]);
    localStorage.setItem('parentsex', parentLogin[3]);
    localStorage.setItem('parentRel', parentLogin[4]);
    localStorage.setItem('parentOccu', parentLogin[5]);
    alert('Your details have been successfully updated!');
    window.location.href = "parentspro.html";
})