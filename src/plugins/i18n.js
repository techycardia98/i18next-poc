import Vue from "vue";

// localization packages
import i18next from "i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import I18NextVue from "i18next-vue";

Vue.use(I18NextVue, { i18next });

// can be used to change dependencies locale
i18next.on('languageChanged', function(lng) {})

// can be used to warn if a key is missing
i18next.on('missingKey', function(lngs, namespace, key, res) {
  console.error({lngs, key});
})

// simulate fetch user preference
setTimeout(() => {
  i18next.changeLanguage('en')
}, 3000)


 i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'en',
    preload: ['en'],
    debug: true,
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      // order and from where user language should be detected
      order: ['querystring', 'localStorage'],
      // keys or params to lookup language from
      lookupQuerystring: 'lang',
      // cache user language on
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    }
  })

export default i18next;
