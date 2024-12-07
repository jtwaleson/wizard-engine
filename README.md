# Wizard Engine

This is a simple library for creating wizards in Vue.js.

It allows you to create dialogs that are normal Vue components, but with some extra functionality to make them easier to use in a wizard.

It's not published as a package yet so you can just use it as inspiration and copy parts of it into your project.

There is a [bit of a story behind this](https://blog.waleson.com/2022/10/the-easee-wizard-engine.html). The original library was a lot more complex and could also persist the state in session storage, replay the wizard and record all the progress for recording integration tests, but I didn't need all of that functionalityy yet.

Here's how you use it.

```vuejs
<component :is="dialogComponent" v-bind="dialogProps" />
```

```typescript
import { showDialog, dialogComponent, dialogProps } from "wizard-engine"

const age = await showDialog(AgeInputDialog, {
    reason: "We'd like your age to show you the right content",
})
if (age >= 18) {
    await showDialog(OkYouCanVoteDialog)
    const candidate = await showDialog(WhoDoYouWantToVoteForDialog, {
        candidates: ["Left", "Rgit", "Up", "Down"],
    })
} else {
    await showDialog(SorryYouCantVoteDialog)
}
```


Take a look at Example.vue for a complete example.