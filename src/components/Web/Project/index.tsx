import React, { useMemo } from 'react'
import { kebabCase } from "lodash"

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
            <span>{title}</span>
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
                <Button variant='outlined' size='small' startIcon={<TagIcon />}>                  
                {tag}
                </Button>
                </Link>
            </Grid>
          ))
    }, [tags])


    const gridProps = {
        direction: 'row',
        justify: 'space-between',
        alignItems: 'flex-start',
        spacing: 1
    }
    console.log(gridProps)
    return nonLinkTitle ? (
        <Section
        elements={
          <div className="one-part-card">
            <div className="card-body">
              {description && (
                <div className="card-text dangerous-html">{description}</div>
              )}
              {description && <hr />}
              <div
                className="dangerous-html card-text"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
              <Section
                elements={tagElements}
                className="tags"
                normalHeader
                asRow
                title="Tags"
                gridProps={gridProps}
              />
            </div>
          </div>
        }
        className="project"
        title={
          <span>
            {LinkOrSpan}
            <wbr /> • 
            <wbr />
            {date}
          </span>
        }
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
            <CardContent style={{paddingTop: '0', paddingBottom: '0'}}>
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