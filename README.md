# Introduction

Vue Formulate Select is a [Vue Formulate][1] plugin that provides the
[Vue Select][2] UI into a `FormulateInput`.

# Installation

## NPM
```sh
npm i @cone2875/vue-formulate-select
```

## Add to Vue

As with any [Vue Formulate plugin][3]:

```javascript
import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

import FormulateVSelectPlugin from '@cone2875/vue-formulate-select'

// !important
// Import the vue-select css
import 'vue-select/dist/vue-select.css';

Vue.use(VueFormulate, {
    plugins: [ FormulateVSelectPlugin ]
})
```

# Usage

Use `vue-select` as the input `type`.

```html
<FormulateInput
    type="vue-select"
    :options="[
        {value: 'MX', label: 'Mexico'},
        {value: 'TH', label: 'Thailand'},
        {value: 'BI', label: 'Burundi'},
    ]"
    />
```

It works as any other `FormulateInput`.

# Caveats

Vue Formulate and Vue Select have different approaches when parsing arrays of 
objects. [Vue Formulate][4] requires these objects to include a `label` and 
`value` property, whereas [Vue Select][5] has a much more flexible approach 
with the `reduce` and `label` props. We had to take the more restrive 
approach of Vue Formulate. The vue-select `reduce` and `label` props are 
currently hard-coded as:

```html
<v-select
    :reduce="x => x.value"
    label="label"
    />
```

As such, using the `taggable` prop wil always require you to define 
`createOption` too.

Moreover, Vue Formulate normalizes the `value` into a string value. Thus, using
objects as values is impossible. Secondly, using numbers as the value can 
result in the following problem:

```html
<!-- template -->
<FormulateInput
    type="vue-select"
    v-model="val"
    :options="options"
    />
```

```javascript
// script
export default {
    data(){
        return {
            val: 3,
            options: [
                {value: '1', label: 'Mexico'},
                {value: '2', label: 'Thailand'},
                {value: '3', label: 'Burundi'},
            ]
        }
    }
}
```

Will display an initial value of "3" in the input, not "Burundi". It is thus
necessary to turn `val` into `"3"` before the `FormulateInput` is created and
turn it back into a number before submission, when necessary. 


[1]: https://vueformulate.com
[2]: https://vue-select.org
[3]: https://vueformulate.com/guide/plugins/
[4]: https://vueformulate.com/guide/inputs/types/select/#select-2
[5]: https://vue-select.org/guide/values.html#transforming-selections
