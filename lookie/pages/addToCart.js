import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../src/component/Footer'
import Header from '../src/component/Header'
import Selected from '../src/component/Selected'


function AddToCart() {
  const router = useRouter()
  let data = router.query
  return (
    <div>
      <Header />
      <Selected  data = {data}/>
      <Footer/>
    </div>
  )
}

export default AddToCart