import React from "react"

import Profile from "./profile"
import Contacts from "./public/Contacts"
import Experiences from "./public/Experiences"
import Educations from "./public/Educations"
import Skills from "./public/Skills"

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
