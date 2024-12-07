<template>
    <component :is="dialogComponent" v-bind="dialogProps" />
    <button @click="startWizard">Start Wizard</button>
</template>
<script setup lang="ts">
import { showDialog, dialogComponent, dialogProps } from "./dialogs"
import ExampleDialogConfirmDelete from "./ExampleDialogConfirmDelete.vue"

async function startWizard() {
    // we can now do wizards that follow complex logic, like any regular other program.
    // the dialogs are just normal vue components, so they can be as complex as you want.
    // we await the user's responses instead of waiting for a database or something like that

    const canBeDeleted = await showDialog(ExampleDialogConfirmDelete)
    console.log("can be deleted", canBeDeleted)
    if (canBeDeleted) {
        const canReallyBeDeleted = await showDialog(ExampleDialogConfirmDelete, {
            text: "Are you sure you want to delete this data source?",
            confirmTextHasToMatch: "reallyreallydelete",
        })
        console.log("can really be deleted", canReallyBeDeleted)
    }
}
</script>

<style>
::backdrop {
    background-image: linear-gradient(45deg, magenta, rebeccapurple, dodgerblue, green);
    opacity: 0.75;
}
html:has(dialog[open]) {
    /* do not allow the background to scroll when dialogs are open */
    overflow: hidden;
}
dialog {
    background-color: var(--bg);
    color: var(--fg);
}
</style>
