import { MouseEvent, ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

import logo from "../../assets/logo.png";
import CarouselText from "../../components/Slider/CarouselText";
import { ModalSignUp } from "../../components/Modais/ModalSignUp";
import { ModalSignIn } from "../../components/Modais/ModalSignIn";
import { ComponentAvatar } from "../../layout/Header/ComponentAvatar";
import ButtonTranslation from "../../components/Buttons/ButtonTranslation/ButtonTranslation";
import { goToDashboard, goToHome } from "../../routes/coordinator";

const settings = ["Logout"];

function ResponsiveAppBar() {
  const location = useLocation();
  const history = useNavigate();
  const { t } = useTranslation();
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
      <ModalSignIn
        open={true}
        handleClose={() => setModalSignIn("")}
        goTo={goToDashboard}
      />
    );
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <AppBar
      id="home"
      position="static"
      sx={{
        boxShadow:
          location.pathname === "/"
            ? "none"
            : "0px 4px 8px 0px rgba(77, 77, 77, 0.10)",
        backgroundColor: " #FFFFFF",
      }}
    >
      {modalSignUp && modalSignUp}
      {modalSignIn && modalSignIn}
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between ",
            alignContent: "center",
            flexWrap: "wrap ",
          }}
        >
          <IconButton
            onClick={() =>
              location.pathname === "/"
                ? scrollToSection("home")
                : goToHome(history)
            }
          >
            <img src={logo} alt="" />
          </IconButton>

          {location.pathname === "/" && (
            <>
              <Link
                underline="none"
                onClick={() => scrollToSection("aboutUs")}
                sx={{
                  mt: "15px",
                  fontFamily: "Roboto",
                  color: "#5D6670",
                  height: "30px",
                  fontWeight: 400,
                  fontSize: "14px",
                  cursor: "pointer",
                  lineHeight: "16px",
                  ":hover": {
                    color: "#5D6670",
                  },
                }}
              >
                {t("header.about")}
              </Link>
              <Link
                underline="none"
                onClick={() => scrollToSection("topCryptos")}
                sx={{
                  mt: "15px",
                  fontFamily: "Roboto",
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
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
              >
                <CarouselText />
              </Box>
            </>
          )}
          {location.pathname === "/dashboard" && (
            <ComponentAvatar
              anchorElUser={anchorElUser}
              settings={settings}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
            />
          )}
          {location.pathname === "/" && (
            <>
              <Button
                onClick={handleOpenModalSignIn}
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#5D6670",
                  height: "30px",
                  ":hover": {
                    backgroundColor: " #Ffffff",
                    boxShadow: "none",
                  },
                }}
              >
                {t("button.sign.in")}
              </Button>

              <Button
                onClick={handleOpenModalSignUp}
                variant="contained"
                sx={{
                  ml: 2,
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
            </>
          )}
          <Box sx={{ ml: 5 }}>
            <ButtonTranslation />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
