import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GNB from './components/GNB'
import PATH from './constants/path'

const App = () => {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        <Route path={PATH.HOME} element={<div>product-list</div>} />
        <Route path={PATH.PRODUCT_DETAIL} element={<div>product-detail</div>} />
        <Route path={PATH.CART} element={<div>cart</div>} />
        <Route path={PATH.PAYMENTS} element={<div>product</div>} />
        <Route path={PATH.ORDER_HISTORY} element={<div>order-history</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
