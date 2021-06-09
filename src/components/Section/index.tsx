import React, { useState, useMemo, useCallback } from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

import SectionHeader from './Header'

const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'center'
    }
  }));

const Section = ({elements, title, withProgress, className, asRow, normalHeader, sectionHeaderClassName, print, gridProps}) => {
    const classes = useStyles()

    const [active, setActive] = useState(0)
    const max = useMemo(() => {
        return elements.length || 1

    }, [elements])

    const scrollActive = useCallback((forwards) => {
        const new_active =
        (active + (forwards ? 1 : -1) + max) % max
        setActive(new_active)
    }, [active, max, setActive])

    const width = useMemo(() => {
        return ((active+1) / max) * 100
    }, [active, max])

    const makeScrollElement = useCallback((forwards) => {
        const Direction = forwards ? ChevronRightIcon : ChevronLeftIcon
        return (
          <Grid
            onClick={() => {
              scrollActive(forwards)
            }}
            className={classes.root}
            item
            xs={1}
            alignItems='center'
            justify='center'
            alignContent='center'
          >
                <IconButton>
                    <Direction
                        color="secondary"
                    />
                </IconButton>
          </Grid>
        )
    }, [scrollActive])

    const progressBar = useMemo(() => {
        return (
            <Grid container direction='row' alignItems='center' justify='space-between'>
                {makeScrollElement(false)}
                <Grid item xs={10}>
                    <LinearProgress color="secondary" variant="determinate" value={width} />
                </Grid>
                {makeScrollElement(true)}
            </Grid>
        )
    }, [makeScrollElement, width])

    const hasTitle = useMemo(() => {
        !(title === undefined || title === null)
    }, [title])

    const header = useMemo(() => {
        if (title === undefined || title === null) {
            return null
        }
        if (normalHeader) {
            return (<Typography variant='h4' className={sectionHeaderClassName}>{title}</Typography>)
        }
        return (
            <SectionHeader
            className={sectionHeaderClassName}
            title={title}
            print={print}
            >
            {!print && withProgress && progressBar}
            </SectionHeader>
        )
    }, [hasTitle, normalHeader, sectionHeaderClassName, title, print, withProgress, progressBar])
    
    return (
        <div
            className={`section${
            className !== undefined ? ` section-${className}` : ``
            } ${asRow ? `as-row` : ``}`}
        >
            {header}
            <Grid container {...gridProps}>
            {!print && withProgress ? elements[active] : elements}
            </Grid>
        </div>
    )
    

}

export default Section