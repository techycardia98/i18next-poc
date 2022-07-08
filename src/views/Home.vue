<template>
  <div>
    <h1>Interpolation: {{ $t('welcome') }}</h1>
    <h1>Computed: {{ welcome }}</h1>
    <h1>With filter: {{ $t('welcome') | lowercase }}</h1>
    <select @change="onlanguagechange">
      <option value="en">en</option>
      <option value="es">es</option>
    </select>
    <div style="margin-top: 12px">
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
  </div>
</template>

<script>
import HomeApi from "@/api/modules/HomeApi";
export default {
  name: "Home",
  components: {},
  computed: {
    welcome() {
      return this.$t('welcome')
    }
  },
  filters: {
    lowercase(value) {
      if (!value) return ''
      value = value.toString()
      return value.toLowerCase();
    }
  },
  methods: {
    // getDatList(){
    //   HomeApi.getDatList()
    // }
    async onlanguagechange({target}) {
      // await this.$i18next.loadLanguages([target.value]);
      await this.$i18next.changeLanguage(target.value)
    }
  },
};
</script>
