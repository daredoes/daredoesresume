import React from "react"

import Box from "@material-ui/core/Box"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "@components/SEO"
import Profile from "./Resume/Profile"
import Contacts from "./Resume/Contacts"
import Experiences from "./Resume/Experiences"
import Educations from "./Resume/Educations"
import Skills from "./Resume/Skills"

import "../scss/resume.scss"

const PrintIndex = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime
        siteMetadata {
          author
        }
      }
    }
  `)

  const buildDate = React.useMemo(() => {
    if (!data || !data.site.buildTime) return "Unknown"
    const date = new Date(data.site.buildTime)
    const month = `${date.getMonth() + 1}`.padStart(2, "0")
    const day = `${date.getDate()}`.padStart(2, "0")
    const year = `${date.getFullYear()}`
    return `${month}-${day}-${year}`
  }, [data.site.buildTime])

  return (
    <Box className="print-only" display="none" displayPrint="block">
      <SEO
        title={`${buildDate}_Resumé${
          data ? `_${data.site.siteMetadata.author}` : ""
        }`}
        titleTemplate={"%s"}
      />
      <Profile />
      <Contacts />
      <Experiences />
      <Educations />
      <Skills />
    </Box>
  )
}

export default PrintIndex
