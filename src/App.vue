<template>
  <div id="app">
    <section class="hero">
        <div class="hero-head">
            <div class="container">
                <nav class="nav">
                    <div class="nav-left">
                        <router-link to="/" class="nav-item is-brand">
                            <h1 class="title">Vue+Bulma</h1>
                        </router-link>
                    </div>

                    <div class="nav-right nav-menu">
                        <span class="nav-item">
                            <div class="level-right">
                                <router-link to="/cervejarias/create" class="button is-primary">Adicionar Cervejaria</router-link>
                            </div>
                        </span>
                    </div>
                </nav>
            </div>
        </div>
    </section>

    <div class="container column">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default { }
</script>

<style>

</style>
