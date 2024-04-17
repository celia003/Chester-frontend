<template>
  <div class="home">
    <section id="login">
      <div class="login-white-square medium_square">
        <div class="info_version"><b>{{ app_version }}</b></div>
        <form @submit.prevent="preGeneratePassword">
          <div class="logo_sia">
            <img src="@/assets/logoPrincipal.png" alt="SIA" style="width: 100%;"/>
          </div>

          <input class="mt-0" v-model="$route.params.email" placeholder="Password" maxlength="20" autocomplete="off" aria-describedby="password-feedback" disabled style="opacity:0.5" type="text">
          <input v-model="password" placeholder="Password" maxlength="20" aria-describedby="password-feedback" type="password">
          <input v-model="password_confirmation" placeholder="Repeat password" maxlength="20" aria-describedby="password-feedback" type="password">

          <button type="submit" class="btn login">
            {{$t('send')}}
          </button>
          <div :class="message.typeMessage" v-if="message.message">
            <p style="font-weight: bold;">{{$t(message.message)}}</p>
          </div>
          <span class="select-pointer" @click.stop="goLogin()">
            {{ $t('go_to_login') }}
          </span>
        </form>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  // import AuthService from '../service/auth-service';
  import { inject } from 'vue'
  import axios from 'axios'
  // @ts-ignore
  import Validators from '@/assets/javascript/validators/common.js'

  function infoMessage() {
  return {
    showMessage: false,
    message: '',
    typeMessage: '',
  };
}

  export default {
    name: 'Home',
    data(){
      return{
        password: '',
        password_confirmation: '',
        errors: [] as string[],
        type_message: 'info',
        message: infoMessage(),
        app_version: inject('app_version'),
        // message: '',
        // message_type: "",
        // app_version: inject('app_version')
      }
    },
    mounted(){
      document.title = 'Detect One';

      const element = document.querySelector('body');
      if (element){
        element.setAttribute('class', "login-style");
      }
      // if ((this as any).loggedIn){
      //   (this as any).redirectToHome();
      // }
      // else{
      //   (this as any).$store.dispatch('authMod/logout', true);
      // }
    },

    methods: {
      preGeneratePassword(){
        this.errors = Validators.savePassword(this.password, this.password_confirmation)
        if (this.errors.length == 0){
          this.generatePassword()
        }
        else{
          this.message.message = this.errors[0]
          this.message.typeMessage = 'info-error'
        }
      },
      generatePassword(){
        const data = new FormData()
        data.set('password', this.password)
        data.set('email', (this as any).$route.params.email)
        data.set('token', (this as any).$route.params.token)

        axios.post('/api/management/generate_password/', data).then( (response: any ) => {
          (this as any).message.showMessage = true;
          if (response.status == 406){
            this.message.typeMessage = 'info-error';
          }
          else{
            this.message.typeMessage = 'info'
          }
          // this.message = 'Password updated! Go to Login and register.';
          this.message.message = response.data.message;

        }).catch(
          (err: any) => {
          const errElem = [] as string[]
          if (err.response.data){
            (this as any).message.message = err.response.data.message;
            (this as any).message.showMessage = true;
            (this as any).message.typeMessage = 'info-error';
            // Object.keys(err.response.data).forEach(key=>{
            //   errElem.push(err.response.data[key])
            // })
          }
        })
      },
      goLogin(){
        this.$router.push({ name: 'Login'});
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/login/login.scss';
  input {
    background-image: url('../assets/login-background2.jpg') !important;
    background-repeat: no-repeat !important;
    background-attachment: fixed !important;  
    background-size: cover !important;
  }
 
</style>

<style lang="scss">
  .login-style{
    font-family: "Titillium Web", Avenir, Helvetica, Arial, sans-serif;
    background-image: url('../assets/login-background.jpg') !important;
    background-repeat: no-repeat !important;
    background-attachment: fixed !important;  
    background-size: cover !important;
  }
</style>