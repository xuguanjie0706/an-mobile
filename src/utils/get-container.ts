export type GetContainer = HTMLElement|(()=>HTMLElement)|null|undefined

export function resolveContainer(getContainer:GetContainer){
    const container = typeof getContainer === 'function' ? getContainer() : getContainer
    return container || document.body
}