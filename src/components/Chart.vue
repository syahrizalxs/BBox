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
            backgroundColor: ["#FF5964", "#FFE74C", "#6bf178", '#35a7ff', '#75dddd', '#aa3e98', '#9297c4'],
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
