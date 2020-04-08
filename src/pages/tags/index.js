import React from "react"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Section from "../../components/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
    <Section
      elements={group.map(tag => (
        <div key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            <FontAwesomeIcon icon="tag" />
            &nbsp;{tag.fieldValue} ({tag.totalCount})
          </Link>
        </div>
      ))}
      asRow
      title={"Tags"}
    />
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___tags], order: DESC }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
