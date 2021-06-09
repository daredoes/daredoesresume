import React from "react"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Profile from "./Web/Profile"
import Hobbies from "./Hobbies"
import Skills from "./Skills"
import Contacts from "./Web/Contacts"
import Educations from "./Educations"
import Experiences from "./Web/Experiences"
import Projects from "./Projects"

import ResponsiveColumns from "./responsive-columns"

const PublicIndex = () => {
  const columns = [
    [<Experiences />, <Contacts />],
    [<Projects />, <Educations />, <Skills />, <Hobbies />],
  ]
  return (
    <Grid container spacing={3} direction='column' alignItems='center' justify='center' className="no-print">
      <Grid item xs={12} lg={8}>
        <Paper elevation={5}>
          <Profile />
          <ResponsiveColumns items={columns} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PublicIndex
