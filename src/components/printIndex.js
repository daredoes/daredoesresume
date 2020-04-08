import React from "react"

import Profile from "./profile"
import Contacts from "./public/contacts.js"
import Experiences from "./public/experiences.js"
import Educations from "./public/educations.js"
import Skills from "./public/skills.js"

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
