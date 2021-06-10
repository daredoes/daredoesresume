import React from 'react'

import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chip from '@material-ui/core/Chip';
import useDetectPrint from 'use-detect-print';


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
    const print = useDetectPrint()

    return print ? (
      <span className="dangerous-html dots" dangerouslySetInnerHTML={{ __html: title}}></span>
    ) : (
      <Grid item key={title}>
          <Chip variant='outlined' label={title} color='secondary' size='medium' icon={<FontAwesomeIcon icon={icon} />} />                 
      </Grid>
    )

}

export default Skill