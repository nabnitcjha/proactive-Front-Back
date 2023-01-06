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
export default {
    props: ["user"],
    data() {
        return {
            newMessage: "",
        };
    },
    mounted(){
        this.$root.fetchMessages(1,1);
    },
    methods: {
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
