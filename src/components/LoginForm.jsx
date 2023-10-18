import { useState } from "react"

const LoginForm = ({ handleLogin, toggleForms }) => {
  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const loginHandler = (e) => {
    // handle input errors
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
          <>
            <h2 className='font-bold text-2xl'>Login</h2>
            <form onSubmit={loginHandler} className='flex flex-col'>
              <input type="text" className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
              <input type="password" className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
              <button type="submit" className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-3'>Login</button>
            </form>
            <p className="text-sm text-center mt-2">Don&apos;t have an account? <a className="text-teal-400" href="#" onClick={toggleForms}>Register Here</a></p>
          </>
        )
}

export default LoginForm