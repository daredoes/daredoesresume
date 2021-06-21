import React from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Profile from "./Resume/Profile"
import Hobbies from "./Resume/Hobbies"
import Skills from "./Resume/Skills"
import Contacts from "./Resume/Contacts"
import Educations from "./Resume/Educations"
import Experiences from "./Resume/Experiences"
import Projects from "./Resume/Projects"

import ResponsiveColumns from "./responsive-columns"

const PublicIndex = () => {
  const columns = [
    [<Experiences key="exp" />, <Contacts key="contact" />],
    [
      <Projects key="projects" />,
      <Educations key="edu" />,
      <Skills key="skillz" />,
      <Hobbies key="hobby" />,
    ],
  ]
  return (
    <Box displayPrint="none">
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justify="center"
        className="no-print"
      >
        <Grid item xs={12} lg={8}>
          <Paper elevation={3}>
            <Profile />
            <ResponsiveColumns items={columns} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PublicIndex
