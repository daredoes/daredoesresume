import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'

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
    index?: number
}

const Contact = ({frontmatter, html, index}: Props) => {
    const { title, icon, external_url, printable, visible } = frontmatter;
    const printableUrl = React.useMemo(() => {
        if (external_url.indexOf(':') != -1) {
            if (external_url.indexOf('http') == 0) {
                return external_url
            }
            return external_url.split(':')[1]
        }
        return external_url
    }, [external_url])
    return (
        <>
        {printable && <Box display="none" displayPrint='block' className="dangerous-html">
            <Typography style={{fontWeight: 'bolder'}} component={'a'} href={external_url}>{index ? '♦ ' : ''}{printableUrl}</Typography> 
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