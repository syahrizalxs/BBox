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
            backgroundColor: ["#F2994A", "#27AE60", "#EB5757"],
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
