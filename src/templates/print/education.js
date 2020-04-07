import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/PrintableSectionHeader'

class EducationItem extends React.Component {
    render() {
        const { title, graduation_date } = this.props.frontmatter;
        const { html } = this.props;
        return (
            <div className="print-header-items">
                    <span className="is-narrow is-size-6 has-text-weight-bold">
                        {title}
                    </span>
                    <span className="is-narrow is-pulled-right is-size-6 has-text-weight-bold">
                        {graduation_date}
                    </span>
                <div className="body is-size-7" dangerouslySetInnerHTML={{ __html: html}}>
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
        elements = elements.filter((edge) => edge.node.frontmatter && edge.node.frontmatter.printable);
        const children = elements.map((edge) => <EducationItem key={edge.node.id} {...edge.node} />);
        return (
            <div>
                <SectionHeader title="Education" />
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

EducationTemplate.propTypes = {
    elements: PropTypes.array
}