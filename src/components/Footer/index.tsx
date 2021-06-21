import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PrintIcon from '@material-ui/icons/Print'

import relativeDate from "tiny-relative-date"
import { useLightDark } from '@theme/LightDarkContext'

interface Props {
    printButton?: Boolean
}

interface Site {
    buildTime?: string
}

interface Query {
    site?: Site
}

const Footer: React.FunctionComponent<Props> = ({ children, printButton }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                buildTime
            }
        }
    `) as Query

    const buildDate = React.useMemo(() => {
        if (!data?.site?.buildTime) return 'Unknown';
        return relativeDate(data.site.buildTime)
    }, [data.site.buildTime])
    const { print } = useLightDark()
    return (
        <footer>
            <Box p={printButton ? 0 : 1}>
                <Grid container direction='column' justify='space-between' alignItems='center'>
                    {printButton && (<Grid component={Box} displayPrint='none' item>
                        <IconButton color='secondary' title='Print A Formatted Resumé' onClick={print}>
                            <PrintIcon />
                        </IconButton>
                    </Grid>)}
                    {children}
                    <Grid item>
                        <Typography style={{textTransform: 'capitalize'}}>
                            Last Updated: {buildDate}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    )
}

export default Footer