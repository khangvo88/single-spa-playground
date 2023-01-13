<template>
  <div class="sidebar">
    <nav>
      <ul>
        <li><a href="/campaign-management">Vue Application</a></li>
        <li><a href="/event-tracker">React Application</a></li>
      </ul>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.sidebar {
  background: yellow;
  width: 200px;
}
</style>
