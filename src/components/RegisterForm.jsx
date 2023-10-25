import { useState } from "react"
import errorNotifier from "../utils/errorNotifier"

const RegisterForm = ({ handleRegister, toggleForms }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const registerHandler = (e) => {
        // here you will handle input specific errors
        e.preventDefault()
        if (password.length < 8) {
            errorNotifier("register/password-too-short")
            return
        } else if (password !== confirmPassword) {
            errorNotifier("register/passwords-dont-match")
            return
        }
        handleRegister(email, password)
    }

    return (
      <>
          <h2 className='font-bold text-2xl'>Register</h2>
          <form onSubmit={registerHandler} className='flex flex-col'>
            <input type="email" className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <input type="password" className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
            <button type="submit" className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-3'>Register</button>
          </form>
          <p className="text-sm text-center mt-2">Already have an account? <a className="text-teal-400" href="#" onClick={toggleForms}>Login Here</a></p>
      </>
    )
}

export default RegisterForm