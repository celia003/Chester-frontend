<template>
  <main class="col-xxl-14 col-xl-13 col-lg-13 col-md-13 col-sm-13 ms-sm-auto px-md-4">
    <div class="d-flex flex-wrap flex-md-nowrap align-items-center pt-2 pb-2">
      <div class="custom_breadcrumb">
        <span class="title_section_page">{{ $t('user_detail') }}</span>
        <ol>
          <li>
            <router-link :to="{name: 'Users'}">
              <span class="breadcrumb_decoration module-active">
                {{ $t("users") }}
              </span>
            </router-link>
            ><span style="padding-left:5px" v-if="user.username">{{ user.username }}</span>
          </li>
        </ol>
      </div>
    </div>

    <div class="box box-content wos">
      <div class="box-header">
        <section class="header_content">
          <div>
            <div class="title_header">
              <div>
                <span class="title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-people border border-info icon-rounded p-1" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                  </svg>
                  {{ $t('user') }}
                </span>
              </div>
              <div class="grid-container-header-action-buttons text-left">
                <div class="action_header">
                  <router-link :to="{ name: 'Users'}">
                    <span class="btn btn-title"><i class="bi bi-arrow-90deg-left b-icon icon-btn-nav "></i> {{ $t('back') }}</span>
                  </router-link>
                </div>
                <div class="action_header">
                  <router-link :to="{ name: 'UserEdit', params: { userId: $route.params.userId }}">
                    <span class="btn btn-action light-blue"><i class="bi bi-pencil"></i> {{ $t('edit') }}</span>
                  </router-link>
                </div>
                <div class="action_header" v-if="user.is_active">
                  <span class="btn btn-action red" @click="inactivateUser()"><i class="bi bi-trash"></i> {{ $t('delete') }}</span>
                </div>
                <div class="action_header" v-else>
                  <span class="btn btn-action light-blue" @click="activateUser()"><i class="bi bi-activity"></i> {{ $t('activate') }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="search_section">
          </div>
        </section>
      </div>
      <div class="box-body mt-4">
        <div class="mb-3 row">
          <label for="userName" class="col-sm-2 col-form-label">{{ $t('username') }}</label>
          <div class="col-sm-12">
            <input type="text" readonly class="form-control" id="userName" :value="user.username">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="firstName" class="col-sm-2 col-form-label">{{ $t('name') }}</label>
          <div class="col-sm-12">
            <input type="text" readonly class="form-control" id="firstName" :value="user.first_name">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="lastName" class="col-sm-2 col-form-label">{{ $t('lastname') }}</label>
          <div class="col-sm-12">
            <input type="text" readonly class="form-control" id="lastName" :value="user.last_name">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="email" class="col-sm-2 col-form-label">{{ $t('email') }}</label>
          <div class="col-sm-12">
            <input type="text" readonly class="form-control" id="email" :value="user.email">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="phone" class="col-sm-2 col-form-label">{{ $t('phone') }}</label>
          <div class="col-sm-12">
            <input type="text" readonly class="form-control" id="phone" :value="user.phone">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="role" class="col-sm-2 col-form-label">{{ $t('rol') }}</label>
          <div class="col-sm-12">
            <input type="text" readonly class="form-control" id="role" :value="user.role_name">
          </div>
        </div>
      </div>
      <div class="box-footer"></div>
    </div>
  </main>
</template>

<script lang="ts">

  import { defineComponent } from 'vue'
  import GenericProvider from '@/assets/javascript/providers/GenericProvider'
  import UserProvider from '@/assets/javascript/providers/UserProvider'
  import NoResults from '@/components/common/NoResults.vue'
  import { useDateStyles, useRowDeletedStyle } from "@/assets/composables/dinamic_styles"

  interface User {
    id: Number,
    username: string,
    first_name: String,
    last_name: string,
    phone: string,
    email: string,
    role_name: string,
    created: Date | '',
    is_active: boolean,
  }

  function user(): User{
    return {
      id: 0,
      username: '',
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      role_name: '',
      created: '',
      is_active: false,
    }
  }

  export default defineComponent({
    components: {
      NoResults,
    },
    data() {
      return {
        user: user(),

        componentKey: 0,
        colspan: 5,

        currentPage: 1,
        numPages: 1,
        numResults: 10,
      }
    },
    mounted() {
      (this as any).initPage();
    },
    computed: {
      cursorPointer() {
          return 'cursor-pointer'
      },
    },
    methods: {
      useDateStyles,
      useRowDeletedStyle,
      async initPage() {
        (this as any).componentKey = 0;
        await GenericProvider.keepConnection((this as any).$axios).then( 
          (response: any ) => {
            (this as any).componentKey += 1;
          }
        ).catch((error: any) => {
          console.log(error.toJSON()) 
        });

        (this as any).loadUser();
      },
      loadUser(){
        UserProvider.getUser((this as any).$axios, (this as any).$route.params.userId).then( 
          (response: any ) => {
            if (response.data){
              (this as any).user = response.data;
            }
          }
        ).catch((error: any) => {
          // console.log(error.toJSON()) 
          // debugger
          let errors_keys = [] as string[];
          errors_keys = Object.keys(error.response.data);

          (this as any).$swal.fire({
            toast: true,
            position: 'top',
            icon: 'error',
            title: "Se ha producido un error",
            text: errors_keys[0] + ': ' + error.response.data[errors_keys[0]],
            showConfirmButton: false,
            showCloseButton: true,
          });
        });
      },
      inactivateUser(){
        (this as any).$swal.fire({
          icon: 'question',
          title: this.$t('question_delete_user'),
          text: this.$t('user_not_accesible'),
          width: 600,
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonText: 'Delete',
        }).then((result: any) => {
          if (result.value){
            this.updateUserStatus(false);
          }
        });
      },
      activateUser(){
        (this as any).$swal.fire({
          icon: 'info',
          title: 'Dow you want to activate selected user?',
          text: 'User will be active again with previous permissions',
          width: 600,
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonText: 'Activate',
        }).then((result: any) => {
          if (result.value){
            this.updateUserStatus(true);
          }
        });
      },
      updateUserStatus(item: boolean){
        UserProvider.updateUserStatus((this as any).$axios, (this as any).$route.params.userId, {is_active: item}).then( 
          (response: any ) => {
            (this as any).$swal.fire({
              toast: true,
              position: 'top',
              icon: 'success',
              title: 'User has been modified',
              text: 'User has been modified successfully',
              showConfirmButton: false,
              timer: 2500
            });
            (this as any).loadUser()
          }
        ).catch((error: any) => {
          let errors_keys = [] as string[];
          errors_keys = Object.keys(error.response.data);

          (this as any).showGenericError('title_emdr_malicious_activity', errors_keys[0] + ': ' + error.response.data[errors_keys[0]])
        });
      }
    }
  })
</script>

<style lang="scss" scoped>
  .grid-container-header-action-buttons{
    text-align: left;
    display: grid; 
    grid-gap: 10px; 
    grid-template-columns: auto auto 1fr; 
    margin-left: 10px!important;
  }

  .form-control:focus {
    box-shadow: unset!important;
    border: 1px solid #ced4da !important;
  }

</style>