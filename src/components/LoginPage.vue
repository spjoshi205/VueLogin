<template>
    <div>
		<div class="myForm">
			<h2>Login</h2>
			<div v-show="errMsg" class="alert alert-danger" role="alert">{{errMsg}}</div>
			<div v-for="err in errMsgArr" v-bind:key="err.param" class="alert alert-danger" role="alert">{{err.msg}}</div>
			<form @submit.prevent="handleSubmit">
				<div class="form-group">
					<label for="username">Username</label>
					<input type="email" v-model="username" id="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && (!username || !emailvalidation) }" @change="validEmail" />
					<div v-show="submitted && (!username|| !emailvalidation)" class="invalid-feedback">Username is required</div>
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" v-model="password" name="password" id="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
					<div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
				</div>
				<div class="form-group">
					<button class="btn btn-primary">Login</button>&nbsp;
					<a class="btn btn-primary" href="/register">Register</a>
				</div>
			</form>
		</div>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid';
export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false,
            errMsg : '',
            errMsgArr : [],
            emailvalidation : null,
            emailMessage : ''
        }
    },
    created () {
    },
    methods: {
        handleSubmit () {
            this.submitted = true;
            const { username, password } = this;
            if (username && password) {
            const loginUserData = this.userData.filter((item) => {
            return (item.email == this.username && item.password == this.password);
            });
            if(loginUserData.length > 0){
				localStorage.setItem('usersec', uuid.v1());
				this.$router.push('/');
			} else {
				this.errMsgArr = [];
				this.errMsg = 'invalid data';
			}
            }
        },
        validEmail: function () {
			let email = this.username;
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			this.emailvalidation = re.test(email);
			if(!this.emailvalidation){
				this.emailMessage = 'Kindly provide valid email';
			}
		}
    }
};
</script>
<style scoped>
.myForm {
  max-width: 400px;
  margin:auto;
}
</style>
