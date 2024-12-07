# Wizard Engine

This is a simple library for creating complx wizards in Vue.js.

The core idea is to present components one by one and use `await` to wait for the user's response. This way we can program the logic of wizards with the power of the programming language, like any regular other program. The dialogs are just normal Vue components, so they can be as complex as you want.

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