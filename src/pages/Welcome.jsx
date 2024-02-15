import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
    <div className="container">
        <div className="main-container">
            <div className="subcontainer">
            <section className='heading-welcome'>
                <h1>Welcome to PopX</h1>
            </section>
            <p className='para-welcome'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            <Link className="createbtn" to={'/register'}>Create Account</Link>
            <Link className="loginbtn" to={'/signin'}>Already Registered? Login</Link>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Welcome