import vSelect from 'vue-select'
import template from './template.html'

export default {
  template,
  components: {
    'v-select': vSelect,
  },
  props: {
    context: {
      type: Object,
      required: true
    },
  },
}

