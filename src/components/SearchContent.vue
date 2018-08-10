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
            } else {
                for(var i = 0; i < response.data.data.list.length; i++) {
            
                    //take retrieved data and process
                    
                }
            }
        });

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
