<!-- This is for the home page of the application, should contain fixed components that are present on every page-->

<!-- eslint-disable -->
<template>
  <div class="backdrop"> <!--This is the entire background of the website--> 
    <div class="navbar">
      <a href=#home>  <!--Clicking on Shuke logo should return user to the home page--> 
        <img src="assets/logo.png" alt="Shuke.ai" width="10px" height="10px">
      </a>
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="content">
      <router-view></router-view>  <!--This is where additional components go in addition to the base layer, router-views can have nested
      router-views within-->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App'
}
</script>

<style scoped>
/*Make background color off-white to bring out color in other elements*/
.backdrop {
  background-color: rgba(250, 250, 250, 0.815);
}
/* The navigation bar */
.navbar {
  background-color: rgb(255, 255, 255);
  position: fixed; /* Set the navbar to fixed position */
  left: 0; /*Position the navbar at the left of the page*/
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}

/* Links inside the navbar */
.navbar a {
  float: left;
  display: block;
  color: #7c7c7c;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change background on mouse-over */ 
.navbar a:hover {
  background: #ddd;
  color: black;
}

/* Main content */
.main {
  margin-top: 30px; /* Add a top margin to avoid content overlay */
}
</style>
