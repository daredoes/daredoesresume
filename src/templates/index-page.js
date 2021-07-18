import React from "react"
import PropTypes from "prop-types"

import Layout from "@components/Layout"
import SEO from "@components/SEO"
import PublicIndex from "@components/public-index"
import PrintIndex from "@components/print-index"

const IndexPage = () => {
  return (
    <>
      <Layout printButton={true}>
        <SEO title="Home" />
        <PublicIndex />
      </Layout>
      <PrintIndex />
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
