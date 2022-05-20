<template>
    <div>
        <hr>
        <h1>Forms</h1>
        <form @submit.prevent="postForm()">
            <input v-model="userForm.firstName" id="firstName" type="text" placeholder="First Name">
            <input v-model="userForm.middleName" id="middleName" type="text" placeholder="Middle Name">
            <input v-model="userForm.lastName" id="lastName" type="text" placeholder="Last Name">
            <input v-model="userForm.gender" id="gender" type="text" placeholder="Gender">
            <input v-model="userForm.contact" id="contact" type="text" placeholder="Contact">
            <input v-model="userForm.username" id="username" type="text" placeholder="Username">
            <input v-model="userForm.email" id="email" type="email" placeholder="Email">
            <input value="Submit" type="submit">
        </form>
        <p>Input of Forms</p>
        <p>First Name : {{userForm.firstName}}</p>
        <p>Middle Name : {{userForm.middleName}}</p>
        <p>Last Name : {{userForm.lastName}}</p>
        <p>Gender : {{userForm.gender}}</p>
        <p>Contact : {{userForm.contact}}</p>
        <p>Username : {{userForm.username}}</p>
        <p>Email : {{userForm.email}}</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Forms",
    data() {
        return {
            userForm:{
			firstName: null,
			middleName: null,
			lastName: null,
			gender: null,
			contact: null,
			username: null,
			email: null
		}
        }
    },
    methods: {
        // async postForm() {
        //     let data = await axios.get('http://localhost:3000/data')
        //     alert("Form is Submitted")
        // },

        //ERROR WHEN SUBMITTING, ALERT DOESNT WORK
        postForm() {
            axios.post('http://localhost:3000/data', this.userForm).then(function(res) {
                if(res.status==200){
                    alert("Form is Submitted")
                }
            })
        }
    }
}
</script>
<style lang="">

</style>