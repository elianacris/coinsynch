import { ReactNode, useState } from "react";

import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";

import image1 from "../../../../assets/imageTable/image1.svg";
import image2 from "../../../../assets/imageTable/image2.svg";
import image3 from "../../../../assets/imageTable/image3.svg";
import image4 from "../../../../assets/imageTable/image4.svg";
import imageTable from "../../../../assets/table.svg";
import { ColumnCrypto } from "../../../../components/Table/ColumnCrypto";
import { ButtonTable } from "./ButtonTable";
import { ModalAddCrypto } from "../../../../components/Modais/ModalAddCrypto";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: "#8C8A97",
    border: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    border: "none",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F6F6",
    border: "none",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: "none",
  },
}));

interface Data {
  id: number;
  crypto: ReactNode;
  holdings: string;
  change: string;
  trade: ReactNode;
}
const column = [
  {
    id: 1,
    crypto: <ColumnCrypto title="Bitcoin BTC" image={image1} />,
    holdings: "US$ 25.499,52",
    change: "+5,65%",
    trade: <ButtonTable />,
  },
  {
    id: 2,
    crypto: <ColumnCrypto title="Ethereum ETH" image={image4} />,
    holdings: "US$ 15.499,52",
    change: "-5,65%",
    trade: <ButtonTable />,
  },
  {
    id: 3,
    crypto: <ColumnCrypto title="Cardano ADA" image={image3} />,
    holdings: "US$ 5.499,52",
    change: "+5,65%",
    trade: <ButtonTable />,
  },
  {
    id: 4,
    crypto: <ColumnCrypto title="Solana SOL" image={image2} />,
    holdings: "US$ 2.499,52",
    change: "-5,65%",
    trade: <ButtonTable />,
  },
];

export default function TableDasboard() {
  const [rows, setRows] = useState<Data[]>(column);
  const [openModal, setOpenModal] = useState<ReactNode>("");

  // const handleAddRow = () => {
  //   const newRow = {
  //     id: rows.length + 1,
  //     crypto: "",
  //     holdings: "",
  //     change: "",
  //     trade: "",
  //   };
  //   setRows([...rows, newRow]);
  // };

  const handleOpenModal = () => {
    setOpenModal(
      <ModalAddCrypto open={true} handleClose={() => setOpenModal("")} />
    );
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        rowGap: 1,
        gridColumn: "span 12",
        p: "32px",
      }}
    >
      {openModal && openModal}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gridColumn: "span 12",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <img src={imageTable} alt={""} />
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "40px",
              color: "var(--text-base, #5D6670)",
              textAlign: "left",
              mb: 2,
            }}
          >
            My Wallet
          </Typography>
        </Box>
        <Button
          variant="text"
          onClick={handleOpenModal}
          sx={{
            textTransform: "none",
            padding: " 8px 16px",
            gap: "8px",
            fontSize: "16px",
            fontWeight: 400,
            color: "#ffff",
            borderRadius: "32px",
            backgroundColor: "#FBAB34",
            ":hover": {
              color: "#ffff",
              backgroundColor: "#FBAB34",
            },
          }}
        >
          <AddIcon sx={{ width: "12px", height: "12px" }} /> Add Crypto
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", gridColumn: "span 12" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Crypto</StyledTableCell>
              <StyledTableCell>Holdings</StyledTableCell>
              <StyledTableCell>Change</StyledTableCell>
              <StyledTableCell>Trade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row.crypto}</StyledTableCell>
                <StyledTableCell>{row.holdings}</StyledTableCell>
                <StyledTableCell>{row.change}</StyledTableCell>
                <StyledTableCell>{row.trade}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
