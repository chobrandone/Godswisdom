<template >
  <div>
  <!--
  <section>
    <div class="content">
    
      <h2>Non regular header</h2>
    </div>
    
    </section>
  -->
    
    <section class="wave">
    </section>
    <section></section>
  </div>
</template>
<script>
// import pic from '../../assets/images/wave2.svg'
export default {
  name:'Home',
  data() {
    return {
      
    }
  },
  
}
</script>
<style>
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
  background: url('../../assets/images/worship.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  opacity: 0.5;
 

}
.wave{
  content: '';
  position: absolute;
}
.wave::before{
  content: '';
  position:absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background:url('../../assets/images/wave2.svg');
  background-size: cover;
  background-repeat: no-repeat;
}

  
</style>