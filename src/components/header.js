import Link from "./Link"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Header = ({ siteTitle }) => (
  <header className="no-print">
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {siteTitle}
        </Link>
        <a
          href="https://github.com/daredoes/"
          target="_blank"
          className="text-light"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
        </a>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
