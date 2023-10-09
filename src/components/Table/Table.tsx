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

import { ButtonTable } from "./ButtonTable";
import { ColumnCrypto } from "./ColumnCrypto";
import image1 from "../../assets/imageTable/image1.svg";
import image2 from "../../assets/imageTable/image2.svg";
import image3 from "../../assets/imageTable/image3.svg";
import image4 from "../../assets/imageTable/image4.svg";

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
  price: string;
  change: string;
  trade: ReactNode;
}

export default function TableComponent() {
  const [showAll, setShowAll] = useState(false);
  const [rows, setRows] = useState<Data[]>([
    {
      id: 1,
      crypto: <ColumnCrypto title="Bitcoin BTC" image={image1} />,
      price: "US$ 25.499,52",
      change: "+5,65%",
      trade: <ButtonTable />,
    },
    {
      id: 2,
      crypto: <ColumnCrypto title="Ethereum ETH" image={image4} />,
      price: "US$ 15.499,52",
      change: "-5,65%",
      trade: <ButtonTable />,
    },
    {
      id: 3,
      crypto: <ColumnCrypto title="Cardano ADA" image={image3} />,
      price: "US$ 5.499,52",
      change: "+5,65%",
      trade: <ButtonTable />,
    },
    {
      id: 4,
      crypto: <ColumnCrypto title="Solana SOL" image={image2} />,
      price: "US$ 2.499,52",
      change: "-5,65%",
      trade: <ButtonTable />,
    },
  ]);

  // const handleAddRow = () => {
  //   const newRow = {
  //     id: rows.length + 1,
  //     crypto: "",
  //     price: "",
  //     change: "",
  //     trade: "",
  //   };
  //   setRows([...rows, newRow]);
  // };

  const handleViewMore = () => {
    setShowAll(true);
    setRows(rows);
  };

  const handleViewLess = () => {
    setShowAll(false);
    setRows(rows.slice(0, 10));
  };

  return (
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
          fontSize: "32px",
          fontWeight: 700,
          lineHeight: "40px",
          color: "var(--text-base, #5D6670)",
          textAlign: "center",
          mb: 2,
          gridColumn: "span 12",
        }}
      >
        Top Cryptos
      </Typography>

      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", gridColumn: "span 12" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Crypto</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
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
                <StyledTableCell>{row.price}</StyledTableCell>
                <StyledTableCell>{row.change}</StyledTableCell>
                <StyledTableCell>{row.trade}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {!showAll && rows?.length > 3 && (
        <Button
          variant="text"
          onClick={handleViewMore}
          sx={{
            textTransform: "none",
            gap: "8px",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            gridColumn: "span 12",
          }}
        >
          View more <AddIcon sx={{ width: "12px", height: "12px" }} />
        </Button>
      )}
      {showAll && (
        <Button
          variant="text"
          onClick={handleViewLess}
          sx={{
            textTransform: "none",
            gap: "8px",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            textAlign: "center",
            gridColumn: "span 1",
          }}
        >
          View less
        </Button>
      )}
    </Box>
  );
}
