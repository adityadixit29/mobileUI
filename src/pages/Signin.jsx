import React from 'react'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <>
    <div className="container">
        <div className="main-container-sign">
            <div className="subcontainer-sign">
            <section className='heading'>
                <h1>Signin to your PopX account</h1>
            </section>
            <p className='para-sign'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <section className="input">
              <input type="text" placeholder='Enter email address'/>
              <section className="inputcontainer">
              <p className='text'>Email Address</p>
              </section>
            </section>
            <section className="input">
              <input type="text" placeholder='Enter password'/>
              <section className="inputcontainer">
              <p className='text'>Password</p>
              </section>
            </section>
            <Link className="createbtn" to={'/account'}>Login</Link>

            </div>
        </div>
    </div>
    </>
  )
}

export default Signin