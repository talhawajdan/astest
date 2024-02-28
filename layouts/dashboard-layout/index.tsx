import { useEffect, useState } from "react";
// @mui
import { Box, useMediaQuery, useTheme } from "@mui/material";
// components
import LeftNavbar from "./left-navbar";

function DashboardLayout({ children, ...other }: any) {
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("lg"));

  const screenSizeHandler = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(screenSizeHandler ? true : true);

  const handleDrawer = () => (open ? setOpen(true) : setOpen(true));

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={styles.mainBoxStyles}>
        {/* leftnavbar */}
        <LeftNavbar handleDrawer={handleDrawer} open={open} />
        <Box
          className="parenttop"
          sx={styles.parentChildrenStyles(theme, open)}
        >
          {/* <Topnavbar leftopen={open} handleDrawer={handleDrawer} /> */}
          <Box className="allset" sx={styles.childrenStyles(theme)}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
// Styles for main dashboard layout
const styles = {
  mainBoxStyles: {
    display: "flex",
    position: "relative",
    width: "100%",
  },
  parentChildrenStyles: (theme: any, open: boolean) => ({
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("xl")]: {
      transition: theme.transitions.create("width", {
        duration: "0.4s",
      }),
      width: open === true ? "calc(100% - 290px)" : "calc(100% - 80px)",
    },
  }),

  childrenStyles: (theme: any) => ({
    minHeight: "100vh",
  }),
};
