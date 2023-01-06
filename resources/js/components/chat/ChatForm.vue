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
        fetchMessages() {
            axios.get("http://127.0.0.1:8000/messages").then((response) => {
                this.newMessage = "";
            });
        },
       async addMessage() {
            let formData = {};
            formData["message"] = this.newMessage;
            let urlText = "messages";
            formData["id"] = 1;
            let postResponse = await this.post(urlText, formData);
            this.newMessage = "";
        },
    },
};
</script>
