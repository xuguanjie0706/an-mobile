import { ReactElement, ReactPortal } from "react"
import { canUseDom } from "./can-use-dom"
import { resolveContainer } from "./get-container"
import type { GetContainer } from "./get-container"
import { createPortal } from "react-dom"

export type { GetContainer } from "./get-container"

export function renderToContainer(getContainer:GetContainer,node:ReactElement){
    if(canUseDom&&getContainer){
        const container =resolveContainer(getContainer)
        return createPortal(node,container) as ReactPortal
    }
    return  node
}