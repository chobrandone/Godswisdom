<template >
  <div>
  <!--
  <section>
    <div class="content">
    
      <h2>Non regular header</h2>
    </div>
    
    </section>
  -->
    <navbar/>
    <section class="wave">
   <!-- NAVBAR-->
  <app-navbar/>
<div class="container">
<h1 class="knowledge">
    The knowledge of God's Glory is not just to be heard and repeated;it is to be
    <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
</h1>

</div>

    </section>
    <section>
    <div>
    <h3>God is good</h3></div></section>

    <app-footer/>
  </div>
</template>
<script>
// import pic from '../../assets/images/wave2.svg'
import NavbarComponent  from '../navigation/nav.vue'
import FooteComponent from '../footer/footer'

export default {
  name:'Home',
  data() {
    return {
      NavbarComponent,
      FooteComponent,
       scrollPosition: null,
        typeValue: '',
        typeStatus: false,
        typeArray: ['Breath', 'Lived', 'Emulated ', 'with each action'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      
    }
  },
  components:{
    'app-navbar':NavbarComponent,
    'app-footer':FooteComponent
  },
  methods: {
     updateScroll() {
       this.scrollPosition = window.scrollY
    },
    typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
},
created(){
 setTimeout(this.typeText, this.newTextDelay + 200);
}
  
}
</script>
<style  lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap");
/*
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Dosis';

}
body{
  min-height: 150vh;
}

section{
  position: relative;
  width: 100%;
  height:   100vh;
  background: url('../../assets/images/bible.jpg');
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(180vh at 50% -80vh);
}
section .content{
  max-width: 1000px;
  text-align: center;
}
section .content h2{
  font-size: 5rem;
  color: black;
  font-weight: 700;
}*/
*{
  margin: 0;
  padding: 0;
}
section{
  width: 100%;
  height: 1000px;
}
.wave{
  position: relative;
  background: linear-gradient(rgba(94, 105, 206, 0.5), rgba(92, 105, 206, 0.5)),url('../../assets/images/worship.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.wave{
  content: '';
  position: absolute;
}
.changebackground  {
       background-color:rgb(93, 99, 153);
       box-shadow: 0px 0px 7px rgb(243, 232, 232);
       color: black;
   }
   .changebackground ul li a {
      
     
       color: black;
   }
.wave::before{
  content: '';
  position:absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background:url('../../assets/images/wave3.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.navbar{
  background: transparent;
 
}
.navbar ul li a{
  color: white;
}
.navbar .join{
  border-radius: 35%;
}
.knowledge{
  color: aliceblue;
  font-size: 70px;
  margin-top: 190px;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.4s ease-out;
}
.change_color{
  color: black;
}
/*typed js css*/

 
</style>