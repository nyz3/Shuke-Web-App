<!-- eslint-disable -->

<template>
    <div class="feedcontainer">
        <!-- <span v-html="content"></span> content injected here during page load -->
        <newsAndButtons></newsAndButtons>
    </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios' /*axios and vueAxios are wrapper classes for automating API calls below in the "ajax" function*/
import VueAxios from 'vue-axios'
import newsAndButtons from './subcomponents/NewsAndButtons.vue' /*import NewsAndButtons class, used in combination with created loop function for each post*/

export default {
    name: 'home',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            content: ''
        }
    },
    methods: {

    },
    components: {
        newsAndButtons
    },
    created() {                   /*automatically called when router routes to this page, should retrieve content from API*/
      
    axios.get('/api/article/section/3?pagenum=1&pagesize=20').then((response) => {

        for(var i = 0; i < response.data.data.list.length; i++)
        {
            var post = response.data.data.list[i].content;
            this.content += ('<div class="postcontainer">' + post + '</div>');
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
