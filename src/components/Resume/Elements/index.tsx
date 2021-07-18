import React, { useMemo } from 'react'

import Box from '@material-ui/core/Box'
import Section, {SectionProps } from '@components/Section'
import Grid, {GridProps} from '@material-ui/core/Grid'

interface Frontmatter {
    printable?: boolean,
    visible?: boolean,
    [key: string]: any
}

interface Node {
    frontmatter: Frontmatter,
    id: string | number,
    [key: string]: any
}

interface Edges {
    node: Node
}

interface Data {
    edges: Edges[]
}

interface Props {
    component: React.FC<any>,
    data: Data,
    gridProps?: GridProps,
    printedSectionProps?: SectionProps,
    sectionProps?: SectionProps,
}

const Elements: React.FC<Props> = ({component: Component, data, gridProps, sectionProps, printedSectionProps}) => {

    const elements = useMemo(() => {
        return data.edges.filter(
          edge =>
            edge.node.frontmatter &&
            (edge.node.frontmatter.printable || edge.node.frontmatter.visible)
        ).map(edge => {return (
            <Grid {...gridProps} component={Box} display={edge.node.frontmatter.visible ? 'block' : 'none'} displayPrint={edge.node.frontmatter.printable ? 'block' : 'none'} item key={edge.node.id}>
                <Component {...edge.node} />
            </Grid>
        )})
    }, [data, gridProps])
    return (
        <>
        <Box display='none' displayPrint='block'>
            <Section
            elements={elements}
            print={true}
            {...printedSectionProps}
            />
        </Box>
        <Box displayPrint='none'>
            <Section
            elements={elements}
            {...sectionProps}
            />
        </Box>
        </>
    )
}

export default Elements