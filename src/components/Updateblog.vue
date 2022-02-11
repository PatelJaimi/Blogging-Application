<template>
  <div id="blog">
    <h1>create New Blog</h1>
    <br />
    <!-- fetch data for particular id -->
    <form v-show="!submited">
      <label for="title">Blog Title</label><br />
      <input
        type="text"
        id="title"
        v-model.lazy="blog.title"
        required
      /><br /><br />
      <label for="content">Blog Contant</label><br />
      <textarea id="content" v-model.lazy="blog.content" required></textarea
      ><br /><br />
      <label>Categories</label>
      <div id="checkbox">
        <div id="checkboxes">
          <input
            type="checkbox"
            value="food"
            v-model="blog.categories"
            id="food"
          />
          <label for="food">Food</label>
        </div>
        <div id="checkboxes">
          <input
            type="checkbox"
            value="travel"
            v-model="blog.categories"
            id="travel"
          />
          <label for="travel">Travel</label>
        </div>
        <div id="checkboxes">
          <input
            type="checkbox"
            value="technology"
            v-model="blog.categories"
            id="technology"
          />
          <label for="technology">Technology</label>
        </div>
        <div id="checkboxes">
          <input
            type="checkbox"
            value="life"
            v-model="blog.categories"
            id="life"
          />
          <label for="life">Life</label>
        </div>
        <div id="checkboxes">
          <input
            type="checkbox"
            value="entertainment"
            v-model="blog.categories"
            id="entertainment"
          />
          <label for="entertainment">Entertainment</label>
        </div>
        <div id="checkboxes">
          <input
            type="checkbox"
            value="faineance"
            v-model="blog.categories"
            id="faineance"
          />
          <label for="faineance">Faineance</label>
        </div>
      </div>
      <br />
      <label for="authors">Author</label><br />
      <select id="authors" v-model="blog.author" required>
        <option value="Jaimi">Jaimi</option>
        <option value="Jemu">Jemu</option>
        <option value="Jay" selected>Jay</option>
        <option value="Jemi">Jemi</option>
        <option value="Jaymi">Jaymi</option>
      </select>
      <button v-on:click.prevent="postmethod()" id="sub">Update Blog</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
        id:this.$route.params.id,
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "Author",
      },
    };
  },
  created(){
      //fetch data for particular id
      this.$http.get("https://blogs-24a88-default-rtdb.firebaseio.com/posts/"+this.id+".json").then((data)=>{
          this.blog=data.body
      })
  },
  methods: {
      // update data
    postmethod(event) {
      this.$http
        .put(
          "https://blogs-24a88-default-rtdb.firebaseio.com/posts/"+this.id+".json",
          this.blog
        )
        alert("Blog Updated.");
        // go to all blogs page
        this.$router.push("/Allblogs")
        event.preventDefault();
    },
  },
};
</script>

<style scoped>
* {
  text-align: left;
}
h1 {
  color: #005a05;
  margin-bottom: 30px;
}
#blog {
  margin: 20px auto;
  padding: 20px;
  width: 60%;
  box-shadow: 0px 0px 2px 2px #ccc;
}
input,
textarea,
select,
option {
  padding: 5px 10px;
  width: 90%;
  margin: 10px 0px;
  font-size: 17px;
}
textarea {
  height: 200px;
}
#preview {
  box-shadow: 0px 0px 2px 2px #ccc;
  padding: 20px;
  margin: 30px 15px;
}
p {
  margin: 20px;
  font-size: 17px;
}
#checkboxes {
  display: inline-block;
  margin: 5px 20px;
}
#checkboxes input {
  margin: 0px;
  display: inline-block;
}
#checkboxs label {
  display: inline-block;
}
#sub{
  padding: 10px 30px;
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
  border: none;
  background: #005a05;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
}
#sub:hover {
  background: #1f1e1e;
}
</style>