<template>
  <main class="col-xxl-14 col-xl-13 col-lg-13 col-md-13 col-sm-13 ms-sm-auto px-md-4">
    <div class="d-flex flex-wrap flex-md-nowrap align-items-center pt-2 pb-2">
      <div class="custom_breadcrumb">
        <span class="title_section_page">{{ $t('user_edit') }}</span>
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
      <form @submit.prevent="preSaveUser">
      
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
                    <!-- <router-link :to="{ name: 'Users'}">
                      <span class="btn btn-title"><i class="bi bi-arrow-90deg-left b-icon icon-btn-nav "></i> {{ $t('back') }}</span>
                    </router-link> -->
                  </div>
                  <div class="action_header">
                  </div>
                  <div class="action_header" v-if="user.is_active">
                  </div>
                  <div class="action_header" v-else>
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
            <label for="userName" class="col-sm-2 col-form-label">{{ $t('username') }} *</label>
            <div class="col-sm-12">
              <input type="text" autocomplete="off" class="form-control" id="userName" v-model="user.username">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="firstName" class="col-sm-2 col-form-label">{{ $t('name') }} *</label>
            <div class="col-sm-12">
              <input type="text" autocomplete="off" class="form-control" id="firstName" v-model="user.first_name">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="lastName" class="col-sm-2 col-form-label">{{ $t('lastname') }} *</label>
            <div class="col-sm-12">
              <input type="text" autocomplete="off" class="form-control" id="lastName" v-model="user.last_name">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="email" class="col-sm-2 col-form-label">{{ $t('email') }} *</label>
            <div class="col-sm-12">
              <input type="text" autocomplete="off" class="form-control" id="email" v-model="user.email">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="phone" class="col-sm-2 col-form-label">{{ $t('phone') }}</label>
            <div class="col-sm-12">
              <input type="text" autocomplete="off" class="form-control" id="phone" placeholder="0034111111111" v-model="user.phone">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="role" class="col-sm-2 col-form-label">{{ $t('rol') }}</label>
            <div class="col-sm-12">
              <Multiselect
                :closeOnSelect=true
                v-model="user.role_id"
                v-bind="role_selector"
                class="multiselect-sia"
              />
            </div>
          </div>
        </div>
        <div class="box-footer mt-4">
          <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">
              <div class="grid-container-buttons text-left">
                <div class="grid-container-action-buttons text-left">
                  <a>
                    <button type="submit" class="btn btn-action light-blue"><i class="bi bi-check"></i>{{ $t('accept') }}</button>
                  </a>
                  <template v-if="previousPage=='UserDetail'">
                    <router-link :to="{ name: 'UserDetail', params: { userId: $route.params.userId }}">
                      <span class="btn btn-title"><i class="bi bi-arrow-90deg-left"></i> {{ $t('back') }}</span>
                    </router-link>
                  </template>
                  <template v-else>
                    <router-link :to="{ name: 'Users'}">
                      <span class="btn btn-title"><i class="bi bi-arrow-90deg-left"></i> {{ $t('back') }}</span>
                    </router-link>
                  </template>
                </div>
              </div>
            </label>
            <div class="col-sm-12">
              <!-- <div class="alert text-center" :class="message.typeMessage" v-show="message.showMessage">
                {{message.message}}
              </div> -->
            </div>
          </div>
        </div>

      </form>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { storeToRefs } from 'pinia'
  import NoResults from '@/components/common/NoResults.vue'
  import GenericProvider from '@/assets/javascript/providers/GenericProvider'
  import UserProvider from '@/assets/javascript/providers/UserProvider'
  import RoleProvider from '@/assets/javascript/providers/RoleProvider'
  import Validators from '@/assets/javascript/validators/common'
  import { useDateStyles, useRowDeletedStyle } from "@/assets/composables/dinamic_styles"
  import { usePreviousPage } from '@/stores/navigation'
  import Multiselect from '@vueform/multiselect'

  const store_previous_page = usePreviousPage();
  const { previous_page } = storeToRefs(store_previous_page);

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
    roleuser_user: string | null,
    role_id: string | null
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
      roleuser_user: null,
      role_id: null,
    }
  }

  export default defineComponent({
    components: {
      NoResults,
      Multiselect
    },
    data() {
      return {
        user: user(),
        errors: [] as string[],

        componentKey: 0,

        role_selector: {
          value: [],
          options: []
          // value: null,
          // options: [
          //   'Batman',
          //   'Robin',
          //   'Joker',
          // ]
        },
      }
    },
    mounted() {
      (this as any).initPage();
    },
    computed: {
      cursorPointer() {
          return 'cursor-pointer'
      },
      previousPage(){
        return previous_page.value
      }
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

        (this as any).loadContextInfo();

        if ((this as any).$route.params.userId){
          (this as any).loadUser();
        }

      },
      loadContextInfo(){
        RoleProvider.getRoles((this as any).$axios).then(
          (response: any ) => {
            if (response){
              (this as any).roles = response.data;

              let dict = [];
              
              for (let item in (this as any).roles){

                // (this as any).example3.options.push(
                //   {
                //     value: this.roles[item].id,
                //     label: this.roles[item].label,
                //   }
                // )
                dict.push(
                  {
                    value: (this as any).roles[item].id,
                    label: (this as any).roles[item].name,
                  }
                )
              }
              (this as any).role_selector.options = dict
            }
          }
        )
        .catch((error: any) => {
          let errors_keys = [] as string[];
          errors_keys = Object.keys(error.response.data);
          
          (this as any).message.message = errors_keys[0] + ': ' + error.response.data[errors_keys[0]];
          (this as any).message.showMessage = true;
          (this as any).message.typeMessage = 'alert-danger';
        });
      },
      loadUser(){
        UserProvider.getUser((this as any).$axios, (this as any).$route.params.userId).then( 
          (response: any ) => {
            if (response.data){
              (this as any).user = response.data;
            }
          }
        ).catch((error: any) => {
          let errors_keys = [] as string[];
          errors_keys = Object.keys(error.response.data);

          (this as any).showGenericError('Se ha producido un error', errors_keys[0] + ': ' + error.response.data[errors_keys[0]])

          // (this as any).$swal.fire({
          //   toast: true,
          //   position: 'top',
          //   icon: 'error',
          //   title: "Se ha producido un error",
          //   text: errors_keys[0] + ': ' + error.response.data[errors_keys[0]],
          //   showConfirmButton: false,
          //   showCloseButton: true,
          // });
        });
      },
      preSaveUser(){
        this.errors = Validators.saveUser(this.user)
        if (this.errors.length == 0){
          this.saveUser()
        }
        else{
          (this as any).showGenericError('errors.validation_error', (this as any).errors)
        }
      },
      saveUser(){
        if ((this as any).user.id){
          UserProvider.updateUser((this as any).$axios, (this as any).user.id, (this as any).user).then(
            (response: { [key: string]: any[] } ) =>
            {
              (this as any).showGenericToast('errors.validation_error', 'User has been updated')
              (this as any).user = response.data;
            }
          ).catch(
            (error: any) => {
              let errors_keys = [] as string[];
              errors_keys = Object.keys(error.response.data);
  
              (this as any).showGenericError('errors.validation_error', errors_keys[0] + ': ' + error.response.data[errors_keys[0]])
  
            }
          )
        }
        else{
          UserProvider.createUser((this as any).$axios, (this as any).user).then(
            (response: { [key: string]: any[] } ) =>
            {
              (this as any).showGenericToast('errors.validation_error', 'User has been saved')
              (this as any).user = response.data;
            }
          ).catch(
            (error: any) => {
              let errors_keys = [] as string[];
              errors_keys = Object.keys(error.response.data);
  
              (this as any).showGenericError('errors.validation_error', errors_keys[0] + ': ' + error.response.data[errors_keys[0]])
  
            }
          )
        }
      }
    }
  })
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style lang="scss" scoped>
  @import '@/assets/scss/users/users.scss';
</style>