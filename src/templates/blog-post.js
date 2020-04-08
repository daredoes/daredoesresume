import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
// import Content, { HTMLContent } from '../components/Content'

const BlogPost = ({ data }) => {
  const { markdownRemark: post, site } = data
  const { title, date } = post.frontmatter
  return (
    <Layout className="print-safe">
      <SEO title={title} />
      <Helmet title={`${title} | ${site.siteMetadata.title}`} />
      <Project nonLinkTitle={true} key={post.id} {...post} />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      excerpt(pruneLength: 500)
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        templateKey
        date(formatString: "MMMM DD, YYYY")
        tags
        weight
        printable
        visible
        description
      }
    }
  }
`
