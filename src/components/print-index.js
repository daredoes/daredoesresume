import React from "react"

import Box from "@material-ui/core/Box"

import Profile from "./Resume/Profile"
import Contacts from "./Resume/Contacts"
import Experiences from "./Resume/Experiences"
import Educations from "./Resume/Educations"
import Skills from "./Resume/Skills"

import "../scss/resume.scss"

const PrintIndex = () => {
  return (
    <Box className="print-only" display="none" displayPrint="block">
      <Profile />
      <Contacts />
      <Experiences />
      <Educations />
      <Skills />
    </Box>
  )
}

export default PrintIndex
