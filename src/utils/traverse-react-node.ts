import React, { ReactNode } from "react"
import { isFragment } from 'react-is'
export function traverseReactNode(children:ReactNode,fn:(children:ReactNode,index:number)=>void){
    let i = 0
    function handle(target:ReactNode){
        React.Children.forEach(target,(child:ReactNode)=>{
            if(!isFragment(child)){
                fn(child,i)
                i++
            }else if(React.isValidElement(child)){
                handle(child.props.children)
            }
        })
    }
    handle(children)
  
}