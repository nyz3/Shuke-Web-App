<!-- This is for the home page of the application, should contain fixed components that are present on every page-->

<!-- eslint-disable -->
<template>
  <html>

    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>

    <body>
      <div class="navbar">
        <a href=#home>  <!--Clicking on Shuke logo should return user to the home page--> 
          <img src="./assets/shukeLogo.png" alt="Shuke.ai" class="logo">
        </a>
        <div class="navlinks">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
        <div class=searchbar>
          <form class="searchform" action="/action_page.php">
            <input type="text" placeholder="Search..." value="">    <!--SEARCH BAR GOES HERE -->
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
      
      <div class="content">
        <!-- <router-view></router-view>  This is where additional components go in addition to the base layer, router-views can have nested
        router-views within-->
      </div>
    </body>
  </html>  
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

/*Container for the navigation bar*/
.navcontainer {
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
}

/* The navigation bar */
.navbar {
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

.navlinks { /*work in progress*/
  display: flex;
  margin-right: 18px;
  margin-left: 27px;
}

/* Links inside the navbar */
.navbar a {
  color: #7c7c7c;
  padding: 14px 16px;
  text-decoration: none;
}


/* Change background on mouse-over */ 
.navbar a:hover {
  background: #ddd;
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
}

/*Edit searchbar placeholder for Safari/Chrome*/
.searchform ::-webkit-input-placeholder {
  color: rgba(145, 143, 143, 0.795);
  padding-left: 10px;
}

/*Edit searchbar placeholder for IE10*/
.searchform :-ms-input-placeholder {
  color: rgba(145, 143, 143, 0.795);
  padding-left: 10px;
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



</style>

