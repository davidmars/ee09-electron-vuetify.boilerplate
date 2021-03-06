const electron = require('electron');

//const remote = electron.remote;
//const isDevelopment = process.mainModule.filename.indexOf('app.asar') === -1;

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import VueRouter from 'vue-router'
import router from '@/plugins/router'
import Layout from "@/Layout";

/**
 * si true c'est la version online, si false, c'est la version electron
 * @type {boolean}
 */
window.$isWeb=true;
if(typeof __static !== "undefined"){
    window.$isWeb=false;
}
console.log("$isWeb",window.$isWeb);
Vue.prototype.$isWeb = Vue.observable(window.$isWeb);

const $currentWindow=require('electron').remote.getCurrentWindow();
Vue.prototype.$currentWindow = Vue.observable($currentWindow);

/**
 * Là où on stocke pas mal de choses qui influent sur l'affichage
 * @type {Layout}
 */
window.$layout=new Layout();
/**
 *
 * @type {Layout}
 */
Vue.prototype.$layout = Vue.observable(window.$layout);
Vue.prototype.$electron = electron;

if(window.$isWeb){
    window.$releaseUpdater= {};
}else{
    require("./release-updater/$releaseUpdater");
}

require("./ee09/jsonDb.config")

/**
 *
 * @type {ReleaseUpdater}
 */
Vue.prototype.$releaseUpdater = Vue.observable(window.$releaseUpdater);

Vue.config.productionTip = false;
Vue.use(VueRouter);


//traductions et textes d'interface
window.$db.settings.currentLanguage="fr";
Vue.use(VueI18n);
let i18n = new VueI18n({
    locale: window.$db.settings.currentLanguage.code, // set locale
    messages:require("./plugins/texts.json"), // set locale messages
});
window.$db.settings.on("change-current-language",function(){
    i18n.locale = window.$db.settings.currentLanguage.code;
})



new Vue({
    i18n ,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');







