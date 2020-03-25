// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'

const Header = ({ headerTitle, headerDescription, headerImage, headerImageTitle, headerImageAlt }) => (
  <header>
    <div className="row row-header">
        <div className="description-wrapper">
            <div className="description-block">
                <div className="title-block">
                    <h1>{headerTitle}</h1>
                </div>
                
                <div className="text-block">
                  <h2>{headerDescription}</h2>
                </div>
            </div>
        </div>
    </div>

    <div className="poster-bg-block image-size-cover-block">
      <Img fluid          = {headerImage}
           objectFit      = "cover"
           objectPosition = "50% 50%"
           title          = {headerImageTitle}
           alt            = {headerImageAlt}
           imgStyle       = {{ top: '50%', left: '50%'}} />
    </div>
  </header>
)

Header.propTypes = {
  headerTitle: PropTypes.string,
}

Header.defaultProps = {
  headerTitle: ``,
}

export default Header
