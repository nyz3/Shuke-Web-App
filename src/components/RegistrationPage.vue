<!-- eslint-disable -->

<template>
   

</template>

<script>
/* eslint-disable */

import axios from 'axios' /*axios and vueAxios are wrapper classes for automating API calls below in the "ajax" function*/
import VueAxios from 'vue-axios'

export default {
    name: 'registration',
    data () {
        return {
           
        }
    },
    methods: {
        register: function() {
            var user = "";
            var password = "";
            var randomString = ""; //generate random string here, needs to be confirmed by the user for successful login.
            //Call api, pass user and passwords as url parameters to check for congruency in back-end.
            axios.get('/api/user/register?phonenum=' + phonenumber + '&password=' + password).then((response) => {
                
            });
        }

    },
    components: {
       
    },
    created() {                   /*automatically called when router routes to this page, should retrieve content from API*/
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
