<template>
  <div class="home">
    <section id="login">
      <div class="login-white-square" :class="{ large_square: show_code_section, medium_square: !show_code_section }">
        <div class="info_version"><b>{{ app_version }}</b></div>
        <form @submit.prevent="login">

          
          <div class="logo_sia">
            <img src="@/assets/logoPrincipal.png" style="width: 100%;" alt="SIA" />
          </div>
          <input type="text" class="mt-0" v-model="username" autocomplete="off" name="username" placeholder="Username" />
          <input type="password" v-model="password" autocomplete="off" name="password" maxlength="40" placeholder="Password" />
          <template v-if="!show_code_section">
            <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; text-align: left!important;">
              <button class="btn" @click.prevent="auth_selection=1;" :class="[auth_selection==1 ? 'auth-selected' : 'auth-unselected']">
                <span class="border-sm" role="status" aria-hidden="true"><i class="bi bi-envelope"></i> Access token via email</span>
              </button>
              <button class="btn" @click.prevent="auth_selection=2;" :class="[auth_selection==2 ? 'auth-selected' : 'auth-unselected']">
                <span class="border-sm" role="status" aria-hidden="true"><i class="bi bi-chat-left"></i> Access token via SMS</span>
              </button>
            </div>
            <button type="submit" class="btn login">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="busy"></span>
              {{ $t('login') }}
            </button>
          </template>
          <template v-else>
            <div class="info-section">
              {{ $t('check_your_inbox') }}
            </div>
          </template>
          <template v-if="show_code_section">
            <input type="text" v-model="validation_code" placeholder="Access Code" maxlength="50" aria-describedby="code-feedback" :style="{'opacity': show_code_section ? 1: 0.5}">
            <button type="button" class="btn login" @click="validateCode" v-if="show_code_section">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="busy"></span>
              {{ $t('validate_code') }}
            </button>
          </template>

          <span class="select-pointer" @click.stop="getToken()">{{ $t('forgot_password') }}</span>
          <div class="info-error" v-if="message">
            <p>{{ $t(message) }}</p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

  import { useIsLoggedIn, useToken } from '@/stores/loggedin'
  import { storeToRefs } from 'pinia'
  import { ref, inject } from 'vue'
  import router from "@/router";
  import axios from 'axios'

  const show_code_section = ref(false)
  const auth_selection = ref(1)
  const busy = ref(false)
  const username = ref('')
  const password = ref('')
  const validation_code = ref('')
  const message = ref('')
  const test = inject('message')
  const porom = inject('porom')
  const app_version = inject('app_version')

  const store_logged = useIsLoggedIn()
  const { logged } = storeToRefs(store_logged)

  const store_token = useToken()
  const { token } = storeToRefs(store_token)

  const login = () => {
    const user = {username: username.value, password: password.value, auth_selection: auth_selection.value};

    busy.value=true;
    message.value = '';

    axios.post('/api/management/access/', user).then(
      (response: any) => {
        if (response.data.message){
          if (response.data.message == 'credentials_incorrect' || response.data.message == "something_wrong" || response.message == "contact_phone_invalid"){
            message.value = response.data.message;
          }else{
            show_code_section.value=true;
          }
          busy.value=false;
        }
        else {
          logged.value = true;
          token.value = response.data.token;
          router.push({name: "Users"});
        }
      }
    )
    .catch((error: any) => {
      logged.value = false;
      token.value = '';
      // let errors_keys = [] as string[];
      // errors_keys = Object.keys(error.response.data);
      
      // (this as any).message.message = errors_keys[0] + ': ' + error.response.data[errors_keys[0]];
      // (this as any).message.showMessage = true;
      // (this as any).message.typeMessage = 'alert-danger';
      busy.value=false;
      console.log(error.toJSON()) 
    });
  }

  function getToken(){
    router.push({ name: 'RecoverPassword'});
  }

  function validateCode(){
    const user = {username: username.value, password: password.value, token: validation_code.value};
    axios.post('/api/management/validate2FA/', user).then(
      (response: any) => {
        debugger
        if (response.data.message){
          if (response.data.message == 'credentials_incorrect' || response.data.message == "something_wrong"){
            message.value = response.data.message;
          }else{
            show_code_section.value=true;
          }
          busy.value=false;
        }
        else {
          logged.value = true;
          token.value = response.data.token;
          router.push({name: "users"});
        }
      }
    )
    .catch((error: any) => {
      logged.value = false;
      token.value = '';
      // let errors_keys = [] as string[];
      // errors_keys = Object.keys(error.response.data);
      
      // (this as any).message.message = errors_keys[0] + ': ' + error.response.data[errors_keys[0]];
      // (this as any).message.showMessage = true;
      // (this as any).message.typeMessage = 'alert-danger';
      busy.value=false;
      console.log(error.toJSON()) 
    });  }

</script>

<!-- <script lang="ts">
import { inject } from 'vue'

export default {
  name: 'Home',
  data() {
    return {
      username: '',
      password: '',
      show_code_section: false,
      validation_code: '',
      companyIdSelected: 1,

      loading_login: false,
      loading_acces_code: false,

      test: inject('message'),

      message: '',
      busy: false,
      timeout: null,
      det1_version: import.meta.env.VITE_APP_VERSION
    }
  },
  methods: {
    login() {
      alert("hola");
    },
    validateCode(){
      console.debug("hola")
    }
  }
} 
</script>-->

<style scoped lang="scss">
  @import '@/assets/scss/login/login.scss';
</style>