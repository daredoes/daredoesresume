import React from 'react'

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

const Project: React.FunctionComponent<Props> = ({frontmatter, html }) => {
    const { title, icon } = frontmatter;

    return (
      <Grid item key={title}>
          <Chip variant='outlined' label={title} color='secondary' size='medium' icon={<FontAwesomeIcon icon={icon} />} />                 
      </Grid>
    )

}

export default Project