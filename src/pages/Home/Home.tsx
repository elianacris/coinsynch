import { ReactNode, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
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
import InputRHF from "../../components/RHF/InputRHF";
import CarouselImage from "../../components/Slider/CarouselImage";
import { ModalSignUp } from "../../components/Modais/ModalSignUp";

interface IFormInputs {
  email: string;
}

export const Home = () => {
  const [modalSignUp, setModalSignUp] = useState<ReactNode>("");

  const form = useForm<FieldValues>({
    mode: "all",
    defaultValues: { email: "" },
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  const handleOpenModalSignUp = () => {
    setModalSignUp(
      <ModalSignUp open={true} handleClose={() => setModalSignUp("")} />
    );
  };

  return (
    <Box
      sx={{
        mt: "120px",
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
          p: "24px",
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
          Lorem ipsum dolor sit amet, consectetur
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
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
        <Box sx={{ display: "flex", gap: "32px", mt: "84px" }}>
          <TextBlock name={"Cryptos"} />
          <TextBlock name={"NFTs"} />
          <TextBlock name={"Games"} />
        </Box>
      </Box>
      <CarouselImage />
      <Box sx={{ gridColumn: "span 2" }}>
        <img src={design} alt="" style={{ width: "1349px" }} />
      </Box>

      {/* segundo box */}
      <Box
        id="aboutUs"
        sx={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F7F7F7 100%)",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          // rowGap: 1,
          gridColumn: "span 12",
          ml: "112px ",
          mt: "120px",
          // columnGap: "24px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            rowGap: 1,
            gridColumn: "span 8",
            gap: "10px",
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
            display: "grid",
            gridTemplateColumns: "repeat(4)",
            gridColumn: "span 4",
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
            Lorem ipsum
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
            Lorem ipsum
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
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
              color: "white",
              ":hover": {
                backgroundColor: " #FBAB34",
                boxShadow: "none",
              },

              textTransform: "none",
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
            Lorem ipsum
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
            Lorem ipsum
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </Typography>
        </Box>
        <Box
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "grid",
            // gridTemplateColumns: "repeat(6 )",

            gridColumn: "span 6",
          }}
        >
          <InputRHF
            control={control}
            name={"email"}
            placeholder="Email"
            sx={{
              background: "#fff",
              borderRadius: "5px",
            }}
          />

          <Button
            variant="contained"
            sx={{
              borderRadius: "32px",
              minWidth: "384px",
              p: "14px 24px",
              height: "48px",
              gap: "10px",
              color: "white",
              boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.10)",
              ":hover": {
                backgroundColor: " #FBAB34",
                boxShadow: "none",
              },
              textTransform: "none",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <footer
        style={{
          background: "#fff",
          boxShadow: "0px -4px 8px 0px rgba(77, 77, 77, 0.10)",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          // rowGap: 1,
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
