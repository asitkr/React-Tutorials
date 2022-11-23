import React, { useContext } from 'react';
import { ColorInfo } from '../App';
import SuperChild from './SuperChild';

export default function Child() {

    const { appColor } = useContext(ColorInfo);

    //console.warn("appcolor ", appColor)

    return (
        <div style={{color: appColor}}>
            <h1>Child Component</h1>
            <SuperChild />
        </div>
    )
}
