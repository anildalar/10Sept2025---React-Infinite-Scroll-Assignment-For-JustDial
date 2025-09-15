import React, { useContext } from 'react'
import { UserContext } from './A';

export default function D() {
    //2.1 
    const user = useContext(UserContext);
    return (
        <div>
            <h1>D Component</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </div>
    )
}
