import Vue from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

// localization packages
import i18next from "i18next";
import I18NextVue from "i18next-vue";
import HttpApi from 'i18next-http-backend';


Vue.config.productionTip = false

Vue.use(I18NextVue, { i18next });

// on i18n init
i18next.on("initialized", () => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount("#app")
});

// can be used to change dependencies locale
i18next.on('languageChanged', function(lng) {})

// can be used to warn if a key is missing
i18next.on('missingKey', function(lngs, namespace, key, res) {
    console.error({lngs, key});
})


i18next
  .use(HttpApi)
  .init({
      lng: 'en',
      fallbackLng: 'en',
      preload: ['en'],
      debug: true,
      backend: {
          // for all available options read the backend's repository readme file
          loadPath: '/locales/{{lng}}.json',
      }
  })
