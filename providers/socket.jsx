'use client'

import { useEffect } from "react"
import io from "socket.io-client"

export default function ({ children }) {

    useEffect(() => {

        const ws = io('localhost:5000?user_id=1')

        ws.on('connect', () => {
            console.log('%csocket connected', 'color:green');
        })
        
        ws.on('disconnect', () => {
            console.log('%csocket disconnected', 'color:red');
        })

    }, [])

    return children
}
