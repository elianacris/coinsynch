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

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: "#8C8A97",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F6F6F6",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Data {
  id: number;
  crypto: string | ReactNode;
  price: string;
  change: string;
  trade: ReactNode;
}

export default function TableComponent() {
  const [rows, setRows] = useState<Data[]>([
    {
      id: 1,
      crypto: "Bitcoin BTC",
      price: "US$ 25.499,52",
      change: "+5,65%",
      trade: <Button>Buy</Button>,
    },
    {
      id: 2,
      crypto: "Ethereum ETH",
      price: "US$ 15.499,52",
      change: "-5,65%",
      trade: <Button>Buy</Button>,
    },
    {
      id: 3,
      crypto: "Cardano ADA",
      price: "US$ 5.499,52",
      change: "+5,65%",
      trade: <Button>Buy</Button>,
    },
    {
      id: 4,
      crypto: "Solana SOL",
      price: "US$ 2.499,52",
      change: "-5,65%",
      trade: <Button>Buy</Button>,
    },
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      crypto: "",
      price: "",
      change: "",
      trade: "",
    };
    setRows([...rows, newRow]);
  };

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          lineHeight: "40px",
          color: "var(--text-base, #5D6670)",
          textAlign: "center",
        }}
      >
        Top Cryptos
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="right">Crypto</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Change</StyledTableCell>
              <StyledTableCell align="right">Trade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right" scope="row">
                  {row.crypto}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.change}</StyledTableCell>
                <StyledTableCell align="right">{row.trade}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="text"
        onClick={handleAddRow}
        sx={{
          textTransform: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        View more <AddIcon />
      </Button>
    </Box>
  );
}
