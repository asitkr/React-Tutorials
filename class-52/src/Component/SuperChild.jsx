import React, { useContext } from 'react'
import { ColorInfo } from '../App'

export default function SuperChild() {

    const {appColor} = useContext(ColorInfo)

  return (
    <div>
        <h1 style={{color: appColor}}>SuperChild</h1>
    </div>
  )
}
