import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import * as ChartGeo from "chartjs-chart-geo";

function MapChart() {
  useEffect(() => {
    fetch("https://unpkg.com/us-atlas/states-10m.json")
      .then((res) => res.json())
      .then((us) => {
        const nation = ChartGeo.topojson.feature(us, us.objects.nation)
          .features[0];
        const states = ChartGeo.topojson.feature(
          us,
          us.objects.states
        ).features;
        // console.log("states", states);
        // console.log("feature", states.feature);

        const ctx = document.getElementById("mapChart").getContext("2d");
        new Chart(ctx, {
          type: "choropleth",
          data: {
            labels: states.map((state) => state.properties.name),
            datasets: [
              {
                label: "States",
                outline: nation,
                data: states.map((state) => ({
                  feature: state,
                  value: Math.random() * 10,
                })),
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              xy: {
                projection: "albersUsa",
              },
              color: {
                quantize: 5,
                legend: {
                  position: "bottom-right",
                  align: "bottom",
                },
              },
            },
          },
        });
      });
  }, []);

  return <canvas id="mapChart" />;
}

export default MapChart;
