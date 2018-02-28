import React from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'

class Blog extends React.Component {
  render(){
    return (
      <div>Blog Stuff</div>
    )
  }
}

export default connect(null, null)(Blog)
