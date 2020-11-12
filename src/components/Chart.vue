<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: ['data', 'label'],
  data() {
    return {
      gradient: null,
      // gradient2: null
    };
  },
  mounted() {
    this.renderChart(
      {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: this.label,
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#FF5964", "#FFE74C", "#6bf178", '#35a7ff', '#75dddd', '#aa3e98', '#9297c4', '#04151f', '#183a37', '#efd6ac', '#c44900', '#432534', '#ffe0b5', '#ede580', '#a4af69', '#4c2719', '#d35269', '#1a281f', '#c7b2c5'],
            data: this.data
          }
        ]
      },
      { 
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    );
  }
};
</script>
