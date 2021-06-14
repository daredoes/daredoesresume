import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/NewLayout"
import Box from '@material-ui/core/Box'

import Section from "../components/Section"
import Project from "../components/Web/Project"

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const children = posts.map(edge => (
      <Project key={edge.node.id} {...edge.node} />
    ))
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = (
      <span>
        {totalCount} post{
          totalCount === 1 ? "" : "s"
        } tagged with "{tag}" - <Link className="btn btn-primary w-100" to="/tags/">
        Browse all tags
      </Link>
      </span>
    )

    return (
      <Layout>
        <Box p={1}>
          <Section 
            elements={children}
            title={tagHeader}
            withProgress={children.length > 1}
            gridProps={{
                direction: 'column',
                spacing: 1,
            }}
          />
          <Helmet title={`${tag} | ${title}`} />
          
        </Box>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, visible: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          html
          excerpt(pruneLength: 500)
          fields {
            slug
          }
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
    }
  }
`
