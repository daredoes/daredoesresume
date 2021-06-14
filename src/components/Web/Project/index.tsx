import React, { useMemo } from 'react'
import { kebabCase } from "lodash"

import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import TagIcon from '@material-ui/icons/Label'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Link from '@components/Link'
import Section from '@components/Section'

type Frontmatter = {
    title: string,
    date: string,
    description: string,
    templateKey: string,
    tags: string[],
}

type Fields = {
    slug: string
}

type Props = {
    fields: Fields,
    id: string,
    excerpt: string,
    frontmatter: Frontmatter,
    html: string,
    nonLinkTitle?: boolean
}

const Project: React.FunctionComponent<Props> = ({frontmatter, html, fields, excerpt, id, nonLinkTitle}) => {
    const { title, date, tags, description } = frontmatter;
    const { slug } = fields;

    const LinkOrSpan = useMemo(() => {
        return nonLinkTitle ? (
            title
          ) : (
            <Link
              to={slug}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          )
    }, [nonLinkTitle, title])

    const tagElements = useMemo(() => {
        if (!tags) return null;
        return tags.map(tag => (
            <Grid item key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`} style={{boxShadow: 'none'}}>
                <Chip clickable variant='outlined' label={tag} color='secondary' size='small' icon={<TagIcon />}/>
                </Link>
            </Grid>
          ))
    }, [tags])


    const gridProps = {
        direction: 'row',
        justify: 'flex-start',
        alignItems: 'flex-start',
        spacing: 1
    }
    return nonLinkTitle ? (
        <Section
        elements={
          <Card variant='outlined'>
            <CardHeader
            subheader={date}
            subheaderTypographyProps={{ variant: 'h6'}}
            title={(
            <>
            {LinkOrSpan}
            </>)}
            titleTypographyProps={{ variant: 'h5'}}
            style={{padding: '8px 16px'}}
            />
            <CardContent style={{paddingTop: '0', paddingBottom: '4px'}}>
                <div dangerouslySetInnerHTML={{ __html: html }}/>
                <Section
                    elements={tagElements}
                    className="tags"
                    normalHeader
                    asRow
                    gridProps={gridProps}
                    title="Tags"
                />
            </CardContent>
        </Card>
        }
        className="project"
        title={`${LinkOrSpan} • ${date}`}
      />
    ) : (
        <Card variant='outlined'>
            <CardHeader
            subheader={date}
            subheaderTypographyProps={{ variant: 'h6'}}
            title={(
            <>
            {LinkOrSpan}
            </>)}
            titleTypographyProps={{ variant: 'h5'}}
            style={{padding: '8px 16px'}}
            />
            <CardContent style={{paddingTop: '0', paddingBottom: '4px'}}>
                <div dangerouslySetInnerHTML={{ __html: html }}/>
                <Section
                    elements={tagElements}
                    className="tags"
                    normalHeader
                    asRow
                    gridProps={gridProps}
                    title="Tags"
                />
            </CardContent>
        </Card>
    )

}

export default Project