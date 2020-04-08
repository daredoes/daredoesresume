import React from "react"

import Profile from "./profile"
import Contacts from "./Contacts"
import Experiences from "./Experiences"
import Educations from "./Educations"
import Skills from "./Skills"

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
