<template>
  <div>
    <h1>Blogs</h1>
    <div class="main-container">
        <!-- show all blog data -->
      <div class="container" v-for="i in blogs" :key="i">
        <h2>Title : {{ i.title }}</h2>
        <p>
          {{ i.content }}
        </p>
        <h4>-{{ i.author }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      blogs: [],
    };
  },
  created() {
      //fetch all data
    this.$http
      .get("https://blogs-24a88-default-rtdb.firebaseio.com/posts.json")
      .then(function (data) {
        return data.json();
      })
      .then((data) => {
        var keys = [];
        for (let key in data) {
          data[key].id = key;
          keys.push(data[key]);
        }
        this.blogs = keys;
        // console.log(keys);
      });
  },
};
</script>


<style scoped>
.main-container {
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
}
.container {
  padding: 25px;
  margin: 20px auto;
  width: 23%;
  box-shadow: 0px 0px 5px 5px #ccc;
  background: #edffee;
}
.container h2{
  color: #005a05;
    margin-bottom: 20px;
}
.container p {
  text-align: left;
  text-indent: 50px;
  text-align: justify;
  letter-spacing: 1px;
}
.container p::first-letter {
  font-weight: bold;
  font-size: 20px;
  color: #009607;
  text-transform: uppercase;
}
.container h4 {
  text-align: right;
}
</style>