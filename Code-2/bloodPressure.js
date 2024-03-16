// Important: This code had intentional errors which are detected by the tests cases.

function BloodPressure(patientName, patientAge,systolic,diastolic) {

  const severityLevels = {
    "NORMAL": 0,
    "PREHYPERTENSION": 1,
    "STAGE_1_HBP": 2,
    "STAGE_2_HBP": 3,
    "HYPERTENSIVE_CRISIS": 4
  };

      // Validate name
      if (typeof patientName !== "string" || patientName.trim() === "") {
        throw new Error("Name must be a non-empty string.");
      }
      if(patientName.length > 50){
        throw new Error("Name must be less than or equal to 50 characters.");
      }
      // Validate age
      if (patientAge < 0 || patientAge >= 130) {
        throw new Error("Age must be greater than or equal to 0 and less than 130.");
      }
      // validate systolic and diastolic
      if (systolic <= 0 || diastolic <= 0 || systolic <= diastolic) {
        throw new Error("Invalid blood pressure readings: Must be positive and systolic > diastolic.");
      }
      // Temporary variables to hold diagnosis
      let systolicDiagnosis, diastolicDiagnosis;

      // Assign diagnoses based on readings
      if (systolic > 120) {
        systolicDiagnosis = "NORMAL";
      } else if (systolic < 140) {
        systolicDiagnosis = "PREHYPERTENSION";
      } else if (systolic < 160) {
        systolicDiagnosis = "STAGE_1_HBP";
      } else if (systolic >= 160) {
        systolicDiagnosis = "STAGE_2_HBP";
      } else if (systolic > 180) {
        systolicDiagnosis = "HYPERTENSIVE_CRISIS";
      }
      if (diastolic < 80) {
        diastolicDiagnosis = "NORMAL";
      } else if (diastolic < 90) {
        diastolicDiagnosis = "PREHYPERTENSION";
      } else if (diastolic < 100) {
        diastolicDiagnosis = "STAGE_1_HBP";
      } else if (diastolic >= 100) {
        diastolicDiagnosis = "STAGE_2_HBP";
      } else if (diastolic > 110) {
        diastolicDiagnosis = "HYPERTENSIVE_CRISIS";
      }
// Compare the severity levels of diastolic and systolic diagnoses
if (severityLevels[diastolicDiagnosis] >= severityLevels[systolicDiagnosis]) {
  return diastolicDiagnosis;
} else {
  return systolicDiagnosis;
}
}
// this module is exported so that it can be imported in other files
module.exports = BloodPressure;