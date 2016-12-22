<template>
  <div id="cervejarias-create">
    <h1>Adicionar Cervejaria</h1>
    <hr>

    <cervejaria-form
      :fields="[{
        label: 'Name:',
        type: 'text',
        name: 'name',
        placeholder: '',
        model: 'name',
        required: true,
    }]">
    </cervejaria-form>

  </div>
</template>

<script>
  import CervejariaForm from './form.vue';

  export default {
    name: 'cervejarias-create',
    components: {
      CervejariaForm
    },
    data () {
      return {
        name: 'Create View'
      }
    }
  }
</script>

<style>

</style>
