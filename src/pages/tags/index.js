import React from "react"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../../components/NewLayout"
import Section from "../../components/Section"
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import TagIcon from '@material-ui/icons/Label'


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
        <Grid item key={tag + `tag`}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{boxShadow: 'none'}}>
            <Chip clickable variant='outlined' label={`${tag.fieldValue} (${tag.totalCount})`} color='secondary' size='small' icon={<TagIcon />}/>
            </Link>
        </Grid>
      ))}
      asRow
      gridProps={{
        direction: 'row',
        justify: 'flex-start',
        alignItems: 'flex-start',
        spacing: 1
    }}
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
