import React from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'

class Contact extends React.Component {
  render(){
    return (
      <div>Contact Stuff
        <svg style={{"width": "24px", "height":"24px"}} viewBox="0 0 24 24">
        <path fill="#000000" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
        </svg>
        <i className="fab fa-linkedin"></i>
      </div>
    )
  }
}

export default connect(null, null)(Contact)
