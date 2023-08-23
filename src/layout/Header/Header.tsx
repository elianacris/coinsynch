import { ReactNode, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

import logo from "../../assets/logo.png";
import CarouselText from "../../components/Slider/CarouselText";
import { ModalSignUp } from "../../components/Modais/ModalSignUp";
import { ModalSignIn } from "../../components/Modais/ModalSignIn";
import { ComponentAvatar } from "../../layout/Header/ComponentAvatar";

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
  const [modalSignUp, setModalSignUp] = useState<ReactNode>("");
  const [modalSignIn, setModalSignIn] = useState<ReactNode>("");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenModalSignUp = () => {
    setModalSignUp(
      <ModalSignUp open={true} handleClose={() => setModalSignUp("")} />
    );
  };
  const handleOpenModalSignIn = () => {
    setModalSignIn(
      <ModalSignIn open={true} handleClose={() => setModalSignIn("")} />
    );
  };

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
        boxShadow: "none",
        backgroundColor: " #FFFFFF",
      }}
    >
      {modalSignUp && modalSignUp}
      {modalSignIn && modalSignIn}

      <Toolbar
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          gridColumn: "span 12",
          justifyItems: "center",
          alignContent: "center",
        }}
      >
        <img src={logo} alt="" style={{ gridColumn: "span 2" }} />
        <Link
          underline="none"
          href="aboutUs"
          sx={{
            fontFamily: "Roboto",
            gridColumn: "span 1",
            color: "#5D6670",
            height: "30px",
            fontWeight: 400,
            fontSize: "14px",
            cursor: "pointer",
            ":hover": {
              color: "#5D6670",
            },
          }}
        >
          About us
        </Link>
        <Link
          underline="none"
          href="about"
          sx={{
            fontFamily: "Roboto",
            gridColumn: "span 1",
            color: "#5D6670",
            height: "30px",
            fontWeight: 400,
            fontSize: "14px",
            cursor: "pointer",
            ":hover": {
              color: "#5D6670",
            },
          }}
        >
          Top Cryptos
        </Link>

        <CarouselText />

        <ComponentAvatar
          anchorElUser={anchorElUser}
          settings={settings}
          handleCloseUserMenu={handleCloseUserMenu}
          handleOpenUserMenu={handleOpenUserMenu}
        />

        <Button
          onClick={handleOpenModalSignIn}
          variant="text"
          sx={{
            gridColumn: "span 2",
            textTransform: "none",
            color: "#5D6670",
            height: "30px",
            ":hover": {
              backgroundColor: " #Ffffff",
              boxShadow: "none",
            },
          }}
        >
          Sign in
        </Button>

        <Button
          onClick={handleOpenModalSignUp}
          variant="contained"
          sx={{
            gridColumn: "span 2",
            textTransform: "none",
            color: "#fff",
            padding: "8px 16px",
            backgroundColor: " #FBAB34",
            borderRadius: "32px",
            boxShadow: "none",
            ":hover": {
              backgroundColor: " #FBAB34",
              boxShadow: "none",
            },
          }}
        >
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
