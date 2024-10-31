const { query } = require("express");
const {
  addPatientService,
  listAllService,
  updatePatientService,
  deletePatientService,
  findPatientByNameService,
  findPatientByBirthService
} = require("../services/patientService");

function addPatientHandler(req, res) {
  const { name, birth } = req.body;
  const newPatient = addPatientService(name, birth);
  return res.status(200).send(newPatient);
}

function listAllPatientsHandler(req, res) {
  const patients = listAllService();
  return res.status(200).send(patients);
}

function updatePatientHandler(req, res) {
  const {id} = req.params
  const {name, birth } = req.body;
  const updatedPatient = updatePatientService(id, name, birth);
  return res.status(200).send(updatedPatient);
}

function deletePatientHandler(req, res) {
  const { id } = req.params;
  const removedPatient = deletePatientService(id);
  if (removedPatient) {
    return res.status(200).send("Patient removed");
  }
  return res.status(404).send("Patient not found");
}

function findPatientHandler(req, res) {
  const { name, birth } = req.query;

  if (name) {
    const namePatient = findPatientByNameService(name);
    return res.status(200).send(namePatient);
  }
  if (birth) {
    const birthPatient = findPatientByBirthService(birth);
    return res.status(200).send(birthPatient);
  }
}

module.exports = { addPatientHandler, listAllPatientsHandler, updatePatientHandler, deletePatientHandler, findPatientHandler };
