import { ReactNode, useState } from "react";
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
          Adquira Bitcoins e Invista no Futuro
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
          Bem-vindo ao nosso portal seguro e confiável para adquirir Bitcoins.
          Descubra a liberdade financeira e o potencial de crescimento ao
          investir na moeda digital mais valiosa do mundo.
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
          SIGN UP {<ArrowForwardIcon sx={{ width: "16px", height: "24px" }} />}
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
            Nesta plataforma, queremos guiar você através da fascinante jornada
            das criptomoedas
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
            Pronto para explorar o futuro das finanças?
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
            Seja bem-vindo à era das moedas digitais, onde a inovação encontra a
            segurança. Os Bitcoins oferecem a promessa de transações mais
            rápidas, baixas taxas e a eliminação de intermediários. É a sua
            chance de fazer parte de uma mudança transformadora que moldará o
            futuro financeiro.
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
            Sign up Now
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
          fill: "linear-gradient(180deg, rgba(251, 171, 52, 0.20) 0%, rgba(251, 171, 52, 0.00) 100%)",
          background: "#FBAB34",
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
            Invista no Futuro
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
            Adquira Bitcoins
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
            Navegue por nosso site para aprender mais sobre as Bitcoins, desde
            conceitos básicos até estratégias avançadas de investimento. Este é
            o seu ponto de partida para a revolução digital do dinheiro. Estamos
            aqui para responder suas perguntas, fornecer orientações e ajudá-lo
            a se tornar parte desse emocionante movimento.
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
