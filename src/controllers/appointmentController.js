const {
  addAppointmentService,
  listAllService,
  updateAppointmentService,
  deleteAppointmentService,
  findAppointmentByDateService,
  findAppointmentByIdDoctorService,
  findAppointmentIdPatientService,
  findEmployeeByDescriptionService
} = require("../services/appointmentService");

function addAppointmentHandler(req, res) {
  const { date, idDoctor, idPatient, description } = req.body;
  const newAppointment = addAppointmentService(
    date,
    idDoctor,
    idPatient,
    description
  );
  return res.status(200).send(newAppointment);
}

function listAllAppointmentHandler(req, res) {
  const appointments = listAllService();
  return res.status(200).send(appointments);
}

function updateAppointmentHandler(req, res) {
  const { id } = req.params;
  const { date, idDoctor, idPatient, description } = req.body;
  const updatedAppointment = updateAppointmentService(
    date,
    idDoctor,
    idPatient,
    description
  );
}

function deleteAppointmentHandler(req, res) {
  const { id } = req.params;
  const removedAppointment = deleteAppointmentService(id);
  if (removedAppointment) {
    return res.status(200).send("Appointment removed");
  }
  return res.status(404).send("Appointment not found");
}

function findAppointmentHandler(req, res) {
  const { date, idDoctor, idPatient, description } = req.query;

  if (date) {
    const appointmentDate = findAppointmentByDateService(date);
    return res.status(200).send(appointmentDate);
  }

  if (idDoctor) {
    const appointmentIdDoctor = findAppointmentByIdDoctorService(role);
    return res.status(200).send(appointmentIdDoctor);
  }

  if (idPatient) {
    const appointmentIdPatient = findAppointmentIdPatientService(idPatient);
    return res.status(200).send(appointmentIdPatient);
  }

  if (description) {
    const appointmentDescription = findEmployeeByDescriptionService(description);
    return res.status(200).send(appointmentDescription);
  }
}




(module.exports = {
  addAppointmentHandler,
  listAllAppointmentHandler,
  updateAppointmentHandler,
  deleteAppointmentHandler,
  findAppointmentHandler
})
