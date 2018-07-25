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
          <a href=#home>  <!--Clicking on Shuke logo should return user to the home page--> 
            <img src="./assets/shukeLogo.png" alt="Shuke.ai" class="logo">
          </a>
          <div class="navlinks">
            <a href="#following">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </div>
          <div class=searchbar>
            <form class="searchform" action="/action_page.php">   <!--search contents go to /action_page.php default for now -->
              <input type="text" placeholder="Search..." value="">    <!--SEARCH BAR GOES HERE -->
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
          </div>
        </div>
      </div>
      
      <div class="content"> <!--all NONFIXED content, should all have top-margin separated from fixed navbar-->


        <div class="contentnav"> <!-- navigation bar (NOT FIXED) for newsfeed -->
          <div class="contentbuttons">

              <button type="button" class="btn btn-default btn-sm">
                <i class="fa fa-feed" aria-hidden="true"></i>
                Newsfeed
              </button>
              <button type="button" class="btn btn-default btn-sm">
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                Recommendations
              </button>
              <button type="button" class="btn btn-default btn-sm">
                <i class="fa fa-upload" aria-hidden="true"></i>
                Latest
              </button>
              <button type="button" class="btn btn-default btn-sm">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
                Trending
              </button>

          </div>
        </div>



      </div>
    </body>
  </html>  
</template>

    <!--<router-view></router-view>  This is where additional components go in addition to the base layer, router-views can have nested
          router-views within-->

<script>
/* eslint-disable */
export default {
  name: 'App'
}
</script>

<style scoped>

.navbarcontainer {
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1275px;
  position: fixed;
  box-shadow: 0 4px 4px -4px rgba(0,0,0,.2);
}

/* The navigation bar */
.navbar {
 /* display: flex;*/
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

.navlinks { /*work in progress*/
  display: flex;
  margin-right: 38%;
  margin-left: 3%;
  font-family: "Century Gothic", sans-serif;
  font-size: 90%;
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

.logo {
  width: 80px;
  height: 36px;
}

/*Style the search bar*/
.searchform {
  display: flex;
}

.searchform input 
{
  height: 35px;
  width: 200px;
  padding-left: 5px;
}

/*Edit searchbar placeholder for Safari/Chrome*/
.searchform ::-webkit-input-placeholder {
  color: rgba(145, 143, 143, 0.795);
  padding-left: 2px;
}

/*Edit searchbar placeholder for IE10*/
.searchform :-ms-input-placeholder {
  color: rgba(145, 143, 143, 0.795);
  padding-left: 2px;
}

/* Style the submit button for search bar */
.searchform button {
  padding: 0px 10px 0px 11px;
  background: #2196F3;
  border: 1px solid grey; 
  border-left: none; /*prevent double borders*/
  cursor: pointer;
}

.searchform button i {
  font-size: 15px;
  padding: 0;
  border: 0;
  margin: 0;
}

/*Background for everything other than the fixed navigation bar*/
.content {
  background-color: rgba(26, 26, 26, 0.050);
  color: black;
  margin-top:56px;
}

/*graphic design of navbar divider*/
.contentnav {
  background-color: white;
  height: 42px;
  box-shadow: 0 4px 4px -4px rgba(0,0,0,.2);
  line-height: 42px;
  width: 100%;
  min-width: 1266px;
}

/*group of content navbar buttons*/
.contentbuttons {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

/*centers individual buttons within content navbar divider*/
.contentnav button {
  font-family: "Century Gothic", sans-serif;
  font-size: 105%;
  vertical-align: unset;
  margin: 0px 25px;
  background-color: transparent;
  border: none;
}

/*color of content navbar button text changes when hover*/
.contentnav button:hover {
  color: orange;
}

</style>

