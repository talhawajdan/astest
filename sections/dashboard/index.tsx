import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
//icons
import NumberOfInvestmentsIcon from "@/assets/icons/dashboard-main/number-of-investments-icon";
import TotalInvestedAmountIcon from "@/assets/icons/dashboard-main/total-invested-amount-icon";
import DebitAndCreditChart from "./debit-and-credit-chart";
import MonthlyRevenueChart from "./monthly-revenue-chart";
import ContactFrom from "./contact-from";
import TrendingTable from "./trending-table";

function DashboardSection() {
  return (
    <>
      {/* cards section */}
      <Grid container px={2} gap={3} mt={2}>
        <Grid
          xs={12}
          md={5.5}
          lg={3.7}
          xl={2.5}
          flexWrap={"wrap"}
          justifyContent={"center"}
          item
          px={2}
        >
          <Paper variant="elevation" elevation={2} sx={Style.paperMain}>
            <Box display="flex" alignItems={"center"} gap={2}>
              <Box sx={Style.iconWapperStyles("#DCFAF8")}>
                <TotalInvestedAmountIcon />
              </Box>
              <Box mt={3} display="flex" flexDirection={"column"} gap={0.5}>
                <Typography sx={Style.TypographyHeaderStyle}>
                  Total Invested Amount
                </Typography>
                <Typography sx={Style.TypographySubtitleStyle}>
                  $150,000
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid
          xs={12}
          md={5.5}
          lg={3.7}
          xl={2.5}
          flexWrap={"wrap"}
          justifyContent={"center"}
          item
          px={2}
        >
          <Paper variant="elevation" elevation={2} sx={Style.paperMain}>
            <Box display="flex" alignItems={"center"} gap={2}>
              <Box sx={Style.iconWapperStyles("#FFE0EB")}>
                <NumberOfInvestmentsIcon />
              </Box>
              <Box mt={3} display="flex" flexDirection={"column"} gap={0.5}>
                <Typography sx={Style.TypographyHeaderStyle}>
                  Number of Investments
                </Typography>
                <Typography sx={Style.TypographySubtitleStyle}>
                  1,250
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid
          xs={12}
          md={5.5}
          lg={3.7}
          xl={2.5}
          flexWrap={"wrap"}
          justifyContent={"center"}
          item
          px={2}
        >
          <Paper variant="elevation" elevation={2} sx={Style.paperMain}>
            <Box display="flex" alignItems={"center"} gap={2}>
              <Box sx={Style.iconWapperStyles("#E7EDFF")}>
                <TotalInvestedAmountIcon />
              </Box>
              <Box mt={3} display="flex" flexDirection={"column"} gap={0.5}>
                <Typography sx={Style.TypographyHeaderStyle}>
                  Rate of Return
                </Typography>
                <Typography sx={Style.TypographySubtitleStyle}>
                  +5.80%
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container mt={2} px={2}>
        <Grid xs={12} lg={5} px={2} item>
          <Box my={2}>
            <Typography sx={Style.TypographyHeadingMainStyle}>
              Debit & Credit Overview
            </Typography>
          </Box>
          <DebitAndCreditChart />
        </Grid>
        <Grid xs={12} lg={7} px={2} item>
          <Box my={2}>
            <Typography sx={Style.TypographyHeadingMainStyle}>
              Monthly Revenue
            </Typography>
          </Box>
          <MonthlyRevenueChart />
        </Grid>
        <Grid xs={12} lg={5.5} item px={2}>
          <Box my={2}>
            <Typography sx={Style.TypographyHeadingMainStyle}>
              Contact Form
            </Typography>
          </Box>
          <ContactFrom />
        </Grid>
        <Grid xs={12} lg={6.5} item px={2}>
          <Box my={2}>
            <Typography sx={Style.TypographyHeadingMainStyle}>
              Trending Stock
            </Typography>
          </Box>
          <TrendingTable />
        </Grid>
      </Grid>
      {/* cards section */}
    </>
  );
}

export default DashboardSection;
// style for DashboardSection
const Style = {
  paperMain: {
    height: "100px",
    borderRadius: 4,
  },
  iconWapperStyles: (bgcolor: string) => ({
    bgcolor: bgcolor,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: 3,
    ml: 2,
  }),
  TypographyHeaderStyle: {
    color: "#718EBF",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14.52px",
  },
  TypographySubtitleStyle: {
    color: "#232323",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19.36spx",
  },
  TypographyHeadingMainStyle: {
    color: "#333B69",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "19.36spx",
  },
};
