import Vue from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import i18next from "@/plugins/i18n.js";

Vue.config.productionTip = false

// on i18n init
i18next.on("initialized", () => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app")
});
