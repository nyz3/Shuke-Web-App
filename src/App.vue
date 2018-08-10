<!-- This is for the home page of the application, should contain fixed components that are present on every page-->

<!-- eslint-disable -->
<template>
  <html>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
      <div class="navbarcontainer">
        <div class="navbar">
          <router-link to="/home">
          <!--Clicking on Shuke logo should return user to the home page--> 
            <img src="./assets/shukeLogo.png" alt="Shuke.ai" class="logo">
          </router-link>
          <!-- links to the right of logo-->
          <div class="navlinks">
            <router-link to="/home">
              Home
            </router-link>
            <router-link to="/news">
              News
            </router-link>
            <router-link to="/about">
              About Us
            </router-link>
            <router-link to="/contact">
              Contact
            </router-link>
          </div>
          <!-- code for profile, settings, and messages icons -->
          <div class="navicons">
            <a href="#messages"><i class="fa fa-comment-o fa-lg"></i></a>
            <router-link to="/login"><i class="fa fa-user-circle fa-lg"></i></router-link>
            <a href="#settings"><i class="fa fa-gears fa-lg"></i></a>
          </div>
          <div class=searchbar>
              <!--v-model binds the input in the search bar dynamically with the searchText value in data, and data should be passed to router as param-->
              <input type="text" v-model="searchText" placeholder="Explore...">    <!--SEARCH BAR GOES HERE -->
              <router-link to="/search/ + 'sdsdsd'">
                <button type="button"><i class="fa fa-search"></i></button>
              </router-link> 
          </div>
        </div>
      </div>
      <div class="content"> <!--all NONFIXED content, should all have top-margin separated from fixed navbar-->
        <div class="contentnav"> <!-- navigation bar (NOT FIXED) for newsfeed -->
          <div class="contentbuttons">
            <router-link to="/newsfeed">
                <button type="button" class="btn btn-default btn-sm">
                  <i class="fa fa-feed" aria-hidden="true"></i>
                  Newsfeed
                </button>
            </router-link>
            <router-link to="/discover">
              <div class="buttondivider"></div>
              <button type="button" class="btn btn-default btn-sm">
                <i class="fa fa-binoculars" aria-hidden="true"></i>
                Discover
              </button>
            </router-link>
            <router-link to="/latest">
              <div class="buttondivider"></div>
              <button type="button" class="btn btn-default btn-sm">
                <i class="fa fa-upload" aria-hidden="true"></i>
                Latest
              </button>
            </router-link>
            <router-link to="/trending">
              <div class="buttondivider"></div>
              <button type="button" class="btn btn-default btn-sm">
                <i class="fa fa-fire" aria-hidden="true"></i>
                Trending
              </button>
            </router-link>
          </div>
        </div>
      </div>
        <router-view></router-view>  <!--This is where additional components go in addition to the base layer, router-views can have nested
          router-views within-->
    </body>
  </html>  
</template>

<script>
/* eslint-disable */

export default {
  name: 'App',
  data() {
    return {
      searchText: null
    }
  },
  methods: {
    searchContent: function() {
      var searchParams = document.querySelector("input[name=searchText]").value;
      this.$router.push('search/' + searchParams);
    }
  },
  created (){

  }
  
}
</script>

<style scoped>

/*container for the fixed navbar at top of page*/

.navbarcontainer {
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1275px;
  position: fixed;
  box-shadow: 0 4px 4px -4px rgba(0,0,0,.2);
  background: white;
  z-index: 2; /*small hack to make navbar always top layer*/
}

/* The navigation bar */
.navbar {
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

/*group of links on top navbar*/
.navlinks { /*work in progress*/
  display: flex;
  margin-right: 3%; /*change later */
  margin-left: 3%;
  font-family: "Century Gothic", sans-serif;
  font-size: 90%;
  padding-top: 5px; /*to align with icons to the right*/
}

/* Links inside the navbar */
.navbar a {
  color: #7c7c7c;
  padding: 2px 16px;
  text-decoration: none;
}

/* Change background on mouse-over */ 
.navbar a:hover {
  color: black;
}

/*Shuke.ai logo on fixed navbar*/
.logo {
  width: 100px;
  height: 45px;
}

/*messages, profile, and settings icon-links*/
.navicons {
  display: flex;
  margin-right: 5%;
}

/*Style the search bar*/
.searchbar {
  display: flex;
}

/*positions and sizes the search bar*/
.searchbar input 
{
  height: 35px;
  width: 200px;
  padding-left: 5px;
  border-right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

/*Edit searchbar placeholder for Safari/Chrome*/
.searchbar ::-webkit-input-placeholder {
  color: rgba(145, 143, 143, 0.795);
  padding-left: 2px;
}

/*Edit searchbar placeholder for IE10*/
.searchbar :-ms-input-placeholder {
  color: rgba(145, 143, 143, 0.795);
  padding-left: 2px;
}

/* Style the submit button for search bar */
.searchbar button {
  width: 35px;
  padding: 0px 10px 0px 11px;
  background: rgb(0, 171, 165);
  border: 2px solid grey; 
  border-left: none; /*prevent double borders*/
  border-bottom-color: lightgrey;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px; 
}

/*styles the magnifying glass icon in search bar*/
.searchbar button i {
  font-size: 14px;
  padding-bottom: 6px;
}

/*Background for everything other than the fixed navigation bar*/
.content {
  background-color: rgba(26, 26, 26, 0.050);
  color: black;
  margin-top:65px;
}

/*graphic design of navbar divider*/
.contentnav {
  background-color: white;
  height: 36px;
  box-shadow: 0 4px 4px -4px rgba(0,0,0,.2);
  line-height: 36px;
  width: 100%;
  min-width: 1266px;
}

/*group of content navbar buttons*/
.contentbuttons {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

/*puts spacing between icons and navbuttons for content*/
.contentbuttons button i {
  margin-right: 5px;
}

/*centers individual buttons within content navbar divider and creates vertical separators*/
.contentnav button {
  font-family: "Century Gothic", sans-serif;
  font-size: 105%;
  vertical-align: unset;
  margin: 0px 40px;
  background-color: transparent;
  border: none;
}

/*removes vertical separator to the right of the last button on content navbar*/
.contentbuttons .buttondivider {
  display: inline;
  border-left: thin solid rgba(0, 0, 0, .2);
  border-left-width: 2px;
  border-radius: 100%;
  margin-right: 4.5px;
}

/*color of content navbar button text changes when hover*/
.contentnav button:hover {
  color: rgb(171, 83, 0);
}

</style>

