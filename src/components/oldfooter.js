import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrint } from "@fortawesome/free-solid-svg-icons"

import moment from "moment"

import { openPrintDialog } from "./helpers"

const Footer = ({ printablePage }) => {
  const buildtime = moment(process.env.GATSBY_BUILDTIME)
  return (
    <footer className="no-print">
      <div className="container text-center">
        {printablePage ? (
          <a
            role="button"
            tabIndex="0"
            href="#"
            id="print"
            onClick={openPrintDialog}
            className="icon icon-medium my-2"
          >
            <FontAwesomeIcon
              icon={faPrint}
              size="lg"
              fixedWidth
              className="contactIcon"
            />
          </a>
        ) : null}
        {printablePage ? <br /> : null}
        <span className="text-light">
          Last Updated: {buildtime.format("L")}
        </span>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  printablePage: PropTypes.bool,
}

Footer.defaultProps = {
  printablePage: false,
}
export default Footer
