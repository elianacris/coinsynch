import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { List, Tooltip } from "@mui/material";

import image1 from "../../../../assets/imageDashboard/image1.svg";
import image2 from "../../../../assets/imageDashboard/image2.svg";
import image3 from "../../../../assets/imageDashboard/image3.svg";
import image4 from "../../../../assets/imageDashboard/image4.svg";
import "./style.css";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  marginTop: 10,
  width: drawerWidth,
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
interface Props {
  name: string;
  icon: JSX.Element;
}
const menu: Props[] = [
  { name: "Lorem Ipsum", icon: <img src={image1} alt="" /> },
  { name: "Lorem Ipsum", icon: <img src={image2} alt="" /> },
  { name: "Lorem Ipsum", icon: <img src={image3} alt="" /> },
  { name: "Lorem Ipsum", icon: <img src={image4} alt="" /> },
];

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          ".MuiPaper-root": {
            borderTop: " 1px solid var(--secondary-300, #E0DEEA)",
            borderBottom: "1px solid var(--secondary-300, #E0DEEA)",
            background: "#ffffff",
            marginTop: "65px",
            marginBottom: "60px",
          },
        }}
      >
        <List>
          <ListItem sx={{ display: "flex", flexDirection: "row" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "center",
                // mt: 10,
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "32px",
              }}
            >
              {menu.map((item, index) => (
                <ListItemIcon
                  key={index}
                  sx={{
                    minWidth: 0,
                    mr: "auto",
                    justifyContent: "center",
                  }}
                >
                  <Tooltip placement="right-end" title={item.name}>
                    {item.icon}
                  </Tooltip>
                </ListItemIcon>
              ))}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
