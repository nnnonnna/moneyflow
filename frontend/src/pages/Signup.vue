<script setup lang="ts">
import axiosClient from '@/axiosClient'; // Adjust path as needed

import GuestLayout from "../components/GuestLayout.vue";
import {ref} from "vue";
const data = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',

})

function submit(){
  axiosClient.post("/register", data)
}
</script>

<template>
  <div class="container">
    <div class="logo-container">
      <img class="logo" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="title">Create new account</h2>
    </div>

    <div class="form-container">
      <form @submit.prevent="submit" class="login-form"  >
<!--        for full name-->
        <div class="form-group">
          <label for="fullname">Full Name</label>
          <input type="text" name="fullname" id="fullname" required v-model="data.name" />
        </div>

<!--        for email-->
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" name="email" id="email" required v-model="data.email"/>
        </div>

<!--        for password-->
        <div class="form-group">
          <label for="password">Password</label>

          <input type="password"
                 name="password"
                 id="password" required
          v-model="data.password"/>
        </div>
<!--           for repeating password-->
        <div class="form-group">
          <label for="repeat-password">Repeat Password</label>
          <input type="RepeatPassword" name="RepeatPassword" id="RepeatPassword" required v-model="data.password_confirmation" />
        </div>

        <button type="submit" class="submit-btn">Create an account</button>
      </form>

      <p class="register">
        Already have an account?
        <RouterLink :to="{name: 'Login'}"> Login from here </RouterLink>
      </p>
    </div>
  </div>



</template>

<style scoped src="../pages/login.css"></style>