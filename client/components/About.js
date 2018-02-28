import React from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'

class About extends React.Component {
  render(){
    return (
      <div id="about">About Me Stuff</div>
    )
  }
}

export default connect(null, null)(About)
