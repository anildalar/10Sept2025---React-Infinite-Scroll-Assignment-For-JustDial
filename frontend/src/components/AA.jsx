import React, { createContext, useState } from 'react'
import BB from './BB'



export const MyInfoContext = createContext();

export default function AA() {
    const [fname, setFname] = useState('Anil');
    const [lname, setLname] = useState('Dollor');
    return (
        <MyInfoContext.Provider value={lname}>
            <div>
                <h1>AA Component Hello, {fname}</h1>
                <BB myfirstname={fname} />
            </div>
        </MyInfoContext.Provider>
    )
}
