// Import the BloodPressure function
// BloodPressure(patientName, patientAge,systolic,diastolic)
const BloodPressure = require('../bloodPressure'); 

describe('BloodPressure Function Tests', () => {
  
  // Equivalence Class Partitioning (ECP) Test Cases
  describe('Equivalence Class Partitioning (ECP)', () => {
    // Test Cases for patientName
    test('Valid Name', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow();
    });

    test('Empty Name', () => {
      expect(() => BloodPressure("", 35, 120, 80)).toThrow('Name must be a non-empty string.');
    });


      test('Name equal to 50', () => {
        expect(() => BloodPressure("MyNameIsTooLongItShouldBeLessThanFiftyCharacters--", 35, 120, 80)).not.toThrow('Name must be less than or equal to 50 characters.');
      });

    test('Non-string Name', () => {
      expect(() => BloodPressure(123, 35, 120, 80)).toThrow('Name must be a non-empty string.');
    });

    // Test Cases for patientAge
    test('Valid Age', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow();
    });

    test('Negative Age', () => {
      expect(() => BloodPressure("John Doe", -10, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
    });

    // Test Cases for systolic and diastolic
    test('Valid Readings', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow();
    });

    test('Non-positive Readings', () => {
      expect(() => BloodPressure("John Doe", 35, 0, 80)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
      expect(() => BloodPressure("John Doe", 35, 120, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
      expect(() => BloodPressure("John Doe", 35, 0, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Less Than Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 110, 120)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });
  });

  // Boundary Value Analysis (BVA) Test Cases
  describe('Boundary Value Analysis (BVA)', () => {

    // Valid Test Cases for patientName
    test('Name equal to 50', () => {
        expect(() => BloodPressure("MyNameIsTooLongItShouldBeLessThanFiftyCharacters--", 35, 120, 80)).not.toThrow('Name must be less than or equal to 50 characters.');
      });

    test('Name Over 50', () => {
        expect(() => BloodPressure("MyNameIsTooLongItShouldBeLessThanFiftyCharactersLong", 35, 120, 80)).toThrow('Name must be less than or equal to 50 characters.');
      });
    
    // Test Cases for patientAge
    test('Minimum Valid Age', () => {
      expect(() => BloodPressure("John Doe", 0, 120, 80)).not.toThrow();
    });

    test('Maximum Valid Age', () => {
      expect(() => BloodPressure("John Doe", 129, 120, 80)).not.toThrow();
    });

    test('Age Less Than Minimum', () => {
      expect(() => BloodPressure("John Doe", -1, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
    });

    test('Age Equal to Maximum', () => {
      expect(() => BloodPressure("John Doe", 130, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
    });

    // Test Cases for systolic and diastolic
    test('Minimum Valid Reading', () => {
      expect(() => BloodPressure("John Doe", 35, 110, 11)).not.toThrow();
    });

    test('Maximum Valid Reading', () => {
      expect(() => BloodPressure("John Doe", 35, 150, 130)).not.toThrow();
    });

    test('Reading Less Than Minimum', () => {
      expect(() => BloodPressure("John Doe", 35, 0, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Equal to Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 120)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Less Than Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 130)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });
  });
  // Test cases for systolic diagnoses
  describe('Systolic Diagnoses', () => {

    test('Systolic >= 160 should result in STAGE_2_HBP diagnosis', () => {
      const result = BloodPressure('Jane Smith', 40, 139, 125);
      expect(result).toBe('STAGE_2_HBP');
    });

    test('Systolic < 160 should result in STAGE_1_HBP diagnosis', () => {
      const result = BloodPressure('Alice', 50, 177, 93);
      expect(result).toBe('STAGE_1_HBP');
    });

    test('Systolic < 140 should result in PREHYPERTENSION diagnosis', () => {
      const result = BloodPressure('Bob', 60, 140, 84);
      expect(result).toBe('PREHYPERTENSION');
    });

    test('Systolic <= 120 should result in NORMAL diagnosis', () => {
      const result = BloodPressure('Eve', 25, 149, 77);
      expect(result).toBe('NORMAL');
    });
  });
});
