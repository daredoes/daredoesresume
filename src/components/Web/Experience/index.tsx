import React, { useMemo } from 'react'

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
              className="title text-info h4"
              to={external_url}
              anchorTag={true}
              anchorSize="xs"
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
        <Card raised>
            <CardHeader
            subheader={display_date}
            subheaderTypographyProps={{ variant: 'h5'}}
            title={(
            <>
            {title}&nbsp;{LinkOrSpan}
            </>)}
            titleTypographyProps={{ variant: 'h4'}}
            />
            <CardContent>
                <div dangerouslySetInnerHTML={{ __html: html }}>
                    
                </div>
            </CardContent>
        </Card>
    )

}

export default Experience