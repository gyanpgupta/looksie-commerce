import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { addProductToCart, cartItem } from '../../store/feature/reducer';
import styles from '../../styles/Selected.module.css'

function Selected(props) {
  const [show, setShow] = useState(false);
  const addedCarts = useSelector(state=> state.cartItem.cart)
  const dispatch = useDispatch()

  var settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    variableWidth: false,
  };

  useEffect(() => {
    addedCarts.map(cart => {
      if(cart.name === props.data.name) {
        setShow(true)
      }
    })
  }, [show]);

  const addToCart = (e) => {
    e.preventDefault()
    setShow(true)
    dispatch(addProductToCart(props.data))
    console.log(addToCart, 'add');
  }
  return (
    <section className="container px-0 py-5 border-bottom">
    <div className="row mx-0">
      <div className="col-md-6 ps-0">
        <div className="slide-imgs">
          <Image className="img-fluid" src={props.data.image}  alt="Item"  width={800} height={700} />
          <Slider {...settings} className={`row mx-0 my-1 ${styles.slidethumb}`}>
            <div className="col-md-2 px-0">
              <Image className="img-fluid" src={props.data.image} alt="Item" width={50} height={50} />
            </div>
            <div className="col-md-2 px-0">
              <Image className="img-fluid" src={props.data.image} alt="Item" width={50} height={50} />
            </div>
            <div className="col-md-2 px-0">
              <Image className="img-fluid" src={props.data.image} alt="Item" width={50} height={50} />
            </div>
            <div className="col-md-2 px-0">
              <Image className="img-fluid" src={props.data.image} alt="Item" width={50} height={50} />
            </div>
            <div className="col-md-2 px-0">
              <Image className="img-fluid" src={props.data.image} alt="Item" width={50} height={50} />
            </div>
            <div className="col-md-2 px-0">
              <Image className="img-fluid" src={props.data.image} alt="Item" width={50} height={50} />
            </div>
            <div className="col-md-2 px-0">
              <Image className="img-fluid" src={props.data.image} alt="Item" width={50} height={50} />
            </div>
          </Slider>
        </div>
      </div>
      <div className="col-md-6 pe-0">
        <div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <Image className="rounded-circle" height="45px" width="45px" src={props.data.image} alt="Brand" />
              <h5 className="ps-2 mb-1 fw-light text-uppercase">{props.data.name}</h5>
            </div>
            <div className={`ps-2 ${styles.btnall}`}>
              <a href="#" className="btn btn-sm px-2 ms-3"><i className="fas fa-upload"></i></a>
            </div>
          </div>
          <h6 className="fw-bold pb-3">
            Tropical Chaos Dress Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </h6>
          <h5 className={`my-3 ${styles.colblue}`}>KWD 222.920</h5>
          <h6>Color: <span>Green & Blue</span></h6>
          <div className={`py-2 ${styles.proficon}`}>
            <Image className="img-fluid me-2 active" height="45px" width="45px" src={props.data.image} alt="Brand" />
            <Image className="img-fluid me-2" height="45px" width="45px" src={props.data.image}alt="Brand" />
          </div>
          <div className="d-flex align-items-baseline justify-content-between border-bottom">
            <div className="d-block">
              <h6>Size: <span>M</span></h6>
              <div className={`d-flex align-items-center pb-2 mb-1 ${styles.profsize}`}>
                <h4 className="px-3 py-2 me-2 active" height="45px" width="45px" >S</h4>
                <h4 className="px-3 py-2 me-2" height="45px" width="45px"> M </h4>
              </div>
            </div> 
            <a href="#" className={styles.colblue}>See size chart</a>
          </div>   
          <a href="#" className={`btn btn-sm w-100 ${styles.bgblue} px-5`} onClick={addToCart}>{show ? `Already Added to cart`: `Add to cart`}</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Selected