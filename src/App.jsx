import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Welcome from './pages/Welcome.jsx'
import Signin from './pages/Signin.jsx'
import Register from './pages/Register.jsx'
import Account from './pages/Account.jsx'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
