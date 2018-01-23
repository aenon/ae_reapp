import React from 'react'

const LocationItem = () => (
  <a className="cn" onClick="handleClick">
    Address
    {/* <span className="createdAt">{ moment(this.props.timestamp).fromNow() }</span> */}
    <span className="glyphicon glyphicon-menu-right"></span>
  </a>
)
