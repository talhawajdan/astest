import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

function MonthlyRevenueChart() {
  const [data, setData] = useState<any>({
    series: [
      {
        name: "Desktops",
        data: [0, 10000, 20000, 30000, 40000],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      colors: ["#16DBCC"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
      },
    },
  });
  return (
    <Paper variant="elevation" elevation={1}>
      <Grid container>
        <Grid xs={12} item>
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="line"
            height={300}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MonthlyRevenueChart;
