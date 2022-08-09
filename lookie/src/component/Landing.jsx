import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Lending.module.css";
import { Departments, popularDepartment } from "../../data/departments";
import Slider from "react-slick";

import {  useRouter } from "next/router";

function Landing() {
  const router = useRouter()

  const RecommendedShops = ["Nike", "Adidas", "Adidas", "Adidas"]

  const [active, setActive] = useState();
  var settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 25000,
    dots: false,
    arrows: true,
    variableWidth: false,
  };
  return (
    <>
      <section className="container px-0 py-5">
        <div className="headings">
          <h5 className="fw-bold">
            Recommendations in <i className="fas fa-arrow-right ps-2"></i>{" "}
          </h5>
        </div>
        <Slider
          {...settings}
          className={`row align-items-end mx-0 nav nav-tabs ${styles.navcategories}`}
        >
          {Departments.map((deparment, index) => {
            return (
              <>
                <div className="nav-item text-center" key={deparment.department_name}>
                  <a
                    className={`${styles.navlink} ${active==index ? `${styles.active}`:null}`}
                    data-bs-toggle="tab"
                    href="#Electronics"
                    onClick={(e)=>setActive(index)}
                  >
                    {deparment.department_name}
                  </a>
                  <div className={`position-relative ${styles.itemsimg} mb-2`}>
                    <Image
                      className="img-fluid"
                      src={deparment.image}
                      alt="items"
                      width={180}
                      height={180}
                      onClick={e => router.push({
                        pathname: "/addToCart",
                        query: { name:deparment.department_name, image: deparment.image} 
                    })}
                    />
                    <span className={`position-absolute start-0 bottom-0 bg-white px-2 py-1 ${styles.absprice}`}>
                      2038.937 KD
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
        <div className={`col-md-12 d-block text-center ${styles.btnall} my-3`} >
                    <a href="#" className="btn btn-sm w-auto px-3">See More <span className="ps-2">❯</span></a>
                </div>
      </section>
      <section className="container-fluid bg-light px-0 py-5">
        <div className={`${styles.headings} text-center`}>
          <h5 className="fw-bold mb-3">Popular Categories </h5>
        </div>
        <div className="row mx-0">
          <div className={`col-md-10 mx-auto px-0 ${styles.categopt}`}>
            <div className="row mx-0">
            {popularDepartment.map((deparment, index) => {
              return (
                <div className={`col-md-2 px-0 ${styles.categopt}`} key={index}>
                <div
                  className={`position-relative ${styles.itemsimg} bg-transparent text-center ${styles.categimgs} mb-2`}
                >
                  <Image
                    className="img-fluid rounded-circle "
                    src={deparment.image}
                    alt="items"
                    height={140}
                    width={140}
                    onClick={e => router.push({
                      pathname: "/addToCart",
                      query: { name:deparment.department_name, image: deparment.image} 
                  })}
                  />
                  <span className="px-2 py-3 fw-bold">{deparment.department_name}</span>
                </div>
              </div>

              )
            })}
              <div
                className={`col-md-12 d-block text-center ${styles.btnall} my-3`}
              >
                <a href="#" className="btn btn-sm w-auto px-3">
                  See More <span className="ps-2">❯</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-0 py-5">
        <div className="headings text-center d-flex align-items-center justify-content-between">
          <h5 className="fw-bold mb-3">Recommended Shops </h5>
          <div className="text-center btn-all my-3">
            <a href="#" className="btn btn-sm w-auto px-3">
              See More <span className="ps-2">❯</span>
            </a>
          </div>
        </div>
      
        <div className={`row mx-0 ${styles.categopt}`}>
          {RecommendedShops.map((department, index)=> {
              return (
                <div className={`col-md-3 px-0 ${styles.recommended} `} key={index}>
                <div className={`position-relative ${styles.landproducts} shadow-sm text-center mb-2`}>
                  <div className={styles.productimgs}>
                    <Image
                      className="img-fluid  mb-2"
                      src="/product-img3.png"
                      alt="Products"
                      height={200}
                      width={320}
                    />
                  </div>
                  <div className={`p-2 text-start ${styles.shopinfo}`}>
                    <div className="d-flex align-items-center mb-3">
                      <Image
                        className="land-product-img rounded-circle"
                        height={45}
                        width={45}
                        src="/brand-logo.png"
                        alt="Brand"
                      />
                      <div className="ps-2">
                        <h6 className="mb-1">{department}</h6>
                        <p className="mb-0">@nike</p>
                      </div>
                    </div>
                    <p className="mb-1">
                      122k Followers <span>. 122k products</span>
                    </p>
                    <a href="#">#food #flowers #gifts</a>
                    <div className="row mx-0 mt-2">
                      <div className="col-md-3 ps-0 pe-1">
                        <div className="land-imgs mb-2">
                          <Image
                            className="img-fluid"
                            src="/items1.png"
                            alt="items"
                            height={45}
                            width={45}
                            onClick={e => router.push({
                              pathname: "/addToCart",
                              query: { name:department, image: '/items1.png'} 
                          })}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 ps-0 pe-1">
                        <div className="land-imgs mb-2">
                          <Image
                            className="img-fluid"
                            src="/items2.png"
                            alt="items"
                            height={45}
                            width={45}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 ps-0 pe-1">
                        <div className="land-imgs mb-2">
                          <Image
                            className="img-fluid"
                            src="/items1.png"
                            alt="items"
                            height={45}
                            width={45}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 ps-0 pe-1">
                        <div className="land-imgs mb-2">
                          <Image
                            className="img-fluid"
                            src="/items2.png"
                            alt="items"
                            height={45}
                            width={45}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
          })}


        </div>
      </section>
      <section className="container px-0 pt-5">
        <div className="headings">
          <h5 className="fw-bold">
            Baked Goods <i className="fas fa-arrow-right ps-2"></i>{" "}
          </h5>
        </div>
        <div className="tab-content py-2">
          <div className="tab-pane container px-0 active" id="home">
            <div className="row mx-0">
              {popularDepartment.map((deparment, index) => {
                return (
                  <div className="col-md-2 px-0 items-area" key={deparment.department_numProducts}>
                  <div className="position-relative styles.itemsimg mb-2">
                    <Image
                      className="img-fluid"
                      src={popularDepartment[1].image}
                      alt="items"
                      width={150}
                      height={200}
                      onClick={e => router.push({
                        pathname: "/addToCart",
                        query: { name:popularDepartment[1].department_name, image: popularDepartment[1].image} 
                    })}
                    />
                    <span className="position-absolute start-0 bottom-0 bg-white px-2 py-1 abs-price">
                      2038.937 KD
                    </span>
                  </div>
                </div>
                )
              })
            }

              <div
                className={`col-md-12 d-block text-center ${styles.btnall} my-3`}
              >
                <a href="#" className="btn btn-sm w-auto px-3">
                  See More <span className="ps-2">❯</span>
                </a>
              </div>
            </div>
          </div>     
        </div>
      </section>
      <section className="container px-0 py-5">
        <div className="headings">
          <h5 className="fw-bold" id="Electronics">
          Electronics & accessories<i className="fas fa-arrow-right ps-2"></i>{" "}
          </h5>
        </div>
        <div className="tab-content py-2">
          <div className="tab-pane container px-0 active" id="home">
            <div className="row mx-0">
            {popularDepartment.map((deparment, index) => {
                return (
                  <div className="col-md-2 px-0 items-area" key={deparment.image} id={deparment.department_name}>
                  <div className="position-relative styles.itemsimg mb-2">
                    <Image
                      className="img-fluid"
                      src={popularDepartment[0].image}
                      alt="items"
                      width={150}
                      height={200}
                      onClick={e => router.push({
                        pathname: "/addToCart",
                        query: { name:popularDepartment[0].department_name, image: popularDepartment[0].image} 
                    })}
                    />
                    <span className="position-absolute start-0 bottom-0 bg-white px-2 py-1 abs-price">
                      2038.937 KD
                    </span>
                  </div>
                </div>
                )
              })
            }
              <div
                className={`col-md-12 d-block text-center ${styles.btnall} my-3`}
              >
                <a href="#" className="btn btn-sm w-auto px-3">
                  See More <span className="ps-2">❯</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
