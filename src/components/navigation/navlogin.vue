<template>
   <div>
<nav id="navbar" >
  <div class="container navbar navbar-expand-lg py-4"  >
    <a href="#" class="navbar-brand">
      <!-- Logo Image -->
      <img src="https://res.cloudinary.com/mhmd/image/upload/v1557368579/logo_iqjuay.png" width="45" alt="" class="d-inline-block align-middle mr-2">
      <!-- Logo Text -->
      <span class="text-uppercase font-weight-bold">Company</span>
    </a>

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"><a href="#" class="nav-link">Home <span class="sr-only">(current)</span></a></li>
        <li class="nav-item"><a href="#" class="nav-link" >About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
        <!-- <div>
                <li class="nav-item " ><a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</a></li>

        <div class="dropdown-menu">
        <a href="">events</a>
  </div>
        </div> -->
    

        <li class="nav-item"><a class="nav-link"> <router-link to="/login">Contact</router-link></a></li>
      </ul>
      <button class="btn btn-blog bg-light join">Join Us</button>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
     
         scrollPosition: null,
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
  },
    mounted() {
    window.addEventListener('scroll', this.updateScroll);
},
}
</script>
<style scoped>
a{
  color: white;
}
a:hover{
  color: black;
  background: rgb(230, 208, 176);
   transition: background-color 0.4s ease-out;
}


   .changebackground ul li a {
      
     
       color: white;
   }

b
#navbar ul li a{
  color: white;
}
.navbar .join{
  border-radius: 35%;
}
#navbar{
background-color:rgb(93, 99, 153);
       box-shadow: 0px 0px 7px rgb(243, 232, 232);
       color: rgb(66, 64, 64);
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.4s ease-out;
}

</style>