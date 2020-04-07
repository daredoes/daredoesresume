import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from '../../components/Section'

class ContactItem extends React.Component {
    render() {
        const { title, icon, external_url } = this.props.frontmatter;
        const { html } = this.props;
        return (
            <div className="contact-item box">
                <div className="columns is-mobile is-tablet is-desktop">
                    <div className="flex-centered column is-2">
                        <a href={external_url} className="iconAnchor" target="_blank" rel="noopener noreferrer">
                            <div className="icon is-large">
                                <FontAwesomeIcon icon={icon} fixedWidth className="contactIcon"/>    
                            </div>
                        </a>
                    </div>
                    <div className="column is-10">
                        <div className="content">
                            <span className='has-text-weight-bold'>
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

ContactItem.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        external_url: PropTypes.string,
        icon: PropTypes.array,
    }),
    html: PropTypes.string
}

export default class ContactItemTemplate extends React.Component {
    render() {
        let { elements } = this.props;
        elements = elements.filter((edge) => edge.node.frontmatter && edge.node.frontmatter.visible);
        const children = elements.map((edge) => <ContactItem key={edge.node.id} {...edge.node} />);
        return (
            <Section title="Contact" elements={children} />
        )
    }
}

ContactItemTemplate.propTypes = {
    elements: PropTypes.array
}