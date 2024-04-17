<template>
  <template v-if="logged">
    <div class="container-fluid px-0">
      <NavBar></NavBar>
      <SideBar></SideBar>
    </div>
  </template>
  <RouterView />
</template>

<script setup lang="ts">

  import { defineComponent, computed, watch, provide } from 'vue';

  import { useRoute, RouterLink, RouterView } from 'vue-router'
  import NavBar from './components/NavbarApp.vue'
  import SideBar from './components/SidebarApp.vue'

  import { useIsLoggedIn } from '@/stores/loggedin'
  import { storeToRefs } from 'pinia'

  import router from "@/router";

  const route = useRoute();
  const store_logged = useIsLoggedIn()

  provide('porom', 'pompero')

  const { logged } = storeToRefs(store_logged)

  function logout() {
    logged.value = false
  }

  watch(() => route.name, () => {
    const element = document.querySelector('body');
    // if (route.name == "Login"){
    if (['Login', 'RecoverPassword'].includes(String(route.name))){
      if (element){
        element.setAttribute('class', "login-style");
      }
    }
    else{
      if (element){
        element.setAttribute('class', "");
      }
    }
    console.log(`MyCoolComponent - watch route.name changed to ${String(route.name)}`);
  // Optionally you can set immediate: true config for the watcher to run on init
  //}, { immediate: true });
  });

  watch(() => logged.value, () => {
    // if (route.name == "Login"){
    if (logged.value == false){
      // this.$router.push({ name: 'Login'});
      router.push({ name: 'Login'});
    }
    // console.log(`MyCoolComponent - watch route.name changed to ${String(route.name)}`);
  // Optionally you can set immediate: true config for the watcher to run on init
  //}, { immediate: true });
  }, { immediate: true });


</script>
