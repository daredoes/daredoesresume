import React from "react"
import Profile from "./profile"
import Hobbies from "./public/hobbies"
import Skills from "./public/skills"
import Contacts from "./public/contacts"
import Educations from "./public/educations"
import Experiences from "./public/experiences"
import Projects from "./public/projects"

import ResponsiveColumns from "./responsiveColumns"

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
