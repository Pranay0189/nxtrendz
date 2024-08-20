import { Link, useNavigate } from 'react-router-dom'
import { IoHomeOutline } from 'react-icons/io5'
import { AiOutlineProduct } from 'react-icons/ai'
import { MdLogout } from 'react-icons/md'
import { BsCartCheck } from 'react-icons/bs'
import Cookies from 'js-cookie'

import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/products" className="nav-link">
            <li>Products</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li>Cart</li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>

        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <MdLogout className="logout-icon" />
        </button>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/">
            <li>
              <IoHomeOutline className="nav-bar-image" />
            </li>
          </Link>
          <Link to="/products">
            <li>
              <AiOutlineProduct className="nav-bar-image" />
            </li>
          </Link>
          <Link to="/cart">
            <li>
              <BsCartCheck className="nav-bar-image" />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
