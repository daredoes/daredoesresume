import React from "react"

import Box from '@material-ui/core/Box'

import Profile from "./Web/Profile"
import Contacts from "./Web/Contacts"
import Experiences from "./Web/Experiences"
import Educations from "./Web/Educations"
import Skills from "./Web/Skills"

import "../scss/resume.scss"

const PrintIndex = () => {
  return (
    <Box className='print-only' display='none' displayPrint='block'>
      <Profile />
      <Contacts />
      <Experiences />
      <Educations />
      <Skills />
    </Box>
  )
}

export default PrintIndex
