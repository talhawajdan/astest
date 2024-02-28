import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";
import { Grid, Paper } from "@mui/material";
import ReactApexChart from "react-apexcharts";

function DebitAndCreditChart() {
  const series = [
    {
      name: "Debit",
      data: [44, 55, 57, 56, 61, 58, 63],
    },
    {
      name: "Credit",
      data: [76, 85, 101, 98, 87, 105, 91],
    },
  ];
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    colors: ["#1A16F3", "#FCAA0B"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["sat", "sun", "mon", "Tue", "Wed", "Thu", "Fri"],
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {},
    },
  };

  return (
    <Paper variant="elevation" elevation={1}>
      <Grid container>
        <Grid xs={12} item>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={300}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DebitAndCreditChart;
