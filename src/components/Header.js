import {useContext} from 'react'
import {NavLink} from 'react-router-dom'

import AuthContext from '../store/authContext'

const Header = () => {
    const authCtx = useContext(AuthContext)

    const styleActiveLink = ({ isActive }) => {
        return {
            color: isActive ? '#f57145' : ''
        }
    }
    
    return (
        <header className='header flex-row'>
            <div className='flex-row'>
                <img src="https://t3.ftcdn.net/jpg/01/71/60/26/240_F_171602618_00nQorfdgjm767xXBPGqSmEJkTSFEfL4.jpg" alt='dm-logo' className='logo'/>
                <h2>Secret Beauty</h2>
            </div>
            <nav>
                {
                    authCtx.token ? (
                        <ul className='main-nav'>
                            <li>
                                <NavLink style={styleActiveLink} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink style={styleActiveLink} to='profile'>Profile</NavLink>
                            </li>
                            <li>
                                <NavLink style={styleActiveLink} to='form'>Add Post</NavLink>
                            </li>
                            <li>
                                <button className='logout-btn' onClick={() => authCtx.logout()}>Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className='main-nav'>
                            <li>
                                <NavLink style={styleActiveLink} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink style={styleActiveLink} to='/auth'>Login or Sign Up</NavLink>
                            </li>
                        </ul>
                    )
                }
            </nav>
        </header>
    )
}


export default Header