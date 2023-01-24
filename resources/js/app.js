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
import { loginInfoStore } from './stores/loginInfo';
import { mapActions } from "pinia";

new Vue({
    data() {
        return {
            sender_id: "",
            reciver_id:"",
            urlText: "",
        };
    },
    // message_info:[],
    vuetify,
    components: { Fragment },
    router,
    pinia,

    created() {
        window.Echo.channel("chat").listen("MessageSent", (e) => {
            console.log(e);
            this.fetchMessages(e.messageInfo.friend_id,e.messageInfo.my_id);
        });
    },
    computed: {
        ...mapState(loginInfoStore, ['getLoginInfo']),
      },
      mounted(){
        if (this.getLoginInfo.user.role=='teacher') {
            this.sender_id = this.getLoginInfo.teacher_info.id;
            this.reciver_id = this.$route.params.id;
        }else if (this.getLoginInfo.user.role=='student') {
            this.sender_id = this.getLoginInfo.student_info.id;
            this.reciver_id = this.$route.params.id;
        }else if (this.getLoginInfo.user.role=='admin') {
            this.sender_id = this.getLoginInfo.user.id;
            this.reciver_id = this.$route.params.id;
        }else{
            this.sender_id = this.getLoginInfo.parent_info.id;
            this.reciver_id = this.$route.params.id;
        }
        this.fetchMessages(this.reciver_id,this.sender_id)
      },
    methods: {
        ...mapActions(chatInfoStore, ["setMessageInfo"]),

        changeRoute(route) {
            this.$router.push(route);
        },
        fetchMessages(reciver_id,sender_id) {
            
            urlText =
                "http://127.0.0.1:8000/api/messages" +
                "/" +
                reciver_id +
                "/" +
                sender_id;
            axios.get("http://127.0.0.1:8000/api/messages").then((response) => {
                // this.message_info = response.data.data;
                this.setMessageInfo(response.data.data)
            });
        },
    },
    render: (h) => h(App),
}).$mount(".page-wrapper");
