import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Header from '../../src/component/Header'
import {Button} from 'react-bootstrap'
import { useRouter } from 'next/router';
import Modal from '../../src/component/Modal';

export default function Login() {
  const [email, setEmail] = useState();
  const [token, setToken] = useState();

  const router = useRouter()

  useEffect(()=> {
      token?.length && localStorage.setItem('token', token)
  },[token])

  const handleLogin = (e) => {
    e.preventDefault()
    if(!email) {
      alert('please enter valid details')
    }
    else {
      axios.post('/api/posts',{email})
      .then(res=>{
          if(res.data.success) {
            setToken(res.data.token)
            router.push('/')
          }
          else {
            alert(res.data.message)
          }
      })
      .catch(err=>console.log(err))
  }
  }

  return (
    <>
    <Header />
    <h1 className='text-center fw-bold mt-4'>Sign In</h1>
    <form className='signinform '>
              <div className="mb-3 input-values">
                <label className="form-label ps-3 mb-1">E-mail </label>
                <input type="email" className="form-control border-0" placeholder="name@examole.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
              </div>
              <Button type="button" className="btn btn-login d-flex m-auto" onClick={handleLogin}>Sign In</Button>
            </form>
            <Modal/>
            </>
  )

}
