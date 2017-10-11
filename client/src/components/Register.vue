<template>
    <div>
        <h1>Register</h1>
        <input type="email" name="email" id="email" v-model="email" placeholder="Enter email ID"><br>
        <input type="password" name="password" id="password" v-model="password" placeholder="Enter password"><br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
    data () {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async register () {
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            });
            console.log('Registered');
            console.log(response.data);
        }
    }
}
</script>

<style>

</style>
