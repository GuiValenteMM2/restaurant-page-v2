<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'

</script>

<template>
  <header class="container bg-yellow-950 flex min-h-screen">
    <div class="wrapper content-normal flex">
      <div class="heading relative">
        <img src="./assets/images/fogaoalenha2.jpg" alt="forno" class="min-h-screen">
        <h1 class="heading-text object-center z-10 text-white text-5xl absolute w-full bg-yellow-950/60 top-1/3">Forno De Casa</h1>
      </div>
      <div class="content flex">
        <nav class= "space-x-5 text-xl text-cyan-50 divide-x-1 h-28">
          <RouterLink to="/cart"
          >Carrinho</RouterLink>
          <RouterLink to="/"
          >Cardápio</RouterLink>
          <RouterLink to="/about"
          >Sobre nós</RouterLink>
          <RouterLink to="/signup"
          >Cadastre-se</RouterLink>
          <RouterLink to="/contact"
          >Contate-nos</RouterLink>
        </nav>
            </div>
            <RouterView />
      </div>
  </header>
</template>

<style scoped>

</style>
