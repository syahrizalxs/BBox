<script>
import { Bar } from 'vue-chartjs'

export default {
	extends: Bar,
	props: ['data', 'label'],
	data() {
		return {
			gradient: null,
			// gradient2: null
		}
	},
	mounted() {
		this.renderChart(
			{
				hoverBackgroundColor: 'red',
				hoverBorderWidth: 10,
				labels: this.label,
				datasets: [
					{
						label: 'Jumlah',
						backgroundColor: ['#FF5964', '#FFE74C', '#6bf178', '#35a7ff', '#75dddd', '#aa3e98', '#9297c4', '#04151f', '#183a37', '#efd6ac', '#c44900', '#432534', '#ffe0b5', '#ede580', '#a4af69', '#4c2719', '#d35269', '#1a281f', '#c7b2c5'],
						data: this.data,
					},
				],
			},
			{
				title: {
					fontSize: 24,
					fontFamily: "'Helvetica Neue'",
				},
				legend: {
					display: false,
				},
				scales: {
					yAxes: [{
						ticks: {
							precision: 0,
							suggestedMax: 10,
							stepSize: 1,
							beginAtZero: true,
						},
					}],
				},
				responsive: true,
			},
		)
	},
}
</script>
