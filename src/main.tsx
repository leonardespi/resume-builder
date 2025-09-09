import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import './i18n'

const rootEl = document.getElementById('root')
if (!rootEl) {
  console.error('Root element #root not found')
} else {
  console.log('Bootstrapping Resume Builder...')
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  )
}
