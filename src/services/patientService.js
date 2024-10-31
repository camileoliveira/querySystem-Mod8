const {
  addPatient,
  listAll,
  updatePatient,
  deletePatient,
  findPatientByName,
  findPatientByBirth,
} = require("../repositories/patientRepository");

function addPatientService(name, birth) {
  return addPatient(name, birth);
}

function listAllService() {
  return listAll();
}

function updatePatientService(id, name, birth) {
  return updatePatient(id, name, birth);
}

function deletePatientService(id) {
  return deletePatient(id);
}

function findPatientByNameService(name) {
  return findPatientByName(name);
}

function findPatientByBirthService(birth) {
  return findPatientByBirth(birth);
}

module.exports = {
  addPatientService,
  listAllService,
  updatePatientService,
  deletePatientService,
  findPatientByNameService,
  findPatientByBirthService
};
