
<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <a class="navbar-brand" href="#">
      
      <!-- <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 538.58 141.73">
        <g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1-2"><path class="cls-1" d="M80.11,37.2a5,5,0,0,0-5,5.06V88.49a4.84,4.84,0,0,0,1.5,3.6,4.68,4.68,0,0,0,3.55,1.5,4.86,4.86,0,0,0,3.61-1.5,5.06,5.06,0,0,0,1.45-3.6V42.26a5,5,0,0,0-4.86-5.06Z"/><path class="cls-1" d="M157.83,92a4.8,4.8,0,0,0,3.59,1.5A4.69,4.69,0,0,0,165,92a5,5,0,0,0,1.5-3.64v-23a27.78,27.78,0,0,0-47.12-20.21l-.28.28a27.44,27.44,0,0,0-8.15,19.91,27.48,27.48,0,0,0,8.15,19.91c5.85,5.92,12.45,8.7,19.63,8.26,3.81-.24,6.25-.5,8.2-1.33A5.23,5.23,0,0,0,150,89.46a5.07,5.07,0,0,0-2.31-6.59,5,5,0,0,0-3.72-.34,14.5,14.5,0,0,1-5.27.77,17,17,0,0,1-12.53-5.23A17.51,17.51,0,0,1,121,65.38a17.72,17.72,0,0,1,29.86-13l.35.36a17.3,17.3,0,0,1,5.21,12.63v23A5.09,5.09,0,0,0,157.83,92Z"/><path class="cls-2" d="M44.84,46.6a4.53,4.53,0,0,1-3.9,2.6c-2.16.12-3.5-1.3-8.5-2.27-6.71-1.3-16.94-1.42-19.13,4.27a5.35,5.35,0,0,0,1,5.45c1.44,1.5,4.59,2.12,7.08,2.72C29.14,61.24,38.3,62,43.93,65.9c3.35,2.35,5.82,5.66,5.36,12C48,96.51,19,96.47,4.63,88.66a4.73,4.73,0,0,1-2-2.27,4.51,4.51,0,0,1,5.91-5.8,63.29,63.29,0,0,0,8.68,2.73c7,1.55,19,2.29,21.46-3.92,2.57-6.5-5.13-8.08-9.5-9-8.29-1.83-16.69-2.16-22.2-7A11.72,11.72,0,0,1,2.73,53.05,15.29,15.29,0,0,1,9.59,41.5c8.5-5.84,26.38-5.36,34.11-.25A3.87,3.87,0,0,1,45,43.06,4.62,4.62,0,0,1,44.84,46.6Z"/><circle class="cls-3" cx="192.09" cy="42.28" r="5.05"/><circle class="cls-3" cx="212.31" cy="42.28" r="5.05"/><circle class="cls-3" cx="232.54" cy="42.28" r="5.05"/></g></g><text class="cls-4" transform="translate(324.86 96.08)">An Ind<tspan class="cls-5" x="75.04" y="0">r</tspan><tspan x="84.42" y="0">a </tspan><tspan class="cls-6" x="103.56" y="0">c</tspan><tspan x="115.57" y="0">ompa</tspan><tspan class="cls-7" x="182.05" y="0">n</tspan><tspan x="196.9" y="0">y</tspan></text></svg> -->
      <span class="title_app" style="">CHESTER</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
        <li class="nav-item col-6 col-md-auto ms-3">
          <div class="dropdown">
            <i class="bi bi-building m-3 cursor-pointer icon_main_navbar" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>
            <span style="font-size: 1rem; opacity: 0.8"> </span>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-navbar">
              <li><span class="dropdown-header">{{ $t('companies') }}</span></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li style="margin-bottom: 5px;">
                <div class="search_section">
                  <div class="input-group input-group-sm search_field" style="display: grid; ">
                    <!-- <span class="input-group-text" id="basic-addon1" style="margin: 0px 5px!important; border-right: 1px solid #ced4da !important;">
                      <i class="bi bi-search"></i>
                      <input class="form-control search_textbox_basic" type="text" style="border: unset!important; background-color: unset!important; font-size: 0.9rem!important; padding: 0.2rem 1rem!important;" id="myCompany" @keyup="filterCompanies" placeholder="Search for companies..." title="Type in a name" v-model="filterCompany">
                    </span> -->
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item col-6 col-md-auto ms-3">
          <div class="dropdown">
            <i class="bi bi-translate m-3 cursor-pointer icon_main_navbar" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>
            <!-- <span style="font-size: 1rem; opacity: 0.8"> </span> -->
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-navbar">
              <li><span class="dropdown-header">{{ $t('language') }}</span></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" @click.stop="changeLanguage('en')">
                  <span style="cursor: pointer" :class="[{ bold_text: locale == 'en' }]"><span class="fi fi-gb"></span> {{
                    $t("english") }}</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" @click.stop="changeLanguage('es')">
                  <span style="cursor: pointer" :class="[{ bold_text: locale == 'es' }]"><span class="fi fi-es"></span> {{
                    $t("spanish") }}</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" @click.stop="changeLanguage('pt')">
                  <span style="cursor: pointer" :class="[{ bold_text: locale == 'pt' }]"><span class="fi fi-pt"></span> {{
                    $t("portuguese") }}</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item col-6 col-md-auto ms-3">
          <div class="dropdown">
            <i class="bi bi-info-circle m-3 cursor-pointer icon_main_navbar" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-navbar">
              <li>
                  <span class="dropdown-header">{{ app_version }}</span>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item">
                  <span style="cursor: pointer"><i class="bi bi-calendar2-range"></i> {{ $t("version_history") }}</span>
                </a>
                <!-- <router-link :to="{name: 'Version'}">
                </router-link> -->
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item col-6 col-md-auto ms-3 me-2">
          <div class="dropdown">
            <i class="bi bi-person-circle m-3 cursor-pointer icon_main_navbar" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>
            <span style="font-size: 1rem; opacity: 0.8"> </span>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-navbar">
              <li><span class="dropdown-header">{{ $t('actions') }}</span></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item">Celia Sanchidrán</a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#changePassword"><i class="bi bi-arrow-clockwise"></i> {{ $t('change_password') }}</a>
                <a class="dropdown-item" style="cursor: pointer" @click="logout()"><i class="bi bi-box-arrow-right"></i> {{ $t('logout') }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <!-- <a class="btn btn-bd-download d-lg-inline-block my-2 my-md-0 ms-md-3" href="/docs/5.0/getting-started/download/">Download</a> -->
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  import { useIsLoggedIn, useToken } from '@/stores/loggedin'
  import { storeToRefs } from 'pinia'
  import { useI18n } from "vue-i18n";

  const { t, locale } = useI18n();
  const app_version = inject('app_version')

  const store_logged = useIsLoggedIn()
  const { logged } = storeToRefs(store_logged)

  const store_token = useToken()
  const { token } = storeToRefs(store_token)

  function logout() {
    logged.value = false;
    token.value = '';
  }

  // const { t, locale } = useI18n();

  const changeLanguage = (newLocale: any) => {
    locale.value = newLocale; // Cambia al idioma seleccionado
    // showLanguageMenu.value = false; // Oculta el menú desplegable después de la selección
  };

</script>