<script setup lang="ts">

import GuestLayout from "../components/GuestLayout.vue";
</script>



  <template>
    <div class="container">
      <div class="logo-container">
        <img class="logo" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="title">Sign in to your account</h2>
      </div>

      <div class="form-container">
        <form class="login-form" action="#" method="POST">
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <a href="#" class="forgot-password">Forgot password?</a>
            <input type="password" name="password" id="password" required />
          </div>

          <button type="submit" class="submit-btn">Sign in</button>
        </form>

        <p class="register">
          Not a member?
          <RouterLink :to="{name: 'Signup'}">Create an account</RouterLink>
        </p>
      </div>
    </div>



</template>


<style scoped src="../pages/login.css"></style>




