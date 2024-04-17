<template>
  <div class="home">
    <section id="login">
      <div class="login-white-square large_square">
        <div class="info_version"><b>{{ app_version }}</b></div>
        <form @submit.prevent="recoverPassword">
          <!--LOGO-->

          <div class="text-left">Instructions to recover password will be sent to the email below</div>

          <input type="email" v-model="email" autocomplete="off" placeholder="email" />
          <button type="submit" class="btn login">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="busy"></span>
            {{$t('send')}}
          </button>
          <span class="select-pointer" @click.stop="goLogin()">
            {{ $t('go_to_login') }}
          </span>
          <div :class="message_type" v-if="message">
            <p><b>{{$t(message)}}</b></p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import { inject } from 'vue'
  import axios from 'axios'

  export default {
    name: 'Home',
    data(){
      return{
        app_version: inject('app_version'),
        busy: false,
        email: '',
        message_type: "",
        message: ''
      }
    },
    mounted(){
      // document.title = 'Detect One';

      // const element = document.querySelector('body');
      // if (element){
      //   element.setAttribute('class', "login-style");
      // }
      // if ((this as any).loggedIn){
      //   (this as any).redirectToHome();
      // }
      // else{
      //   (this as any).$store.dispatch('authMod/logout', true);
      // }
    },
    methods: {
      recoverPassword(){
        (this as any).busy=true;
        const data = new FormData()
        data.set('email', this.email)

        axios.post('/api/management/get_token/', data)
          .then(response => {
            (this as any).busy=false;
            (this as any).message = response.data.message;
            return response;
          });
      },
      goLogin(){
        this.$router.push({ name: 'Login'});
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/scss/login/login.scss';
</style>