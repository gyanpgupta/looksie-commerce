import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


function Modal() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const router = useRouter()



  const handleSignUp = async (e) => {
    e.preventDefault();
    let lg = password.split('')
    if(lg.length <= 8 ) {
      alert('please insert passord at least 8 character')
    }
    if(!name, !email, !userName, !password) {
      alert('please enter all field')
    }
    else{
    axios.post('http://localhost:3000/api/posts', {name, email, userName, password })
    .then(res=> {
        router.push('/user/login')
    })
    .catch(err=> alert(err))
  }
  }


  return (
    <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content px-2 mx-auto">
          <div className="modal-header align-items-baseline border-bottom-0">
            <div>
              <h5 className="modal-title" id="exampleModalLabel">Discover. Share. Inspire.</h5>
              <p>
                The first social marketplace of its kind 
              </p>
            </div>  
            <button type="button" className="btn-close fw-bold" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body pt-0">
            <form>
              <div className="mb-3 input-values">
                <label className="form-label ps-3 mb-1">E-mail </label>
                <input type="email" className="form-control border-0" placeholder="name@examole.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
              </div>
              <div className="mb-3 input-values">
                <label className="form-label ps-3 mb-1">Name & surname </label>
                <input type="text" className="form-control border-0" placeholder="Full name"  value={name} onChange={(e)=> setName(e.target.value)}/>
              </div>
              <div className="mb-3 input-values">
                <label className="form-label ps-3 mb-1">Username </label>
                <input type="text" className="form-control border-0" placeholder="Your Username"  value={userName} onChange={(e)=> setUserName(e.target.value)} />
              </div>
              <div className="mb-3 input-values">
                <label className="form-label ps-3 mb-1">Password </label>
                <input type="password" className="form-control border-0" placeholder="Your Password"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <span className="ps-3 mb-1"> At least 8 characters required</span>
              </div>
              <div className="mb-3 form-check mx-3">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">I agree to the <a href="#">Terms & Condition</a> & <a href="#">Privacy policy</a></label>
              </div>
              <Button type="button" className="btn btn-signup m-auto d-flex px-5"  data-bs-dismiss="modal" onClick={handleSignUp}>Sign Up</Button>
              <p className="text-center" onClick={(e)=>router.push('/user/login')}>Already have an account ? <a href="#" className=" fw-bold" data-bs-dismiss="modal">Login</a> </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal