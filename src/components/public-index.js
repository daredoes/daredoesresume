import React from "react"
import Profile from "./profile"
import Hobbies from "./public/Hobbies"
import Skills from "./public/Skills"
import Contacts from "./public/Contacts"
import Educations from "./public/Educations"
import Experiences from "./public/Experiences"
import Projects from "./public/Projects"

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
