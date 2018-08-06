<!-- eslint-disable -->

<template>
    <div class="feedcontainer">
        <span v-html="postContent"></span> <!--content injected here during page load-->
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
            msg: 'Welcome to Your Vue.js App',
            postContent: '',
            numLikes: '',
            numTokens: '',
            numLikes: '',
            numDislikes: '',
            numComments: ''
        }
    },
    methods: {
        
    },
    created() {                   /*automatically called when router routes to this page, should retrieve content from API*/
      
    axios.get('/api/article/section/2?pagenum=1&pagesize=20').then((response) => { /*articles have article id, answers have answerid, questions have */
        console.log(response.data);
        for(var i = 0; i < response.data.data.list.length; i++)
        {
            var post = response.data.data.list[i].content; /*text content in each post*/
            var answerID = response.data.data.list[i].answerid;
            var articleID = response.data.data.list[i].articleid;
            console.log('ans: ' + answerID + ' article: ' + articleID);


            // var buttons = '<div class=contentbuttons>'
            // this.postContent += ('<div class="postcontainer">' + post + buttons + '</div>'); /*add buttons for each post right after post text*/
            
        }

    });
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

.feedcontainer >>> .postcontainer { /*deep operator '>>>' needed to style dynamically injected v-html data*/
    background-color: white;
    width: 500px;
    height: 250px;
    margin: 0 auto;
    margin-top: 10px;
}

</style>
