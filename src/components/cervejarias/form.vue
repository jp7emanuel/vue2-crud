<template>
  <div id="cervejarias-form">
    <form>
      <div v-for="field in fields">
        <div class="control">
          <label class="label">{{ field.label }}</label>
          <p>
            <input
              type="text"
              v-bind:name="field.name"
              v-bind:id="field.id"
              v-bind:placeholder="field.placeholder"
              v-bind:required="field.required"
              v-model="field.model"
            />
            <span class="help is-danger">error</span>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'cervejarias-form',
    props: [
      'fields'
    ]
  }
</script>

<style>

</style>
