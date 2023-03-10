import React, { useEffect } from 'react';

// Bootstrap
import { Container, Row } from 'react-bootstrap';

// Components
import Product from './Product';
import Loading from './Loading';

// Style
import style from './Products.module.css'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import fetchProducts from '../redux/products/productsAction';

// Component
import TopBanner from './TopBanner';

const Products = () => {

     const dispath = useDispatch(dispath => dispath)
     const state = useSelector(state => state.productsState)

     useEffect(() => {
          dispath(fetchProducts())
     }, [dispath])

     return (
          <>
               <TopBanner />
               <Container className={style.container}>
                    <Row>
                         {
                              state.products.length > 0 ?
                                   state.error ?
                                        <h1>Error</h1>
                                        :
                                        state.products.map(item => <Product key={item.id} data={item} />)
                                   :
                                   <Loading />
                         }
                    </Row>
               </Container>
          </>
     );
};

export default Products;