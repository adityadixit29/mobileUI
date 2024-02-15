import { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {

  const [checkyes, setCheckyes] = useState(false);
  const [check, setCheck] = useState(false);
  const checkhandler = () => {
    setCheck(!check)
  }
  const checkhandleryes = () => {
    setCheckyes(!checkyes)
  }
  return (
    <>
      <div className="container">
        <div className="main-container-sign">
          <div className="subcontainer-sign">
            <section className='heading'>
              <h1>Create your PopX account</h1>
            </section>

            <section className="input">
              <input type="text" placeholder='Marry Doe ' />
              <section className="inputcontainer">
                <p className='text'>Full Name</p><p className="required">*</p>
              </section>
            </section>

            <section className="input">
              <input type="text" placeholder='Marry Doe' />
              <section className="inputcontainer">
                <p className='text'>Phone number</p><p className="required">*</p>
              </section>
            </section>

            <section className="input">
              <input type="text" placeholder='Marry Doe' />
              <section className="inputcontainer">
                <p className='text'>Email Address</p><p className="required">*</p>
              </section>

            </section>
            <section className="input">
              <input type="text" placeholder='Marry Doe' />
              <section className="inputcontainer">
                <p className='text'>Password</p><p className="required">*</p>
              </section>
            </section>

            <section className="input">
              <input type="text" placeholder='Marry Doe' />
              <section className="inputcontainer">
                <p className='text'>Company name</p>
              </section>
            </section>
            

          </div>
          <section className="agency">
            <p>Are you an  Agency?</p><p className="required">*</p>
            </section>
            <section className="choice">
              <section className="radio-container">
                <input type="radio" className="radio" name="" id="" onClick={checkhandleryes} checked={checkyes} />Yes
              </section>
              <section className="radio-container">
                <input type="radio" className="radio" name="" id="" onClick={checkhandler} checked={check} />No
              </section>
            </section>

            <Link className="createbtn-register" to={'/account'} >Create Account</Link>
        </div>
      </div>
    </>
  )
}

export default Register