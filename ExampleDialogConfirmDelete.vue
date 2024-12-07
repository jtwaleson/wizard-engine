<template>
    <FormDialog ok-text="Delete">
        <h2>Warning</h2>
        <p>{{ props.text }}</p>
        <label>
            Type <em>{{ props.confirmTextHasToMatch }}</em> to confirm:
            <input type="text" required name="confirmationText" />
        </label>
    </FormDialog>
</template>
<script setup lang="ts">
import FormDialog from "./FormDialog.vue"
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    confirmTextHasToMatch: {
        type: String,
        required: true,
    },
})
</script>
