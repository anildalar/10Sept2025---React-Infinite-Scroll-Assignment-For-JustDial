import React, { useContext } from 'react'
import { MyInfoContext } from './AA';

export default function CC(p) {
    const surname = useContext(MyInfoContext);
    return (
        <div>
            <h1>CC Component Hello, {p.myfname} {surname}</h1>
        </div>
    )
}
