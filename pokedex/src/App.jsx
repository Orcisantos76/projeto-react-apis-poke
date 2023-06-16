
import { Router } from "./Components/Routes/Router"
import GlobalContextProvider from "./Context/globalContext"
import { CSSReset, ChakraProvider,extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#5E5E5E",
      },
    },
  },
});

function App() {
  return (
    <GlobalContextProvider>
      <ChakraProvider theme={theme}>    
        <CSSReset m="0" p="0" boxSizing="border-box" />
        <Router/> 
      </ChakraProvider>  
      
    </GlobalContextProvider>
  )
}

export default App
