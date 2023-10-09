import { FieldValues, useForm } from "react-hook-form";
import { Box } from "@mui/material";

import ModalComponent from ".";
import InputRHF from "../RHF/InputRHF";
import { signInFormArgs } from "../../pages/Home/validators/signInSchema";
import "./style.css";
import MenuItemMap from "../ArrayIterators/MenuItemMap";
import { CryptoType } from "src/models/crypto-model";
import image1 from "../../assets/imageTable/image1.svg";
import image2 from "../../assets/imageTable/image2.svg";
import image3 from "../../assets/imageTable/image3.svg";
import image4 from "../../assets/imageTable/image4.svg";

const cryptoTypes: CryptoType[] = [
  { img: <img src={image1} alt="" />, label: "Bitcoin BTC" },
  { img: <img src={image2} alt="" />, label: "Solana SOL" },
  { img: <img src={image3} alt="" />, label: "Cardano ADA" },
  { img: <img src={image4} alt="" />, label: "Ethereum ETH" },
];

interface Props {
  open?: boolean;
  handleClose?: () => void;
}


export const ModalAddCrypto = ({ open, handleClose }: Props) => {
  const form = useForm<FieldValues | any>(signInFormArgs);

  const { control, handleSubmit } = form;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <ModalComponent open={open} handleClose={handleClose}>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "32px",
          p: "32px",
        }}
      >
       
        <InputRHF
          control={control}
          name="crypto"
          value=""
          select
          sx={{
            minHeight: "75px",
            gridColumn: "span 11",
          }}
        >
          {cryptoTypes.map(MenuItemMap)}
        </InputRHF>
        <InputRHF name="value" control={control} type="number" />
      </Box>
    </ModalComponent>
  );
};
