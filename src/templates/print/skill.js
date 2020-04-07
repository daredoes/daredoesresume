import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../components/PrintableSectionHeader'

class SkillItem extends React.Component {
    render() {
        const { title } = this.props.frontmatter;
        return (
            <span className="">
                {title}
            </span>
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
        elements = elements.filter((edge) => edge.node.frontmatter && edge.node.frontmatter.printable);
        const children = elements.map((edge) => <SkillItem key={edge.node.id} {...edge.node} />);
        const modifiedChildren = [];
        children.forEach(function(v, i) {
            modifiedChildren.push(v);
            if (i < children.length-1) {
                modifiedChildren.push(<span key={i}> • </span>)
            }            
        })
        return (
            <div>
                <SectionHeader title="Skills & Software" />
                <div className="is-size-7">
                    {modifiedChildren}
                </div>
            </div>
        )
    }
}

SkillTemplate.propTypes = {
    elements: PropTypes.array
}