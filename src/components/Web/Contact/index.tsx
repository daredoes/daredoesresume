import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar';

type Frontmatter = {
    title: string,
    printable: boolean,
    visible: boolean,
    external_url: string,
    icon: Array<any>
}

type Props = {
    frontmatter: Frontmatter,
    html: string,
    print: boolean

}

const Contact = ({frontmatter, html, print}: Props) => {
    const { title, icon, external_url } = frontmatter;
    return print ? (
        <span className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}></span> 
    ) : (
        <Card variant='outlined'>
            <CardHeader
            style={{ padding: '8px' }}
            avatar={
                <Avatar aria-label="recipe">
                    <a href={external_url} target="_blank" rel="noopener noreferrer">
                        <IconButton color='secondary'>
                            <FontAwesomeIcon icon={icon} fixedWidth />    
                        </IconButton>
                    </a>
                </Avatar>
            }
            subheader={(<div className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}></div> )}
            title={(<a href={external_url} target="_blank" rel="noopener noreferrer">{title}</a>)}
            titleTypographyProps={{ variant: 'h6'}}
            />
        </Card>
    )

}

export default Contact