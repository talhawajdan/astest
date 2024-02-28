import React from "react";
// MUI IMPORTS
import {
  Box,
  Grid,
  Theme,
  useTheme,
  Typography,
  InputAdornment,
  InputBase,
  IconButton,
} from "@mui/material";

//ICONS
import SearchIcon from "@mui/icons-material/Search";
import SettingOutlineIcon from "@/assets/icons/top-navbar-icons/setting-outline-icon";
import NotificationBellIcon from "@/assets/icons/top-navbar-icons/notification-bell-icon";
import person from "@/assets/png/person.png";
//next imports
import Image from "next/image";

function TopNavBar(props: any) {
  const theme: any = useTheme();
  const { handleDrawer, leftopen } = props;
  return (
    <Box sx={Styles.mainBoxStyle(leftopen, theme)}>
      <Grid container>
        <Grid xs={12} item display="flex" alignItems="center" flexWrap={"wrap"}>
          <Typography
            onClick={handleDrawer}
            fontSize={"25px"}
            color={"#343C6A"}
            fontWeight={600}
          >
            Investments
          </Typography>
          <Box
            ml={"auto"}
            display={"flex"}
            alignItems={"center"}
            gap={3}
            flexWrap={"wrap"}
          >
            <Box
              sx={{
                bgcolor: "#F5F7FA",
                border: "none",
                borderRadius: 6,
              }}
            >
              <IconButton
                type="button"
                sx={{ p: "10px", maxWidth: 150 }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search for something"
                size="small"
                inputProps={{
                  sx: {
                    p: 1,
                  },
                }}
              />
            </Box>
            <IconButton sx={{ bgcolor: "#F5F7FA" }}>
              <SettingOutlineIcon />
            </IconButton>
            <IconButton sx={{ bgcolor: "#F5F7FA" }}>
              <NotificationBellIcon />
            </IconButton>
            <IconButton>
              <Image src={person} alt="person" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopNavBar;
//===============================================================================================
// TOPNAVBAR STYLE COMPONENTS

const Styles = {
  mainBoxStyle: (leftopen: boolean, theme: Theme) => ({
    width: {
      xs: "100%",
    },
    px: 1,
    py: 1,
    background: "#FFFF",
    zIndex: 1000,
    transition: theme.transitions.create("width", {
      duration: 400,
    }),
  }),
};
