import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Link from "./Link"
import { openPrintDialog } from "./helpers"

const Profile = ({ print }) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          title
          first_name
          middle_name
          last_name
          public_name
          print_name
          birth_date
        }
      }
    }
  `)
  const frontmatter = data.markdownRemark.frontmatter

  return print ? (
    <div className="profile-name">{frontmatter.print_name}</div>
  ) : (
    <div className="w-100 text-center">
      <div className="profile-photo"></div>
      <br />
      <p className="h3 text-uppercase font-weight-bold text-light">
        Call me <span className="text-dark">{frontmatter.public_name}</span>
      </p>
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
    </div>
  )
}

Profile.propTypes = {
  print: PropTypes.bool,
}

Profile.defaultProps = {
  print: false,
}

export default Profile
