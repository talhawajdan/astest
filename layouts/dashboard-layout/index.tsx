import { useEffect, useState } from "react";
// @mui
import { Box, useMediaQuery, useTheme } from "@mui/material";
// components
import LeftNavbar from "./left-navbar";
import TopNavBar from "./top-navbar";

function DashboardLayout({ children, ...other }: any) {
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("lg"));

  const screenSizeHandler = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(screenSizeHandler ? true : false);

  const handleDrawer = () => (open ? setOpen(false) : setOpen(true));
  useEffect(() => {
    if (screenSizeHandler) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [screenSizeHandler]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={styles.mainBoxStyles}>
        {/* leftnavbar */}
        <LeftNavbar handleDrawer={handleDrawer} open={open} />
        <Box sx={styles.parentChildrenStyles(theme, open)}>
          <TopNavBar leftopen={open} handleDrawer={handleDrawer} />
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
      width: open === true ? "calc(100% - 270px)" : "100%",
    },
  }),

  childrenStyles: (theme: any) => ({
    minHeight: "100vh",
  }),
};
