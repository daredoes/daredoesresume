/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../scss/layout.sass"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas, far)

const Layout = ({ children, className, printablePage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={`layout-container ${className}`}>
        <main className="layout h-100">{children}</main>
      </div>
      <Footer printablePage={printablePage} />
    </>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  printablePage: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  printablePage: false,
}

export default Layout
