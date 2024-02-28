import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
//icons
import NumberOfInvestmentsIcon from "@/assets/icons/dashboad-main/number-of-investments-icon";
import TotalInvestedAmountIcon from "@/assets/icons/dashboad-main/total-invested-amount-icon";

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
  cardWapper: () => ({}),
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
};
