import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Skill extends React.Component {

    render() {
      const { title, icon } = this.props.frontmatter;
      const { print, html } = this.props;
      return print ? <span className="dangerous-html dots" dangerouslySetInnerHTML={{ __html: title}}></span> : (
          <div className="skill">
              <span>
                  <FontAwesomeIcon icon={icon} />&nbsp;{title}
              </span>
          </div>
      )
    }
}

Skill.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        print: PropTypes.bool,
        icon: PropTypes.array
    }),
    html: PropTypes.string
}

Skill.defaultProps = {
    print: false
}

export default Skill;