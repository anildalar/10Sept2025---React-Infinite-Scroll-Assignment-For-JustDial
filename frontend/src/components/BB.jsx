import React from 'react'
import CC from './CC'

export default function BB(props) {
    return (
        <div>
            <h1>BB Component Hello , {props.myfirstname}</h1>
            <CC myfname={props.myfirstname} />
        </div>
    )
}
