import React from "react"

import Profile from "./Web/Profile"
import Contacts from "./Web/Contacts"
import Experiences from "./Web/Experiences"
import Educations from "./Web/Educations"
import Skills from "./Web/Skills"

const PrintIndex = () => {
  return (
    <div className="print-only print-container p-1">
      <Profile />
      <Contacts />
      <Experiences />
      <Educations />
      <Skills />
    </div>
  )
}

export default PrintIndex
