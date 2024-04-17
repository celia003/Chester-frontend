import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const usePreviousPage = defineStore('previousPage', () => {
  const previous_page = ref('')

  // function loggedIn(val:boolean) {
  function previousPage(prev_pg: string = '') {
    previous_page.value = prev_pg
  }

  return { previous_page, previousPage }
}, {persist: true})
