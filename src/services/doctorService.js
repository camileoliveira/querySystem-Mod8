const {
  addDoctor,
  listAll,
  updateDoctor,
  deleteDoctor,
  findDoctorByName,
  findDoctorBySpecialty
} = require("../repositories/doctorRepository");

function addDoctorService(name, specialty) {
  return addDoctor(name, specialty);
}

function listAllService() {
  return listAll();
}

function updateDoctorService(id, nameDoctor, specialty) {
  return updateDoctor(id, nameDoctor, specialty);
}

function deleteDoctorService(id) {
  return deleteDoctor(id);
}

function findDoctorByNameService(nameDoctor) {
  return findDoctorByName(nameDoctor);
}

function findDoctorBySpecialtyService(specialty){
return findDoctorBySpecialty(specialty)
}

module.exports = {
  addDoctorService,
  listAllService,
  updateDoctorService,
  deleteDoctorService,
  findDoctorByNameService,
  findDoctorBySpecialtyService
};
