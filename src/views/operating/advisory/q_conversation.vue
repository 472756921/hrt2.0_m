<template>
    <div class="conversation_content">
        <conversation :messageID="messageID" :listType="listType"/>
    </div>
</template>

<script>
    import conversation from '../conversation/conversation';

    export default {
        name: 'q_conversation',
        components: {conversation},
        props: ['listType', 'messageID'],
        created () {
        },
        methods: {
            showIMG () {
            }
        }
    };
</script>

<style scoped>
    .conversation_content{
        width: 100%;
        border: 1px solid #eee;
        box-shadow: 0 3px 10px 0 #eee;
    }
</style>
