import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrint } from "@fortawesome/free-solid-svg-icons"

import moment from "moment"

function openPrintDialog(e) {
  e.preventDefault()
  window.print()
}

const Footer = () => {
  const buildtime = moment(process.env.GATSBY_BUILDTIME)
  return (
    <footer className="no-print">
      <div className="container text-center">
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
        <p className="text-light">Last Updated: {buildtime.format("L")}</p>
      </div>
    </footer>
  )
}
export default Footer
