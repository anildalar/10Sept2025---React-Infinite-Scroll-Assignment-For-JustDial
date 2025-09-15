import React, { createContext, useState } from 'react'
import B from './B'


export const UserContext = createContext()
export default function A() {
    //2.1 Hooks Area / Data/State
    const [fname, setFname] = useState('Anil');
    return (
        <UserContext.Provider value={fname} >
            <div>
                <h1>A Component</h1>
                <B />
            </div>
        </UserContext.Provider>

    )
}
