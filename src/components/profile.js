import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "./link"

function openPrintDialog(e) {
  e.preventDefault()
  window.print()
}

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)
  const frontmatter = data.markdownRemark.frontmatter

  return (
    <div className="w-100 text-center text-light">
      <div className="profile-photo"></div>
      <br />
      <span className="h2 font-weight-bold text-uppercase">Hello,</span>
      <p className="h3 text-uppercase font-weight-bold">
        My name is{" "}
        <span className="text-secondary">
          {frontmatter.first_name} {frontmatter.last_name}
        </span>
        .<br />
        <Link
          role="button"
          href="#"
          tabIndex="0"
          anchorTag={true}
          anchorSize="xs"
          className="text-info"
          onClick={openPrintDialog}
        >
          Print this page
        </Link>{" "}
        to convert my life into my{" "}
        <Link
          role="button"
          tabIndex="0"
          anchorTag={true}
          anchorSize="xs"
          href="#"
          className="text-info"
          onClick={openPrintDialog}
        >
          Resumé/CV
        </Link>
      </p>
    </div>
  )
}

export default Profile
