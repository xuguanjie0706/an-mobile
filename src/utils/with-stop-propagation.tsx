import { cloneElement, ReactElement } from "react"

export type PropagationEvent = 'click' |'touchstart' 

const eventToPropRecord :Record<PropagationEvent,string> = {
    click:'onClick',
    touchstart:'onTouchStart'
}

export function withStopPropagation(events:PropagationEvent[],element:ReactElement){
    const props :Record<string,any> = {...element.props}
    for(const key of events){
        const prop= eventToPropRecord[key]
        props[prop] = (e:Event)=>{
            e.stopPropagation()
            element.props[prop]?.(e)
        }
    }
    return cloneElement(element,props)
}