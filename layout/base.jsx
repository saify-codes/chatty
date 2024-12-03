'use client'

import { useEffect } from "react"
import io from "socket.io-client"

export default function ({ children }) {

    useEffect(() => {
        const ws = io('localhost:5000?user_id=1')
    }, [])

    return children
}
