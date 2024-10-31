const express = require("express");
const router = express.Router();

const {
  addDoctorHandler,
  listAllDoctorsHandler,
  updateDoctorHandler,
  deleteDoctorHandler,
  findDoctorHandler,
} = require("../controllers/doctorController");
const {
  addPatientHandler,
  listAllPatientsHandler,
  updatePatientHandler,
  deletePatientHandler,
  findPatientHandler
} = require("../controllers/patientController");
const {
  addAppointmentHandler,
  listAllAppointmentHandler,
  updateAppointmentHandler,
  deleteAppointmentHandler,
  findAppointmentHandler,
} = require("../controllers/appointmentController");

router.post("/doctor", addDoctorHandler);
router.post("/patient", addPatientHandler);
router.post("/employee", addAppointmentHandler);

router.get("/employee", listAllAppointmentHandler);
router.get("/doctor", listAllDoctorsHandler);
router.get("/patient", listAllPatientsHandler);

router.put("/patient/:id", updatePatientHandler);
router.put("/appointment/:id", updateAppointmentHandler);
router.put("/doctor/:id", updateDoctorHandler);

router.delete("/doctor/:id", deleteDoctorHandler);
router.delete("/patient/:id", deletePatientHandler);
router.delete("/appointment/:id", deleteAppointmentHandler);

router.get("/appointment/search", findAppointmentHandler);
router.get("/doctor/search", findDoctorHandler);
router.get("/patient/search", findPatientHandler)

module.exports = router;
