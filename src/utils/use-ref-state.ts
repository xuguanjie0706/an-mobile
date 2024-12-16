import { useEffect, useRef, useState } from "react"

export function useRefState<T>(initialValue:T|(()=>T)){
  const [state,setState] = useState<T>(initialValue)
  const ref = useRef<T>(state)

  useEffect(()=>{
    ref.current = state
  },[state])

  return [state,setState,ref] as const
}