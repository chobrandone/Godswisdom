<template>

<div>
<app-navbar/>
 <div class="sign"  v-if="login">
	<div class="d-flex justify-content-center h-100">
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
					Don't have an account?<a href="#">Sign Up</a>
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
	<div class="d-flex justify-content-center h-100">
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
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
   
</div>
</div>
</template>

<script>
// import css from ''
import navbar from '../navigation/navlogin'

export default {
    name:"login",
     components: {
    'app-navbar': navbar,
     
     },
  data() {
    return {
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
height: 100%;
align-content: center;
margin-top: 250px;
}

.card{
height: 370px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.6) !important;
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
</style>
