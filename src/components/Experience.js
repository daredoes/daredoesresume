import React from 'react'
import PropTypes from 'prop-types'
import Link from '../link'

class Experience extends React.Component {
    render() {
        const { title, display_date, name, external_url } = this.props.frontmatter;
        const { html, print } = this.props;
        const LinkOrSpan = external_url ? <Link
        className="title text-info h4"
        to={external_url}
        anchorTag={true}
        anchorSize="xs"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </Link> : <span
                  className="title h4"
                >
                  &bull;&nbsp;{name}
                </span>;
        return print ? (<div>
            <div className="one-part-card-printed">
                <h6 className="">
                    {name}&nbsp;<span>-&nbsp;{title}</span>
                </h6>
                <h6 className="">
                    {display_date}
                </h6>
            </div>
            <div className="dangerous-html mx-2" dangerouslySetInnerHTML={{ __html: html}}>
            </div> 
        </div>) : (
            <div className="one-part-card">
                <div className="card-body">
                    <h4 className="card-title is-block">{title}&nbsp;
                    {LinkOrSpan}
                    </h4>  
                    <h5 className="card-subtitle h5 is-block">
                    {display_date}
                    </h5>
                    <div className="dangerous-html card-text" dangerouslySetInnerHTML={{ __html: html}}>
                    </div> 
                </div>
            </div>
        )
    }
}

Experience.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        date: PropTypes.string,
        display_date: PropTypes.string,
        external_url: PropTypes.string,
        print: PropTypes.bool,
        name: PropTypes.string
    }),
    html: PropTypes.string
}

Experience.defaultProps = {
    print: false
}

export default Experience;