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
    <div className="w-100 text-center">
      <div className="profile-photo"></div>
      <br />
      <span className="h2 font-weight-bold text-uppercase text-light">
        Hello,
      </span>
      <p className="h3 text-uppercase font-weight-bold text-light">
        I'm{" "}
        <span className="text-dark">
          {frontmatter.first_name} {frontmatter.last_name}
        </span>
        .<br />
        <Link
          role="button"
          tabIndex="0"
          anchorTag={true}
          anchorSize="xs"
          href="#"
          className="btn btn-outline btn-success my-2 btn-lg"
          onClick={openPrintDialog}
        >
          Print Resumé/CV PDF
        </Link>
      </p>
    </div>
  )
}

export default Profile
