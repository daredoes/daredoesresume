import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Layout from "@components/NewLayout"
import SEO from "@components/SEO"
import Project from "@components/Web/Project"

const BlogPost = ({ data }) => {
  const { markdownRemark: post, site } = data
  const { title, date } = post.frontmatter
  return (
    <Layout printButton print>
      <SEO title={title} />
      <Helmet title={`${title} | ${site.siteMetadata.title}`} />
      <Grid container spacing={1}>
        <Grid item>
          <Project nonLinkTitle={true} key={post.id} {...post} />
        </Grid>
      </Grid>
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
