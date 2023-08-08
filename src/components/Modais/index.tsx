import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";

const style = {
  boxSizing: " border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
  bgcolor: "background.paper",
  p: "16px",
  borderRadius: "4px",
  border: "none",
};

export interface ModalDeleteCheckBoxProps {
  open: boolean;
  handleClose?: () => void;
  children?: ReactNode;
  hideClose?: boolean;
}

export default function ModalComponent({
  handleClose,
  open,
  children,
}: ModalDeleteCheckBoxProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            size="small"
            onClick={handleClose}
            sx={{
              left: "1px",
              color: "#00000099",
              ":hover": {
                color: "#FBAB34",
              },
            }}
          >
            <Clear sx={{ height: "16px", width: "16px", left: "1px" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  );
}
