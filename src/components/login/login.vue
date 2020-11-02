<template>

<div>
<app-navbar/>
 <div class="sign"  v-if="login">
	<div class="d-flex justify-content-center h-100 first">
		<div class="card">
			<div class="card-header row d-flex justify-content-between">
			<div class="col-md-6 signin">
			<h3>Sign In</h3>
			</div>				
				<div class="d-flex  social_icon col-md-6">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password">
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox">Remember Me
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#" @click="signup">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
   
</div>
 <!--start of signup--->
  <div class="signup" v-else>
	<div class="d-flex justify-content-center h-100 first">
		<div class="card">
			<div class="card-header row d-flex justify-content-between">
			<div class="col-md-6 signin">
			<h3>Sign In</h3>
			</div>				
				<div class="d-flex  social_icon col-md-6">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-envelope"></i></span>
						</div>
						<input type="email" class="form-control" placeholder="Email">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password">
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="verify password">
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox">Remember Me
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					<a href="#" @click="signin" >Sign In</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
   
</div>
<app-footer/>
</div>

</template>

<script>
// import css from ''
import navbar from '../navigation/navlogin'
import Footer from '../footer/footer2'

export default {
    name:"login",
     components: {
    'app-navbar': navbar,
     'app-footer':Footer
     },
  data() {
    return {
			Footer,
        navbar,
        login:true
    };
  },
  methods:{
      signup:function(){
        this.login=false
      },
      signin:function(){
        this.login=true
      }
  }
};

</script>
<style scoped>


/*
.main{
background-image: linear-gradient(rgba(94, 105, 206, 0.5), rgba(92, 105, 206, 0.5)),url('../../assets/images/worship.jpg');
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
width: 100%;
font-family: 'Numans', sans-serif;
}
*/

.sign{
background-image: linear-gradient(rgba(94, 105, 206, 0.5), rgba(92, 105, 206, 0.5)),url('../../assets/images/worship.jpg');
background-size: cover;
background-repeat: no-repeat;
height: 93vh;
align-content: center;

}



.social_icon span{
font-size: 40px;
color: #FFC312;
padding: 5px;
border-radius: 100px;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}
.signin {
	margin-top: 20px;
}

.card-header h3{
color: white;
}
input{
	border-radius: 100px;
}

.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
/*signup*/
.signup{
background-image: linear-gradient(rgba(94, 105, 206, 0.5), rgba(92, 105, 206, 0.5)),url('../../assets/images/worship.jpg');
background-size: cover;
background-repeat: no-repeat;
height: 93vh;
align-content: center;
}

/*media Query*/

@media (min-width: 240px) {
	.first{
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 50px;


	}
	.social_icon{

    margin-left: 100px;
	}
.signup .card {
    height: 550px;
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0,0,0,0.6)!important;
}
.sign .card {
    height: 436px;
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0,0,0,0.6)!important;
}
}

@media (min-width: 280px) {
}

@media (min-width: 320px) {
  .social_icon{
    margin-left: 52px;
	}
}
@media (min-width: 375px) {
  .social_icon{
    margin-left: 79px;
	}
}
@media (min-width: 425px) {
  .social_icon{
    margin-left: 102px;
	}
}
@media (min-width: 600px) {
  .signup .card{
    height: 478px;
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0,0,0,0.6) !important;

}
.sign .card{
height: 377px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color:rgba(0,0,0,0.6)!important;
}
.social_icon{

    margin-left: unset;
	}
	
}



</style>
