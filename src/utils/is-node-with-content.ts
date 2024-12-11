import React from "react"

export const isNodeWithContent = (node:React.ReactNode)=>{
    return node !== undefined && node !== null && node !== false
}