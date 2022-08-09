import { Button } from "react-bootstrap";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../src/component/Header";
import {removeToCart} from '../../store/feature/reducer'

function Dynamic() {
  const dispatch = useDispatch()
  const allcarts = useSelector((state) => state.cartItem.cart);

  const removeCart = (s) => {
    dispatch(removeToCart(s))
  }
  return (
    <>
      <Header />
      {allcarts.length === 0 && <h1 className="text-red fw-bold text-center mt-5">Empty carts</h1>}
      {allcarts &&
        allcarts.map((s, index) => {
          return (
            <div key={index} className="outer-cart mx-auto my-5 p-2">
              <div className="d-flex justify-content-between">
             <h5 className="fw-bold" >{s.name}</h5>
             <div>
             <Image src={s.image} width={100} height={100} alt=""/>
             </div>
             <Button variant="danger mt-5" className="fw-bold" onClick={()=>{removeCart(s)}}>Remove</Button>
             </div>
             <p>this is very good product</p>
            </div>
          )

        })}
    </>
  );
}

export default Dynamic;
