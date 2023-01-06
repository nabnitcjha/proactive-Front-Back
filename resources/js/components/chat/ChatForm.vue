<template>
    <div class="input-group">
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
    </div>
</template>
<script>
import { chatInfoStore } from "../../stores/chatInfo";
import { mapActions } from "pinia";
import axios from "axios";
export default {
    props: ["user"],
    data() {
        return {
            newMessage: "",
            message: [],
        };
    },
    methods: {
        ...mapActions(chatInfoStore, ["setMessageInfo"]),

        fetchMessages() {
            let friend_id = 1;
            let my_id = 1;
            urlText =
                "http://127.0.0.1:8000/api/messages" +
                "/" +
                friend_id +
                "/" +
                my_id;
            axios.get("http://127.0.0.1:8000/api/messages").then((response) => {
                this.setMessageInfo(response.data.data)
            });
        },
        async addMessage() {
            let friend_id = 1;
            let my_id = 1;
            let formData = new FormData();
            formData.append("message_info[message]", this.newMessage);
            let urlText = "messages";
            formData.append("message_info[friend_id]", friend_id);
            formData.append("message_info[my_id]", my_id);
            let postResponse = await this.post(urlText, formData);
            this.newMessage = "";
        },
    },
};
</script>
