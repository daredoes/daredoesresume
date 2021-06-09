import React from 'react'

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
    html: string,
    print: boolean

}

const Contact = ({frontmatter, html, print}: Props) => {
    const { title, graduation_date } = frontmatter;
    return print ? (
        <div>
            <div className="one-part-card-printed">
                <h6 className="">
                    {title}
                </h6>
                <h6 className="">
                    {graduation_date}
                </h6>
            </div>
            <div className="dangerous-html mx-2" dangerouslySetInnerHTML={{ __html: html}}>
            </div> 
        </div>
    ) : (
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
    )

}

export default Contact