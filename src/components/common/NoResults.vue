<template>
  <tr>
    <td :colspan="colspan">
      <div class="alert alert-info text-center" style="margin:10px 10px">
        <span class="infoText">{{ $t("no_data") }}</span>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
  // props: ['getParams', 'componentKey'];

export default {
  props: {
    colspan: Number,
  },
  setup(props) {
    console.log(props.colspan)
  }
}

</script>