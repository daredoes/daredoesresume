import React from 'react'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';

type Frontmatter = {
    title: string,
    weight: number,
    printable: boolean,
    visible: boolean,
    graduation_date: string,
    display_date: string
}

type Props = {
    frontmatter: Frontmatter,
    html: string

}

const Contact = ({frontmatter, html}: Props) => {
    const { title, graduation_date, printable, visible } = frontmatter;
    return (
        <>
            {printable && (
                <Box displayPrint='block' display='none'>
                    <Grid container direction='column'>
                        <Grid item>
                            <Grid container justify='space-between' alignItems='center'>
                                <Grid item>
                                    <Typography style={{fontWeight: 'bolder'}} variant='subtitle1'>
                                        {title}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{fontWeight: 'bolder'}} variant='subtitle1'>
                                        {graduation_date}
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
            <Box displayPrint='none'>
                <Card variant='outlined'>
                    <CardHeader
                    style={{ padding: '8px' }}
                    avatar={
                        <Typography style={{ maxWidth: '75px'}} align='center'>
                            {graduation_date}
                        </Typography>
                    }
                    subheader={(<div className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}></div> )}
                    title={title}
                    titleTypographyProps={{ variant: 'h6'}}
                    />
                </Card>
            </Box>
        </>
    )
}

export default Contact