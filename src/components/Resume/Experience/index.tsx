import React, { useMemo } from 'react'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Link from '@components/Link'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      '@media print': {
        boxShadow: 'none',
        '& svg': {
            display: 'none'
        }
      },
    }
}));

type Frontmatter = {
    title: string,
    weight: number,
    date: string,
    display_date: string,
    name: string,
    printable: boolean,
    visible: boolean,
    external_url: string,
}

type Props = {
    frontmatter: Frontmatter,
    html: string

}

const Experience: React.FunctionComponent<Props> = ({frontmatter, html}) => {
    const { title, display_date, name, external_url, printable, visible } = frontmatter;
    const classes = useStyles()

    const LinkOrSpan = useMemo(() => {
        return external_url ? (
            <Link
              to={external_url}
              anchorTag={true}
              anchorSize="small"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.root}
            >
              {name}
            </Link>
          ) : (
            <span>&bull;&nbsp;{name}</span>
          )
    }, [external_url, name])


    return (
        <>
        {printable && (
            <Box displayPrint='block' display='none'>
                <Grid container direction='column'>
                    <Grid item>
                        <Grid container justify='space-between' alignItems='center'>
                            <Grid item>
                                <Typography style={{fontWeight: 'bolder'}} variant='subtitle1'>
                                    {LinkOrSpan} - {title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{fontWeight: 'bolder'}} variant='subtitle1'>
                                    {display_date}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <span className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}></span> 
                    </Grid>
                </Grid>
            </Box>
        )}
        {visible && <Box displayPrint='none'>
            <Card variant='outlined'>
                <CardHeader
                subheader={display_date}
                subheaderTypographyProps={{ variant: 'h6'}}
                title={(
                <>
                {title}&nbsp;{LinkOrSpan}
                </>)}
                titleTypographyProps={{ variant: 'h5'}}
                style={{padding: '8px 16px'}}
                />
                <CardContent style={{paddingTop: '0', paddingBottom: '0'}}>
                    <div dangerouslySetInnerHTML={{ __html: html }}/>
                </CardContent>
            </Card>
        </Box>}
        
        </>
    )

}

export default Experience