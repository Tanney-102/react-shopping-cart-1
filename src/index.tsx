import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import GlobalStyle, { theme } from './globalStyle'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.querySelector('#app')
)
