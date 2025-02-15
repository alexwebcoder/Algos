const ctx = document.getElementById('bloodPressureChart').getContext('2d');

const bloodPressureChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
		datasets: [{
				label: 'Systolic BP',
				data: [120, 118, 160, 118, 150, 160],
				borderColor: 'rgba(255, 99, 132, 1)',
				tension: 0.1,
				fill: false
			},
			{
				label: 'Diastolic BP',
				data: [110, 62, 110, 90, 70, 78],
				borderColor: 'rgba(54, 162, 235, 1)',
				tension: 0.1,
				fill: false
			}
		]
	},
	options: {
		responsive: true,
		scales: {
			y: {
				beginAtZero: false,
				suggestedMin: 50,
				suggestedMax: 200,
			}
		},
		plugins: {
			// Custom plugin to display the latest two readings
			legend: {
				display: false
			},
			annotation: {
				annotations: {
					latestSystolic: {
						type: 'label',
						xValue: 'Mar 2024',
						yValue: 160,
						backgroundColor: 'rgba(255, 99, 132, 0.2)',
						font: {
							size: 14,
							weight: 'bold'
						},
						content: `Systolic: 160`,
						position: 'right'
					},
					latestDiastolic: {
						type: 'label',
						xValue: 'Mar 2024',
						yValue: 80,
						backgroundColor: 'rgba(54, 162, 235, 0.2)',
						font: {
							size: 14,
							weight: 'bold'
						},
						content: `Diastolic: 80`,
						position: 'right'
					}
				}
			}
		}
	}
});