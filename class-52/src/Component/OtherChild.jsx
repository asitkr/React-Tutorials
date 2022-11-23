import React, { useContext } from 'react';
import { ColorInfo } from '../App';

export default function OtherChild() {

    const { appColor } = useContext(ColorInfo);

  return (
    <div>
        <h1 style={{color: appColor}}>OtherChild</h1>
    </div>
  )
}
