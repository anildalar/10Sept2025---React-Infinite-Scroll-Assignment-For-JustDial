import React from 'react'
import C from './C'

export default function B() { //formal arg name can be anything but props is stands
    return (
        <div>
            <h1>B Component</h1>
            <C />
        </div>
    )
}
