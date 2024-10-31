const patients = [{ id: 1, name: "Ana", birth: 10 / 10 / 2010 }];
const generateId = require("../utils/generateId");

function addPatient(name, birth) {
  const id = generateId();

  const newPatient = {
    id: id,
    name: name,
    birth: birth,
  };

  patients.push(newPatient);
  return newPatient;
}

function listAll() {
  return patients;
}

function updatePatient(id, name, birth) {
  const i = patients.findIndex((patient) => patient.id == id);

  if (i == -1) {
    return false;
  }
  patients[i].name = name;
  patients[i], (birth = birth);
  return patients[i];
}


function deletePatient(id) {
  const index = patients.findIndex((patient) => patient.id == id);
  if (index == -1) {
    return false;
  }
  patients.splice(index, 1);
  return true;
}

function findPatientByName(name) {
  const filteredPatient = patients.filter((patient) => patient.name == name);
  return (filteredPatient);
}

function findPatientByBirth(birth) {
  const filteredPatient = patients.filter((patient) => patient.birth == birth);
  return (filteredPatient);
}

module.exports = { addPatient, listAll, updatePatient, deletePatient, findPatientByName, findPatientByBirth};
