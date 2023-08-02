import { createTheme } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FBAB34',
      light: '#E0E0E0',
    },
    secondary: {
      light: '#000',
      main: '#000',

      contrastText: '#ffcc00',
    },
    warning: {
      main: '#FF5E1E',
      light: '#FF5E1E',
    },
    // error: {
    //   light: "#ffff",
    //   main: "#ffff",
    // },
    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Roboto',
    allVariants: {
      fontStyle: 'normal',
    },
  },
})
