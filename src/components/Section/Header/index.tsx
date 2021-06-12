import React, {useMemo} from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    web: {
      textTransform: "uppercase",
      fontWeight: 'bolder'
    },
    print: {
        textTransform: "capitalize",
        fontWeight: 'bolder'
      },
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

    const printStyle = useMemo(() => {
        return print ? {paddingTop: '0', paddingBottom: '0'} : {}
    }, [print])

    return (
        <Grid container spacing={1} direction='column' justify='space-between'>
            <Grid style={printStyle} item xs={12}>
                <Typography variant='h5' classes={{root: print ? classes.print : classes.web}} className={className}>{finalTitle}</Typography>
            </Grid>
            <Grid style={printStyle} item xs={12}>
                <hr/>
            </Grid>
            <Grid style={printStyle} item xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

export default SectionHeader