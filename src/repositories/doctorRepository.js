const doctors = [{ id: 1, nameDoctor: "a", specialty: "oftalmologista" }];
const generateId = require("../utils/generateId");

function addDoctor(name, specialty) {
  const id = generateId();

  const newDoctor = {
    id: id,
    name: name,
    specialty: specialty,
  };

  doctors.push(newDoctor);
  return newDoctor;
}

function listAll() {
  return doctors;
}

function updateDoctor(id, nameDoctor, specialty) {
  const i = doctors.findIndex((doctor) => doctor.id == id);
  if (i == -1) {
    return false;
  }
  doctors[i].nameDoctor = nameDoctor;
  doctors[i].specialty = specialty;

  return doctors[i];
}

function deleteDoctor(id) {
  const index = doctors.findIndex((doctor) => doctor.id == id);
  if (index == -1) {
    return false;
  }
  doctors.splice(index, 1);
  return true;
}

function findDoctorByName(nameDoctor) {
  const filteredDoctor = doctors.filter((doctor) => doctor.name == nameDoctor);
  return (filteredDoctor);
}

function findDoctorBySpecialty(specialty) {
  const filteredDoctor = doctors.filter((doctor) => doctor.specialty == specialty);
  return (filteredDoctor);
}

module.exports = {
  addDoctor,
  listAll,
  updateDoctor,
  deleteDoctor,
  findDoctorByName,
  findDoctorBySpecialty
};
