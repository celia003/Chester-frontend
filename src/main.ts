import './assets/scss/custom.scss'
import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia'
// @ts-ignore
import App from './App.vue'
import router from './router'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

// import axios from 'axios';
import axiosPlugin from './plugins/axios';
// import axios from 'axios';

import { createI18n } from 'vue-i18n';
// @ts-ignore
import enTranslations from './locales/en';
// @ts-ignore
import esTranslations from './locales/es';
// @ts-ignore
import ptTranslations from './locales/pt';

// @ts-ignore
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "bootstrap/dist/js/bootstrap.min";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import mixins_utils from "@/assets/javascript/mixins-utils"

const app = createApp(App)
app.provide('message', 'hello')
app.provide('app_version', import.meta.env.VITE_APP_VERSION)

// const app_version = import.meta.env.VITE_APP_VERSION

const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

const messages = {
  en: enTranslations,
  es: esTranslations,
  pt: ptTranslations
  // ... other language translations
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

app.use(axiosPlugin);
// app.use(axios);
app.use(pinia);
app.use(router);
app.use(i18n);
app.use(VueAwesomePaginate);
app.use(VueSweetalert2);

app.mixin(mixins_utils)

import { useIsLoggedIn, useToken } from '@/stores/loggedin'
import { usePreviousPage } from '@/stores/navigation'
// import { storeToRefs } from 'pinia'

const store_logged = useIsLoggedIn()
const { logged } = storeToRefs(store_logged)

const store_token = useToken()
const { token } = storeToRefs(store_token)

const store_previous_page = usePreviousPage()
const { previous_page } = storeToRefs(store_previous_page)

const routerNavigationGuard = (to: any, from: any, next: any) => {
  // Save the current navigation page to the state variable
  // store.dispatch('navigationMod/history', from.name);
  previous_page.value = from.name;
  if ((token.value =='' || logged.value == false) && (to.fullPath!=='/' && to.fullPath!=='/recover_password' && to.name!=='GeneratePassword')){
    next({ path: '/' });
  }
  else{
    next();
  }
};

// Register the router navigation guard
router.beforeEach(routerNavigationGuard);

// app.use(axios);
app.mount('#app')
