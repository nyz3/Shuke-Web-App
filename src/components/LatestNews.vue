<!-- eslint-disable -->

<template>
    <div class="feedcontainer">
        <div class="postcontainer">
            Post content goes here.
        </div>
        <div class="postcontainer">
            Post content goes here.
        </div>
        <div class="postcontainer">
            Post content goes here.
        </div>
        <div class="postcontainer">
            Post content goes here.
        </div>
        <div class="postcontainer">
            Post content goes here.
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios' /*axios and vueAxios are wrapper classes for automating API calls below in the "ajax" function*/
import VueAxios from 'vue-axios'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // ajax () {
    //   axios.get('/api/store/getgoodslist?goodsclassid=1').then((response) => {
    //     console.log(response.data)
    //   })
    // }
  },
  created() {                   /*automatically called when router routes to this page, should retrieve content from API*/

      axios.get('/api/article/section/2?pagenum=1&pagesize=3').then((response) => {
        console.log(response.data)
      })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.feedcontainer { /*contains entire wall of post containers with retrieved post content*/
    overflow: auto;
    width: 540px;
    height: 800px;
    margin: 0 auto;
    margin-top: 25px;
    text-align: center;
    background-color: rgba(0,0,0,.1);
}

.postcontainer {
    background-color: white;
    width: 500px;
    height: 250px;
    margin: 0 auto;
    margin-top: 10px;
}

</style>
