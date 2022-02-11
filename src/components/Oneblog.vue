<template>
  <div id="singleblog">
    <!-- <h1>{{id}}</h1> -->
    <!-- show particular one block -->
    <h1>{{ blogs.title }}</h1>
    <h4>Author : {{ blogs.author }}</h4>
    <h4>
      Categories :
      </h4>
      <ul>
        <li v-for="i in blogs.categories" :key="i">
          {{ i }}
        </li>
      </ul>
    <hr>
    <p>{{ blogs.content }}</p>
  </div>
</template>

<script>
export default {
  name: "Singleblog",
  data() {
    return {
      id: this.$route.params.id,  // id pass by router link
      blogs: {},
      blog: [],
      blogcontent: [],
    };
  },
  methods: {},
  created() {
      // fetch data
    this.$http
      .get(
        "https://blogs-24a88-default-rtdb.firebaseio.com/posts/" +
          this.id +
          ".json"
      )
      .then((data) => {
          console.log(data.body);
        this.blogs = data.body;
      });
  },
};
</script>

<style scoped>
div {
  text-align: left;
  width: 50%;
  margin: 20px auto;
  box-shadow: 1px 1px 10px 10px #ccc;
  padding: 20px;
  letter-spacing: 1px;
  font-size: 18px;
}
h1{
    font-size: 40px;
    text-align: center;
}
h4{
    margin-bottom: 10px;
}
ul{
    margin: 10px;
}
hr{
    margin: 20px;
}
p {
  text-align: left;
  text-indent: 50px;
  text-align: justify;
}
p::first-letter {
  font-weight: bold;
  font-size: 25px;
  color: #009607;
  text-transform: uppercase;
}
</style>