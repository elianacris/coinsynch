import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { IconButton } from '@mui/material'
import { Clear } from '@mui/icons-material'
import { ReactNode } from 'react'

const style = {
  boxSizing: ' border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  height: 'auto',
  width: '376px',
  bgcolor: 'background.paper',
  p: '16px',
  borderRadius: '4px',
  border: 'none',
}

export interface ModalDeleteCheckBoxProps {
  open: boolean
  handleClose?: () => void
  children?: ReactNode
  hideClose?: boolean
}

export default function ModalComponent({
  handleClose,
  open,
  children,
  hideClose,
}: ModalDeleteCheckBoxProps) {
  const hideButton = () => {
    if (hideClose === true) return true
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {hideButton() && (
            <IconButton
              size="small"
              onClick={handleClose}
              sx={{
                left: '1px',
                color: '#00000099',
                ':hover': {
                  color: '#FF5E1E',
                  backgroundColor: '#FF5E1E14',
                },
              }}
            >
              <Clear sx={{ height: '16px', width: '16px', left: '1px' }} />
            </IconButton>
          )}
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  )
}
