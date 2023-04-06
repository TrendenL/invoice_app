import React from 'react'

export default function Invoice(props) {
    const { fromStreetAddress, toStreetAddress } = props
  return (
    <div>
        <h2>{fromStreetAddress}</h2>
        <h2>{toStreetAddress}</h2>
    </div>
  )
}
