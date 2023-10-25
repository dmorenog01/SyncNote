import { useState } from "react"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import LogoBig from "./LogoBig"

const LoginRegister = ({ handleLogin, handleRegister }) => {

    const [ showLogin, setShowLogin ] = useState(true)
    const toggleForms = (e) => {
        e.preventDefault()
        setShowLogin(!showLogin)
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <LogoBig/>
            <div className="w-full sm:w-96 h-64 m-3">
                <div className="bg-gray-100 rounded-lg px-8 py-8 m-4">
                    { showLogin && <LoginForm handleLogin={handleLogin} toggleForms={toggleForms}/>}
                    {!showLogin && <RegisterForm handleRegister={handleRegister} toggleForms={toggleForms}/>}
                </div>
            </div>
        </div>
    )
}

export default LoginRegister