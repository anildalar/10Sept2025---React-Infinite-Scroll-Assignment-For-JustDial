import React, { useContext } from 'react'
import D from './D'
import { UserContext } from './A';

export default function C() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>C Component</h1>
            <h1>Hello, {user}</h1>
            <D />
        </div>
    )
}
