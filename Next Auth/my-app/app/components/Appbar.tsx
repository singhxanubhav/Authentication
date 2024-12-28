"use client"

import {signIn, signOut, useSession} from "next-auth/react"
export const Appbar = () => {
    const session = useSession()
    return <div>
        <button onClick={()=>{
            signIn()
        }}>SignIn</button>
        <button onClick={()=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            signOut
        }}>Logout</button>
        {JSON.stringify(session)}
    </div>
}