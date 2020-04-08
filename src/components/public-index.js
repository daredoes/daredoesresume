import React from "react"
import Profile from "./profile"
import Hobbies from "./Hobbies"
import Skills from "./Skills"
import Contacts from "./Contacts"
import Educations from "./Educations"
import Experiences from "./Experiences"
import Projects from "./Projects"

import ResponsiveColumns from "./responsive-columns"

const PublicIndex = () => {
  const columns = [
    [<Experiences />, <Contacts />],
    [<Projects />, <Educations />, <Skills />, <Hobbies />],
  ]
  return (
    <div className="no-print">
      <Profile />
      <ResponsiveColumns items={columns} />
    </div>
  )
}

export default PublicIndex
