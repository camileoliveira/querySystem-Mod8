const {
  addDoctorService,
  listAllService,
  updateDoctorService,
  deleteDoctorService,
  findDoctorByNameService,
  findDoctorBySpecialtyService,
} = require("../services/doctorService");

function addDoctorHandler(req, res) {
  const { name, specialty } = req.body;
  const newDoctor = addDoctorService(name, specialty);
  return res.status(200).send(newDoctor);
}

function listAllDoctorsHandler(req, res) {
  const doctors = listAllService();
  return res.status(200).send(doctors);
}

function updateDoctorHandler(req, res) {
  const { id } = req.params;
  const { nameDoctor, specialty } = req.body;

  const updatedDoctor = updateDoctorService(id, nameDoctor, specialty);
  return res.status(200).send(updatedDoctor);
}

function deleteDoctorHandler(req, res) {
  const { id } = req.params;
  const removeDoctor = deleteDoctorService(id);
  if (removeDoctor) {
    return res.status(200).send("Doctor removed");
  }
  return res.status(404).send("Doctor not found");
}

function findDoctorHandler(req, res) {
  const { nameDoctor, specialty } = req.query;

  if (nameDoctor) {
    const doctorName = findDoctorByNameService(nameDoctor);
    return res.status(200).send(doctorName);
  }
  if (specialty) {
    const doctorSpecialty = findDoctorBySpecialtyService(specialty);
    return res.status(200).send(doctorSpecialty);
  }
}

module.exports = {
  addDoctorHandler,
  listAllDoctorsHandler,
  updateDoctorHandler,
  deleteDoctorHandler,
  findDoctorHandler
  
};
