import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import './Navbar.css'

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsSticky(window.scrollY > 100) };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar_bg ${isSticky ? 'sticky_nav' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="d-flex align-items-center gap-2">
              <span className='logo_brand'>P</span>
              <span className='logo_text'>Toolskit.shop</span>
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <FaBars /> </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#hero_section" className='nav-link nav_link'>Home</a>
              </li>
              <li className="nav-item">
                <NavLink to="#" className='nav-link nav_link'>About us</NavLink>
              </li>
              <li className="nav-item">
                <a href="#categories_section" className='nav-link nav_link'>Categories</a>
              </li>
              <li className="nav-item">
                <a href="#free_tools_section" className='nav-link nav_link'>Free Tools</a>
              </li>
              <li className="nav-item">
                <NavLink to="#" className='nav-link nav_link'>Contact</NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2">
              <Link to='/premium-tools' className='nav_btn bg-danger'>Premium Tools</Link>
              <Link to='/user/login' className='nav_btn'><BiLogInCircle />Sign in</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar