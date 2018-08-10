<!-- eslint-disable -->

<template>
    
</template>

<script>
/* eslint-disable */

import axios from 'axios' /*axios and vueAxios are wrapper classes for automating API calls below in the "ajax" function*/
import VueAxios from 'vue-axios'

export default {
    name: 'searchContent',
    data () {
        return {
           searchParams: null,
           searchError: null,           //searchError default null, if results present, becomes true, else false
           articlesFound: [

               //each object in this array should represent an article and its associated data.

           ]
        }
    },
    methods: {
        
    },
    components: {
       
    },
    created() {                  

        this.searchParams = this.$route.params.id;
        axios.get('/api/article/search/?articletitle=' + this.searchParams +'&pagenum=1&pagesize=10').then((response) => { /*articles have article id, answers have answerid, questions have */
            if(response.data.data.list.length = 0) {  //no matching results
                //let user know that no results are available
                //use v-if directive in html, 
                searchError = true;
            } else {
                for(var i = 0; i < response.data.data.list.length; i++) {
            
                    //take retrieved data and process, and add each post/info into articlesFound as an object
                    articlesFound.add(null);
                    searchError = false; //when switched to false, search results will be displayed
                }
            }
        });

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
