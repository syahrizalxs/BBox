<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data() {
    return {
      gradient: null,
      // gradient2: null
    };
  },
  mounted() {
    // this.gradient = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);
    // // this.gradient2 = this.$refs.canvas
    // //   .getContext("2d")
    // //   .createLinearGradient(0, 0, 0, 450);

    // this.gradient.addColorStop(0, "rgba(0,119,181, 1)");
    // this.gradient.addColorStop(0.5, "rgba(0,119,181, 0.5)");
    // this.gradient.addColorStop(1, "rgba(0,119,181, 0)");

    // let ctx = document.getElementById('line-chart')
    // ctx.style.backgroundColor = 'rgba(255, 255, 255, S255)';

    // this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    // this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    // this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

    this.renderChart(
      {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["On Progress", "Complete", "Rejected"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#00D8FF", "#41B883", "#E46651"],
            data: [1, 10, 5]
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
