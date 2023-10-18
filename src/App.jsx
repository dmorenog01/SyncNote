import './index.css'
import LoginRegister from './components/LoginRegister'
import PasteCanvas from './components/PasteCanvas'
import { auth, loginUser, logOut, registerUser } from './services/loginService'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from "react"
import errorNotifier from './utils/errorNotifier'

const App = () => {
  const [ currentUser, setCurrentUser ] = useState(null)

  const handleLogin = (email, password) => {
    console.log('logging in with credentials', email, password)
    loginUser(email, password)
    .then((userCredentials) => {
      console.log('Logged in as ', userCredentials.user)
    })
    .catch(e => {
      errorNotifier(e.code)
    })
  }

  const handleRegister = (email, password) => {
    console.log('Registering user', email)
    registerUser(email, password)
    .then(userCredentials => {
      console.log('Succesfully Registered', userCredentials.user)
    })
    .catch(e => {
      errorNotifier(e.code)
    })
  }

  const handleLogOut = (e) => {
    e.preventDefault()
    logOut()

  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    })
    return () => {
      unsub()
    }
  }, [])

  
    if (currentUser) {
      return (
        <div className='p-3 h-screen  bg-slate-700'>
          <div>
            <h1 className='text-slate-300'>Hello, {currentUser.email} <button onClick={handleLogOut}>Log out</button></h1>
          </div>
          <PasteCanvas/> 
        </div>
    )

    }
    return (
      <LoginRegister handleLogin={handleLogin} handleRegister={handleRegister}/>
    )
  

}
export default App
