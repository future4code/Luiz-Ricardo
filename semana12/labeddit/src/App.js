import React from "react";
import GlobalState from "./global/GlobalState"
import Router from "./routes/Router";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  )
}

export default App;