import Toolbar from "@mui/material/Toolbar";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../../../../assets/logo.png";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const settings = ["Logout"];

export default function Header() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.05)",
        backgroundColor: " #FFFFFF",
      }}
    >
      <Toolbar
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          gridColumn: "span 12",
          alignContent: "center",
        }}
      >
        <img src={logo} alt="" style={{ gridColumn: "span 10" }} />

        <Box sx={{ gridColumn: "span 2" }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
                width: "48px",
                display: "flex",
                gap: "8px",
                ":hover": { backgroundColor: "transparent" },
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                sx={{ width: "32px", height: "32px" }}
              />
              <Typography
                textAlign="center"
                sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "16px" }}
              >
                User
              </Typography>
              <KeyboardArrowDownIcon sx={{ color: "#ACABB7" }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "40px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <LogoutIcon sx={{ color: "#8C8A97", mr: '5px' }} />
                <Typography
                  sx={{
                    color: "#8C8A97",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "16px",
                  }}
                  textAlign="center"
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
