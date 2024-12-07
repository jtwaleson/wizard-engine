import { ref, shallowRef, nextTick } from "vue"
import type { Ref, ShallowRef, Component } from "vue"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dialogCallback: Ref<((result: any) => void) | null> = ref(null)
export const dialogComponent: ShallowRef<Component | null> = shallowRef(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dialogProps: Ref<Record<string, any>> = ref({})

// each component should export an interface for the data it outputs

// We use this like so:
// const result = await showDialog<CompetitorFormData>(DialogCompetitor)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function showDialog(component: Component, props?: Record<string, any>): Promise<any> {
    if (dialogComponent.value) {
        return Promise.reject("Another dialog is already open")
    }
    return new Promise((resolve) => {
        dialogProps.value = props || {}
        dialogCallback.value = (result) => {
            dialogComponent.value = null
            dialogCallback.value = null
            dialogProps.value = {}
            resolve(result)
        }
        nextTick(() => {
            dialogComponent.value = component
        })
    })
}
