// mui
import { 
  ThemeProvider, 
  createTheme 
} from "@mui/material/styles";

// routers
import Routers from "./Routers";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1dbf89",
    },
    secondary: {
      main: "#0f2130"
    }  
  }
});

function App(){
  console.log("app page...");
  return (
    <ThemeProvider theme={theme}>
      <Routers></Routers>
    </ThemeProvider>
  )
}

export default App;
