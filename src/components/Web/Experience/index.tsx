import React, { useMemo } from 'react'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import useDetectPrint from 'use-detect-print';

import Link from '@components/Link'

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

    const LinkOrSpan = useMemo(() => {
        return external_url ? (
            <Link
              to={external_url}
              anchorTag={true}
              anchorSize="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </Link>
          ) : (
            <span className="title h4">&bull;&nbsp;{name}</span>
          )
    }, [external_url, name])


    return (
        <>
        {printable && (<Box displayPrint='block' display='none'>
            <span className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}></span> 
        </Box>)}
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