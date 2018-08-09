<!-- eslint-disable -->

<template>
    <div class="registrationBox">
        <div class="registrationForm">
            <div class="userInfo">
                <div>
                    <input type="text" id="phoneOrEmail" placeholder="Phone Number" name="contact"> 
                    <button type="button" class="getVerificationCode" v-on:click="getVerification">
                    Send Verification
                    </button>
                </div>
                <div>
                    <input type="text" id="verificationCode" placeholder="Verification Code" name="verification">
                </div>
                <div>
                    <input type="text" id="pass" placeholder="Create Password" name="password">
                </div>
            </div> 
            
            <div class="registrationFormButtons">
                <button type="submit" class="registerButton" v-on:click="register">Register</button>
            </div>
        </div>
    </div>
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
        getVerification: function() {
            var contact = document.querySelector("input[name=contact").value; //currently only coded for phone numbers
            axios.get('/api/user/register?phonenum='+contact).then((response) => {
                console.log();
            });
        },

        register: function() {

            // var user = document.querySelector("input[name=contact").value;
            // var password = document.querySelector("input[name=password").value;
            // console.log("register called " + user + " " + password);

            // var randomString = ""; //generate random string here, needs to be confirmed by the user for successful login.
            // //Call api, pass user and passwords as url parameters to check for congruency in back-end.
            // axios.get('/api/user/register?phonenum=' + phonenumber + '&password=' + password + '&randomstr=' + randomString).then((response) => {
            //     //don't know what happens here LMAO
            // });
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
.registrationBox {
    width: 500px;
    margin: 0 auto;
    margin-top: 10px;
}

.userInfo {
    
}

.userInfo input {
    margin: 10px 0;
    text-align: center;
}

.registrationForm {
    text-align: center;
    height: 500px;
}

.registrationFormButtons {
    margin-top: 10px;
}
</style>
