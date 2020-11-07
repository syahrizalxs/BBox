<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      // gradient2: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    // this.gradient2 = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(0,119,181, 1)");
    this.gradient.addColorStop(0.5, "rgba(0,119,181, 0.5)");
    this.gradient.addColorStop(1, "rgba(0,119,181, 0)");

    let ctx = document.getElementById('line-chart')
    ctx.style.backgroundColor = 'rgba(255, 255, 255, S255)';

    // this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    // this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    // this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

    this.renderChart(
      {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul"
        ],
        datasets: [
          {
            label: "Data One",
            borderColor: "#0077B5",
            pointBackgroundColor: "#0077B5",
            borderWidth: 0,
            pointBorderColor: "#0077B5",
            backgroundColor: this.gradient,
            data: [40, 39, 90, 40, 39, 30, 40]
          }
          // {
          //   label: "Data Two",
          //   borderColor: "#05CBE1",
          //   pointBackgroundColor: "white",
          //   pointBorderColor: "white",
          //   borderWidth: 1,
          //   backgroundColor: this.gradient2,
          //   data: [60, 55, 32, 10, 2, 12, 53]
          // }
        ]
      },
      { 
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: false,
            gridLines: {
              display:false
            }
          }],
          yAxes: [{
            display: false, 
            gridLines: {
              display:false
            }   
          }]
        },
      }
    );
  }
};
</script>
