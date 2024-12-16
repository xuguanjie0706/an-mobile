import { FC, ReactNode } from "react"
import { useInitialized } from "./use-initialized"

interface ShouldRenderProps{
    active:boolean
    forceRender?:boolean
    destroyOnClose?:boolean
    children:ReactNode
}


export function useShouldRender(props:Omit<ShouldRenderProps,'children'>){
    const {active,forceRender,destroyOnClose} = props
    const initialized = useInitialized(active)
    if(forceRender){
        return true
    }
    if(active){
        return true
    }
    if(initialized){
        return false
    }
    return !destroyOnClose
}

export const ShouldRender:FC<ShouldRenderProps> =(props)=>{
    const shouldRender = useShouldRender({
        active:props.active,
        forceRender:props.forceRender,
        destroyOnClose:props.destroyOnClose,
    })
    return shouldRender ? props.children : null
}
