<script setup lang="ts">

</script>
<template>
  <div class="layout">
    <nav class="navbar">
      <div class="navbar-left">
        <img class="logo" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" />
        <div class="nav-links">
          <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="{ active: item.current }"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
      <div class="navbar-right">
        <button class="notification-btn">🔔</button>
        <div class="profile-menu">
          <img class="avatar" :src="user.imageUrl" alt="User avatar" />
          <div class="dropdown">
            <a v-for="item in userNavigation" :key="item.name" :href="item.href">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </nav>

    <header class="page-header">
      <h1>Dashboard</h1>
    </header>

    <main class="main-content">
      <!-- Your content goes here -->
      Home
    </main>
  </div>
</template>

<script setup>
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Upload', to:{name: 'Home'}},
  { name: 'My Images', to:{name: 'MyImages'}},

]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
</script>

<style scoped src="./home.css"></style>

