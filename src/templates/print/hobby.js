import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/PrintableSectionHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HobbyItem extends React.Component {

    render() {
        const { title, icon } = this.props.frontmatter;
        return (
            <div className="flex-item">
                <span className="tag is-primary">
                    <FontAwesomeIcon icon={icon} />&nbsp;{title}
                </span>
            </div>
        )
    }
}

HobbyItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        icon: PropTypes.array
    }),
    html: PropTypes.string
}

export default class HobbyTemplate extends React.Component {
    render() {
        let { elements } = this.props;
        elements = elements.filter((edge) => edge.node.frontmatter && edge.node.frontmatter.printable);
        const children = elements.map((edge) => <HobbyItem key={edge.node.id} {...edge.node} />);
        return (
            <div>
                <SectionHeader title="Hobbies" />
                <div className="flex-row">
                    {children}
                </div>
            </div>
        )
    }
}

HobbyTemplate.propTypes = {
    elements: PropTypes.array
}