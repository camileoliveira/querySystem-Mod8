const {
  addAppointment,
  listAll,
  updateAppointment,
  deleteAppointment,
  findAppointmentByDate,
  findAppointmentByIdDoctor,
  findAppointmentIdPatient,
  findEmployeeByDescription,
} = require("../repositories/appointmentRepository");

function addAppointmentService(date, idDoctor, idPatient, description) {
  return addAppointment(date, idDoctor, idPatient, description);
}

function listAllService() {
  return listAll();
}

function updateAppointmentService(id, date, idDoctor, idPatient, description) {
  return updateAppointment(id, date, idDoctor, idPatient, description);
}

function deleteAppointmentService(id) {
  return deleteAppointment(id);
}

function findAppointmentByDateService(date) {
  return findAppointmentByDate(date);
}

function findAppointmentByIdDoctorService(idDoctor) {
  return findAppointmentByIdDoctor(idDoctor);
}

function findAppointmentIdPatientService(idPatient) {
  return findAppointmentIdPatient(idPatient);
}

function findEmployeeByDescriptionService(description) {
  return findEmployeeByDescription(description);
}

module.exports = {
  addAppointmentService,
  listAllService,
  updateAppointmentService,
  deleteAppointmentService,
  findAppointmentByDateService,
  findAppointmentByIdDoctorService,
  findAppointmentIdPatientService,
  findEmployeeByDescriptionService
};
