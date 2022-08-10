import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { AiFillShopping, AiOutlineBell } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import Slider from "react-slick";
import {Departments} from '../../data/departments'
import Router, { useRouter }  from "next/router";
import { useSelector,useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import {clearCart} from '../../store/feature/reducer'

function Header() {
  const dispatch = useDispatch()
  const router = useRouter()
  const carts = useSelector(state=> state.cartItem.cart)
  const [token, setToken] = useState();

  useEffect(() => {
    let token = localStorage.getItem('token')
    setToken(token)
    if(!token){
      router.push('/user/login')
    }
  }, [token]); 

  const handleSignout = (e) => {
    e.preventDefault()
    dispatch(clearCart())
    setToken('')
    localStorage.removeItem('token')
  }

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    variableWidth: false,
  };

  return (
    <header className={styles.innerheader}>
      <div className="container-fluid border-bottom">
        <nav
          className={`${styles.navbar} navbar-expand-md navbar-light header-nav px-3`}
        >
          <div className="d-flex align-items-center justify-content-between w-100">
            <a
              className="navbar-brand text-sm-center"
              href="#"
            >
              <Image src="/logo.png" height={20} width={200} alt="Logo" />
            </a>

            <div className="d-flex align-items-center icon-to-add w-75">
              <div
                className={`d-flex align-items-center justify-content-center w-100 ${styles.searchbox} text-center me-3`}
              >
                <FaSearch className="pe-2" fill={"#9a9aaa"} size={22} />
                <input
                  className="bg-transparent border-0"
                  type="text"
                  placeholder="What are you looking for?"
                />
              </div>
              <AiFillShopping className="px-2" fill={"#9a9aaa"} size={45} onClick={(e) => Router.push('/cart-products/allcarts')}/>
              <span className="notification">{carts?.length}</span>
              <BiCommentDetail className="px-2" fill={"#9a9aaa"} size={45} />
              <AiOutlineBell className=" px-2" fill={"#9a9aaa"} size={45} />
               {token === null ? <input
                className={`btn btn-sm ${styles.inbtn} px-4 py-1`}
                type="button"
                value="Sign Up / In"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              />:<Button onClick={handleSignout}>Signout </Button>}
            </div>
          </div>
        </nav>
        <div className="px-3 lists-ul">
          <Slider
            {...settings}
            className="d-flex align-items-center px-0 py-3 text-capitaize options-to-sel autoplay"
          >
            {Departments.map((department, index) => {
              return <a href="" key={index} className="text-black text-decoration-none">{department.department_name}</a>
            })}
          </Slider>
        </div>
      </div>
    </header>
  );
}

export default Header;
