# Introduction

Vue Formulate Select is a [Vue Formulate][1] plugin that provides the
[Vue Select][2] UI into a `FormulateInput`.

# Installation

## NPM
```sh
npm install vue-formulate-select
```

## Add to Vue

As with any [Vue Formulate plugin][3]:

```javascript
import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

import FormulateVSelectPlugin from 'vue-formulate-select'

// !important
// Import the vue-select css
import 'vue-select/dist/vue-select.css';

Vue.use(VueFormulate, {
    plugins: [ FormulateVueSelectPlugin ]
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

[1]: https://vueformulate.com
[2]: https://vue-select.org
[3]: https://vueformulate.com/guide/plugins/
[4]: https://vueformulate.com/guide/inputs/types/select/#select-2
[5]: https://vue-select.org/guide/values.html#transforming-selections
