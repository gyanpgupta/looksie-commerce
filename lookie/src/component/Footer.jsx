import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Footer.module.css'
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={`row mx-0 pt-4 border-bottom ${styles.footerlinks}`}>
      <div className="col-md-7 pt-5">
        <div className="row mx-0">
          <div className="col-md-6">
            <div className="w-75 ms-auto">
              <h2>Looksie</h2>
              <p className="fw-light small w-75">Lorem ipsum dolor sit amet. Consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
              <div className={`d-flex align-items-center ${styles.socialicons}`}>
                <a href="#" className={styles.socialbg}>
                  <FaInstagram />
                </a>
                <a href="#" className={styles.socialbg}>
                  <FaLinkedinIn className="fab fa-linkedin-in"/>
                </a>
                <a href="#" className={styles.socialbg}>
                  <FaEnvelope className="fas fa-envelope" />
                </a>
              </div>  
            </div>
          </div> 
          <div className="col-md-2 ps-0">
            <h6 className="mb-4">Looksie</h6>
            <ul className="ps-0">
              <li className="py-1"><a href="#">About</a></li>
              <li className="py-1"><a href="#">Blog</a></li>
              <li className="py-1"><a href="#">Contact us</a></li>
            </ul>  
          </div> 
          <div className="col-md-2 px-0">
            <h6 className="mb-4">Sell</h6>
            <ul className="ps-0">
              <li className="py-1"><a href="#">Sign up</a></li>
              <li className="py-1"><a href="#">Sign in</a></li>
              <li className="py-1"><a href="#">FAQ</a></li>
              <li className="py-1"><a href="#">Seller Handboook</a></li>
            </ul>  
          </div> 
          <div className="col-md-2 pe-0">
            <h6 className="mb-4">Download</h6>
            <ul className={`ps-0 ${styles.appstore}`}>
              <li className="py-2"><a href="#"><Image src="/sell-app.png" alt="Footer" width={200} height={70}/></a></li>
              <li className="py-2"><a href="#"><Image src="/shopper-app.png" alt="Footer" width={200} height={70}/></a></li>
            </ul>  
          </div> 
        </div>
      </div>
      <div className="col-md-5 px-0">
        <Image className="w-100" src="/footer-icon.png" alt="Footer" width={500} height={480}/>
      </div>
    </div>
    <div className="container px-0">
      <div className={`row align-items-center py-3 mx-0 ${styles.footerpr}`}>
        <div className="col-md-6 px-0">
          <p className="mb-0">Looksie &copy; all rights reserved</p>
        </div>
        <div className={`col-md-6 px-0 text-end`}>
          <a href="#" className="pe-3">Terms & Conditions</a>
          <a href="#" className="ps-3">Privacy Policy</a>
        </div>
      </div>
    </div>  
  </footer>  
  )
}

export default Footer