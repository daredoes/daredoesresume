import React from 'react'
import PropTypes from 'prop-types'
import Section from '../../components/Section'

class EducationItem extends React.Component {
    render() {
        const { title, graduation_date } = this.props.frontmatter;
        const { html } = this.props;
        return (
            <div className="contact-item box">
                <div className="columns is-mobile is-tablet is-desktop">
                    <div className="column is-2 is-paddingless flex-centered">
                        <p className="has-text-centered has-text-primary">
                            {graduation_date}
                        </p>
                    </div>
                    <div className="column is-10">
                        <div className="content">
                            <span className="is-size-5 has-text-weight-bold">
                                {title}
                            </span>
                            <div dangerouslySetInnerHTML={{ __html: html}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

EducationItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        graduation_date: PropTypes.string,
        display_date: PropTypes.string,
    }),
    html: PropTypes.string
}

export default class EducationTemplate extends React.Component {
    render() {
        let { elements } = this.props;
        elements = elements.filter((edge) => edge.node.frontmatter && edge.node.frontmatter.visible);
        const children = elements.map((edge) => <EducationItem key={edge.node.id} {...edge.node} />);
        return (
            <Section title="Education" elements={children} />
        )
    }
}

EducationTemplate.propTypes = {
    elements: PropTypes.array
}