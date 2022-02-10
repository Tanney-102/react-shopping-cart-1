import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ProductItem from '../../components/ProductItem'
import PATH from '../../constants/path'
import productsAction from '../../redux/products/productsAction'
import { productsSelector } from '../../redux/products/productsSelector'
import Styled from './ProductListPage.styles'

const ProductListPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector(productsSelector)

  const handleClickCartButton = () => {
    navigate(PATH.CART)
  }

  useEffect(() => {
    dispatch(productsAction.requestGetProducts())
  }, [])

  return (
    <Styled.Container>
      {products.map((product) => (
        <ProductItem key={product.id} id={product.id} onClickCart={handleClickCartButton} />
      ))}
    </Styled.Container>
  )
}

export default ProductListPage
