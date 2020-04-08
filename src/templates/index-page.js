import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PublicIndex from "../components/publicIndex"
import PrintIndex from "../components/printIndex"

function openPrintDialog(e) {
  e.preventDefault()
  window.print()
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <PrintIndex />
      <Layout className="index-page profile-picture no-print" printablePage>
        <SEO title="Home" />
        <PublicIndex />
      </Layout>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query JMHIndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        first_name
        middle_name
        last_name
        birth_date
      }
    }
  }
`
