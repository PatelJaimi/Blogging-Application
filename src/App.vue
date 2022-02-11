<template>
  <div id="app">
    <!-- header -->
    <div class="container">
      <!-- logo -->
      <router-link to="/">
        <h1>Blog :)</h1>
      </router-link>
      <!-- menu -->
      <ul>
        <li><router-link to="/Addblogs" class="link">Addblogs</router-link></li>
        <li><router-link to="/Allblogs" class="link">Allblogs</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #171c20;
}
.container {
  background: #2e2e2e;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-bottom: 40px;
}
h1 {
  color: rgb(56, 255, 38);
  text-decoration: none;
  text-decoration-line: overline underline;
  font-size: 40px;
  font-weight: bolder;
}
ul {
  display: flex;
  justify-content: center;
}
li {
  display: block;
  margin: 10px 20px;
  font-size: 20px;
  background: #2e2e2e;
  font-weight: bold;
}
.link {
  color: #f0f6fb;
  text-decoration: none;
}
.link:hover {
  color: aqua;
}
</style>
