import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}
