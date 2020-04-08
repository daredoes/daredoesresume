import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends React.Component {
    render() {
        const { title, icon, external_url } = this.props.frontmatter;
        const { html, print } = this.props;
        return print ? (
            <span className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}></span> 
        ) : (
            <div className="two-part-card">
                <div>
                    <div>
                        <a href={external_url} className="icon icon-medium" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={icon} fixedWidth size="lg"/>    
                        </a>
                    </div>
                    <div>
                        <h5 className='has-text-weight-bold text-wrap'>
                            {title}
                        </h5>
                        <div className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        external_url: PropTypes.string,
        icon: PropTypes.array,
    }),
    html: PropTypes.string,
    print: PropTypes.bool,
}

Contact.defaultProps = {
    print: false
}

export default Contact;