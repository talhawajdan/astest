import { Box, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import NavbarList from "./navbar-list";
import { NavListData } from "./left-navbar.data";
//icons
import MenuIcon from "@mui/icons-material/Menu";
import LogoIcon from "@/assets/icons/logo-icon";
//=====================================================================================
// CONSTANTS

export const drawerWidth = "250px";
//============================================================
function LeftNavbar(props: any) {
  const theme: any = useTheme();
  const { open, handleDrawer } = props;
  const screenSizeHandler = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Drawer variant="permanent" open={open}>
      <Box sx={{ maxHeight: "100vh" }}>
        <DrawerHeader>
          <Box display="flex" justifyContent="center" alignItems="center">
            <LogoIcon sx={{ fontSize: 110, height: 40 }} />
            {screenSizeHandler && (
              <IconButton onClick={handleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
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
  background: "#ffff",
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
