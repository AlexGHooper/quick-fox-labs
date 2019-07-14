import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../assets/qfl-logo.svg';

import './header.scss'

const Header = ({ contactModal }) => (
  <header className="header">
    <div className="header__wrapper">
      <div className="header__logo">
        <Link
          to="/"
        >
          <img src={logo} alt="Quick Fox Labs" />
        </Link>
      </div>
      <section className="header__links">
        <nav className="header__links__nav">
          <ul>
            <li>
              <Link to="/about">Who We Are</Link>
            </li>
            <li>
              <Link to="/services">What We Do</Link>
            </li>
            <li>
              <Link to="/case-studies">What We've Done</Link>
            </li>
            <li>
              <Link to="/school">School</Link>
            </li>
          </ul>
        </nav>
        <div className="header__links__cta">
          <button onClick={() => contactModal()}>Contact us</button>
        </div>
      </section>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
