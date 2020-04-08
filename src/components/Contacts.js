import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../section"
import Contact from "./Contact"


const Contacts = ({print}) => {
  const data = useStaticQuery(graphql`
    query {
      contacts: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"contact"}}}, sort: { fields: [frontmatter___weight, frontmatter___title]}) {
        edges{
          node{
            frontmatter {
              title
              weight
              printable
              visible
              external_url
              icon
              key
            }
            id
            html
            excerpt
          }
        }
      },
    }
  `)

  const elements = data.contacts.edges.filter((edge) => edge.node.frontmatter && (print ? edge.node.frontmatter.printable : edge.node.frontmatter.visible));
  const children = elements.map((edge) => <Contact print={print} key={edge.node.id} {...edge.node} />);
  return (
    <Section elements={children} className="contacts" title={print ? null : `Contact`} print={print} asRow={print} />
  )
}

Contacts.propTypes = {
  print: PropTypes.bool,
}

Contacts.defaultProps = {
  print: false,
}


export default Contacts
