import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import ClearIcon from "@mui/icons-material/Clear";
import useMediaQuery from "@mui/material/useMediaQuery";
import LogoIcon from "@/assets/icons/logo-icon";
import NavbarList from "./navbar-list";
import { NavListData } from "./left-navbar.data";

//=====================================================================================
// CONSTANTS

export const drawerWidth = 250;
//============================================================
function LeftNavbar(props: any) {
  const theme: any = useTheme();
  const { open, handleDrawer } = props;
  return (
    <Drawer variant="permanent" open={open}>
      <Box sx={{ maxHeight: "100vh" }}>
        <DrawerHeader>
          <Box>
            <LogoIcon sx={{ fontSize: 110, height: 40 }} />
          </Box>
        </DrawerHeader>

        {/* Left NavBar List Component  */}
        <Box mt={6}>
          {NavListData.map(({ label, icon, link }) => (
            <NavbarList pathname={""} link={link} Icon={icon} label={label} />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}

export default LeftNavbar;
//==================================================================
//LEFTNAVBAR STYLING COMPONENTS

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    // easing: theme.transitions.easing.sharp,
    duration: "0.4s",
  }),
  overflowX: "hidden",
  overflowy: "auto",
  height: "100%",
  zIndex: 5,
  background: "#ffff",
  "&::-webkit-scrollbar": {
    width: 4,
    height: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    // easing: theme.transitions.easing.sharp,
    duration: "0.4s",
  }),
  overflowX: "hidden",
  height: "100%",
  zIndex: 5,
  overflowy: "auto",
  "&::-webkit-scrollbar": {
    width: 4.5,
    height: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
  background: theme.palette.grey[800],
  width: `calc(${theme.spacing(0)} + -2px)`,
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(-1)} + -2px)`,
  },
});
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 0),
  marginTop: "9px",

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: "11px",
  [theme.breakpoints.down("sm")]: {
    flexShrink: 5,
  },

  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
