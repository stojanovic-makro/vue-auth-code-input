# vue-auth-code-input

Authentication code input component in vue

<img src="./eg.gif" width="400"/>

# Install

```sh
yarn add vue-auth-code-input
```

# Usage

```html
<template>
  <div>
    <vue-auth-code-input @inputChange="handleChange"/>
  </div>
</template>
<script>
import VueAuthCodeInput from 'vue-auth-code-input'
export default {
  components: {
    VueAuthCodeInput
  },
  methods: {
    handleChange(code, index){
      console.log(code)
    }
  }
}
</script>
```
# Attributes
| name           | type    | description                             | required | default |
| -------------- | ------- | --------------------------------------- | -------- | ------- |
| codeLength     | Number   | set the length of authentication code | No      |    6     |

# Event

| name            | parameters | description                   |
| --------------- | ---------- | ----------------------------- |
| inputChange | codeArray, changedIndex    | When some input value changes |
| inputComplete | codeArray, changedIndex    | When all input value are not empty |