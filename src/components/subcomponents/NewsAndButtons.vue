<!--This is a class that is used as a repeating component for the buttons within each post (tokens, likes, dislikes, comments, etc.-->

<!-- eslint-disable -->

<template>
    <div>
        postContent + numTokens + numLikes + numDislikes + numComments
        <!--parameters from data will go here, and vary based on the API call, each post is an UNIQUE NewsAndButtons component-->
    </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios' /*axios and vueAxios are wrapper classes for automating API calls below in the "ajax" function*/
import VueAxios from 'vue-axios'

export default {
    name: 'NewsAndButtons',
    props: {
            postType: null,           //question, article, or answer.
            IDNumber: null,           //IDnumber associated with posttype, used for identification purposes during API calls.
            postContent: null,        //props can be est. during construction of component.
            numTokens: null, 
            numLikes: null, 
            numDislikes: null, 
            numComments: null
    }
          
    // name: 'NewsAndButtons',
    // data () {
    //     return {
    //         //example
    //         postContent: '',
    //         numTokens: '',
    //         numLikes: '',
    //         numDislikes: '',
    //         numComments: ''
    //     }
    // },
    // methods: {
    //     createInfo: function (text, tokens, likes, dislikes, comments) {
    //         //CREATE NEWS AND BUTTONS TEMPLATE HERE BASED ON PASSED CONTENT, ALLOWS FOR REUSABILITY ACROSS ALL NEWSPAGES
    //         //BASED ON PARAMETERS CHANGE VALUES IN DATA THAT REFLECT THEMSELVES ON THE TEMPLATE
    //     }
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
