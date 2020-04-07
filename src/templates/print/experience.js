import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/PrintableSectionHeader'

class ExperienceItem extends React.Component {
    render() {
        const { title, display_date, name } = this.props.frontmatter;
        const { html } = this.props;
        return (
            <div className="print-header-items">
                    <span className="is-narrow is-size-6 has-text-weight-bold">
                        {name} - {title}
                    </span>
                    <span className="is-narrow is-pulled-right is-size-6 has-text-weight-bold">
                        {display_date}
                    </span>
                <div className="body is-size-7" dangerouslySetInnerHTML={{ __html: html}}>
                </div>
            </div>
        )
    }
}

ExperienceItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        date: PropTypes.string,
        display_date: PropTypes.string,
        external_url: PropTypes.string,
        name: PropTypes.string
    }),
    html: PropTypes.string
}


export default class ExperienceTemplate extends React.Component {
    
    constructor(props) {
        super(props);
        this.experiences = this.props.elements.filter((edge) => edge.node.frontmatter && edge.node.frontmatter.printable);
        this.experiences = this.experiences.map((edge) => <ExperienceItem key={edge.node.id} {...edge.node}/>);
    }

    render() {
        const title = <span>Experience</span>
        if (this.experiences) {
            return (
                <div>
                    <SectionHeader title={title} />
                    <div>
                        {this.experiences}
                    </div>
                </div>
            )
        }
        return (
            <div>
                <SectionHeader title="Experience" />
                <div>
                    Pending.
                </div>
            </div>
        )
        
    }
}

ExperienceTemplate.propTypes = {
    elements: PropTypes.array
}