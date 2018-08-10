<!-- eslint-disable -->

<template>
    <div class="loginBox">
        <div class="loginForm">
            <div class="userInfo">
                <div>
                    <input type="text" id="phoneNumber" placeholder="Phone Number" name="contact"> 
                </div>
                <div>
                    <input type="text" id="pass" placeholder="Password" name="password">
                </div>
            </div> 
            <div class="loginFormButtons">
                <button type="submit" class="loginButton" v-on:click="login">Login</button>
                <router-link to="/register">
                    <button type="button" class="registerButton">New User</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios' /*axios and vueAxios are wrapper classes for automating API calls below in the "ajax" function*/
import VueAxios from 'vue-axios'

export default {
    name: 'login',
    data () {
        return {
           
        }
    },
    methods: {
      
        login: function() {
            var phoneNum = document.querySelector("input[name=contact]").value;
            var password = document.querySelector("input[name=password]").value;

            axios.get('/api/user/login?phonenum=' + phoneNum + '&password=' + password).then((response) => {
                    //rough draft
                if(response.status == 200) {//if API confirmation successful

                    //Tell user they have succesfully logged in, LET PROGRAM KNOW USER IS LOGGED IN FOR CUSTOMIZED POSTS

                } else {
                    //Tell user why they were not succesfully registered (verification code not correct, etc.)
                }
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
.loginBox {
    width: 500px;
    margin: 0 auto;
    margin-top: 10px;
}

.userInfo input {
    margin: 10px 0;
    text-align: center;
}

.loginForm {
    text-align: center;
    height: 500px;
}

.loginFormButtons {
    margin-top: 10px;
}
</style>
