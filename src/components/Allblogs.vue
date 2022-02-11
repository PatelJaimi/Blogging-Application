<template>
  <div>
    <h1>All Blogs</h1>
    <div class="input">
      <!-- Search Blog -->
      <input type="text" v-model="searchdate" placeholder="Search Blogs" />
      </div>
      <!-- title and authore of blogs? -->
    <div class="container">
      <div class="blog" v-for="i in searchblogs" :key="i">
        <h4>Title : {{ i.title }}</h4>
        <p>Author : {{ i.author }}</p>
        <!-- action buttons -->
        <!-- show all blog -->
        <button>
          <router-link v-bind:to="'/Oneblog/' + i.id" id="sbtn"
            >Show Blog</router-link
          >
        </button>
        <!-- update task -->
        <button>
          <router-link v-bind:to="'/Updateblog/' + i.id" id="ubtn"
            >Update Blog</router-link
          >
        </button>
        <!-- Delete task -->
        <button id="dbtn" v-on:click="deleteblog(i.id)">Delete Blog</button>
        <!-- <p>Content : {{ i.content }}</p> -->
        <!-- <p>Categories : {{ i.categories }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchdate: "",
      blogs: [],
    };
  },
  created() {
    this.showdata();
  },
  computed: {
    //search blog
    searchblogs() {
      return this.blogs.filter((val) => {
        return val.title.match(this.searchdate);
      });
    },
  },
  methods: {
    // show all blog tite and author
    showdata() {
      this.$http
        .get("https://blogs-24a88-default-rtdb.firebaseio.com/posts.json")
        .then(function (data) {
          return data.json();
        })
        .then((data) => {
          var kdata = [];
          for (let key in data) {  //fatch key
            data[key].id = key;
            kdata.push(data[key]);  //push data
          }
          this.blogs = kdata;
          // console.log(kdata);
        });
    },
    // delete data
    deleteblog(id) {
      if (confirm("Do you want to delete?")) {
        this.$http
          .delete(
            "https://blogs-24a88-default-rtdb.firebaseio.com/posts/" +
              id +
              ".json"
          )
          .then((data) => {
            console.log(data);
          });
        alert("Blog Deleted."); // show alert
      }
      this.showdata();
    },
  },
};
</script>

<style scoped>
* {
  letter-spacing: 1px;
  text-align: left;
  color: #000;
  text-decoration: none;
}
.container {
  display: flex;
  width: 85%;
  margin: 20px auto;
  flex-wrap: wrap;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
}
.blog {
  background: #edffee;
  width: 30%;
  margin: 10px auto;
  padding: 10px 20px;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
button {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  margin: 30px 50px 0px 0px;
}
#sbtn,
#ubtn {
  font-size: 15px;
  font-weight: bold;
  color: #005dc7;
}
#ubtn {
  color: #008311;
}
#dbtn {
  font-size: 15px;
  font-weight: bold;
  color: #880000;
}
.input{
 text-align: center;
}
input{
  width: 500px;
  font-size: 17px;
  padding: 5px;
}
</style>