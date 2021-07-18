import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PrintIcon from '@material-ui/icons/PrintOutlined'
import { makeStyles } from '@material-ui/core/styles';

import { useLightDark } from '@theme/LightDarkContext'
import '@src/scss/profile.scss'

const useStyles = makeStyles(() => ({
    root: {
      textTransform: "uppercase",
      fontWeight: 'bolder'
    },
    grid: {
        marginTop: '80px !important'
    },
    printGrid: {
      marginBottom: '-8px'
    }
  }));

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
            title
            first_name
            middle_name
            last_name
            public_name
            print_name
            birth_date
        }
        }
    }
  `)

  const frontmatter = data.markdownRemark.frontmatter
  const classes = useStyles()
  const { print } = useLightDark()
  return (
    <>
      <Box displayPrint='block' display='none'>
        <Grid container spacing={1}>
          <Grid item className={classes.printGrid}>
            <Typography variant='h5'>{frontmatter.print_name}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box displayPrint='none'>
        <Grid classes={{root: classes.grid}} spacing={2} container direction='column' justify='flex-start' alignItems='center'>
            <div className="profile-photo">
            </div>
            <Grid item>
                <Typography className={classes.root} variant='h5'>
                    Call me <Typography className={classes.root} color='textSecondary' variant='h5' component='span'>{frontmatter.public_name}</Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                <Button
                  variant='outlined'
                  onClick={print}
                  startIcon={<PrintIcon/>}
              >
                  Print Resumé/CV PDF
              </Button>
                </Typography>
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Profile
