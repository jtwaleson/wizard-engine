<template>
    <dialog ref="dialogRef" @close="closeDialog">
        <slot></slot>
    </dialog>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"

import { dialogCallback } from "./dialogs"

const dialogRef = ref<HTMLDialogElement | null>(null)

const closeDialog = (e: Event) => {
    const target = e.target as HTMLDialogElement
    if (target.returnValue === "valid") {
        const form = target.querySelector("form") as HTMLFormElement
        if (form) {
            return dialogCallback.value?.(Object.fromEntries(new FormData(form)))
        }
    }
    return dialogCallback.value?.(null)
}

onMounted(() => {
    if (dialogRef.value) {
        dialogRef.value.returnValue = "cancel"
        dialogRef.value.showModal()
    }
})
</script>
<style scoped>
dialog {
    width: 660px;
}
</style>
