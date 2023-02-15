import React, { useState } from 'react';

// Style
import style from './Product.module.css'

// Icons
import star from '../icons/star.png'
import share from '../icons/share.svg'
import heart from '../icons/heart.svg'
import plus from '../icons/plus.png'
import minus from '../icons/minus.png'
import trash from '../icons/trash.png'

// Bootstrap
import { Col } from 'react-bootstrap';

const Product = props => {

     const { title, price, image, rating } = props.data

     const [flag, setFlag] = useState(true)

     const shorter = text => {
          const splitedText = text.split(' ')
          const result = `${splitedText[0]} ${splitedText[1]}`
          return result
     }

     const clickHandler = () => {
          setFlag(false)
     }

     return (
          <Col sm={12} md={6} lg={4} xl={3} className={style.container}>
               <div className={style.mainContainer}>
                    <div className={style.topContainer}>
                         <div className={style.rateContainer}>
                              <img className={style.star} src={star} alt="" />
                              <span className={style.rate} >{rating.rate}</span>
                         </div>

                         <div>
                              <img src={heart} alt="" />
                              <img src={share} alt="" />
                         </div>
                    </div>
                    <div className={style.imageContainer}>
                         <img
                              className={style.image}
                              src={image}
                              alt="" />
                    </div>
                    <h5 className={style.title}>{shorter(title)}</h5>
                    <p className={style.price}>${price}</p>
                    <div className={style.mainButtonsContainer}>
                         {
                              flag ?
                                   <a onClick={
                                        () => { setFlag(false) }
                                   } className={style.button} href="#s">Add To Cart</a>
                                   :
                                   <div className={style.buttonsContainer}>
                                        <img className={style.icon} src={trash} alt="" />
                                        <span className={style.quantity}>0</span>
                                        <img className={style.icon} src={plus} alt="" />
                                   </div>
                         }
                    </div>
               </div>
          </Col>
     );
};

export default Product;