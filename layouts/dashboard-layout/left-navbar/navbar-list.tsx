import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";
//INTERFACES
interface INavBarListProps {
  open?: boolean;
  pathname: string;
  link: string;
  Icon: any;
  label: string;
}

function NavbarList(props: INavBarListProps) {
  const theme: any = useTheme();
  const { open, pathname, link, Icon, label } = props;
  return (
    <ListItem sx={Styles.mainListItem}>
      <Link style={Styles.linkStyle} href={link}>
        <ListItemIcon sx={Styles.ListItemIconStyle(theme)}>
          <Icon sx={Styles.iconStyles(pathname, link)} />
          <ListItemText
            disableTypography
            primary={label}
            sx={Styles.ListItemTextStyle(pathname, link, theme)}
          />
        </ListItemIcon>
      </Link>
    </ListItem>
  );
}

export default NavbarList;
//Styles for navbar lists
const Styles = {
  mainListItem: {
    px: 3,
    py: 2,
    "&:hover": {
      bgColor: "#ffff",
      "& .MuiListItemText-root": {
        color: "#1814F3",
      },
      "& .MuiSvgIcon-root": {
        color: "#1814F3",
      },
    },
  },
  linkStyle: {
    textDecoration: "none",
    width: "100%",
  },
  iconStyles: (pathname: string, link: string) => ({}),
  ListItemButtonStyle: (pathname: string, text: any, theme: Theme) => ({
    padding: "6px 22px",
    px: 2.1,
    py: 1,
    borderRadius: "6px",
    backgroundColor: pathname === text.link ? "#ffff" : "#ffff",
    "&:hover": {
      bgColor: "#ffff",
    },
  }),
  ListItemIconStyle: (theme: Theme) => ({
    minWidth: 0,
    justifyContent: "center",
    color: "#B1B1B1",
  }),
  ListItemTextStyle: (pathname: string, link: any, theme: Theme) => ({
    display: "flex",
    px: 3,
    color: "#B1B1B1",
    lineHeight: "19.36px",
    fontWeight: 500,
    fontSize: "16px",
  }),
};
