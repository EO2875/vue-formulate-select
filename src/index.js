import FormulateVueSelect from './FormulateVSelect'

export default function FormulateVueSelectPlugin(formulateInstance) {
    formulateInstance.extend({
        components: {
            FormulateVueSelect,
        },
        library: {
            "vue-select": {
                classification: 'search',
                component: 'FormulateVueSelect'
            },
        },
    })
}