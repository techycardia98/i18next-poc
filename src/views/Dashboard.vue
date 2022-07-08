<template>
  <div>
    <h1>{{ $t('dashboard:dashboard') }}</h1>
    <h2>{{ $t('dashboard:this_is_a_test') }}</h2>
    <router-link to="/">{{ $t('home') }}</router-link>
  </div>

</template>

<script>
export default {
  name: "Dashboard",
}
</script>

<style scoped>

</style>
