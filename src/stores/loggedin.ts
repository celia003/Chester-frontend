import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useIsLoggedIn = defineStore('isLogged', () => {
  const logged = ref(false)

  // function loggedIn(val:boolean) {
  function loggedIn(log: false | true = false) {
    logged.value = log
  }

  return { logged, loggedIn }
}, {persist: true})


export const useToken = defineStore('hasToken', () => {
  const token = ref('')

  // function loggedIn(val:boolean) {
  function saveToken(tk: string = '') {
    // token.value = tk
    localStorage.setItem('token', token.value);
  }

  return { token, saveToken }
}, {persist: true})
