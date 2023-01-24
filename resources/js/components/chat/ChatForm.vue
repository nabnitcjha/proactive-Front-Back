<template>
    <div class="messaging">
        <div class="inbox_msg">
            <div class="mesgs col-12">
                <div class="msg_history">
                    <div class="incoming_msg">
                        <div class="incoming_msg_img">
                            <img
                                src="https://ptetutorials.com/images/user-profile.png"
                                alt="sunil"
                            />
                        </div>
                        <div class="received_msg">
                            <div class="received_withd_msg">
                                <p>
                                    Test which is a new approach to have all
                                    solutions
                                </p>
                                <span class="time_date">
                                    11:01 AM | June 9</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="outgoing_msg">
                        <div class="sent_msg">
                            <p>
                                Test which is a new approach to have all
                                solutions
                            </p>
                            <span class="time_date"> 11:01 AM | June 9</span>
                        </div>
                    </div>
                </div>
                <div class="type_msg">
                    <div class="input_msg_write">
                        <input
                            type="text"
                            class="write_msg"
                            placeholder="Type your message here..."
                            v-model="newMessage"
                            @keyup.enter="addMessage"
                        />
                        <button
                            class="msg_send_btn"
                            type="button"
                            @click="addMessage"
                        >
                            <i class="bi bi-send" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="input-group">
        <input
            id="btn-input"
            type="text"
            name="message"
            class="form-control input-sm"
            placeholder="Type your message here..."
            v-model="newMessage"
            @keyup.enter="addMessage"
        />
        <span class="input-group-btn">
            <button
                class="btn btn-primary btn-sm"
                id="btn-chat"
                @click="addMessage"
            >
                Send
            </button>
        </span>
    </div> -->
</template>
<script>
import { chatInfoStore } from "../../stores/chatInfo";
import { loginInfoStore } from "../../stores/loginInfo";
import { mapState } from "pinia";
export default {
    data() {
        return {
            user_message: [],
            urlText: "",
            friend_id: "",
            my_id: "",
        };
    },
    props: {
        message_type: String,
        current_class_unique_id: String,
    },

    computed: {
        ...mapState(chatInfoStore, ["getMessageInfo"]),
        ...mapState(loginInfoStore, ["getLoginInfo"]),
    },
    mounted() {
        if (this.getLoginInfo.user.role == "teacher") {
            this.my_id = this.getLoginInfo.teacher_info.id;
            this.friend_id = this.$route.params.id;
        } else if (this.getLoginInfo.user.role == "student") {
            this.my_id = this.getLoginInfo.student_info.id;
            this.friend_id = this.$route.params.id;
        } else if (this.getLoginInfo.user.role == "admin") {
            this.my_id = this.getLoginInfo.user.id;
            this.friend_id = this.$route.params.id;
        } else {
            this.my_id = this.getLoginInfo.parent_info.id;
            this.friend_id = this.$route.params.id;
        }
        this.$root.fetchMessages(this.friend_id,this.my_id);
    },
    methods: {
        addMessage() {
            this.urlText = "messages";

            let formData = new FormData();
            if (this.message_type == "group-chat") {
                formData.append(
                    "message_info[class_unique_id]",
                    this.current_class_unique_id
                );
            }
            formData.append("message_info[message]", this.newMessage);
            formData.append("message_info[friend_id]", this.friend_id);
            formData.append("message_info[my_id]", this.my_id);
            formData.append("message_info[message_type]", this.message_type);
            let postResponse = this.post(this.urlText, formData);
            this.newMessage = "";
        },
    },
};
</script>
