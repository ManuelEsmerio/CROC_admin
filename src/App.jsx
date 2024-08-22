// import Dashboard from "./pages/Dashboard"
import { useMemo } from "react";
import { useSelector } from "react-redux";

// Material UI Components
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// Router
import AppRoute from "./routes/routes"

// Theme
import { getDesignTokens } from "./themes/CustomTheme";

// SnackBar
import { SnackbarProvider } from "notistack";

function App() {
  const selectMode = useSelector((state) => state.theme.mode);

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(selectMode)), [selectMode]);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={2} autoHideDuration={1000}>
        <CssBaseline />
        <AppRoute />
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
