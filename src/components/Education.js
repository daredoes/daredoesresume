import React from 'react'
import PropTypes from 'prop-types'

class Education extends React.Component {
    render() {
        const { title, graduation_date } = this.props.frontmatter;
        const { html, print } = this.props;
        return print ? (<div>
            <div className="one-part-card-printed">
                <h6 className="">
                    {title}
                </h6>
                <h6 className="">
                    {graduation_date}
                </h6>
            </div>
            <div className="dangerous-html mx-2" dangerouslySetInnerHTML={{ __html: html}}>
            </div> 
        </div>) : (
            <div className="two-part-card">
                <div >
                    <div>
                        <span className="text-center text-dark text-wrap p-1">
                            {graduation_date}
                        </span>
                    </div>
                    <div>
                        <span className='font-weight-bold text-wrap'>
                            {title}
                        </span>
                        <div className="dangerous-html" dangerouslySetInnerHTML={{ __html: html}}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Education.propTypes = {
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        weight: PropTypes.number,
        printable: PropTypes.bool,
        visible: PropTypes.bool,
        graduation_date: PropTypes.string,
        print: PropTypes.bool,
        display_date: PropTypes.string,
    }),
    html: PropTypes.string
}

Education.defaultProps = {
    print: false
}

export default Education;