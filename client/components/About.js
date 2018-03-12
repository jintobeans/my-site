import React from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'

class About extends React.Component {
  render(){
    return (
      <div id="about">
        <img src='/jt-pic.jpg' />
        <div id="about-info">
          <h4>Hello I am me</h4>
          <p>
            More stuff about me <br />
            Hello <br />
            I like to do coding <br />
            Lallalalal <br />
            Find more text to write here later
          </p>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(About)
