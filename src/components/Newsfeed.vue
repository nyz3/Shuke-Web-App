<!-- eslint-disable -->

<template>
    <div class="feedcontainer">
    
    </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios' /*axios and vueAxios are wrapper classes for automating API calls below in the "ajax" function*/
import VueAxios from 'vue-axios'
import newsAndButtons from './subcomponents/NewsAndButtons.vue'

export default {
    name: 'home',
    data () {
        return {
            posts: [
                
            ]
        }
    },
    methods: {
        
    },
    components: {
        newsAndButtons    
    },
    created() {                   /*automatically called when router routes to this page, should retrieve content from API*/
      

    axios.get('/api/article/follow/{userid}').then((response) => { /*articles have article id, answers have answerid, questions have */
        
        //DO SOMETHING SIMILAR TO THIS, THIS IS NOT EXACT


        // for(var i = 0; i < response.data.data.list.length; i++)
        // {
        //     var info = responses.data.data.list[i]; //contains all info about a single post, from the API callback.

        //     //ID is necessary for identification of post type
        //     var answerID = info.answerid;
        //     var articleID = info.articleid;
        //     var questionID = info.questionid;

        //     var postType;
        //     var uniqueID;

        //     if(answerID != null){
        //         postType = 'answer';
        //         uniqueID = answerID;
        //     } else if(articleID != null){
        //         postType = 'article';
        //         uniqueID = articleID;
        //     } else {
        //         postType = 'question';
        //         uniqueID = questionID;
        //     }

        //     var post = info.content; /*text content in each post*/
        //     var tokens = info.tokens; //NEEDS UPDATING
        //     var likes = info.praisecount;
        //     var dislikes = info.dislikes;
        //     var comments = info.comments;

        //     var postData = {postType, uniqueID, post, tokens, likes, dislikes, comments};
        //     posts.add(postData);    //add each set of post data as an object into the post array in 'data'

        // }
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