import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'
import {logout} from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children} = props

  return (
    <div id="main">
      <h1>jt wang</h1>
      <nav>
        <NavLink to="/about">/about me</NavLink>
        <NavLink to="/portfolio">/my portfolio</NavLink>
        <NavLink to="/blog">/blog</NavLink>
      </nav>
      <div id="content">
      {children}
      </div>
    </div>
  )
}


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(null, null)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
}
