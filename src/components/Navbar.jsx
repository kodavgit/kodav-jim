import { Link, NavLink } from "react-router-dom"
import { links } from "../data"
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md"
import "./navbar.css"
import Logo from "../images/logo.png"
import { useState } from "react"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container navtocontainer">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          {/* <img src={Logo} alt="Nav Logo" /> */}
          <div className="nav-logo">KODAV-<span>JIM</span></div>
        </Link>
        <ul className={`navtolinks ${isNavShowing ? 'showtonav' : 'hidetonav'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}onClick={() => setIsNavShowing(prev => !prev)}>
                    {name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="navtotogglebttn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> :  <FaBars />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar