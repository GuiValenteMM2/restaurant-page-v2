<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="container bg-yellow-950 min-h-screen">
    <div class="wrapper content-normal flex gap-4">
      <div class="heading relative">
        <img src="../assets/images/fogaoalenha2.jpg" alt="forno" class="min-h-screen">
        <h1 class="heading-text object-center z-10 text-white text-5xl absolute w-full bg-yellow-950/60 top-1/3">Forno De Casa</h1>
      </div>
      <div class="content flex flex-col">
        <nav class= "space-x-5 text-xl text-cyan-50 divide-x-1 h-28 p-4">
          <RouterLink class="focus:text-yellow-700 " to="/cart"
          >Carrinho</RouterLink>
          <RouterLink class="focus:text-yellow-700" to="/menu"
          >Cardápio</RouterLink>
          <RouterLink class="focus:text-yellow-700" to="/"
          >Sobre nós</RouterLink>
          <RouterLink class="focus:text-yellow-700" to="/signup"
          >Cadastre-se</RouterLink>
          <RouterLink class="focus:text-yellow-700" to="/contact"
          >Contate-nos</RouterLink>
        </nav>
        <RouterView />
            </div>
      </div>
  </header>
</template>

<style lang="scss" scoped>

</style>