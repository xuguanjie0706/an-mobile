export function bound(position:number,min:number|undefined,max:number|undefined){
    let ret = position
    if(min !== undefined){
        ret = Math.max(ret,min)
    }
    if(max !== undefined){
        ret = Math.min(ret,max)
    }
    return ret
}