document.querySelector(".jessica-taylor").addEventListener("click", function() {
	fetchPatientData();
});

document.querySelector(".show-info-btn").addEventListener("click", function() {
	fetchPatientData();
});

// Function to fetch and populate patient data
function fetchPatientData() {
	const endpoint = "https://fedskillstest.coalitiontechnologies.workers.dev/";

	const username = "coalition";
	const password = "skills-test";

	// Fetch API with Basic Authentication
	fetch(endpoint, {
			headers: {
				Authorization: `Basic ${btoa(`${username}:${password}`)}`,
			},
		})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => {
			const patient = data.find((p) => p.name === "Jessica Taylor");
			if (patient) {
				// Populate the profile details
				document.querySelector(".profile-photo").src = "./assets/images/patientDetailIcons/Layer%202.png";
				document.querySelector(".profile-photo").alt = "patient photo";
				document.querySelector(".patient-name").textContent = patient.name;
				document.querySelector(".dob-value").textContent = patient.date_of_birth;
				document.querySelector(".gender-value").textContent = patient.gender;
				document.querySelector(".contact-value").textContent = patient.phone_number;
				document.querySelector(".emergency-value").textContent = patient.emergency_contact;
				document.querySelector(".insurance-value").textContent = patient.insurance_type;

				const diagnosticList = patient.diagnostic_list;
				const diagnosticItems = document.querySelectorAll('.diagnostic-item');

				// Loop through the diagnostic list and update the divs
				diagnosticList.forEach((diagnosis, index) => {
					if (diagnosticItems[index]) {
						diagnosticItems[index].querySelector(".diagnostic-problem").textContent = diagnosis.name;
						diagnosticItems[index].querySelector(".diagnostic-description").textContent = diagnosis.description;
						diagnosticItems[index].querySelector(".diagnostic-status").textContent = diagnosis.status;
					}
				});

				const labResults = patient.lab_results;
				const labResultTitles = document.querySelectorAll(".lab-result-title");

				labResults.forEach((result, index) => {
					if (labResultTitles[index]) {
						labResultTitles[index].textContent = result;
					}

				});

				// Find the diagnosis history for March 2024
				const diagnosis = patient.diagnosis_history.find(
					(record) => record.month === "March" && record.year === 2024
				);

				if (diagnosis) {
					document.querySelector(".systolic-reading").textContent =
						diagnosis.blood_pressure.systolic.value;
					document.querySelector(".diastolic-reading").textContent =
						diagnosis.blood_pressure.diastolic.value;
					document.querySelector('.sys-levels').textContent =
						diagnosis.blood_pressure.systolic.levels;
					document.querySelector('.dia-levels').textContent =
						diagnosis.blood_pressure.diastolic.levels;
					document.querySelector('.resp-rate').textContent =
						diagnosis.respiratory_rate.value + ` bpm`;
					document.querySelector('.res-level').textContent =
						diagnosis.respiratory_rate.levels;

					document.querySelector('.temp').textContent =
						diagnosis.temperature.value + `°F`;
					document.querySelector('.temp-level').textContent =
						diagnosis.temperature.levels;

					document.querySelector('.heart').textContent =
						diagnosis.heart_rate.value + ` bpm`;
					document.querySelector('.heart-level').textContent =
						diagnosis.heart_rate.levels;
				} else {
					console.error("Diagnosis data for March 2024 not found!");
				}
			} else {
				console.error("Patient not found in the data.");
			}
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}