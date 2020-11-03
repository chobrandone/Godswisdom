<template>
  <div>
    <!-- NAVBAR-->
     <!-- main section-->   
  <section class="main">
    <div class="content container"> 
      <div class="container">
        <h1 class="knowledge">
          The knowledge of God's Glory is not just to be heard and repeated;it
          is to be
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h1>
      </div>
      <div>
        <router-link to="/login"><button class=" btn homebuton  btn-lg">Join US</button></router-link>
      </div>
    </div>
    
    </section>
 
 
    <section class="about">
      <app-about/>
    </section>
    <section class="blog">
    <app-blog/>
    </section>

    <section class="team">
    <app-team/>
    </section>
    <section class="services">
    <app-service/>
    </section> 
<section class="contact">
<app-contact/>
</section>
    <app-footer class="footer" />
  </div>
</template>
<script>
// import pic from '../../assets/images/wave2.svg'
import NavbarComponent from "../navigation/nav.vue";
import FooteComponent from "../footer/footer";
import About from "../About/about"
import Blog from "../blog/blog"
import Team from "../team/team"
import Services from '../services/service'
import Contact from '../contact/contact'

export default {
  name: "Home",
  data() {
    return {
      NavbarComponent,
      FooteComponent,
      scrollPosition: null,
      typeValue: "",
      typeStatus: false,
      typeArray: ["Breath", "Lived", "Emulated ", "with each action"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      
    };
  },
  components: {
    // "app-navbar": NavbarComponent,
    "app-footer": FooteComponent,
    "app-about":About,
    "app-team":Team,
    "app-blog":Blog,
    "app-service":Services,
    "app-contact":Contact
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap");

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Dosis';

}
body{
  min-height: 150vh;
}

 .main{
  position: relative;
  width: 100%;
  height:   100vh;
 background: linear-gradient(rgba(94, 105, 206, 0.8), rgba(92, 105, 206, 0.5)),
    url("../../assets/images/worship.jpg");
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(180vh at 50% -80vh);
}
.main .content{
  max-width: 1000px;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
}
.main {
  width: 100%;
  height: 1000px;
}
.wave {
  position: relative;
  background: linear-gradient(rgba(94, 105, 206, 0.8), rgba(92, 105, 206, 0.5)),
    url("../../assets/images/worship.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.wave {
  content: "";
  position: absolute;
}
.changebackground {
  background-color: rgb(93, 99, 153);
  box-shadow: 0px 0px 7px rgb(243, 232, 232);
  color: black;
}
.changebackground ul li a {
  color: black;
}
.wave::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: url("../../assets/images/wave3.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
.navbar {
  background: transparent;
}
.navbar ul li a {
  color: white;
}
.navbar .join {
  border-radius: 35%;
}
.knowledge {
  color: aliceblue;
  font-size: 60px;
  margin-top: 190px;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.4s ease-out;
}
.change_color {
  color: black;
}
.homebuton {
  background-color: white;  
  border-radius: 100px;
  width: 25%;
  height: 70px;
  margin: 80px;
  border: white;
  font-weight: 700;
  text-decoration: none;
}
.homebuton:hover {
  background-color: rgb(94, 105, 206);
color: white;
  transition: 8s transform ease-out;

  z-index: -1;
}
.footer{
  position: sticky;
}

/*typed js css*/
</style>
