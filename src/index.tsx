import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider as ReduxProvider } from 'react-redux'

import App from './App'
import GlobalStyle, { theme } from './globalStyle'
import store from './redux/store'

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.querySelector('#app')
)
