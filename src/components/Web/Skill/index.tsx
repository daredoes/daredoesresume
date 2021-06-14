import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography'


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
    const { title, icon, printable, visible } = frontmatter;

    return (
      <>
      {printable && <Box display="none" displayPrint='block' className="dangerous-html">
            <Typography style={{fontWeight: 'bolder'}} variant='caption' component='span'>
                <FontAwesomeIcon icon={icon} fixedWidth />&nbsp; 
            </Typography>
            <Typography style={{fontWeight: 'bolder'}} variant='caption'>{title}</Typography> 
        </Box>}
        {visible && <Box displayPrint="none">
          <Grid item key={title}>
              <Chip variant='outlined' label={title} color='secondary' size='medium' icon={<FontAwesomeIcon icon={icon} />} />                 
          </Grid>
        </Box>}
      </>
    )
}

export default Skill