import React, { useMemo } from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
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
    html: string,
    print?: boolean

}

const Experience: React.FunctionComponent<Props> = ({frontmatter, html, print}) => {
    const { title, display_date, name, external_url } = frontmatter;

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


    return print ? (
        <span className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}></span> 
    ) : (
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
    )

}

export default Experience