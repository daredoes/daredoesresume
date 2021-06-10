import React, {useMemo} from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PrintIcon from '@material-ui/icons/Print'

import { makeStyles } from '@material-ui/core/styles';
import { openPrintDialog } from "@components/helpers"

const useStyles = makeStyles(() => ({
    root: {
      textTransform: "uppercase"
    }
  }));

interface Props {
    print?: boolean
}

const Footer: React.FunctionComponent<Props> = ({ children, print }) => {
    return (
        <footer className="no-print">
            <Grid container direction='column' justify='space-between' alignItems='center'>
                <Grid item>
                    <IconButton color='secondary' title='Print A Formatted Resumé' onClick={openPrintDialog}>
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