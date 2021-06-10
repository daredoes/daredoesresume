import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar';
import useDetectPrint from 'use-detect-print';

type Frontmatter = {
    title: string,
    printable: boolean,
    visible: boolean,
    external_url: string,
    icon: Array<any>
}

type Props = {
    frontmatter: Frontmatter,
    html: string

}

const Contact = ({frontmatter, html}: Props) => {
    const { title, icon, external_url, printable, visible } = frontmatter;
    return (
        <>
        {printable && <Box display="none" displayPrint='block'>
            <span className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}></span> 
        </Box>}
        {visible && <Box displayPrint="none">
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
        </Box>}
        </>
    )

}

export default Contact