<template>
  <v-select
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
    v-model="context.model"

    :options="context.options"
    v-bind="context.attributes"

    :reduce="x => x.value"
    label="label"
	
	@close="onClose"/>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    'v-select': vSelect,
  },
  props: {
    context: {
      type: Object,
      required: true
    },
  },
  methods: {
	onClose: function () {
		this.context.blurHandler();
	}
  }
}
</script>