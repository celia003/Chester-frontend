<template>
  <main class="col-xxl-14 col-xl-13 col-lg-13 col-md-13 col-sm-13 ms-sm-auto px-md-4">
    <div class="d-flex flex-wrap flex-md-nowrap align-items-center pt-2 pb-2">
      <div class="custom_breadcrumb">
        <span class="title_section_page">{{ $t('users') }}</span>
        <ol>
          <li style="display: inline-block;">{{ $t('users') }}</li>
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
                  {{ $t('user_listing') }}
                </span>
              </div>
              <div class="grid-container-header-action-buttons text-left">
                <div class="action_header">
                  <router-link :to="{ name: 'UserAdd'}">
                    <span class="btn btn-title"><i class="bi bi-person-add"></i> {{ $t('new_user') }}</span>
                  </router-link> 
                </div>
              </div>
            </div>
          </div>
          <div class="search_section">
            <div class="input-group input-group-sm search_field">
              <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
              <input type="search" v-on:keyup="pressEnterKey" class="form-control search_textbox" v-model="filterParams.fulltext" placeholder="Search" aria-label="search" aria-describedby="basic-addon1">
            </div>
          </div>
        </section>
      </div>
      <div class="box-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col" style="width:30%">{{ $t('name') }}</th>
              <th scope="col" style="width:25%">{{ $t('username') }}</th>
              <th scope="col" style="width:25%">{{ $t('email') }}</th>
              <th scope="col" style="width:10%">{{ $t('rol') }}</th>
              <th scope="col" style="width:auto">{{ $t('created') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :class="[useRowDeletedStyle(item.is_active), cursorPointer]" @click.stop="goUser(item)">
              <td>{{ item.first_name }} {{item.last_name}}</td>
              <td>{{ item.username }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.role_name }}</td>
              <td>{{ useDateStyles(<string>item.created) }}</td>
            </tr>
            <template v-if="users.length==0">
              <NoResults :colspan="colspan"></NoResults>
            </template>
          </tbody>
        </table>
        <div class="pagination">
          <vue-awesome-paginate v-if="users.length>0"
            :total-items="numResults" 
            v-model="currentPage" 
            :items-per-page="15" 
            :max-pages-shown="3" 
            :on-click="onClickHandler"
          >
        </vue-awesome-paginate>
        </div>
      </div>
    </div>
  </main>
</template>

<!-- <script lang="ts" setup>

  import { defineComponent } from 'vue'
  import axios from 'axios'
  import { useDateStyles, useRowDeletedStyle } from "@/assets/composables/dinamic_styles"
  import { onMounted } from 'vue';

  interface User {
    id: Number,
    username: string,
    first_name: String,
    last_name: string,
    email: string,
    role_name: string,
    created: Date | '',
    is_active: boolean,
    // porom:{ type: String, required: false },
  }

  function f_users(): User{
    return {
      id: 0,
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      role_name: '',
      created: '',
      is_active: false,
    }
  }

  const users = [f_users()];

  // useDateStyles

  // useRowDeletedStyle

  onMounted(() => {
    alert("hola");
      const queryparams = {params: {}};
      axios.get('/api/management/user/list/', queryparams).then(
        (response: any) => {
          if (response){
            debugger
            let user = response.data['results'];
            // users = response.data['results'];
            // (this as any).numResults = response.data['count'];
            // (this as any).numPages = Math.ceil(response.data['count'] / 15);
          }
        }
      )
      .catch((error: any) => {
        console.log(error.toJSON()) 
      });
    console.log("beforeMount hook!");
  });




</script> -->

<!-- <script setup lang="ts">
  import useAddOne from from "@/assets/composables/common"

  const myData = useMouse();
  debugger
</script> -->

<!-- <script setup lang="ts"> -->
  <!-- // import { useMouse, useOnKeyUp } from "@/assets/composables/common"
  // import { ref } from 'vue'
  

  // const { x, y } = useMouse()

  // // const { count, input, isFocused, onKeyup, focus, blur } = useKeyupCounter();

  // const count = ref(0)

  // useOnKeyUp(() => {
  //   count.value += 1
  //   console.log(`Key pressed ${count.value} times`)
  // })

  // return {
  //   count,
  //   input,
  //   isFocused,
  //   onKeyup,
  //   focus,
  //   blur,
  // }; -->
<!-- </script> -->

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
    email: string,
    role_name: string,
    created: Date | '',
    is_active: boolean,
    // porom:{ type: String, required: false },
  }

  function users(): User{
    return {
      id: 0,
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      role_name: '',
      created: '',
      is_active: false,
    }
  }

  function filterParams() {
    return {
      fulltext: '',
    };
  }

  export default defineComponent({
    components: {
      NoResults,
    },
    data() {
      return {
        users: [users()],

        componentKey: 0,
        colspan: 5,

        currentPage: 1,
        numPages: 1,
        numResults: 10,

        filterParams: filterParams(),
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
      async initPage() {
        (this as any).componentKey = 0;
        await GenericProvider.keepConnection((this as any).$axios).then( 
          (response: any ) => {
            console.log("bla bla");
            (this as any).componentKey += 1;
          }
        ).catch((error: any) => {
          console.log(error.toJSON()) 
        });

        (this as any).loadUsers();
      },
      useDateStyles,
      useRowDeletedStyle,
      loadUsers(page=null){
        console.log("ble ble")
        let params = this.$route.query
        if (page){
          params = Object.assign({}, this.$route.query, {page: page});
        }
        // const queryparams = {params: params};
        UserProvider.getUsers((this as any).$axios, params).then( 
          (response: any ) => {
            if (('results' in response.data) && response.data['results'].length>0 ){
              (this as any).users = response.data['results'];
              (this as any).numResults = response.data['count'];
              (this as any).numPages = Math.ceil(response.data['count'] / 15);
            }
          }
        ).catch((error: any) => {
          console.log(error.toJSON()) 
        });
      },
      onClickHandler(page: number){
        (this as any).loadUsers(page)
      },
      applyFilter(){
        this.$router.push({ name: 'Users', query: (this as any).filterParams}).catch((error:any) => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
      },
      goUser(user: any){
        this.$router.push({ name: 'UserDetail', params: {userId: user.id}})
      },
      pressEnterKey(e: KeyboardEvent){
      if (e.key === 'Enter') {
        (this as any).applyFilter();
      }
    },
    },
    watch: {
      '$route.query.fulltext'(newId, oldId) {
        (this as any).loadUsers();
      },
    }
  })
</script>