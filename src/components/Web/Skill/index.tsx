import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chip from '@material-ui/core/Chip';


type Frontmatter = {
    title: string,
    weight: number,
    printable: boolean,
    visible: boolean,
    icon: Array<any>,
}

type Props = {
    frontmatter: Frontmatter,
    html: string
}

const Skill: React.FunctionComponent<Props> = ({frontmatter, html}) => {
    const { title, icon } = frontmatter;

    return (
      <>
        <Box displayPrint='block' display='none'>
          <span className="dangerous-html dots" dangerouslySetInnerHTML={{ __html: title}}></span>
        </Box>
        <Box displayPrint='none'>
          <Grid item key={title}>
              <Chip variant='outlined' label={title} color='secondary' size='medium' icon={<FontAwesomeIcon icon={icon} />} />                 
          </Grid>
        </Box>
      </>
    )
}

export default Skill