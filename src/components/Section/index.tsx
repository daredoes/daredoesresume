import React, { useState, useMemo, useCallback } from "react"
import Grid, {GridProps} from '@material-ui/core/Grid'
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

export interface SectionProps {
    elements: React.FC<any>[],
    title?: string,
    withProgress?: boolean | ((number) => boolean),
    normalHeader?: boolean,
    className?: string,
    print?: boolean,
    gridProps?: GridProps
}

const Section: React.FC<SectionProps> = ({elements, title, withProgress, normalHeader, className, print, gridProps}) => {
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

    const useProgress = useMemo(() => {
        if (!withProgress) return false
        if (typeof withProgress === 'boolean') return withProgress
        console.log(typeof withProgress, elements.length)
        return withProgress(elements.length)
    }, [withProgress, elements.length])

    const header = useMemo(() => {
        if (title === undefined || title === null) {
            return null
        }
        if (normalHeader) {
            return (<Typography variant='h5' className={className}>{title}</Typography>)
        }
        return (
            <SectionHeader
            className={className}
            title={title}
            print={print}
            >
            {!print && useProgress && progressBar}
            </SectionHeader>
        )
    }, [hasTitle, normalHeader, className, title, print, useProgress, progressBar])
    return (
        <div>
            {header}
            <Grid container id={`grid${title}`} {...gridProps}>
            {!print && useProgress ? elements[active] : elements}
            </Grid>
        </div>
    )
}

export default Section