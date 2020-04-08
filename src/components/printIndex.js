import React from "react"

import Profile from "./profile"
import Contacts from "./public/contacts"
import Experiences from "./public/experiences"
import Educations from "./public/educations"
import Skills from "./public/skills"

const PrintIndex = () => {
  return (
    <div className="print-only print-container p-1">
      <Profile print />
      <Contacts print />
      <Experiences print />
      <Educations print />
      <Skills print />
    </div>
  )
}

export default PrintIndex
