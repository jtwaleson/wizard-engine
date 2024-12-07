<template>
    <BaseDialog>
        <form ref="formRef" method="dialog">
            <slot></slot>
            <template v-if="!hideControls">
                <button formmethod="dialog" value="valid">
                    {{ props.okText }}
                </button>
                <button formmethod="dialog" value="cancel" formnovalidate>Cancel</button>
            </template>
        </form>
    </BaseDialog>
</template>
<script setup lang="ts">
import BaseDialog from "./BaseDialog.vue"
interface Props {
    okText?: string
    hideControls?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    okText: "OK",
    hideControls: false,
})
</script>
