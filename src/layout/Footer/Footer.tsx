import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logoFooter from "../../assets/logoFooter.svg";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        background: "#fff",
        boxShadow: "0px -4px 8px 0px rgba(77, 77, 77, 0.10)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent:
            location.pathname === "/dashboard" ? "center" : "space-around",
        }}
      >
        <Typography
          sx={{
            color: "#5D6670",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16px",
            textAlign: "center",
            justifyContent: "center",
            display: {
              xs: location.pathname === "/" && "none",
              md: "flex",
            },
          }}
        >
          Copyright © 2022 - All rights reserved
        </Typography>
        {location.pathname === "/" && (
          <img src={logoFooter} alt="" style={{ gridColumn: "span 6" }} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
