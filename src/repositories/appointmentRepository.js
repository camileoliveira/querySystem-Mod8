const appointments = [
  {
    id: 1,
    date: 10 / 10 / 24,
    idDoctor: 1,
    idPatient: 1,
    description: "Retorno",
  },
];
const generateId = require("../utils/generateId");

function addAppointment(date, idDoctor, idPatient, description) {
  const id = generateId();
  const newAppointment = {
    id: id,
    date: date,
    idDoctor: idDoctor,
    idPatient: idPatient,
    description: description,
  };

  appointments.push(newAppointment);
  return newAppointment;
}

function listAll() {
  return appointments;
}

function updateAppointment(id, date, idDoctor, idPatient, description) {
  const i = appointments.findIndex((appointment) => appointment.id == id);
  if (i == -1) {
    return false;
  }
  appointments[i].date = date;
  appointments[i].idDoctor = idDoctor;
  appointments[i].idPatient = idPatient;
  appointments[i].description = description;
  return appointments[i];
}

function deleteAppointment(id) {
  const index = appointments.findIndex((appointment) => appointment.id == id);
  if (index == -1) {
    return false;
  }
  appointments.splice(index, 1);
  return true;
}

function findAppointmentByDate(date) {
  const filteredAppointment = appointments.filter(
    (appointment) => appointment.date == date
  );
  return filteredAppointment;
}

function findAppointmentByIdDoctor(idDoctor) {
  const filteredAppointment = appointments.filter(
    (appointment) => appointment.idDoctor == idDoctor
  );
  return filteredAppointment;
}

function findAppointmentIdPatient(idPatient) {
  const filteredAppointment = appointments.filter(
    (appointment) => appointment.idPatient == idPatient
  );
  return filteredAppointment;
}

function findEmployeeByDescription(description) {
  const filteredAppointment = appointments.filter(
    (appointment) => appointment.description == description
  );
  return filteredAppointment;
}


module.exports = { 
addAppointment,
listAll,
updateAppointment,
deleteAppointment,
findAppointmentByDate,
findAppointmentByIdDoctor,
findAppointmentIdPatient,
findEmployeeByDescription
};
