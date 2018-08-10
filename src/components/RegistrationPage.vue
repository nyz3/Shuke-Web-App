<!-- eslint-disable -->

<template>
    <div class="registrationBox">
        <div class="registrationForm">
            <div class="userInfo">
                <div>
                    <input type="text" id="phoneNumber" placeholder="Phone Number" name="contact"> 
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
                <div>
                    <input type="text" id="confirmpass" placeholder="Re-enter Password" name="repassword">
                </div>
            </div> 
            <div class="registrationFormButtons">
                <router-link to="/login">
                    <button type="button" class="loginButton">Existing User</button>
                </router-link>
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
            var contact = document.querySelector("input[name=contact]").value; //currently only coded for phone numbers
            axios.get('/api/user/register?phonenum='+contact).then((response) => {
                console.log();
            });
        },

        register: function() {
            var phoneNum = document.querySelector("input[name=contact]").value;
            var verification = document.querySelector("input[name=verification]").value;
            var password = document.querySelector("input[name=password]").value;
            var confirmPassword = document.querySelector("input[name=repassword]").value;
        
            if(password.equals(confirmPassword)) {  //Registration API, confirms if verification is correct
                axios.get('/api/user/register?phonenum=' + phoneNum + '&password=' + password + '&randomstr=' + verification).then((response) => {
                    //should be successfully registered at this point
                    if(response.status == 200) {//if API confirmation successful

                        //Tell user they have succesfully registered

                    } else {
                        //Tell user why they were not succesfully registered (verification code not correct, etc.)
                    }
                });
            } else {
                console.log("PASSWORDS DO NOT MATCH") //should result in an error on the page instead of printing to console
            }
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
