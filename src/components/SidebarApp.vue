<template>
  <!-- <div class="container-fluid"> -->
    <nav id="sidebarMenu" class="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 d-md-block sidebar collapse">
      <div class="position-sticky pt-4 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="header">
            {{ $t('administration') }}
          </li>
          <li class="nav-item primary-item">
            <router-link :to="{ name: 'Users' }" class="nav-link">
              <i class="bi bi-people" style="margin-right: 5px"></i> <span>{{ $t("users") }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  <!-- </div> -->
</template>
