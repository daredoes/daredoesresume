import React from 'react'
import PropTypes from 'prop-types'
import Section from '../../components/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SkillItem extends React.Component {
    render() {
        const { title, icon } = this.props.frontmatter;
        return (
            <div className="flex-item">
                <span className="tag is-primary">
                    <FontAwesomeIcon icon={icon || "keyboard"} />&nbsp;{title}
                </span>
            </div>
        )
    }
}

SkillItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        icon: PropTypes.arrayOf([PropTypes.string]),
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
    }),
    html: PropTypes.string
}

export default class SkillTemplate extends React.Component {
    render() {
        let { elements } = this.props;
        elements = elements.filter((edge) => edge.node.frontmatter && edge.node.frontmatter.visible);
        const children = elements.map((edge) => <SkillItem key={edge.node.id} {...edge.node} />);
        return (
            <Section elements={<div className="flex-row">{children}</div>} title={<span><s>Buzz Words</s><br/>&#47;&#47; Skills & Software</span>} />
        )
    }
}

SkillTemplate.propTypes = {
    elements: PropTypes.array
}