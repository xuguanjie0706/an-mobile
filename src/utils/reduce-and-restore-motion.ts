import { Globals } from '@react-spring/web'
import { useSyncExternalStore } from 'react'

let reduced = false

const subscribers = new Set<()=>void>()


function notify() {
    subscribers.forEach(fn=>fn())
}

export function reduceMotion() {
    reduced = true
    notify()
    Globals.assign({
        skipAnimation: true
    })
}

export function restoreMotion() {
    reduced = false
    notify()
    Globals.assign({
        skipAnimation: false
    })
}

export function isMotionReduced() {
    return reduced
}
function subscribe(fn:()=>void) {
    subscribers.add(fn)
    return () => {
        subscribers.delete(fn)
    }
}

export function useMotionReduced() {
    return useSyncExternalStore(subscribe, isMotionReduced, isMotionReduced)

}