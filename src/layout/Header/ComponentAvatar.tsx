import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";

interface Props {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  settings: string[];
  anchorElUser: null | HTMLElement;
}
export const ComponentAvatar = ({
  handleOpenUserMenu,
  handleCloseUserMenu,
  settings,
  anchorElUser,
}: Props) => {
  return (
    <Box sx={{ gridColumn: "span 10" }}>
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
            <LogoutIcon sx={{ color: "#8C8A97", mr: "5px" }} />
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
  );
};
