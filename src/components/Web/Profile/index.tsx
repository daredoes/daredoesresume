import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PrintIcon from '@material-ui/icons/PrintOutlined'
import { makeStyles } from '@material-ui/core/styles';
import useDetectPrint from 'use-detect-print';

import { openPrintDialog } from "@components/helpers"
import '@src/scss/profile.scss'

const useStyles = makeStyles(() => ({
    root: {
      textTransform: "uppercase",
      fontWeight: 'bolder'
    },
    grid: {
        marginTop: '80px !important'
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

  const print = useDetectPrint()

  const frontmatter = data.markdownRemark.frontmatter
  const classes = useStyles()
  return print ? (
    <Grid container spacing={1}>
      <Grid item>
        <Typography variant='h5'>{frontmatter.print_name}</Typography>
      </Grid>
    </Grid>
    ) : (
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
                onClick={openPrintDialog}
                startIcon={<PrintIcon/>}
            >
                Print Resumé/CV PDF
            </Button>
              </Typography>
          </Grid>
      </Grid>
  )
}

export default Profile
