import React, {useMemo} from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      textTransform: "uppercase",
      fontWeight: 'bolder'
    }
  }));

interface Props {
    title: object | string,
    className?: string,
    print?: boolean
}

const SectionHeader: React.FunctionComponent<Props> = ({ title, children, print, className }) => {
    const classes = useStyles()
    const finalTitle = useMemo(() => {
        return print ? title : <span>// {title}</span>
    }, [print, title])

    return (
        <Grid container direction='column' justify='space-between'>
            <Grid item xs={12}>
                <Typography variant='h5' classes={{root: classes.root}} className={className}>{finalTitle}</Typography>
            </Grid>
            <Grid item xs={12}>
                <hr/>
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

export default SectionHeader