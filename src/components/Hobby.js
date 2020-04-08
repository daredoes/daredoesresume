import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Hobby extends React.Component {

    render() {
      const { title, icon } = this.props.frontmatter;
      return (
          <div className="hobby">
              <span>
                  <FontAwesomeIcon icon={icon} />&nbsp;{title}
              </span>
          </div>
      )
    }
}

Hobby.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        icon: PropTypes.array
    }),
    html: PropTypes.string
}

export default Hobby;