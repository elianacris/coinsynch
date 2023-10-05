import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { TextBlock } from "../../components/TextBlock";
import { CardComponent } from "../../components/Card/CardComponent";
import TableComponent from "../../components/Table/Table";
import design from "../../assets/design.png";
import card1 from "../../assets/imageCards/card1.svg";
import card2 from "../../assets/imageCards/card2.svg";
import card3 from "../../assets/imageCards/card3.svg";
import card4 from "../../assets/imageCards/card4.svg";
import logoFooter from "../../assets/logoFooter.svg";
import CarouselImage from "../../components/Slider/CarouselImage";
import { ModalSignUp } from "../../components/Modais/ModalSignUp";
import Form from "./components/Form";

export const Home = () => {
  const { t } = useTranslation();
  const [modalSignUp, setModalSignUp] = useState<ReactNode>("");
  const handleOpenModalSignUp = () => {
    setModalSignUp(
      <ModalSignUp open={true} handleClose={() => setModalSignUp("")} />
    );
  };

  return (
    <Box
      sx={{
        mt: "80px",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        rowGap: 1,
        gridColumn: "span 12",
      }}
    >
      {modalSignUp && modalSignUp}
      {/* primeiro box */}
      <Box
        id="home"
        sx={{
          ml: "112px ",
          gridColumn: "span 6",
        }}
      >
        <Typography
          sx={{
            width: "590px",
            color: "#FBAB34",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "56px",
            letterSpacing: "-0. 48px",
            gridColumn: "span 1",
          }}
        >
          {t("home.title")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            width: "550px",
            color: "#5D6670",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "32px",
            gridColumn: "span 6",
            mt: "24px",
          }}
        >
          {t("home.description")}
        </Typography>

        <Button
          onClick={handleOpenModalSignUp}
          variant="contained"
          sx={{
            borderRadius: "32px",
            minWidth: "278px",
            p: "14px 24px",
            height: "48px",
            gap: "10px",
            color: "white",
            ":hover": {
              backgroundColor: " #FBAB34",
              boxShadow: "none",
            },
            mt: "32px",
            gridColumn: "span 1",
          }}
        >
          {t("home.sign.up")}
          {<ArrowForwardIcon sx={{ width: "16px", height: "24px" }} />}
        </Button>
        <Box sx={{ display: "flex", gap: "32px", mt: "20px", mb: 7 }}>
          <TextBlock name={"Cryptos"} />
          <TextBlock name={"NFTs"} />
          <TextBlock name={"Games"} />
        </Box>
      </Box>
      <CarouselImage />

      <Box sx={{ gridColumn: "span 2", mt: "-100px" }}>
        <img src={design} alt="" style={{ width: "1349px", zIndex: 500 }} />
      </Box>

      {/* segundo box */}
      <Box
        id="aboutUs"
        sx={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F7F7F7 100%)",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridColumn: "span 12",
          p: "32px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            rowGap: 1,
            gridColumn: "span 8",
            gap: "12px",
          }}
        >
          <CardComponent
            image={card1}
            title="For your company"
            subtitle="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            sx={{ gridColumn: "span 3" }}
          />
          <CardComponent
            image={card2}
            title="For your company"
            subtitle="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            sx={{ gridColumn: "span 3" }}
          />
          <CardComponent
            image={card3}
            title="For your company"
            subtitle="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            sx={{ gridColumn: "span 3" }}
          />
          <CardComponent
            image={card4}
            title="For your company"
            subtitle="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            sx={{ gridColumn: "span 3" }}
          />
        </Box>
        <Box
          sx={{
            gridColumn: "span 4",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifyItems: "center",
            gap: "24px",
          }}
        >
          <Typography
            sx={{
              color: "#FBAB34",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "32px",
              gridColumn: "span 1",
            }}
          >
            {t("about.title")}
          </Typography>

          <Typography
            sx={{
              color: "#5D6670",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "48px",
              letterSpacing: "-0.4px",
              gridColumn: "span 1",
            }}
          >
            {t("about.subtitle")}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              width: "406px",
              color: "#5D6670",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              gridColumn: "span 1",
            }}
          >
            {t("about.description")}
          </Typography>

          <Button
            onClick={handleOpenModalSignUp}
            variant="contained"
            sx={{
              gridColumn: "span 1",
              borderRadius: "32px",
              minWidth: "176px",
              p: "14px 24px",
              height: "48px",
              gap: "10px",
              textTransform: "none",
              color: "white",
              ":hover": {
                backgroundColor: " #FBAB34",
                boxShadow: "none",
              },
            }}
          >
            {t("about.sign.up")}
          </Button>
        </Box>
      </Box>
      {/* terceiro box */}
      <Box
        id="topCryptos"
        sx={{
          background: "#fff",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          gridColumn: "span 12",
          p: "24px",
        }}
      >
        <TableComponent />
      </Box>
      {/* quarto box */}
      <Box
        sx={{
          background: "  linear-gradient(to right, #FBAB34, #f0821c)",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          gridColumn: "span 12",
          p: "24px",
        }}
      >
        <Box sx={{ gridColumn: "span 6" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "32px",
            }}
          >
            {t("contact.title")}
          </Typography>

          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "48px",
              letterSpacing: "-0.4px",
            }}
          >
            {t("contact.subtitle")}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              width: "406px",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            {t("contact.description")}
          </Typography>
        </Box>
        <Box sx={{ gridColumn: "span 6" }}>
          <Form />
        </Box>
      </Box>
      <footer
        style={{
          background: "#fff",
          boxShadow: "0px -4px 8px 0px rgba(77, 77, 77, 0.10)",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridColumn: "span 12",
          padding: "12px ",
          marginTop: "-10px",
        }}
      >
        <Typography
          sx={{
            color: "#5D6670",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16px",
            gridColumn: "span 6",
          }}
        >
          Copyright © 2022 - All rights reserved
        </Typography>
        <img src={logoFooter} alt="" style={{ gridColumn: "span 6" }} />
      </footer>
    </Box>
  );
};
