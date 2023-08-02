import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import Router from "./routes/Router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
