require("./bootstrap");
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import connectAPI from "./connectAPI";
import momentMethod from "./momentMethod";
import moment from "moment";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import '@mdi/font/css/materialdesignicons.css'

import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

// import Vuetify from 'vuetify'

import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";

// common component
import DeleteModal from "./components/common/DeleteModal.vue";
import ClassSchedule from "./components/form/ClassSchedule.vue";
import SlotCalendar from "./components/calendar/Calendar.vue";

import ChatForm from "./components/chat/ChatForm.vue";

// Install VeeValidate components globally

Vue.component("multiselect", Multiselect);
Vue.component("date-picker", DatePicker);
Vue.component("delete-modal", DeleteModal);
Vue.component("class-schedule", ClassSchedule);
Vue.component("slot-calendar", SlotCalendar);
Vue.component("chat-form", ChatForm);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Fragment from "vue-fragment";
import { Plugin } from "vue-fragment";
import { createPinia, PiniaVuePlugin } from "pinia";
import piniaPersist from "pinia-plugin-persist";

// Choose Locale
moment.locale("en");

Vue.use(PiniaVuePlugin);
const pinia = createPinia();
pinia.use(piniaPersist);

Vue.use({ moment });
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Fragment.Plugin);
Vue.use(Plugin);
Vue.use(axios);
Vue.mixin(connectAPI);
Vue.mixin(momentMethod);
// Vue.use(Vuetify)

import { chatInfoStore } from "./stores/chatInfo";
import { mapActions } from "pinia";

new Vue({
    vuetify,
    components: { Fragment },
    router,
    pinia,

    created() {
        window.Echo.channel("chat").listen("MessageSent", (e) => {
            console.log(e);
            this.setMessageInfo(e.messageInfo)
        });
    },
    methods: {
        ...mapActions(chatInfoStore, ["setMessageInfo"]),

        changeRoute(route) {
            this.$router.push(route);
        },
        
    },
    render: (h) => h(App),
}).$mount(".page-wrapper");
