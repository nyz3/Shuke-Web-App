<!-- eslint-disable -->

<template>
  <div class="bodycontainer"> <!--overall container for everything except for navbar-->
    <div class="topcontainer"> <!--separate from content for future advertisement purposes-->
      <div class="topcontainercontent"> <!--container with typewriter effect and qr code and big shuke.ai logo-->



        <div class="topcontainerleft">  <!--container with QRcodes for app downloads and typewriter effects-->
          <div class="topleftcontent"> <!--center top-left content within top left container-->

            <div class="companyname">
              舒课
            </div>

            <div class="typewriterinfo">
              高中教育
            </div>

            <div class="slogan">
              bringing the joy in education.
            </div>

            <div class="QRcodes">
              <div class="qrcontainer">
                <button class="btn ios">iOS Version</button>
                <div class="code">
                  <img src="../assets/qrcodeexample.jpg">
                </div>

              </div>
              <div class="qrcontainer">
                <button class="btn android">Android Version</button>
                <div class="code">
                  <img src="../assets/qrcodeexample.jpg">
                </div>


              </div>
            </div>

          </div>
        </div>



        <div class="topcontainerright"> <!--container with the big logo at the top left-->
          <div class="logocontainer">
            <img src="../assets/shukeLogoNoText.png" alt="Shuke.ai" class="biglogo">
          </div>
        </div>



      </div>
    </div>

    <div class="secondcontainer"> <!--container with blue-green background-->

    </div>

    <div class="thirdcontainer"> <!--container with white background-->

    </div>

    <div class="fourthcontainer"> <!--container with blue-green background-->

    </div>

    <div class="lastcontainer"> <!--container with white background-->

    </div>

    <div class="footer">
    
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // ajax () {
    //   axios.get('/api/store/getgoodslist?goodsclassid=1').then((response) => {
    //     console.log(response.data)
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*contains entire body of home page outside navbar*/
.bodycontainer {
  width: 100%;
  min-width: 1275px;
}

/*contains content in the first white container*/
.topcontainercontent {
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 574px;
  min-width: 1275px;    /*don't let body content move around when changing window-size */
}

/*contains everything in first container in the left half*/
.topcontainerleft {
  width: 50%;
  height: 574px;
  min-width: 635px;
}

/*contains actual content in first container in the left half*/
.topcontainerleft .topleftcontent {
  margin-left: 30%;
  margin-top: 100px;
}

/*contains company name in top left side*/
.topcontainerleft .companyname {
  font-size: 48px;
  font-family: "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  font-weight: bold;
  letter-spacing: 5px;
  height: 55px;
  line-height: 55px;
}

/*contains header below company name in top left, will make this an animation with typewriter feature*/
.topcontainerleft .typewriterinfo {     /*can make this section type like a typewriter animation for coolness*/
  font-size: 48px;
  font-family: "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  font-weight: 500;
  letter-spacing: 5px;
  height: 55px;
  line-height: 55px;
}

/*slogan below company name and header*/
.topcontainerleft .slogan {
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  color: rgb(0, 171, 165);
  margin-top: 10px;
}

/*container for the QR code buttons*/
.topcontainerleft .QRcodes {
  display: flex;
  margin-top: 40px;
  width: 390px;
}

/*sizing and styling for qrcode buttons*/
.topcontainerleft .QRcodes .btn {
  
  width: 180px;
  background-color: black;
  color: white;
}


/*contains everything related to the ios qr button/code*/
.qrcontainer {
  width: 180px;
  margin-right: 30px;
}

.qrcontainer:hover div{
  display: inline-block;
}

/*pseudo-dropdown with ios qr code whenever user hovers over ios button*/
.code {
    display: none;
    position: relative;
    width: 180px;
    height: 180px;
    margin-top: -5px;
    background-color: black;
}

.code img {
  height: 160px;
  width: 160px;
  margin-left: 10px;
  margin-top: 10px;
}

.topcontainerright {
  width: 50%;
  min-width: 635px;
  height: 574px;
  margin-top: 87px; /*vertically centers logo container and logo*/
}

.logocontainer {  /*wraps perfectly around the biglogo, used to move the logo around in a container*/
  width: 376px;
  height: 400px;
  margin: 0 auto;
}

.logocontainer .biglogo {
  width: 376px;
  height: 400px;
}



.secondcontainer {
  height: 574px;
  background-color: rgb(0, 171, 165);
}

.thirdcontainer {
  height: 574px;
}

.fourthcontainer {
  height: 574px;
  background-color: rgb(0, 171, 165);
}

.lastcontainer {
  height: 574px;
}

.footer {
  height: 287px;
  background-color: #39393b;
}


</style>
