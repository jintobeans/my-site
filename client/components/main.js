import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'
import {logout} from '../store'
import {Contact} from '../components'

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
      <h1><NavLink to="/about">jt wang</NavLink></h1>
      <nav>
        <NavLink
        to="/about"
        activeClassName="active-nav">about</NavLink>
        <NavLink
        to="/portfolio"
        activeClassName="active-nav">portfolio</NavLink>
        <NavLink
        to="/blog"
        activeClassName="active-nav">blog</NavLink>
      </nav>
      <div id="content">
      {children}
      </div>
      <div id="contact">
        <Contact />
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
