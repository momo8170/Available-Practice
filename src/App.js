import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// import logo from './logo.svg';
import { Router } from "./router/Router";
import './App.css';
import theme from "./theme/Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

