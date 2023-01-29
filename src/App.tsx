import { ThemeProvider} from "styled-components"
import { GlobalStyles } from "./styles/globals";
import { theme } from "./styles/theme";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App;