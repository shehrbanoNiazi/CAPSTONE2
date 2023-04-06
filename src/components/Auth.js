import {useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../store/authContext'

const Auth = () => {
    const [register, setRegister] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [display, setDisplay] = useState('none')
    const {login} = useContext(AuthContext)
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate('')   

    const submitHandler = (e) => {
        e.preventDefault()

        setDisplay('none')

        const body = {
            username,
            password
        }

        //const url = 'http://localhost:3000'

        axios.post(register ? '/api/register' : 'api/login' , {username, password}) 
        .then(res => {
          console.log(res.data)
          setPassword('')
          setUsername('')
          login(res.data.token, res.data.exp, res.data.userId)
          navigate('/home')
    
        })
        .catch(err => {
          console.log(err)
          alert(err.response.data)
        })
    }

    return (
        <main>
            <h1>Welcome!</h1>
            <form className='form auth-form' onSubmit={submitHandler}>
                <input 
                    type='text' 
                    placeholder='username' 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='form-input'/>
                <input 
                    type='password' 
                    placeholder='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='form-input'/>
                <button className='form-btn'>
                    {register ? 'Sign Up' : 'Login'}
                </button>
            </form>
            <p style={{display: display}} className='auth-msg'>{message}</p>
            <button className='form-btn' onClick={() => setRegister(!register)}>
                Need to {register ? 'Login' : 'Sign Up'}?
            </button>
        </main>
    )
}

export default Auth