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

interface IFormInputs {
  email: string;
}

export const Home = () => {
  const form = useForm<FieldValues>({
    mode: "all",
    defaultValues: { email: "" },
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        mt: "64px",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        rowGap: 1,
        gridColumn: "span 12",
      }}
    >
      {/* primeiro box */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          // columnGap: 2,
          gridColumn: "span 12",
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
            gridColumn: "span 12",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
        <Typography
          variant="h5"
          sx={{
            width: "590px",
            color: "#5D6670",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "32px",
            gridColumn: "span 12",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Typography>

        <Button
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
            // display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gridColumn: "span 1",
          }}
        >
          SIGN UP {<ArrowForwardIcon sx={{ width: "16px", height: "24px" }} />}
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            gridColumn: "span 12",
          }}
        >
          <TextBlock name={"Cryptos"} />
          <TextBlock name={"NFTs"} />
          <TextBlock name={"Games"} />
        </Box>
        <CarouselImage />
        <img src={design} alt="" style={{ gridColumn: "span 12" }} />
      </Box>
      {/* segundo box */}
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F7F7F7 100%)",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          gridColumn: "span 12",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            rowGap: 1,
            gridColumn: "span 10",
            gap: "10px",
            ml: 5,
          }}
        >
          <CardComponent
            image={card1}
            title="For your company"
            subtitle="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            sx={{ gridColumn: "span 2" }}
          />
          <CardComponent
            image={card2}
            title="For your company"
            subtitle="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            sx={{ gridColumn: "span 2" }}
          />
          <CardComponent
            image={card3}
            title="For your company"
            subtitle="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            sx={{ gridColumn: "span 2" }}
          />
          <CardComponent
            image={card4}
            title="For your company"
            subtitle="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            sx={{ gridColumn: "span 2" }}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            rowGap: 1,
            gridColumn: "span 12",
          }}
        >
          <Typography
            sx={{
              color: "#FBAB34",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "32px",
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
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </Typography>

          <Button
            variant="contained"
            sx={{
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
      <Box sx={{ background: "#fff" }}>
        <TableComponent />
      </Box>
      {/* quarto box */}
      <Box
        sx={{
          fill: "linear-gradient(180deg, rgba(251, 171, 52, 0.20) 0%, rgba(251, 171, 52, 0.00) 100%)",
          background: "#FBAB34",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
            <InputRHF control={control} name={"email"} placeholder="Email" />

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
      </Box>
      <footer
        style={{
          background: "#fff",
          boxShadow: "0px -4px 8px 0px rgba(77, 77, 77, 0.10)",
        }}
      >
        <Typography
          sx={{
            color: "#5D6670",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16px",
          }}
        >
          Copyright © 2022 - All rights reserved
        </Typography>
        <img src={logoFooter} alt="" />
      </footer>
    </Box>
  );
};
