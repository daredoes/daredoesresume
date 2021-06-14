import React from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PrintIcon from '@material-ui/icons/Print'

import { useLightDark } from '@theme/LightDarkContext'

const Footer: React.FunctionComponent = ({ children }) => {
    const { print } = useLightDark()
    return (
        <footer className="no-print">
            <Grid container direction='column' justify='space-between' alignItems='center'>
                <Grid item>
                    <IconButton color='secondary' title='Print A Formatted Resumé' onClick={print}>
                        <PrintIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography>
                        Last Updated: Now
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer